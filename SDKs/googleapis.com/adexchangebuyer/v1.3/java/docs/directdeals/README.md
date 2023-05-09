# directDeals

### Available Operations

* [adexchangebuyerDirectDealsGet](#adexchangebuyerdirectdealsget) - Gets one direct deal by ID.
* [adexchangebuyerDirectDealsList](#adexchangebuyerdirectdealslist) - Retrieves the authenticated user's list of direct deals.

## adexchangebuyerDirectDealsGet

Gets one direct deal by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerDirectDealsGetRequest req = new AdexchangebuyerDirectDealsGetRequest("quidem") {{
                alt = AltEnum.JSON;
                fields = "ipsam";
                key = "voluptate";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "eaque";
            }};            

            AdexchangebuyerDirectDealsGetResponse res = sdk.directDeals.adexchangebuyerDirectDealsGet(req, new AdexchangebuyerDirectDealsGetSecurity("pariatur", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directDeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerDirectDealsList

Retrieves the authenticated user's list of direct deals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerDirectDealsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerDirectDealsListRequest req = new AdexchangebuyerDirectDealsListRequest() {{
                alt = AltEnum.JSON;
                fields = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                userIp = "aut";
            }};            

            AdexchangebuyerDirectDealsListResponse res = sdk.directDeals.adexchangebuyerDirectDealsList(req, new AdexchangebuyerDirectDealsListSecurity("cumque", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directDealsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
