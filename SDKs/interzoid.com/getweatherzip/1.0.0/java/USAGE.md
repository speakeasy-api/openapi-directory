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

            GetweatherzipcodeRequest req = new GetweatherzipcodeRequest() {{
                queryParams = new GetweatherzipcodeQueryParams() {{
                    license = "sit";
                    zip = "voluptas";
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