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
    
    req := operations.LocalservicesAccountReportsSearchRequest{
        Security: operations.LocalservicesAccountReportsSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.LocalservicesAccountReportsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            EndDateDay: 3390393562759376202,
            EndDateMonth: 2669985732393126063,
            EndDateYear: 1774932891286980153,
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PageSize: 2661732831099943416,
            PageToken: "rerum",
            PrettyPrint: false,
            Query: "debitis",
            QuotaUser: "voluptatum",
            StartDateDay: 2339563716805116249,
            StartDateMonth: 7144924247938981575,
            StartDateYear: 161231572858529631,
            UploadType: "et",
            UploadProtocol: "voluptate",
        },
    }
    
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->