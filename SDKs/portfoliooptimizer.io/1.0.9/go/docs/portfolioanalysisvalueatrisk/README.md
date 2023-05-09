# PortfolioAnalysisValueAtRisk

### Available Operations

* [PostPortfolioAnalysisValueAtRiskCornishFisher](#postportfolioanalysisvalueatriskcornishfisher) - Cornish-Fisher Value At Risk
* [PostPortfolioAnalysisValueAtRiskCornishFisherCorrected](#postportfolioanalysisvalueatriskcornishfishercorrected) - Corrected Cornish-Fisher Value At Risk
* [PostPortfolioAnalysisValueAtRiskGaussian](#postportfolioanalysisvalueatriskgaussian) - Gaussian Value At Risk
* [PostPortfolioAnalysisValueAtRiskHistorical](#postportfolioanalysisvalueatriskhistorical) - Historical Value At Risk

## PostPortfolioAnalysisValueAtRiskCornishFisher

Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


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
    res, err := s.PortfolioAnalysisValueAtRisk.PostPortfolioAnalysisValueAtRiskCornishFisher(ctx, operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody{
        ConfidenceLevel: sdk.Float64(2728.22),
        Portfolios: []PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios{
                PortfolioValues: []float64{
                    1334.65,
                    1970.54,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4598.56,
                    9251.64,
                    446.12,
                    7151.79,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4908.19,
                    769.56,
                    4694.98,
                    5188.35,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios{
                PortfolioValues: []float64{
                    3068.1,
                    4884.1,
                    5775.43,
                    4145.67,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskCornishFisher200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskCornishFisherCorrected

Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


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
    res, err := s.PortfolioAnalysisValueAtRisk.PostPortfolioAnalysisValueAtRiskCornishFisherCorrected(ctx, operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody{
        ConfidenceLevel: sdk.Float64(9594.34),
        Portfolios: []PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4752.89,
                    353.62,
                    7836.48,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskCornishFisherCorrected200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskGaussian

Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.

References
* [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2942138)


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
    res, err := s.PortfolioAnalysisValueAtRisk.PostPortfolioAnalysisValueAtRiskGaussian(ctx, operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBody{
        ConfidenceLevel: sdk.Float64(4304.02),
        Portfolios: []PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios{
                PortfolioValues: []float64{
                    1598.67,
                    5361.78,
                    1438.29,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios{
                PortfolioValues: []float64{
                    6494.63,
                    2775.96,
                    5392.24,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios{
                PortfolioValues: []float64{
                    3256.85,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskGaussian200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskHistorical

Compute the historical value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


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
    res, err := s.PortfolioAnalysisValueAtRisk.PostPortfolioAnalysisValueAtRiskHistorical(ctx, operations.PostPortfolioAnalysisValueAtRiskHistoricalRequestBody{
        ConfidenceLevel: sdk.Float64(3926.76),
        Portfolios: []PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    1598.7,
                    1871.31,
                    1294.12,
                    9039.84,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskHistorical200ApplicationJSONObject != nil {
        // handle response
    }
}
```
