# pubsubnotificationsettings

### Available Operations

* [contentPubsubnotificationsettingsGet](#contentpubsubnotificationsettingsget) - Retrieves a Merchant Center account's pubsub notification settings.
* [contentPubsubnotificationsettingsUpdate](#contentpubsubnotificationsettingsupdate) - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

## contentPubsubnotificationsettingsGet

Retrieves a Merchant Center account's pubsub notification settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsGetRequest;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsGetResponse;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPubsubnotificationsettingsGetRequest req = new ContentPubsubnotificationsettingsGetRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "iure";
                key = "temporibus";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "alias";
                uploadProtocol = "laudantium";
            }};            

            ContentPubsubnotificationsettingsGetResponse res = sdk.pubsubnotificationsettings.contentPubsubnotificationsettingsGet(req, new ContentPubsubnotificationsettingsGetSecurity("qui", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pubsubNotificationSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPubsubnotificationsettingsUpdate

Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsUpdateRequest;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsUpdateResponse;
import org.openapis.openapi.models.operations.ContentPubsubnotificationsettingsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PubsubNotificationSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPubsubnotificationsettingsUpdateRequest req = new ContentPubsubnotificationsettingsUpdateRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                pubsubNotificationSettings = new PubsubNotificationSettings() {{
                    cloudTopicName = "pariatur";
                    kind = "quod";
                    registeredEvents = new String[]{{
                        add("vitae"),
                        add("delectus"),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "magnam";
                key = "officiis";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "saepe";
                uploadProtocol = "labore";
            }};            

            ContentPubsubnotificationsettingsUpdateResponse res = sdk.pubsubnotificationsettings.contentPubsubnotificationsettingsUpdate(req, new ContentPubsubnotificationsettingsUpdateSecurity("doloribus", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pubsubNotificationSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
