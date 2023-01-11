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

            YoutubeAnalyticsGroupItemsDeleteRequest req = new YoutubeAnalyticsGroupItemsDeleteRequest() {{
                security = new YoutubeAnalyticsGroupItemsDeleteSecurity() {{
                    option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new YoutubeAnalyticsGroupItemsDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    id = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    onBehalfOfContentOwner = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
            }};

            YoutubeAnalyticsGroupItemsDeleteResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req);

            if (res.emptyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->