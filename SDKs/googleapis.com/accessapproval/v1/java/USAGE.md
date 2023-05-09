<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproveApprovalRequestMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsApproveRequest req = new AccessapprovalProjectsApprovalRequestsApproveRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                approveApprovalRequestMessage = new ApproveApprovalRequestMessage() {{
                    expireTime = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            AccessapprovalProjectsApprovalRequestsApproveResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req, new AccessapprovalProjectsApprovalRequestsApproveSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->