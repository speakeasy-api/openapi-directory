<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearResponse;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksV3AppIdSettingsClearRequest req = new DeleteWebhooksV3AppIdSettingsClearRequest(548814);            

            DeleteWebhooksV3AppIdSettingsClearResponse res = sdk.settings.deleteWebhooksV3AppIdSettingsClear(req, new DeleteWebhooksV3AppIdSettingsClearSecurity("provident") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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
<!-- End SDK Example Usage -->