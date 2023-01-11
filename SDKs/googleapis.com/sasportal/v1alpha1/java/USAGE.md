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

            SasportalCustomersListRequest req = new SasportalCustomersListRequest() {{
                security = new SasportalCustomersListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new SasportalCustomersListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "atque";
                    alt = "proto";
                    callback = "in";
                    fields = "et";
                    key = "dolore";
                    oauthToken = "quia";
                    pageSize = 3072132506267533720;
                    pageToken = "aspernatur";
                    prettyPrint = true;
                    quotaUser = "error";
                    uploadType = "quas";
                    uploadProtocol = "quidem";
                }};
            }};

            SasportalCustomersListResponse res = sdk.customers.sasportalCustomersList(req);

            if (res.sasPortalListCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->