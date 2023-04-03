<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest req = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest() {{
                dollarXgafv = "2";
                checkUpgradeRequest = new CheckUpgradeRequest() {{
                    imageVersion = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                environment = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req, new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->