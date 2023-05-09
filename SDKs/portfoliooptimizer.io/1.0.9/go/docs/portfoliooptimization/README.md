# PortfolioOptimization

### Available Operations

* [PostPortfolioOptimizationEqualRiskContributions](#postportfoliooptimizationequalriskcontributions) - Equal Risk Contributions Portfolio
* [PostPortfolioOptimizationEqualSharpeRatioContributions](#postportfoliooptimizationequalsharperatiocontributions) - Equal Sharpe Ratio Contributions Portfolio
* [PostPortfolioOptimizationEqualVolatilityWeighted](#postportfoliooptimizationequalvolatilityweighted) - Equal Volatility Weighted Portfolio
* [PostPortfolioOptimizationEqualWeighted](#postportfoliooptimizationequalweighted) - Equal Weighted Portfolio
* [PostPortfolioOptimizationHierarchicalRiskParity](#postportfoliooptimizationhierarchicalriskparity) - Hierarchical Risk Parity Portfolio
* [PostPortfolioOptimizationHierarchicalRiskParityClusteringBased](#postportfoliooptimizationhierarchicalriskparityclusteringbased) - Hierarchical Clustering-Based Risk Parity Portfolio
* [PostPortfolioOptimizationInverseVarianceWeighted](#postportfoliooptimizationinversevarianceweighted) - Inverse Variance Weighted Portfolio
* [PostPortfolioOptimizationInverseVolatilityWeighted](#postportfoliooptimizationinversevolatilityweighted) - Inverse Volatility Weighted Portfolio
* [PostPortfolioOptimizationMarketCapitalizationWeighted](#postportfoliooptimizationmarketcapitalizationweighted) - Market Capitalization Weighted Portfolio
* [PostPortfolioOptimizationMaximumDecorrelation](#postportfoliooptimizationmaximumdecorrelation) - Maximum Decorrelation Portfolio
* [PostPortfolioOptimizationMaximumUlcerPerformanceIndex](#postportfoliooptimizationmaximumulcerperformanceindex) - Maximum Ulcer Performance Index Portfolio
* [PostPortfolioOptimizationMinimumCorrelation](#postportfoliooptimizationminimumcorrelation) - Minimum Correlation Portfolio
* [PostPortfolioOptimizationMinimumUlcerIndex](#postportfoliooptimizationminimumulcerindex) - Minimum Ulcer Index Portfolio
* [PostPortfolioOptimizationMostDiversified](#postportfoliooptimizationmostdiversified) - Most Diversified Portfolio

## PostPortfolioOptimizationEqualRiskContributions

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:  
* Minimum and maximum weights constraints  

References
 * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationEqualRiskContributions(ctx, operations.PostPortfolioOptimizationEqualRiskContributionsRequestBody{
        Assets: 33074,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                5130.75,
            },
            []float64{
                6498.32,
                680.74,
            },
            []float64{
                2519.41,
                324.65,
                2211.61,
            },
        },
        Constraints: &operations.PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints{
            MaximumAssetsWeights: []float64{
                2531.91,
                7710.89,
                1310.55,
            },
            MinimumAssetsWeights: []float64{
                120.36,
                4910.25,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationEqualSharpeRatioContributions

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.

References
 * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationEqualSharpeRatioContributions(ctx, operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody{
        Assets: 115484,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                2446.51,
                9742.57,
                3743.23,
            },
            []float64{
                456.59,
                4090.54,
                3100.67,
                1629.54,
            },
            []float64{
                6387.62,
                8070.23,
                4903.05,
                6400.24,
            },
            []float64{
                3681.02,
                653.04,
                3127.53,
                7832.35,
            },
        },
        AssetsReturns: []float64{
            2883.98,
            704.47,
            2414.18,
            6835.73,
        },
        RiskFreeRate: 6625.05,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationEqualVolatilityWeighted

Compute the asset weights of the equal volatility-weighted portfolio.

References
 * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationEqualVolatilityWeighted(ctx, operations.PostPortfolioOptimizationEqualVolatilityWeightedRequestBody{
        Assets: 380729,
        AssetsVolatilities: []float64{
            6339.31,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationEqualWeighted

Compute the asset weights of the equal-weighted portfolio.

References
 * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationEqualWeighted(ctx, operations.PostPortfolioOptimizationEqualWeightedRequestBody{
        Assets: 665859,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationEqualWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationHierarchicalRiskParity

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationHierarchicalRiskParity(ctx, operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBody{
        Assets: 926880,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                4240.89,
                4976.78,
                5546.88,
                4278.34,
            },
            []float64{
                8225.6,
                7065.75,
            },
            []float64{
                4148.57,
                4471.44,
                3605.45,
            },
        },
        ClusteringMethod: operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnumWardLinkage.ToPointer(),
        ClusteringOrdering: operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnumOptimal.ToPointer(),
        Constraints: &operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints{
            MaximumAssetsWeights: []float64{
                9249.67,
                3975.33,
            },
            MaximumPortfolioExposure: sdk.Float64(460.07),
            MinimumAssetsWeights: []float64{
                2326.27,
                4490.83,
                3485.19,
            },
            MinimumPortfolioExposure: sdk.Float64(9372.85),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationHierarchicalRiskParity200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationHierarchicalRiskParityClusteringBased

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
 * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
 * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationHierarchicalRiskParityClusteringBased(ctx, operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody{
        AcrossClusterAllocationMethod: operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnumInverseVariance.ToPointer(),
        Assets: 257233,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                9689.72,
                6971.42,
            },
            []float64{
                8970.71,
                2965.56,
                1210.59,
                9920.12,
            },
            []float64{
                2494.2,
            },
            []float64{
                1059.06,
            },
        },
        ClusteringMethod: operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnumAverageLinkage.ToPointer(),
        ClusteringOrdering: operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnumOptimal.ToPointer(),
        Clusters: sdk.Int64(891523),
        Constraints: &operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints{
            MaximumAssetsWeights: []float64{
                3581.07,
            },
            MaximumPortfolioExposure: sdk.Float64(6897.68),
            MinimumAssetsWeights: []float64{
                583.56,
                9167.27,
            },
            MinimumPortfolioExposure: sdk.Float64(7307.09),
        },
        WithinClusterAllocationMethod: operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnumEqualWeighting.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationInverseVarianceWeighted

Compute the asset weights of the inverse variance-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationInverseVarianceWeighted(ctx, operations.PostPortfolioOptimizationInverseVarianceWeightedRequestBody{
        Assets: 881721,
        AssetsVariances: []float64{
            2724.37,
            1328.15,
            3790.57,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationInverseVolatilityWeighted

Compute the asset weights of the inverse volatility-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationInverseVolatilityWeighted(ctx, operations.PostPortfolioOptimizationInverseVolatilityWeightedRequestBody{
        Assets: 374244,
        AssetsVolatilities: []float64{
            3244.05,
            7487.89,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMarketCapitalizationWeighted

Compute the asset weights of the market capitalization-weighted portfolio.

References
 * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMarketCapitalizationWeighted(ctx, operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody{
        Assets: 680116,
        AssetsMarketCapitalizations: []float64{
            7955.35,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumDecorrelation

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMaximumDecorrelation(ctx, operations.PostPortfolioOptimizationMaximumDecorrelationRequestBody{
        Assets: 171853,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                2962.42,
                3044.68,
            },
            []float64{
                8391.89,
                3518.7,
                2377.42,
                7383.91,
            },
            []float64{
                5553.61,
                9425.84,
                2015.17,
            },
        },
        AssetsReturns: []float64{
            5485.19,
            8672.9,
            5196.43,
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    750765,
                    24619,
                },
                []int64{
                    148829,
                    967966,
                    131852,
                },
                []int64{
                    707918,
                    451822,
                    709072,
                    70869,
                },
                []int64{
                    292794,
                    671907,
                    152354,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    6960.77,
                    1312.89,
                },
                []float64{
                    6041.18,
                    1000.32,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                9602.57,
                8953.86,
            },
            MaximumAssetsWeights: []float64{
                9677.95,
            },
            MaximumPortfolioExposure: sdk.Float64(193),
            MinimumAssetsWeights: []float64{
                9795.74,
                2748.23,
                1484.78,
            },
            MinimumPortfolioExposure: sdk.Float64(5922.31),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMaximumUlcerPerformanceIndex

Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

Notes:  
* This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMaximumUlcerPerformanceIndex(ctx, operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody{
        Assets: []PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets{
            operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets{
                AssetPrices: []float64{
                    2155.29,
                    4067.33,
                    5799.12,
                    5520.78,
                },
            },
            operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets{
                AssetPrices: []float64{
                    2716.53,
                    2730.09,
                    4554.44,
                    9700.76,
                },
            },
        },
        Constraints: &operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    248413,
                },
                []int64{
                    505866,
                    708609,
                    310381,
                    277773,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    5249.7,
                    265.22,
                    7505.95,
                    6256.37,
                },
                []float64{
                    3295.43,
                    9241.59,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                8623.19,
                1685.76,
                486.9,
                9014.83,
            },
            MaximumAssetsWeights: []float64{
                3299.35,
                4461.35,
            },
            MaximumPortfolioExposure: sdk.Float64(8892.34),
            MinimumAssetsWeights: []float64{
                5124.52,
            },
            MinimumPortfolioExposure: sdk.Float64(3484.76),
        },
        RiskFreeRate: 5106.29,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMaximumUlcerPerformanceIndex200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMinimumCorrelation

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).

References
 * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMinimumCorrelation(ctx, operations.PostPortfolioOptimizationMinimumCorrelationRequestBody{
        Assets: 740098,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                5300.89,
                6223.85,
                9447.08,
            },
            []float64{
                8928.63,
                2049.23,
                6771.15,
            },
        },
        AssetsVolatilities: []float64{
            6390.28,
            6762.43,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMinimumUlcerIndex

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMinimumUlcerIndex(ctx, operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBody{
        Assets: []PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets{
            operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets{
                AssetPrices: []float64{
                    2726.83,
                    5436.78,
                    1482.68,
                    2826.99,
                },
            },
            operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets{
                AssetPrices: []float64{
                    302.35,
                    6350.57,
                    7103.37,
                    2996.43,
                },
            },
            operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets{
                AssetPrices: []float64{
                    4602.2,
                },
            },
        },
        Constraints: &operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    530537,
                },
                []int64{
                    922112,
                    361151,
                    89494,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    1536.27,
                    243.13,
                },
                []float64{
                    3426.11,
                    9061.72,
                },
                []float64{
                    85.11,
                    2790.68,
                    9688.65,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                6908.94,
            },
            MaximumAssetsWeights: []float64{
                994.16,
            },
            MaximumPortfolioExposure: sdk.Float64(5771.4),
            MinimumAssetsWeights: []float64{
                6952.7,
                5390.74,
            },
            MinimumPortfolioExposure: sdk.Float64(6719.57),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMinimumUlcerIndex200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioOptimizationMostDiversified

Compute the asset weights of the most diversified portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)


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
    res, err := s.PortfolioOptimization.PostPortfolioOptimizationMostDiversified(ctx, operations.PostPortfolioOptimizationMostDiversifiedRequestBody{
        Assets: 724148,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                27.03,
                2270.84,
            },
            []float64{
                4548.6,
                6003.92,
                9720.83,
            },
            []float64{
                8338.19,
                9627.71,
                9147.91,
            },
            []float64{
                6672.85,
            },
        },
        Constraints: &operations.PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    813679,
                    685092,
                },
                []int64{
                    648598,
                    333965,
                    29100,
                },
                []int64{
                    919532,
                    97243,
                    542457,
                    442036,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    3831.03,
                    6939.57,
                    8066.7,
                },
                []float64{
                    4610.07,
                },
                []float64{
                    8268.25,
                },
                []float64{
                    5391.18,
                    6232.95,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                8869.61,
                8801.07,
                6188.26,
                3283.03,
            },
            MaximumAssetsWeights: []float64{
                4044.25,
            },
            MaximumPortfolioExposure: sdk.Float64(9805.81),
            MinimumAssetsWeights: []float64{
                8717.86,
                6216.93,
                5027.21,
            },
            MinimumPortfolioExposure: sdk.Float64(3793.56),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioOptimizationMostDiversified200ApplicationJSONObject != nil {
        // handle response
    }
}
```
