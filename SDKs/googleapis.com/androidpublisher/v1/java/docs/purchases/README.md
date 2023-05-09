# purchases

### Available Operations

* [androidpublisherPurchasesCancel](#androidpublisherpurchasescancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesGet](#androidpublisherpurchasesget) - Checks whether a user's subscription purchase is valid and returns its expiry time.

## androidpublisherPurchasesCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesCancelRequest req = new AndroidpublisherPurchasesCancelRequest("deserunt", "suscipit", "iure") {{
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "tempora";
            }};            

            AndroidpublisherPurchasesCancelResponse res = sdk.purchases.androidpublisherPurchasesCancel(req, new AndroidpublisherPurchasesCancelSecurity("suscipit", "molestiae") {{
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

## androidpublisherPurchasesGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesGetRequest req = new AndroidpublisherPurchasesGetRequest("minus", "placeat", "voluptatum") {{
                alt = AltEnum.JSON;
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                userIp = "temporibus";
            }};            

            AndroidpublisherPurchasesGetResponse res = sdk.purchases.androidpublisherPurchasesGet(req, new AndroidpublisherPurchasesGetSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
