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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RetrieveNEOFeedTodayRequest{
        Detailed: false,
    }

    ctx := context.Background()
    res, err := s.Feed.RetrieveNEOFeedToday(ctx, req)
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


### Feed

* `RetrieveNEOFeedToday` - Find Near Earth Objects for today
* `RetrieveNearEarthObjectFeed` - Find Near Earth Objects by date

### Neo

* `BrowseNearEarthObjects` - Browse the Near Earth Objects service
* `RetrieveNearEarthObjectByID` - Find Near Earth Objects by id

### Neosentry

* `RetrieveSentryRiskData` - Retrieve Sentry (Impact Risk ) Near Earth Objects
* `RetrieveSentryRiskDataByID` - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

### Stats

* `RetrieveCurrentNeoStatistics` - Get the Near Earth Object data set totals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
