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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsApprove(ctx, operations.AccessapprovalProjectsApprovalRequestsApproveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApproveApprovalRequestMessage: &shared.ApproveApprovalRequestMessage{
            ExpireTime: sdk.String("provident"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: "Ben Mueller",
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.AccessapprovalProjectsApprovalRequestsApproveSecurity{
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


### [Projects](docs/projects/README.md)

* [AccessapprovalProjectsApprovalRequestsApprove](docs/projects/README.md#accessapprovalprojectsapprovalrequestsapprove) - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [AccessapprovalProjectsApprovalRequestsDismiss](docs/projects/README.md#accessapprovalprojectsapprovalrequestsdismiss) - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [AccessapprovalProjectsApprovalRequestsGet](docs/projects/README.md#accessapprovalprojectsapprovalrequestsget) - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* [AccessapprovalProjectsApprovalRequestsInvalidate](docs/projects/README.md#accessapprovalprojectsapprovalrequestsinvalidate) - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* [AccessapprovalProjectsApprovalRequestsList](docs/projects/README.md#accessapprovalprojectsapprovalrequestslist) - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* [AccessapprovalProjectsDeleteAccessApprovalSettings](docs/projects/README.md#accessapprovalprojectsdeleteaccessapprovalsettings) - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* [AccessapprovalProjectsUpdateAccessApprovalSettings](docs/projects/README.md#accessapprovalprojectsupdateaccessapprovalsettings) - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
