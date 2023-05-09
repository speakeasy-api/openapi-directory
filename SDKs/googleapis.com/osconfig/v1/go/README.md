# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/osconfig/v1/go
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
    res, err := s.Projects.OsconfigProjectsLocationsInstancesInventoriesList(ctx, operations.OsconfigProjectsLocationsInstancesInventoriesListRequest{
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
        View: operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnumFull.ToPointer(),
    }, operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventoriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [OsconfigProjectsLocationsInstancesInventoriesList](docs/projects/README.md#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesVulnerabilityReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [OsconfigProjectsLocationsOsPolicyAssignmentsCreate](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsList](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [OsconfigProjectsPatchDeploymentsCreate](docs/projects/README.md#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsDelete](docs/projects/README.md#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsList](docs/projects/README.md#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [OsconfigProjectsPatchDeploymentsPatch](docs/projects/README.md#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsPause](docs/projects/README.md#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [OsconfigProjectsPatchDeploymentsResume](docs/projects/README.md#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [OsconfigProjectsPatchJobsCancel](docs/projects/README.md#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [OsconfigProjectsPatchJobsExecute](docs/projects/README.md#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [OsconfigProjectsPatchJobsGet](docs/projects/README.md#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [OsconfigProjectsPatchJobsInstanceDetailsList](docs/projects/README.md#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [OsconfigProjectsPatchJobsList](docs/projects/README.md#osconfigprojectspatchjobslist) - Get a list of patch jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
