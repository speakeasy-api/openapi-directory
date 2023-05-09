# Currencies

### Available Operations

* [ListSupportedCurrenciesV2](#listsupportedcurrenciesv2) - List Supported Currencies

## ListSupportedCurrenciesV2

List the supported currencies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.ListSupportedCurrenciesV2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SupportedCurrencyResponseV2 != nil {
        // handle response
    }
}
```
