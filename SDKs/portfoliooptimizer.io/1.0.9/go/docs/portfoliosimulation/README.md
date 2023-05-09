# PortfolioSimulation

### Available Operations

* [PostPortfolioSimulationRebalancingDriftWeight](#postportfoliosimulationrebalancingdriftweight) - Drift-weight Portfolio Rebalancing
* [PostPortfolioSimulationRebalancingFixedWeight](#postportfoliosimulationrebalancingfixedweight) - Fixed-weight Portfolio Rebalancing
* [PostPortfolioSimulationRebalancingRandomWeight](#postportfoliosimulationrebalancingrandomweight) - Random-weight Portfolio Rebalancing

## PostPortfolioSimulationRebalancingDriftWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)


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
    res, err := s.PortfolioSimulation.PostPortfolioSimulationRebalancingDriftWeight(ctx, operations.PostPortfolioSimulationRebalancingDriftWeightRequestBody{
        Assets: []PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets{
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets{
                AssetPrices: []float64{
                    8964.8,
                    7332.89,
                    5750.78,
                    4097.26,
                },
            },
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets{
                AssetPrices: []float64{
                    3735.11,
                    7029.52,
                },
            },
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets{
                AssetPrices: []float64{
                    3572.07,
                    8890.6,
                    9729.12,
                },
            },
        },
        Portfolios: []PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios{
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios{
                AssetsWeights: []float64{
                    51.52,
                    1566.53,
                    6941.58,
                    6841.26,
                },
            },
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios{
                AssetsWeights: []float64{
                    340.7,
                    7104.56,
                    8852.08,
                    1770.05,
                },
            },
            operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios{
                AssetsWeights: []float64{
                    4835.18,
                    5101.28,
                    1403.16,
                    1276.88,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioSimulationRebalancingFixedWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        


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
    res, err := s.PortfolioSimulation.PostPortfolioSimulationRebalancingFixedWeight(ctx, operations.PostPortfolioSimulationRebalancingFixedWeightRequestBody{
        Assets: []PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets{
            operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets{
                AssetPrices: []float64{
                    9371.17,
                    2393.37,
                    9233.06,
                },
            },
            operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets{
                AssetPrices: []float64{
                    2828.37,
                    6937.46,
                    3396.31,
                },
            },
        },
        Portfolios: []PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios{
            operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios{
                AssetsWeights: []float64{
                    4769.46,
                    9631.98,
                    5855.93,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioSimulationRebalancingRandomWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.

References
* [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)


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
    res, err := s.PortfolioSimulation.PostPortfolioSimulationRebalancingRandomWeight(ctx, operations.PostPortfolioSimulationRebalancingRandomWeightRequestBody{
        Assets: []PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets{
            operations.PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets{
                AssetPrices: []float64{
                    2569.16,
                    2010.1,
                },
            },
        },
        Portfolios: sdk.Int64(873557),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject != nil {
        // handle response
    }
}
```
