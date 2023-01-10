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
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "json",
            Callback: "voluptatem",
            Fields: "atque",
            Key: "ut",
            OauthToken: "voluptate",
            PrettyPrint: true,
            QuotaUser: "facilis",
            UploadType: "nulla",
            UploadProtocol: "eius",
        },
        Request: map[string]interface{}{
            "aliquam": "eum",
            "mollitia": "accusamus",
        },
    }
    
    res, err := s.Challenge.VerifiedaccessChallengeGenerate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Challenge != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->