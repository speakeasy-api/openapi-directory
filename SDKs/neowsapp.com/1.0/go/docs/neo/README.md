# Neo

## Overview

Operations with NearEarthObjects

### Available Operations

* [BrowseNearEarthObjects](#browsenearearthobjects) - Browse the Near Earth Objects service
* [RetrieveNearEarthObjectByID](#retrievenearearthobjectbyid) - Find Near Earth Objects by id

## BrowseNearEarthObjects

Retieve a paginated list of Near Earth Objects

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
    res, err := s.Neo.BrowseNearEarthObjects(ctx, operations.BrowseNearEarthObjectsRequest{
        Page: sdk.Int(715190),
        Size: sdk.Int(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObject != nil {
        // handle response
    }
}
```

## RetrieveNearEarthObjectByID

Retrieve a Near Earth Objects with a given id

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
    res, err := s.Neo.RetrieveNearEarthObjectByID(ctx, operations.RetrieveNearEarthObjectByIDRequest{
        AsteroidID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObject != nil {
        // handle response
    }
}
```
