<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioRequestBody;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioRequest;
import org.openapis.openapi.models.operations.PostAssetsAnalysisAbsorptionRatioResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PostAssetsAnalysisAbsorptionRatioRequest req = new PostAssetsAnalysisAbsorptionRatioRequest() {{
                request = new PostAssetsAnalysisAbsorptionRatioRequestBody() {{
                    assets = 548814;
                    assetsCovarianceMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(8442.66),
                            add(6027.63),
                            add(8579.46),
                        }}),
                        add(new Double[]{{
                            add(8472.52),
                            add(4236.55),
                            add(6235.64),
                        }}),
                        add(new Double[]{{
                            add(3843.82),
                            add(4375.87),
                            add(2975.34),
                        }}),
                    }};
                    assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors() {{
                        eigenvectorsRetained = 891773;
                    }};
                }};
            }};            

            PostAssetsAnalysisAbsorptionRatioResponse res = sdk.assetsAnalysis.postAssetsAnalysisAbsorptionRatio(req);

            if (res.postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->