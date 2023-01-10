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
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "json",
            Callback: "eos",
            Fields: "voluptatibus",
            Key: "et",
            LanguageCode: "voluptatum",
            MaxAgeDays: 531498979884209372,
            OauthToken: "est",
            Offset: 718631122271686376,
            PageSize: 2768331678206913841,
            PageToken: "quo",
            PrettyPrint: false,
            Query: "in",
            QuotaUser: "sint",
            ReviewPublisherSiteFilter: "et",
            UploadType: "sapiente",
            UploadProtocol: "harum",
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