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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            EndDateDay: 602763,
            EndDateMonth: 857946,
            EndDateYear: 544883,
            Fields: "illum",
            Key: "vel",
            OauthToken: "error",
            PageSize: 645894,
            PageToken: "suscipit",
            PrettyPrint: false,
            Query: "iure",
            QuotaUser: "magnam",
            StartDateDay: 891773,
            StartDateMonth: 56713,
            StartDateYear: 963663,
            UploadType: "tempora",
            UploadProtocol: "suscipit",
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