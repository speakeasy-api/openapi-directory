<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest() {{
                security = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity() {{
                    option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
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
            }};            

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req);

            if (res.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->