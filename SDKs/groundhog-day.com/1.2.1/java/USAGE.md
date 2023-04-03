<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GroundhogRequest;
import org.openapis.openapi.models.operations.GroundhogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroundhogRequest req = new GroundhogRequest() {{
                slug = "corrupti";
            }}            

            GroundhogResponse res = sdk.groundhogs.groundhog(req);

            if (res.groundhog200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->