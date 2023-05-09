# managedconfigurationssettings

### Available Operations

* [androidenterpriseManagedconfigurationssettingsList](#androidenterprisemanagedconfigurationssettingslist) - Lists all the managed configurations settings for the specified app.

## androidenterpriseManagedconfigurationssettingsList

Lists all the managed configurations settings for the specified app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationssettingsListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationssettingsListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationssettingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationssettingsListRequest req = new AndroidenterpriseManagedconfigurationssettingsListRequest("dicta", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "laborum";
                key = "nam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "alias";
                uploadProtocol = "amet";
            }};            

            AndroidenterpriseManagedconfigurationssettingsListResponse res = sdk.managedconfigurationssettings.androidenterpriseManagedconfigurationssettingsList(req, new AndroidenterpriseManagedconfigurationssettingsListSecurity("deserunt", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfigurationsSettingsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
