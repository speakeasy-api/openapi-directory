<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsAnalysisAbsorptionRatioRequestBody req = new PostAssetsAnalysisAbsorptionRatioRequestBody(592845L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(6027.63),
                                    add(8579.46),
                                    add(5448.83),
                                    add(8472.52),
                                }}),
                                add(new Double[]{{
                                    add(6235.64),
                                    add(6458.94),
                                }}),
                                add(new Double[]{{
                                    add(4375.87),
                                    add(2975.34),
                                }}),
                            }}) {{
                assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors() {{
                    eigenvectorsRetained = 891773L;
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
<!-- End SDK Example Usage -->