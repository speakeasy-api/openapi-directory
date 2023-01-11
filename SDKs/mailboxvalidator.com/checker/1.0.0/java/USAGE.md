<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetV1EmailFreeRequest req = new GetV1EmailFreeRequest() {{
                queryParams = new GetV1EmailFreeQueryParams() {{
                    email = "autem";
                    format = "json";
                    key = "odit";
                }};
            }};

            GetV1EmailFreeResponse res = sdk.getV1EmailFree(req);

            if (res.getV1EmailFree200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->