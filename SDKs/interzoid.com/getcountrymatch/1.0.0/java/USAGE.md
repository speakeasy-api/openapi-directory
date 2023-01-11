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

            GetcountrymatchRequest req = new GetcountrymatchRequest() {{
                queryParams = new GetcountrymatchQueryParams() {{
                    country = "sit";
                    license = "voluptas";
                }};
            }};

            GetcountrymatchResponse res = sdk.countryMatchSimilarityKey.getcountrymatch(req);

            if (res.getcountrymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->