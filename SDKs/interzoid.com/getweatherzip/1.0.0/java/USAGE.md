<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetweatherzipcodeQueryParams;
import org.openapis.openapi.models.operations.GetweatherzipcodeRequest;
import org.openapis.openapi.models.operations.GetweatherzipcodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetweatherzipcodeRequest req = new GetweatherzipcodeRequest() {{
                queryParams = new GetweatherzipcodeQueryParams() {{
                    license = "corrupti";
                    zip = "provident";
                }};
            }};            

            GetweatherzipcodeResponse res = sdk.weatherByZipCode.getweatherzipcode(req);

            if (res.getweatherzipcode200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->