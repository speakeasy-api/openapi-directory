<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelPathParams;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsOperationsCancelRequest req = new WorkstationsProjectsLocationsOperationsCancelRequest() {{
                security = new WorkstationsProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WorkstationsProjectsLocationsOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new WorkstationsProjectsLocationsOperationsCancelQueryParams() {{
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

            WorkstationsProjectsLocationsOperationsCancelResponse res = sdk.projects.workstationsProjectsLocationsOperationsCancel(req);

            if (res.googleProtobufEmpty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->