<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum;
import org.openapis.openapi.models.operations.AnalyzeImageRequest;
import org.openapis.openapi.models.operations.AnalyzeImageResponse;
import org.openapis.openapi.models.shared.VisualFeaturesEnum;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;
import org.openapis.openapi.models.shared.DescriptionExcludeEnum;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeImageRequest req = new AnalyzeImageRequest() {{
                imageUrl = new ImageUrl() {{
                    url = "corrupti";
                }};
                descriptionExclude = new org.openapis.openapi.models.shared.DescriptionExcludeEnum[]{{
                    add("Landmarks"),
                    add("Landmarks"),
                    add("Landmarks"),
                }};
                details = new org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum[]{{
                    add("Landmarks"),
                    add("Landmarks"),
                    add("Celebrities"),
                    add("Landmarks"),
                }};
                language = "pt";
                visualFeatures = new org.openapis.openapi.models.shared.VisualFeaturesEnum[]{{
                    add("Categories"),
                    add("Adult"),
                }};
            }}            

            AnalyzeImageResponse res = sdk.analyzeImage(req);

            if (res.imageAnalysis.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->