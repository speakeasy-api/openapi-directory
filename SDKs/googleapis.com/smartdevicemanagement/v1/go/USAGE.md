<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Name: "facilis",
        },
        QueryParams: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams{
            DollarXgafv: "2",
            AccessToken: "vero",
            Alt: "media",
            Callback: "quia",
            Fields: "dolorem",
            Key: "et",
            OauthToken: "doloremque",
            PrettyPrint: false,
            QuotaUser: "delectus",
            UploadType: "nemo",
            UploadProtocol: "consequatur",
        },
        Request: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "laudantium",
            Params: map[string]interface{}{
                "earum": "est",
            },
        },
    }
    
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->