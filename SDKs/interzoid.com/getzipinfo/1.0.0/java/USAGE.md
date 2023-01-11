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

            GetzipcodeinfoRequest req = new GetzipcodeinfoRequest() {{
                queryParams = new GetzipcodeinfoQueryParams() {{
                    license = "sit";
                    zip = "voluptas";
                }};
            }};

            GetzipcodeinfoResponse res = sdk.detailedZipCodeInformation.getzipcodeinfo(req);

            if (res.getzipcodeinfo200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->