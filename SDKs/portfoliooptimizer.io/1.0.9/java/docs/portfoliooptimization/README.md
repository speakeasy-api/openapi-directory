# portfolioOptimization

### Available Operations

* [postPortfolioOptimizationEqualRiskContributions](#postportfoliooptimizationequalriskcontributions) - Equal Risk Contributions Portfolio
* [postPortfolioOptimizationEqualSharpeRatioContributions](#postportfoliooptimizationequalsharperatiocontributions) - Equal Sharpe Ratio Contributions Portfolio
* [postPortfolioOptimizationEqualVolatilityWeighted](#postportfoliooptimizationequalvolatilityweighted) - Equal Volatility Weighted Portfolio
* [postPortfolioOptimizationEqualWeighted](#postportfoliooptimizationequalweighted) - Equal Weighted Portfolio
* [postPortfolioOptimizationHierarchicalRiskParity](#postportfoliooptimizationhierarchicalriskparity) - Hierarchical Risk Parity Portfolio
* [postPortfolioOptimizationHierarchicalRiskParityClusteringBased](#postportfoliooptimizationhierarchicalriskparityclusteringbased) - Hierarchical Clustering-Based Risk Parity Portfolio
* [postPortfolioOptimizationInverseVarianceWeighted](#postportfoliooptimizationinversevarianceweighted) - Inverse Variance Weighted Portfolio
* [postPortfolioOptimizationInverseVolatilityWeighted](#postportfoliooptimizationinversevolatilityweighted) - Inverse Volatility Weighted Portfolio
* [postPortfolioOptimizationMarketCapitalizationWeighted](#postportfoliooptimizationmarketcapitalizationweighted) - Market Capitalization Weighted Portfolio
* [postPortfolioOptimizationMaximumDecorrelation](#postportfoliooptimizationmaximumdecorrelation) - Maximum Decorrelation Portfolio
* [postPortfolioOptimizationMaximumUlcerPerformanceIndex](#postportfoliooptimizationmaximumulcerperformanceindex) - Maximum Ulcer Performance Index Portfolio
* [postPortfolioOptimizationMinimumCorrelation](#postportfoliooptimizationminimumcorrelation) - Minimum Correlation Portfolio
* [postPortfolioOptimizationMinimumUlcerIndex](#postportfoliooptimizationminimumulcerindex) - Minimum Ulcer Index Portfolio
* [postPortfolioOptimizationMostDiversified](#postportfoliooptimizationmostdiversified) - Most Diversified Portfolio

## postPortfolioOptimizationEqualRiskContributions

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:  
* Minimum and maximum weights constraints  

References
 * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualRiskContributionsRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualRiskContributionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationEqualRiskContributionsRequestBody req = new PostPortfolioOptimizationEqualRiskContributionsRequestBody(879174L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(3340.18),
                                    add(1764.99),
                                    add(9700.79),
                                }}),
                                add(new Double[]{{
                                    add(4441.21),
                                    add(5063.12),
                                    add(3670.46),
                                    add(9998.09),
                                }}),
                                add(new Double[]{{
                                    add(1972.59),
                                    add(4671.19),
                                    add(5349.08),
                                    add(755.66),
                                }}),
                                add(new Double[]{{
                                    add(8288.41),
                                    add(3041.73),
                                }}),
                            }}) {{
                constraints = new PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints() {{
                    maximumAssetsWeights = new Double[]{{
                        add(5910.65),
                        add(5149.93),
                        add(9217.19),
                        add(96.83),
                    }};
                    minimumAssetsWeights = new Double[]{{
                        add(1363.57),
                        add(7239.42),
                        add(7119.91),
                        add(5591.74),
                    }};
                }};;
            }};            

            PostPortfolioOptimizationEqualRiskContributionsResponse res = sdk.portfolioOptimization.postPortfolioOptimizationEqualRiskContributions(req);

            if (res.postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationEqualSharpeRatioContributions

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.

References
 * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody req = new PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody(922299L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(3609.34),
                                    add(8738.33),
                                }}),
                                add(new Double[]{{
                                    add(8339.82),
                                    add(4348.27),
                                    add(2138.35),
                                }}),
                                add(new Double[]{{
                                    add(7712.26),
                                    add(4150.33),
                                }}),
                            }},                 new Double[]{{
                                add(320.55),
                            }}, 3228.29);            

            PostPortfolioOptimizationEqualSharpeRatioContributionsResponse res = sdk.portfolioOptimization.postPortfolioOptimizationEqualSharpeRatioContributions(req);

            if (res.postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationEqualVolatilityWeighted

Compute the asset weights of the equal volatility-weighted portfolio.

References
 * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualVolatilityWeightedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualVolatilityWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationEqualVolatilityWeightedRequestBody req = new PostPortfolioOptimizationEqualVolatilityWeightedRequestBody(229567L,                 new Double[]{{
                                add(5068.63),
                                add(6955.26),
                                add(7368.53),
                                add(2304.11),
                            }});            

            PostPortfolioOptimizationEqualVolatilityWeightedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationEqualVolatilityWeighted(req);

            if (res.postPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationEqualWeighted

Compute the asset weights of the equal-weighted portfolio.

References
 * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualWeightedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationEqualWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationEqualWeightedRequestBody req = new PostPortfolioOptimizationEqualWeightedRequestBody(118126L);            

            PostPortfolioOptimizationEqualWeightedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationEqualWeighted(req);

            if (res.postPortfolioOptimizationEqualWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationHierarchicalRiskParity

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationHierarchicalRiskParityRequestBody req = new PostPortfolioOptimizationHierarchicalRiskParityRequestBody(40710L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2286.46),
                                    add(5879.67),
                                }}),
                                add(new Double[]{{
                                    add(8979.56),
                                    add(5928.8),
                                    add(9202.72),
                                }}),
                                add(new Double[]{{
                                    add(3662.44),
                                }}),
                                add(new Double[]{{
                                    add(9308.4),
                                    add(7087.71),
                                }}),
                            }}) {{
                clusteringMethod = PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum.COMPLETE_LINKAGE;
                clusteringOrdering = PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum.R_HCLUST;
                constraints = new PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints() {{
                    maximumAssetsWeights = new Double[]{{
                        add(8795.22),
                        add(1786.35),
                        add(5200.81),
                    }};
                    maximumPortfolioExposure = 1158.61;
                    minimumAssetsWeights = new Double[]{{
                        add(2443.76),
                    }};
                    minimumPortfolioExposure = 2244.13;
                }};;
            }};            

            PostPortfolioOptimizationHierarchicalRiskParityResponse res = sdk.portfolioOptimization.postPortfolioOptimizationHierarchicalRiskParity(req);

            if (res.postPortfolioOptimizationHierarchicalRiskParity200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationHierarchicalRiskParityClusteringBased

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
 * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
 * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody req = new PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody(953676L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(5398.13),
                                    add(1074.72),
                                    add(8682.55),
                                }}),
                            }}) {{
                acrossClusterAllocationMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum.EQUAL_WEIGHTING;
                clusteringMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum.WARD_LINKAGE;
                clusteringOrdering = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum.R_HCLUST;
                clusters = 32356L;
                constraints = new PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints() {{
                    maximumAssetsWeights = new Double[]{{
                        add(6985.58),
                    }};
                    maximumPortfolioExposure = 4116.15;
                    minimumAssetsWeights = new Double[]{{
                        add(4894.59),
                    }};
                    minimumPortfolioExposure = 9980.26;
                }};;
                withinClusterAllocationMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum.EQUAL_WEIGHTING;
            }};            

            PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationHierarchicalRiskParityClusteringBased(req);

            if (res.postPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationInverseVarianceWeighted

Compute the asset weights of the inverse variance-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationInverseVarianceWeightedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationInverseVarianceWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationInverseVarianceWeightedRequestBody req = new PostPortfolioOptimizationInverseVarianceWeightedRequestBody(588639L,                 new Double[]{{
                                add(7532.4),
                            }});            

            PostPortfolioOptimizationInverseVarianceWeightedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationInverseVarianceWeighted(req);

            if (res.postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationInverseVolatilityWeighted

Compute the asset weights of the inverse volatility-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationInverseVolatilityWeightedRequestBody req = new PostPortfolioOptimizationInverseVolatilityWeightedRequestBody(235834L,                 new Double[]{{
                                add(6205),
                                add(8398.07),
                                add(6396.22),
                            }});            

            PostPortfolioOptimizationInverseVolatilityWeightedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationInverseVolatilityWeighted(req);

            if (res.postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMarketCapitalizationWeighted

Compute the asset weights of the market capitalization-weighted portfolio.

References
 * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody req = new PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody(948541L,                 new Double[]{{
                                add(7782.76),
                            }});            

            PostPortfolioOptimizationMarketCapitalizationWeightedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMarketCapitalizationWeighted(req);

            if (res.postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumDecorrelation

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumDecorrelationRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumDecorrelationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumDecorrelationRequestBody req = new PostPortfolioOptimizationMaximumDecorrelationRequestBody(848346L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(8762.85),
                                    add(1853.48),
                                }}),
                                add(new Double[]{{
                                    add(9958.16),
                                }}),
                                add(new Double[]{{
                                    add(1293.55),
                                }}),
                            }}) {{
                assetsReturns = new Double[]{{
                    add(4714.57),
                    add(2527),
                }};
                constraints = new PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(943851L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(2512.12),
                            add(7193.89),
                            add(4502.24),
                            add(3499.93),
                        }}),
                        add(new Double[]{{
                            add(2543.82),
                            add(9211.93),
                        }}),
                        add(new Double[]{{
                            add(4502.09),
                            add(1272.94),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(5258.09),
                        add(440.16),
                        add(1418.17),
                        add(5358.02),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(4527.3),
                        add(6267.07),
                    }};
                    maximumPortfolioExposure = 3261.18;
                    minimumAssetsWeights = new Double[]{{
                        add(3001.89),
                        add(242.72),
                        add(2667.88),
                    }};
                    minimumPortfolioExposure = 4301.16;
                }};;
            }};            

            PostPortfolioOptimizationMaximumDecorrelationResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMaximumDecorrelation(req);

            if (res.postPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumUlcerPerformanceIndex

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody req = new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets[]{{
                                add(new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets(                new Double[]{{
                                                    add(3306),
                                                    add(9692.06),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(8532.46),
                                        add(3451.38),
                                    }};
                                }}),
                                add(new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets(                new Double[]{{
                                                    add(135.08),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2656.32),
                                    }};
                                }}),
                                add(new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets(                new Double[]{{
                                                    add(4523.99),
                                                    add(2327.72),
                                                    add(2006.37),
                                                    add(3106.29),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(4837.53),
                                        add(4137.58),
                                        add(2561.14),
                                        add(6770.45),
                                    }};
                                }}),
                            }}, 9294.76) {{
                constraints = new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(715143L),
                        }}),
                        add(new Long[]{{
                            add(558051L),
                            add(91728L),
                        }}),
                        add(new Long[]{{
                            add(229276L),
                            add(418637L),
                            add(685415L),
                        }}),
                        add(new Long[]{{
                            add(526413L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(5112.22),
                            add(8322.39),
                            add(832.91),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(510.75),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(9655.17),
                        add(6512.28),
                        add(8590.03),
                        add(6409.07),
                    }};
                    maximumPortfolioExposure = 1520.27;
                    minimumAssetsWeights = new Double[]{{
                        add(6.64),
                    }};
                    minimumPortfolioExposure = 9100.73;
                }};;
            }};            

            PostPortfolioOptimizationMaximumUlcerPerformanceIndexResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMaximumUlcerPerformanceIndex(req);

            if (res.postPortfolioOptimizationMaximumUlcerPerformanceIndex200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMinimumCorrelation

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).

References
 * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumCorrelationRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumCorrelationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMinimumCorrelationRequestBody req = new PostPortfolioOptimizationMinimumCorrelationRequestBody(27982L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(1858.97),
                                }}),
                                add(new Double[]{{
                                    add(6915.08),
                                    add(1267.27),
                                    add(1089.03),
                                    add(3979.88),
                                }}),
                            }},                 new Double[]{{
                                add(7600.49),
                                add(9750.95),
                            }});            

            PostPortfolioOptimizationMinimumCorrelationResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMinimumCorrelation(req);

            if (res.postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMinimumUlcerIndex

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumUlcerIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMinimumUlcerIndexRequestBody req = new PostPortfolioOptimizationMinimumUlcerIndexRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets[]{{
                                add(new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets(                new Double[]{{
                                                    add(7745.01),
                                                    add(4983.88),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(5206.78),
                                        add(1928.46),
                                        add(3979.19),
                                    }};
                                }}),
                                add(new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets(                new Double[]{{
                                                    add(9979.18),
                                                    add(8611.23),
                                                    add(6711.16),
                                                    add(6176.57),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2436.23),
                                    }};
                                }}),
                                add(new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets(                new Double[]{{
                                                    add(2516.27),
                                                    add(5245.77),
                                                    add(1578.84),
                                                    add(3542.25),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(429.06),
                                        add(3929.67),
                                        add(7008.56),
                                        add(9248.4),
                                    }};
                                }}),
                            }}) {{
                constraints = new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(973017L),
                        }}),
                        add(new Long[]{{
                            add(62035L),
                            add(885022L),
                            add(100002L),
                            add(100251L),
                        }}),
                        add(new Long[]{{
                            add(758985L),
                            add(525951L),
                        }}),
                        add(new Long[]{{
                            add(704271L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(6150.58),
                            add(1178.19),
                            add(5524.39),
                            add(3563.15),
                        }}),
                        add(new Double[]{{
                            add(2662.84),
                            add(9292.92),
                        }}),
                        add(new Double[]{{
                            add(2659.05),
                            add(1635.58),
                            add(8281.47),
                            add(8768.4),
                        }}),
                        add(new Double[]{{
                            add(7737.11),
                            add(7833.97),
                            add(8838.19),
                            add(5189.9),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(660.74),
                        add(5734.44),
                        add(4724.14),
                        add(4584.12),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(4850.31),
                        add(2027.96),
                    }};
                    maximumPortfolioExposure = 8955.13;
                    minimumAssetsWeights = new Double[]{{
                        add(2086.83),
                        add(3577.58),
                    }};
                    minimumPortfolioExposure = 3753.5;
                }};;
            }};            

            PostPortfolioOptimizationMinimumUlcerIndexResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMinimumUlcerIndex(req);

            if (res.postPortfolioOptimizationMinimumUlcerIndex200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMostDiversified

Compute the asset weights of the most diversified portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMostDiversifiedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMostDiversifiedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMostDiversifiedRequestBody req = new PostPortfolioOptimizationMostDiversifiedRequestBody(641133L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2628),
                                    add(563.72),
                                    add(5220.62),
                                }}),
                                add(new Double[]{{
                                    add(351.6),
                                    add(3314.52),
                                    add(9062.32),
                                    add(2060.63),
                                }}),
                            }}) {{
                constraints = new PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(552581L),
                            add(984773L),
                        }}),
                        add(new Long[]{{
                            add(668577L),
                            add(962396L),
                            add(245278L),
                            add(110522L),
                        }}),
                        add(new Long[]{{
                            add(630832L),
                        }}),
                        add(new Long[]{{
                            add(997995L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(8237.53),
                            add(6033.23),
                            add(2754.25),
                            add(1280.21),
                        }}),
                        add(new Double[]{{
                            add(5831.93),
                            add(7614.37),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(6959.47),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(4124.33),
                    }};
                    maximumPortfolioExposure = 9561.24;
                    minimumAssetsWeights = new Double[]{{
                        add(3304.4),
                    }};
                    minimumPortfolioExposure = 8937.73;
                }};;
            }};            

            PostPortfolioOptimizationMostDiversifiedResponse res = sdk.portfolioOptimization.postPortfolioOptimizationMostDiversified(req);

            if (res.postPortfolioOptimizationMostDiversified200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
