# PortfolioOptimizationMeanVariance

### Available Operations

* [PostPortfolioOptimizationMaximumReturn](#postportfoliooptimizationmaximumreturn) - Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumReturnDiversified](#postportfoliooptimizationmaximumreturndiversified) - Diversified Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumReturnSubsetResamplingBased](#postportfoliooptimizationmaximumreturnsubsetresamplingbased) - Subset Resampling-Based Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatio](#postportfoliooptimizationmaximumsharperatio) - Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatioDiversified](#postportfoliooptimizationmaximumsharperatiodiversified) - Diversified Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased](#postportfoliooptimizationmaximumsharperatiosubsetresamplingbased) - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficient](#postportfoliooptimizationmeanvarianceefficient) - Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficientDiversified](#postportfoliooptimizationmeanvarianceefficientdiversified) - Diversified Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased](#postportfoliooptimizationmeanvarianceefficientsubsetresamplingbased) - Subset Resampling-Based Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMinimumVariance](#postportfoliooptimizationminimumvariance) - Minimum Variance Portfolio
* [PostPortfolioOptimizationMinimumVarianceDiversified](#postportfoliooptimizationminimumvariancediversified) - Diversified Minimum Variance Portfolio
* [PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased](#postportfoliooptimizationminimumvariancesubsetresamplingbased) - Subset Resampling-Based Minimum Variance Portfolio

## PostPortfolioOptimizationMaximumReturn

Compute the asset weights of the maximum return portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumReturn(ctx, operations.PostPortfolioOptimizationMaximumReturnRequestBody{
        Assets: 922348,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                1209.19,
                9233.06,
                6806.97,
            },
            []float64{
                2871.19,
                9682.87,
                429.76,
                9197.83,
            },
            []float64{
                360.33,
            },
        },
        AssetsReturns: []float64{
            1747.72,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumReturnRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    246535,
                    952143,
                },
                []int64{
                    300029,
                    906355,
                    160467,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    5979.37,
                    4463.94,
                    2380.43,
                    9078.76,
                },
                []float64{
                    1602.3,
                    1458.7,
                    6611.18,
                },
                []float64{
                    4402.64,
                    6255.28,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                3613.06,
            },
            MaximumAssetsWeights: []float64{
                9109.94,
                2473.99,
                8784.93,
            },
            MaximumPortfolioExposure: sdk.Float64(396.15),
            MinimumAssetsWeights: []float64{
                599.44,
                5176.12,
            },
            MinimumPortfolioExposure: sdk.Float64(610.78),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumReturn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumReturnDiversified

Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumReturnDiversified(ctx, operations.PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody{
        Assets: 474668,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                7398.84,
            },
            []float64{
                8980.63,
                1875.52,
            },
            []float64{
                7152.08,
                5289.4,
                5230.06,
            },
            []float64{
                3205.65,
                9979.63,
            },
        },
        AssetsReturns: []float64{
            3621.89,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumReturnDiversifiedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    649078,
                    378245,
                },
                []int64{
                    979527,
                },
                []int64{
                    174658,
                    663866,
                    327988,
                    293144,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    632.07,
                },
                []float64{
                    6072.49,
                    3092.51,
                    4776.46,
                    4032.18,
                },
                []float64{
                    6330.62,
                    2384.13,
                },
            },
            DeltaReturn: sdk.Float64(8906.53),
            DeltaVolatility: sdk.Float64(5145.13),
            MaximumAssetsGroupsWeights: []float64{
                3679.27,
                9282.19,
            },
            MaximumAssetsWeights: []float64{
                5920.81,
                3374.77,
            },
            MaximumPortfolioExposure: sdk.Float64(4317.85),
            MinimumAssetsWeights: []float64{
                5927.8,
                1334.39,
                3545.06,
                968.04,
            },
            MinimumPortfolioExposure: sdk.Float64(6570.2),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumReturnDiversified200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumReturnSubsetResamplingBased

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumReturnSubsetResamplingBased(ctx, operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody{
        Assets: 343392,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                8217.19,
                6591.77,
                4027.67,
            },
            []float64{
                375.65,
                9992.78,
            },
            []float64{
                3518.93,
                4481.43,
                7214.07,
                9376.36,
            },
        },
        AssetsReturns: []float64{
            6720.41,
            8130.54,
            2666.97,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    889794,
                    956933,
                    764562,
                },
                []int64{
                    698249,
                },
                []int64{
                    335498,
                    82057,
                },
                []int64{
                    765271,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    2419.01,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                4322.81,
            },
            MaximumAssetsWeights: []float64{
                5219.96,
                8710.83,
            },
            MaximumPortfolioExposure: sdk.Float64(7730.84),
            MinimumAssetsWeights: []float64{
                9587.41,
            },
            MinimumPortfolioExposure: sdk.Float64(4332.79),
        },
        SubsetPortfolios: sdk.Int64(117320),
        SubsetPortfoliosAggregationMethod: operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnumAverage.ToPointer(),
        SubsetPortfoliosEnumerationMethod: operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnumComplete.ToPointer(),
        SubsetSize: sdk.Int64(583404),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumReturnSubsetResamplingBased200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumSharpeRatio

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumSharpeRatio(ctx, operations.PostPortfolioOptimizationMaximumSharpeRatioRequestBody{
        Assets: 589695,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                9407.82,
                8481.51,
                525.08,
            },
            []float64{
                5962.11,
                9834.27,
                8918.01,
                3998.02,
            },
            []float64{
                3803.35,
                2115.34,
                1478.08,
                7649.95,
            },
            []float64{
                1890.62,
                6567.62,
                8987.6,
            },
        },
        AssetsReturns: []float64{
            89.31,
            972.58,
            902.33,
            4977.77,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    382440,
                    241557,
                    96562,
                },
                []int64{
                    984934,
                },
                []int64{
                    896582,
                    58534,
                    271113,
                    470621,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    4797.54,
                },
                []float64{
                    5083.9,
                    9799.63,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                4237.06,
                999.58,
                8571.25,
                396.5,
            },
            MaximumAssetsWeights: []float64{
                4837.06,
            },
            MaximumPortfolioExposure: sdk.Float64(2712.52),
            MinimumAssetsWeights: []float64{
                4037.93,
                2352.63,
            },
            MinimumPortfolioExposure: sdk.Float64(3998.12),
        },
        RiskFreeRate: 588.7,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumSharpeRatioDiversified

Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumSharpeRatioDiversified(ctx, operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody{
        Assets: 671384,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                8567.56,
                7137.67,
            },
        },
        AssetsReturns: []float64{
            6391.87,
            3813.97,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    431760,
                },
                []int64{
                    614528,
                    661607,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    8224.07,
                    9139.92,
                    6534.21,
                },
            },
            DeltaReturn: sdk.Float64(6717.94),
            DeltaVolatility: sdk.Float64(7263.43),
            MaximumAssetsGroupsWeights: []float64{
                5369.23,
                3162.2,
            },
            MaximumAssetsWeights: []float64{
                8333.16,
            },
            MaximumPortfolioExposure: sdk.Float64(4050.36),
            MinimumAssetsWeights: []float64{
                4053.73,
                2811.53,
                3210.43,
                7139.27,
            },
            MinimumPortfolioExposure: sdk.Float64(299.5),
        },
        RiskFreeRate: 5615.77,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumSharpeRatioDiversified200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased(ctx, operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody{
        Assets: 737254,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                5308.6,
            },
            []float64{
                852.33,
                7032.18,
                6656.78,
            },
        },
        AssetsReturns: []float64{
            296.34,
            9591.43,
            8892.88,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    867168,
                    891315,
                    29190,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    9372.19,
                    4042.44,
                    9583.08,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                7963.2,
                3651,
                9920.74,
            },
            MaximumAssetsWeights: []float64{
                3552.25,
            },
            MaximumPortfolioExposure: sdk.Float64(191.22),
            MinimumAssetsWeights: []float64{
                5181.5,
                7706.75,
                8427.77,
                7205.28,
            },
            MinimumPortfolioExposure: sdk.Float64(3732.16),
        },
        RiskFreeRate: 6334.15,
        SubsetPortfolios: sdk.Int64(222864),
        SubsetPortfoliosAggregationMethod: operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnumAverage.ToPointer(),
        SubsetPortfoliosEnumerationMethod: operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnumComplete.ToPointer(),
        SubsetSize: sdk.Int64(537279),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMeanVarianceEfficient

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

> A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).

References
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMeanVarianceEfficient(ctx, operations.PostPortfolioOptimizationMeanVarianceEfficientRequestBody{
        Assets: 85311,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                86.89,
            },
            []float64{
                249.44,
            },
        },
        AssetsReturns: []float64{
            1442.86,
            661.49,
        },
        Constraints: operations.PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    222658,
                },
                []int64{
                    369490,
                    162120,
                    55107,
                    559682,
                },
                []int64{
                    773456,
                    884952,
                    456410,
                    897277,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    1995.96,
                    7129.27,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                4269.43,
                5282.34,
            },
            MaximumAssetsWeights: []float64{
                3494.4,
                704.1,
            },
            MaximumPortfolioExposure: sdk.Float64(7814.8),
            MinimumAssetsWeights: []float64{
                7510.22,
                3883.19,
            },
            MinimumPortfolioExposure: sdk.Float64(9272.12),
            PortfolioReturn: sdk.Float64(1603.93),
            PortfolioVolatility: sdk.Float64(289.52),
            RiskTolerance: sdk.Float64(3502.07),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMeanVarianceEfficientDiversified

Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

> A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMeanVarianceEfficientDiversified(ctx, operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody{
        Assets: 895692,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                8711.03,
                8783.73,
            },
        },
        AssetsReturns: []float64{
            6907.85,
            1927.18,
            9873.49,
        },
        Constraints: operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    579681,
                    364544,
                    455898,
                    501063,
                },
                []int64{
                    376389,
                    254025,
                    364912,
                },
                []int64{
                    260904,
                    131903,
                    495970,
                },
                []int64{
                    681740,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    974.93,
                    5243.8,
                },
                []float64{
                    1173.8,
                    3955.44,
                    1598.45,
                    2330.78,
                },
                []float64{
                    5854.32,
                },
            },
            DeltaReturn: sdk.Float64(9707.32),
            DeltaVolatility: sdk.Float64(7468.37),
            MaximumAssetsGroupsWeights: []float64{
                6089.89,
            },
            MaximumAssetsWeights: []float64{
                5790.11,
            },
            MaximumPortfolioExposure: sdk.Float64(6128.67),
            MinimumAssetsWeights: []float64{
                813.69,
            },
            MinimumPortfolioExposure: sdk.Float64(6863.62),
            PortfolioReturn: sdk.Float64(8818.97),
            PortfolioVolatility: sdk.Float64(9768.02),
            RiskTolerance: sdk.Float64(7196.2),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMeanVarianceEfficientDiversified200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased(ctx, operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody{
        Assets: 608593,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                5076.36,
                8026.92,
            },
            []float64{
                8363.64,
                5495.01,
            },
            []float64{
                9308.19,
                4156.08,
            },
            []float64{
                9366.18,
                2672.07,
                7221.84,
            },
        },
        AssetsReturns: []float64{
            329.01,
            3719.19,
            4259.46,
            13.83,
        },
        Constraints: operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    978548,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    8587.78,
                    6436.78,
                    4585.03,
                },
                []float64{
                    4445.87,
                    6677.15,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                5718.44,
                8806.79,
            },
            MaximumAssetsWeights: []float64{
                9450.27,
                9001.03,
                9918.91,
                4043.06,
            },
            MaximumPortfolioExposure: sdk.Float64(3767.41),
            MinimumAssetsWeights: []float64{
                9661.48,
                650.82,
                7918.8,
                6854.78,
            },
            MinimumPortfolioExposure: sdk.Float64(6756.89),
            PortfolioReturn: sdk.Float64(2310.7),
            PortfolioVolatility: sdk.Float64(2448.89),
            RiskTolerance: sdk.Float64(5388.69),
        },
        SubsetPortfolios: sdk.Int64(216457),
        SubsetPortfoliosAggregationMethod: operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnumMedian.ToPointer(),
        SubsetPortfoliosEnumerationMethod: operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnumComplete.ToPointer(),
        SubsetSize: sdk.Int64(746585),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMinimumVariance

Compute the asset weights of the minimum variance portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMinimumVariance(ctx, operations.PostPortfolioOptimizationMinimumVarianceRequestBody{
        Assets: 922757,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                4828.92,
                4530.94,
            },
            []float64{
                4939.58,
            },
            []float64{
                7781.72,
            },
        },
        AssetsReturns: []float64{
            8442.35,
            4378.14,
            1390.72,
        },
        Constraints: &operations.PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    300824,
                    842855,
                },
                []int64{
                    818034,
                },
                []int64{
                    102413,
                    975425,
                    156383,
                },
                []int64{
                    304198,
                    247045,
                    75359,
                    36561,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    1076.17,
                    8777.51,
                },
                []float64{
                    4319.94,
                    2465.57,
                    2840.86,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                9353.02,
                1175.25,
                7722.66,
            },
            MaximumAssetsWeights: []float64{
                6109.87,
                9325.62,
                26.77,
                3917.97,
            },
            MaximumPortfolioExposure: sdk.Float64(9315.05),
            MinimumAssetsWeights: []float64{
                6738.38,
            },
            MinimumPortfolioExposure: sdk.Float64(2503.98),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMinimumVariance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMinimumVarianceDiversified

Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMinimumVarianceDiversified(ctx, operations.PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody{
        Assets: 224467,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                399.92,
            },
            []float64{
                6397.05,
            },
        },
        AssetsReturns: []float64{
            4083.03,
            6931.53,
            3774.06,
            7051.48,
        },
        Constraints: &operations.PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    709036,
                    537236,
                    954334,
                },
                []int64{
                    351936,
                    600193,
                },
                []int64{
                    654082,
                    769967,
                    373040,
                    357425,
                },
                []int64{
                    621666,
                    456885,
                    288570,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    2331.73,
                    1124.27,
                    813.71,
                    2124.34,
                },
            },
            DeltaReturn: sdk.Float64(3220.17),
            DeltaVolatility: sdk.Float64(1830.33),
            MaximumAssetsGroupsWeights: []float64{
                4030.26,
                3676.26,
                7452.33,
            },
            MaximumAssetsWeights: []float64{
                5269.07,
                6780.6,
                4876.76,
            },
            MaximumPortfolioExposure: sdk.Float64(1446.91),
            MinimumAssetsWeights: []float64{
                1680.42,
            },
            MinimumPortfolioExposure: sdk.Float64(4254.02),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMinimumVarianceDiversified200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
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
    res, err := s.PortfolioOptimizationMeanVariance.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased(ctx, operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody{
        Assets: 64435,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                2082.53,
                3483.57,
            },
        },
        AssetsReturns: []float64{
            882.48,
            2153.98,
            6022.29,
            8583.38,
        },
        Constraints: &operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    157222,
                    159146,
                    342137,
                    605712,
                },
                []int64{
                    115661,
                    663318,
                    727888,
                },
                []int64{
                    637462,
                    554603,
                    811939,
                    25756,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    9148.64,
                },
                []float64{
                    493.48,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                2928.88,
                7551.06,
                7150.53,
            },
            MaximumAssetsWeights: []float64{
                4181.09,
            },
            MaximumPortfolioExposure: sdk.Float64(4566.88),
            MinimumAssetsWeights: []float64{
                8247.98,
            },
            MinimumPortfolioExposure: sdk.Float64(1072.1),
        },
        SubsetPortfolios: sdk.Int64(668606),
        SubsetPortfoliosAggregationMethod: operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnumMedian.ToPointer(),
        SubsetPortfoliosEnumerationMethod: operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnumRandomSampling.ToPointer(),
        SubsetSize: sdk.Int64(473143),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased200ApplicationJSONObject != nil {
        // handle response
    }
}
```
