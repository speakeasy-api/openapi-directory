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
                    dateRange = "sequi";
                    elevation = 1865645916773384272;
                    facets = 1813154553896103662;
                    filter = "molestias";
                    latitude = "quia";
                    limit = 2910837391177076705;
                    longitude = "eos";
                    name = "sunt";
                    offset = 810870458806702692;
                    query = "consequatur";
                    sort = "modi";
                    sw = "ex";
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