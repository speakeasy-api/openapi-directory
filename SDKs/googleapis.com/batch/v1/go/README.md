# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.BatchProjectsLocationsJobsCreateRequest{
        Security: operations.BatchProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BatchProjectsLocationsJobsCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            JobID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "ut",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "et",
                                    InstallGpuDrivers: false,
                                    Type: "iste",
                                },
                                shared.Accelerator{
                                    Count: "vitae",
                                    InstallGpuDrivers: true,
                                    Type: "dolores",
                                },
                                shared.Accelerator{
                                    Count: "illum",
                                    InstallGpuDrivers: true,
                                    Type: "vel",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "dolore",
                                    ExistingDisk: "id",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "aspernatur",
                                        Image: "accusantium",
                                        SizeGb: "totam",
                                        Snapshot: "commodi",
                                        Type: "quis",
                                    },
                                },
                            },
                            MachineType: "est",
                            MinCPUPlatform: "aut",
                            ProvisioningModel: "SPOT",
                        },
                    },
                },
                Labels: map[string]string{
                    "voluptas": "omnis",
                    "aut": "illo",
                    "sed": "officiis",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "consectetur",
                        "nobis",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "qui",
                            NoExternalIPAddress: true,
                            Subnetwork: "at",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "ipsum",
                },
            },
            Labels: map[string]string{
                "modi": "sint",
                "inventore": "ut",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "PATH",
                LogsPath: "aut",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "FAILED",
                        NewTaskState: "RUNNING",
                        Type: "TASK_STATE_CHANGED",
                    },
                    PubsubTopic: "dolor",
                },
            },
            Priority: "beatae",
            Status: &shared.JobStatus{
                RunDuration: "veritatis",
                State: "FAILED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "omnis",
                        EventTime: "ipsum",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 1198006251912892506,
                        },
                        Type: "dolores",
                    },
                    shared.StatusEvent{
                        Description: "placeat",
                        EventTime: "vel",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 2587000937929698613,
                        },
                        Type: "mollitia",
                    },
                    shared.StatusEvent{
                        Description: "voluptas",
                        EventTime: "quam",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 7481608503761597087,
                        },
                        Type: "qui",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "unde": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "autem": "qui",
                            "ut": "itaque",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "neque",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "et",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "esse",
                    PermissiveSSH: true,
                    RequireHostsFile: false,
                    TaskCount: "velit",
                    TaskCountPerNode: "cumque",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "voluptates": "magni",
                                "et": "optio",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "qui",
                            CPUMilli: "earum",
                            MemoryMib: "illo",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "ut": "consequatur",
                                "dolor": "commodi",
                            },
                        },
                        Environments: map[string]string{
                            "reprehenderit": "consectetur",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        1937101031588528881,
                                        6604365855503062775,
                                        1836598054518427835,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 7540276489530073149,
                        MaxRunDuration: "quas",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "ipsa",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "perferendis",
                                    },
                                    Entrypoint: "atque",
                                    ImageURI: "ratione",
                                    Options: "quisquam",
                                    Password: "explicabo",
                                    Username: "ea",
                                    Volumes: []string{
                                        "eum",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "et": "rerum",
                                        "reiciendis": "quis",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "minima",
                                    Text: "necessitatibus",
                                },
                                Timeout: "est",
                            },
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "labore",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "ad",
                                        "expedita",
                                    },
                                    Entrypoint: "vel",
                                    ImageURI: "qui",
                                    Options: "modi",
                                    Password: "nihil",
                                    Username: "tempora",
                                    Volumes: []string{
                                        "eaque",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "sit": "autem",
                                        "quis": "vel",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "placeat",
                                    Text: "qui",
                                },
                                Timeout: "nisi",
                            },
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "porro",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "accusamus",
                                    },
                                    Entrypoint: "numquam",
                                    ImageURI: "laborum",
                                    Options: "rerum",
                                    Password: "ut",
                                    Username: "laborum",
                                    Volumes: []string{
                                        "quis",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "soluta": "aperiam",
                                        "consequuntur": "excepturi",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "inventore",
                                    Text: "delectus",
                                },
                                Timeout: "ipsa",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "animi",
                                Gcs: &shared.Gcs{
                                    RemotePath: "ut",
                                },
                                MountOptions: []string{
                                    "fuga",
                                },
                                MountPath: "sed",
                                Nfs: &shared.Nfs{
                                    RemotePath: "sed",
                                    Server: "et",
                                },
                            },
                            shared.Volume{
                                DeviceName: "consequuntur",
                                Gcs: &shared.Gcs{
                                    RemotePath: "non",
                                },
                                MountOptions: []string{
                                    "provident",
                                    "molestiae",
                                    "pariatur",
                                },
                                MountPath: "quasi",
                                Nfs: &shared.Nfs{
                                    RemotePath: "corrupti",
                                    Server: "enim",
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: "qui",
                    PermissiveSSH: true,
                    RequireHostsFile: false,
                    TaskCount: "modi",
                    TaskCountPerNode: "neque",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "et": "est",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "ex": "voluptatem",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "temporibus": "velit",
                                "quae": "est",
                                "ut": "necessitatibus",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "in",
                            CPUMilli: "possimus",
                            MemoryMib: "voluptatem",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "doloribus": "saepe",
                            },
                        },
                        Environments: map[string]string{
                            "earum": "et",
                            "ut": "asperiores",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        6787227741588449494,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 4883506937319508494,
                        MaxRunDuration: "nihil",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "non",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "possimus",
                                        "illo",
                                        "qui",
                                    },
                                    Entrypoint: "quia",
                                    ImageURI: "ipsam",
                                    Options: "ducimus",
                                    Password: "enim",
                                    Username: "blanditiis",
                                    Volumes: []string{
                                        "delectus",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "dolore": "repellat",
                                        "velit": "officia",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "sunt",
                                    Text: "voluptas",
                                },
                                Timeout: "amet",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "a",
                                Gcs: &shared.Gcs{
                                    RemotePath: "qui",
                                },
                                MountOptions: []string{
                                    "autem",
                                },
                                MountPath: "corporis",
                                Nfs: &shared.Nfs{
                                    RemotePath: "dicta",
                                    Server: "rem",
                                },
                            },
                            shared.Volume{
                                DeviceName: "doloremque",
                                Gcs: &shared.Gcs{
                                    RemotePath: "quae",
                                },
                                MountOptions: []string{
                                    "recusandae",
                                    "qui",
                                },
                                MountPath: "minus",
                                Nfs: &shared.Nfs{
                                    RemotePath: "et",
                                    Server: "rerum",
                                },
                            },
                            shared.Volume{
                                DeviceName: "ut",
                                Gcs: &shared.Gcs{
                                    RemotePath: "rem",
                                },
                                MountOptions: []string{
                                    "et",
                                    "reiciendis",
                                    "aspernatur",
                                },
                                MountPath: "praesentium",
                                Nfs: &shared.Nfs{
                                    RemotePath: "porro",
                                    Server: "nihil",
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: "adipisci",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "accusantium",
                    TaskCountPerNode: "atque",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "quidem": "est",
                                "quo": "vero",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "totam": "deserunt",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "repellat": "beatae",
                                "omnis": "totam",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "aut",
                            CPUMilli: "et",
                            MemoryMib: "magni",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "et": "culpa",
                                "repellendus": "voluptas",
                            },
                        },
                        Environments: map[string]string{
                            "veniam": "architecto",
                            "molestias": "rerum",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        1215184329252422444,
                                        4178331056796501958,
                                        8590975497400104807,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        5127216006209335150,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        5850174490929081658,
                                        434570727381690637,
                                        2506834319279501248,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 8019821597217977465,
                        MaxRunDuration: "et",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "ipsum",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "et",
                                        "vero",
                                    },
                                    Entrypoint: "voluptatem",
                                    ImageURI: "ex",
                                    Options: "magni",
                                    Password: "vero",
                                    Username: "distinctio",
                                    Volumes: []string{
                                        "ea",
                                        "non",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "nam": "beatae",
                                        "quae": "qui",
                                        "magni": "minus",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "aut",
                                    Text: "neque",
                                },
                                Timeout: "iusto",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "debitis",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "enim",
                                        "ut",
                                    },
                                    Entrypoint: "non",
                                    ImageURI: "nihil",
                                    Options: "laborum",
                                    Password: "recusandae",
                                    Username: "nihil",
                                    Volumes: []string{
                                        "iste",
                                        "perferendis",
                                        "id",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "hic": "voluptatem",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "libero",
                                    Text: "qui",
                                },
                                Timeout: "omnis",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "nostrum",
                                Gcs: &shared.Gcs{
                                    RemotePath: "non",
                                },
                                MountOptions: []string{
                                    "repellat",
                                    "quo",
                                },
                                MountPath: "dolorum",
                                Nfs: &shared.Nfs{
                                    RemotePath: "laboriosam",
                                    Server: "velit",
                                },
                            },
                            shared.Volume{
                                DeviceName: "ea",
                                Gcs: &shared.Gcs{
                                    RemotePath: "tempore",
                                },
                                MountOptions: []string{
                                    "aut",
                                },
                                MountPath: "tempora",
                                Nfs: &shared.Nfs{
                                    RemotePath: "aliquid",
                                    Server: "mollitia",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BatchProjectsLocationsJobsCreate` - Create a Job.
* `BatchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `BatchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `BatchProjectsLocationsList` - Lists information about the supported locations for this service.
* `BatchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BatchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BatchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BatchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `BatchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
* `BatchProjectsLocationsTasksGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BatchProjectsLocationsTasksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BatchProjectsLocationsTasksTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
