# BikePoint

### Available Operations

* [BikePointGet](#bikepointget) - Gets the bike point with the given id.
* [BikePointGetAll](#bikepointgetall) - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* [BikePointSearch](#bikepointsearch) - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

## BikePointGet

Gets the bike point with the given id.

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
    res, err := s.BikePoint.BikePointGet(ctx, operations.BikePointGetRequest{
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlace != nil {
        // handle response
    }
}
```

## BikePointGetAll

Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.

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
    res, err := s.BikePoint.BikePointGetAll(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```

## BikePointSearch

Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

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
    res, err := s.BikePoint.BikePointSearch(ctx, operations.BikePointSearchRequest{
        Query: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```
