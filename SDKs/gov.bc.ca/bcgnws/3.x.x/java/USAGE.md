<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFeaturesFeatureIdRequest;
import org.openapis.openapi.models.operations.GetFeaturesFeatureIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturesFeatureIdRequest req = new GetFeaturesFeatureIdRequest() {{
                featureId = 548814;
            }}            

            GetFeaturesFeatureIdResponse res = sdk.feature.getFeaturesFeatureId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->