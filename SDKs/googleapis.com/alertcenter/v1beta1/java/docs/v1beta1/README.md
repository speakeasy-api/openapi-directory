# v1beta1

### Available Operations

* [alertcenterGetSettings](#alertcentergetsettings) - Returns customer-level settings.
* [alertcenterUpdateSettings](#alertcenterupdatesettings) - Updates the customer-level settings.

## alertcenterGetSettings

Returns customer-level settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterGetSettingsRequest;
import org.openapis.openapi.models.operations.AlertcenterGetSettingsResponse;
import org.openapis.openapi.models.operations.AlertcenterGetSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterGetSettingsRequest req = new AlertcenterGetSettingsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                customerId = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            AlertcenterGetSettingsResponse res = sdk.v1beta1.alertcenterGetSettings(req, new AlertcenterGetSettingsSecurity("quasi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterUpdateSettings

Updates the customer-level settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterUpdateSettingsRequest;
import org.openapis.openapi.models.operations.AlertcenterUpdateSettingsResponse;
import org.openapis.openapi.models.operations.AlertcenterUpdateSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudPubsubTopic;
import org.openapis.openapi.models.shared.CloudPubsubTopicPayloadFormatEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterUpdateSettingsRequest req = new AlertcenterUpdateSettingsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                settings = new Settings() {{
                    notifications = new org.openapis.openapi.models.shared.Notification[]{{
                        add(new Notification() {{
                            cloudPubsubTopic = new CloudPubsubTopic() {{
                                payloadFormat = CloudPubsubTopicPayloadFormatEnum.JSON;
                                topicName = "incidunt";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                customerId = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "labore";
                uploadProtocol = "modi";
            }};            

            AlertcenterUpdateSettingsResponse res = sdk.v1beta1.alertcenterUpdateSettings(req, new AlertcenterUpdateSettingsSecurity("qui", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
