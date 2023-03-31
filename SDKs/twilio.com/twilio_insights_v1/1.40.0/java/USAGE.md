<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchAccountSettingsSecurity;
import org.openapis.openapi.models.operations.FetchAccountSettingsQueryParams;
import org.openapis.openapi.models.operations.FetchAccountSettingsRequest;
import org.openapis.openapi.models.operations.FetchAccountSettingsResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSettingsRequest req = new FetchAccountSettingsRequest() {{
                security = new FetchAccountSettingsSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new FetchAccountSettingsQueryParams() {{
                    subaccountSid = "corrupti";
                }};
            }};            

            FetchAccountSettingsResponse res = sdk.fetchAccountSettings(req);

            if (res.insightsV1AccountSettings.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->