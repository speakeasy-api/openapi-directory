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

import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryPathParams;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsRunDiscoveryRequest req = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest() {{
                security = new SecuritycenterOrganizationsAssetsRunDiscoverySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecuritycenterOrganizationsAssetsRunDiscoveryPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            SecuritycenterOrganizationsAssetsRunDiscoveryResponse res = sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### organizations

* `securitycenterOrganizationsAssetsRunDiscovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `securitycenterOrganizationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `securitycenterOrganizationsSourcesCreate` - Creates a source.
* `securitycenterOrganizationsSourcesFindingsCreate` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `securitycenterOrganizationsSourcesGetIamPolicy` - Gets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesSetIamPolicy` - Sets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesTestIamPermissions` - Returns the permissions that a caller has on the specified source.

### projects

* `securitycenterProjectsAssetsGroup` - Filters an organization's assets and groups them by their specified properties.
* `securitycenterProjectsAssetsList` - Lists an organization's assets.
* `securitycenterProjectsBigQueryExportsCreate` - Creates a BigQuery export.
* `securitycenterProjectsBigQueryExportsList` - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* `securitycenterProjectsFindingsBulkMute` - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* `securitycenterProjectsMuteConfigsCreate` - Creates a mute config.
* `securitycenterProjectsMuteConfigsList` - Lists mute configs.
* `securitycenterProjectsNotificationConfigsCreate` - Creates a notification config.
* `securitycenterProjectsNotificationConfigsDelete` - Deletes a notification config.
* `securitycenterProjectsNotificationConfigsGet` - Gets a notification config.
* `securitycenterProjectsNotificationConfigsList` - Lists notification configs.
* `securitycenterProjectsSourcesFindingsExternalSystemsPatch` - Updates external system. This is for a given finding.
* `securitycenterProjectsSourcesFindingsGroup` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* `securitycenterProjectsSourcesFindingsList` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* `securitycenterProjectsSourcesFindingsSetMute` - Updates the mute state of a finding.
* `securitycenterProjectsSourcesFindingsSetState` - Updates the state of a finding.
* `securitycenterProjectsSourcesList` - Lists all sources belonging to an organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
