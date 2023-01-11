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

            GetareacodefromnumberRequest req = new GetareacodefromnumberRequest() {{
                queryParams = new GetareacodefromnumberQueryParams() {{
                    license = "sit";
                    number = "voluptas";
                }};
            }};

            GetareacodefromnumberResponse res = sdk.areaCodeInformation.getareacodefromnumber(req);

            if (res.getareacodefromnumber200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->