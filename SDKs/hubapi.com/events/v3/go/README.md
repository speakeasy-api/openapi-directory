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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, operations.GetEventsV3EventsGetPageRequest{
        After: sdk.String("corrupti"),
        Before: sdk.String("provident"),
        EventType: sdk.String("distinctio"),
        Limit: sdk.Int(844266),
        ObjectID: sdk.Int64(602763),
        ObjectType: sdk.String("nulla"),
        OccurredAfter: types.MustTimeFromString("2021-04-22T12:08:58.275Z"),
        OccurredBefore: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        Sort: []string{
            "suscipit",
            "iure",
            "magnam",
        },
    }, operations.GetEventsV3EventsGetPageSecurity{
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


### [Events](docs/events/README.md)

* [GetEventsV3EventsGetPage](docs/events/README.md#geteventsv3eventsgetpage) - Returns a collection of events matching a query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
