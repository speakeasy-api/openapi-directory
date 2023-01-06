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
    
    req := operations.RuntimeconfigOperationsCancelRequest{
        Security: operations.RuntimeconfigOperationsCancelSecurity{
            Option1: &operations.RuntimeconfigOperationsCancelSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.RuntimeconfigOperationsCancelPathParams{
            Name: "consectetur",
        },
        QueryParams: operations.RuntimeconfigOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "eaque",
            Alt: "media",
            Callback: "laudantium",
            Fields: "qui",
            Key: "alias",
            OauthToken: "a",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "et",
            UploadProtocol: "ut",
        },
        Request: map[string]interface{}{
            "repellat": "vel",
        },
    }
    
    res, err := s.Operations.RuntimeconfigOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->