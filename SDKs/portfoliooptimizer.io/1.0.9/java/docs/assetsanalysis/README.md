# assetsAnalysis

### Available Operations

* [postAssetsAnalysisAbsorptionRatio](#postassetsanalysisabsorptionratio) - Absorption Ratio
* [postAssetsAnalysisTurbulenceIndex](#postassetsanalysisturbulenceindex) - Turbulence Index

## postAssetsAnalysisAbsorptionRatio

Compute the absorption ratio associated to a universe of assets.

References
* [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioRequestBody;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsAnalysisAbsorptionRatioRequestBody req = new PostAssetsAnalysisAbsorptionRatioRequestBody(963663L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(4776.65),
                                    add(7917.25),
                                }}),
                                add(new Double[]{{
                                    add(5288.95),
                                    add(4799.77),
                                    add(5680.45),
                                    add(3927.85),
                                }}),
                            }}) {{
                assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors() {{
                    eigenvectorsRetained = 925597L;
                }};;
            }};            

            PostAssetsAnalysisAbsorptionRatioResponse res = sdk.assetsAnalysis.postAssetsAnalysisAbsorptionRatio(req);

            if (res.postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsAnalysisTurbulenceIndex

Compute the turbulence index associated to a universe of assets.

References
* [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
* [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsAnalysisTurbulenceIndexRequestBody;
import org.openapis.openapi.models.operations.PostAssetsAnalysisTurbulenceIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsAnalysisTurbulenceIndexRequestBody req = new PostAssetsAnalysisTurbulenceIndexRequestBody(71036L,                 new Double[]{{
                                add(871.29),
                                add(6481.72),
                            }},                 new Double[][]{{
                                add(new Double[]{{
                                    add(8326.2),
                                    add(9571.56),
                                }}),
                            }},                 new Double[]{{
                                add(1403.5),
                                add(8700.13),
                                add(8700.88),
                                add(9786.19),
                            }});            

            PostAssetsAnalysisTurbulenceIndexResponse res = sdk.assetsAnalysis.postAssetsAnalysisTurbulenceIndex(req);

            if (res.postAssetsAnalysisTurbulenceIndex200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
