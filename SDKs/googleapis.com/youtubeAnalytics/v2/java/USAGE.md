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
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupItemsDeleteRequest req = new YoutubeAnalyticsGroupItemsDeleteRequest() {{
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
            }}            

            YoutubeAnalyticsGroupItemsDeleteResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req, new YoutubeAnalyticsGroupItemsDeleteSecurity() {{
                option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.emptyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->