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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetQueryJSON(ctx, operations.GetQueryJSONRequest{
        DateRange: sdk.String("corrupti"),
        Elevation: sdk.Int64(592845),
        Facets: operations.GetQueryJSONFacetsEnumOne.ToPointer(),
        Filter: sdk.String("quibusdam"),
        Latitude: sdk.String("unde"),
        Limit: sdk.Int64(857946),
        Longitude: sdk.String("corrupti"),
        Name: sdk.String("Ben Mueller"),
        Offset: sdk.Int64(437587),
        Query: sdk.String("magnam"),
        Sort: sdk.String("debitis"),
        Sw: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->