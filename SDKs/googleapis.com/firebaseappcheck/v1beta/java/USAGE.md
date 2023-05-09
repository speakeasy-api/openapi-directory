<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                names = new String[]{{
                    add("vel"),
                    add("error"),
                    add("deserunt"),
                    add("suscipit"),
                }};
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "debitis";
                uploadProtocol = "ipsa";
            }};            

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req, new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1("delectus", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->