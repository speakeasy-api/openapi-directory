<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption3;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreatePathParams;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateQueryParams;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateResponse;
import org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum;
import org.openapis.openapi.models.shared.CreateProfileRequest;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesCreateRequest req = new CloudprofilerProjectsProfilesCreateRequest() {{
                security = new CloudprofilerProjectsProfilesCreateSecurity() {{
                    option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudprofilerProjectsProfilesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudprofilerProjectsProfilesCreateQueryParams() {{
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
                request = new CreateProfileRequest() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        projectId = "delectus";
                        target = "tempora";
                    }};
                    profileType = new org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum[]{{
                        add("HEAP"),
                        add("PEAK_HEAP"),
                    }};
                }};
            }};            

            CloudprofilerProjectsProfilesCreateResponse res = sdk.projects.cloudprofilerProjectsProfilesCreate(req);

            if (res.profile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->