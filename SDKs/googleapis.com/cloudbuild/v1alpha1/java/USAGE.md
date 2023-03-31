<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelPathParams;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsLocationsOperationsCancelRequest req = new CloudbuildProjectsLocationsOperationsCancelRequest() {{
                security = new CloudbuildProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudbuildProjectsLocationsOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudbuildProjectsLocationsOperationsCancelQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            CloudbuildProjectsLocationsOperationsCancelResponse res = sdk.projects.cloudbuildProjectsLocationsOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->