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