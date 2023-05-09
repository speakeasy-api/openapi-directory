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
    res, err := s.CityDataStandardization.Getcitystandard(ctx, operations.GetcitystandardRequest{
        City: "Laruecester",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->