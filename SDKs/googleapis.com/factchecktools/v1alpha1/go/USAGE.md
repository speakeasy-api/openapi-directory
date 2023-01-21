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
    
    req := operations.FactchecktoolsClaimsSearchRequest{
        QueryParams: operations.FactchecktoolsClaimsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            LanguageCode: "expedita",
            MaxAgeDays: 6044372234677422456,
            OauthToken: "fugit",
            Offset: 1543572285742637646,
            PageSize: 2661732831099943416,
            PageToken: "rerum",
            PrettyPrint: false,
            Query: "debitis",
            QuotaUser: "voluptatum",
            ReviewPublisherSiteFilter: "et",
            UploadType: "ut",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.Claims.FactchecktoolsClaimsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->