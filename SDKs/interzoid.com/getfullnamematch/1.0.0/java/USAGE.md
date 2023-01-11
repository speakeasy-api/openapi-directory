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

            GetfullnamematchRequest req = new GetfullnamematchRequest() {{
                queryParams = new GetfullnamematchQueryParams() {{
                    fullname = "explicabo";
                    license = "eos";
                }};
            }};

            GetfullnamematchResponse res = sdk.fullNameMatchSimilarityKey.getfullnamematch(req);

            if (res.getfullnamematch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->