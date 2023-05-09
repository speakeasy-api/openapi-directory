# Groundhogs

### Available Operations

* [Groundhog](#groundhog) - Get a groundhog by slug
* [Groundhogs](#groundhogs) - Get all groundhogs

## Groundhog

Returns a prognosticating animal and its known predictions.

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
    res, err := s.Groundhogs.Groundhog(ctx, operations.GroundhogRequest{
        Slug: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groundhog200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Groundhogs

Returns all prognosticating animals with their known predictions.

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
    res, err := s.Groundhogs.Groundhogs(ctx, operations.GroundhogsRequest{
        Country: sdk.String("Canada or USA"),
        IsGroundhog: operations.GroundhogsIsGroundhogEnumTrue.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groundhogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```
