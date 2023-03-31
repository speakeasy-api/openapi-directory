<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListPathParams;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
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