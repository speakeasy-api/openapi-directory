<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
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