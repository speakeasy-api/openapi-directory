# accounts

### Available Operations

* [playcustomappAccountsCustomAppsCreate](#playcustomappaccountscustomappscreate) - Creates a new custom app.

## playcustomappAccountsCustomAppsCreate

Creates a new custom app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateRequest;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateResponse;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAppInput;
import org.openapis.openapi.models.shared.Organization;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaycustomappAccountsCustomAppsCreateRequest req = new PlaycustomappAccountsCustomAppsCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "delectus".getBytes();
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            PlaycustomappAccountsCustomAppsCreateResponse res = sdk.accounts.playcustomappAccountsCustomAppsCreate(req, new PlaycustomappAccountsCustomAppsCreateSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
