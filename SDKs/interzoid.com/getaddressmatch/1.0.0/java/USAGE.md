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

            GetaddressmatchRequest req = new GetaddressmatchRequest() {{
                queryParams = new GetaddressmatchQueryParams() {{
                    address = "aut";
                    license = "dolor";
                }};
            }};

            GetaddressmatchResponse res = sdk.streetAddressSimilarityKey.getaddressmatch(req);

            if (res.getaddressmatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->