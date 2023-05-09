# Areas

### Available Operations

* [AreasGet](#areasget) - Returns list of areas
* [GetVVersionAreasAreaIds](#getvversionareasareaids) - Returns details of selected area

## AreasGet

Returns list of areas

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
    res, err := s.Areas.AreasGet(ctx, operations.AreasGetRequest{
        Version: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AreaResponse != nil {
        // handle response
    }
}
```

## GetVVersionAreasAreaIds

Returns details of selected area

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
    res, err := s.Areas.GetVVersionAreasAreaIds(ctx, operations.GetVVersionAreasAreaIdsRequest{
        AreaIds: "distinctio",
        Version: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AreaResponse != nil {
        // handle response
    }
}
```
