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

            WorkflowsProjectsLocationsListRequest req = new WorkflowsProjectsLocationsListRequest() {{
                security = new WorkflowsProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WorkflowsProjectsLocationsListPathParams() {{
                    name = "voluptatem";
                }};
                queryParams = new WorkflowsProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "iste";
                    alt = "proto";
                    callback = "molestiae";
                    fields = "ut";
                    filter = "doloribus";
                    key = "qui";
                    oauthToken = "provident";
                    pageSize = 7944308512629544529;
                    pageToken = "ducimus";
                    prettyPrint = false;
                    quotaUser = "minus";
                    uploadType = "dolores";
                    uploadProtocol = "vel";
                }};
            }};

            WorkflowsProjectsLocationsListResponse res = sdk.projects.workflowsProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->