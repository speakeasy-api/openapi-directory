# ServerTypes

## Overview

Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [GetServerTypes](#getservertypes) - Get all Server Types
* [GetServerTypesID](#getservertypesid) - Get a Server Type

## GetServerTypes

Gets all Server type objects.

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
    res, err := s.ServerTypes.GetServerTypes(ctx, operations.GetServerTypesRequest{
        Name: sdk.String("Cesar Hyatt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServerTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetServerTypesID

Gets a specific Server type object.

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
    res, err := s.ServerTypes.GetServerTypesID(ctx, operations.GetServerTypesIDRequest{
        ID: 840429,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServerTypesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
