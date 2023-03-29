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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            LanguageCode: "perspiciatis",
            MaxAgeDays: 847252,
            OauthToken: "nihil",
            Offset: 623564,
            PageSize: 645894,
            PageToken: "eum",
            PrettyPrint: false,
            Query: "iusto",
            QuotaUser: "ullam",
            ReviewPublisherSiteFilter: "saepe",
            UploadType: "inventore",
            UploadProtocol: "sapiente",
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