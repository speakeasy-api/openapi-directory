<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                names = new String[]{{
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                oauthToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req, new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->