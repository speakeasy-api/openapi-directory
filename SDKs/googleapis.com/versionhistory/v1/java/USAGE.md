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

            VersionhistoryPlatformsChannelsListRequest req = new VersionhistoryPlatformsChannelsListRequest() {{
                pathParams = new VersionhistoryPlatformsChannelsListPathParams() {{
                    parent = "sit";
                }};
                queryParams = new VersionhistoryPlatformsChannelsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    pageSize = 8274930044578894929;
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
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