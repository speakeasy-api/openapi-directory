# LiveCurrencyRateConversion

### Available Operations

* [Convertcurrency](#convertcurrency) - Converts amount in one currency to that of another

## Convertcurrency

Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.

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
    res, err := s.LiveCurrencyRateConversion.Convertcurrency(ctx, operations.ConvertcurrencyRequest{
        Amount: "unde",
        From: "nulla",
        License: "corrupti",
        To: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Convertcurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
