<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersPathParams;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersResponse;
import org.openapis.openapi.models.shared.ApplyParametersRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new MemcacheProjectsLocationsInstancesApplyParametersQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new ApplyParametersRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("iure"),
                        add("magnam"),
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