<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccountSettingsRequest;
import org.openapis.openapi.models.operations.FetchAccountSettingsResponse;
import org.openapis.openapi.models.operations.FetchAccountSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSettingsRequest req = new FetchAccountSettingsRequest() {{
                subaccountSid = "corrupti";
            }};            

            FetchAccountSettingsResponse res = sdk.fetchAccountSettings(req, new FetchAccountSettingsSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1AccountSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->