# PortfolioAnalysisSharpeRatio

### Available Operations

* [PostPortfolioAnalysisSharpeRatio](#postportfolioanalysissharperatio) - Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioBiasAdjusted](#postportfolioanalysissharperatiobiasadjusted) - Bias-Adjusted Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioConfidenceInterval](#postportfolioanalysissharperatioconfidenceinterval) - Sharpe Ratio Confidence Interval
* [PostPortfolioAnalysisSharpeRatioProbabilistic](#postportfolioanalysissharperatioprobabilistic) - Probabilistic Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength](#postportfolioanalysissharperatioprobabilisticminimumtrackrecordlength) - Minimum Track Record Length

## PostPortfolioAnalysisSharpeRatio

Compute the Sharpe ratio of one or several portfolio(s) from either:
* Portfolio assets arithmetic returns and assets covariance matrix
* Portfolio values

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioAnalysisSharpeRatio.PostPortfolioAnalysisSharpeRatio(ctx, operations.PostPortfolioAnalysisSharpeRatioRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisSharpeRatio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisSharpeRatioBiasAdjusted

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.

References
* [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioAnalysisSharpeRatio.PostPortfolioAnalysisSharpeRatioBiasAdjusted(ctx, operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody{
        Portfolios: []PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios{
            operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    3799.27,
                    8268.71,
                },
            },
            operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    5093.42,
                },
            },
        },
        RiskFreeRate: 7885.46,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisSharpeRatioConfidenceInterval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioAnalysisSharpeRatio.PostPortfolioAnalysisSharpeRatioConfidenceInterval(ctx, operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody{
        ConfidenceIntervalType: operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnumTwoSided.ToPointer(),
        ConfidenceLevel: sdk.Float64(568.48),
        Portfolios: []PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios{
            operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    2065.94,
                    7786.96,
                    8472.76,
                },
            },
            operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    6813.59,
                    2594.22,
                    1783.67,
                    3738.13,
                },
            },
            operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    5876,
                },
            },
        },
        RiskFreeRate: 96.88,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisSharpeRatioProbabilistic

Compute the probabilistic Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioAnalysisSharpeRatio.PostPortfolioAnalysisSharpeRatioProbabilistic(ctx, operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength

Compute the minimum track record length of one or several portfolio(s).

References
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioAnalysisSharpeRatio.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength(ctx, operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONObject != nil {
        // handle response
    }
}
```
