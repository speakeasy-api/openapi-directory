# urlNotifications

### Available Operations

* [indexingUrlNotificationsGetMetadata](#indexingurlnotificationsgetmetadata) - Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
* [indexingUrlNotificationsPublish](#indexingurlnotificationspublish) - Notifies that a URL has been updated or deleted.

## indexingUrlNotificationsGetMetadata

Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataRequest;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataResponse;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndexingUrlNotificationsGetMetadataRequest req = new IndexingUrlNotificationsGetMetadataRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
                url = "iusto";
            }};            

            IndexingUrlNotificationsGetMetadataResponse res = sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req, new IndexingUrlNotificationsGetMetadataSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlNotificationMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## indexingUrlNotificationsPublish

Notifies that a URL has been updated or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsPublishRequest;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsPublishResponse;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsPublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlNotification;
import org.openapis.openapi.models.shared.UrlNotificationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndexingUrlNotificationsPublishRequest req = new IndexingUrlNotificationsPublishRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                urlNotification = new UrlNotification() {{
                    notifyTime = "temporibus";
                    type = UrlNotificationTypeEnum.URL_NOTIFICATION_TYPE_UNSPECIFIED;
                    url = "quis";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            IndexingUrlNotificationsPublishResponse res = sdk.urlNotifications.indexingUrlNotificationsPublish(req, new IndexingUrlNotificationsPublishSecurity("at", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.publishUrlNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
