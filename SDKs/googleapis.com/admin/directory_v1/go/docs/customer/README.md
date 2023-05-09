# Customer

### Available Operations

* [AdminCustomerDevicesChromeosCommandsGet](#admincustomerdeviceschromeoscommandsget) - Gets command data a specific command issued to the device.
* [AdminCustomerDevicesChromeosIssueCommand](#admincustomerdeviceschromeosissuecommand) - Issues a command for the device to execute.

## AdminCustomerDevicesChromeosCommandsGet

Gets command data a specific command issued to the device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customer.AdminCustomerDevicesChromeosCommandsGet(ctx, operations.AdminCustomerDevicesChromeosCommandsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("incidunt"),
        CommandID: "atque",
        CustomerID: "explicabo",
        DeviceID: "minima",
        Fields: sdk.String("nisi"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.AdminCustomerDevicesChromeosCommandsGetSecurity{
        Option1: &operations.AdminCustomerDevicesChromeosCommandsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectoryChromeosdevicesCommand != nil {
        // handle response
    }
}
```

## AdminCustomerDevicesChromeosIssueCommand

Issues a command for the device to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customer.AdminCustomerDevicesChromeosIssueCommand(ctx, operations.AdminCustomerDevicesChromeosIssueCommandRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DirectoryChromeosdevicesIssueCommandRequest: &shared.DirectoryChromeosdevicesIssueCommandRequest{
            CommandType: shared.DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumWipeUsers.ToPointer(),
            Payload: sdk.String("atque"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        CustomerID: "accusamus",
        DeviceID: "veritatis",
        Fields: sdk.String("esse"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AdminCustomerDevicesChromeosIssueCommandSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectoryChromeosdevicesIssueCommandResponse != nil {
        // handle response
    }
}
```
