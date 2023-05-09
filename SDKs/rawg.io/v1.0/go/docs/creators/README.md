# Creators

### Available Operations

* [CreatorsList](#creatorslist) - Get a list of game creators.
* [CreatorsRead](#creatorsread) - Get details of the creator.

## CreatorsList

Get a list of game creators.

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
    res, err := s.Creators.CreatorsList(ctx, operations.CreatorsListRequest{
        Page: sdk.Int64(602763),
        PageSize: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatorsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreatorsRead

Get details of the creator.

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
    res, err := s.Creators.CreatorsRead(ctx, operations.CreatorsReadRequest{
        ID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonSingle != nil {
        // handle response
    }
}
```
