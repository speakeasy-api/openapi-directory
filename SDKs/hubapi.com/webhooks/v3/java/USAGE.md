<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearSecurity;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearPathParams;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearResponse;
import org.openapis.openapi.models.shared.SchemeDeveloperHapikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksV3AppIdSettingsClearRequest req = new DeleteWebhooksV3AppIdSettingsClearRequest() {{
                security = new DeleteWebhooksV3AppIdSettingsClearSecurity() {{
                    developerHapikey = new SchemeDeveloperHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteWebhooksV3AppIdSettingsClearPathParams() {{
                    appId = 548814;
                }};
            }};            

            DeleteWebhooksV3AppIdSettingsClearResponse res = sdk.settings.deleteWebhooksV3AppIdSettingsClear(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->