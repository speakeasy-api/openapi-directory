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
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, operations.BatchProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("distinctio"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("unde"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("nulla"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("corrupti"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("illum"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("vel"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("error"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("deserunt"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("suscipit"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("iure"),
                                Image: sdk.String("magnam"),
                                SizeGb: sdk.String("debitis"),
                                Snapshot: sdk.String("ipsa"),
                                Type: sdk.String("delectus"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("suscipit"),
                                    ExistingDisk: sdk.String("molestiae"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("minus"),
                                        Image: sdk.String("placeat"),
                                        SizeGb: sdk.String("voluptatum"),
                                        Snapshot: sdk.String("iusto"),
                                        Type: sdk.String("excepturi"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("nisi"),
                                    ExistingDisk: sdk.String("recusandae"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("temporibus"),
                                        Image: sdk.String("ab"),
                                        SizeGb: sdk.String("quis"),
                                        Snapshot: sdk.String("veritatis"),
                                        Type: sdk.String("deserunt"),
                                    },
                                },
                            },
                            MachineType: sdk.String("perferendis"),
                            MinCPUPlatform: sdk.String("ipsam"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumPreemptible.ToPointer(),
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("sapiente"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("odit"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("at"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("at"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("maiores"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("molestiae"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("quod"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("quod"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("esse"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("totam"),
                                Image: sdk.String("porro"),
                                SizeGb: sdk.String("dolorum"),
                                Snapshot: sdk.String("dicta"),
                                Type: sdk.String("nam"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("occaecati"),
                                    ExistingDisk: sdk.String("fugit"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("deleniti"),
                                        Image: sdk.String("hic"),
                                        SizeGb: sdk.String("optio"),
                                        Snapshot: sdk.String("totam"),
                                        Type: sdk.String("beatae"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("commodi"),
                                    ExistingDisk: sdk.String("molestiae"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("modi"),
                                        Image: sdk.String("qui"),
                                        SizeGb: sdk.String("impedit"),
                                        Snapshot: sdk.String("cum"),
                                        Type: sdk.String("esse"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("ipsum"),
                                    ExistingDisk: sdk.String("excepturi"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("aspernatur"),
                                        Image: sdk.String("perferendis"),
                                        SizeGb: sdk.String("ad"),
                                        Snapshot: sdk.String("natus"),
                                        Type: sdk.String("sed"),
                                    },
                                },
                            },
                            MachineType: sdk.String("iste"),
                            MinCPUPlatform: sdk.String("dolor"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumSpot.ToPointer(),
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: sdk.Bool(false),
                        InstanceTemplate: sdk.String("laboriosam"),
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: sdk.String("saepe"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("fuga"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("in"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("corporis"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("iste"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("iure"),
                                },
                                shared.Accelerator{
                                    Count: sdk.String("saepe"),
                                    InstallGpuDrivers: sdk.Bool(false),
                                    Type: sdk.String("quidem"),
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: sdk.String("architecto"),
                                Image: sdk.String("ipsa"),
                                SizeGb: sdk.String("reiciendis"),
                                Snapshot: sdk.String("est"),
                                Type: sdk.String("mollitia"),
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("dolores"),
                                    ExistingDisk: sdk.String("dolorem"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("corporis"),
                                        Image: sdk.String("explicabo"),
                                        SizeGb: sdk.String("nobis"),
                                        Snapshot: sdk.String("enim"),
                                        Type: sdk.String("omnis"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("nemo"),
                                    ExistingDisk: sdk.String("minima"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("excepturi"),
                                        Image: sdk.String("accusantium"),
                                        SizeGb: sdk.String("iure"),
                                        Snapshot: sdk.String("culpa"),
                                        Type: sdk.String("doloribus"),
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: sdk.String("sapiente"),
                                    ExistingDisk: sdk.String("architecto"),
                                    NewDisk: &shared.Disk{
                                        DiskInterface: sdk.String("mollitia"),
                                        Image: sdk.String("dolorem"),
                                        SizeGb: sdk.String("culpa"),
                                        Snapshot: sdk.String("consequuntur"),
                                        Type: sdk.String("repellat"),
                                    },
                                },
                            },
                            MachineType: sdk.String("mollitia"),
                            MinCPUPlatform: sdk.String("occaecati"),
                            ProvisioningModel: shared.InstancePolicyProvisioningModelEnumStandard.ToPointer(),
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
                            Network: sdk.String("laborum"),
                            NoExternalIPAddress: sdk.Bool(false),
                            Subnetwork: sdk.String("animi"),
                        },
                    },
                },
                Placement: &shared.PlacementPolicy{
                    Collocation: sdk.String("enim"),
                    MaxDistance: sdk.String("odit"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Cleveland_Wiegand@hotmail.com"),
                    Scopes: []string{
                        "aut",
                        "quasi",
                        "error",
                        "temporibus",
                    },
                },
            },
            Labels: map[string]string{
                "quasi": "reiciendis",
                "voluptatibus": "vero",
                "nihil": "praesentium",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: shared.LogsPolicyDestinationEnumPath.ToPointer(),
                LogsPath: sdk.String("ipsa"),
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: shared.MessageNewJobStateEnumRunning.ToPointer(),
                        NewTaskState: shared.MessageNewTaskStateEnumSucceeded.ToPointer(),
                        Type: shared.MessageTypeEnumTypeUnspecified.ToPointer(),
                    },
                    PubsubTopic: sdk.String("doloremque"),
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: shared.MessageNewJobStateEnumRunning.ToPointer(),
                        NewTaskState: shared.MessageNewTaskStateEnumPending.ToPointer(),
                        Type: shared.MessageTypeEnumTaskStateChanged.ToPointer(),
                    },
                    PubsubTopic: sdk.String("dicta"),
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: shared.MessageNewJobStateEnumScheduled.ToPointer(),
                        NewTaskState: shared.MessageNewTaskStateEnumAssigned.ToPointer(),
                        Type: shared.MessageTypeEnumJobStateChanged.ToPointer(),
                    },
                    PubsubTopic: sdk.String("dicta"),
                },
            },
            Priority: sdk.String("harum"),
            Status: &shared.JobStatus{
                RunDuration: sdk.String("enim"),
                State: shared.JobStatusStateEnumDeletionInProgress.ToPointer(),
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: sdk.String("repudiandae"),
                        EventTime: sdk.String("quae"),
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: sdk.Int(216822),
                        },
                        TaskState: shared.StatusEventTaskStateEnumFailed.ToPointer(),
                        Type: sdk.String("molestias"),
                    },
                    shared.StatusEvent{
                        Description: sdk.String("excepturi"),
                        EventTime: sdk.String("pariatur"),
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: sdk.Int(265389),
                        },
                        TaskState: shared.StatusEventTaskStateEnumRunning.ToPointer(),
                        Type: sdk.String("rem"),
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "quasi": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "sint": "veritatis",
                            "itaque": "incidunt",
                            "enim": "consequatur",
                            "est": "quibusdam",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("deserunt"),
                                    Image: sdk.String("distinctio"),
                                    SizeGb: sdk.String("quibusdam"),
                                    Snapshot: sdk.String("labore"),
                                    Type: sdk.String("modi"),
                                },
                                MachineType: sdk.String("qui"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("cupiditate"),
                            },
                        },
                    },
                    "quos": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "magni": "assumenda",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("alias"),
                                    Image: sdk.String("fugit"),
                                    SizeGb: sdk.String("dolorum"),
                                    Snapshot: sdk.String("excepturi"),
                                    Type: sdk.String("tempora"),
                                },
                                MachineType: sdk.String("facilis"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumSpot.ToPointer(),
                                TaskPack: sdk.String("labore"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("delectus"),
                                    Image: sdk.String("eum"),
                                    SizeGb: sdk.String("non"),
                                    Snapshot: sdk.String("eligendi"),
                                    Type: sdk.String("sint"),
                                },
                                MachineType: sdk.String("aliquid"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumSpot.ToPointer(),
                                TaskPack: sdk.String("necessitatibus"),
                            },
                        },
                    },
                    "sint": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "dolor": "debitis",
                            "a": "dolorum",
                            "in": "in",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("maiores"),
                                    Image: sdk.String("rerum"),
                                    SizeGb: sdk.String("dicta"),
                                    Snapshot: sdk.String("magnam"),
                                    Type: sdk.String("cumque"),
                                },
                                MachineType: sdk.String("facere"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("aliquid"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("laborum"),
                                    Image: sdk.String("accusamus"),
                                    SizeGb: sdk.String("non"),
                                    Snapshot: sdk.String("occaecati"),
                                    Type: sdk.String("enim"),
                                },
                                MachineType: sdk.String("accusamus"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumPreemptible.ToPointer(),
                                TaskPack: sdk.String("quidem"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("provident"),
                                    Image: sdk.String("nam"),
                                    SizeGb: sdk.String("id"),
                                    Snapshot: sdk.String("blanditiis"),
                                    Type: sdk.String("deleniti"),
                                },
                                MachineType: sdk.String("sapiente"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumProvisioningModelUnspecified.ToPointer(),
                                TaskPack: sdk.String("deserunt"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("nisi"),
                                    Image: sdk.String("vel"),
                                    SizeGb: sdk.String("natus"),
                                    Snapshot: sdk.String("omnis"),
                                    Type: sdk.String("molestiae"),
                                },
                                MachineType: sdk.String("perferendis"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("magnam"),
                            },
                        },
                    },
                    "distinctio": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "labore": "labore",
                            "suscipit": "natus",
                            "nobis": "eum",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("aspernatur"),
                                    Image: sdk.String("architecto"),
                                    SizeGb: sdk.String("magnam"),
                                    Snapshot: sdk.String("et"),
                                    Type: sdk.String("excepturi"),
                                },
                                MachineType: sdk.String("ullam"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumSpot.ToPointer(),
                                TaskPack: sdk.String("quos"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("sint"),
                                    Image: sdk.String("accusantium"),
                                    SizeGb: sdk.String("mollitia"),
                                    Snapshot: sdk.String("reiciendis"),
                                    Type: sdk.String("mollitia"),
                                },
                                MachineType: sdk.String("ad"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumStandard.ToPointer(),
                                TaskPack: sdk.String("dolor"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("necessitatibus"),
                                    Image: sdk.String("odit"),
                                    SizeGb: sdk.String("nemo"),
                                    Snapshot: sdk.String("quasi"),
                                    Type: sdk.String("iure"),
                                },
                                MachineType: sdk.String("doloribus"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumPreemptible.ToPointer(),
                                TaskPack: sdk.String("eius"),
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: sdk.String("maxime"),
                                    Image: sdk.String("deleniti"),
                                    SizeGb: sdk.String("facilis"),
                                    Snapshot: sdk.String("in"),
                                    Type: sdk.String("architecto"),
                                },
                                MachineType: sdk.String("architecto"),
                                ProvisioningModel: shared.InstanceStatusProvisioningModelEnumPreemptible.ToPointer(),
                                TaskPack: sdk.String("ullam"),
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: sdk.String("nihil"),
                    PermissiveSSH: sdk.Bool(false),
                    RequireHostsFile: sdk.Bool(false),
                    TaskCount: sdk.String("repellat"),
                    TaskCountPerNode: sdk.String("quibusdam"),
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("saepe"),
                                KeyName: sdk.String("pariatur"),
                            },
                            SecretVariables: map[string]string{
                                "consequuntur": "praesentium",
                            },
                            Variables: map[string]string{
                                "magni": "sunt",
                                "quo": "illum",
                                "pariatur": "maxime",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: sdk.String("ea"),
                            CPUMilli: sdk.String("excepturi"),
                            MemoryMib: sdk.String("odit"),
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("ea"),
                                KeyName: sdk.String("accusantium"),
                            },
                            SecretVariables: map[string]string{
                                "maiores": "quidem",
                            },
                            Variables: map[string]string{
                                "voluptate": "autem",
                                "nam": "eaque",
                            },
                        },
                        Environments: map[string]string{
                            "nemo": "voluptatibus",
                            "perferendis": "fugiat",
                            "amet": "aut",
                            "cumque": "corporis",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumFailTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        171629,
                                        339404,
                                        521037,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumRetryTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        338985,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        18521,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        463451,
                                        223924,
                                        874573,
                                        345352,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: sdk.Int(944120),
                        MaxRunDuration: sdk.String("recusandae"),
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Freddie Bartoletti"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "error",
                                        "eaque",
                                        "occaecati",
                                    },
                                    Entrypoint: sdk.String("rerum"),
                                    ImageURI: sdk.String("adipisci"),
                                    Options: sdk.String("asperiores"),
                                    Password: sdk.String("earum"),
                                    Username: sdk.String("Dolly_Morar86"),
                                    Volumes: []string{
                                        "nobis",
                                        "libero",
                                        "delectus",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("quaerat"),
                                        KeyName: sdk.String("quos"),
                                    },
                                    SecretVariables: map[string]string{
                                        "dolorem": "dolorem",
                                        "dolor": "qui",
                                    },
                                    Variables: map[string]string{
                                        "hic": "excepturi",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "voluptate": "dignissimos",
                                    "reiciendis": "amet",
                                    "dolorum": "numquam",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("veritatis"),
                                    Text: sdk.String("ipsa"),
                                },
                                Timeout: sdk.String("ipsa"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Viola Hahn"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "voluptas",
                                        "natus",
                                        "eos",
                                        "atque",
                                    },
                                    Entrypoint: sdk.String("sit"),
                                    ImageURI: sdk.String("fugiat"),
                                    Options: sdk.String("ab"),
                                    Password: sdk.String("soluta"),
                                    Username: sdk.String("Marietta_Kris"),
                                    Volumes: []string{
                                        "omnis",
                                        "necessitatibus",
                                        "distinctio",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("asperiores"),
                                        KeyName: sdk.String("nihil"),
                                    },
                                    SecretVariables: map[string]string{
                                        "voluptate": "id",
                                    },
                                    Variables: map[string]string{
                                        "eius": "aspernatur",
                                        "perferendis": "amet",
                                        "optio": "accusamus",
                                        "ad": "saepe",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "deserunt": "provident",
                                    "minima": "repellendus",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("totam"),
                                    Text: sdk.String("similique"),
                                },
                                Timeout: sdk.String("alias"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Alex Goodwin"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "qui",
                                        "dolorum",
                                        "a",
                                        "esse",
                                    },
                                    Entrypoint: sdk.String("harum"),
                                    ImageURI: sdk.String("iusto"),
                                    Options: sdk.String("ipsum"),
                                    Password: sdk.String("quisquam"),
                                    Username: sdk.String("Ulises_Fay25"),
                                    Volumes: []string{
                                        "dolorem",
                                        "sapiente",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("totam"),
                                        KeyName: sdk.String("nihil"),
                                    },
                                    SecretVariables: map[string]string{
                                        "expedita": "neque",
                                    },
                                    Variables: map[string]string{
                                        "vel": "libero",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "deserunt": "quam",
                                    "ipsum": "incidunt",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("qui"),
                                    Text: sdk.String("cupiditate"),
                                },
                                Timeout: sdk.String("maxime"),
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: sdk.String("soluta"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("dicta"),
                                },
                                MountOptions: []string{
                                    "totam",
                                    "incidunt",
                                    "aspernatur",
                                },
                                MountPath: sdk.String("dolores"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("distinctio"),
                                    Server: sdk.String("facilis"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("aliquid"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("quam"),
                                },
                                MountOptions: []string{
                                    "temporibus",
                                    "qui",
                                    "neque",
                                },
                                MountPath: sdk.String("fugit"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("magni"),
                                    Server: sdk.String("odio"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("sunt"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("ullam"),
                                },
                                MountOptions: []string{
                                    "hic",
                                    "voluptatem",
                                    "cumque",
                                },
                                MountPath: sdk.String("soluta"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("nobis"),
                                    Server: sdk.String("et"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("saepe"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("ipsum"),
                                },
                                MountOptions: []string{
                                    "nobis",
                                },
                                MountPath: sdk.String("quos"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("tempore"),
                                    Server: sdk.String("cupiditate"),
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: sdk.String("aperiam"),
                    PermissiveSSH: sdk.Bool(false),
                    RequireHostsFile: sdk.Bool(false),
                    TaskCount: sdk.String("delectus"),
                    TaskCountPerNode: sdk.String("dolorem"),
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("labore"),
                                KeyName: sdk.String("adipisci"),
                            },
                            SecretVariables: map[string]string{
                                "architecto": "quae",
                                "aut": "quas",
                                "itaque": "consequatur",
                            },
                            Variables: map[string]string{
                                "repellendus": "porro",
                                "doloribus": "ut",
                                "facilis": "cupiditate",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("qui"),
                                KeyName: sdk.String("quae"),
                            },
                            SecretVariables: map[string]string{
                                "odio": "occaecati",
                                "voluptatibus": "quisquam",
                                "vero": "omnis",
                            },
                            Variables: map[string]string{
                                "ipsum": "delectus",
                                "voluptate": "consectetur",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: sdk.String("vero"),
                            CPUMilli: sdk.String("tenetur"),
                            MemoryMib: sdk.String("dignissimos"),
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("hic"),
                                KeyName: sdk.String("distinctio"),
                            },
                            SecretVariables: map[string]string{
                                "odio": "similique",
                                "facilis": "vero",
                                "ducimus": "dolore",
                                "quibusdam": "illum",
                            },
                            Variables: map[string]string{
                                "natus": "impedit",
                            },
                        },
                        Environments: map[string]string{
                            "voluptatibus": "exercitationem",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        981830,
                                        985033,
                                        478370,
                                        753570,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumRetryTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        639473,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        410492,
                                        136900,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumRetryTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        297842,
                                        189848,
                                        401132,
                                        511319,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: sdk.Int(120657),
                        MaxRunDuration: sdk.String("dolor"),
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Rosemary Stoltenberg"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "sapiente",
                                        "quisquam",
                                    },
                                    Entrypoint: sdk.String("saepe"),
                                    ImageURI: sdk.String("ea"),
                                    Options: sdk.String("impedit"),
                                    Password: sdk.String("corporis"),
                                    Username: sdk.String("Estel30"),
                                    Volumes: []string{
                                        "quo",
                                        "consectetur",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("recusandae"),
                                        KeyName: sdk.String("aspernatur"),
                                    },
                                    SecretVariables: map[string]string{
                                        "eaque": "a",
                                        "libero": "aut",
                                    },
                                    Variables: map[string]string{
                                        "deleniti": "impedit",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "fugit": "accusamus",
                                    "inventore": "non",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("et"),
                                    Text: sdk.String("dolorum"),
                                },
                                Timeout: sdk.String("laborum"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Lee Kemmer"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "assumenda",
                                        "nulla",
                                        "voluptas",
                                    },
                                    Entrypoint: sdk.String("libero"),
                                    ImageURI: sdk.String("quasi"),
                                    Options: sdk.String("tempora"),
                                    Password: sdk.String("numquam"),
                                    Username: sdk.String("Brenden47"),
                                    Volumes: []string{
                                        "odio",
                                        "eius",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("esse"),
                                        KeyName: sdk.String("esse"),
                                    },
                                    SecretVariables: map[string]string{
                                        "fuga": "reprehenderit",
                                        "quidem": "fugiat",
                                        "ut": "eum",
                                    },
                                    Variables: map[string]string{
                                        "assumenda": "eos",
                                        "praesentium": "quisquam",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "ipsa": "id",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("quidem"),
                                    Text: sdk.String("neque"),
                                },
                                Timeout: sdk.String("quo"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Salvatore Parker"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "ab",
                                        "cupiditate",
                                    },
                                    Entrypoint: sdk.String("consequatur"),
                                    ImageURI: sdk.String("tempora"),
                                    Options: sdk.String("debitis"),
                                    Password: sdk.String("ipsam"),
                                    Username: sdk.String("Bret.Donnelly92"),
                                    Volumes: []string{
                                        "distinctio",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("quod"),
                                        KeyName: sdk.String("dignissimos"),
                                    },
                                    SecretVariables: map[string]string{
                                        "nihil": "totam",
                                    },
                                    Variables: map[string]string{
                                        "aliquam": "odio",
                                        "occaecati": "commodi",
                                        "sapiente": "dolores",
                                        "deserunt": "molestiae",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "porro": "eum",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("quas"),
                                    Text: sdk.String("praesentium"),
                                },
                                Timeout: sdk.String("consequuntur"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Wayne Parker"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "explicabo",
                                        "minima",
                                        "nisi",
                                    },
                                    Entrypoint: sdk.String("fugit"),
                                    ImageURI: sdk.String("sapiente"),
                                    Options: sdk.String("consequuntur"),
                                    Password: sdk.String("ratione"),
                                    Username: sdk.String("Braxton_Turner"),
                                    Volumes: []string{
                                        "esse",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("eveniet"),
                                        KeyName: sdk.String("accusamus"),
                                    },
                                    SecretVariables: map[string]string{
                                        "esse": "quod",
                                    },
                                    Variables: map[string]string{
                                        "vero": "aliquid",
                                        "quasi": "saepe",
                                        "vel": "harum",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "rerum": "occaecati",
                                    "minima": "distinctio",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("eligendi"),
                                    Text: sdk.String("sit"),
                                },
                                Timeout: sdk.String("culpa"),
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: sdk.String("adipisci"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("cumque"),
                                },
                                MountOptions: []string{
                                    "consequatur",
                                },
                                MountPath: sdk.String("minus"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("quaerat"),
                                    Server: sdk.String("sapiente"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("consectetur"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("esse"),
                                },
                                MountOptions: []string{
                                    "provident",
                                    "a",
                                    "nulla",
                                },
                                MountPath: sdk.String("quas"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("esse"),
                                    Server: sdk.String("quasi"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("a"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("error"),
                                },
                                MountOptions: []string{
                                    "pariatur",
                                    "possimus",
                                    "quia",
                                },
                                MountPath: sdk.String("eveniet"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("asperiores"),
                                    Server: sdk.String("facere"),
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: sdk.String("veritatis"),
                    PermissiveSSH: sdk.Bool(false),
                    RequireHostsFile: sdk.Bool(false),
                    TaskCount: sdk.String("consequuntur"),
                    TaskCountPerNode: sdk.String("quasi"),
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("culpa"),
                                KeyName: sdk.String("aliquid"),
                            },
                            SecretVariables: map[string]string{
                                "quae": "earum",
                                "vel": "in",
                                "eius": "libero",
                                "illum": "soluta",
                            },
                            Variables: map[string]string{
                                "aliquam": "sapiente",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("dicta"),
                                KeyName: sdk.String("ullam"),
                            },
                            SecretVariables: map[string]string{
                                "ullam": "nisi",
                                "aut": "voluptatum",
                            },
                            Variables: map[string]string{
                                "quibusdam": "ex",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("deleniti"),
                                KeyName: sdk.String("itaque"),
                            },
                            SecretVariables: map[string]string{
                                "architecto": "omnis",
                                "tenetur": "quasi",
                                "at": "et",
                            },
                            Variables: map[string]string{
                                "ipsa": "minima",
                                "veritatis": "consectetur",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: sdk.String("adipisci"),
                            CPUMilli: sdk.String("iste"),
                            MemoryMib: sdk.String("temporibus"),
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: sdk.String("accusantium"),
                                KeyName: sdk.String("rem"),
                            },
                            SecretVariables: map[string]string{
                                "laudantium": "eum",
                            },
                            Variables: map[string]string{
                                "ab": "corrupti",
                                "non": "voluptatem",
                                "dolor": "occaecati",
                            },
                        },
                        Environments: map[string]string{
                            "impedit": "explicabo",
                            "voluptas": "aut",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumActionUnspecified.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        618480,
                                        244651,
                                        974257,
                                        374323,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: shared.LifecyclePolicyActionEnumFailTask.ToPointer(),
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int{
                                        409054,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: sdk.Int(310067),
                        MaxRunDuration: sdk.String("consequuntur"),
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Simon Kuhn"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "quae",
                                        "quaerat",
                                    },
                                    Entrypoint: sdk.String("porro"),
                                    ImageURI: sdk.String("quod"),
                                    Options: sdk.String("labore"),
                                    Password: sdk.String("ab"),
                                    Username: sdk.String("Dayton.Paucek"),
                                    Volumes: []string{
                                        "culpa",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("est"),
                                        KeyName: sdk.String("recusandae"),
                                    },
                                    SecretVariables: map[string]string{
                                        "fugiat": "vel",
                                        "ducimus": "quos",
                                        "vel": "labore",
                                    },
                                    Variables: map[string]string{
                                        "facilis": "cum",
                                        "commodi": "in",
                                        "corporis": "reiciendis",
                                        "assumenda": "nemo",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "aliquid": "aperiam",
                                    "cum": "consectetur",
                                    "in": "exercitationem",
                                    "earum": "facere",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("numquam"),
                                    Text: sdk.String("doloribus"),
                                },
                                Timeout: sdk.String("suscipit"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Rickey Ullrich"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "asperiores",
                                    },
                                    Entrypoint: sdk.String("adipisci"),
                                    ImageURI: sdk.String("non"),
                                    Options: sdk.String("amet"),
                                    Password: sdk.String("beatae"),
                                    Username: sdk.String("Jena.Wiegand35"),
                                    Volumes: []string{
                                        "laboriosam",
                                        "ipsa",
                                        "voluptates",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("libero"),
                                        KeyName: sdk.String("vitae"),
                                    },
                                    SecretVariables: map[string]string{
                                        "similique": "tempora",
                                        "aspernatur": "voluptas",
                                        "voluptas": "voluptas",
                                        "minima": "nobis",
                                    },
                                    Variables: map[string]string{
                                        "adipisci": "minus",
                                        "dolores": "blanditiis",
                                        "in": "dolore",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "officiis": "temporibus",
                                    "ullam": "adipisci",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("cum"),
                                    Text: sdk.String("blanditiis"),
                                },
                                Timeout: sdk.String("quas"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Danny Nader"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "hic",
                                        "exercitationem",
                                        "nobis",
                                    },
                                    Entrypoint: sdk.String("sit"),
                                    ImageURI: sdk.String("rerum"),
                                    Options: sdk.String("sed"),
                                    Password: sdk.String("reiciendis"),
                                    Username: sdk.String("Brendon.Ziemann70"),
                                    Volumes: []string{
                                        "iste",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("dolore"),
                                        KeyName: sdk.String("laborum"),
                                    },
                                    SecretVariables: map[string]string{
                                        "in": "commodi",
                                    },
                                    Variables: map[string]string{
                                        "explicabo": "voluptas",
                                        "unde": "architecto",
                                        "suscipit": "sapiente",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "illo": "reiciendis",
                                    "perferendis": "corrupti",
                                    "maiores": "incidunt",
                                    "sed": "provident",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("eius"),
                                    Text: sdk.String("necessitatibus"),
                                },
                                Timeout: sdk.String("ipsum"),
                            },
                            shared.Runnable{
                                AlwaysRun: sdk.Bool(false),
                                Background: sdk.Bool(false),
                                Barrier: &shared.Barrier{
                                    Name: sdk.String("Kristina Lueilwitz"),
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: sdk.Bool(false),
                                    Commands: []string{
                                        "voluptate",
                                        "reiciendis",
                                    },
                                    Entrypoint: sdk.String("ex"),
                                    ImageURI: sdk.String("sit"),
                                    Options: sdk.String("non"),
                                    Password: sdk.String("officiis"),
                                    Username: sdk.String("Jodie27"),
                                    Volumes: []string{
                                        "debitis",
                                        "rem",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: sdk.String("sit"),
                                        KeyName: sdk.String("nobis"),
                                    },
                                    SecretVariables: map[string]string{
                                        "veniam": "minima",
                                        "recusandae": "reiciendis",
                                        "nulla": "magni",
                                    },
                                    Variables: map[string]string{
                                        "saepe": "numquam",
                                    },
                                },
                                IgnoreExitStatus: sdk.Bool(false),
                                Labels: map[string]string{
                                    "in": "officiis",
                                    "beatae": "laudantium",
                                },
                                Script: &shared.Script{
                                    Path: sdk.String("exercitationem"),
                                    Text: sdk.String("praesentium"),
                                },
                                Timeout: sdk.String("cum"),
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: sdk.String("dolorum"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("voluptatum"),
                                },
                                MountOptions: []string{
                                    "hic",
                                    "expedita",
                                    "debitis",
                                },
                                MountPath: sdk.String("neque"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("dolorum"),
                                    Server: sdk.String("nostrum"),
                                },
                            },
                            shared.Volume{
                                DeviceName: sdk.String("officia"),
                                Gcs: &shared.Gcs{
                                    RemotePath: sdk.String("dolorum"),
                                },
                                MountOptions: []string{
                                    "accusamus",
                                    "tempora",
                                    "atque",
                                },
                                MountPath: sdk.String("fugit"),
                                Nfs: &shared.Nfs{
                                    RemotePath: sdk.String("ut"),
                                    Server: sdk.String("fugiat"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("magnam"),
        JobID: sdk.String("consequatur"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsam"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        RequestID: sdk.String("quas"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("corporis"),
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
<!-- End SDK Example Usage -->