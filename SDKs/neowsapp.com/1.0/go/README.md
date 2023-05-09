# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/neowsapp.com/1.0/go
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
    res, err := s.Feed.RetrieveNEOFeedToday(ctx, operations.RetrieveNEOFeedTodayRequest{
        Detailed: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Feed](docs/feed/README.md)

* [RetrieveNEOFeedToday](docs/feed/README.md#retrieveneofeedtoday) - Find Near Earth Objects for today
* [RetrieveNearEarthObjectFeed](docs/feed/README.md#retrievenearearthobjectfeed) - Find Near Earth Objects by date

### [Neo](docs/neo/README.md)

* [BrowseNearEarthObjects](docs/neo/README.md#browsenearearthobjects) - Browse the Near Earth Objects service
* [RetrieveNearEarthObjectByID](docs/neo/README.md#retrievenearearthobjectbyid) - Find Near Earth Objects by id

### [Neosentry](docs/neosentry/README.md)

* [RetrieveSentryRiskData](docs/neosentry/README.md#retrievesentryriskdata) - Retrieve Sentry (Impact Risk ) Near Earth Objects
* [RetrieveSentryRiskDataByID](docs/neosentry/README.md#retrievesentryriskdatabyid) - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

### [Stats](docs/stats/README.md)

* [RetrieveCurrentNeoStatistics](docs/stats/README.md#retrievecurrentneostatistics) - Get the Near Earth Object data set totals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
