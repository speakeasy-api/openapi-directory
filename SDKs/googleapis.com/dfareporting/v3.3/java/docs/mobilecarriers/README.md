# mobileCarriers

### Available Operations

* [dfareportingMobileCarriersGet](#dfareportingmobilecarriersget) - Gets one mobile carrier by ID.
* [dfareportingMobileCarriersList](#dfareportingmobilecarrierslist) - Retrieves a list of mobile carriers.

## dfareportingMobileCarriersGet

Gets one mobile carrier by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersGetRequest;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersGetResponse;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingMobileCarriersGetRequest req = new DfareportingMobileCarriersGetRequest("quidem", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "consequatur";
                key = "voluptates";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "incidunt";
                uploadProtocol = "id";
            }};            

            DfareportingMobileCarriersGetResponse res = sdk.mobileCarriers.dfareportingMobileCarriersGet(req, new DfareportingMobileCarriersGetSecurity("accusamus", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mobileCarrier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingMobileCarriersList

Retrieves a list of mobile carriers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersListRequest;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersListResponse;
import org.openapis.openapi.models.operations.DfareportingMobileCarriersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingMobileCarriersListRequest req = new DfareportingMobileCarriersListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "iusto";
                key = "explicabo";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "esse";
                uploadProtocol = "nobis";
            }};            

            DfareportingMobileCarriersListResponse res = sdk.mobileCarriers.dfareportingMobileCarriersList(req, new DfareportingMobileCarriersListSecurity("voluptatem", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mobileCarriersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
