<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesCreateRequest req = new FirebaserulesProjectsReleasesCreateRequest() {{
                dollarXgafv = "2";
                releaseInput = new ReleaseInput() {{
                    name = "provident";
                    rulesetName = "distinctio";
                }};
                accessToken = "quibusdam";
                alt = "media";
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                name = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }}            

            FirebaserulesProjectsReleasesCreateResponse res = sdk.projects.firebaserulesProjectsReleasesCreate(req, new FirebaserulesProjectsReleasesCreateSecurity() {{
                option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.release.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->