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

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest() {{
                security = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "consectetur";
                    alt = "json";
                    callback = "impedit";
                    fields = "modi";
                    key = "doloribus";
                    oauthToken = "dolorem";
                    pageSize = 7227314679524352432;
                    pageToken = "vel";
                    prettyPrint = true;
                    quotaUser = "architecto";
                    uploadType = "est";
                    uploadProtocol = "consectetur";
                }};
            }};

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesList(req);

            if (res.listAuctionPackagesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->