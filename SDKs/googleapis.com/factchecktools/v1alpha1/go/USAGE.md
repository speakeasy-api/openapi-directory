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

    req := operations.FactchecktoolsClaimsSearchRequest{
        QueryParams: operations.FactchecktoolsClaimsSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            LanguageCode: "corrupti",
            MaxAgeDays: 847252,
            OauthToken: "vel",
            Offset: 623564,
            PageSize: 645894,
            PageToken: "suscipit",
            PrettyPrint: false,
            Query: "iure",
            QuotaUser: "magnam",
            ReviewPublisherSiteFilter: "debitis",
            UploadType: "ipsa",
            UploadProtocol: "delectus",
        },
    }

    ctx := context.Background()
    res, err := s.Claims.FactchecktoolsClaimsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->