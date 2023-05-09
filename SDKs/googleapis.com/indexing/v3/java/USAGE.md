<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "vel";
                uploadProtocol = "error";
                url = "deserunt";
            }};            

            IndexingUrlNotificationsGetMetadataResponse res = sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req, new IndexingUrlNotificationsGetMetadataSecurity("suscipit", "iure") {{
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
<!-- End SDK Example Usage -->