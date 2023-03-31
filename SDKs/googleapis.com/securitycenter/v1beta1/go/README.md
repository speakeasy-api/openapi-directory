# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/securitycenter/v1beta1/go
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

    req := operations.SecuritycenterOrganizationsAssetsGroupRequest{
        DollarXgafv: "2",
        GroupAssetsRequest: &shared.GroupAssetsRequest{
            CompareDuration: "provident",
            Filter: "distinctio",
            GroupBy: "quibusdam",
            PageSize: 602763,
            PageToken: "nulla",
            ReadTime: "corrupti",
        },
        AccessToken: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, req, operations.SecuritycenterOrganizationsAssetsGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Organizations

* `SecuritycenterOrganizationsAssetsGroup` - Filters an organization's assets and groups them by their specified properties.
* `SecuritycenterOrganizationsAssetsList` - Lists an organization's assets.
* `SecuritycenterOrganizationsAssetsRunDiscovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `SecuritycenterOrganizationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `SecuritycenterOrganizationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `SecuritycenterOrganizationsSourcesCreate` - Creates a source.
* `SecuritycenterOrganizationsSourcesFindingsCreate` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `SecuritycenterOrganizationsSourcesFindingsGroup` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* `SecuritycenterOrganizationsSourcesFindingsList` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* `SecuritycenterOrganizationsSourcesFindingsSetState` - Updates the state of a finding.
* `SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarks` - Updates security marks.
* `SecuritycenterOrganizationsSourcesGet` - Gets a source.
* `SecuritycenterOrganizationsSourcesGetIamPolicy` - Gets the access control policy on the specified Source.
* `SecuritycenterOrganizationsSourcesList` - Lists all sources belonging to an organization.
* `SecuritycenterOrganizationsSourcesSetIamPolicy` - Sets the access control policy on the specified Source.
* `SecuritycenterOrganizationsSourcesTestIamPermissions` - Returns the permissions that a caller has on the specified source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
