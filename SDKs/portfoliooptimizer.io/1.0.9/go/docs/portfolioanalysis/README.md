# PortfolioAnalysis

### Available Operations

* [PostPortfolioAnalysisAlpha](#postportfolioanalysisalpha) - Alpha
* [PostPortfolioAnalysisBeta](#postportfolioanalysisbeta) - Beta
* [PostPortfolioAnalysisContributionsReturn](#postportfolioanalysiscontributionsreturn) - Return Contributions
* [PostPortfolioAnalysisContributionsRisk](#postportfolioanalysiscontributionsrisk) - Risk Contributions
* [PostPortfolioAnalysisCorrelationSpectrum](#postportfolioanalysiscorrelationspectrum) - Correlation Spectrum
* [PostPortfolioAnalysisDiversificationRatio](#postportfolioanalysisdiversificationratio) - Diversification Ratio
* [PostPortfolioAnalysisDrawdowns](#postportfolioanalysisdrawdowns) - Drawdowns
* [PostPortfolioAnalysisEffectiveNumberOfBets](#postportfolioanalysiseffectivenumberofbets) - Effective Number of Bets
* [PostPortfolioAnalysisFactorsExposures](#postportfolioanalysisfactorsexposures) - Factor Exposures
* [PostPortfolioAnalysisMeanVarianceEfficientFrontier](#postportfolioanalysismeanvarianceefficientfrontier) - Mean-Variance Efficient Frontier
* [PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier](#postportfolioanalysismeanvarianceminimumvariancefrontier) - Mean-Variance Minimum Variance Frontier
* [PostPortfolioAnalysisReturn](#postportfolioanalysisreturn) - Arithmetic Return
* [PostPortfolioAnalysisReturnsAverage](#postportfolioanalysisreturnsaverage) - Arithmetic Average Return
* [PostPortfolioAnalysisTrackingError](#postportfolioanalysistrackingerror) - Tracking Error
* [PostPortfolioAnalysisUlcerIndex](#postportfolioanalysisulcerindex) - Ulcer Index
* [PostPortfolioAnalysisUlcerPerformanceIndex](#postportfolioanalysisulcerperformanceindex) - Ulcer Performance Index
* [PostPortfolioAnalysisVolatility](#postportfolioanalysisvolatility) - Volatility

## PostPortfolioAnalysisAlpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisAlpha(ctx, operations.PostPortfolioAnalysisAlphaRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisAlpha200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisBeta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisBeta(ctx, operations.PostPortfolioAnalysisBetaRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisBeta200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisContributionsReturn

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisContributionsReturn(ctx, operations.PostPortfolioAnalysisContributionsReturnRequestBody{
        Assets: 227414,
        AssetsGroups: [][]int64{
            []int64{
                85295,
                58029,
            },
            []int64{
                434417,
            },
            []int64{
                311796,
                881005,
            },
        },
        AssetsReturns: []float64{
            9764.05,
            3777.52,
            6176.58,
        },
        Portfolios: []PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios{
            operations.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios{
                AssetsWeights: []float64{
                    246.78,
                    8546.14,
                    672.49,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisContributionsReturn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisContributionsRisk

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisContributionsRisk(ctx, operations.PostPortfolioAnalysisContributionsRiskRequestBody{
        Assets: 743835,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                4536.97,
                6770.82,
            },
            []float64{
                6070.45,
                8966.72,
                7146.97,
            },
            []float64{
                4694.97,
                2168.97,
                4560.15,
                6630.78,
            },
        },
        AssetsGroups: [][]int64{
            []int64{
                137220,
                20651,
            },
            []int64{
                758379,
            },
            []int64{
                320017,
                904425,
                383464,
                645785,
            },
            []int64{
                324683,
                831049,
                519711,
            },
        },
        Portfolios: []PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios{
            operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios{
                AssetsWeights: []float64{
                    8726.51,
                },
            },
            operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios{
                AssetsWeights: []float64{
                    2735.42,
                    4254.51,
                },
            },
            operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios{
                AssetsWeights: []float64{
                    8853.38,
                    1856.36,
                    6798.8,
                    9527.92,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisContributionsRisk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisCorrelationSpectrum

Compute the correlation spectrum of one or several portfolio(s).

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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisCorrelationSpectrum(ctx, operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisCorrelationSpectrum200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisDiversificationRatio

Compute the diversification ratio of one or several portfolio(s).

References
* [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisDiversificationRatio(ctx, operations.PostPortfolioAnalysisDiversificationRatioRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisDiversificationRatio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisDrawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).

References
* [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisDrawdowns(ctx, operations.PostPortfolioAnalysisDrawdownsRequestBody{
        Portfolios: []PostPortfolioAnalysisDrawdownsRequestBodyPortfolios{
            operations.PostPortfolioAnalysisDrawdownsRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4834.09,
                    2155.07,
                    7887.4,
                },
            },
            operations.PostPortfolioAnalysisDrawdownsRequestBodyPortfolios{
                PortfolioValues: []float64{
                    2294.42,
                    7308.56,
                    8802.98,
                    2539.41,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisDrawdowns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisEffectiveNumberOfBets

Compute the effective number of bets of one or several portfolio(s).

References
* [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisEffectiveNumberOfBets(ctx, operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody{
        Assets: 313692,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                5182.01,
                4717.52,
                256.62,
                7115.84,
            },
        },
        FactorsExtractionMethod: operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnumPrincipalComponentAnalysis.ToPointer(),
        Portfolios: []PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios{
            operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios{
                AssetsWeights: []float64{
                    7304.42,
                    3741.7,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisFactorsExposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.

References
* [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisFactorsExposures(ctx, operations.PostPortfolioAnalysisFactorsExposuresRequestBody{
        Factors: []PostPortfolioAnalysisFactorsExposuresRequestBodyFactors{
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyFactors{
                FactorReturns: []float64{
                    2148.8,
                    2776.28,
                },
            },
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyFactors{
                FactorReturns: []float64{
                    5867.84,
                },
            },
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyFactors{
                FactorReturns: []float64{
                    8638.56,
                    7470.8,
                    1175.31,
                    6748.48,
                },
            },
        },
        Portfolios: []PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios{
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    1320.68,
                    1749.09,
                },
            },
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    7044.74,
                    3960.6,
                    4631.5,
                },
            },
            operations.PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    8404.29,
                    1832.8,
                    2048.65,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisFactorsExposures200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisMeanVarianceEfficientFrontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisMeanVarianceEfficientFrontier(ctx, operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody{
        Assets: 144847,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                1248.33,
                3556.13,
            },
        },
        AssetsReturns: []float64{
            9404.32,
            304.52,
            7653.26,
        },
        Constraints: &operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    92596,
                    903720,
                    217450,
                },
                []int64{
                    749255,
                },
                []int64{
                    731694,
                    584476,
                    45614,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    2921.47,
                },
                []float64{
                    2408.29,
                    6772.63,
                },
                []float64{
                    630.38,
                },
                []float64{
                    5556.49,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                92.4,
                6699.17,
                8330.38,
                7851.53,
            },
            MaximumAssetsWeights: []float64{
                2817.3,
                7034.95,
                5864.1,
                1816.31,
            },
            MaximumPortfolioExposure: sdk.Float64(639.55),
            MinimumAssetsWeights: []float64{
                4856.28,
                5804.47,
                9774.96,
            },
            MinimumPortfolioExposure: sdk.Float64(7875.42),
        },
        Portfolios: sdk.Int64(876506),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

> This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.

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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(ctx, operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody{
        Assets: 606476,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                9615.71,
            },
            []float64{
                2317.01,
                8788.7,
            },
        },
        AssetsReturns: []float64{
            4922.68,
            9413.78,
            7155.61,
            7992.03,
        },
        Constraints: &operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints{
            AssetsGroups: [][]int64{
                []int64{
                    708548,
                    874288,
                    498140,
                },
                []int64{
                    844550,
                    848944,
                },
            },
            AssetsGroupsMatrix: [][]float64{
                []float64{
                    7733.26,
                    132.36,
                    9742.59,
                },
            },
            MaximumAssetsGroupsWeights: []float64{
                8623.1,
                1481.41,
            },
            MaximumAssetsWeights: []float64{
                9818.3,
                9850.33,
                4783.7,
                7535.7,
            },
            MaximumPortfolioExposure: sdk.Float64(4973.91),
            MinimumAssetsWeights: []float64{
                6394.73,
            },
            MinimumPortfolioExposure: sdk.Float64(2694.79),
        },
        Portfolios: sdk.Int64(368584),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisReturn

Compute the arithmetic return of one or several portfolio(s) from either:  
* Portfolio assets arithmetic returns
* Portfolio values

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisReturn(ctx, operations.PostPortfolioAnalysisReturnRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisReturn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisReturnsAverage

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisReturnsAverage(ctx, operations.PostPortfolioAnalysisReturnsAverageRequestBody{
        Portfolios: []PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios{
            operations.PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios{
                PortfolioValues: []float64{
                    4282.24,
                },
            },
            operations.PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios{
                PortfolioValues: []float64{
                    2978.42,
                    1898.48,
                    4011.32,
                    5113.19,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisReturnsAverage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisTrackingError

Compute the tracking error between a benchmark and one or several portfolio(s).

References
* [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisTrackingError(ctx, operations.PostPortfolioAnalysisTrackingErrorRequestBody{
        BenchmarkReturns: []float64{
            2243.17,
        },
        Portfolios: []PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios{
            operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    4061.2,
                },
            },
            operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    5692.11,
                    9729.2,
                    3436.05,
                    9608.35,
                },
            },
            operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    9065.56,
                    4113.72,
                    7740.48,
                    3592.71,
                },
            },
            operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios{
                PortfolioReturns: []float64{
                    3994.99,
                    811.01,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisTrackingError200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisUlcerIndex

Compute the Ulcer Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisUlcerIndex(ctx, operations.PostPortfolioAnalysisUlcerIndexRequestBody{
        Portfolios: []PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios{
            operations.PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios{
                PortfolioValues: []float64{
                    7752.2,
                    2322.34,
                },
            },
            operations.PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios{
                PortfolioValues: []float64{
                    1324.87,
                    3253.1,
                    534.27,
                    9528.71,
                },
            },
        },
        RiskFreeRate: 7255.95,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisUlcerIndex200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisUlcerPerformanceIndex

Compute the Ulcer Performance Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisUlcerPerformanceIndex(ctx, operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBody{
        Portfolios: []PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios{
            operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios{
                PortfolioValues: []float64{
                    5334.66,
                },
            },
        },
        RiskFreeRate: 7705.81,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPortfolioAnalysisVolatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
* Portfolio assets covariance matrix
* Portfolio values

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
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
    res, err := s.PortfolioAnalysis.PostPortfolioAnalysisVolatility(ctx, operations.PostPortfolioAnalysisVolatilityRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPortfolioAnalysisVolatility200ApplicationJSONObject != nil {
        // handle response
    }
}
```
