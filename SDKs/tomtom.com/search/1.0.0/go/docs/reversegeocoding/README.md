# ReverseGeocoding

### Available Operations

* [GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt](#getsearchversionnumberreversegeocodecrossstreetpositionext) - Cross Street lookup
* [GetSearchVersionNumberReverseGeocodePositionExt](#getsearchversionnumberreversegeocodepositionext) - Reverse Geocode

## GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt

Cross Street lookup

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ReverseGeocoding.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt(ctx, operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest{
        Ext: shared.ExtEnumJs,
        Heading: sdk.Float32(1613.09),
        Language: sdk.String("repellat"),
        Limit: sdk.Int64(653108),
        Position: "occaecati",
        Radius: sdk.Int64(253291),
        SpatialKeys: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberReverseGeocodePositionExt

Reverse Geocode

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ReverseGeocoding.GetSearchVersionNumberReverseGeocodePositionExt(ctx, operations.GetSearchVersionNumberReverseGeocodePositionExtRequest{
        Callback: sdk.String("commodi"),
        Ext: shared.ExtEnumJsonp,
        Heading: sdk.Float32(4746.97),
        Number: sdk.String("velit"),
        Position: "error",
        Radius: sdk.Int64(158969),
        ReturnRoadUse: sdk.Bool(false),
        ReturnSpeedLimit: sdk.Bool(false),
        RoadUse: sdk.String("quis"),
        SpatialKeys: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
