<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListSecurity;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListQueryParams;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListRequest;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementDefinitionsListRequest req = new GamesAchievementDefinitionsListRequest() {{
                security = new GamesAchievementDefinitionsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GamesAchievementDefinitionsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    language = "corrupti";
                    maxResults = 847252;
                    oauthToken = "vel";
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            GamesAchievementDefinitionsListResponse res = sdk.achievementDefinitions.gamesAchievementDefinitionsList(req);

            if (res.achievementDefinitionsListResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->