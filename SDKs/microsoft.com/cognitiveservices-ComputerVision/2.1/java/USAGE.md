<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum;
import org.openapis.openapi.models.operations.AnalyzeImageRequest;
import org.openapis.openapi.models.operations.AnalyzeImageResponse;
import org.openapis.openapi.models.shared.DescriptionExcludeEnum;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;
import org.openapis.openapi.models.shared.VisualFeaturesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeImageRequest req = new AnalyzeImageRequest(                new ImageUrl("provident");) {{
                descriptionExclude = new org.openapis.openapi.models.shared.DescriptionExcludeEnum[]{{
                    add(DescriptionExcludeEnum.LANDMARKS),
                    add(DescriptionExcludeEnum.LANDMARKS),
                    add(DescriptionExcludeEnum.LANDMARKS),
                }};
                details = new org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum[]{{
                    add(AnalyzeImageDetailsEnum.LANDMARKS),
                    add(AnalyzeImageDetailsEnum.CELEBRITIES),
                    add(AnalyzeImageDetailsEnum.LANDMARKS),
                }};
                language = ServiceLanguageEnum.PT;
                visualFeatures = new org.openapis.openapi.models.shared.VisualFeaturesEnum[]{{
                    add(VisualFeaturesEnum.CATEGORIES),
                    add(VisualFeaturesEnum.ADULT),
                }};
            }};            

            AnalyzeImageResponse res = sdk.analyzeImage(req);

            if (res.imageAnalysis != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->