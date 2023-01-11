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

            GetemailinfoRequest req = new GetemailinfoRequest() {{
                queryParams = new GetemailinfoQueryParams() {{
                    email = "sit";
                    license = "voluptas";
                }};
            }};

            GetemailinfoResponse res = sdk.emailAddressInformation.getemailinfo(req);

            if (res.getemailinfo200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->