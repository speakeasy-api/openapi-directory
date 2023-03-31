<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.DatabaseInstanceTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest() {{
                security = new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                    option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasedatabaseProjectsLocationsInstancesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FirebasedatabaseProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    databaseId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                    validateOnly = false;
                }};
                request = new DatabaseInstanceInput() {{
                    name = "iure";
                    type = "DATABASE_INSTANCE_TYPE_UNSPECIFIED";
                }};
            }};            

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req);

            if (res.databaseInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->