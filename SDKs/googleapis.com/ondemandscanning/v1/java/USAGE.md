<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelPathParams;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsCancelRequest req = new OndemandscanningProjectsLocationsOperationsCancelRequest() {{
                security = new OndemandscanningProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OndemandscanningProjectsLocationsOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new OndemandscanningProjectsLocationsOperationsCancelQueryParams() {{
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
            }};            

            OndemandscanningProjectsLocationsOperationsCancelResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->