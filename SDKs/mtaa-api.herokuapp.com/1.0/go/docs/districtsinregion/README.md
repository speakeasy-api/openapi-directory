# DistrictsInRegion

### Available Operations

* [DistrictsInARegion](#districtsinaregion) - Returns all districts in region

## DistrictsInARegion

Returns a post code and all districts in a specified region

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
    res, err := s.DistrictsInRegion.DistrictsInARegion(ctx, operations.DistrictsInARegionRequest{
        Country: "Portugal",
        Region: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
