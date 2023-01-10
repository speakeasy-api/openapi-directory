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
    
    req := operations.TexttospeechOperationsCancelRequest{
        Security: operations.TexttospeechOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TexttospeechOperationsCancelPathParams{
            Name: "sunt",
        },
        QueryParams: operations.TexttospeechOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "json",
            Callback: "et",
            Fields: "ullam",
            Key: "aliquid",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "minus",
            UploadType: "dolorum",
            UploadProtocol: "illo",
        },
        Request: map[string]interface{}{
            "hic": "consequatur",
        },
    }
    
    res, err := s.Operations.TexttospeechOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->