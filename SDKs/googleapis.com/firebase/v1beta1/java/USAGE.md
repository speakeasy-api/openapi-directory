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
                    accessToken = "repudiandae";
                    alt = "media";
                    callback = "deserunt";
                    fields = "velit";
                    key = "ullam";
                    oauthToken = "officia";
                    pageSize = 75330080133732026;
                    pageToken = "est";
                    prettyPrint = false;
                    quotaUser = "et";
                    uploadType = "ea";
                    uploadProtocol = "illum";
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