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
                    name = "dolore";
                }};
                queryParams = new MemcacheProjectsLocationsInstancesApplyParametersQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptatum";
                    alt = "media";
                    callback = "dolore";
                    fields = "sed";
                    key = "accusantium";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "minus";
                    uploadType = "optio";
                    uploadProtocol = "et";
                }};
                request = new ApplyParametersRequest() {{
                    applyAll = true;
                    nodeIds = new String[]() {{
                        add("officiis"),
                        add("possimus"),
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