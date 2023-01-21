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
    
    req := operations.StsTokenRequest{
        QueryParams: operations.StsTokenQueryParams{
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
        Request: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: "rerum",
            GrantType: "dicta",
            Options: "debitis",
            RequestedTokenType: "voluptatum",
            Scope: "et",
            SubjectToken: "ut",
            SubjectTokenType: "dolorem",
        },
    }
    
    res, err := s.V1beta.StsToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1betaExchangeTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->