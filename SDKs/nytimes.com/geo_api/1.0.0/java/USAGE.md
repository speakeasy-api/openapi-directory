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

            GetQueryJsonRequest req = new GetQueryJsonRequest() {{
                queryParams = new GetQueryJsonQueryParams() {{
                    dateRange = "sit";
                    elevation = 2259404117704393152;
                    facets = 6050128673802995827;
                    filter = "expedita";
                    latitude = "consequuntur";
                    limit = 2669985732393126063;
                    longitude = "expedita";
                    name = "voluptas";
                    offset = 8274930044578894929;
                    query = "et";
                    sort = "nihil";
                    sw = "rerum";
                }};
            }};

            GetQueryJsonResponse res = sdk.events.getQueryJson(req);

            if (res.getQueryJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->