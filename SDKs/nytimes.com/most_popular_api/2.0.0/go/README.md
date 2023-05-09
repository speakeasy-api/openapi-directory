# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nytimes.com/most_popular_api/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GETMostemailedSectionTimePeriodJSON(ctx, operations.GETMostemailedSectionTimePeriodJSONRequest{
        Section: shared.SectionEnumPublicEditor,
        TimePeriod: shared.TimePeriodEnumSeven,
    }, operations.GETMostemailedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETMostemailedSectionTimePeriodJSON](docs/sdk/README.md#getmostemailedsectiontimeperiodjson) - Most Emailed by Section & Time Period
* [GETMostsharedSectionTimePeriodJSON](docs/sdk/README.md#getmostsharedsectiontimeperiodjson) - Most Shared by Section & Time Period
* [GETMostviewedSectionTimePeriodJSON](docs/sdk/README.md#getmostviewedsectiontimeperiodjson) - Most Viewed by Section & Time Period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
