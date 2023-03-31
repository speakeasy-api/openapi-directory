<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
import org.openapis.openapi.models.shared.CheckUpgradeRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    environment = "corrupti";
                }};
                queryParams = new ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new CheckUpgradeRequest() {{
                    imageVersion = "suscipit";
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