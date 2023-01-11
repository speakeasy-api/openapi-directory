<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    castLocalAuthorizationToken = new SchemeCastLocalAuthorizationToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AccessibilityRequest req = new AccessibilityRequest() {{
                request = new AccessibilityRequest() {{
                    endpointEnabled = false;
                    hotwordEnabled = false;
                }};
            }};

            AccessibilityResponse res = sdk.assistant.accessibility(req);

            if (res.getcurrentvalues.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->