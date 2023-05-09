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

            DfareportingMobileCarriersGetRequest req = new DfareportingMobileCarriersGetRequest("placeat", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "modi";
                key = "doloremque";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "illo";
                uploadProtocol = "nulla";
            }};            

            DfareportingMobileCarriersGetResponse res = sdk.mobileCarriers.dfareportingMobileCarriersGet(req, new DfareportingMobileCarriersGetSecurity("inventore", "in") {{
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

            DfareportingMobileCarriersListRequest req = new DfareportingMobileCarriersListRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "tempore";
                key = "debitis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "saepe";
                uploadProtocol = "non";
            }};            

            DfareportingMobileCarriersListResponse res = sdk.mobileCarriers.dfareportingMobileCarriersList(req, new DfareportingMobileCarriersListSecurity("hic", "esse") {{
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
