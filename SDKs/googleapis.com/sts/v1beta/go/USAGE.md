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

    req := operations.StsTokenRequest{
        DollarXgafv: "2",
        GoogleIdentityStsV1betaExchangeTokenRequest: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: "provident",
            GrantType: "distinctio",
            Options: "quibusdam",
            RequestedTokenType: "unde",
            Scope: "nulla",
            SubjectToken: "corrupti",
            SubjectTokenType: "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.V1beta.StsToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1betaExchangeTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->