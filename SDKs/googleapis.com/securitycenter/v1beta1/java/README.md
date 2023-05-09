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
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupAssetsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsGroupRequest req = new SecuritycenterOrganizationsAssetsGroupRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                groupAssetsRequest = new GroupAssetsRequest() {{
                    compareDuration = "distinctio";
                    filter = "quibusdam";
                    groupBy = "unde";
                    pageSize = 857946;
                    pageToken = "corrupti";
                    readTime = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            SecuritycenterOrganizationsAssetsGroupResponse res = sdk.organizations.securitycenterOrganizationsAssetsGroup(req, new SecuritycenterOrganizationsAssetsGroupSecurity("tempora", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupAssetsResponse != null) {
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

* [securitycenterOrganizationsAssetsGroup](docs/organizations/README.md#securitycenterorganizationsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterOrganizationsAssetsList](docs/organizations/README.md#securitycenterorganizationsassetslist) - Lists an organization's assets.
* [securitycenterOrganizationsAssetsRunDiscovery](docs/organizations/README.md#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](docs/organizations/README.md#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsOperationsDelete](docs/organizations/README.md#securitycenterorganizationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [securitycenterOrganizationsSourcesCreate](docs/organizations/README.md#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](docs/organizations/README.md#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesFindingsGroup](docs/organizations/README.md#securitycenterorganizationssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsList](docs/organizations/README.md#securitycenterorganizationssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsSetState](docs/organizations/README.md#securitycenterorganizationssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks](docs/organizations/README.md#securitycenterorganizationssourcesfindingsupdatesecuritymarks) - Updates security marks.
* [securitycenterOrganizationsSourcesGet](docs/organizations/README.md#securitycenterorganizationssourcesget) - Gets a source.
* [securitycenterOrganizationsSourcesGetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesList](docs/organizations/README.md#securitycenterorganizationssourceslist) - Lists all sources belonging to an organization.
* [securitycenterOrganizationsSourcesSetIamPolicy](docs/organizations/README.md#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](docs/organizations/README.md#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
