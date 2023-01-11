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
                    dollarXgafv = "1";
                    accessToken = "id";
                    alt = "proto";
                    callback = "vel";
                    fields = "ad";
                    key = "vitae";
                    oauthToken = "illum";
                    prettyPrint = true;
                    quotaUser = "itaque";
                    uploadType = "minus";
                    uploadProtocol = "temporibus";
                    url = "sit";
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