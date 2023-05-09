<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest req = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                checkUpgradeRequest = new CheckUpgradeRequest() {{
                    imageVersion = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req, new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->