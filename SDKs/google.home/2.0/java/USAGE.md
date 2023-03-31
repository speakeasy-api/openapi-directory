<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccessibilityRequest;
import org.openapis.openapi.models.operations.AccessibilityResponse;
import org.openapis.openapi.models.shared.AccessibilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    castLocalAuthorizationToken = new SchemeCastLocalAuthorizationToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

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