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
    
    req := operations.SpeechOperationsGetRequest{
        Security: operations.SpeechOperationsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SpeechOperationsGetPathParams{
            Name: "accusantium",
        },
        QueryParams: operations.SpeechOperationsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "json",
            Callback: "consequatur",
            Fields: "quaerat",
            Key: "est",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "velit",
            UploadType: "tempore",
            UploadProtocol: "consequatur",
        },
    }
    
    res, err := s.Operations.SpeechOperationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->