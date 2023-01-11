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

            KeysApiCurrentRequest req = new KeysApiCurrentRequest() {{
                pathParams = new KeysApiCurrentPathParams() {{
                    serial = "sit";
                }};
            }};

            KeysApiCurrentResponse res = sdk.keysApi.keysApiCurrent(req);

            if (res.keysApiCurrent200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->