<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveSecurity;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproveApprovalRequestMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsApproveRequest req = new AccessapprovalProjectsApprovalRequestsApproveRequest() {{
                dollarXgafv = "2";
                approveApprovalRequestMessage = new ApproveApprovalRequestMessage() {{
                    expireTime = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                name = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            AccessapprovalProjectsApprovalRequestsApproveResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req, new AccessapprovalProjectsApprovalRequestsApproveSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->