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
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetCriticsResourceTypeJsonRequest req = new GetCriticsResourceTypeJsonRequest() {{
                pathParams = new GetCriticsResourceTypeJsonPathParams() {{
                    resourceType = "autem";
                }};
            }};

            GetCriticsResourceTypeJsonResponse res = sdk.getCriticsResourceTypeJson(req);

            if (res.getCriticsResourceTypeJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->