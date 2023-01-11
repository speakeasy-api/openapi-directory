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

            GetareacodeRequest req = new GetareacodeRequest() {{
                queryParams = new GetareacodeQueryParams() {{
                    areacode = "sit";
                    license = "voluptas";
                }};
            }};

            GetareacodeResponse res = sdk.areaCodeInformation.getareacode(req);

            if (res.getareacode200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->