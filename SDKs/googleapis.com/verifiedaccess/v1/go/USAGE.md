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
            AccessToken: "architecto",
            Alt: "json",
            Callback: "dignissimos",
            Fields: "natus",
            Key: "quos",
            OauthToken: "cupiditate",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "dolor",
            UploadProtocol: "iusto",
        },
        Request: map[string]interface{}{
            "porro": "laudantium",
            "modi": "minima",
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