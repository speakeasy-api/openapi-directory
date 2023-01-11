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

            GetcitymatchRequest req = new GetcitymatchRequest() {{
                queryParams = new GetcitymatchQueryParams() {{
                    city = "sit";
                    license = "voluptas";
                }};
            }};

            GetcitymatchResponse res = sdk.cityNameSimilarityKey.getcitymatch(req);

            if (res.getcitymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->