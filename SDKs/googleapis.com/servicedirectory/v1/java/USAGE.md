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

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest() {{
                security = new ServicedirectoryProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicedirectoryProjectsLocationsListPathParams() {{
                    name = "sequi";
                }};
                queryParams = new ServicedirectoryProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "nemo";
                    alt = "json";
                    callback = "deserunt";
                    fields = "mollitia";
                    filter = "ipsam";
                    key = "dolor";
                    oauthToken = "rerum";
                    pageSize = 4212342544433894223;
                    pageToken = "minus";
                    prettyPrint = false;
                    quotaUser = "beatae";
                    uploadType = "dignissimos";
                    uploadProtocol = "cupiditate";
                }};
            }};

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->