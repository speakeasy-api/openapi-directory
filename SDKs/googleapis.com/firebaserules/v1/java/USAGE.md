<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreatePathParams;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateQueryParams;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateResponse;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesCreateRequest req = new FirebaserulesProjectsReleasesCreateRequest() {{
                security = new FirebaserulesProjectsReleasesCreateSecurity() {{
                    option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebaserulesProjectsReleasesCreatePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new FirebaserulesProjectsReleasesCreateQueryParams() {{
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
                request = new ReleaseInput() {{
                    name = "suscipit";
                    rulesetName = "iure";
                }};
            }};            

            FirebaserulesProjectsReleasesCreateResponse res = sdk.projects.firebaserulesProjectsReleasesCreate(req);

            if (res.release.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->