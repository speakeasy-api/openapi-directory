# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/localservices/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountReports

* `LocalservicesAccountReportsSearch` - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### DetailedLeadReports

* `LocalservicesDetailedLeadReportsSearch` - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
