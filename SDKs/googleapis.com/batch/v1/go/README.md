# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/batch/v1/go
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

    req := operations.BatchProjectsLocationsJobsCreateRequest{
        DollarXgafv: "2",
        JobInput: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "distinctio",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "unde",
                                    InstallGpuDrivers: false,
                                    Type: "nulla",
                                },
                                shared.Accelerator{
                                    Count: "corrupti",
                                    InstallGpuDrivers: false,
                                    Type: "illum",
                                },
                                shared.Accelerator{
                                    Count: "vel",
                                    InstallGpuDrivers: false,
                                    Type: "error",
                                },
                                shared.Accelerator{
                                    Count: "deserunt",
                                    InstallGpuDrivers: false,
                                    Type: "suscipit",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "iure",
                                Image: "magnam",
                                SizeGb: "debitis",
                                Snapshot: "ipsa",
                                Type: "delectus",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "suscipit",
                                    ExistingDisk: "molestiae",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "minus",
                                        Image: "placeat",
                                        SizeGb: "voluptatum",
                                        Snapshot: "iusto",
                                        Type: "excepturi",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "nisi",
                                    ExistingDisk: "recusandae",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "temporibus",
                                        Image: "ab",
                                        SizeGb: "quis",
                                        Snapshot: "veritatis",
                                        Type: "deserunt",
                                    },
                                },
                            },
                            MachineType: "perferendis",
                            MinCPUPlatform: "ipsam",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "sapiente",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "odit",
                                    InstallGpuDrivers: false,
                                    Type: "at",
                                },
                                shared.Accelerator{
                                    Count: "at",
                                    InstallGpuDrivers: false,
                                    Type: "maiores",
                                },
                                shared.Accelerator{
                                    Count: "molestiae",
                                    InstallGpuDrivers: false,
                                    Type: "quod",
                                },
                                shared.Accelerator{
                                    Count: "quod",
                                    InstallGpuDrivers: false,
                                    Type: "esse",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "totam",
                                Image: "porro",
                                SizeGb: "dolorum",
                                Snapshot: "dicta",
                                Type: "nam",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "occaecati",
                                    ExistingDisk: "fugit",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "deleniti",
                                        Image: "hic",
                                        SizeGb: "optio",
                                        Snapshot: "totam",
                                        Type: "beatae",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "commodi",
                                    ExistingDisk: "molestiae",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "modi",
                                        Image: "qui",
                                        SizeGb: "impedit",
                                        Snapshot: "cum",
                                        Type: "esse",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "ipsum",
                                    ExistingDisk: "excepturi",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "aspernatur",
                                        Image: "perferendis",
                                        SizeGb: "ad",
                                        Snapshot: "natus",
                                        Type: "sed",
                                    },
                                },
                            },
                            MachineType: "iste",
                            MinCPUPlatform: "dolor",
                            ProvisioningModel: "SPOT",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "laboriosam",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "saepe",
                                    InstallGpuDrivers: false,
                                    Type: "fuga",
                                },
                                shared.Accelerator{
                                    Count: "in",
                                    InstallGpuDrivers: false,
                                    Type: "corporis",
                                },
                                shared.Accelerator{
                                    Count: "iste",
                                    InstallGpuDrivers: false,
                                    Type: "iure",
                                },
                                shared.Accelerator{
                                    Count: "saepe",
                                    InstallGpuDrivers: false,
                                    Type: "quidem",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "architecto",
                                Image: "ipsa",
                                SizeGb: "reiciendis",
                                Snapshot: "est",
                                Type: "mollitia",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "dolores",
                                    ExistingDisk: "dolorem",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "corporis",
                                        Image: "explicabo",
                                        SizeGb: "nobis",
                                        Snapshot: "enim",
                                        Type: "omnis",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "nemo",
                                    ExistingDisk: "minima",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "excepturi",
                                        Image: "accusantium",
                                        SizeGb: "iure",
                                        Snapshot: "culpa",
                                        Type: "doloribus",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "sapiente",
                                    ExistingDisk: "architecto",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "mollitia",
                                        Image: "dolorem",
                                        SizeGb: "culpa",
                                        Snapshot: "consequuntur",
                                        Type: "repellat",
                                    },
                                },
                            },
                            MachineType: "mollitia",
                            MinCPUPlatform: "occaecati",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "quam": "molestiae",
                    "velit": "error",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "quis",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "laborum",
                            NoExternalIPAddress: false,
                            Subnetwork: "animi",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "Britney94@gmail.com",
                    Scopes: []string{
                        "id",
                        "possimus",
                    },
                },
            },
            Labels: map[string]string{
                "quasi": "error",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "PATH",
                LogsPath: "laborum",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "DELETION_IN_PROGRESS",
                        NewTaskState: "SUCCEEDED",
                        Type: "TASK_STATE_CHANGED",
                    },
                    PubsubTopic: "nihil",
                },
            },
            Priority: "praesentium",
            Status: &shared.JobStatus{
                RunDuration: "voluptatibus",
                State: "STATE_UNSPECIFIED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "voluptate",
                        EventTime: "cum",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 19987,
                        },
                        TaskState: "STATE_UNSPECIFIED",
                        Type: "reprehenderit",
                    },
                    shared.StatusEvent{
                        Description: "ut",
                        EventTime: "maiores",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 120196,
                        },
                        TaskState: "ASSIGNED",
                        Type: "dolore",
                    },
                    shared.StatusEvent{
                        Description: "iusto",
                        EventTime: "dicta",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 688661,
                        },
                        TaskState: "PENDING",
                        Type: "accusamus",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "repudiandae": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "ipsum": "quidem",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "excepturi",
                                    Image: "pariatur",
                                    SizeGb: "modi",
                                    Snapshot: "praesentium",
                                    Type: "rem",
                                },
                                MachineType: "voluptates",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "repudiandae",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "sint",
                                    Image: "veritatis",
                                    SizeGb: "itaque",
                                    Snapshot: "incidunt",
                                    Type: "enim",
                                },
                                MachineType: "consequatur",
                                ProvisioningModel: "SPOT",
                                TaskPack: "quibusdam",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "explicabo",
                                    Image: "deserunt",
                                    SizeGb: "distinctio",
                                    Snapshot: "quibusdam",
                                    Type: "labore",
                                },
                                MachineType: "modi",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "aliquid",
                            },
                        },
                    },
                    "cupiditate": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "perferendis": "magni",
                            "assumenda": "ipsam",
                            "alias": "fugit",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "excepturi",
                                    Image: "tempora",
                                    SizeGb: "facilis",
                                    Snapshot: "tempore",
                                    Type: "labore",
                                },
                                MachineType: "delectus",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "non",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "eligendi",
                                    Image: "sint",
                                    SizeGb: "aliquid",
                                    Snapshot: "provident",
                                    Type: "necessitatibus",
                                },
                                MachineType: "sint",
                                ProvisioningModel: "SPOT",
                                TaskPack: "dolor",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "debitis",
                                    Image: "a",
                                    SizeGb: "dolorum",
                                    Snapshot: "in",
                                    Type: "in",
                                },
                                MachineType: "illum",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "rerum",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "magnam",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "cumque",
                    TaskCountPerNode: "facere",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "aliquid",
                                KeyName: "laborum",
                            },
                            SecretVariables: map[string]string{
                                "non": "occaecati",
                                "enim": "accusamus",
                                "delectus": "quidem",
                                "provident": "nam",
                            },
                            Variables: map[string]string{
                                "blanditiis": "deleniti",
                                "sapiente": "amet",
                                "deserunt": "nisi",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "vel",
                                KeyName: "natus",
                            },
                            SecretVariables: map[string]string{
                                "molestiae": "perferendis",
                                "nihil": "magnam",
                                "distinctio": "id",
                            },
                            Variables: map[string]string{
                                "labore": "suscipit",
                                "natus": "nobis",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "eum",
                            CPUMilli: "vero",
                            MemoryMib: "aspernatur",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "architecto",
                                KeyName: "magnam",
                            },
                            SecretVariables: map[string]string{
                                "excepturi": "ullam",
                            },
                            Variables: map[string]string{
                                "quos": "sint",
                                "accusantium": "mollitia",
                                "reiciendis": "mollitia",
                            },
                        },
                        Environments: map[string]string{
                            "eum": "dolor",
                            "necessitatibus": "odit",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        984043,
                                        891924,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        537023,
                                        703889,
                                        447926,
                                        100226,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 99569,
                        MaxRunDuration: "repudiandae",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "expedita",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "repellat",
                                        "quibusdam",
                                    },
                                    Entrypoint: "sed",
                                    ImageURI: "saepe",
                                    Options: "pariatur",
                                    Password: "accusantium",
                                    Username: "Carroll.Lang",
                                    Volumes: []string{
                                        "quo",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "illum",
                                        KeyName: "pariatur",
                                    },
                                    SecretVariables: map[string]string{
                                        "ea": "excepturi",
                                        "odit": "ea",
                                        "accusantium": "ab",
                                        "maiores": "quidem",
                                    },
                                    Variables: map[string]string{
                                        "voluptate": "autem",
                                        "nam": "eaque",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "pariatur",
                                    Text: "nemo",
                                },
                                Timeout: "voluptatibus",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "perferendis",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "amet",
                                        "aut",
                                        "cumque",
                                        "corporis",
                                    },
                                    Entrypoint: "hic",
                                    ImageURI: "libero",
                                    Options: "nobis",
                                    Password: "dolores",
                                    Username: "Eulalia.Lebsack",
                                    Volumes: []string{
                                        "nesciunt",
                                        "eos",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "perferendis",
                                        KeyName: "dolores",
                                    },
                                    SecretVariables: map[string]string{
                                        "quam": "dolor",
                                        "vero": "nostrum",
                                        "hic": "recusandae",
                                        "omnis": "facilis",
                                    },
                                    Variables: map[string]string{
                                        "voluptatem": "porro",
                                        "consequuntur": "blanditiis",
                                        "error": "eaque",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "occaecati",
                                    Text: "rerum",
                                },
                                Timeout: "adipisci",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "earum",
                                Gcs: &shared.Gcs{
                                    RemotePath: "modi",
                                },
                                MountOptions: []string{
                                    "dolorum",
                                    "deleniti",
                                    "pariatur",
                                },
                                MountPath: "provident",
                                Nfs: &shared.Nfs{
                                    RemotePath: "nobis",
                                    Server: "libero",
                                },
                            },
                            shared.Volume{
                                DeviceName: "delectus",
                                Gcs: &shared.Gcs{
                                    RemotePath: "quaerat",
                                },
                                MountOptions: []string{
                                    "aliquid",
                                    "dolorem",
                                    "dolorem",
                                },
                                MountPath: "dolor",
                                Nfs: &shared.Nfs{
                                    RemotePath: "qui",
                                    Server: "ipsum",
                                },
                            },
                            shared.Volume{
                                DeviceName: "hic",
                                Gcs: &shared.Gcs{
                                    RemotePath: "excepturi",
                                },
                                MountOptions: []string{
                                    "voluptate",
                                    "dignissimos",
                                    "reiciendis",
                                },
                                MountPath: "amet",
                                Nfs: &shared.Nfs{
                                    RemotePath: "dolorum",
                                    Server: "numquam",
                                },
                            },
                            shared.Volume{
                                DeviceName: "veritatis",
                                Gcs: &shared.Gcs{
                                    RemotePath: "ipsa",
                                },
                                MountOptions: []string{
                                    "iure",
                                },
                                MountPath: "odio",
                                Nfs: &shared.Nfs{
                                    RemotePath: "quaerat",
                                    Server: "accusamus",
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "quidem",
        Alt: "proto",
        Callback: "voluptas",
        Fields: "natus",
        JobID: "eos",
        Key: "atque",
        OauthToken: "sit",
        Parent: "fugiat",
        PrettyPrint: false,
        QuotaUser: "ab",
        RequestID: "soluta",
        UploadType: "dolorum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, req, operations.BatchProjectsLocationsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BatchProjectsLocationsJobsCreate` - Create a Job.
* `BatchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `BatchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `BatchProjectsLocationsList` - Lists information about the supported locations for this service.
* `BatchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BatchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BatchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BatchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `BatchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
