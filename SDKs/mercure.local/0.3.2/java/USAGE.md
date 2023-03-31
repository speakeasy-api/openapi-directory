<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetWellKnownMercureQueryParams;
import org.openapis.openapi.models.operations.GetWellKnownMercureHeaders;
import org.openapis.openapi.models.operations.GetWellKnownMercureRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            GetWellKnownMercureRequest req = new GetWellKnownMercureRequest() {{
                queryParams = new GetWellKnownMercureQueryParams() {{
                    lastEventID = "corrupti";
                    topic = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
                headers = new GetWellKnownMercureHeaders() {{
                    lastEventID = "nulla";
                }};
            }};            

            GetWellKnownMercureResponse res = sdk.getWellKnownMercure(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->