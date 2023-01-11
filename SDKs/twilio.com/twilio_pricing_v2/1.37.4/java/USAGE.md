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

            FetchTrunkingCountryRequest req = new FetchTrunkingCountryRequest() {{
                security = new FetchTrunkingCountrySecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchTrunkingCountryPathParams() {{
                    isoCountry = "nihil";
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