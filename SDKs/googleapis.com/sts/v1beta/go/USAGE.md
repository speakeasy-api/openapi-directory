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
            DollarXgafv: "2",
            AccessToken: "quas",
            Alt: "proto",
            Callback: "aut",
            Fields: "at",
            Key: "sint",
            OauthToken: "at",
            PrettyPrint: true,
            QuotaUser: "enim",
            UploadType: "vel",
            UploadProtocol: "temporibus",
        },
        Request: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: "nihil",
            GrantType: "repellendus",
            Options: "blanditiis",
            RequestedTokenType: "possimus",
            Scope: "animi",
            SubjectToken: "quo",
            SubjectTokenType: "est",
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