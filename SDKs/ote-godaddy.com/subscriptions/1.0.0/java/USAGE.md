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

            CancelRequest req = new CancelRequest() {{
                pathParams = new CancelPathParams() {{
                    subscriptionId = "porro";
                }};
                headers = new CancelHeaders() {{
                    xShopperId = "qui";
                }};
            }};

            CancelResponse res = sdk.v1.cancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->