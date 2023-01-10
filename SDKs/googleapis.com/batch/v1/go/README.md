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
            Parent: "nostrum",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "tempora",
            Alt: "media",
            Callback: "deserunt",
            Fields: "nihil",
            JobID: "provident",
            Key: "magni",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "accusamus",
            RequestID: "asperiores",
            UploadType: "ea",
            UploadProtocol: "veritatis",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: true,
                        InstanceTemplate: "molestiae",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "vel",
                                    InstallGpuDrivers: true,
                                    Type: "qui",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "nulla",
                                    ExistingDisk: "modi",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "dignissimos",
                                        Image: "beatae",
                                        SizeGb: "esse",
                                        Snapshot: "et",
                                        Type: "eum",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "aspernatur",
                                    ExistingDisk: "molestiae",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "minima",
                                        Image: "modi",
                                        SizeGb: "quo",
                                        Snapshot: "molestiae",
                                        Type: "porro",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "provident",
                                    ExistingDisk: "sequi",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "molestiae",
                                        Image: "dolor",
                                        SizeGb: "pariatur",
                                        Snapshot: "hic",
                                        Type: "sed",
                                    },
                                },
                            },
                            MachineType: "dolores",
                            MinCPUPlatform: "quae",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: true,
                        InstanceTemplate: "reprehenderit",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "nesciunt",
                                    InstallGpuDrivers: true,
                                    Type: "dolores",
                                },
                                shared.Accelerator{
                                    Count: "dicta",
                                    InstallGpuDrivers: true,
                                    Type: "et",
                                },
                                shared.Accelerator{
                                    Count: "nisi",
                                    InstallGpuDrivers: true,
                                    Type: "totam",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "ea",
                                    ExistingDisk: "ipsa",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "sed",
                                        Image: "voluptatem",
                                        SizeGb: "repellendus",
                                        Snapshot: "beatae",
                                        Type: "cumque",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "pariatur",
                                    ExistingDisk: "possimus",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "aperiam",
                                        Image: "accusantium",
                                        SizeGb: "et",
                                        Snapshot: "mollitia",
                                        Type: "voluptatum",
                                    },
                                },
                            },
                            MachineType: "nisi",
                            MinCPUPlatform: "pariatur",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "earum",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "ab",
                                    InstallGpuDrivers: true,
                                    Type: "earum",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "neque",
                                    ExistingDisk: "ullam",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "adipisci",
                                        Image: "quia",
                                        SizeGb: "soluta",
                                        Snapshot: "nulla",
                                        Type: "aut",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "voluptatibus",
                                    ExistingDisk: "omnis",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "deleniti",
                                        Image: "libero",
                                        SizeGb: "dolorum",
                                        Snapshot: "voluptatem",
                                        Type: "impedit",
                                    },
                                },
                            },
                            MachineType: "ipsa",
                            MinCPUPlatform: "qui",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                },
                Labels: map[string]string{
                    "iste": "fugiat",
                    "minus": "laborum",
                    "eos": "illo",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "debitis",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "dolorem",
                            NoExternalIPAddress: false,
                            Subnetwork: "et",
                        },
                        shared.NetworkInterface{
                            Network: "ad",
                            NoExternalIPAddress: true,
                            Subnetwork: "et",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "beatae",
                },
            },
            Labels: map[string]string{
                "ea": "libero",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "DESTINATION_UNSPECIFIED",
                LogsPath: "eos",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "DELETION_IN_PROGRESS",
                        NewTaskState: "RUNNING",
                        Type: "JOB_STATE_CHANGED",
                    },
                    PubsubTopic: "voluptas",
                },
            },
            Priority: "sapiente",
            Status: &shared.JobStatus{
                RunDuration: "iure",
                State: "STATE_UNSPECIFIED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "quod",
                        EventTime: "soluta",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 4831452067150929985,
                        },
                        Type: "qui",
                    },
                    shared.StatusEvent{
                        Description: "doloremque",
                        EventTime: "nisi",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 2332523520286397549,
                        },
                        Type: "omnis",
                    },
                    shared.StatusEvent{
                        Description: "debitis",
                        EventTime: "voluptatem",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 1264816207080619033,
                        },
                        Type: "voluptatem",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "laboriosam": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "aut": "aut",
                            "libero": "dolorem",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "sunt",
                                ProvisioningModel: "SPOT",
                                TaskPack: "autem",
                            },
                        },
                    },
                    "commodi": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "incidunt": "dolorum",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "molestiae",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "tempora",
                            },
                        },
                    },
                    "distinctio": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "rem": "est",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "qui",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "et",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "et",
                    PermissiveSSH: true,
                    RequireHostsFile: true,
                    TaskCount: "ex",
                    TaskCountPerNode: "sint",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "voluptatem": "sapiente",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "est": "sit",
                                "repellat": "earum",
                                "in": "ut",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "laboriosam": "numquam",
                                "aperiam": "veniam",
                                "in": "voluptatem",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "ut",
                            CPUMilli: "debitis",
                            MemoryMib: "id",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "ut": "fuga",
                                "velit": "ullam",
                            },
                        },
                        Environments: map[string]string{
                            "suscipit": "molestiae",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        3820347514480084000,
                                        3344327154756972185,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        6937037417593652038,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        5933233700664786384,
                                        5035964688981552535,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 8505737205951363350,
                        MaxRunDuration: "voluptates",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "et",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "corporis",
                                        "ea",
                                    },
                                    Entrypoint: "adipisci",
                                    ImageURI: "sit",
                                    Options: "sunt",
                                    Password: "numquam",
                                    Username: "et",
                                    Volumes: []string{
                                        "consequatur",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "delectus": "vel",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "impedit",
                                    Text: "animi",
                                },
                                Timeout: "sint",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "dolores",
                                Gcs: &shared.Gcs{
                                    RemotePath: "sed",
                                },
                                MountOptions: []string{
                                    "quidem",
                                },
                                MountPath: "reiciendis",
                                Nfs: &shared.Nfs{
                                    RemotePath: "velit",
                                    Server: "ut",
                                },
                            },
                            shared.Volume{
                                DeviceName: "cumque",
                                Gcs: &shared.Gcs{
                                    RemotePath: "dolor",
                                },
                                MountOptions: []string{
                                    "dolor",
                                    "et",
                                    "officiis",
                                },
                                MountPath: "quo",
                                Nfs: &shared.Nfs{
                                    RemotePath: "aut",
                                    Server: "et",
                                },
                            },
                            shared.Volume{
                                DeviceName: "dolorem",
                                Gcs: &shared.Gcs{
                                    RemotePath: "aut",
                                },
                                MountOptions: []string{
                                    "iste",
                                    "autem",
                                    "odio",
                                },
                                MountPath: "soluta",
                                Nfs: &shared.Nfs{
                                    RemotePath: "porro",
                                    Server: "omnis",
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: "et",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "reiciendis",
                    TaskCountPerNode: "et",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "sit": "assumenda",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "minus",
                            CPUMilli: "voluptatibus",
                            MemoryMib: "aut",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "doloribus": "est",
                                "praesentium": "distinctio",
                            },
                        },
                        Environments: map[string]string{
                            "mollitia": "iure",
                            "nulla": "officiis",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        8490979167950514602,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        5974282707100491270,
                                        2339931246899802995,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        4894825553613291534,
                                        8207957692048737165,
                                        9158996368869269916,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 4686911943399463022,
                        MaxRunDuration: "vero",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "odio",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "enim",
                                    },
                                    Entrypoint: "dolores",
                                    ImageURI: "et",
                                    Options: "natus",
                                    Password: "sunt",
                                    Username: "ut",
                                    Volumes: []string{
                                        "iure",
                                        "neque",
                                        "quia",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "officiis": "suscipit",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "aut",
                                    Text: "qui",
                                },
                                Timeout: "nostrum",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "dolorem",
                                Gcs: &shared.Gcs{
                                    RemotePath: "recusandae",
                                },
                                MountOptions: []string{
                                    "ad",
                                    "ipsum",
                                    "labore",
                                },
                                MountPath: "omnis",
                                Nfs: &shared.Nfs{
                                    RemotePath: "sequi",
                                    Server: "velit",
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
