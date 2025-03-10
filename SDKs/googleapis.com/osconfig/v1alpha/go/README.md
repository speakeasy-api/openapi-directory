# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/osconfig/v1alpha/go
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
    res, err := s.Projects.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList(ctx, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceOSPoliciesCompliancesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList](docs/projects/README.md#osconfigprojectslocationsinstanceospoliciescomplianceslist) - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesInventoriesList](docs/projects/README.md#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesVulnerabilityReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [OsconfigProjectsLocationsOsPolicyAssignmentsCreate](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsDelete](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentsdelete) - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsList](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGet](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [OsconfigProjectsLocationsOsPolicyAssignmentsPatch](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentspatch) - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
