<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveSecurity;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApprovePathParams;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveQueryParams;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveResponse;
import org.openapis.openapi.models.shared.ApproveApprovalRequestMessage;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsApproveRequest req = new AccessapprovalProjectsApprovalRequestsApproveRequest() {{
                security = new AccessapprovalProjectsApprovalRequestsApproveSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AccessapprovalProjectsApprovalRequestsApprovePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new AccessapprovalProjectsApprovalRequestsApproveQueryParams() {{
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
                request = new ApproveApprovalRequestMessage() {{
                    expireTime = "suscipit";
                }};
            }};            

            AccessapprovalProjectsApprovalRequestsApproveResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req);

            if (res.approvalRequest.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->