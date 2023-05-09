# Occupancy

### Available Operations

* [OccupancyGet](#occupancyget) - Gets the occupancy for a car park with a given id
* [OccupancyGetAllChargeConnectorStatus](#occupancygetallchargeconnectorstatus) - Gets the occupancy for all charge connectors
* [OccupancyGetBikePointsOccupancies](#occupancygetbikepointsoccupancies) - Get the occupancy for bike points.
* [OccupancyGetChargeConnectorStatus](#occupancygetchargeconnectorstatus) - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* [GetOccupancyCarPark](#getoccupancycarpark) - Gets the occupancy for all car parks that have occupancy data

## OccupancyGet

Gets the occupancy for a car park with a given id

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
    res, err := s.Occupancy.OccupancyGet(ctx, operations.OccupancyGetRequest{
        ID: "9890afa5-63e2-4516-be4c-8b711e5b7fd2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesCarParkOccupancy != nil {
        // handle response
    }
}
```

## OccupancyGetAllChargeConnectorStatus

Gets the occupancy for all charge connectors

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
    res, err := s.Occupancy.OccupancyGetAllChargeConnectorStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesChargeConnectorOccupancies != nil {
        // handle response
    }
}
```

## OccupancyGetBikePointsOccupancies

Get the occupancy for bike points.

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
    res, err := s.Occupancy.OccupancyGetBikePointsOccupancies(ctx, operations.OccupancyGetBikePointsOccupanciesRequest{
        Ids: []string{
            "pariatur",
            "accusantium",
            "consequuntur",
            "praesentium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesBikePointOccupancies != nil {
        // handle response
    }
}
```

## OccupancyGetChargeConnectorStatus

Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)

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
    res, err := s.Occupancy.OccupancyGetChargeConnectorStatus(ctx, operations.OccupancyGetChargeConnectorStatusRequest{
        Ids: []string{
            "magni",
            "sunt",
            "quo",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesChargeConnectorOccupancies != nil {
        // handle response
    }
}
```

## GetOccupancyCarPark

Gets the occupancy for all car parks that have occupancy data

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
    res, err := s.Occupancy.GetOccupancyCarPark(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesCarParkOccupancies != nil {
        // handle response
    }
}
```
