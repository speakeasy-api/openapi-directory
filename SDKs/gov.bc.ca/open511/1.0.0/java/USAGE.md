<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAreasFormatEnum;
import org.openapis.openapi.models.operations.GetAreasQueryParams;
import org.openapis.openapi.models.operations.GetAreasRequest;
import org.openapis.openapi.models.operations.GetAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAreasRequest req = new GetAreasRequest() {{
                queryParams = new GetAreasQueryParams() {{
                    format = "xml";
                }};
            }};            

            GetAreasResponse res = sdk.resources.getAreas(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->