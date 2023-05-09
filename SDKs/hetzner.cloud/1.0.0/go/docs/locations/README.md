# Locations

## Overview

Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.

### Available Operations

* [GetLocations](#getlocations) - Get all Locations
* [GetLocationsID](#getlocationsid) - Get a Location

## GetLocations

Returns all Location objects.

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
    res, err := s.Locations.GetLocations(ctx, operations.GetLocationsRequest{
        Name: sdk.String("Carmen Treutel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLocationsID

Returns a specific Location object.

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
    res, err := s.Locations.GetLocationsID(ctx, operations.GetLocationsIDRequest{
        ID: 97260,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocationsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
