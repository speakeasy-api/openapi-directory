<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest{
        DollarXgafv: "2",
        GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "provident",
            Params: map[string]interface{}{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        Name: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, req, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity{
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