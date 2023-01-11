# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

            SecuritycenterOrganizationsAssetsGroupRequest req = new SecuritycenterOrganizationsAssetsGroupRequest() {{
                security = new SecuritycenterOrganizationsAssetsGroupSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecuritycenterOrganizationsAssetsGroupPathParams() {{
                    parent = "ab";
                }};
                queryParams = new SecuritycenterOrganizationsAssetsGroupQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "iure";
                    alt = "proto";
                    callback = "et";
                    fields = "quis";
                    key = "et";
                    oauthToken = "quia";
                    prettyPrint = true;
                    quotaUser = "perferendis";
                    uploadType = "fugit";
                    uploadProtocol = "earum";
                }};
                request = new GroupAssetsRequest() {{
                    compareDuration = "et";
                    filter = "magni";
                    groupBy = "voluptatem";
                    pageSize = 7178277312729210;
                    pageToken = "repudiandae";
                    readTime = "nisi";
                }};
            }};

            SecuritycenterOrganizationsAssetsGroupResponse res = sdk.organizations.securitycenterOrganizationsAssetsGroup(req);

            if (res.groupAssetsResponse.isPresent()) {
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

* `securitycenterOrganizationsAssetsGroup` - Filters an organization's assets and groups them by their specified properties.
* `securitycenterOrganizationsAssetsList` - Lists an organization's assets.
* `securitycenterOrganizationsAssetsRunDiscovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `securitycenterOrganizationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `securitycenterOrganizationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `securitycenterOrganizationsSourcesCreate` - Creates a source.
* `securitycenterOrganizationsSourcesFindingsCreate` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `securitycenterOrganizationsSourcesFindingsGroup` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* `securitycenterOrganizationsSourcesFindingsList` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* `securitycenterOrganizationsSourcesFindingsSetState` - Updates the state of a finding.
* `securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks` - Updates security marks.
* `securitycenterOrganizationsSourcesGet` - Gets a source.
* `securitycenterOrganizationsSourcesGetIamPolicy` - Gets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesList` - Lists all sources belonging to an organization.
* `securitycenterOrganizationsSourcesSetIamPolicy` - Sets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesTestIamPermissions` - Returns the permissions that a caller has on the specified source.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
