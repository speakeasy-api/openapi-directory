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
            Name: "unde",
        },
        QueryParams: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "eum",
            Params: map[string]interface{}{
                "ullam": "saepe",
                "inventore": "sapiente",
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