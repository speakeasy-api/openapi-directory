# permissions

### Available Operations

* [androidenterprisePermissionsGet](#androidenterprisepermissionsget) - Retrieves details of an Android app permission for display to an enterprise admin.

## androidenterprisePermissionsGet

Retrieves details of an Android app permission for display to an enterprise admin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterprisePermissionsGetRequest;
import org.openapis.openapi.models.operations.AndroidenterprisePermissionsGetResponse;
import org.openapis.openapi.models.operations.AndroidenterprisePermissionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterprisePermissionsGetRequest req = new AndroidenterprisePermissionsGetRequest("unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "voluptates";
                key = "perferendis";
                language = "est";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "facere";
                uploadProtocol = "fuga";
            }};            

            AndroidenterprisePermissionsGetResponse res = sdk.permissions.androidenterprisePermissionsGet(req, new AndroidenterprisePermissionsGetSecurity("praesentium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
