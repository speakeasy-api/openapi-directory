<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest() {{
                xMarketId = "corrupti";
                xPrivateLabelId = 592845;
                keys = new String[]{{
                    add("quibusdam"),
                    add("unde"),
                    add("nulla"),
                }};
            }}            

            GetResponse res = sdk.v1.get(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->