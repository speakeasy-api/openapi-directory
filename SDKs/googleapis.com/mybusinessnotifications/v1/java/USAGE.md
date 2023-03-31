<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingPathParams;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingRequest;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessnotificationsAccountsGetNotificationSettingRequest req = new MybusinessnotificationsAccountsGetNotificationSettingRequest() {{
                pathParams = new MybusinessnotificationsAccountsGetNotificationSettingPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new MybusinessnotificationsAccountsGetNotificationSettingQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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