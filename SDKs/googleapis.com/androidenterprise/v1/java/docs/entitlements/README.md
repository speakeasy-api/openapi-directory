# entitlements

### Available Operations

* [androidenterpriseEntitlementsDelete](#androidenterpriseentitlementsdelete) - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsGet](#androidenterpriseentitlementsget) - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsList](#androidenterpriseentitlementslist) - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsUpdate](#androidenterpriseentitlementsupdate) - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseEntitlementsDelete

Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEntitlementsDeleteRequest req = new AndroidenterpriseEntitlementsDeleteRequest("explicabo", "minima", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "explicabo";
                key = "saepe";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "et";
                uploadProtocol = "esse";
            }};            

            AndroidenterpriseEntitlementsDeleteResponse res = sdk.entitlements.androidenterpriseEntitlementsDelete(req, new AndroidenterpriseEntitlementsDeleteSecurity("eveniet", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEntitlementsGet

Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEntitlementsGetRequest req = new AndroidenterpriseEntitlementsGetRequest("veritatis", "esse", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "saepe";
                key = "vel";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "rerum";
                uploadProtocol = "occaecati";
            }};            

            AndroidenterpriseEntitlementsGetResponse res = sdk.entitlements.androidenterpriseEntitlementsGet(req, new AndroidenterpriseEntitlementsGetSecurity("minima", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entitlement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEntitlementsList

Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEntitlementsListRequest req = new AndroidenterpriseEntitlementsListRequest("eligendi", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "consequuntur";
                key = "consequatur";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "sapiente";
                uploadProtocol = "consectetur";
            }};            

            AndroidenterpriseEntitlementsListResponse res = sdk.entitlements.androidenterpriseEntitlementsList(req, new AndroidenterpriseEntitlementsListSecurity("esse", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entitlementsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEntitlementsUpdate

Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEntitlementsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Entitlement;
import org.openapis.openapi.models.shared.EntitlementReasonEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEntitlementsUpdateRequest req = new AndroidenterpriseEntitlementsUpdateRequest("provident", "a", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                entitlement = new Entitlement() {{
                    productId = "esse";
                    reason = EntitlementReasonEnum.FREE;
                }};;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "pariatur";
                install = false;
                key = "possimus";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "asperiores";
                uploadProtocol = "facere";
            }};            

            AndroidenterpriseEntitlementsUpdateResponse res = sdk.entitlements.androidenterpriseEntitlementsUpdate(req, new AndroidenterpriseEntitlementsUpdateSecurity("veritatis", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entitlement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
