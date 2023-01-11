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

            MybusinessnotificationsAccountsGetNotificationSettingRequest req = new MybusinessnotificationsAccountsGetNotificationSettingRequest() {{
                pathParams = new MybusinessnotificationsAccountsGetNotificationSettingPathParams() {{
                    name = "sit";
                }};
                queryParams = new MybusinessnotificationsAccountsGetNotificationSettingQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
            }};

            MybusinessnotificationsAccountsGetNotificationSettingResponse res = sdk.accounts.mybusinessnotificationsAccountsGetNotificationSetting(req);

            if (res.notificationSetting.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->