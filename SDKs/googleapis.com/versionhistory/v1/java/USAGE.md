<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListPathParams;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListQueryParams;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsChannelsListRequest req = new VersionhistoryPlatformsChannelsListRequest() {{
                pathParams = new VersionhistoryPlatformsChannelsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new VersionhistoryPlatformsChannelsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            VersionhistoryPlatformsChannelsListResponse res = sdk.platforms.versionhistoryPlatformsChannelsList(req);

            if (res.listChannelsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->