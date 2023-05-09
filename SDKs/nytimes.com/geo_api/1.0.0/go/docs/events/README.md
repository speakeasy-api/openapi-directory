# Events

### Available Operations

* [GetQueryJSON](#getqueryjson) - Geographic API

## GetQueryJSON

Geographic API

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetQueryJSON(ctx, operations.GetQueryJSONRequest{
        DateRange: sdk.String("delectus"),
        Elevation: sdk.Int64(272656),
        Facets: operations.GetQueryJSONFacetsEnumZero.ToPointer(),
        Filter: sdk.String("molestiae"),
        Latitude: sdk.String("minus"),
        Limit: sdk.Int64(812169),
        Longitude: sdk.String("voluptatum"),
        Name: sdk.String("Miriam Huel"),
        Offset: sdk.Int64(71036),
        Query: sdk.String("quis"),
        Sort: sdk.String("veritatis"),
        Sw: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
