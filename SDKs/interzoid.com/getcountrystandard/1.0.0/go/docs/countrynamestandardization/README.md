# CountryNameStandardization

### Available Operations

* [Getcountrystandard](#getcountrystandard) - Gets country name standard

## Getcountrystandard

Gets a pre-selected country name standard for various permutations of a given country name.

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
    res, err := s.CountryNameStandardization.Getcountrystandard(ctx, operations.GetcountrystandardRequest{
        Country: "Portugal",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
