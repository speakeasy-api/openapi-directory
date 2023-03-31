<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption4;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurity;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListQueryParams;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListRequest;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseAvailableProjectsListRequest req = new FirebaseAvailableProjectsListRequest() {{
                security = new FirebaseAvailableProjectsListSecurity() {{
                    option1 = new FirebaseAvailableProjectsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new FirebaseAvailableProjectsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    pageSize = 847252;
                    pageToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
            }};            

            FirebaseAvailableProjectsListResponse res = sdk.availableProjects.firebaseAvailableProjectsList(req);

            if (res.listAvailableProjectsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->