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
        Security: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "suscipit",
            Params: map[string]interface{}{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->