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
        QueryParams: operations.StsTokenQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: "deserunt",
            GrantType: "suscipit",
            Options: "iure",
            RequestedTokenType: "magnam",
            Scope: "debitis",
            SubjectToken: "ipsa",
            SubjectTokenType: "delectus",
        },
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