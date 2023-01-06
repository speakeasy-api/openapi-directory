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
            AccessToken: "sunt",
            Alt: "json",
            Callback: "et",
            Fields: "quos",
            Key: "tenetur",
            OauthToken: "autem",
            PrettyPrint: false,
            QuotaUser: "consequuntur",
            UploadType: "adipisci",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: "voluptatibus",
            GrantType: "animi",
            Options: "non",
            RequestedTokenType: "sequi",
            Scope: "quasi",
            SubjectToken: "quia",
            SubjectTokenType: "optio",
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