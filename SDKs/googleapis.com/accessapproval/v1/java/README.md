# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `accessapprovalProjectsApprovalRequestsApprove` - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `accessapprovalProjectsApprovalRequestsDismiss` - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `accessapprovalProjectsApprovalRequestsGet` - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* `accessapprovalProjectsApprovalRequestsInvalidate` - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* `accessapprovalProjectsApprovalRequestsList` - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* `accessapprovalProjectsDeleteAccessApprovalSettings` - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* `accessapprovalProjectsUpdateAccessApprovalSettings` - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
