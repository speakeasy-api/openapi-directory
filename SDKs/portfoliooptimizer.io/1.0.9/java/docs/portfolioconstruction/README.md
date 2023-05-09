# portfolioConstruction

### Available Operations

* [postPortfolioConstructionInvestable](#postportfolioconstructioninvestable) - Investable Portfolio
* [postPortfolioConstructionMimicking](#postportfolioconstructionmimicking) - Mimicking Portfolio
* [postPortfolioConstructionRandom](#postportfolioconstructionrandom) - Random Portfolio

## postPortfolioConstructionInvestable

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioConstructionInvestableRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioConstructionInvestableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioConstructionInvestableRequestBody req = new PostPortfolioConstructionInvestableRequestBody(216870L,                 new Double[]{{
                                add(9031.5),
                            }}, 6444.2) {{
                assetsGroups = new Long[][]{{
                    add(new Long[]{{
                        add(333072L),
                        add(727481L),
                    }}),
                }};
                assetsGroupsWeights = new Double[]{{
                    add(5845.93),
                }};
                assetsMinimumNotionalValues = new Double[]{{
                    add(7566.54),
                    add(8200.23),
                }};
                assetsMinimumPositions = new Double[]{{
                    add(2981.87),
                    add(9322.96),
                }};
                assetsSizeLots = new Double[]{{
                    add(9930.02),
                }};
                assetsWeights = new Double[]{{
                    add(1645.32),
                    add(8138.8),
                }};
                maximumAssetsGroupsWeights = new Double[]{{
                    add(1403.84),
                    add(8634.77),
                    add(2273.62),
                }};
            }};            

            PostPortfolioConstructionInvestableResponse res = sdk.portfolioConstruction.postPortfolioConstructionInvestable(req);

            if (res.postPortfolioConstructionInvestable200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioConstructionMimicking

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References 
* Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioConstructionMimickingRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioConstructionMimickingRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioConstructionMimickingRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioConstructionMimickingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioConstructionMimickingRequestBody req = new PostPortfolioConstructionMimickingRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioConstructionMimickingRequestBodyAssets[]{{
                                add(new PostPortfolioConstructionMimickingRequestBodyAssets(                new Double[]{{
                                                    add(3952.33),
                                                    add(9775.18),
                                                    add(3108.4),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(7057.1),
                                    }};
                                }}),
                            }},                 new Double[]{{
                                add(7186.27),
                                add(3924.3),
                                add(3359.77),
                            }}) {{
                constraints = new PostPortfolioConstructionMimickingRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(794507L),
                            add(815200L),
                            add(706061L),
                        }}),
                        add(new Long[]{{
                            add(318917L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(1623.58),
                            add(8915.81),
                            add(2908.41),
                            add(7009.28),
                        }}),
                        add(new Double[]{{
                            add(4407.77),
                        }}),
                        add(new Double[]{{
                            add(2072.96),
                            add(4800.61),
                        }}),
                        add(new Double[]{{
                            add(5221.76),
                            add(7538.9),
                            add(8536.06),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(8894.48),
                        add(4956.17),
                        add(2201.04),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(6228.94),
                    }};
                    maximumPortfolioExposure = 7847.31;
                    minimumAssetsWeights = new Double[]{{
                        add(4915.91),
                    }};
                    minimumPortfolioExposure = 4589.7;
                }};;
            }};            

            PostPortfolioConstructionMimickingResponse res = sdk.portfolioConstruction.postPortfolioConstructionMimicking(req);

            if (res.postPortfolioConstructionMimicking200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioConstructionRandom

Construct one or several random portfolio(s), optionally subject to:       
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

> Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.

References
* [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioConstructionRandomRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioConstructionRandomRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioConstructionRandomResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioConstructionRandomRequestBody req = new PostPortfolioConstructionRandomRequestBody(322333L) {{
                constraints = new PostPortfolioConstructionRandomRequestBodyConstraints() {{
                    maximumAssetsWeights = new Double[]{{
                        add(3165.01),
                    }};
                    maximumPortfolioExposure = 9650.9;
                    minimumAssetsWeights = new Double[]{{
                        add(4912.01),
                        add(7298.28),
                    }};
                    minimumPortfolioExposure = 723.5;
                }};;
                portfolios = 69182L;
            }};            

            PostPortfolioConstructionRandomResponse res = sdk.portfolioConstruction.postPortfolioConstructionRandom(req);

            if (res.postPortfolioConstructionRandom200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
