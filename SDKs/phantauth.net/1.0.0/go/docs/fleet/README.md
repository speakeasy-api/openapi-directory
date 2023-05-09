# Fleet

## Overview

Fleet is a group of clients under a given a name. For the purposes of identification and visualisation, the Fleet object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the fleet.

### Available Operations

* [GetFleetFleetname](#getfleetfleetname) - Get a Fleet

## GetFleetFleetname

Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.

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
    res, err := s.Fleet.GetFleetFleetname(ctx, operations.GetFleetFleetnameRequest{
        Fleetname: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFleetFleetname200ApplicationJSONObject != nil {
        // handle response
    }
}
```
