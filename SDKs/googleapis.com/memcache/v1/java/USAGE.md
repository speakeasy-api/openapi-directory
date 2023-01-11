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

            MemcacheProjectsLocationsInstancesApplyParametersRequest req = new MemcacheProjectsLocationsInstancesApplyParametersRequest() {{
                security = new MemcacheProjectsLocationsInstancesApplyParametersSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MemcacheProjectsLocationsInstancesApplyParametersPathParams() {{
                    name = "consequuntur";
                }};
                queryParams = new MemcacheProjectsLocationsInstancesApplyParametersQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "et";
                    alt = "proto";
                    callback = "fugiat";
                    fields = "adipisci";
                    key = "quis";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "eum";
                    uploadType = "ut";
                    uploadProtocol = "facilis";
                }};
                request = new ApplyParametersRequest() {{
                    applyAll = true;
                    nodeIds = new String[]() {{
                        add("dolor"),
                        add("ratione"),
                        add("est"),
                    }};
                }};
            }};

            MemcacheProjectsLocationsInstancesApplyParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->