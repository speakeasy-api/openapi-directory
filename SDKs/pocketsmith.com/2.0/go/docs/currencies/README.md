# Currencies

### Available Operations

* [GetCurrencies](#getcurrencies) - List currencies
* [GetCurrenciesID](#getcurrenciesid) - Get currency

## GetCurrencies

Lists currencies supported by PocketSmith.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.GetCurrencies(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Currencies != nil {
        // handle response
    }
}
```

## GetCurrenciesID

Gets a particular currency by its ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.GetCurrenciesID(ctx, operations.GetCurrenciesIDRequest{
        ID: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Currency != nil {
        // handle response
    }
}
```
