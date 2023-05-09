# PortfolioConstruction

### Available Operations

* [PostPortfolioConstructionInvestable](#postportfolioconstructioninvestable) - Investable Portfolio
* [PostPortfolioConstructionMimicking](#postportfolioconstructionmimicking) - Mimicking Portfolio
* [PostPortfolioConstructionRandom](#postportfolioconstructionrandom) - Random Portfolio

## PostPortfolioConstructionInvestable

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
* The desired assets weights
* The desired assets groups weights
* The desired maximum assets groups weights
* The prices of the assets
* The portfolio value
* The requirement to purchase some assets by round lots or by odd lots
* The possibility to purchase some assets by a fractional quantity of shares
* The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets

References
* [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)


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
    res, err := s.PortfolioConstruction.PostPortfolioConstructionInvestable(ctx, operations.PostPortfolioConstructionInvestableRequestBody{
        Assets: 578922,
        AssetsGroups: [][]int64{
            []int64{
                456911,
            },
            []int64{
                882042,
                82971,
                458604,
                800379,
            },
            []int64{
                877131,
                399025,
                93459,
            },
        },
        AssetsGroupsWeights: []float64{
            4263.06,
            6900.25,
            4732.21,
            6996.22,
        },
        AssetsMinimumNotionalValues: []float64{
            3277.2,
            7162.44,
            7567.79,
        },
        AssetsMinimumPositions: []float64{
            6360.61,
        },
        AssetsPrices: []float64{
            2400.2,
            7669.64,
            1605.38,
        },
        AssetsSizeLots: []float64{
            7963.92,
        },
        AssetsWeights: []float64{
            9591.67,
            2328.65,
        },
        MaximumAssetsGroupsWeights: []float64{
            5034.27,
            5909.84,
        },
        PortfolioValue: 9537.22,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioConstructionInvestable200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioConstructionMimicking

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References 
* Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)


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
    res, err := s.PortfolioConstruction.PostPortfolioConstructionMimicking(ctx, operations.PostPortfolioConstructionMimickingRequestBody{
        Assets: []PostPortfolioConstructionMimickingRequestBodyAssets{
            operations.PostPortfolioConstructionMimickingRequestBodyAssets{
                AssetReturns: []float64{
                    4572.23,
                    974.68,
                    9518.75,
                },
            },
            operations.PostPortfolioConstructionMimickingRequestBodyAssets{
                AssetReturns: []float64{
                    5757.51,
                    8630.23,
                    8207.67,
                },
            },
            operations.PostPortfolioConstructionMimickingRequestBodyAssets{
                AssetReturns: []float64{
                    9088.44,
                },
            },
            operations.PostPortfolioConstructionMimickingRequestBodyAssets{
                AssetReturns: []float64{
                    8155.24,
                    850.01,
                    1594.14,
                    944.58,
                },
            },
        },
        BenchmarkReturns: []float64{
            6336.08,
            3984.34,
            9492.98,
        },
        Constraints: &operations.PostPortfolioConstructionMimickingRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    424032,
                    447378,
                    258684,
                    727697,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    333.04,
                    3069.86,
                    9589.83,
                },
                []float64{
                    3553.69,
                },
                []float64{
                    3567.07,
                    3917.74,
                },
                []float64{
                    5318.49,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                8453.58,
            },
            MaximumAssetsWeights: []float64{
                5362.75,
                9292.92,
            },
            MaximumPortfolioExposure: sdk.Float64(6802.7),
            MinimumAssetsWeights: []float64{
                6091.78,
            },
            MinimumPortfolioExposure: sdk.Float64(9453.02),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioConstructionMimicking200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioConstructionRandom

Construct one or several random portfolio(s), optionally subject to:       
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

> Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.

References
* [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)


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
    res, err := s.PortfolioConstruction.PostPortfolioConstructionRandom(ctx, operations.PostPortfolioConstructionRandomRequestBody{
        Assets: 98478,
        Constraints: &operations.PostPortfolioConstructionRandomRequestBodyConstraints{
            MaximumAssetsWeights: []float64{
                920.27,
                4541.62,
                559.65,
                3267.01,
            },
            MaximumPortfolioExposure: sdk.Float64(865.32),
            MinimumAssetsWeights: []float64{
                2371.73,
            },
            MinimumPortfolioExposure: sdk.Float64(6144.65),
        },
        Portfolios: sdk.Int64(839513),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioConstructionRandom200ApplicationJSONObject != nil {
        // handle response
    }
}
```
