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

            GetAddressRequest req = new GetAddressRequest() {{
                pathParams = new GetAddressPathParams() {{
                    address = "suscipit";
                }};
            }};

            GetAddressResponse res = sdk.insight.getAddress(req);

            if (res.getAddressResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->