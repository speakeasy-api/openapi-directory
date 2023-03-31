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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.NotebooksProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: "2",
        EnvironmentInput: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "provident",
                Tag: "distinctio",
            },
            Description: "quibusdam",
            DisplayName: "unde",
            PostStartupScript: "nulla",
            VMImage: &shared.VMImage{
                ImageFamily: "corrupti",
                ImageName: "illum",
                Project: "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        EnvironmentID: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        Parent: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, req, operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity{
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


### Projects

* `NotebooksProjectsLocationsEnvironmentsCreate` - Creates a new Environment.
* `NotebooksProjectsLocationsEnvironmentsList` - Lists environments in a project.
* `NotebooksProjectsLocationsExecutionsCreate` - Creates a new Execution in a given project and location.
* `NotebooksProjectsLocationsExecutionsList` - Lists executions in a given project and location
* `NotebooksProjectsLocationsInstancesCreate` - Creates a new Instance in a given project and location.
* `NotebooksProjectsLocationsInstancesGetInstanceHealth` - Check if a notebook instance is healthy.
* `NotebooksProjectsLocationsInstancesIsUpgradeable` - Check if a notebook instance is upgradable.
* `NotebooksProjectsLocationsInstancesList` - Lists instances in a given project and location.
* `NotebooksProjectsLocationsInstancesRegister` - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* `NotebooksProjectsLocationsInstancesReport` - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* `NotebooksProjectsLocationsInstancesRollback` - Rollbacks a notebook instance to the previous version.
* `NotebooksProjectsLocationsInstancesSetAccelerator` - Updates the guest accelerators of a single Instance.
* `NotebooksProjectsLocationsInstancesSetLabels` - Replaces all the labels of an Instance.
* `NotebooksProjectsLocationsInstancesSetMachineType` - Updates the machine type of a single Instance.
* `NotebooksProjectsLocationsInstancesUpdateConfig` - Update Notebook Instance configurations.
* `NotebooksProjectsLocationsInstancesUpdateMetadataItems` - Add/update metadata items for an instance.
* `NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig` - Updates the Shielded instance configuration of a single Instance.
* `NotebooksProjectsLocationsInstancesUpgradeInternal` - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* `NotebooksProjectsLocationsList` - Lists information about the supported locations for this service.
* `NotebooksProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NotebooksProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `NotebooksProjectsLocationsRuntimesCreate` - Creates a new Runtime in a given project and location.
* `NotebooksProjectsLocationsRuntimesDiagnose` - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* `NotebooksProjectsLocationsRuntimesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NotebooksProjectsLocationsRuntimesList` - Lists Runtimes in a given project and location.
* `NotebooksProjectsLocationsRuntimesPatch` - Update Notebook Runtime configuration.
* `NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal` - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* `NotebooksProjectsLocationsRuntimesReportEvent` - Report and process a runtime event.
* `NotebooksProjectsLocationsRuntimesReset` - Resets a Managed Notebook Runtime.
* `NotebooksProjectsLocationsRuntimesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NotebooksProjectsLocationsRuntimesStart` - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `NotebooksProjectsLocationsRuntimesStop` - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `NotebooksProjectsLocationsRuntimesSwitch` - Switch a Managed Notebook Runtime.
* `NotebooksProjectsLocationsRuntimesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `NotebooksProjectsLocationsRuntimesUpgrade` - Upgrades a Managed Notebook Runtime to the latest version.
* `NotebooksProjectsLocationsSchedulesCreate` - Creates a new Scheduled Notebook in a given project and location.
* `NotebooksProjectsLocationsSchedulesDelete` - Deletes schedule and all underlying jobs
* `NotebooksProjectsLocationsSchedulesGet` - Gets details of schedule
* `NotebooksProjectsLocationsSchedulesList` - Lists schedules in a given project and location.
* `NotebooksProjectsLocationsSchedulesTrigger` - Triggers execution of an existing schedule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
