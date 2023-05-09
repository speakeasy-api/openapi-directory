# Place

### Available Operations

* [PlaceGet](#placeget) - Gets the place with the given id.
* [PlaceGetAt](#placegetat) - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* [PlaceGetByGeo](#placegetbygeo) - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* [PlaceGetByType](#placegetbytype) - Gets all places of a given type
* [PlaceGetOverlay](#placegetoverlay) - Gets the place overlay for a given set of co-ordinates and a given width/height.
* [PlaceGetStreetsByPostCode](#placegetstreetsbypostcode) - Gets the set of streets associated with a post code.
* [PlaceMetaCategories](#placemetacategories) - Gets a list of all of the available place property categories and keys.
* [PlaceMetaPlaceTypes](#placemetaplacetypes) - Gets a list of the available types of Place.
* [PlaceSearch](#placesearch) - Gets all places that matches the given query

## PlaceGet

Gets the place with the given id.

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
    res, err := s.Place.PlaceGet(ctx, operations.PlaceGetRequest{
        ID: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
        IncludeChildren: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```

## PlaceGetAt

Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.

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
    res, err := s.Place.PlaceGetAt(ctx, operations.PlaceGetAtRequest{
        LatPathParameter: "dignissimos",
        LonPathParameter: "eaque",
        LatQueryParameter: "quis",
        LocationLat: 1999.96,
        LocationLon: 1794.9,
        LonQueryParameter: "perferendis",
        Type: []string{
            "minus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## PlaceGetByGeo

Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.

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
    res, err := s.Place.PlaceGetByGeo(ctx, operations.PlaceGetByGeoRequest{
        ActiveOnly: sdk.Bool(false),
        Categories: []string{
            "dolor",
            "vero",
        },
        IncludeChildren: sdk.Bool(false),
        NumberOfPlacesToReturn: sdk.Int(345352),
        PlaceGeoLat: sdk.Float64(9441.2),
        PlaceGeoLon: sdk.Float64(9280.82),
        PlaceGeoNeLat: sdk.Float64(6082.53),
        PlaceGeoNeLon: sdk.Float64(7044.15),
        PlaceGeoSwLat: sdk.Float64(5966.56),
        PlaceGeoSwLon: sdk.Float64(318.38),
        Radius: sdk.Float64(7836.45),
        Type: []string{
            "blanditiis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## PlaceGetByType

Gets all places of a given type

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
    res, err := s.Place.PlaceGetByType(ctx, operations.PlaceGetByTypeRequest{
        ActiveOnly: sdk.Bool(false),
        Types: []string{
            "eaque",
            "occaecati",
            "rerum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```

## PlaceGetOverlay

Gets the place overlay for a given set of co-ordinates and a given width/height.

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
    res, err := s.Place.PlaceGetOverlay(ctx, operations.PlaceGetOverlayRequest{
        LatPathParameter: "adipisci",
        LonPathParameter: "asperiores",
        Height: 934214,
        LatQueryParameter: "modi",
        LocationLat: 6139.66,
        LocationLon: 6790.91,
        LonQueryParameter: "deleniti",
        Type: []string{
            "provident",
            "nobis",
            "libero",
            "delectus",
        },
        Width: 311945,
        Z: 554242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## PlaceGetStreetsByPostCode

Gets the set of streets associated with a post code.

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
    res, err := s.Place.PlaceGetStreetsByPostCode(ctx, operations.PlaceGetStreetsByPostCodeRequest{
        PostcodePathParameter: "aliquid",
        PostcodeInputPostcode: sdk.String("dolorem"),
        PostcodeQueryParameter: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## PlaceMetaCategories

Gets a list of all of the available place property categories and keys.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Place.PlaceMetaCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaceCategories != nil {
        // handle response
    }
}
```

## PlaceMetaPlaceTypes

Gets a list of the available types of Place.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Place.PlaceMetaPlaceTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaceCategories != nil {
        // handle response
    }
}
```

## PlaceSearch

Gets all places that matches the given query

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
    res, err := s.Place.PlaceSearch(ctx, operations.PlaceSearchRequest{
        Name: "Norma Erdman",
        Types: []string{
            "voluptate",
            "dignissimos",
            "reiciendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```
