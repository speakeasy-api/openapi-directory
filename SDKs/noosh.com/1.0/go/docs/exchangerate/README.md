# ExchangeRate

### Available Operations

* [GetExchangeRateList](#getexchangeratelist) - Get Exchange Rate List
* [PostExchangeRateJSON](#postexchangeratejson) - Create Exchange Rates
* [PostExchangeRateRaw](#postexchangerateraw) - Create Exchange Rates

## GetExchangeRateList

Get Exchange Rate List

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
    res, err := s.ExchangeRate.GetExchangeRateList(ctx, operations.GetExchangeRateListRequest{
        WorkgroupID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostExchangeRateJSON

Create Exchange Rates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ExchangeRate.PostExchangeRateJSON(ctx, operations.PostExchangeRateJSONRequest{
        MultiExchangeRatePersistListVO: &shared.MultiExchangeRatePersistListVO{
            ExchangeRates: []shared.MultiExchangeRatePersisitVO{
                shared.MultiExchangeRatePersisitVO{
                    ActivateDate: types.MustDateFromString("2022-05-14"),
                    BuClientWorkgroupID: sdk.Int64(1),
                    Currency: sdk.String("sample currency"),
                    Rate: sdk.String("consequuntur"),
                    Target: sdk.String("sample target"),
                },
                shared.MultiExchangeRatePersisitVO{
                    ActivateDate: types.MustDateFromString("2021-01-15"),
                    BuClientWorkgroupID: sdk.Int64(1),
                    Currency: sdk.String("sample currency"),
                    Rate: sdk.String("occaecati"),
                    Target: sdk.String("sample target"),
                },
                shared.MultiExchangeRatePersisitVO{
                    ActivateDate: types.MustDateFromString("2022-08-02"),
                    BuClientWorkgroupID: sdk.Int64(1),
                    Currency: sdk.String("sample currency"),
                    Rate: sdk.String("quam"),
                    Target: sdk.String("sample target"),
                },
            },
        },
        WorkgroupID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostExchangeRateRaw

Create Exchange Rates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ExchangeRate.PostExchangeRateRaw(ctx, operations.PostExchangeRateRawRequest{
        RequestBody: []byte("velit"),
        WorkgroupID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
