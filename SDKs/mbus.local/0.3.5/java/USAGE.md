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

            GetRequest req = new GetRequest() {{
                pathParams = new GetPathParams() {{
                    address = "sit";
                    baudrate = 2259404117704393152;
                    device = "culpa";
                }};
            }};

            GetResponse res = sdk.get(req);

            if (res.mbusData.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->