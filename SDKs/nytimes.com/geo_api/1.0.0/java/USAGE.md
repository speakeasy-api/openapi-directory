<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryJsonFacetsEnum;
import org.openapis.openapi.models.operations.GetQueryJsonRequest;
import org.openapis.openapi.models.operations.GetQueryJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryJsonRequest req = new GetQueryJsonRequest() {{
                dateRange = "provident";
                elevation = 715190L;
                facets = GetQueryJsonFacetsEnum.ONE;
                filter = "unde";
                latitude = "nulla";
                limit = 544883L;
                longitude = "illum";
                name = "Sabrina Oberbrunner";
                offset = 297534L;
                query = "debitis";
                sort = "ipsa";
                sw = "delectus";
            }};            

            GetQueryJsonResponse res = sdk.events.getQueryJson(req);

            if (res.getQueryJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->