# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/securitycenter/v1/go
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

    req := operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        Parent: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsRunDiscovery(ctx, req, operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Organizations

* `SecuritycenterOrganizationsAssetsRunDiscovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `SecuritycenterOrganizationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `SecuritycenterOrganizationsSourcesCreate` - Creates a source.
* `SecuritycenterOrganizationsSourcesFindingsCreate` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `SecuritycenterOrganizationsSourcesGetIamPolicy` - Gets the access control policy on the specified Source.
* `SecuritycenterOrganizationsSourcesSetIamPolicy` - Sets the access control policy on the specified Source.
* `SecuritycenterOrganizationsSourcesTestIamPermissions` - Returns the permissions that a caller has on the specified source.

### Projects

* `SecuritycenterProjectsAssetsGroup` - Filters an organization's assets and groups them by their specified properties.
* `SecuritycenterProjectsAssetsList` - Lists an organization's assets.
* `SecuritycenterProjectsBigQueryExportsCreate` - Creates a BigQuery export.
* `SecuritycenterProjectsBigQueryExportsList` - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* `SecuritycenterProjectsFindingsBulkMute` - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* `SecuritycenterProjectsMuteConfigsCreate` - Creates a mute config.
* `SecuritycenterProjectsMuteConfigsList` - Lists mute configs.
* `SecuritycenterProjectsNotificationConfigsCreate` - Creates a notification config.
* `SecuritycenterProjectsNotificationConfigsDelete` - Deletes a notification config.
* `SecuritycenterProjectsNotificationConfigsGet` - Gets a notification config.
* `SecuritycenterProjectsNotificationConfigsList` - Lists notification configs.
* `SecuritycenterProjectsSourcesFindingsExternalSystemsPatch` - Updates external system. This is for a given finding.
* `SecuritycenterProjectsSourcesFindingsGroup` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* `SecuritycenterProjectsSourcesFindingsList` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* `SecuritycenterProjectsSourcesFindingsSetMute` - Updates the mute state of a finding.
* `SecuritycenterProjectsSourcesFindingsSetState` - Updates the state of a finding.
* `SecuritycenterProjectsSourcesList` - Lists all sources belonging to an organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
