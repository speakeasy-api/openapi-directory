# assetsReturnsSimulation

### Available Operations

* [postAssetsReturnsSimulationBootstrap](#postassetsreturnssimulationbootstrap) - Bootstrap

## postAssetsReturnsSimulationBootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.

References
* [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)
* [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)
* [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationBootstrapRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationBootstrapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsSimulationBootstrapRequestBody req = new PostAssetsReturnsSimulationBootstrapRequestBody(                new org.openapis.openapi.models.operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets[]{{
                                add(new PostAssetsReturnsSimulationBootstrapRequestBodyAssets(                new Double[]{{
                                                    add(3990.25),
                                                    add(934.59),
                                                    add(9040.45),
                                                    add(4263.06),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(8003.79),
                                        add(7241.68),
                                    }};
                                }}),
                            }}) {{
                bootstrapAverageBlockLength = 6900.25;
                bootstrapBlockLength = 473221L;
                bootstrapMethod = PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum.STATIONARY_BLOCK;
                simulations = 580197L;
                simulationsLength = 327720L;
            }};            

            PostAssetsReturnsSimulationBootstrapResponse res = sdk.assetsReturnsSimulation.postAssetsReturnsSimulationBootstrap(req);

            if (res.postAssetsReturnsSimulationBootstrap200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
