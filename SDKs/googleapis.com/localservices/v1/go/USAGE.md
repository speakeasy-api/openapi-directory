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
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "minus",
            EndDateDay: 2174189967349636921,
            EndDateMonth: 2614976778224928657,
            EndDateYear: 6409889644823244839,
            Fields: "quibusdam",
            Key: "earum",
            OauthToken: "doloribus",
            PageSize: 8887480854894973121,
            PageToken: "saepe",
            PrettyPrint: true,
            Query: "et",
            QuotaUser: "est",
            StartDateDay: 262930248101285882,
            StartDateMonth: 3776309695126930956,
            StartDateYear: 2941842075518753716,
            UploadType: "aliquam",
            UploadProtocol: "sequi",
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