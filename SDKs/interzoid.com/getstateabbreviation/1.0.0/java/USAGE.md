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

            GetstateabbreviationRequest req = new GetstateabbreviationRequest() {{
                queryParams = new GetstateabbreviationQueryParams() {{
                    license = "sit";
                    state = "voluptas";
                }};
            }};

            GetstateabbreviationResponse res = sdk.stateDataStandardization.getstateabbreviation(req);

            if (res.getstateabbreviation200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->