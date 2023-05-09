<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateResponse;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateProfileRequest;
import org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesCreateRequest req = new CloudprofilerProjectsProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                createProfileRequest = new CreateProfileRequest() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        projectId = "error";
                        target = "deserunt";
                    }};;
                    profileType = new org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum[]{{
                        add(CreateProfileRequestProfileTypeEnum.HEAP),
                        add(CreateProfileRequestProfileTypeEnum.WALL),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
            }};            

            CloudprofilerProjectsProfilesCreateResponse res = sdk.projects.cloudprofilerProjectsProfilesCreate(req, new CloudprofilerProjectsProfilesCreateSecurity() {{
                option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1("iusto", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->