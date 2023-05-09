# Search

### Available Operations

* [SearchSearch](#searchsearch) - View stops, routes and myki ticket outlets that match the search term

## SearchSearch

View stops, routes and myki ticket outlets that match the search term

### Example Usage

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
    res, err := s.Search.SearchSearch(ctx, operations.SearchSearchRequest{
        Devid: sdk.String("qui"),
        IncludeAddresses: sdk.Bool(false),
        IncludeOutlets: sdk.Bool(false),
        Latitude: sdk.Float32(3978.21),
        Longitude: sdk.Float32(5865.13),
        MatchRouteBySuburb: sdk.Bool(false),
        MatchStopByGtfsStopID: sdk.Bool(false),
        MatchStopBySuburb: sdk.Bool(false),
        MaxDistance: sdk.Float32(5528.22),
        RouteTypes: []SearchSearchRouteTypesEnum{
            operations.SearchSearchRouteTypesEnumZero,
        },
        SearchTerm: "assumenda",
        Signature: sdk.String("ipsam"),
        Token: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3SearchResult != nil {
        // handle response
    }
}
```
