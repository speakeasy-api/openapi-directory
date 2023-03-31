<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAddressPathParams;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressRequest req = new GetAddressRequest() {{
                pathParams = new GetAddressPathParams() {{
                    address = "5786 Little Streets";
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