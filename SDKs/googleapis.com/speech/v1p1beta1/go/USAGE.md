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
            Name: "assumenda",
        },
        QueryParams: operations.SpeechOperationsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "similique",
            Alt: "json",
            Callback: "culpa",
            Fields: "delectus",
            Key: "facilis",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "officia",
            UploadType: "error",
            UploadProtocol: "eligendi",
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