<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeleteWebhooksV3AppIdSettingsClearRequest req = new DeleteWebhooksV3AppIdSettingsClearRequest() {{
                security = new DeleteWebhooksV3AppIdSettingsClearSecurity() {{
                    developerHapikey = new SchemeDeveloperHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteWebhooksV3AppIdSettingsClearPathParams() {{
                    appId = 8717895732742165505;
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