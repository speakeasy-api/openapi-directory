# NeighborhoodInAStreet

### Available Operations

* [NeighborhoodInAStreet](#neighborhoodinastreet) - Returns all neighborhood in a street

## NeighborhoodInAStreet

Returns all neighborhood in a specified street

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
    res, err := s.NeighborhoodInAStreet.NeighborhoodInAStreet(ctx, operations.NeighborhoodInAStreetRequest{
        Country: "Jamaica",
        District: "magnam",
        Region: "debitis",
        Street: "92347 Lehner Lights",
        Ward: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
