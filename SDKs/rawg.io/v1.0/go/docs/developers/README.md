# Developers

### Available Operations

* [DevelopersList](#developerslist) - Get a list of game developers.
* [DevelopersRead](#developersread) - Get details of the developer.

## DevelopersList

Get a list of game developers.

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
    res, err := s.Developers.DevelopersList(ctx, operations.DevelopersListRequest{
        Page: sdk.Int64(140350),
        PageSize: sdk.Int64(870013),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevelopersList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevelopersRead

Get details of the developer.

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
    res, err := s.Developers.DevelopersRead(ctx, operations.DevelopersReadRequest{
        ID: 870088,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeveloperSingle != nil {
        // handle response
    }
}
```
