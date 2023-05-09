# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/smartdevicemanagement/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: sdk.String("provident"),
            Params: map[string]interface{}{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        Name: "Larry Windler",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Enterprises](docs/enterprises/README.md)

* [SmartdevicemanagementEnterprisesDevicesExecuteCommand](docs/enterprises/README.md#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [SmartdevicemanagementEnterprisesDevicesList](docs/enterprises/README.md#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresRoomsGet](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresRoomsList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
