<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesList(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAuctionPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->