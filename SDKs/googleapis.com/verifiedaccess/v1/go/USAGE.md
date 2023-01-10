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
            DollarXgafv: "2",
            AccessToken: "tenetur",
            Alt: "media",
            Callback: "sunt",
            Fields: "qui",
            Key: "consequuntur",
            OauthToken: "illo",
            PrettyPrint: false,
            QuotaUser: "sequi",
            UploadType: "dolorem",
            UploadProtocol: "ullam",
        },
        Request: map[string]interface{}{
            "eum": "omnis",
            "qui": "ut",
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