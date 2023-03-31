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
    }

    ctx := context.Background()
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, req, operations.LocalservicesAccountReportsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->