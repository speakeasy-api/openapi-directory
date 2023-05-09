<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingRequest;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsGetNotificationSettingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessnotificationsAccountsGetNotificationSettingRequest req = new MybusinessnotificationsAccountsGetNotificationSettingRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            MybusinessnotificationsAccountsGetNotificationSettingResponse res = sdk.accounts.mybusinessnotificationsAccountsGetNotificationSetting(req);

            if (res.notificationSetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->