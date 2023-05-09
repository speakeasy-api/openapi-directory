# billingInfo

### Available Operations

* [adexchangebuyerBillingInfoGet](#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [adexchangebuyerBillingInfoList](#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

## adexchangebuyerBillingInfoGet

Returns the billing information for one account specified by account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerBillingInfoGetRequest req = new AdexchangebuyerBillingInfoGetRequest(222321L) {{
                alt = AltEnum.JSON;
                fields = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                userIp = "fuga";
            }};            

            AdexchangebuyerBillingInfoGetResponse res = sdk.billingInfo.adexchangebuyerBillingInfoGet(req, new AdexchangebuyerBillingInfoGetSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerBillingInfoList

Retrieves a list of billing information for all accounts of the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerBillingInfoListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerBillingInfoListRequest req = new AdexchangebuyerBillingInfoListRequest() {{
                alt = AltEnum.JSON;
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                userIp = "architecto";
            }};            

            AdexchangebuyerBillingInfoListResponse res = sdk.billingInfo.adexchangebuyerBillingInfoList(req, new AdexchangebuyerBillingInfoListSecurity("ipsa", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingInfoList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
