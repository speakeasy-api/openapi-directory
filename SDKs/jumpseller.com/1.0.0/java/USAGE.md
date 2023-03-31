<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonPathParams;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonQueryParams;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonRequest;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJsappsCodeJsonRequest req = new DeleteJsappsCodeJsonRequest() {{
                pathParams = new DeleteJsappsCodeJsonPathParams() {{
                    code = "corrupti";
                }};
                queryParams = new DeleteJsappsCodeJsonQueryParams() {{
                    authtoken = "provident";
                    login = "distinctio";
                }};
            }};            

            DeleteJsappsCodeJsonResponse res = sdk.apps.deleteJsappsCodeJson(req);

            if (res.deleteJsappsCodeJSON200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->