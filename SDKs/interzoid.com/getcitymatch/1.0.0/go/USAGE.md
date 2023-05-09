<!-- Start SDK Example Usage -->
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
    res, err := s.CityNameSimilarityKey.Getcitymatch(ctx, operations.GetcitymatchRequest{
        City: "Laruecester",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->