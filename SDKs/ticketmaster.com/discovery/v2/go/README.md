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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FindRequest{
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
        ID: "vel",
        IncludeLicensedContent: " no",
        IncludeSpellcheck: " no",
        IncludeTest: " no",
        Keyword: "iure",
        Locale: "magnam",
        Page: "debitis",
        Size: "ipsa",
        Sort: "delectus",
        Source: " universe",
    }

    ctx := context.Background()
    res, err := s.Find(ctx, req)
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

### SDK SDK

* `Find` - Attraction Search
* `Get` - Get Attraction Details
* `GetGenre` - Get Genre Details
* `GetImages` - Get Event Images
* `GetSegment` - Get Segment Details
* `GetSubgenre` - Get Sub-Genre Details
* `GetDiscoveryV2Classifications` - Classification Search
* `GetDiscoveryV2ClassificationsID` - Get Classification Details
* `GetDiscoveryV2Events` - Event Search
* `GetDiscoveryV2EventsID` - Get Event Details
* `GetDiscoveryV2Venues` - Venue Search
* `GetDiscoveryV2VenuesID` - Get Venue Details

### V2

* `GetDiscoveryV2Suggest` - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
