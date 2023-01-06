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
            AccessToken: "hic",
            Alt: "media",
            Callback: "quis",
            Fields: "laboriosam",
            Key: "soluta",
            LanguageCode: "molestiae",
            MaxAgeDays: 7360715895130807254,
            OauthToken: "omnis",
            Offset: 833649597387853682,
            PageSize: 7562745417443808981,
            PageToken: "sint",
            PrettyPrint: false,
            Query: "quos",
            QuotaUser: "deleniti",
            ReviewPublisherSiteFilter: "quasi",
            UploadType: "asperiores",
            UploadProtocol: "voluptas",
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