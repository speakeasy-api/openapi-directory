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
                    name = "cupiditate";
                }};
                queryParams = new WorkflowsProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quidem";
                    alt = "media";
                    callback = "alias";
                    fields = "reprehenderit";
                    filter = "nihil";
                    key = "ut";
                    oauthToken = "earum";
                    pageSize = 7193478237928765255;
                    pageToken = "neque";
                    prettyPrint = false;
                    quotaUser = "ut";
                    uploadType = "dicta";
                    uploadProtocol = "modi";
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