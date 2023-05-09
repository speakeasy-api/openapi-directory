# CityDataStandardization

### Available Operations

* [Getcitystandard](#getcitystandard) - Gets a city name standard for US and international cities

## Getcitystandard

Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.

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
    res, err := s.CityDataStandardization.Getcitystandard(ctx, operations.GetcitystandardRequest{
        City: "Stiedemannstad",
        License: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
