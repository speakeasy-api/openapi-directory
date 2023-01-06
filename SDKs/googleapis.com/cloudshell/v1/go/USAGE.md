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
    
    req := operations.CloudshellOperationsCancelRequest{
        Security: operations.CloudshellOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudshellOperationsCancelPathParams{
            Name: "recusandae",
        },
        QueryParams: operations.CloudshellOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "ad",
            Alt: "json",
            Callback: "labore",
            Fields: "omnis",
            Key: "sequi",
            OauthToken: "velit",
            PrettyPrint: false,
            QuotaUser: "repellendus",
            UploadType: "rerum",
            UploadProtocol: "illo",
        },
        Request: map[string]interface{}{
            "ad": "rem",
        },
    }
    
    res, err := s.Operations.CloudshellOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->