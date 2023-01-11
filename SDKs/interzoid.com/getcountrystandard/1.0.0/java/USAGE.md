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

            GetcountrystandardRequest req = new GetcountrystandardRequest() {{
                queryParams = new GetcountrystandardQueryParams() {{
                    country = "vel";
                    license = "id";
                }};
            }};

            GetcountrystandardResponse res = sdk.countryNameStandardization.getcountrystandard(req);

            if (res.getcountrystandard200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->