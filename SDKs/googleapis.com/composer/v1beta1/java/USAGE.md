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

            ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest req = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest() {{
                security = new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams() {{
                    environment = "sit";
                }};
                queryParams = new ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new CheckUpgradeRequest() {{
                    imageVersion = "dicta";
                }};
            }};

            ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->