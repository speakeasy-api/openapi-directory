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

            GetcitystandardRequest req = new GetcitystandardRequest() {{
                queryParams = new GetcitystandardQueryParams() {{
                    city = "occaecati";
                    license = "fuga";
                }};
            }};

            GetcitystandardResponse res = sdk.cityDataStandardization.getcitystandard(req);

            if (res.getcitystandard200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->