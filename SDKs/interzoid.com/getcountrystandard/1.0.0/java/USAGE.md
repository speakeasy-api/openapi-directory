<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcountrystandardRequest;
import org.openapis.openapi.models.operations.GetcountrystandardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcountrystandardRequest req = new GetcountrystandardRequest() {{
                country = "Malta";
                license = "provident";
            }}            

            GetcountrystandardResponse res = sdk.countryNameStandardization.getcountrystandard(req);

            if (res.getcountrystandard200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->