<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.VerifiedaccessChallengeGenerateRequest{
        Security: operations.VerifiedaccessChallengeGenerateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.VerifiedaccessChallengeGenerateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: map[string]interface{}{
            "eum": "iusto",
            "ullam": "saepe",
            "inventore": "sapiente",
        },
    }

    ctx := context.Background()
    res, err := s.Challenge.VerifiedaccessChallengeGenerate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Challenge != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->