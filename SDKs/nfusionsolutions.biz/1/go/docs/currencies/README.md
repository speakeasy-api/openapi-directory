# Currencies

### Available Operations

* [CurrenciesHistoryGET](#currencieshistoryget) - Get historical prices for requested currency pairs
* [CurrenciesRateGET](#currenciesrateget) - Get latest mid rate for requested currency pairs
* [CurrenciesSummaryGET](#currenciessummaryget) - Get latest Summary for requested currency pairs
* [CurrenciesSupportedCurrenciesHistoryGET](#currenciessupportedcurrencieshistoryget) - Get list of currency pairs supported by the history endpoint
* [CurrenciesSupportedCurrenciesRateGET](#currenciessupportedcurrenciesrateget) - Get list of currencies supported by the rate endpoint
* [CurrenciesSupportedCurrenciesSummaryGET](#currenciessupportedcurrenciessummaryget) - Get list of currency pairs supported by the Summary endpoint

## CurrenciesHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesHistoryGET(ctx, operations.CurrenciesHistoryGETRequest{
        End: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
        Format: operations.CurrenciesHistoryGETFormatEnumXML.ToPointer(),
        Interval: sdk.String("deserunt"),
        Pairs: "suscipit",
        Start: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## CurrenciesRateGET

Current Mid Rate

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesRateGET(ctx, operations.CurrenciesRateGETRequest{
        Format: operations.CurrenciesRateGETFormatEnumXML.ToPointer(),
        Pairs: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RateResponses != nil {
        // handle response
    }
}
```

## CurrenciesSummaryGET

Current and daily summary information combined into a single quote

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesSummaryGET(ctx, operations.CurrenciesSummaryGETRequest{
        Format: operations.CurrenciesSummaryGETFormatEnumXML.ToPointer(),
        Pairs: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummaryResponses != nil {
        // handle response
    }
}
```

## CurrenciesSupportedCurrenciesHistoryGET

Only the currency pairs in the direction noted can be used with the history endpoint.
For example: USD/CAD is not the same as CAD/USD

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesSupportedCurrenciesHistoryGET(ctx, operations.CurrenciesSupportedCurrenciesHistoryGETRequest{
        Format: operations.CurrenciesSupportedCurrenciesHistoryGETFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurrenciesSupportedCurrenciesHistoryGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## CurrenciesSupportedCurrenciesRateGET

Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesSupportedCurrenciesRateGET(ctx, operations.CurrenciesSupportedCurrenciesRateGETRequest{
        Format: operations.CurrenciesSupportedCurrenciesRateGETFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurrenciesSupportedCurrenciesRateGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## CurrenciesSupportedCurrenciesSummaryGET

Only the currency pairs in the direction noted can be used with the Summary endpoint.
For example: USD/CAD is not the same as CAD/USD

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesSupportedCurrenciesSummaryGET(ctx, operations.CurrenciesSupportedCurrenciesSummaryGETRequest{
        Format: operations.CurrenciesSupportedCurrenciesSummaryGETFormatEnumXML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurrenciesSupportedCurrenciesSummaryGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
