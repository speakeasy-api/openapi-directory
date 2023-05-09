# PortfolioAnalysisConditionalValueAtRisk

### Available Operations

* [PostPortfolioAnalysisValueAtRiskConditionalCornishFisher](#postportfolioanalysisvalueatriskconditionalcornishfisher) - Cornish-Fisher Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected](#postportfolioanalysisvalueatriskconditionalcornishfishercorrected) - Corrected Cornish-Fisher Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalGaussian](#postportfolioanalysisvalueatriskconditionalgaussian) - Gaussian Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalHistorical](#postportfolioanalysisvalueatriskconditionalhistorical) - Historical Conditional Value At Risk

## PostPortfolioAnalysisValueAtRiskConditionalCornishFisher

Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
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
    res, err := s.PortfolioAnalysisConditionalValueAtRisk.PostPortfolioAnalysisValueAtRiskConditionalCornishFisher(ctx, operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody{
        ConfidenceLevel: sdk.Float64(3045.82),
        Portfolios: []PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios{
                PortfolioValues: []float64{
                    795.22,
                    2506.22,
                    896.03,
                    6774.12,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskConditionalCornishFisher200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected

Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
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
    res, err := s.PortfolioAnalysisConditionalValueAtRisk.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected(ctx, operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody{
        ConfidenceLevel: sdk.Float64(6720.48),
        Portfolios: []PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4321.48,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    7521.35,
                    5573.69,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    8605.52,
                    3790.34,
                    7270.44,
                    965.49,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios{
                PortfolioValues: []float64{
                    2561.39,
                    1314.82,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskConditionalGaussian

Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).


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
    res, err := s.PortfolioAnalysisConditionalValueAtRisk.PostPortfolioAnalysisValueAtRiskConditionalGaussian(ctx, operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody{
        ConfidenceLevel: sdk.Float64(5919.35),
        Portfolios: []PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios{
                PortfolioValues: []float64{
                    3015.98,
                    4879.35,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskConditionalGaussian200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisValueAtRiskConditionalHistorical

Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.

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
    res, err := s.PortfolioAnalysisConditionalValueAtRisk.PostPortfolioAnalysisValueAtRiskConditionalHistorical(ctx, operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody{
        ConfidenceLevel: sdk.Float64(2621.18),
        Portfolios: []PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios{
            operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    5245.93,
                    6832.82,
                },
            },
            operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios{
                PortfolioValues: []float64{
                    6956.26,
                    8526.35,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisValueAtRiskConditionalHistorical200ApplicationJSONObject != nil {
        // handle response
    }
}
```
