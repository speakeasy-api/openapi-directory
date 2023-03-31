<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchTrunkingCountrySecurity;
import org.openapis.openapi.models.operations.FetchTrunkingCountryPathParams;
import org.openapis.openapi.models.operations.FetchTrunkingCountryRequest;
import org.openapis.openapi.models.operations.FetchTrunkingCountryResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkingCountryRequest req = new FetchTrunkingCountryRequest() {{
                security = new FetchTrunkingCountrySecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchTrunkingCountryPathParams() {{
                    isoCountry = "corrupti";
                }};
            }};            

            FetchTrunkingCountryResponse res = sdk.fetchTrunkingCountry(req);

            if (res.pricingV2TrunkingCountryInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->