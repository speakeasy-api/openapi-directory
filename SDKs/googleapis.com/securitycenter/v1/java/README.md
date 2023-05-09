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
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsRunDiscoveryRequest req = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            SecuritycenterOrganizationsAssetsRunDiscoveryResponse res = sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req, new SecuritycenterOrganizationsAssetsRunDiscoverySecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [organizations](docs/organizations/README.md)

* [securitycenterOrganizationsAssetsRunDiscovery](docs/organizations/README.md#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](docs/organizations/README.md#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsSourcesCreate](docs/organizations/README.md#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](docs/organizations/README.md#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesGetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesSetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](docs/organizations/README.md#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

### [projects](docs/projects/README.md)

* [securitycenterProjectsAssetsGroup](docs/projects/README.md#securitycenterprojectsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterProjectsAssetsList](docs/projects/README.md#securitycenterprojectsassetslist) - Lists an organization's assets.
* [securitycenterProjectsBigQueryExportsCreate](docs/projects/README.md#securitycenterprojectsbigqueryexportscreate) - Creates a BigQuery export.
* [securitycenterProjectsBigQueryExportsList](docs/projects/README.md#securitycenterprojectsbigqueryexportslist) - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* [securitycenterProjectsFindingsBulkMute](docs/projects/README.md#securitycenterprojectsfindingsbulkmute) - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* [securitycenterProjectsMuteConfigsCreate](docs/projects/README.md#securitycenterprojectsmuteconfigscreate) - Creates a mute config.
* [securitycenterProjectsMuteConfigsList](docs/projects/README.md#securitycenterprojectsmuteconfigslist) - Lists mute configs.
* [securitycenterProjectsNotificationConfigsCreate](docs/projects/README.md#securitycenterprojectsnotificationconfigscreate) - Creates a notification config.
* [securitycenterProjectsNotificationConfigsList](docs/projects/README.md#securitycenterprojectsnotificationconfigslist) - Lists notification configs.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommodulescreate) - Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommodulesdelete) - Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslist) - Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslistdescendant) - Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommodulesget) - Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList](docs/projects/README.md#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommoduleslist) - Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSourcesFindingsExternalSystemsPatch](docs/projects/README.md#securitycenterprojectssourcesfindingsexternalsystemspatch) - Updates external system. This is for a given finding.
* [securitycenterProjectsSourcesFindingsGroup](docs/projects/README.md#securitycenterprojectssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsList](docs/projects/README.md#securitycenterprojectssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsSetMute](docs/projects/README.md#securitycenterprojectssourcesfindingssetmute) - Updates the mute state of a finding.
* [securitycenterProjectsSourcesFindingsSetState](docs/projects/README.md#securitycenterprojectssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterProjectsSourcesList](docs/projects/README.md#securitycenterprojectssourceslist) - Lists all sources belonging to an organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
