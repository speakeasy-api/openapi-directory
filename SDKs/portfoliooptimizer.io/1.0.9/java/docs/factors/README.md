# factors

### Available Operations

* [postFactorsResidualization](#postfactorsresidualization) - Residualization

## postFactorsResidualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.

References
* [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
* [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFactorsResidualizationRequestBody;
import org.openapis.openapi.models.operations.PostFactorsResidualizationRequestBodyFactors;
import org.openapis.openapi.models.operations.PostFactorsResidualizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostFactorsResidualizationRequestBody req = new PostFactorsResidualizationRequestBody(                new org.openapis.openapi.models.operations.PostFactorsResidualizationRequestBodyFactors[]{{
                                add(new PostFactorsResidualizationRequestBodyFactors(                new Double[]{{
                                                    add(324.65),
                                                    add(2211.61),
                                                }}) {{
                                    factorReturns = new Double[]{{
                                        add(5445.91),
                                    }};
                                }}),
                                add(new PostFactorsResidualizationRequestBodyFactors(                new Double[]{{
                                                    add(120.36),
                                                    add(4910.25),
                                                }}) {{
                                    factorReturns = new Double[]{{
                                        add(2531.91),
                                        add(7710.89),
                                        add(1310.55),
                                    }};
                                }}),
                                add(new PostFactorsResidualizationRequestBodyFactors(                new Double[]{{
                                                    add(2446.51),
                                                    add(9742.57),
                                                    add(3743.23),
                                                }}) {{
                                    factorReturns = new Double[]{{
                                        add(9816.4),
                                    }};
                                }}),
                            }}, 990345L);            

            PostFactorsResidualizationResponse res = sdk.factors.postFactorsResidualization(req);

            if (res.postFactorsResidualization200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
