<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetFeaturesFeatureIdRequest req = new GetFeaturesFeatureIdRequest() {{
                pathParams = new GetFeaturesFeatureIdPathParams() {{
                    featureId = 8717895732742165505;
                }};
            }};

            GetFeaturesFeatureIdResponse res = sdk.feature.getFeaturesFeatureId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->