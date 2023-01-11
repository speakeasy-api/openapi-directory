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

            LifesciencesProjectsLocationsListRequest req = new LifesciencesProjectsLocationsListRequest() {{
                security = new LifesciencesProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new LifesciencesProjectsLocationsListPathParams() {{
                    name = "eum";
                }};
                queryParams = new LifesciencesProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quae";
                    alt = "json";
                    callback = "ipsam";
                    fields = "veniam";
                    filter = "magni";
                    key = "a";
                    oauthToken = "aut";
                    pageSize = 6500594473841084945;
                    pageToken = "illum";
                    prettyPrint = false;
                    quotaUser = "quidem";
                    uploadType = "ad";
                    uploadProtocol = "aliquam";
                }};
            }};

            LifesciencesProjectsLocationsListResponse res = sdk.projects.lifesciencesProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->