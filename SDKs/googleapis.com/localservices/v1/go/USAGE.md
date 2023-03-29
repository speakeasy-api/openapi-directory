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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            EndDateDay: 602763,
            EndDateMonth: 857946,
            EndDateYear: 544883,
            Fields: "nulla",
            Key: "nihil",
            OauthToken: "fuga",
            PageSize: 645894,
            PageToken: "eum",
            PrettyPrint: false,
            Query: "iusto",
            QuotaUser: "ullam",
            StartDateDay: 891773,
            StartDateMonth: 56713,
            StartDateYear: 963663,
            UploadType: "enim",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->