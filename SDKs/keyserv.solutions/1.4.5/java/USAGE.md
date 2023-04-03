<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KeysApiCurrentRequest;
import org.openapis.openapi.models.operations.KeysApiCurrentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeysApiCurrentRequest req = new KeysApiCurrentRequest() {{
                serial = "corrupti";
            }}            

            KeysApiCurrentResponse res = sdk.keysApi.keysApiCurrent(req);

            if (res.keysApiCurrent200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->