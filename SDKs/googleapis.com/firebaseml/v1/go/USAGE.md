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
    
    req := operations.FirebasemlOperationsCancelRequest{
        Security: operations.FirebasemlOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FirebasemlOperationsCancelPathParams{
            Name: "consequatur",
        },
        QueryParams: operations.FirebasemlOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "pariatur",
            Alt: "proto",
            Callback: "et",
            Fields: "cum",
            Key: "occaecati",
            OauthToken: "quo",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "et",
            UploadProtocol: "eos",
        },
        Request: map[string]interface{}{
            "ea": "eaque",
            "consectetur": "consequatur",
        },
    }
    
    res, err := s.Operations.FirebasemlOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->