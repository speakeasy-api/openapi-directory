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
            Name: "esse",
        },
        QueryParams: operations.TexttospeechOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolor",
            Alt: "media",
            Callback: "praesentium",
            Fields: "ducimus",
            Key: "ea",
            OauthToken: "ad",
            PrettyPrint: true,
            QuotaUser: "temporibus",
            UploadType: "quo",
            UploadProtocol: "consequatur",
        },
        Request: map[string]interface{}{
            "aut": "qui",
            "sapiente": "in",
            "ea": "aut",
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