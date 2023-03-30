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
        Security: operations.BatchProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BatchProjectsLocationsJobsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            JobID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "debitis",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "delectus",
                                    InstallGpuDrivers: false,
                                    Type: "tempora",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "suscipit",
                                Image: "molestiae",
                                SizeGb: "minus",
                                Snapshot: "placeat",
                                Type: "voluptatum",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "excepturi",
                                    ExistingDisk: "nisi",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "recusandae",
                                        Image: "temporibus",
                                        SizeGb: "ab",
                                        Snapshot: "quis",
                                        Type: "veritatis",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "deserunt",
                                    ExistingDisk: "perferendis",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "ipsam",
                                        Image: "repellendus",
                                        SizeGb: "sapiente",
                                        Snapshot: "quo",
                                        Type: "odit",
                                    },
                                },
                            },
                            MachineType: "at",
                            MinCPUPlatform: "at",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "molestiae",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "quod",
                                    InstallGpuDrivers: false,
                                    Type: "esse",
                                },
                                shared.Accelerator{
                                    Count: "totam",
                                    InstallGpuDrivers: false,
                                    Type: "porro",
                                },
                                shared.Accelerator{
                                    Count: "dolorum",
                                    InstallGpuDrivers: false,
                                    Type: "dicta",
                                },
                                shared.Accelerator{
                                    Count: "nam",
                                    InstallGpuDrivers: false,
                                    Type: "officia",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "occaecati",
                                Image: "fugit",
                                SizeGb: "deleniti",
                                Snapshot: "hic",
                                Type: "optio",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "beatae",
                                    ExistingDisk: "commodi",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "molestiae",
                                        Image: "modi",
                                        SizeGb: "qui",
                                        Snapshot: "impedit",
                                        Type: "cum",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "esse",
                                    ExistingDisk: "ipsum",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "excepturi",
                                        Image: "aspernatur",
                                        SizeGb: "perferendis",
                                        Snapshot: "ad",
                                        Type: "natus",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "sed",
                                    ExistingDisk: "iste",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "dolor",
                                        Image: "natus",
                                        SizeGb: "laboriosam",
                                        Snapshot: "hic",
                                        Type: "saepe",
                                    },
                                },
                            },
                            MachineType: "fuga",
                            MinCPUPlatform: "in",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "iure": "saepe",
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "mollitia",
                        "laborum",
                        "dolores",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "corporis",
                            NoExternalIPAddress: false,
                            Subnetwork: "explicabo",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "Emerald.Mohr@hotmail.com",
                    Scopes: []string{
                        "accusantium",
                        "iure",
                        "culpa",
                    },
                },
            },
            Labels: map[string]string{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "CLOUD_LOGGING",
                LogsPath: "numquam",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "RUNNING",
                        NewTaskState: "ASSIGNED",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "error",
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "QUEUED",
                        NewTaskState: "ASSIGNED",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "laborum",
                },
            },
            Priority: "animi",
            Status: &shared.JobStatus{
                RunDuration: "enim",
                State: "STATE_UNSPECIFIED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "sequi",
                        EventTime: "tenetur",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 368725,
                        },
                        TaskState: "RUNNING",
                        Type: "possimus",
                    },
                    shared.StatusEvent{
                        Description: "aut",
                        EventTime: "quasi",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 622846,
                        },
                        TaskState: "SUCCEEDED",
                        Type: "laborum",
                    },
                    shared.StatusEvent{
                        Description: "quasi",
                        EventTime: "reiciendis",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 976460,
                        },
                        TaskState: "SUCCEEDED",
                        Type: "nihil",
                    },
                    shared.StatusEvent{
                        Description: "praesentium",
                        EventTime: "voluptatibus",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 55714,
                        },
                        TaskState: "RUNNING",
                        Type: "voluptate",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "perferendis": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "reprehenderit": "ut",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "dicta",
                                    Image: "corporis",
                                    SizeGb: "dolore",
                                    Snapshot: "iusto",
                                    Type: "dicta",
                                },
                                MachineType: "harum",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "accusamus",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "commodi",
                                    Image: "repudiandae",
                                    SizeGb: "quae",
                                    Snapshot: "ipsum",
                                    Type: "quidem",
                                },
                                MachineType: "molestias",
                                ProvisioningModel: "SPOT",
                                TaskPack: "pariatur",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "modi",
                                    Image: "praesentium",
                                    SizeGb: "rem",
                                    Snapshot: "voluptates",
                                    Type: "quasi",
                                },
                                MachineType: "repudiandae",
                                ProvisioningModel: "SPOT",
                                TaskPack: "veritatis",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "itaque",
                                    Image: "incidunt",
                                    SizeGb: "enim",
                                    Snapshot: "consequatur",
                                    Type: "est",
                                },
                                MachineType: "quibusdam",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "deserunt",
                            },
                        },
                    },
                    "distinctio": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "labore": "modi",
                            "qui": "aliquid",
                            "cupiditate": "quos",
                            "perferendis": "magni",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "ipsam",
                                    Image: "alias",
                                    SizeGb: "fugit",
                                    Snapshot: "dolorum",
                                    Type: "excepturi",
                                },
                                MachineType: "tempora",
                                ProvisioningModel: "SPOT",
                                TaskPack: "tempore",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "labore",
                                    Image: "delectus",
                                    SizeGb: "eum",
                                    Snapshot: "non",
                                    Type: "eligendi",
                                },
                                MachineType: "sint",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "provident",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "necessitatibus",
                                    Image: "sint",
                                    SizeGb: "officia",
                                    Snapshot: "dolor",
                                    Type: "debitis",
                                },
                                MachineType: "a",
                                ProvisioningModel: "SPOT",
                                TaskPack: "in",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "in",
                                    Image: "illum",
                                    SizeGb: "maiores",
                                    Snapshot: "rerum",
                                    Type: "dicta",
                                },
                                MachineType: "magnam",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "facere",
                            },
                        },
                    },
                    "ea": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "laborum": "accusamus",
                            "non": "occaecati",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "accusamus",
                                    Image: "delectus",
                                    SizeGb: "quidem",
                                    Snapshot: "provident",
                                    Type: "nam",
                                },
                                MachineType: "id",
                                ProvisioningModel: "SPOT",
                                TaskPack: "deleniti",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "sapiente",
                                    Image: "amet",
                                    SizeGb: "deserunt",
                                    Snapshot: "nisi",
                                    Type: "vel",
                                },
                                MachineType: "natus",
                                ProvisioningModel: "SPOT",
                                TaskPack: "molestiae",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "nihil",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "magnam",
                    TaskCountPerNode: "distinctio",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "labore",
                                KeyName: "labore",
                            },
                            SecretVariables: map[string]string{
                                "natus": "nobis",
                                "eum": "vero",
                            },
                            Variables: map[string]string{
                                "architecto": "magnam",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "et",
                                KeyName: "excepturi",
                            },
                            SecretVariables: map[string]string{
                                "provident": "quos",
                                "sint": "accusantium",
                            },
                            Variables: map[string]string{
                                "reiciendis": "mollitia",
                                "ad": "eum",
                                "dolor": "necessitatibus",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "odit",
                                KeyName: "nemo",
                            },
                            SecretVariables: map[string]string{
                                "iure": "doloribus",
                            },
                            Variables: map[string]string{
                                "eius": "maxime",
                                "deleniti": "facilis",
                                "in": "architecto",
                                "architecto": "repudiandae",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "ullam",
                            CPUMilli: "expedita",
                            MemoryMib: "nihil",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "repellat",
                                KeyName: "quibusdam",
                            },
                            SecretVariables: map[string]string{
                                "saepe": "pariatur",
                            },
                            Variables: map[string]string{
                                "consequuntur": "praesentium",
                            },
                        },
                        Environments: map[string]string{
                            "magni": "sunt",
                            "quo": "illum",
                            "pariatur": "maxime",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        407183,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        982575,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 697429,
                        MaxRunDuration: "ipsam",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "autem",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "eaque",
                                        "pariatur",
                                        "nemo",
                                    },
                                    Entrypoint: "voluptatibus",
                                    ImageURI: "perferendis",
                                    Options: "fugiat",
                                    Password: "amet",
                                    Username: "Adolf_Runolfsdottir",
                                    Volumes: []string{
                                        "nobis",
                                        "dolores",
                                        "quis",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "totam",
                                        KeyName: "dignissimos",
                                    },
                                    SecretVariables: map[string]string{
                                        "quis": "nesciunt",
                                    },
                                    Variables: map[string]string{
                                        "perferendis": "dolores",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "minus",
                                    Text: "quam",
                                },
                                Timeout: "dolor",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "vero",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "hic",
                                        "recusandae",
                                    },
                                    Entrypoint: "omnis",
                                    ImageURI: "facilis",
                                    Options: "perspiciatis",
                                    Password: "voluptatem",
                                    Username: "Ottilie_Cruickshank",
                                    Volumes: []string{
                                        "occaecati",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "rerum",
                                        KeyName: "adipisci",
                                    },
                                    SecretVariables: map[string]string{
                                        "earum": "modi",
                                        "iste": "dolorum",
                                        "deleniti": "pariatur",
                                        "provident": "nobis",
                                    },
                                    Variables: map[string]string{
                                        "delectus": "quaerat",
                                        "quos": "aliquid",
                                        "dolorem": "dolorem",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "dolor",
                                    Text: "qui",
                                },
                                Timeout: "ipsum",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "excepturi",
                                Gcs: &shared.Gcs{
                                    RemotePath: "cum",
                                },
                                MountOptions: []string{
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
                            shared.Volume{
                                DeviceName: "quidem",
                                Gcs: &shared.Gcs{
                                    RemotePath: "voluptatibus",
                                },
                                MountOptions: []string{
                                    "natus",
                                    "eos",
                                },
                                MountPath: "atque",
                                Nfs: &shared.Nfs{
                                    RemotePath: "sit",
                                    Server: "fugiat",
                                },
                            },
                            shared.Volume{
                                DeviceName: "ab",
                                Gcs: &shared.Gcs{
                                    RemotePath: "soluta",
                                },
                                MountOptions: []string{
                                    "iusto",
                                    "voluptate",
                                    "dolorum",
                                },
                                MountPath: "deleniti",
                                Nfs: &shared.Nfs{
                                    RemotePath: "omnis",
                                    Server: "necessitatibus",
                                },
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
