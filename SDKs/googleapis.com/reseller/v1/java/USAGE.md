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

            ResellerCustomersGetRequest req = new ResellerCustomersGetRequest() {{
                security = new ResellerCustomersGetSecurity() {{
                    option1 = new ResellerCustomersGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ResellerCustomersGetPathParams() {{
                    customerId = "similique";
                }};
                queryParams = new ResellerCustomersGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "et";
                    alt = "proto";
                    callback = "et";
                    fields = "placeat";
                    key = "occaecati";
                    oauthToken = "sit";
                    prettyPrint = false;
                    quotaUser = "ab";
                    uploadType = "molestiae";
                    uploadProtocol = "temporibus";
                }};
            }};

            ResellerCustomersGetResponse res = sdk.customers.resellerCustomersGet(req);

            if (res.customer.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->