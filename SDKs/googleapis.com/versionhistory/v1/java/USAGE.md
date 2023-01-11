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
                    parent = "sed";
                }};
                queryParams = new VersionhistoryPlatformsChannelsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "minima";
                    alt = "json";
                    callback = "ut";
                    fields = "neque";
                    key = "id";
                    oauthToken = "accusantium";
                    pageSize = 6614320624716883971;
                    pageToken = "dolores";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "similique";
                    uploadProtocol = "rerum";
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