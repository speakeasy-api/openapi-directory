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
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AnalyticsRequest req = new AnalyticsRequest() {{
                queryParams = new AnalyticsQueryParams() {{
                    end = "sit";
                    groupBy = "subaccount";
                    label = "culpa";
                    start = "expedita";
                    subaccounts = "consequuntur";
                }};
            }};

            AnalyticsResponse res = sdk.analytics.analytics(req);

            if (res.analytics200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->