# portfolioOptimizationMeanVariance

### Available Operations

* [postPortfolioOptimizationMaximumReturn](#postportfoliooptimizationmaximumreturn) - Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnDiversified](#postportfoliooptimizationmaximumreturndiversified) - Diversified Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnSubsetResamplingBased](#postportfoliooptimizationmaximumreturnsubsetresamplingbased) - Subset Resampling-Based Maximum Return Portfolio
* [postPortfolioOptimizationMaximumSharpeRatio](#postportfoliooptimizationmaximumsharperatio) - Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioDiversified](#postportfoliooptimizationmaximumsharperatiodiversified) - Diversified Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased](#postportfoliooptimizationmaximumsharperatiosubsetresamplingbased) - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMeanVarianceEfficient](#postportfoliooptimizationmeanvarianceefficient) - Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientDiversified](#postportfoliooptimizationmeanvarianceefficientdiversified) - Diversified Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased](#postportfoliooptimizationmeanvarianceefficientsubsetresamplingbased) - Subset Resampling-Based Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMinimumVariance](#postportfoliooptimizationminimumvariance) - Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceDiversified](#postportfoliooptimizationminimumvariancediversified) - Diversified Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceSubsetResamplingBased](#postportfoliooptimizationminimumvariancesubsetresamplingbased) - Subset Resampling-Based Minimum Variance Portfolio

## postPortfolioOptimizationMaximumReturn

Compute the asset weights of the maximum return portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumReturnRequestBody req = new PostPortfolioOptimizationMaximumReturnRequestBody(575062L,                 new Double[]{{
                                add(2567.68),
                                add(9478.22),
                            }}) {{
                assetsCovarianceMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(4483.86),
                        add(3296.51),
                        add(4031.47),
                    }}),
                }};
                constraints = new PostPortfolioOptimizationMaximumReturnRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(108165L),
                        }}),
                        add(new Long[]{{
                            add(392319L),
                            add(786954L),
                            add(221218L),
                            add(496548L),
                        }}),
                        add(new Long[]{{
                            add(326903L),
                            add(102446L),
                            add(181476L),
                        }}),
                        add(new Long[]{{
                            add(166289L),
                            add(276650L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(2205.28),
                            add(3498.98),
                            add(7097.01),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(7696.34),
                        add(245.77),
                        add(3634.82),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(1593.93),
                        add(2305.71),
                        add(6447.34),
                    }};
                    maximumPortfolioExposure = 2687.09;
                    minimumAssetsWeights = new Double[]{{
                        add(8002.56),
                        add(9322.5),
                    }};
                    minimumPortfolioExposure = 9555.69;
                }};;
            }};            

            PostPortfolioOptimizationMaximumReturnResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumReturn(req);

            if (res.postPortfolioOptimizationMaximumReturn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumReturnDiversified

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnDiversifiedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnDiversifiedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody req = new PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody(316550L,                 new Double[]{{
                                add(8268.06),
                                add(8873.63),
                                add(1039.9),
                                add(53.15),
                            }}) {{
                assetsCovarianceMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(7510.33),
                    }}),
                    add(new Double[]{{
                        add(1559.78),
                        add(1189.32),
                        add(4260.02),
                        add(5955.84),
                    }}),
                    add(new Double[]{{
                        add(3548.21),
                        add(1035.78),
                        add(337.71),
                        add(180.96),
                    }}),
                }};
                constraints = new PostPortfolioOptimizationMaximumReturnDiversifiedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(765833L),
                            add(435531L),
                            add(842402L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(9234.56),
                            add(2467.72),
                        }}),
                        add(new Double[]{{
                            add(4935.91),
                            add(3884.04),
                        }}),
                        add(new Double[]{{
                            add(4862.72),
                        }}),
                        add(new Double[]{{
                            add(5881.52),
                            add(7395.08),
                            add(9838.54),
                        }}),
                    }};
                    deltaReturn = 7039.66;
                    deltaVolatility = 6973.3;
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(3895.48),
                        add(6017.14),
                        add(2637.67),
                        add(5951.98),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(7369.85),
                        add(1355.48),
                        add(7257.84),
                        add(7202.66),
                    }};
                    maximumPortfolioExposure = 2791.72;
                    minimumAssetsWeights = new Double[]{{
                        add(7972.54),
                        add(6646.66),
                        add(9044.4),
                        add(4230.54),
                    }};
                    minimumPortfolioExposure = 7794.09;
                }};;
            }};            

            PostPortfolioOptimizationMaximumReturnDiversifiedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumReturnDiversified(req);

            if (res.postPortfolioOptimizationMaximumReturnDiversified200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumReturnSubsetResamplingBased

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody req = new PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody(849383L,                 new Double[]{{
                                add(8487.22),
                                add(7068.72),
                            }}) {{
                assetsCovarianceMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(8270.51),
                        add(9279.77),
                        add(7189.81),
                    }}),
                }};
                constraints = new PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(816151L),
                            add(674683L),
                        }}),
                        add(new Long[]{{
                            add(673191L),
                            add(276337L),
                            add(802356L),
                            add(369523L),
                        }}),
                        add(new Long[]{{
                            add(379894L),
                        }}),
                        add(new Long[]{{
                            add(560451L),
                            add(672889L),
                            add(668218L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(7773.78),
                            add(194.62),
                        }}),
                        add(new Double[]{{
                            add(3992.22),
                        }}),
                        add(new Double[]{{
                            add(3085.28),
                            add(7558.68),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(3429.21),
                        add(8882.65),
                        add(6036.5),
                        add(8603.11),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(6530),
                        add(2986.13),
                        add(3442.89),
                    }};
                    maximumPortfolioExposure = 4609.09;
                    minimumAssetsWeights = new Double[]{{
                        add(6847.99),
                        add(8152.25),
                        add(7736.59),
                    }};
                    minimumPortfolioExposure = 986.1;
                }};;
                subsetPortfolios = 647218L;
                subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum.MEDIAN;
                subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum.COMPLETE;
                subsetSize = 41179L;
            }};            

            PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumReturnSubsetResamplingBased(req);

            if (res.postPortfolioOptimizationMaximumReturnSubsetResamplingBased200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumSharpeRatio

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumSharpeRatioRequestBody req = new PostPortfolioOptimizationMaximumSharpeRatioRequestBody(816421L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(93.75),
                                    add(510.07),
                                    add(1023.9),
                                    add(6271.61),
                                }}),
                                add(new Double[]{{
                                    add(5024.53),
                                    add(608.92),
                                    add(1698.19),
                                    add(8857.97),
                                }}),
                                add(new Double[]{{
                                    add(8981.11),
                                }}),
                                add(new Double[]{{
                                    add(559.81),
                                    add(5676.93),
                                    add(9509.56),
                                    add(9830),
                                }}),
                            }},                 new Double[]{{
                                add(9822.48),
                                add(6.91),
                                add(9926.67),
                            }}, 5233.65) {{
                constraints = new PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(938257L),
                            add(985360L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(4582.12),
                            add(4465.47),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(946.97),
                        add(2036.21),
                        add(8766.49),
                        add(5663.12),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(1858.16),
                    }};
                    maximumPortfolioExposure = 7712.41;
                    minimumAssetsWeights = new Double[]{{
                        add(2783.29),
                    }};
                    minimumPortfolioExposure = 1165.58;
                }};;
            }};            

            PostPortfolioOptimizationMaximumSharpeRatioResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumSharpeRatio(req);

            if (res.postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumSharpeRatioDiversified

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody req = new PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody(357639L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(6244.98),
                                }}),
                                add(new Double[]{{
                                    add(355.81),
                                    add(6641.97),
                                }}),
                                add(new Double[]{{
                                    add(4016.88),
                                    add(5556.79),
                                }}),
                            }},                 new Double[]{{
                                add(3564.4),
                            }}, 626.88) {{
                constraints = new PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(462583L),
                            add(169312L),
                        }}),
                        add(new Long[]{{
                            add(965095L),
                            add(609537L),
                            add(151230L),
                        }}),
                        add(new Long[]{{
                            add(805463L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(3032.53),
                            add(5692.87),
                            add(9804.1),
                        }}),
                        add(new Double[]{{
                            add(2439.04),
                            add(9717.64),
                            add(2303.05),
                        }}),
                    }};
                    deltaReturn = 3638.45;
                    deltaVolatility = 574.7;
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(9484.44),
                        add(5552.94),
                        add(4760.03),
                        add(3956.34),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(9554.66),
                        add(7497.02),
                        add(5983.16),
                        add(342.45),
                    }};
                    maximumPortfolioExposure = 1189.17;
                    minimumAssetsWeights = new Double[]{{
                        add(4175.39),
                        add(9087.34),
                        add(7815.82),
                        add(7357.4),
                    }};
                    minimumPortfolioExposure = 6937.47;
                }};;
            }};            

            PostPortfolioOptimizationMaximumSharpeRatioDiversifiedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumSharpeRatioDiversified(req);

            if (res.postPortfolioOptimizationMaximumSharpeRatioDiversified200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody req = new PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody(916341L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(1940.58),
                                    add(7581.94),
                                }}),
                            }},                 new Double[]{{
                                add(4598.75),
                                add(5000.21),
                                add(5736.1),
                                add(9965.41),
                            }}, 9550.47) {{
                constraints = new PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(930429L),
                            add(861591L),
                            add(643419L),
                            add(359097L),
                        }}),
                        add(new Long[]{{
                            add(887701L),
                        }}),
                        add(new Long[]{{
                            add(638609L),
                            add(902979L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(357.42),
                            add(6378.4),
                            add(7701.28),
                            add(978.96),
                        }}),
                        add(new Double[]{{
                            add(2609.11),
                            add(7861.89),
                            add(1779.29),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(6200.54),
                        add(7935.68),
                        add(1543.89),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(4408.47),
                        add(8007.99),
                    }};
                    maximumPortfolioExposure = 5524.4;
                    minimumAssetsWeights = new Double[]{{
                        add(2278.7),
                        add(4733.26),
                        add(2271.56),
                    }};
                    minimumPortfolioExposure = 6751.26;
                }};;
                subsetPortfolios = 266946L;
                subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum.AVERAGE;
                subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum.RANDOM_SAMPLING;
                subsetSize = 102316L;
            }};            

            PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased(req);

            if (res.postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMeanVarianceEfficient

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

> A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMeanVarianceEfficientRequestBody req = new PostPortfolioOptimizationMeanVarianceEfficientRequestBody(292177L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2050.11),
                                    add(1397.45),
                                    add(9368.45),
                                    add(3305.96),
                                }}),
                            }},                 new Double[]{{
                                add(510.53),
                                add(3503.87),
                            }},                 new PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints() {{
                                assetsGroups = new Long[][]{{
                                    add(new Long[]{{
                                        add(320326L),
                                        add(394161L),
                                    }}),
                                    add(new Long[]{{
                                        add(338281L),
                                        add(845154L),
                                        add(366480L),
                                        add(382764L),
                                    }}),
                                }};
                                assetsGroupsMatrix = new Double[][]{{
                                    add(new Double[]{{
                                        add(6947.28),
                                    }}),
                                    add(new Double[]{{
                                        add(177.68),
                                        add(6605.36),
                                        add(9581.46),
                                        add(1523.64),
                                    }}),
                                    add(new Double[]{{
                                        add(9960.72),
                                        add(9210.6),
                                        add(1002.33),
                                        add(2406.96),
                                    }}),
                                    add(new Double[]{{
                                        add(6884.63),
                                        add(2942.66),
                                        add(9767.62),
                                        add(4353.53),
                                    }}),
                                }};
                                maximumAssetsGroupsWeights = new Double[]{{
                                    add(7954.57),
                                }};
                                maximumAssetsWeights = new Double[]{{
                                    add(6775.09),
                                    add(2425.31),
                                    add(9378.65),
                                }};
                                maximumPortfolioExposure = 5100.2;
                                minimumAssetsWeights = new Double[]{{
                                    add(2524.73),
                                    add(978.1),
                                    add(6490.32),
                                }};
                                minimumPortfolioExposure = 8843.61;
                                portfolioReturn = 6875.89;
                                portfolioVolatility = 7691.56;
                                riskTolerance = 426.15;
                            }};);            

            PostPortfolioOptimizationMeanVarianceEfficientResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMeanVarianceEfficient(req);

            if (res.postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMeanVarianceEfficientDiversified

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody req = new PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody(549237L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(3962.23),
                                    add(5704.23),
                                    add(1674.35),
                                }}),
                            }},                 new Double[]{{
                                add(8219.04),
                                add(2208.24),
                            }},                 new PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBodyConstraints() {{
                                assetsGroups = new Long[][]{{
                                    add(new Long[]{{
                                        add(883078L),
                                    }}),
                                    add(new Long[]{{
                                        add(966576L),
                                        add(792719L),
                                        add(774748L),
                                        add(550338L),
                                    }}),
                                    add(new Long[]{{
                                        add(532326L),
                                        add(614770L),
                                        add(361106L),
                                        add(37129L),
                                    }}),
                                }};
                                assetsGroupsMatrix = new Double[][]{{
                                    add(new Double[]{{
                                        add(9840.31),
                                    }}),
                                }};
                                deltaReturn = 3421.04;
                                deltaVolatility = 8698.48;
                                maximumAssetsGroupsWeights = new Double[]{{
                                    add(2054.99),
                                    add(8661.35),
                                    add(4248.53),
                                    add(9608.13),
                                }};
                                maximumAssetsWeights = new Double[]{{
                                    add(651.21),
                                    add(5526.46),
                                    add(445.71),
                                }};
                                maximumPortfolioExposure = 2512;
                                minimumAssetsWeights = new Double[]{{
                                    add(3240.52),
                                    add(3050.47),
                                    add(7881.65),
                                    add(5579.87),
                                }};
                                minimumPortfolioExposure = 1624.5;
                                portfolioReturn = 9824.45;
                                portfolioVolatility = 815.81;
                                riskTolerance = 4004.48;
                            }};);            

            PostPortfolioOptimizationMeanVarianceEfficientDiversifiedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMeanVarianceEfficientDiversified(req);

            if (res.postPortfolioOptimizationMeanVarianceEfficientDiversified200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody req = new PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody(665872L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2323.16),
                                    add(7681.95),
                                }}),
                            }},                 new Double[]{{
                                add(5277.15),
                                add(4985.34),
                                add(2375.23),
                            }},                 new PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints() {{
                                assetsGroups = new Long[][]{{
                                    add(new Long[]{{
                                        add(503449L),
                                        add(258059L),
                                    }}),
                                    add(new Long[]{{
                                        add(532320L),
                                    }}),
                                    add(new Long[]{{
                                        add(703189L),
                                    }}),
                                    add(new Long[]{{
                                        add(949280L),
                                    }}),
                                }};
                                assetsGroupsMatrix = new Double[][]{{
                                    add(new Double[]{{
                                        add(5171.21),
                                        add(7811.93),
                                        add(6464.91),
                                    }}),
                                    add(new Double[]{{
                                        add(4712.07),
                                    }}),
                                }};
                                maximumAssetsGroupsWeights = new Double[]{{
                                    add(6581.99),
                                    add(4137.8),
                                }};
                                maximumAssetsWeights = new Double[]{{
                                    add(6863.8),
                                }};
                                maximumPortfolioExposure = 147.8;
                                minimumAssetsWeights = new Double[]{{
                                    add(8027.34),
                                    add(3032.92),
                                }};
                                minimumPortfolioExposure = 6137.02;
                                portfolioReturn = 3558.89;
                                portfolioVolatility = 7557.38;
                                riskTolerance = 8103.02;
                            }};) {{
                subsetPortfolios = 378403L;
                subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum.MEDIAN;
                subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum.RANDOM_SAMPLING;
                subsetSize = 75277L;
            }};            

            PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased(req);

            if (res.postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMinimumVariance

Compute the asset weights of the minimum variance portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMinimumVarianceRequestBody req = new PostPortfolioOptimizationMinimumVarianceRequestBody(78246L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(976.59),
                                    add(7665.91),
                                }}),
                                add(new Double[]{{
                                    add(6886.84),
                                }}),
                                add(new Double[]{{
                                    add(7079.83),
                                    add(1053.72),
                                    add(7672.1),
                                    add(9645.11),
                                }}),
                            }}) {{
                assetsReturns = new Double[]{{
                    add(7126.4),
                    add(5482.56),
                }};
                constraints = new PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(886118L),
                            add(739633L),
                            add(863330L),
                        }}),
                        add(new Long[]{{
                            add(775427L),
                            add(277990L),
                            add(797293L),
                            add(793282L),
                        }}),
                        add(new Long[]{{
                            add(659971L),
                            add(569706L),
                            add(580238L),
                            add(726851L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(9440.33),
                            add(8022.16),
                        }}),
                        add(new Double[]{{
                            add(7435.31),
                        }}),
                        add(new Double[]{{
                            add(8662.92),
                        }}),
                        add(new Double[]{{
                            add(9274.9),
                            add(837.91),
                            add(136.37),
                            add(5161.24),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(2198.6),
                        add(9171.52),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(1699.35),
                        add(7018.41),
                    }};
                    maximumPortfolioExposure = 392.22;
                    minimumAssetsWeights = new Double[]{{
                        add(4301.46),
                    }};
                    minimumPortfolioExposure = 8733.2;
                }};;
            }};            

            PostPortfolioOptimizationMinimumVarianceResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMinimumVariance(req);

            if (res.postPortfolioOptimizationMinimumVariance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMinimumVarianceDiversified

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceDiversifiedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody req = new PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody(444479L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(4706.47),
                                    add(5400.48),
                                    add(6979.94),
                                }}),
                                add(new Double[]{{
                                    add(5418.22),
                                    add(3448.56),
                                    add(5423.4),
                                }}),
                                add(new Double[]{{
                                    add(6672.13),
                                }}),
                            }}) {{
                assetsReturns = new Double[]{{
                    add(5223.9),
                    add(1681.42),
                }};
                constraints = new PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(811259L),
                            add(318028L),
                            add(286453L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(9657.35),
                            add(6422.34),
                            add(6201.26),
                            add(7638.69),
                        }}),
                        add(new Double[]{{
                            add(3125.11),
                            add(9853.79),
                            add(1560.98),
                        }}),
                        add(new Double[]{{
                            add(6514.67),
                            add(7650.7),
                            add(3370.81),
                            add(3135.9),
                        }}),
                        add(new Double[]{{
                            add(3655.39),
                            add(8493.37),
                        }}),
                    }};
                    deltaReturn = 2012.66;
                    deltaVolatility = 223.31;
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(7943.06),
                        add(9903.69),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(9121.51),
                        add(5062.5),
                        add(1183.49),
                        add(1441.79),
                    }};
                    maximumPortfolioExposure = 251.9;
                    minimumAssetsWeights = new Double[]{{
                        add(8986.38),
                        add(1489.75),
                    }};
                    minimumPortfolioExposure = 5371.7;
                }};;
            }};            

            PostPortfolioOptimizationMinimumVarianceDiversifiedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMinimumVarianceDiversified(req);

            if (res.postPortfolioOptimizationMinimumVarianceDiversified200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioOptimizationMinimumVarianceSubsetResamplingBased

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody req = new PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody(200190L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(3034.21),
                                    add(6442.23),
                                    add(2666.8),
                                }}),
                                add(new Double[]{{
                                    add(7710.92),
                                }}),
                                add(new Double[]{{
                                    add(5283.2),
                                    add(600.78),
                                }}),
                                add(new Double[]{{
                                    add(2098.6),
                                    add(9998.54),
                                    add(1323.05),
                                    add(802.84),
                                }}),
                            }}) {{
                assetsReturns = new Double[]{{
                    add(1430.78),
                }};
                constraints = new PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(49499L),
                            add(211301L),
                            add(101854L),
                            add(44929L),
                        }}),
                        add(new Long[]{{
                            add(860362L),
                        }}),
                        add(new Long[]{{
                            add(73574L),
                            add(298750L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(7602.79),
                            add(7505.37),
                        }}),
                        add(new Double[]{{
                            add(9980.23),
                            add(651.18),
                        }}),
                        add(new Double[]{{
                            add(7116.15),
                            add(9442.03),
                            add(5698.34),
                        }}),
                        add(new Double[]{{
                            add(1513.85),
                            add(1066.82),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(4087.74),
                        add(6573.01),
                        add(2961.28),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(4934.07),
                        add(4578.35),
                        add(6570.44),
                        add(5124.88),
                    }};
                    maximumPortfolioExposure = 4610.5;
                    minimumAssetsWeights = new Double[]{{
                        add(9351.61),
                        add(2464.02),
                        add(8847.65),
                        add(2633.46),
                    }};
                    minimumPortfolioExposure = 7019.78;
                }};;
                subsetPortfolios = 930111L;
                subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum.AVERAGE;
                subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum.COMPLETE;
                subsetSize = 131687L;
            }};            

            PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedResponse res = sdk.portfolioOptimizationMeanVariance.postPortfolioOptimizationMinimumVarianceSubsetResamplingBased(req);

            if (res.postPortfolioOptimizationMinimumVarianceSubsetResamplingBased200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
