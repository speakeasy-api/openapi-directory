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

            CloudtasksProjectsLocationsListRequest req = new CloudtasksProjectsLocationsListRequest() {{
                security = new CloudtasksProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudtasksProjectsLocationsListPathParams() {{
                    name = "ut";
                }};
                queryParams = new CloudtasksProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "qui";
                    alt = "media";
                    callback = "in";
                    fields = "voluptas";
                    filter = "dolorem";
                    key = "placeat";
                    oauthToken = "aut";
                    pageSize = 4733740892419454748;
                    pageToken = "saepe";
                    prettyPrint = true;
                    quotaUser = "cum";
                    uploadType = "non";
                    uploadProtocol = "atque";
                }};
            }};

            CloudtasksProjectsLocationsListResponse res = sdk.projects.cloudtasksProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->