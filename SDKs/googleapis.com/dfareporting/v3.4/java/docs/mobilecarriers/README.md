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

            DfareportingMobileCarriersGetRequest req = new DfareportingMobileCarriersGetRequest("aliquam", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "ipsam";
                key = "sed";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "iste";
                uploadProtocol = "ipsa";
            }};            

            DfareportingMobileCarriersGetResponse res = sdk.mobileCarriers.dfareportingMobileCarriersGet(req, new DfareportingMobileCarriersGetSecurity("velit", "ipsa") {{
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

            DfareportingMobileCarriersListRequest req = new DfareportingMobileCarriersListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "non";
                key = "laudantium";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "molestiae";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingMobileCarriersListResponse res = sdk.mobileCarriers.dfareportingMobileCarriersList(req, new DfareportingMobileCarriersListSecurity("hic", "hic") {{
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
