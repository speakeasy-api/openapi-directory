# CurrencyRates

### Available Operations

* [Getcurrencyrate](#getcurrencyrate) - Gets a foreign currency rate for one US Dollar

## Getcurrencyrate

Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.

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
    res, err := s.CurrencyRates.Getcurrencyrate(ctx, operations.GetcurrencyrateRequest{
        License: "distinctio",
        Symbol: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrencyrate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
