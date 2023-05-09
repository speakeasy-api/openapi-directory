# Projects

### Available Operations

* [NotebooksProjectsLocationsEnvironmentsCreate](#notebooksprojectslocationsenvironmentscreate) - Creates a new Environment.
* [NotebooksProjectsLocationsEnvironmentsList](#notebooksprojectslocationsenvironmentslist) - Lists environments in a project.
* [NotebooksProjectsLocationsExecutionsCreate](#notebooksprojectslocationsexecutionscreate) - Creates a new Execution in a given project and location.
* [NotebooksProjectsLocationsExecutionsList](#notebooksprojectslocationsexecutionslist) - Lists executions in a given project and location
* [NotebooksProjectsLocationsInstancesCreate](#notebooksprojectslocationsinstancescreate) - Creates a new Instance in a given project and location.
* [NotebooksProjectsLocationsInstancesGetInstanceHealth](#notebooksprojectslocationsinstancesgetinstancehealth) - Check if a notebook instance is healthy.
* [NotebooksProjectsLocationsInstancesIsUpgradeable](#notebooksprojectslocationsinstancesisupgradeable) - Check if a notebook instance is upgradable.
* [NotebooksProjectsLocationsInstancesList](#notebooksprojectslocationsinstanceslist) - Lists instances in a given project and location.
* [NotebooksProjectsLocationsInstancesRegister](#notebooksprojectslocationsinstancesregister) - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* [NotebooksProjectsLocationsInstancesReport](#notebooksprojectslocationsinstancesreport) - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* [NotebooksProjectsLocationsInstancesRollback](#notebooksprojectslocationsinstancesrollback) - Rollbacks a notebook instance to the previous version.
* [NotebooksProjectsLocationsInstancesSetAccelerator](#notebooksprojectslocationsinstancessetaccelerator) - Updates the guest accelerators of a single Instance.
* [NotebooksProjectsLocationsInstancesSetLabels](#notebooksprojectslocationsinstancessetlabels) - Replaces all the labels of an Instance.
* [NotebooksProjectsLocationsInstancesSetMachineType](#notebooksprojectslocationsinstancessetmachinetype) - Updates the machine type of a single Instance.
* [NotebooksProjectsLocationsInstancesUpdateConfig](#notebooksprojectslocationsinstancesupdateconfig) - Update Notebook Instance configurations.
* [NotebooksProjectsLocationsInstancesUpdateMetadataItems](#notebooksprojectslocationsinstancesupdatemetadataitems) - Add/update metadata items for an instance.
* [NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig](#notebooksprojectslocationsinstancesupdateshieldedinstanceconfig) - Updates the Shielded instance configuration of a single Instance.
* [NotebooksProjectsLocationsInstancesUpgradeInternal](#notebooksprojectslocationsinstancesupgradeinternal) - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* [NotebooksProjectsLocationsList](#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [NotebooksProjectsLocationsOperationsCancel](#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NotebooksProjectsLocationsOperationsList](#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NotebooksProjectsLocationsRuntimesCreate](#notebooksprojectslocationsruntimescreate) - Creates a new Runtime in a given project and location.
* [NotebooksProjectsLocationsRuntimesDiagnose](#notebooksprojectslocationsruntimesdiagnose) - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* [NotebooksProjectsLocationsRuntimesGetIamPolicy](#notebooksprojectslocationsruntimesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NotebooksProjectsLocationsRuntimesList](#notebooksprojectslocationsruntimeslist) - Lists Runtimes in a given project and location.
* [NotebooksProjectsLocationsRuntimesPatch](#notebooksprojectslocationsruntimespatch) - Update Notebook Runtime configuration.
* [NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal](#notebooksprojectslocationsruntimesrefreshruntimetokeninternal) - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* [NotebooksProjectsLocationsRuntimesReportEvent](#notebooksprojectslocationsruntimesreportevent) - Report and process a runtime event.
* [NotebooksProjectsLocationsRuntimesReset](#notebooksprojectslocationsruntimesreset) - Resets a Managed Notebook Runtime.
* [NotebooksProjectsLocationsRuntimesSetIamPolicy](#notebooksprojectslocationsruntimessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NotebooksProjectsLocationsRuntimesStart](#notebooksprojectslocationsruntimesstart) - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [NotebooksProjectsLocationsRuntimesStop](#notebooksprojectslocationsruntimesstop) - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [NotebooksProjectsLocationsRuntimesSwitch](#notebooksprojectslocationsruntimesswitch) - Switch a Managed Notebook Runtime.
* [NotebooksProjectsLocationsRuntimesTestIamPermissions](#notebooksprojectslocationsruntimestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NotebooksProjectsLocationsRuntimesUpgrade](#notebooksprojectslocationsruntimesupgrade) - Upgrades a Managed Notebook Runtime to the latest version.
* [NotebooksProjectsLocationsSchedulesCreate](#notebooksprojectslocationsschedulescreate) - Creates a new Scheduled Notebook in a given project and location.
* [NotebooksProjectsLocationsSchedulesDelete](#notebooksprojectslocationsschedulesdelete) - Deletes schedule and all underlying jobs
* [NotebooksProjectsLocationsSchedulesGet](#notebooksprojectslocationsschedulesget) - Gets details of schedule
* [NotebooksProjectsLocationsSchedulesList](#notebooksprojectslocationsscheduleslist) - Lists schedules in a given project and location.
* [NotebooksProjectsLocationsSchedulesTrigger](#notebooksprojectslocationsschedulestrigger) - Triggers execution of an existing schedule.

## NotebooksProjectsLocationsEnvironmentsCreate

Creates a new Environment.

### Example Usage

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
                Repository: sdk.String("placeat"),
                Tag: sdk.String("voluptatum"),
            },
            Description: sdk.String("iusto"),
            DisplayName: sdk.String("excepturi"),
            PostStartupScript: sdk.String("nisi"),
            VMImage: &shared.VMImage{
                ImageFamily: sdk.String("recusandae"),
                ImageName: sdk.String("temporibus"),
                Project: sdk.String("ab"),
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        EnvironmentID: sdk.String("perferendis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
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

## NotebooksProjectsLocationsEnvironmentsList

Lists environments in a project.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsList(ctx, operations.NotebooksProjectsLocationsEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(678880),
        PageToken: sdk.String("dicta"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.NotebooksProjectsLocationsEnvironmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsExecutionsCreate

Creates a new Execution in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsExecutionsCreate(ctx, operations.NotebooksProjectsLocationsExecutionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExecutionInput: &shared.ExecutionInput{
            Description: sdk.String("hic"),
            ExecutionTemplate: &shared.ExecutionTemplate{
                AcceleratorConfig: &shared.SchedulerAcceleratorConfig{
                    CoreCount: sdk.String("optio"),
                    Type: shared.SchedulerAcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
                },
                ContainerImageURI: sdk.String("beatae"),
                DataprocParameters: &shared.DataprocParameters{
                    Cluster: sdk.String("commodi"),
                },
                InputNotebookFile: sdk.String("molestiae"),
                JobType: shared.ExecutionTemplateJobTypeEnumJobTypeUnspecified.ToPointer(),
                KernelSpec: sdk.String("qui"),
                Labels: map[string]string{
                    "cum": "esse",
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                    "ad": "natus",
                },
                MasterType: sdk.String("sed"),
                OutputNotebookFolder: sdk.String("iste"),
                Parameters: sdk.String("dolor"),
                ParamsYamlFile: sdk.String("natus"),
                ScaleTier: shared.ExecutionTemplateScaleTierEnumStandard1.ToPointer(),
                ServiceAccount: sdk.String("hic"),
                Tensorboard: sdk.String("saepe"),
                VertexAiParameters: &shared.VertexAIParameters{
                    Env: map[string]string{
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                    Network: sdk.String("architecto"),
                },
            },
            OutputNotebookFile: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        ExecutionID: sdk.String("laborum"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("corporis"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.NotebooksProjectsLocationsExecutionsCreateSecurity{
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

## NotebooksProjectsLocationsExecutionsList

Lists executions in a given project and location

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsExecutionsList(ctx, operations.NotebooksProjectsLocationsExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        OrderBy: sdk.String("architecto"),
        PageSize: sdk.Int64(652790),
        PageToken: sdk.String("dolorem"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.NotebooksProjectsLocationsExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsInstancesCreate

Creates a new Instance in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesCreate(ctx, operations.NotebooksProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AcceleratorConfig: &shared.AcceleratorConfig{
                CoreCount: sdk.String("numquam"),
                Type: shared.AcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
            },
            BootDiskSizeGb: sdk.String("quam"),
            BootDiskType: shared.InstanceBootDiskTypeEnumPdSsd.ToPointer(),
            CanIPForward: sdk.Bool(false),
            ContainerImage: &shared.ContainerImage{
                Repository: sdk.String("velit"),
                Tag: sdk.String("error"),
            },
            CustomGpuDriverPath: sdk.String("quia"),
            DataDiskSizeGb: sdk.String("quis"),
            DataDiskType: shared.InstanceDataDiskTypeEnumDiskTypeUnspecified.ToPointer(),
            DiskEncryption: shared.InstanceDiskEncryptionEnumCmek.ToPointer(),
            InstallGpuDriver: sdk.Bool(false),
            InstanceOwners: []string{
                "enim",
                "odit",
                "quo",
            },
            KmsKey: sdk.String("sequi"),
            Labels: map[string]string{
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            MachineType: sdk.String("quasi"),
            Metadata: map[string]string{
                "voluptatibus": "vero",
                "nihil": "praesentium",
                "voluptatibus": "ipsa",
                "omnis": "voluptate",
            },
            Network: sdk.String("cum"),
            NicType: shared.InstanceNicTypeEnumUnspecifiedNicType.ToPointer(),
            NoProxyAccess: sdk.Bool(false),
            NoPublicIP: sdk.Bool(false),
            NoRemoveDataDisk: sdk.Bool(false),
            PostStartupScript: sdk.String("doloremque"),
            ReservationAffinity: &shared.ReservationAffinity{
                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                Key: sdk.String("ut"),
                Values: []string{
                    "dicta",
                    "corporis",
                    "dolore",
                    "iusto",
                },
            },
            ServiceAccount: sdk.String("dicta"),
            ServiceAccountScopes: []string{
                "enim",
                "accusamus",
                "commodi",
            },
            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                EnableIntegrityMonitoring: sdk.Bool(false),
                EnableSecureBoot: sdk.Bool(false),
                EnableVtpm: sdk.Bool(false),
            },
            Subnet: sdk.String("repudiandae"),
            Tags: []string{
                "ipsum",
            },
            UpgradeHistory: []shared.UpgradeHistoryEntry{
                shared.UpgradeHistoryEntry{
                    Action: shared.UpgradeHistoryEntryActionEnumUpgrade.ToPointer(),
                    ContainerImage: sdk.String("excepturi"),
                    CreateTime: sdk.String("pariatur"),
                    Framework: sdk.String("modi"),
                    Snapshot: sdk.String("praesentium"),
                    State: shared.UpgradeHistoryEntryStateEnumSucceeded.ToPointer(),
                    TargetImage: sdk.String("voluptates"),
                    TargetVersion: sdk.String("quasi"),
                    Version: sdk.String("repudiandae"),
                    VMImage: sdk.String("sint"),
                },
                shared.UpgradeHistoryEntry{
                    Action: shared.UpgradeHistoryEntryActionEnumActionUnspecified.ToPointer(),
                    ContainerImage: sdk.String("itaque"),
                    CreateTime: sdk.String("incidunt"),
                    Framework: sdk.String("enim"),
                    Snapshot: sdk.String("consequatur"),
                    State: shared.UpgradeHistoryEntryStateEnumSucceeded.ToPointer(),
                    TargetImage: sdk.String("quibusdam"),
                    TargetVersion: sdk.String("explicabo"),
                    Version: sdk.String("deserunt"),
                    VMImage: sdk.String("distinctio"),
                },
                shared.UpgradeHistoryEntry{
                    Action: shared.UpgradeHistoryEntryActionEnumRollback.ToPointer(),
                    ContainerImage: sdk.String("labore"),
                    CreateTime: sdk.String("modi"),
                    Framework: sdk.String("qui"),
                    Snapshot: sdk.String("aliquid"),
                    State: shared.UpgradeHistoryEntryStateEnumSucceeded.ToPointer(),
                    TargetImage: sdk.String("quos"),
                    TargetVersion: sdk.String("perferendis"),
                    Version: sdk.String("magni"),
                    VMImage: sdk.String("assumenda"),
                },
            },
            VMImage: &shared.VMImage{
                ImageFamily: sdk.String("ipsam"),
                ImageName: sdk.String("alias"),
                Project: sdk.String("fugit"),
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        InstanceID: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
    }, operations.NotebooksProjectsLocationsInstancesCreateSecurity{
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

## NotebooksProjectsLocationsInstancesGetInstanceHealth

Check if a notebook instance is healthy.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesGetInstanceHealth(ctx, operations.NotebooksProjectsLocationsInstancesGetInstanceHealthRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        Name: "Randal Parisian",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceHealthResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsInstancesIsUpgradeable

Check if a notebook instance is upgradable.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesIsUpgradeable(ctx, operations.NotebooksProjectsLocationsInstancesIsUpgradeableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        NotebookInstance: "accusamus",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        Type: operations.NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeFramework.ToPointer(),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.NotebooksProjectsLocationsInstancesIsUpgradeableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsInstanceUpgradeableResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsInstancesList

Lists instances in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesList(ctx, operations.NotebooksProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(230533),
        PageToken: sdk.String("deserunt"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.NotebooksProjectsLocationsInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsInstancesRegister

Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesRegister(ctx, operations.NotebooksProjectsLocationsInstancesRegisterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RegisterInstanceRequest: &shared.RegisterInstanceRequest{
            InstanceID: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("labore"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.NotebooksProjectsLocationsInstancesRegisterSecurity{
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

## NotebooksProjectsLocationsInstancesReport

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesReport(ctx, operations.NotebooksProjectsLocationsInstancesReportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportInstanceInfoRequest: &shared.ReportInstanceInfoRequest{
            Metadata: map[string]string{
                "architecto": "magnam",
            },
            VMID: sdk.String("et"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.NotebooksProjectsLocationsInstancesReportSecurity{
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

## NotebooksProjectsLocationsInstancesRollback

Rollbacks a notebook instance to the previous version.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesRollback(ctx, operations.NotebooksProjectsLocationsInstancesRollbackRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RollbackInstanceRequest: &shared.RollbackInstanceRequest{
            TargetSnapshot: sdk.String("quasi"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        Name: "Mr. Andres King",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.NotebooksProjectsLocationsInstancesRollbackSecurity{
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

## NotebooksProjectsLocationsInstancesSetAccelerator

Updates the guest accelerators of a single Instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesSetAccelerator(ctx, operations.NotebooksProjectsLocationsInstancesSetAcceleratorRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetInstanceAcceleratorRequest: &shared.SetInstanceAcceleratorRequest{
            CoreCount: sdk.String("sed"),
            Type: shared.SetInstanceAcceleratorRequestTypeEnumTpuV2.ToPointer(),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.NotebooksProjectsLocationsInstancesSetAcceleratorSecurity{
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

## NotebooksProjectsLocationsInstancesSetLabels

Replaces all the labels of an Instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesSetLabels(ctx, operations.NotebooksProjectsLocationsInstancesSetLabelsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetInstanceLabelsRequest: &shared.SetInstanceLabelsRequest{
            Labels: map[string]string{
                "ab": "maiores",
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        Name: "Meredith Hickle PhD",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.NotebooksProjectsLocationsInstancesSetLabelsSecurity{
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

## NotebooksProjectsLocationsInstancesSetMachineType

Updates the machine type of a single Instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesSetMachineType(ctx, operations.NotebooksProjectsLocationsInstancesSetMachineTypeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetInstanceMachineTypeRequest: &shared.SetInstanceMachineTypeRequest{
            MachineType: sdk.String("libero"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("totam"),
        Key: sdk.String("dignissimos"),
        Name: "Beatrice Dooley Sr.",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.NotebooksProjectsLocationsInstancesSetMachineTypeSecurity{
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

## NotebooksProjectsLocationsInstancesUpdateConfig

Update Notebook Instance configurations.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesUpdateConfig(ctx, operations.NotebooksProjectsLocationsInstancesUpdateConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateInstanceConfigRequest: &shared.UpdateInstanceConfigRequest{
            Config: &shared.InstanceConfig{
                EnableHealthMonitoring: sdk.Bool(false),
                NotebookUpgradeSchedule: sdk.String("hic"),
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        Name: "Bobby Kutch V",
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("earum"),
    }, operations.NotebooksProjectsLocationsInstancesUpdateConfigSecurity{
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

## NotebooksProjectsLocationsInstancesUpdateMetadataItems

Add/update metadata items for an instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesUpdateMetadataItems(ctx, operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateInstanceMetadataItemsRequest: &shared.UpdateInstanceMetadataItemsRequest{
            Items: map[string]string{
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("dolorem"),
        Name: "Rosa Dibbert",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInstanceMetadataItemsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig

Updates the Shielded instance configuration of a single Instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig(ctx, operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateShieldedInstanceConfigRequest: &shared.UpdateShieldedInstanceConfigRequest{
            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                EnableIntegrityMonitoring: sdk.Bool(false),
                EnableSecureBoot: sdk.Bool(false),
                EnableVtpm: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        Name: "Vera Kuhlman",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("natus"),
    }, operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity{
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

## NotebooksProjectsLocationsInstancesUpgradeInternal

Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsInstancesUpgradeInternal(ctx, operations.NotebooksProjectsLocationsInstancesUpgradeInternalRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpgradeInstanceInternalRequest: &shared.UpgradeInstanceInternalRequest{
            Type: shared.UpgradeInstanceInternalRequestTypeEnumUpgradeOs.ToPointer(),
            VMID: sdk.String("sit"),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        Name: "Sonya Leuschke",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.NotebooksProjectsLocationsInstancesUpgradeInternalSecurity{
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

## NotebooksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsList(ctx, operations.NotebooksProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("amet"),
        Name: "Tomas Hammes",
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(588317),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("similique"),
    }, operations.NotebooksProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsOperationsCancel(ctx, operations.NotebooksProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quaerat": "tempora",
            "vel": "quod",
            "officiis": "qui",
            "dolorum": "a",
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quisquam"),
        Name: "Marvin Renner",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("totam"),
    }, operations.NotebooksProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsOperationsList(ctx, operations.NotebooksProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("sed"),
        Filter: sdk.String("vel"),
        Key: sdk.String("libero"),
        Name: "Joanna Kohler",
        OauthToken: sdk.String("qui"),
        PageSize: sdk.Int64(586784),
        PageToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.NotebooksProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesCreate

Creates a new Runtime in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesCreate(ctx, operations.NotebooksProjectsLocationsRuntimesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RuntimeInput: &shared.RuntimeInput{
            AccessConfig: &shared.RuntimeAccessConfigInput{
                AccessType: shared.RuntimeAccessConfigAccessTypeEnumSingleUser.ToPointer(),
                RuntimeOwner: sdk.String("incidunt"),
            },
            Labels: map[string]string{
                "dolores": "distinctio",
            },
            SoftwareConfig: &shared.RuntimeSoftwareConfigInput{
                CustomGpuDriverPath: sdk.String("facilis"),
                DisableTerminal: sdk.Bool(false),
                EnableHealthMonitoring: sdk.Bool(false),
                IdleShutdown: sdk.Bool(false),
                IdleShutdownTimeout: sdk.Int(396060),
                InstallGpuDriver: sdk.Bool(false),
                Kernels: []shared.ContainerImage{
                    shared.ContainerImage{
                        Repository: sdk.String("molestias"),
                        Tag: sdk.String("temporibus"),
                    },
                    shared.ContainerImage{
                        Repository: sdk.String("qui"),
                        Tag: sdk.String("neque"),
                    },
                },
                MixerDisabled: sdk.Bool(false),
                NotebookUpgradeSchedule: sdk.String("fugit"),
                PostStartupScript: sdk.String("magni"),
                PostStartupScriptBehavior: shared.RuntimeSoftwareConfigPostStartupScriptBehaviorEnumRunEveryStart.ToPointer(),
            },
            VirtualMachine: &shared.VirtualMachineInput{
                VirtualMachineConfig: &shared.VirtualMachineConfigInput{
                    AcceleratorConfig: &shared.RuntimeAcceleratorConfig{
                        CoreCount: sdk.String("sunt"),
                        Type: shared.RuntimeAcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
                    },
                    BootImage: map[string]interface{}{
                        "hic": "voluptatem",
                        "cumque": "soluta",
                        "nobis": "et",
                    },
                    ContainerImages: []shared.ContainerImage{
                        shared.ContainerImage{
                            Repository: sdk.String("ipsum"),
                            Tag: sdk.String("veritatis"),
                        },
                        shared.ContainerImage{
                            Repository: sdk.String("nobis"),
                            Tag: sdk.String("quos"),
                        },
                        shared.ContainerImage{
                            Repository: sdk.String("tempore"),
                            Tag: sdk.String("cupiditate"),
                        },
                        shared.ContainerImage{
                            Repository: sdk.String("aperiam"),
                            Tag: sdk.String("delectus"),
                        },
                    },
                    DataDisk: &shared.LocalDiskInput{
                        InitializeParams: &shared.LocalDiskInitializeParams{
                            Description: sdk.String("dolorem"),
                            DiskName: sdk.String("dolore"),
                            DiskSizeGb: sdk.String("labore"),
                            DiskType: shared.LocalDiskInitializeParamsDiskTypeEnumPdStandard.ToPointer(),
                            Labels: map[string]string{
                                "architecto": "quae",
                                "aut": "quas",
                                "itaque": "consequatur",
                            },
                        },
                        Interface: sdk.String("est"),
                        Mode: sdk.String("repellendus"),
                        Source: sdk.String("porro"),
                        Type: sdk.String("doloribus"),
                    },
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKey: sdk.String("ut"),
                    },
                    InternalIPOnly: sdk.Bool(false),
                    Labels: map[string]string{
                        "cupiditate": "qui",
                        "quae": "laudantium",
                        "odio": "occaecati",
                    },
                    MachineType: sdk.String("voluptatibus"),
                    Metadata: map[string]string{
                        "vero": "omnis",
                        "quis": "ipsum",
                        "delectus": "voluptate",
                        "consectetur": "vero",
                    },
                    Network: sdk.String("tenetur"),
                    NicType: shared.VirtualMachineConfigNicTypeEnumVirtioNet.ToPointer(),
                    ReservedIPRange: sdk.String("hic"),
                    ShieldedInstanceConfig: &shared.RuntimeShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                        EnableVtpm: sdk.Bool(false),
                    },
                    Subnet: sdk.String("distinctio"),
                    Tags: []string{
                        "odio",
                        "similique",
                        "facilis",
                        "vero",
                    },
                },
            },
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("natus"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        RequestID: sdk.String("voluptatibus"),
        RuntimeID: sdk.String("exercitationem"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.NotebooksProjectsLocationsRuntimesCreateSecurity{
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

## NotebooksProjectsLocationsRuntimesDiagnose

Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesDiagnose(ctx, operations.NotebooksProjectsLocationsRuntimesDiagnoseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DiagnoseRuntimeRequest: &shared.DiagnoseRuntimeRequest{
            DiagnosticConfig: &shared.DiagnosticConfig{
                CopyHomeFilesFlagEnabled: sdk.Bool(false),
                GcsBucket: sdk.String("maiores"),
                PacketCaptureFlagEnabled: sdk.Bool(false),
                RelativePath: sdk.String("doloribus"),
                RepairFlagEnabled: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("alias"),
        Key: sdk.String("officia"),
        Name: "Roberta Jenkins",
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ex"),
    }, operations.NotebooksProjectsLocationsRuntimesDiagnoseSecurity{
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

## NotebooksProjectsLocationsRuntimesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesGetIamPolicy(ctx, operations.NotebooksProjectsLocationsRuntimesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("nulla"),
        OptionsRequestedPolicyVersion: sdk.Int64(569211),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        Resource: "nostrum",
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.NotebooksProjectsLocationsRuntimesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesList

Lists Runtimes in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesList(ctx, operations.NotebooksProjectsLocationsRuntimesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        PageSize: sdk.Int64(301831),
        PageToken: sdk.String("ea"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.NotebooksProjectsLocationsRuntimesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuntimesResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesPatch

Update Notebook Runtime configuration.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesPatch(ctx, operations.NotebooksProjectsLocationsRuntimesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RuntimeInput: &shared.RuntimeInput{
            AccessConfig: &shared.RuntimeAccessConfigInput{
                AccessType: shared.RuntimeAccessConfigAccessTypeEnumRuntimeAccessTypeUnspecified.ToPointer(),
                RuntimeOwner: sdk.String("a"),
            },
            Labels: map[string]string{
                "aut": "aut",
                "deleniti": "impedit",
                "aliquam": "fugit",
            },
            SoftwareConfig: &shared.RuntimeSoftwareConfigInput{
                CustomGpuDriverPath: sdk.String("accusamus"),
                DisableTerminal: sdk.Bool(false),
                EnableHealthMonitoring: sdk.Bool(false),
                IdleShutdown: sdk.Bool(false),
                IdleShutdownTimeout: sdk.Int(79522),
                InstallGpuDriver: sdk.Bool(false),
                Kernels: []shared.ContainerImage{
                    shared.ContainerImage{
                        Repository: sdk.String("et"),
                        Tag: sdk.String("dolorum"),
                    },
                    shared.ContainerImage{
                        Repository: sdk.String("laborum"),
                        Tag: sdk.String("placeat"),
                    },
                },
                MixerDisabled: sdk.Bool(false),
                NotebookUpgradeSchedule: sdk.String("velit"),
                PostStartupScript: sdk.String("eum"),
                PostStartupScriptBehavior: shared.RuntimeSoftwareConfigPostStartupScriptBehaviorEnumRunEveryStart.ToPointer(),
            },
            VirtualMachine: &shared.VirtualMachineInput{
                VirtualMachineConfig: &shared.VirtualMachineConfigInput{
                    AcceleratorConfig: &shared.RuntimeAcceleratorConfig{
                        CoreCount: sdk.String("nobis"),
                        Type: shared.RuntimeAcceleratorConfigTypeEnumNvidiaTeslaA100.ToPointer(),
                    },
                    BootImage: map[string]interface{}{
                        "nulla": "voluptas",
                        "libero": "quasi",
                        "tempora": "numquam",
                        "explicabo": "provident",
                    },
                    ContainerImages: []shared.ContainerImage{
                        shared.ContainerImage{
                            Repository: sdk.String("molestiae"),
                            Tag: sdk.String("magnam"),
                        },
                    },
                    DataDisk: &shared.LocalDiskInput{
                        InitializeParams: &shared.LocalDiskInitializeParams{
                            Description: sdk.String("odio"),
                            DiskName: sdk.String("eius"),
                            DiskSizeGb: sdk.String("esse"),
                            DiskType: shared.LocalDiskInitializeParamsDiskTypeEnumPdSsd.ToPointer(),
                            Labels: map[string]string{
                                "fuga": "reprehenderit",
                                "quidem": "fugiat",
                                "ut": "eum",
                            },
                        },
                        Interface: sdk.String("suscipit"),
                        Mode: sdk.String("assumenda"),
                        Source: sdk.String("eos"),
                        Type: sdk.String("praesentium"),
                    },
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKey: sdk.String("quisquam"),
                    },
                    InternalIPOnly: sdk.Bool(false),
                    Labels: map[string]string{
                        "ipsa": "id",
                    },
                    MachineType: sdk.String("quidem"),
                    Metadata: map[string]string{
                        "quo": "illum",
                    },
                    Network: sdk.String("quo"),
                    NicType: shared.VirtualMachineConfigNicTypeEnumGvnic.ToPointer(),
                    ReservedIPRange: sdk.String("eius"),
                    ShieldedInstanceConfig: &shared.RuntimeShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                        EnableVtpm: sdk.Bool(false),
                    },
                    Subnet: sdk.String("eos"),
                    Tags: []string{
                        "ab",
                        "cupiditate",
                    },
                },
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("aspernatur"),
        Name: "Angelica Koelpin MD",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        RequestID: sdk.String("inventore"),
        UpdateMask: sdk.String("nihil"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.NotebooksProjectsLocationsRuntimesPatchSecurity{
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

## NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal

Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal(ctx, operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RefreshRuntimeTokenInternalRequest: &shared.RefreshRuntimeTokenInternalRequest{
            VMID: sdk.String("odio"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("deserunt"),
        Name: "Carol Sawayn",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshRuntimeTokenInternalResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesReportEvent

Report and process a runtime event.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesReportEvent(ctx, operations.NotebooksProjectsLocationsRuntimesReportEventRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportRuntimeEventRequest: &shared.ReportRuntimeEventRequest{
            Event: &shared.Event{
                Details: map[string]string{
                    "incidunt": "atque",
                    "explicabo": "minima",
                    "nisi": "fugit",
                },
                ReportTime: sdk.String("sapiente"),
                Type: shared.EventTypeEnumEventTypeUnspecified.ToPointer(),
            },
            VMID: sdk.String("ratione"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("atque"),
        Key: sdk.String("et"),
        Name: "Ms. Olive Tillman",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.NotebooksProjectsLocationsRuntimesReportEventSecurity{
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

## NotebooksProjectsLocationsRuntimesReset

Resets a Managed Notebook Runtime.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesReset(ctx, operations.NotebooksProjectsLocationsRuntimesResetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResetRuntimeRequest: &shared.ResetRuntimeRequest{
            RequestID: sdk.String("vel"),
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("minima"),
        Name: "Guillermo Balistreri",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.NotebooksProjectsLocationsRuntimesResetSecurity{
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

## NotebooksProjectsLocationsRuntimesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesSetIamPolicy(ctx, operations.NotebooksProjectsLocationsRuntimesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("sapiente"),
                            Expression: sdk.String("consectetur"),
                            Location: sdk.String("esse"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "a",
                            "nulla",
                            "quas",
                        },
                        Role: sdk.String("esse"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quasi"),
                            Expression: sdk.String("a"),
                            Location: sdk.String("error"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "possimus",
                            "quia",
                            "eveniet",
                            "asperiores",
                        },
                        Role: sdk.String("facere"),
                    },
                },
                Etag: sdk.String("veritatis"),
                Version: sdk.Int(159414),
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        Resource: "vel",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("eius"),
    }, operations.NotebooksProjectsLocationsRuntimesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesStart

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesStart(ctx, operations.NotebooksProjectsLocationsRuntimesStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StartRuntimeRequest: &shared.StartRuntimeRequest{
            RequestID: sdk.String("illum"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("dicta"),
        Name: "Delores Hermiston IV",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.NotebooksProjectsLocationsRuntimesStartSecurity{
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

## NotebooksProjectsLocationsRuntimesStop

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesStop(ctx, operations.NotebooksProjectsLocationsRuntimesStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StopRuntimeRequest: &shared.StopRuntimeRequest{
            RequestID: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("at"),
        Name: "Allison Bednar I",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.NotebooksProjectsLocationsRuntimesStopSecurity{
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

## NotebooksProjectsLocationsRuntimesSwitch

Switch a Managed Notebook Runtime.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesSwitch(ctx, operations.NotebooksProjectsLocationsRuntimesSwitchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SwitchRuntimeRequest: &shared.SwitchRuntimeRequest{
            AcceleratorConfig: &shared.RuntimeAcceleratorConfig{
                CoreCount: sdk.String("aut"),
                Type: shared.RuntimeAcceleratorConfigTypeEnumNvidiaTeslaA100.ToPointer(),
            },
            MachineType: sdk.String("eum"),
            RequestID: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("dolor"),
        Name: "Francis Russel",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.NotebooksProjectsLocationsRuntimesSwitchSecurity{
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

## NotebooksProjectsLocationsRuntimesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesTestIamPermissions(ctx, operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "voluptatibus",
            },
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        Resource: "officia",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsRuntimesUpgrade

Upgrades a Managed Notebook Runtime to the latest version.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsRuntimesUpgrade(ctx, operations.NotebooksProjectsLocationsRuntimesUpgradeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpgradeRuntimeRequest: &shared.UpgradeRuntimeRequest{
            RequestID: sdk.String("asperiores"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("porro"),
        Key: sdk.String("quod"),
        Name: "Kathleen Flatley",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("est"),
    }, operations.NotebooksProjectsLocationsRuntimesUpgradeSecurity{
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

## NotebooksProjectsLocationsSchedulesCreate

Creates a new Scheduled Notebook in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsSchedulesCreate(ctx, operations.NotebooksProjectsLocationsSchedulesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScheduleInput: &shared.ScheduleInput{
            CronSchedule: sdk.String("totam"),
            Description: sdk.String("fugiat"),
            ExecutionTemplate: &shared.ExecutionTemplate{
                AcceleratorConfig: &shared.SchedulerAcceleratorConfig{
                    CoreCount: sdk.String("vel"),
                    Type: shared.SchedulerAcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
                },
                ContainerImageURI: sdk.String("quos"),
                DataprocParameters: &shared.DataprocParameters{
                    Cluster: sdk.String("vel"),
                },
                InputNotebookFile: sdk.String("labore"),
                JobType: shared.ExecutionTemplateJobTypeEnumDataproc.ToPointer(),
                KernelSpec: sdk.String("facilis"),
                Labels: map[string]string{
                    "commodi": "in",
                    "corporis": "reiciendis",
                    "assumenda": "nemo",
                },
                MasterType: sdk.String("recusandae"),
                OutputNotebookFolder: sdk.String("aliquid"),
                Parameters: sdk.String("aperiam"),
                ParamsYamlFile: sdk.String("cum"),
                ScaleTier: shared.ExecutionTemplateScaleTierEnumBasic.ToPointer(),
                ServiceAccount: sdk.String("in"),
                Tensorboard: sdk.String("exercitationem"),
                VertexAiParameters: &shared.VertexAIParameters{
                    Env: map[string]string{
                        "facere": "numquam",
                        "doloribus": "suscipit",
                        "reiciendis": "quidem",
                        "saepe": "necessitatibus",
                    },
                    Network: sdk.String("dolore"),
                },
            },
            State: shared.ScheduleStateEnumStateUnspecified.ToPointer(),
            TimeZone: sdk.String("asperiores"),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("a"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        ScheduleID: sdk.String("corporis"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.NotebooksProjectsLocationsSchedulesCreateSecurity{
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

## NotebooksProjectsLocationsSchedulesDelete

Deletes schedule and all underlying jobs

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsSchedulesDelete(ctx, operations.NotebooksProjectsLocationsSchedulesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("similique"),
        Name: "Kelly Hoeger",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        RequestID: sdk.String("dolorum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.NotebooksProjectsLocationsSchedulesDeleteSecurity{
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

## NotebooksProjectsLocationsSchedulesGet

Gets details of schedule

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsSchedulesGet(ctx, operations.NotebooksProjectsLocationsSchedulesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("officiis"),
        Name: "Dustin Ferry",
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.NotebooksProjectsLocationsSchedulesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schedule != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsSchedulesList

Lists schedules in a given project and location.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsSchedulesList(ctx, operations.NotebooksProjectsLocationsSchedulesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("exercitationem"),
        Filter: sdk.String("nobis"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("rerum"),
        OrderBy: sdk.String("sed"),
        PageSize: sdk.Int64(967966),
        PageToken: sdk.String("explicabo"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.NotebooksProjectsLocationsSchedulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchedulesResponse != nil {
        // handle response
    }
}
```

## NotebooksProjectsLocationsSchedulesTrigger

Triggers execution of an existing schedule.

### Example Usage

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
    res, err := s.Projects.NotebooksProjectsLocationsSchedulesTrigger(ctx, operations.NotebooksProjectsLocationsSchedulesTriggerRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolore": "laborum",
            "sed": "in",
            "commodi": "quidem",
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("suscipit"),
        Name: "Rogelio Bins V",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("provident"),
    }, operations.NotebooksProjectsLocationsSchedulesTriggerSecurity{
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
