# inapppurchases

### Available Operations

* [androidpublisherInapppurchasesGet](#androidpublisherinapppurchasesget) - Checks the purchase and consumption status of an inapp item.

## androidpublisherInapppurchasesGet

Checks the purchase and consumption status of an inapp item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInapppurchasesGetRequest req = new AndroidpublisherInapppurchasesGetRequest("deserunt", "suscipit", "iure") {{
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "tempora";
            }};            

            AndroidpublisherInapppurchasesGetResponse res = sdk.inapppurchases.androidpublisherInapppurchasesGet(req, new AndroidpublisherInapppurchasesGetSecurity("suscipit", "molestiae") {{
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
