<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DepthChartsFormatEnum;
import org.openapis.openapi.models.operations.DepthChartsPathParams;
import org.openapis.openapi.models.operations.DepthChartsRequest;
import org.openapis.openapi.models.operations.DepthChartsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DepthChartsRequest req = new DepthChartsRequest() {{
                pathParams = new DepthChartsPathParams() {{
                    format = "JSON";
                }};
            }};            

            DepthChartsResponse res = sdk.depthCharts(req);

            if (res.teamDepthCharts.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->