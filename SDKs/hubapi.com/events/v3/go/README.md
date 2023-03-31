# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/events/v3/go
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

    req := operations.GetEventsV3EventsGetPageRequest{
        After: "corrupti",
        Before: "provident",
        EventType: "distinctio",
        Limit: 844266,
        ObjectID: 602763,
        ObjectType: "nulla",
        OccurredAfter: "2021-04-22T12:08:58.275Z",
        OccurredBefore: "2022-05-18T09:34:54.894Z",
        Sort: []string{
            "suscipit",
            "iure",
            "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, req, operations.GetEventsV3EventsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseExternalUnifiedEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Events

* `GetEventsV3EventsGetPage` - Returns a collection of events matching a query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
