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
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsOperationsListRequest req = new AssuredworkloadsOrganizationsLocationsOperationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            AssuredworkloadsOrganizationsLocationsOperationsListResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsOperationsList(req, new AssuredworkloadsOrganizationsLocationsOperationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
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

* [assuredworkloadsOrganizationsLocationsOperationsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [assuredworkloadsOrganizationsLocationsWorkloadsCreate](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadscreate) - Creates Assured Workload.
* [assuredworkloadsOrganizationsLocationsWorkloadsDelete](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsdelete) - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
* [assuredworkloadsOrganizationsLocationsWorkloadsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadslist) - Lists Assured Workloads under a CRM Node.
* [assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsmutatepartnerpermissions) - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsPatch](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadspatch) - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources) - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge) - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationsget) - Retrieves Assured Workload Violation based on ID.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationslist) - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
