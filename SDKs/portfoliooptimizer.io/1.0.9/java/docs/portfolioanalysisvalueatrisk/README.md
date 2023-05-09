# portfolioAnalysisValueAtRisk

### Available Operations

* [postPortfolioAnalysisValueAtRiskCornishFisher](#postportfolioanalysisvalueatriskcornishfisher) - Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskCornishFisherCorrected](#postportfolioanalysisvalueatriskcornishfishercorrected) - Corrected Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskGaussian](#postportfolioanalysisvalueatriskgaussian) - Gaussian Value At Risk
* [postPortfolioAnalysisValueAtRiskHistorical](#postportfolioanalysisvalueatriskhistorical) - Historical Value At Risk

## postPortfolioAnalysisValueAtRiskCornishFisher

Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody req = new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(7358.94),
                                                    add(8786.01),
                                                    add(1415.06),
                                                    add(9974.37),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6692.37),
                                        add(7708.73),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(4483.69),
                                                    add(4969.15),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(3628.88),
                                        add(4413.21),
                                        add(452.34),
                                        add(4864.1),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(                new Double[]{{
                                                    add(4527.29),
                                                    add(8667.89),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(1721.95),
                                        add(6211.69),
                                        add(850.76),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 9326.66;
            }};            

            PostPortfolioAnalysisValueAtRiskCornishFisherResponse res = sdk.portfolioAnalysisValueAtRisk.postPortfolioAnalysisValueAtRiskCornishFisher(req);

            if (res.postPortfolioAnalysisValueAtRiskCornishFisher200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskCornishFisherCorrected

Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody req = new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios(                new Double[]{{
                                                    add(8108.39),
                                                    add(6972.74),
                                                    add(3481.92),
                                                    add(4633.44),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(3114.86),
                                        add(4166.92),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios(                new Double[]{{
                                                    add(5755.34),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2646.19),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios(                new Double[]{{
                                                    add(3344.74),
                                                    add(6592.68),
                                                    add(1753.72),
                                                    add(7249.94),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(1949.01),
                                        add(9185.47),
                                        add(7412.32),
                                        add(1201.2),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios(                new Double[]{{
                                                    add(7482.24),
                                                    add(568.77),
                                                    add(4973.57),
                                                    add(9804.86),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(1644.88),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 873.82;
            }};            

            PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedResponse res = sdk.portfolioAnalysisValueAtRisk.postPortfolioAnalysisValueAtRiskCornishFisherCorrected(req);

            if (res.postPortfolioAnalysisValueAtRiskCornishFisherCorrected200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskGaussian

Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.

References
* [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2942138)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskGaussianResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskGaussianRequestBody req = new PostPortfolioAnalysisValueAtRiskGaussianRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios(                new Double[]{{
                                                    add(3423.42),
                                                    add(9887.49),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(7294.48),
                                        add(5665.06),
                                        add(5782.1),
                                        add(3679.17),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios(                new Double[]{{
                                                    add(5173.26),
                                                    add(5646.67),
                                                    add(4849.66),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(5740.32),
                                        add(3145.73),
                                        add(9449.5),
                                        add(6573.19),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 511.7;
            }};            

            PostPortfolioAnalysisValueAtRiskGaussianResponse res = sdk.portfolioAnalysisValueAtRisk.postPortfolioAnalysisValueAtRiskGaussian(req);

            if (res.postPortfolioAnalysisValueAtRiskGaussian200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisValueAtRiskHistorical

Compute the historical value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskHistoricalRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisValueAtRiskHistoricalRequestBody req = new PostPortfolioAnalysisValueAtRiskHistoricalRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios(                new Double[]{{
                                                    add(2440.32),
                                                    add(385.57),
                                                    add(9639.76),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6144.38),
                                        add(8268.62),
                                        add(7316.34),
                                    }};
                                }}),
                            }}) {{
                confidenceLevel = 7731.1;
            }};            

            PostPortfolioAnalysisValueAtRiskHistoricalResponse res = sdk.portfolioAnalysisValueAtRisk.postPortfolioAnalysisValueAtRiskHistorical(req);

            if (res.postPortfolioAnalysisValueAtRiskHistorical200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
