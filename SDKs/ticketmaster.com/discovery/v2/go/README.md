# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/discovery/v2/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Find(ctx, operations.FindRequest{
        ClassificationID: []interface{}{
            "provident",
            "distinctio",
            "quibusdam",
        },
        ClassificationName: []interface{}{
            "nulla",
            "corrupti",
            "illum",
        },
        ID: sdk.String("69a674e0-f467-4cc8-b96e-d151a05dfc2d"),
        IncludeLicensedContent: operations.FindIncludeLicensedContentEnumNo.ToPointer(),
        IncludeSpellcheck: operations.FindIncludeSpellcheckEnumNo.ToPointer(),
        IncludeTest: operations.FindIncludeTestEnumNo.ToPointer(),
        Keyword: sdk.String("quod"),
        Locale: sdk.String("quod"),
        Page: sdk.String("esse"),
        Size: sdk.String("totam"),
        Sort: sdk.String("porro"),
        Source: operations.FindSourceEnumFrontgate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Find](docs/sdk/README.md#find) - Attraction Search
* [Get](docs/sdk/README.md#get) - Get Attraction Details
* [GetGenre](docs/sdk/README.md#getgenre) - Get Genre Details
* [GetImages](docs/sdk/README.md#getimages) - Get Event Images
* [GetSegment](docs/sdk/README.md#getsegment) - Get Segment Details
* [GetSubgenre](docs/sdk/README.md#getsubgenre) - Get Sub-Genre Details
* [GetDiscoveryV2Classifications](docs/sdk/README.md#getdiscoveryv2classifications) - Classification Search
* [GetDiscoveryV2ClassificationsID](docs/sdk/README.md#getdiscoveryv2classificationsid) - Get Classification Details
* [GetDiscoveryV2Events](docs/sdk/README.md#getdiscoveryv2events) - Event Search
* [GetDiscoveryV2EventsID](docs/sdk/README.md#getdiscoveryv2eventsid) - Get Event Details
* [GetDiscoveryV2Venues](docs/sdk/README.md#getdiscoveryv2venues) - Venue Search
* [GetDiscoveryV2VenuesID](docs/sdk/README.md#getdiscoveryv2venuesid) - Get Venue Details

### [V2](docs/v2/README.md)

* [GetDiscoveryV2Suggest](docs/v2/README.md#getdiscoveryv2suggest) - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
