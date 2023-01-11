<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    tokenAuth = new SchemeTokenAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            RetrieveAccountBalancesRequest req = new RetrieveAccountBalancesRequest() {{
                pathParams = new RetrieveAccountBalancesPathParams() {{
                    id = "rerum";
                }};
            }};

            RetrieveAccountBalancesResponse res = sdk.accounts.retrieveAccountBalances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->