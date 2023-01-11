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

            OsconfigProjectsLocationsInstancesInventoriesListRequest req = new OsconfigProjectsLocationsInstancesInventoriesListRequest() {{
                security = new OsconfigProjectsLocationsInstancesInventoriesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsLocationsInstancesInventoriesListPathParams() {{
                    parent = "veritatis";
                }};
                queryParams = new OsconfigProjectsLocationsInstancesInventoriesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ad";
                    alt = "media";
                    callback = "laboriosam";
                    fields = "velit";
                    filter = "ea";
                    key = "quidem";
                    oauthToken = "voluptatem";
                    pageSize = 7270269003882431402;
                    pageToken = "voluptatem";
                    prettyPrint = true;
                    quotaUser = "tenetur";
                    uploadType = "aspernatur";
                    uploadProtocol = "officiis";
                    view = "FULL";
                }};
            }};

            OsconfigProjectsLocationsInstancesInventoriesListResponse res = sdk.projects.osconfigProjectsLocationsInstancesInventoriesList(req);

            if (res.listInventoriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->