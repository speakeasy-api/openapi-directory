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

            OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest() {{
                security = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams() {{
                    parent = "possimus";
                }};
                queryParams = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dignissimos";
                    alt = "media";
                    callback = "placeat";
                    fields = "illo";
                    filter = "recusandae";
                    key = "dolor";
                    oauthToken = "corrupti";
                    pageSize = 6565798491263222334;
                    pageToken = "asperiores";
                    prettyPrint = true;
                    quotaUser = "quam";
                    uploadType = "omnis";
                    uploadProtocol = "ipsa";
                }};
            }};

            OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOsPoliciesCompliancesList(req);

            if (res.listInstanceOSPoliciesCompliancesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `osconfigProjectsLocationsInstanceOsPoliciesCompliancesList` - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* `osconfigProjectsLocationsInstancesInventoriesList` - List inventory data for all VM instances in the specified zone.
* `osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList` - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* `osconfigProjectsLocationsInstancesVulnerabilityReportsList` - List vulnerability reports for all VM instances in the specified zone.
* `osconfigProjectsLocationsOsPolicyAssignmentsCreate` - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `osconfigProjectsLocationsOsPolicyAssignmentsDelete` - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `osconfigProjectsLocationsOsPolicyAssignmentsList` - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* `osconfigProjectsLocationsOsPolicyAssignmentsListRevisions` - List the OS policy assignment revisions for a given OS policy assignment.
* `osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `osconfigProjectsLocationsOsPolicyAssignmentsPatch` - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
