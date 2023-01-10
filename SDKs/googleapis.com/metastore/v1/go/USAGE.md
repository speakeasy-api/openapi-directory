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
    
    req := operations.MetastoreOperationsCancelRequest{
        Security: operations.MetastoreOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MetastoreOperationsCancelPathParams{
            Name: "quia",
        },
        QueryParams: operations.MetastoreOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "cum",
            Alt: "proto",
            Callback: "veniam",
            Fields: "ipsum",
            Key: "harum",
            OauthToken: "aut",
            PrettyPrint: true,
            QuotaUser: "ipsum",
            UploadType: "est",
            UploadProtocol: "dolorem",
        },
        Request: map[string]interface{}{
            "molestiae": "nam",
            "eius": "earum",
        },
    }
    
    res, err := s.Operations.MetastoreOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->