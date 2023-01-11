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

            GetMostemailedSectionTimePeriodJsonRequest req = new GetMostemailedSectionTimePeriodJsonRequest() {{
                security = new GetMostemailedSectionTimePeriodJsonSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetMostemailedSectionTimePeriodJsonPathParams() {{
                    section = "Opinion";
                    timePeriod = "1";
                }};
            }};

            GetMostemailedSectionTimePeriodJsonResponse res = sdk.getMostemailedSectionTimePeriodJson(req);

            if (res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->