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

    req := operations.AcmednsAcmeChallengeSetsGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        RootDomain: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.AcmeChallengeSets.AcmednsAcmeChallengeSetsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcmeChallengeSet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->