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

            ProdTtSasportalCustomersListRequest req = new ProdTtSasportalCustomersListRequest() {{
                security = new ProdTtSasportalCustomersListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new ProdTtSasportalCustomersListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "ea";
                    alt = "proto";
                    callback = "consectetur";
                    fields = "consequatur";
                    key = "laudantium";
                    oauthToken = "fugit";
                    pageSize = 8854321624913715948;
                    pageToken = "ducimus";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "amet";
                    uploadProtocol = "exercitationem";
                }};
            }};

            ProdTtSasportalCustomersListResponse res = sdk.customers.prodTtSasportalCustomersList(req);

            if (res.sasPortalListCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->