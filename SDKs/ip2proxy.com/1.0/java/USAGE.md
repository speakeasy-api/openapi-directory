<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFormatEnum;
import org.openapis.openapi.models.operations.GetQueryParams;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest() {{
                queryParams = new GetQueryParams() {{
                    format = "xml";
                    ip = "provident";
                    key = "distinctio";
                    package_ = "quibusdam";
                }};
            }};            

            GetResponse res = sdk.get(req);

            if (res.get200TextHTMLString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->