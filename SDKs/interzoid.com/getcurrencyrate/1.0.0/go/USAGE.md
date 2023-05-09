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
    res, err := s.CurrencyRates.Getcurrencyrate(ctx, operations.GetcurrencyrateRequest{
        License: "corrupti",
        Symbol: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrencyrate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->