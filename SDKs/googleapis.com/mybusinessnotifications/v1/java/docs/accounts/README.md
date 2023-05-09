# accounts

### Available Operations

* [mybusinessnotificationsAccountsGetNotificationSetting](#mybusinessnotificationsaccountsgetnotificationsetting) - Returns the pubsub notification settings for the account.
* [mybusinessnotificationsAccountsUpdateNotificationSetting](#mybusinessnotificationsaccountsupdatenotificationsetting) - Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

## mybusinessnotificationsAccountsGetNotificationSetting

Returns the pubsub notification settings for the account.

### Example Usage

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

            MybusinessnotificationsAccountsGetNotificationSettingRequest req = new MybusinessnotificationsAccountsGetNotificationSettingRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
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

## mybusinessnotificationsAccountsUpdateNotificationSetting

Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsUpdateNotificationSettingRequest;
import org.openapis.openapi.models.operations.MybusinessnotificationsAccountsUpdateNotificationSettingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NotificationSetting;
import org.openapis.openapi.models.shared.NotificationSettingNotificationTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessnotificationsAccountsUpdateNotificationSettingRequest req = new MybusinessnotificationsAccountsUpdateNotificationSettingRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                notificationSetting = new NotificationSetting() {{
                    name = "Charlie Walsh II";
                    notificationTypes = new org.openapis.openapi.models.shared.NotificationSettingNotificationTypesEnum[]{{
                        add(NotificationSettingNotificationTypesEnum.NEW_ANSWER),
                    }};
                    pubsubTopic = "perferendis";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                updateMask = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            MybusinessnotificationsAccountsUpdateNotificationSettingResponse res = sdk.accounts.mybusinessnotificationsAccountsUpdateNotificationSetting(req);

            if (res.notificationSetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
