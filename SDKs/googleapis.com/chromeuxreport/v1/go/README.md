# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromeuxreport/v1/go
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

    req := operations.ChromeuxreportRecordsQueryHistoryRecordRequest{
        DollarXgafv: "2",
        QueryHistoryRequest: &shared.QueryHistoryRequest{
            FormFactor: "DESKTOP",
            Metrics: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Origin: "corrupti",
            URL: "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Records.ChromeuxreportRecordsQueryHistoryRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Records

* `ChromeuxreportRecordsQueryHistoryRecord` - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* `ChromeuxreportRecordsQueryRecord` - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
