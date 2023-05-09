# SDK

### Available Operations

* [Correlation](#correlation) - Correlation
* [Indices](#indices) - Indices
* [InvestorGrades](#investorgrades) - Investor Grades
* [MarketIndicator](#marketindicator) - Market Indicator
* [Price](#price) - Price
* [PricePrediction](#priceprediction) - Price Prediction
* [QuantmetricsTier1](#quantmetricstier1) - Quantmetrics Tier 1
* [QuantmetricsTier2](#quantmetricstier2) - Quantmetrics Tier 2
* [ResistanceSupport](#resistancesupport) - Resistance & Support
* [ScenarioAnalysis](#scenarioanalysis) - Scenario Analysis
* [Sentiments](#sentiments) - Sentiments
* [Tokens](#tokens) - Tokens
* [TraderGrades](#tradergrades) - Trader Grades
* [TradingIndicator](#tradingindicator) - Trading Indicator

## Correlation

Correlation

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
    res, err := s.SDK.Correlation(ctx, operations.CorrelationRequest{
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Indices

Indices

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
    res, err := s.SDK.Indices(ctx, operations.IndicesRequest{
        EndDate: sdk.String("2023-01-11"),
        Exchanges: sdk.String("binance"),
        Limit: sdk.String("1000"),
        LowCap: sdk.String("true"),
        StartDate: sdk.String("2023-01-10"),
        TimeHorizon: sdk.String("daily"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InvestorGrades

Investor Grades

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
    res, err := s.SDK.InvestorGrades(ctx, operations.InvestorGradesRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        StartDate: sdk.String("2023-01-10"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MarketIndicator

Market Indicator

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
    res, err := s.SDK.MarketIndicator(ctx, operations.MarketIndicatorRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        StartDate: sdk.String("2023-01-10"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Price

Price

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
    res, err := s.SDK.Price(ctx, operations.PriceRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        Page: sdk.String("1"),
        StartDate: sdk.String("2023-01-10"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PricePrediction

Price Prediction

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
    res, err := s.SDK.PricePrediction(ctx, operations.PricePredictionRequest{
        Date: sdk.String("2023-02-01"),
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QuantmetricsTier1

Quantmetrics Tier 1

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
    res, err := s.SDK.QuantmetricsTier1(ctx, operations.QuantmetricsTier1Request{
        Date: sdk.String("2023-02-01"),
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QuantmetricsTier2

Quantmetrics Tier 2

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
    res, err := s.SDK.QuantmetricsTier2(ctx, operations.QuantmetricsTier2Request{
        Date: sdk.String("2023-02-01"),
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResistanceSupport

Resistance & Support

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
    res, err := s.SDK.ResistanceSupport(ctx, operations.ResistanceSupportRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        StartDate: sdk.String("2023-01-10"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ScenarioAnalysis

Scenario Analysis

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
    res, err := s.SDK.ScenarioAnalysis(ctx, operations.ScenarioAnalysisRequest{
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Sentiments

Sentiments

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
    res, err := s.SDK.Sentiments(ctx, operations.SentimentsRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        StartDate: sdk.String("2023-01-10"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Tokens

Tokens

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
    res, err := s.SDK.Tokens(ctx, operations.TokensRequest{
        TokenIds: sdk.String("3375, 3306"),
        TokenNames: sdk.String("Hivemapper, Sei_Network, Layer_Zero, Lyra Huobi"),
        TokenSymbols: sdk.String("bds, bds, btc"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TraderGrades

Trader Grades

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
    res, err := s.SDK.TraderGrades(ctx, operations.TraderGradesRequest{
        EndDate: sdk.String("2023-01-11"),
        Limit: sdk.String("1000"),
        StartDate: sdk.String("2023-01-10"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TradingIndicator

Trading Indicator

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
    res, err := s.SDK.TradingIndicator(ctx, operations.TradingIndicatorRequest{
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
