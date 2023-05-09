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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsRunDiscovery(ctx, operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity{
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


### [Organizations](docs/organizations/README.md)

* [SecuritycenterOrganizationsAssetsRunDiscovery](docs/organizations/README.md#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [SecuritycenterOrganizationsOperationsCancel](docs/organizations/README.md#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [SecuritycenterOrganizationsSourcesCreate](docs/organizations/README.md#securitycenterorganizationssourcescreate) - Creates a source.
* [SecuritycenterOrganizationsSourcesFindingsCreate](docs/organizations/README.md#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [SecuritycenterOrganizationsSourcesGetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesSetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesTestIamPermissions](docs/organizations/README.md#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

### [Projects](docs/projects/README.md)

* [SecuritycenterProjectsAssetsGroup](docs/projects/README.md#securitycenterprojectsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [SecuritycenterProjectsAssetsList](docs/projects/README.md#securitycenterprojectsassetslist) - Lists an organization's assets.
* [SecuritycenterProjectsBigQueryExportsCreate](docs/projects/README.md#securitycenterprojectsbigqueryexportscreate) - Creates a BigQuery export.
* [SecuritycenterProjectsBigQueryExportsList](docs/projects/README.md#securitycenterprojectsbigqueryexportslist) - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* [SecuritycenterProjectsFindingsBulkMute](docs/projects/README.md#securitycenterprojectsfindingsbulkmute) - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* [SecuritycenterProjectsMuteConfigsCreate](docs/projects/README.md#securitycenterprojectsmuteconfigscreate) - Creates a mute config.
* [SecuritycenterProjectsMuteConfigsList](docs/projects/README.md#securitycenterprojectsmuteconfigslist) - Lists mute configs.
* [SecuritycenterProjectsNotificationConfigsCreate](docs/projects/README.md#securitycenterprojectsnotificationconfigscreate) - Creates a notification config.
* [SecuritycenterProjectsNotificationConfigsList](docs/projects/README.md#securitycenterprojectsnotificationconfigslist) - Lists notification configs.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommodulescreate) - Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommodulesdelete) - Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslist) - Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslistdescendant) - Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommodulesget) - Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommoduleslist) - Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [SecuritycenterProjectsSourcesFindingsExternalSystemsPatch](docs/projects/README.md#securitycenterprojectssourcesfindingsexternalsystemspatch) - Updates external system. This is for a given finding.
* [SecuritycenterProjectsSourcesFindingsGroup](docs/projects/README.md#securitycenterprojectssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* [SecuritycenterProjectsSourcesFindingsList](docs/projects/README.md#securitycenterprojectssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* [SecuritycenterProjectsSourcesFindingsSetMute](docs/projects/README.md#securitycenterprojectssourcesfindingssetmute) - Updates the mute state of a finding.
* [SecuritycenterProjectsSourcesFindingsSetState](docs/projects/README.md#securitycenterprojectssourcesfindingssetstate) - Updates the state of a finding.
* [SecuritycenterProjectsSourcesList](docs/projects/README.md#securitycenterprojectssourceslist) - Lists all sources belonging to an organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
