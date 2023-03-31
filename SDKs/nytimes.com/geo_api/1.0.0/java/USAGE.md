<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetQueryJsonFacetsEnum;
import org.openapis.openapi.models.operations.GetQueryJsonQueryParams;
import org.openapis.openapi.models.operations.GetQueryJsonRequest;
import org.openapis.openapi.models.operations.GetQueryJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetQueryJsonRequest req = new GetQueryJsonRequest() {{
                queryParams = new GetQueryJsonQueryParams() {{
                    dateRange = "corrupti";
                    elevation = 592845;
                    facets = "1";
                    filter = "quibusdam";
                    latitude = "unde";
                    limit = 857946;
                    longitude = "corrupti";
                    name = "illum";
                    offset = 423655;
                    query = "error";
                    sort = "deserunt";
                    sw = "suscipit";
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