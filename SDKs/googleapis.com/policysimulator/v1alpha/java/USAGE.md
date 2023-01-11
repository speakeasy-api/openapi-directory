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

            PolicysimulatorProjectsLocationsReplaysOperationsListRequest req = new PolicysimulatorProjectsLocationsReplaysOperationsListRequest() {{
                security = new PolicysimulatorProjectsLocationsReplaysOperationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PolicysimulatorProjectsLocationsReplaysOperationsListPathParams() {{
                    name = "magni";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "maiores";
                    alt = "json";
                    callback = "qui";
                    fields = "voluptas";
                    filter = "sed";
                    key = "odit";
                    oauthToken = "qui";
                    pageSize = 6599702644733907777;
                    pageToken = "dolores";
                    prettyPrint = false;
                    quotaUser = "sapiente";
                    uploadType = "culpa";
                    uploadProtocol = "et";
                }};
            }};

            PolicysimulatorProjectsLocationsReplaysOperationsListResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysOperationsList(req);

            if (res.googleLongrunningListOperationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->