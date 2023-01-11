<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new CloudprofilerProjectsProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new CreateProfileRequest() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("debitis", "voluptatum");
                            put("et", "ut");
                            put("dolorem", "et");
                        }};
                        projectId = "voluptate";
                        target = "iste";
                    }};
                    profileType = new openapisdk.models.shared.CreateProfileRequestProfileTypeEnum[]() {{
                        add("WALL"),
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