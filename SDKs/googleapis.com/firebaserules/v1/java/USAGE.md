<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesCreateRequest req = new FirebaserulesProjectsReleasesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                releaseInput = new ReleaseInput() {{
                    name = "Ellis Mitchell";
                    rulesetName = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            FirebaserulesProjectsReleasesCreateResponse res = sdk.projects.firebaserulesProjectsReleasesCreate(req, new FirebaserulesProjectsReleasesCreateSecurity() {{
                option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1("tempora", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->