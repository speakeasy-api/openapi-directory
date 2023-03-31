<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnalyticsGroupByEnum;
import org.openapis.openapi.models.operations.AnalyticsQueryParams;
import org.openapis.openapi.models.operations.AnalyticsRequest;
import org.openapis.openapi.models.operations.AnalyticsResponse;

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

            AnalyticsRequest req = new AnalyticsRequest() {{
                queryParams = new AnalyticsQueryParams() {{
                    end = "corrupti";
                    groupBy = "subaccount";
                    label = "distinctio";
                    start = "quibusdam";
                    subaccounts = "unde";
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