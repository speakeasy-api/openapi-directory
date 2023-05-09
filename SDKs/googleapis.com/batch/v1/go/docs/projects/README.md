# Projects

### Available Operations

* [BatchProjectsLocationsJobsCreate](#batchprojectslocationsjobscreate) - Create a Job.
* [BatchProjectsLocationsJobsList](#batchprojectslocationsjobslist) - List all Jobs for a project within a region.
* [BatchProjectsLocationsJobsTaskGroupsTasksList](#batchprojectslocationsjobstaskgroupstaskslist) - List Tasks associated with a job.
* [BatchProjectsLocationsList](#batchprojectslocationslist) - Lists information about the supported locations for this service.
* [BatchProjectsLocationsOperationsCancel](#batchprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [BatchProjectsLocationsOperationsDelete](#batchprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [BatchProjectsLocationsOperationsGet](#batchprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [BatchProjectsLocationsOperationsList](#batchprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [BatchProjectsLocationsStateReport](#batchprojectslocationsstatereport) - Report agent's state, e.g. agent status and tasks information

## BatchProjectsLocationsJobsCreate

Create a Job.

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
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, operations.BatchProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        JobInput: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("ex"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("sit"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("vel"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("nostrum"),
                                Image: sdk.String("saepe"),
                                SizeGb: sdk.String("error"),
                                Snapshot: sdk.String("consequatur"),
                                Type: sdk.String("incidunt"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("dolorem"),
                                    ExistingDisk: sdk.String("harum"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("dicta"),
                                        Image: sdk.String("architecto"),
                                        SizeGb: sdk.String("occaecati"),
                                        Snapshot: sdk.String("labore"),
                                        Type: sdk.String("quidem"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("atque"),
                                    ExistingDisk: sdk.String("laborum"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("nam"),
                                        Image: sdk.String("tenetur"),
                                        SizeGb: sdk.String("laboriosam"),
                                        Snapshot: sdk.String("alias"),
                                        Type: sdk.String("amet"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("deserunt"),
                                    ExistingDisk: sdk.String("voluptate"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("unde"),
                                        Image: sdk.String("reiciendis"),
                                        SizeGb: sdk.String("provident"),
                                        Snapshot: sdk.String("repellendus"),
                                        Type: sdk.String("delectus"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("voluptates"),
                                    ExistingDisk: sdk.String("perferendis"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("est"),
                                        Image: sdk.String("quidem"),
                                        SizeGb: sdk.String("reprehenderit"),
                                        Snapshot: sdk.String("facere"),
                                        Type: sdk.String("fuga"),
                                    },
                                },
                            },
                            MachineType: sdk.String("praesentium"),
                            MinCPUPlatform: sdk.String("mollitia"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumStandard.ToPointer(),
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("voluptatem"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("repudiandae"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("quasi"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("atque"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("reprehenderit"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("asperiores"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("totam"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("suscipit"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("quidem"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("maxime"),
                                Image: sdk.String("et"),
                                SizeGb: sdk.String("esse"),
                                Snapshot: sdk.String("amet"),
                                Type: sdk.String("assumenda"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("atque"),
                                    ExistingDisk: sdk.String("error"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("officiis"),
                                        Image: sdk.String("officiis"),
                                        SizeGb: sdk.String("accusamus"),
                                        Snapshot: sdk.String("natus"),
                                        Type: sdk.String("minima"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("aspernatur"),
                                    ExistingDisk: sdk.String("ex"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("maiores"),
                                        Image: sdk.String("corrupti"),
                                        SizeGb: sdk.String("at"),
                                        Snapshot: sdk.String("error"),
                                        Type: sdk.String("blanditiis"),
                                    },
                                },
                            },
                            MachineType: sdk.String("suscipit"),
                            MinCPUPlatform: sdk.String("repudiandae"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumSpot.ToPointer(),
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("atque"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("recusandae"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("dolorum"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("repellendus"),
                                Image: sdk.String("labore"),
                                SizeGb: sdk.String("reiciendis"),
                                Snapshot: sdk.String("doloremque"),
                                Type: sdk.String("repudiandae"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("accusantium"),
                                    ExistingDisk: sdk.String("beatae"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("dolores"),
                                        Image: sdk.String("enim"),
                                        SizeGb: sdk.String("laboriosam"),
                                        Snapshot: sdk.String("velit"),
                                        Type: sdk.String("a"),
                                    },
                                },
                            },
                            MachineType: sdk.String("molestias"),
                            MinCPUPlatform: sdk.String("magnam"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumPreemptible.ToPointer(),
                        },
                    },
                },
                Labels: map[string]string{
                    "occaecati": "officiis",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "in",
                        "adipisci",
                        "eveniet",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: sdk.String("consequuntur"),
                            NoExternalIPAddress: sdk.Bool(false),
                            Subnetwork: sdk.String("fugit"),
                        },
                        shared.NetworkInterface{
                            Network: sdk.String("id"),
                            NoExternalIPAddress: sdk.Bool(false),
                            Subnetwork: sdk.String("quis"),
                        },
                        shared.NetworkInterface{
                            Network: sdk.String("reprehenderit"),
                            NoExternalIPAddress: sdk.Bool(false),
                            Subnetwork: sdk.String("error"),
                        },
                    },
                },
                Placement: &shared.PlacementPolicy{
                    Collocation: sdk.String("illo"),
                    MaxDistance: sdk.String("corporis"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Tamara.Franey43@hotmail.com"),
                    Scopes: []string{
                        "totam",
                    },
                },
            },
            Labels: map[string]string{
                "molestiae": "eveniet",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: shared.LogsPolicyDestinationEnumDestinationUnspecified.ToPointer(),
                LogsPath: sdk.String("cum"),
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: shared.MessageNewJobStateEnumDeletionInProgress.ToPointer(),
                        NewTaskState: shared.MessageNewTaskStateEnumPending.ToPointer(),
                        Type: shared.MessageTypeEnumTaskStateChanged.ToPointer(),
                    },
                    PubsubTopic: sdk.String("distinctio"),
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: shared.MessageNewJobStateEnumRunning.ToPointer(),
                        NewTaskState: shared.MessageNewTaskStateEnumRunning.ToPointer(),
                        Type: shared.MessageTypeEnumTypeUnspecified.ToPointer(),
                    },
                    PubsubTopic: sdk.String("ad"),
                },
            },
            Priority: sdk.String("repellat"),
            Status: &shared.JobStatus{
                RunDuration: sdk.String("alias"),
                State: shared.JobStatusStateEnumScheduled.ToPointer(),
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: sdk.String("nihil"),
                        EventTime: sdk.String("mollitia"),
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: sdk.Int(378245),
                        },
                        TaskState: shared.StatusEventTaskStateEnumStateUnspecified.ToPointer(),
                        Type: sdk.String("maiores"),
                    },
                    shared.StatusEvent{
                        Description: sdk.String("reiciendis"),
                        EventTime: sdk.String("dolores"),
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: sdk.Int(663866),
                        },
                        TaskState: shared.StatusEventTaskStateEnumAssigned.ToPointer(),
                        Type: sdk.String("dolore"),
                    },
                    shared.StatusEvent{
                        Description: sdk.String("dolorum"),
                        EventTime: sdk.String("nesciunt"),
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: sdk.Int(63207),
                        },
                        TaskState: shared.StatusEventTaskStateEnumUnexecuted.ToPointer(),
                        Type: sdk.String("omnis"),
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "molestiae": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "ut": "culpa",
                            "adipisci": "debitis",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("eum"),
                                    Image: sdk.String("nemo"),
                                    SizeGb: sdk.String("recusandae"),
                                    Snapshot: sdk.String("esse"),
                                    Type: sdk.String("provident"),
                                },
                                MachineType: sdk.String("quis"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("reiciendis"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("provident"),
                                    Image: sdk.String("aspernatur"),
                                    SizeGb: sdk.String("ullam"),
                                    Snapshot: sdk.String("quasi"),
                                    Type: sdk.String("animi"),
                                },
                                MachineType: sdk.String("nostrum"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumSpot.ToPointer(),
                                TaskPack: sdk.String("provident"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("possimus"),
                                    Image: sdk.String("animi"),
                                    SizeGb: sdk.String("ex"),
                                    Snapshot: sdk.String("aliquid"),
                                    Type: sdk.String("accusantium"),
                                },
                                MachineType: sdk.String("repellat"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumPreemptible.ToPointer(),
                                TaskPack: sdk.String("ullam"),
                            },
                        },
                    },
                    "in": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "earum": "officia",
                            "laborum": "placeat",
                            "modi": "voluptatibus",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("officiis"),
                                    Image: sdk.String("sapiente"),
                                    SizeGb: sdk.String("cumque"),
                                    Snapshot: sdk.String("vitae"),
                                    Type: sdk.String("rerum"),
                                },
                                MachineType: sdk.String("tempora"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("inventore"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("fugit"),
                                    Image: sdk.String("cumque"),
                                    SizeGb: sdk.String("quae"),
                                    Snapshot: sdk.String("perferendis"),
                                    Type: sdk.String("velit"),
                                },
                                MachineType: sdk.String("aspernatur"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("eius"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("rem"),
                                    Image: sdk.String("at"),
                                    SizeGb: sdk.String("impedit"),
                                    Snapshot: sdk.String("eos"),
                                    Type: sdk.String("sapiente"),
                                },
                                MachineType: sdk.String("eum"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumProvisioningModelUnspecified.ToPointer(),
                                TaskPack: sdk.String("minima"),
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: sdk.String("cupiditate"),
                    PermissiveSSH: sdk.Bool(false),
                    RequireHostsFile: sdk.Bool(false),
                    TaskCount: sdk.String("provident"),
                    TaskCountPerNode: sdk.String("earum"),
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("hic"),
                                KeyName: sdk.String("illum"),
                            },
                            SecretVariables: map[string]string{
                                "earum": "perspiciatis",
                            },
                            Variables: map[string]string{
                                "debitis": "aliquid",
                                "porro": "suscipit",
                                "dolorem": "fugit",
                                "cumque": "fuga",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("ratione"),
                                KeyName: sdk.String("animi"),
                            },
                            SecretVariables: map[string]string{
                                "nulla": "consequatur",
                                "quasi": "et",
                                "ducimus": "natus",
                                "occaecati": "suscipit",
                            },
                            Variables: map[string]string{
                                "quasi": "magni",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("doloribus"),
                                KeyName: sdk.String("nulla"),
                            },
                            SecretVariables: map[string]string{
                                "ipsa": "tempora",
                                "nihil": "molestiae",
                                "dicta": "iusto",
                                "esse": "praesentium",
                            },
                            Variables: map[string]string{
                                "reiciendis": "vel",
                                "architecto": "fugiat",
                                "doloremque": "dicta",
                                "odio": "tempora",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: sdk.String("esse"),
                            CPUMilli: sdk.String("ex"),
                            MemoryMib: sdk.String("consectetur"),
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("aliquid"),
                                KeyName: sdk.String("ipsa"),
                            },
                            SecretVariables: map[string]string{
                                "sunt": "nostrum",
                                "fugiat": "expedita",
                                "aliquid": "officia",
                            },
                            Variables: map[string]string{
                                "aliquid": "perferendis",
                                "eum": "voluptas",
                            },
                        },
                        Environments: map[string]string{
                            "id": "ab",
                            "error": "possimus",
                            "voluptates": "mollitia",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumFailTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        536923,
                                        316220,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        405036,
                                        775803,
                                        405373,
                                        281153,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        29950,
                                        561577,
                                        737254,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: sdk.Int(399660),
                        MaxRunDuration: sdk.String("beatae"),
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Peter Prosacco"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "sapiente",
                                    },
                                    Entrypoint: sdk.String("officiis"),
                                    ImageURI: sdk.String("architecto"),
                                    Options: sdk.String("fuga"),
                                    Password: sdk.String("pariatur"),
                                    Username: sdk.String("Silas53"),
                                    Volumes: []string{
                                        "ex",
                                        "sapiente",
                                        "rem",
                                        "minus",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("nemo"),
                                        KeyName: sdk.String("asperiores"),
                                    },
                                    SecretVariables: map[string]string{
                                        "ullam": "perferendis",
                                    },
                                    Variables: map[string]string{
                                        "totam": "impedit",
                                        "quibusdam": "nam",
                                        "ipsam": "culpa",
                                        "dolor": "aliquam",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "deleniti": "veritatis",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("tempora"),
                                    Text: sdk.String("dolor"),
                                },
                                Timeout: sdk.String("consequatur"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Karen Gleason IV"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "dolor",
                                    },
                                    Entrypoint: sdk.String("fugiat"),
                                    ImageURI: sdk.String("ipsam"),
                                    Options: sdk.String("consequuntur"),
                                    Password: sdk.String("ipsa"),
                                    Username: sdk.String("Keenan_Vandervort45"),
                                    Volumes: []string{
                                        "sed",
                                        "veniam",
                                        "nesciunt",
                                        "expedita",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("eum"),
                                        KeyName: sdk.String("vel"),
                                    },
                                    SecretVariables: map[string]string{
                                        "magnam": "exercitationem",
                                        "ab": "porro",
                                        "autem": "nobis",
                                    },
                                    Variables: map[string]string{
                                        "recusandae": "consequuntur",
                                        "voluptatem": "exercitationem",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "quasi": "nisi",
                                    "at": "vero",
                                    "est": "harum",
                                    "sequi": "doloribus",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("repudiandae"),
                                    Text: sdk.String("optio"),
                                },
                                Timeout: sdk.String("occaecati"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Allison Kuvalis"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "nemo",
                                        "quos",
                                    },
                                    Entrypoint: sdk.String("eius"),
                                    ImageURI: sdk.String("aspernatur"),
                                    Options: sdk.String("ducimus"),
                                    Password: sdk.String("nesciunt"),
                                    Username: sdk.String("Marisa9"),
                                    Volumes: []string{
                                        "fugiat",
                                        "dicta",
                                        "nisi",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("consequuntur"),
                                        KeyName: sdk.String("consectetur"),
                                    },
                                    SecretVariables: map[string]string{
                                        "cupiditate": "reiciendis",
                                    },
                                    Variables: map[string]string{
                                        "alias": "omnis",
                                        "eos": "occaecati",
                                        "iste": "magni",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "fuga": "accusamus",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("voluptatibus"),
                                    Text: sdk.String("distinctio"),
                                },
                                Timeout: sdk.String("omnis"),
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: sdk.String("minima"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("praesentium"),
                                },
                                MountOptions: []string{
                                    "magnam",
                                    "temporibus",
                                    "quos",
                                    "commodi",
                                },
                                MountPath: sdk.String("itaque"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("commodi"),
                                    Server: sdk.String("totam"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("earum"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("modi"),
                                },
                                MountOptions: []string{
                                    "vero",
                                    "voluptatem",
                                    "ipsam",
                                },
                                MountPath: sdk.String("vel"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("alias"),
                                    Server: sdk.String("quasi"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("non"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("maiores"),
                                },
                                MountOptions: []string{
                                    "sint",
                                    "nulla",
                                },
                                MountPath: sdk.String("deserunt"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("esse"),
                                    Server: sdk.String("nemo"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("reprehenderit"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("est"),
                                },
                                MountOptions: []string{
                                    "sint",
                                    "accusamus",
                                },
                                MountPath: sdk.String("impedit"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("hic"),
                                    Server: sdk.String("necessitatibus"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("debitis"),
        JobID: sdk.String("delectus"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("minus"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RequestID: sdk.String("consectetur"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("atque"),
    }, operations.BatchProjectsLocationsJobsCreateSecurity{
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

## BatchProjectsLocationsJobsList

List all Jobs for a project within a region.

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
    res, err := s.Projects.BatchProjectsLocationsJobsList(ctx, operations.BatchProjectsLocationsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("repudiandae"),
        Filter: sdk.String("nam"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        PageSize: sdk.Int64(453094),
        PageToken: sdk.String("sequi"),
        Parent: "dignissimos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.BatchProjectsLocationsJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## BatchProjectsLocationsJobsTaskGroupsTasksList

List Tasks associated with a job.

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
    res, err := s.Projects.BatchProjectsLocationsJobsTaskGroupsTasksList(ctx, operations.BatchProjectsLocationsJobsTaskGroupsTasksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("magnam"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("inventore"),
        PageSize: sdk.Int64(818034),
        PageToken: sdk.String("libero"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("porro"),
    }, operations.BatchProjectsLocationsJobsTaskGroupsTasksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksResponse != nil {
        // handle response
    }
}
```

## BatchProjectsLocationsList

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
    res, err := s.Projects.BatchProjectsLocationsList(ctx, operations.BatchProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("ea"),
        Key: sdk.String("beatae"),
        Name: "Marshall Kemmer",
        OauthToken: sdk.String("perspiciatis"),
        PageSize: sdk.Int64(935302),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("iste"),
    }, operations.BatchProjectsLocationsListSecurity{
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

## BatchProjectsLocationsOperationsCancel

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
    res, err := s.Projects.BatchProjectsLocationsOperationsCancel(ctx, operations.BatchProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "nisi": "itaque",
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("iusto"),
        Name: "Sharon Adams",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.BatchProjectsLocationsOperationsCancelSecurity{
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

## BatchProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.BatchProjectsLocationsOperationsDelete(ctx, operations.BatchProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("a"),
        Key: sdk.String("voluptate"),
        Name: "Lindsey Treutel",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        Reason: sdk.String("est"),
        RequestID: sdk.String("error"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("labore"),
    }, operations.BatchProjectsLocationsOperationsDeleteSecurity{
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

## BatchProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.BatchProjectsLocationsOperationsGet(ctx, operations.BatchProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("dolorem"),
        Name: "Tina Moore",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.BatchProjectsLocationsOperationsGetSecurity{
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

## BatchProjectsLocationsOperationsList

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
    res, err := s.Projects.BatchProjectsLocationsOperationsList(ctx, operations.BatchProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("quae"),
        Key: sdk.String("quae"),
        Name: "Dawn Heidenreich I",
        OauthToken: sdk.String("unde"),
        PageSize: sdk.Int64(858338),
        PageToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quia"),
    }, operations.BatchProjectsLocationsOperationsListSecurity{
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

## BatchProjectsLocationsStateReport

Report agent's state, e.g. agent status and tasks information

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
    res, err := s.Projects.BatchProjectsLocationsStateReport(ctx, operations.BatchProjectsLocationsStateReportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportAgentStateRequest: &shared.ReportAgentStateRequest{
            AgentInfo: &shared.AgentInfo{
                JobID: sdk.String("omnis"),
                ReportTime: sdk.String("libero"),
                State: shared.AgentInfoStateEnumAgentStateUnspecified.ToPointer(),
                TaskGroupID: sdk.String("id"),
                Tasks: []shared.AgentTaskInfo{
                    shared.AgentTaskInfo{
                        Runnable: sdk.String("fugiat"),
                        TaskID: sdk.String("officia"),
                        TaskStatus: &shared.TaskStatus{
                            State: shared.TaskStatusStateEnumRunning.ToPointer(),
                            StatusEvents: []shared.StatusEvent{
                                shared.StatusEvent{
                                    Description: sdk.String("sit"),
                                    EventTime: sdk.String("iusto"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(57320),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumUnexecuted.ToPointer(),
                                    Type: sdk.String("inventore"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("aperiam"),
                                    EventTime: sdk.String("totam"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(292888),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumSucceeded.ToPointer(),
                                    Type: sdk.String("distinctio"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("voluptatem"),
                                    EventTime: sdk.String("autem"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(456688),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumPending.ToPointer(),
                                    Type: sdk.String("assumenda"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("beatae"),
                                    EventTime: sdk.String("est"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(817339),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumRunning.ToPointer(),
                                    Type: sdk.String("molestiae"),
                                },
                            },
                        },
                    },
                    shared.AgentTaskInfo{
                        Runnable: sdk.String("provident"),
                        TaskID: sdk.String("accusamus"),
                        TaskStatus: &shared.TaskStatus{
                            State: shared.TaskStatusStateEnumUnexecuted.ToPointer(),
                            StatusEvents: []shared.StatusEvent{
                                shared.StatusEvent{
                                    Description: sdk.String("sint"),
                                    EventTime: sdk.String("ea"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(421819),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumAssigned.ToPointer(),
                                    Type: sdk.String("rerum"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("laudantium"),
                                    EventTime: sdk.String("corporis"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(889060),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumUnexecuted.ToPointer(),
                                    Type: sdk.String("cum"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("at"),
                                    EventTime: sdk.String("alias"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(156653),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumFailed.ToPointer(),
                                    Type: sdk.String("fuga"),
                                },
                            },
                        },
                    },
                    shared.AgentTaskInfo{
                        Runnable: sdk.String("repudiandae"),
                        TaskID: sdk.String("accusantium"),
                        TaskStatus: &shared.TaskStatus{
                            State: shared.TaskStatusStateEnumFailed.ToPointer(),
                            StatusEvents: []shared.StatusEvent{
                                shared.StatusEvent{
                                    Description: sdk.String("eos"),
                                    EventTime: sdk.String("quibusdam"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(483518),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumRunning.ToPointer(),
                                    Type: sdk.String("odit"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("explicabo"),
                                    EventTime: sdk.String("corporis"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(621473),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumUnexecuted.ToPointer(),
                                    Type: sdk.String("adipisci"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("recusandae"),
                                    EventTime: sdk.String("similique"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(282837),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumFailed.ToPointer(),
                                    Type: sdk.String("quis"),
                                },
                                shared.StatusEvent{
                                    Description: sdk.String("beatae"),
                                    EventTime: sdk.String("unde"),
                                    TaskExecution: &shared.TaskExecution{
                                        ExitCode: sdk.Int(476946),
                                    },
                                    TaskState: shared.StatusEventTaskStateEnumUnexecuted.ToPointer(),
                                    Type: sdk.String("cupiditate"),
                                },
                            },
                        },
                    },
                },
            },
            AgentTimingInfo: &shared.AgentTimingInfo{
                AgentStartupTime: sdk.String("fugit"),
                BootTime: sdk.String("numquam"),
                ScriptStartupTime: sdk.String("numquam"),
            },
            Metadata: &shared.AgentMetadata{
                CreationTime: sdk.String("nesciunt"),
                Creator: sdk.String("at"),
                ImageVersion: sdk.String("officia"),
                Instance: sdk.String("dignissimos"),
                InstanceID: sdk.String("optio"),
                InstancePreemptionNoticeReceived: sdk.Bool(false),
                OsRelease: map[string]string{
                    "corporis": "qui",
                    "expedita": "voluptatum",
                    "cupiditate": "minima",
                    "placeat": "enim",
                },
                Version: sdk.String("neque"),
                Zone: sdk.String("in"),
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("voluptates"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("libero"),
    }, operations.BatchProjectsLocationsStateReportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAgentStateResponse != nil {
        // handle response
    }
}
```
