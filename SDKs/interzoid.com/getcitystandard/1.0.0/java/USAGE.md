<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcitystandardRequest;
import org.openapis.openapi.models.operations.GetcitystandardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcitystandardRequest req = new GetcitystandardRequest() {{
                city = "Laruecester";
                license = "quibusdam";
            }}            

            GetcitystandardResponse res = sdk.cityDataStandardization.getcitystandard(req);

            if (res.getcitystandard200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->