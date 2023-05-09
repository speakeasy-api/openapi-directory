# LocationEndpoints

### Available Operations

* [FindPlacesFindPlacesGet](#findplacesfindplacesget) - Search for places. Complete words required.
* [FindPlacesPrefixFindPlacesPrefixGet](#findplacesprefixfindplacesprefixget) - Prefix search for places. Useful for autocomplete forms.
* [NearestPlaceNearestPlaceGet](#nearestplacenearestplaceget) - Returns the nearest named location for a given GPS coordinates.

## FindPlacesFindPlacesGet

## Search for places

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
You can then identify the one you want by coordinates, country, or the administrative area.

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
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, operations.FindPlacesFindPlacesGetRequest{
        Key: sdk.String("quibusdam"),
        Language: operations.FindPlacesFindPlacesGetLanguageLanguageEnumFr.ToPointer(),
        Text: "nulla",
    }, operations.FindPlacesFindPlacesGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```

## FindPlacesPrefixFindPlacesPrefixGet

## Search for places by prefix

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.

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
    res, err := s.LocationEndpoints.FindPlacesPrefixFindPlacesPrefixGet(ctx, operations.FindPlacesPrefixFindPlacesPrefixGetRequest{
        Key: sdk.String("corrupti"),
        Language: operations.FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnumPl.ToPointer(),
        Text: "vel",
    }, operations.FindPlacesPrefixFindPlacesPrefixGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```

## NearestPlaceNearestPlaceGet

## Search for nearest place by coordinates

You can use this endpoint to find the nearest place from given coordinates.

*Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*

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
    res, err := s.LocationEndpoints.NearestPlaceNearestPlaceGet(ctx, operations.NearestPlaceNearestPlaceGetRequest{
        Key: sdk.String("error"),
        Language: operations.NearestPlaceNearestPlaceGetLanguageLanguageEnumFr.ToPointer(),
        Lat: "suscipit",
        Lon: "iure",
    }, operations.NearestPlaceNearestPlaceGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModel != nil {
        // handle response
    }
}
```
