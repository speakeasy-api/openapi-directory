# TanzaniaRegions

### Available Operations

* [TanzaniaRegions](#tanzaniaregions) - Returns all regions present in Tanzania

## TanzaniaRegions

Fetches all regions present in Tanzania and then return a response as json

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
    res, err := s.TanzaniaRegions.TanzaniaRegions(ctx, operations.TanzaniaRegionsRequest{
        Country: "Isle of Man",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
