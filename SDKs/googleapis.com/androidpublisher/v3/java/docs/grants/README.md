# grants

### Available Operations

* [androidpublisherGrantsCreate](#androidpublishergrantscreate) - Grant access for a user to the given package.

## androidpublisherGrantsCreate

Grant access for a user to the given package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherGrantsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherGrantsCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherGrantsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Grant;
import org.openapis.openapi.models.shared.GrantAppLevelPermissionsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherGrantsCreateRequest req = new AndroidpublisherGrantsCreateRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                grant = new Grant() {{
                    appLevelPermissions = new org.openapis.openapi.models.shared.GrantAppLevelPermissionsEnum[]{{
                        add(GrantAppLevelPermissionsEnum.APP_LEVEL_PERMISSION_UNSPECIFIED),
                    }};
                    name = "Miss Dominick Rogahn";
                    packageName = "occaecati";
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "fuga";
                key = "accusamus";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "omnis";
                uploadProtocol = "delectus";
            }};            

            AndroidpublisherGrantsCreateResponse res = sdk.grants.androidpublisherGrantsCreate(req, new AndroidpublisherGrantsCreateSecurity("minima", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.grant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
