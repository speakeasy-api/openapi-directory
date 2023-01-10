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
    
    req := operations.DfareportingAccountActiveAdSummariesGetRequest{
        Security: operations.DfareportingAccountActiveAdSummariesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DfareportingAccountActiveAdSummariesGetPathParams{
            ProfileID: "qui",
            SummaryAccountID: "ipsum",
        },
        QueryParams: operations.DfareportingAccountActiveAdSummariesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "quia",
            Alt: "media",
            Callback: "qui",
            Fields: "facere",
            Key: "est",
            OauthToken: "necessitatibus",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "laborum",
            UploadProtocol: "sunt",
        },
    }
    
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->