# ISOs

## Overview

ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.

On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.

To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.


### Available Operations

* [GetIsos](#getisos) - Get all ISOs
* [GetIsosID](#getisosid) - Get an ISO

## GetIsos

Returns all available ISO objects.

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
    res, err := s.ISOs.GetIsos(ctx, operations.GetIsosRequest{
        Architecture: sdk.String("maiores"),
        IncludeArchitectureWildcard: sdk.Bool(false),
        Name: sdk.String("Stacy Gulgowski MD"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIsos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetIsosID

Returns a specific ISO object.

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
    res, err := s.ISOs.GetIsosID(ctx, operations.GetIsosIDRequest{
        ID: 317983,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIsosID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
