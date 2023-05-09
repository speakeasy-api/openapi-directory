# Metals

### Available Operations

* [MetalsBenchmarkHistoryGET](#metalsbenchmarkhistoryget) - Get historical benchmark prices for requested metals
* [MetalsBenchmarkSummaryGET](#metalsbenchmarksummaryget) - Get latest Benchmark prices for requested metals
* [MetalsBenchmarkSupportedMetalsGET](#metalsbenchmarksupportedmetalsget) - Get list of symbols supported by the benchmark endpoints
* [MetalsSpotAnnualHistoricalPerformanceGET](#metalsspotannualhistoricalperformanceget) - Get Historical Annual Performance for requested metals
* [MetalsSpotHistoricalPerformanceGET](#metalsspothistoricalperformanceget) - Get Historical Performance for requested metals
* [MetalsSpotHistoryGET](#metalsspothistoryget) - Get historical Spot prices for requested metals
* [MetalsSpotRatioHistoryGET](#metalsspotratiohistoryget) - Get historical Spot Ratio prices for requested metals
* [MetalsSpotRatioSummaryGET](#metalsspotratiosummaryget) - Get latest Spot Summary for requested metal ratios
* [MetalsSpotSummaryGET](#metalsspotsummaryget) - Get latest Spot Summary for requested metals
* [MetalsSpotSupportedMetalsGET](#metalsspotsupportedmetalsget) - Get list of symbols supported by the spot endpoints
* [MetalsSupportedCurrenciesMetalsGET](#metalssupportedcurrenciesmetalsget) - Get list of currencies supported by metals endpoints for currency conversion

## MetalsBenchmarkHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

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
    res, err := s.Metals.MetalsBenchmarkHistoryGET(ctx, operations.MetalsBenchmarkHistoryGETRequest{
        Currency: sdk.String("placeat"),
        End: types.MustTimeFromString("2022-01-15T14:47:59.325Z"),
        Format: operations.MetalsBenchmarkHistoryGETFormatEnumXML.ToPointer(),
        Historicalfx: sdk.Bool(false),
        Interval: sdk.String("nisi"),
        Metals: "recusandae",
        Start: types.MustTimeFromString("2022-10-15T05:10:19.629Z"),
        Unitofmeasure: operations.MetalsBenchmarkHistoryGETUnitofmeasureEnumKg.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## MetalsBenchmarkSummaryGET

Benchmark price information

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
    res, err := s.Metals.MetalsBenchmarkSummaryGET(ctx, operations.MetalsBenchmarkSummaryGETRequest{
        Currency: sdk.String("veritatis"),
        Format: operations.MetalsBenchmarkSummaryGETFormatEnumXML.ToPointer(),
        Metals: "perferendis",
        Unitofmeasure: operations.MetalsBenchmarkSummaryGETUnitofmeasureEnumKg.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummaryResponses != nil {
        // handle response
    }
}
```

## MetalsBenchmarkSupportedMetalsGET

Get list of symbols supported by the benchmark endpoints

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
    res, err := s.Metals.MetalsBenchmarkSupportedMetalsGET(ctx, operations.MetalsBenchmarkSupportedMetalsGETRequest{
        Format: operations.MetalsBenchmarkSupportedMetalsGETFormatEnumXML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetalsBenchmarkSupportedMetalsGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## MetalsSpotAnnualHistoricalPerformanceGET

Annual Historical Performance information

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
    res, err := s.Metals.MetalsSpotAnnualHistoricalPerformanceGET(ctx, operations.MetalsSpotAnnualHistoricalPerformanceGETRequest{
        Currency: sdk.String("sapiente"),
        Format: operations.MetalsSpotAnnualHistoricalPerformanceGETFormatEnumXML.ToPointer(),
        Metals: "odit",
        Unitofmeasure: operations.MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnumCt.ToPointer(),
        Years: sdk.Int(870088),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## MetalsSpotHistoricalPerformanceGET

Historical Performance information

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
    res, err := s.Metals.MetalsSpotHistoricalPerformanceGET(ctx, operations.MetalsSpotHistoricalPerformanceGETRequest{
        Currency: sdk.String("maiores"),
        Format: operations.MetalsSpotHistoricalPerformanceGETFormatEnumJSON.ToPointer(),
        Metals: "quod",
        Unitofmeasure: operations.MetalsSpotHistoricalPerformanceGETUnitofmeasureEnumCt.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## MetalsSpotHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

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
    res, err := s.Metals.MetalsSpotHistoryGET(ctx, operations.MetalsSpotHistoryGETRequest{
        Currency: sdk.String("esse"),
        End: types.MustTimeFromString("2021-06-10T05:07:43.614Z"),
        Format: operations.MetalsSpotHistoryGETFormatEnumXML.ToPointer(),
        Historicalfx: sdk.Bool(false),
        Interval: sdk.String("dicta"),
        Metals: "nam",
        Start: types.MustTimeFromString("2021-11-02T03:00:47.309Z"),
        Unitofmeasure: operations.MetalsSpotHistoryGETUnitofmeasureEnumG.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## MetalsSpotRatioHistoryGET

Historical data for the specified period and interval size

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
    res, err := s.Metals.MetalsSpotRatioHistoryGET(ctx, operations.MetalsSpotRatioHistoryGETRequest{
        End: types.MustTimeFromString("2021-02-10T09:24:01.909Z"),
        Format: operations.MetalsSpotRatioHistoryGETFormatEnumXML.ToPointer(),
        Interval: sdk.String("totam"),
        Pairs: "beatae",
        Start: types.MustTimeFromString("2022-07-12T03:15:36.542Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```

## MetalsSpotRatioSummaryGET

Ratios between prices of two metals

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
    res, err := s.Metals.MetalsSpotRatioSummaryGET(ctx, operations.MetalsSpotRatioSummaryGETRequest{
        Format: operations.MetalsSpotRatioSummaryGETFormatEnumJSON.ToPointer(),
        Pairs: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummaryResponses != nil {
        // handle response
    }
}
```

## MetalsSpotSummaryGET

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
    res, err := s.Metals.MetalsSpotSummaryGET(ctx, operations.MetalsSpotSummaryGETRequest{
        Currency: sdk.String("impedit"),
        Format: operations.MetalsSpotSummaryGETFormatEnumXML.ToPointer(),
        Metals: "esse",
        Unitofmeasure: operations.MetalsSpotSummaryGETUnitofmeasureEnumG.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummaryResponses != nil {
        // handle response
    }
}
```

## MetalsSpotSupportedMetalsGET

Get list of symbols supported by the spot endpoints

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
    res, err := s.Metals.MetalsSpotSupportedMetalsGET(ctx, operations.MetalsSpotSupportedMetalsGETRequest{
        Format: operations.MetalsSpotSupportedMetalsGETFormatEnumXML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetalsSpotSupportedMetalsGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## MetalsSupportedCurrenciesMetalsGET

Get list of currencies supported by metals endpoints for currency conversion

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
    res, err := s.Metals.MetalsSupportedCurrenciesMetalsGET(ctx, operations.MetalsSupportedCurrenciesMetalsGETRequest{
        Format: operations.MetalsSupportedCurrenciesMetalsGETFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetalsSupportedCurrenciesMetalsGET200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
