# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/notebooks/v1/go
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
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, operations.NotebooksProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: sdk.String("provident"),
                Tag: sdk.String("distinctio"),
            },
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            PostStartupScript: sdk.String("nulla"),
            VMImage: &shared.VMImage{
                ImageFamily: sdk.String("corrupti"),
                ImageName: sdk.String("illum"),
                Project: sdk.String("vel"),
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        EnvironmentID: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [NotebooksProjectsLocationsEnvironmentsCreate](docs/projects/README.md#notebooksprojectslocationsenvironmentscreate) - Creates a new Environment.
* [NotebooksProjectsLocationsEnvironmentsList](docs/projects/README.md#notebooksprojectslocationsenvironmentslist) - Lists environments in a project.
* [NotebooksProjectsLocationsExecutionsCreate](docs/projects/README.md#notebooksprojectslocationsexecutionscreate) - Creates a new Execution in a given project and location.
* [NotebooksProjectsLocationsExecutionsList](docs/projects/README.md#notebooksprojectslocationsexecutionslist) - Lists executions in a given project and location
* [NotebooksProjectsLocationsInstancesCreate](docs/projects/README.md#notebooksprojectslocationsinstancescreate) - Creates a new Instance in a given project and location.
* [NotebooksProjectsLocationsInstancesGetInstanceHealth](docs/projects/README.md#notebooksprojectslocationsinstancesgetinstancehealth) - Check if a notebook instance is healthy.
* [NotebooksProjectsLocationsInstancesIsUpgradeable](docs/projects/README.md#notebooksprojectslocationsinstancesisupgradeable) - Check if a notebook instance is upgradable.
* [NotebooksProjectsLocationsInstancesList](docs/projects/README.md#notebooksprojectslocationsinstanceslist) - Lists instances in a given project and location.
* [NotebooksProjectsLocationsInstancesRegister](docs/projects/README.md#notebooksprojectslocationsinstancesregister) - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* [NotebooksProjectsLocationsInstancesReport](docs/projects/README.md#notebooksprojectslocationsinstancesreport) - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* [NotebooksProjectsLocationsInstancesRollback](docs/projects/README.md#notebooksprojectslocationsinstancesrollback) - Rollbacks a notebook instance to the previous version.
* [NotebooksProjectsLocationsInstancesSetAccelerator](docs/projects/README.md#notebooksprojectslocationsinstancessetaccelerator) - Updates the guest accelerators of a single Instance.
* [NotebooksProjectsLocationsInstancesSetLabels](docs/projects/README.md#notebooksprojectslocationsinstancessetlabels) - Replaces all the labels of an Instance.
* [NotebooksProjectsLocationsInstancesSetMachineType](docs/projects/README.md#notebooksprojectslocationsinstancessetmachinetype) - Updates the machine type of a single Instance.
* [NotebooksProjectsLocationsInstancesUpdateConfig](docs/projects/README.md#notebooksprojectslocationsinstancesupdateconfig) - Update Notebook Instance configurations.
* [NotebooksProjectsLocationsInstancesUpdateMetadataItems](docs/projects/README.md#notebooksprojectslocationsinstancesupdatemetadataitems) - Add/update metadata items for an instance.
* [NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig](docs/projects/README.md#notebooksprojectslocationsinstancesupdateshieldedinstanceconfig) - Updates the Shielded instance configuration of a single Instance.
* [NotebooksProjectsLocationsInstancesUpgradeInternal](docs/projects/README.md#notebooksprojectslocationsinstancesupgradeinternal) - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* [NotebooksProjectsLocationsList](docs/projects/README.md#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [NotebooksProjectsLocationsOperationsCancel](docs/projects/README.md#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NotebooksProjectsLocationsOperationsList](docs/projects/README.md#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NotebooksProjectsLocationsRuntimesCreate](docs/projects/README.md#notebooksprojectslocationsruntimescreate) - Creates a new Runtime in a given project and location.
* [NotebooksProjectsLocationsRuntimesDiagnose](docs/projects/README.md#notebooksprojectslocationsruntimesdiagnose) - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* [NotebooksProjectsLocationsRuntimesGetIamPolicy](docs/projects/README.md#notebooksprojectslocationsruntimesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NotebooksProjectsLocationsRuntimesList](docs/projects/README.md#notebooksprojectslocationsruntimeslist) - Lists Runtimes in a given project and location.
* [NotebooksProjectsLocationsRuntimesPatch](docs/projects/README.md#notebooksprojectslocationsruntimespatch) - Update Notebook Runtime configuration.
* [NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal](docs/projects/README.md#notebooksprojectslocationsruntimesrefreshruntimetokeninternal) - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* [NotebooksProjectsLocationsRuntimesReportEvent](docs/projects/README.md#notebooksprojectslocationsruntimesreportevent) - Report and process a runtime event.
* [NotebooksProjectsLocationsRuntimesReset](docs/projects/README.md#notebooksprojectslocationsruntimesreset) - Resets a Managed Notebook Runtime.
* [NotebooksProjectsLocationsRuntimesSetIamPolicy](docs/projects/README.md#notebooksprojectslocationsruntimessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NotebooksProjectsLocationsRuntimesStart](docs/projects/README.md#notebooksprojectslocationsruntimesstart) - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [NotebooksProjectsLocationsRuntimesStop](docs/projects/README.md#notebooksprojectslocationsruntimesstop) - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [NotebooksProjectsLocationsRuntimesSwitch](docs/projects/README.md#notebooksprojectslocationsruntimesswitch) - Switch a Managed Notebook Runtime.
* [NotebooksProjectsLocationsRuntimesTestIamPermissions](docs/projects/README.md#notebooksprojectslocationsruntimestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NotebooksProjectsLocationsRuntimesUpgrade](docs/projects/README.md#notebooksprojectslocationsruntimesupgrade) - Upgrades a Managed Notebook Runtime to the latest version.
* [NotebooksProjectsLocationsSchedulesCreate](docs/projects/README.md#notebooksprojectslocationsschedulescreate) - Creates a new Scheduled Notebook in a given project and location.
* [NotebooksProjectsLocationsSchedulesDelete](docs/projects/README.md#notebooksprojectslocationsschedulesdelete) - Deletes schedule and all underlying jobs
* [NotebooksProjectsLocationsSchedulesGet](docs/projects/README.md#notebooksprojectslocationsschedulesget) - Gets details of schedule
* [NotebooksProjectsLocationsSchedulesList](docs/projects/README.md#notebooksprojectslocationsscheduleslist) - Lists schedules in a given project and location.
* [NotebooksProjectsLocationsSchedulesTrigger](docs/projects/README.md#notebooksprojectslocationsschedulestrigger) - Triggers execution of an existing schedule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
