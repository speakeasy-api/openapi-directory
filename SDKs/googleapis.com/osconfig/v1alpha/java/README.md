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

import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655;
                pageToken = "error";
                parent = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOSPoliciesCompliancesList(req, new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstanceOSPoliciesCompliancesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `osconfigProjectsLocationsInstanceOSPoliciesCompliancesList` - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
