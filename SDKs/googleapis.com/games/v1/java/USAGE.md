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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    language = "expedita";
                    maxResults = 6044372234677422456;
                    oauthToken = "fugit";
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
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