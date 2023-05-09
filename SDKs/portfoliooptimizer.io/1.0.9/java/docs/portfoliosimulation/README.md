# portfolioSimulation

### Available Operations

* [postPortfolioSimulationRebalancingDriftWeight](#postportfoliosimulationrebalancingdriftweight) - Drift-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingFixedWeight](#postportfoliosimulationrebalancingfixedweight) - Fixed-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingRandomWeight](#postportfoliosimulationrebalancingrandomweight) - Random-weight Portfolio Rebalancing

## postPortfolioSimulationRebalancingDriftWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioSimulationRebalancingDriftWeightRequestBody req = new PostPortfolioSimulationRebalancingDriftWeightRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[]{{
                                add(new PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets(                new Double[]{{
                                                    add(3088.19),
                                                    add(1039.88),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(7044.02),
                                        add(2181.28),
                                    }};
                                }}),
                                add(new PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets(                new Double[]{{
                                                    add(6152.77),
                                                    add(749.21),
                                                    add(7924.99),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(9078.99),
                                        add(2217.81),
                                        add(7090.51),
                                    }};
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[]{{
                                add(new PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios(                new Double[]{{
                                                    add(9164.19),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(5766.57),
                                        add(4834.59),
                                        add(3156.71),
                                        add(8811.89),
                                    }};
                                }}),
                                add(new PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios(                new Double[]{{
                                                    add(5265.84),
                                                    add(9493.7),
                                                    add(5379.46),
                                                    add(2649.58),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(2715.51),
                                        add(638.25),
                                        add(6075.45),
                                    }};
                                }}),
                                add(new PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios(                new Double[]{{
                                                    add(9021.32),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(1013.74),
                                        add(3051.89),
                                        add(2867.26),
                                        add(9834.34),
                                    }};
                                }}),
                            }});            

            PostPortfolioSimulationRebalancingDriftWeightResponse res = sdk.portfolioSimulation.postPortfolioSimulationRebalancingDriftWeight(req);

            if (res.postPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioSimulationRebalancingFixedWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioSimulationRebalancingFixedWeightRequestBody req = new PostPortfolioSimulationRebalancingFixedWeightRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[]{{
                                add(new PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets(                new Double[]{{
                                                    add(6448.27),
                                                    add(3198.34),
                                                    add(9704.11),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(8174.54),
                                        add(7890.16),
                                        add(7690.47),
                                        add(3028.78),
                                    }};
                                }}),
                                add(new PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets(                new Double[]{{
                                                    add(7489.73),
                                                    add(8429.74),
                                                    add(6076.24),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(7855.55),
                                    }};
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[]{{
                                add(new PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios(                new Double[]{{
                                                    add(1572.81),
                                                    add(8980.88),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(6428.04),
                                        add(5846.4),
                                    }};
                                }}),
                            }});            

            PostPortfolioSimulationRebalancingFixedWeightResponse res = sdk.portfolioSimulation.postPortfolioSimulationRebalancingFixedWeight(req);

            if (res.postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioSimulationRebalancingRandomWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.

References
* [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingRandomWeightRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets;
import org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingRandomWeightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioSimulationRebalancingRandomWeightRequestBody req = new PostPortfolioSimulationRebalancingRandomWeightRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[]{{
                                add(new PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets(                new Double[]{{
                                                    add(1527.42),
                                                    add(1404.39),
                                                    add(4798.3),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(4741.85),
                                        add(1541.3),
                                    }};
                                }}),
                                add(new PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets(                new Double[]{{
                                                    add(5751.39),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(1769.35),
                                        add(8304.77),
                                        add(1998.79),
                                    }};
                                }}),
                            }}) {{
                portfolios = 291389L;
            }};            

            PostPortfolioSimulationRebalancingRandomWeightResponse res = sdk.portfolioSimulation.postPortfolioSimulationRebalancingRandomWeight(req);

            if (res.postPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
