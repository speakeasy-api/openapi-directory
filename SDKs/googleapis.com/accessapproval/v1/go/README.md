# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/accessapproval/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AccessapprovalProjectsApprovalRequestsApproveRequest{
        DollarXgafv: "2",
        ApproveApprovalRequestMessage: &shared.ApproveApprovalRequestMessage{
            ExpireTime: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        Name: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsApprove(ctx, req, operations.AccessapprovalProjectsApprovalRequestsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `AccessapprovalProjectsApprovalRequestsApprove` - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `AccessapprovalProjectsApprovalRequestsDismiss` - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `AccessapprovalProjectsApprovalRequestsGet` - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* `AccessapprovalProjectsApprovalRequestsInvalidate` - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* `AccessapprovalProjectsApprovalRequestsList` - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* `AccessapprovalProjectsDeleteAccessApprovalSettings` - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* `AccessapprovalProjectsUpdateAccessApprovalSettings` - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
