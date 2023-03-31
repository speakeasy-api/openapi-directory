<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption5;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteQueryParams;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    id = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    onBehalfOfContentOwner = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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