# StreetsInAWard

### Available Operations

* [StreetsInAWard](#streetsinaward) - Returns all streets in a ward

## StreetsInAWard

Returns all streets in a specified ward and ward postcode

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
    res, err := s.StreetsInAWard.StreetsInAWard(ctx, operations.StreetsInAWardRequest{
        Country: "Mozambique",
        District: "nulla",
        Region: "corrupti",
        Ward: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
