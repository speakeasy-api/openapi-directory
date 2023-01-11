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
                    name = "temporibus";
                }};
                queryParams = new AccessapprovalProjectsApprovalRequestsApproveQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "atque";
                    fields = "soluta";
                    key = "tempora";
                    oauthToken = "qui";
                    prettyPrint = false;
                    quotaUser = "quas";
                    uploadType = "facere";
                    uploadProtocol = "eveniet";
                }};
                request = new ApproveApprovalRequestMessage() {{
                    expireTime = "dolores";
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