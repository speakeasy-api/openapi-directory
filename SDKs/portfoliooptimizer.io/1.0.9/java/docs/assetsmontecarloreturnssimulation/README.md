# assetsMonteCarloReturnsSimulation

### Available Operations

* [postAssetsReturnsSimulationMonteCarloCornishFisher](#postassetsreturnssimulationmontecarlocornishfisher) - Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloCornishFisherCorrected](#postassetsreturnssimulationmontecarlocornishfishercorrected) - Corrected Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloGaussian](#postassetsreturnssimulationmontecarlogaussian) - Gaussian Distribution

## postAssetsReturnsSimulationMonteCarloCornishFisher

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloCornishFisherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody req = new PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody(9280.82, 6082.53, 7044.15, 5966.56) {{
                simulations = 31838L;
                simulationsLength = 783645L;
            }};            

            PostAssetsReturnsSimulationMonteCarloCornishFisherResponse res = sdk.assetsMonteCarloReturnsSimulation.postAssetsReturnsSimulationMonteCarloCornishFisher(req);

            if (res.postAssetsReturnsSimulationMonteCarloCornishFisher200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsReturnsSimulationMonteCarloCornishFisherCorrected

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody req = new PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody(5000.26, 6214.79, 503.7, 5772.29) {{
                simulations = 699098L;
                simulationsLength = 237893L;
            }};            

            PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedResponse res = sdk.assetsMonteCarloReturnsSimulation.postAssetsReturnsSimulationMonteCarloCornishFisherCorrected(req);

            if (res.postAssetsReturnsSimulationMonteCarloCornishFisherCorrected200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsReturnsSimulationMonteCarloGaussian

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.

References
* [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloGaussianRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsSimulationMonteCarloGaussianResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsSimulationMonteCarloGaussianRequestBody req = new PostAssetsReturnsSimulationMonteCarloGaussianRequestBody(9342.14, 2672.62) {{
                simulations = 613966L;
                simulationsLength = 679091L;
            }};            

            PostAssetsReturnsSimulationMonteCarloGaussianResponse res = sdk.assetsMonteCarloReturnsSimulation.postAssetsReturnsSimulationMonteCarloGaussian(req);

            if (res.postAssetsReturnsSimulationMonteCarloGaussian200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
