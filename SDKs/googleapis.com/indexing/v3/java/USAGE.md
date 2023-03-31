<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataSecurity;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataQueryParams;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataRequest;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndexingUrlNotificationsGetMetadataRequest req = new IndexingUrlNotificationsGetMetadataRequest() {{
                security = new IndexingUrlNotificationsGetMetadataSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IndexingUrlNotificationsGetMetadataQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
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
            }};            

            IndexingUrlNotificationsGetMetadataResponse res = sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req);

            if (res.urlNotificationMetadata.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->