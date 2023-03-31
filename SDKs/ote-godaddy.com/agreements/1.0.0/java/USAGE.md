<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetQueryParams;
import org.openapis.openapi.models.operations.GetHeaders;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest() {{
                queryParams = new GetQueryParams() {{
                    keys = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                headers = new GetHeaders() {{
                    xMarketId = "unde";
                    xPrivateLabelId = 857946;
                }};
            }};            

            GetResponse res = sdk.v1.get(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->