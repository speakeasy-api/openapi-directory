# portfolioAnalysisConditionalValueAtRisk

### Available Operations

* [postPortfolioAnalysisValueAtRiskConditionalCornishFisher](#postportfolioanalysisvalueatriskconditionalcornishfisher) - Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected](#postportfolioanalysisvalueatriskconditionalcornishfishercorrected) - Corrected Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalGaussian](#postportfolioanalysisvalueatriskconditionalgaussian) - Gaussian Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalHistorical](#postportfolioanalysisvalueatriskconditionalhistorical) - Historical Conditional Value At Risk

## postPortfolioAnalysisValueAtRiskConditionalCornishFisher

Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody req = new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(2164.57),
                                                    add(7730.35),
                                                    add(1660.47),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6756.89),
                                        add(2310.7),
                                        add(2448.89),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(4530.94),
                                                    add(1940.23),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(9227.57),
                                        add(7214.3),
                                        add(2940.76),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(8442.35),
                                                    add(4378.14),
                                                    add(1390.72),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2055.66),
                                        add(7781.72),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(7268.78),
                                                    add(1024.13),
                                                    add(9754.25),
                                                    add(1563.83),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(4269.04),
                                        add(3008.24),
                                        add(8428.55),
                                        add(789.69),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 7820.9;
            }};            

            PostPortfolioAnalysisValueAtRiskConditionalCornishFisherResponse res = sdk.portfolioAnalysisConditionalValueAtRisk.postPortfolioAnalysisValueAtRiskConditionalCornishFisher(req);

            if (res.postPortfolioAnalysisValueAtRiskConditionalCornishFisher200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected

Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody req = new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios(                new Double[]{{
                                                    add(4069.22),
                                                    add(1076.17),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(365.61),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 8777.51;
            }};            

            PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedResponse res = sdk.portfolioAnalysisConditionalValueAtRisk.postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected(req);

            if (res.postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskConditionalGaussian

Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody req = new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios(                new Double[]{{
                                                    add(9353.02),
                                                    add(1175.25),
                                                    add(7722.66),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2840.86),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios(                new Double[]{{
                                                    add(2421.78),
                                                    add(6738.38),
                                                    add(2503.98),
                                                    add(2244.67),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6109.87),
                                        add(9325.62),
                                        add(26.77),
                                        add(3917.97),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 4833.94;
            }};            

            PostPortfolioAnalysisValueAtRiskConditionalGaussianResponse res = sdk.portfolioAnalysisConditionalValueAtRisk.postPortfolioAnalysisValueAtRiskConditionalGaussian(req);

            if (res.postPortfolioAnalysisValueAtRiskConditionalGaussian200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskConditionalHistorical

Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody req = new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios(                new Double[]{{
                                                    add(4083.03),
                                                    add(6931.53),
                                                    add(3774.06),
                                                    add(7051.48),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6397.05),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 8093.65;
            }};            

            PostPortfolioAnalysisValueAtRiskConditionalHistoricalResponse res = sdk.portfolioAnalysisConditionalValueAtRisk.postPortfolioAnalysisValueAtRiskConditionalHistorical(req);

            if (res.postPortfolioAnalysisValueAtRiskConditionalHistorical200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
