<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetWellKnownMercureRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureRequest req = new GetWellKnownMercureRequest() {{
                lastEventID = "corrupti";
                lastEventIDQueryParameter = "provident";
                topic = new String[]{{
                    add("quibusdam"),
                    add("unde"),
                    add("nulla"),
                }};
            }}            

            GetWellKnownMercureResponse res = sdk.getWellKnownMercure(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->