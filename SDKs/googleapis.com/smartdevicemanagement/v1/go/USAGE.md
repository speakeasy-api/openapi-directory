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
            Name: "sit",
        },
        QueryParams: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "dicta",
            Params: map[string]interface{}{
                "voluptatum": "et",
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