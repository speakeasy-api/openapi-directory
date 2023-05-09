<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrunkingCountryRequest;
import org.openapis.openapi.models.operations.FetchTrunkingCountryResponse;
import org.openapis.openapi.models.operations.FetchTrunkingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkingCountryRequest req = new FetchTrunkingCountryRequest("corrupti");            

            FetchTrunkingCountryResponse res = sdk.fetchTrunkingCountry(req, new FetchTrunkingCountrySecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2TrunkingCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->