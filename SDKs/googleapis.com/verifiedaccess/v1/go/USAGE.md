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
    
    req := operations.VerifiedaccessChallengeCreateRequest{
        Security: operations.VerifiedaccessChallengeCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.VerifiedaccessChallengeCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: map[string]interface{}{
            "dicta": "debitis",
            "voluptatum": "et",
            "ut": "dolorem",
        },
    }
    
    res, err := s.Challenge.VerifiedaccessChallengeCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Challenge != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->