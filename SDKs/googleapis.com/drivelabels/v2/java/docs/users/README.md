# users

### Available Operations

* [drivelabelsUsersGetCapabilities](#drivelabelsusersgetcapabilities) - Gets the user capabilities.

## drivelabelsUsersGetCapabilities

Gets the user capabilities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsUsersGetCapabilitiesRequest;
import org.openapis.openapi.models.operations.DrivelabelsUsersGetCapabilitiesResponse;
import org.openapis.openapi.models.operations.DrivelabelsUsersGetCapabilitiesViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsUsersGetCapabilitiesRequest req = new DrivelabelsUsersGetCapabilitiesRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "velit";
                customer = "reiciendis";
                fields = "repellat";
                key = "nulla";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "accusamus";
                uploadProtocol = "doloremque";
                useAdminAccess = false;
                view = DrivelabelsUsersGetCapabilitiesViewEnum.LABEL_VIEW_BASIC;
            }};            

            DrivelabelsUsersGetCapabilitiesResponse res = sdk.users.drivelabelsUsersGetCapabilities(req);

            if (res.googleAppsDriveLabelsV2UserCapabilities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
