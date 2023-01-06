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
            DollarXgafv: "2",
            AccessToken: "numquam",
            Alt: "json",
            Callback: "ab",
            Fields: "omnis",
            Key: "animi",
            OauthToken: "non",
            PrettyPrint: false,
            QuotaUser: "tenetur",
            UploadType: "et",
            UploadProtocol: "voluptatum",
        },
        Request: map[string]interface{}{
            "nemo": "nam",
            "quia": "cum",
            "et": "illum",
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