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
            Parent: "unde",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            JobID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "saepe",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "sapiente",
                                    InstallGpuDrivers: false,
                                    Type: "enim",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "eum",
                                Image: "voluptatum",
                                SizeGb: "autem",
                                Snapshot: "vel",
                                Type: "non",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "similique",
                                    ExistingDisk: "reprehenderit",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "molestiae",
                                        Image: "quo",
                                        SizeGb: "quasi",
                                        Snapshot: "laboriosam",
                                        Type: "dicta",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "est",
                                    ExistingDisk: "voluptatem",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "consequatur",
                                        Image: "fugiat",
                                        SizeGb: "a",
                                        Snapshot: "omnis",
                                        Type: "eos",
                                    },
                                },
                            },
                            MachineType: "accusamus",
                            MinCPUPlatform: "accusamus",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "rem",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "et",
                                    InstallGpuDrivers: false,
                                    Type: "praesentium",
                                },
                                shared.Accelerator{
                                    Count: "occaecati",
                                    InstallGpuDrivers: false,
                                    Type: "dolor",
                                },
                                shared.Accelerator{
                                    Count: "soluta",
                                    InstallGpuDrivers: false,
                                    Type: "sed",
                                },
                                shared.Accelerator{
                                    Count: "quisquam",
                                    InstallGpuDrivers: false,
                                    Type: "rerum",
                                },
                            },
                            BootDisk: &shared.Disk{
                                DiskInterface: "culpa",
                                Image: "qui",
                                SizeGb: "sed",
                                Snapshot: "rerum",
                                Type: "possimus",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "odit",
                                    ExistingDisk: "esse",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "rem",
                                        Image: "voluptatem",
                                        SizeGb: "amet",
                                        Snapshot: "est",
                                        Type: "id",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "blanditiis",
                                    ExistingDisk: "numquam",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "similique",
                                        Image: "dolores",
                                        SizeGb: "sit",
                                        Snapshot: "quia",
                                        Type: "et",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "voluptatem",
                                    ExistingDisk: "laborum",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "modi",
                                        Image: "et",
                                        SizeGb: "iure",
                                        Snapshot: "earum",
                                        Type: "ut",
                                    },
                                },
                            },
                            MachineType: "soluta",
                            MinCPUPlatform: "qui",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "iusto": "ut",
                    "optio": "aspernatur",
                    "inventore": "ut",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "et",
                        "libero",
                        "ipsum",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "ea",
                            NoExternalIPAddress: false,
                            Subnetwork: "magni",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "Emerson.Mohr@hotmail.com",
                    Scopes: []string{
                        "eaque",
                        "odio",
                        "harum",
                    },
                },
            },
            Labels: map[string]string{
                "a": "aut",
                "et": "non",
                "quidem": "neque",
                "asperiores": "et",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "CLOUD_LOGGING",
                LogsPath: "aliquam",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "RUNNING",
                        NewTaskState: "ASSIGNED",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "fuga",
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "QUEUED",
                        NewTaskState: "ASSIGNED",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "cum",
                },
            },
            Priority: "expedita",
            Status: &shared.JobStatus{
                RunDuration: "ipsam",
                State: "STATE_UNSPECIFIED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "adipisci",
                        EventTime: "hic",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 368725,
                        },
                        TaskState: "RUNNING",
                        Type: "qui",
                    },
                    shared.StatusEvent{
                        Description: "perferendis",
                        EventTime: "aspernatur",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 622846,
                        },
                        TaskState: "SUCCEEDED",
                        Type: "tempore",
                    },
                    shared.StatusEvent{
                        Description: "explicabo",
                        EventTime: "aut",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 976460,
                        },
                        TaskState: "SUCCEEDED",
                        Type: "totam",
                    },
                    shared.StatusEvent{
                        Description: "molestias",
                        EventTime: "reiciendis",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 55714,
                        },
                        TaskState: "RUNNING",
                        Type: "qui",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "sit": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "odio": "veniam",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "sed",
                                    Image: "ea",
                                    SizeGb: "exercitationem",
                                    Snapshot: "deleniti",
                                    Type: "sed",
                                },
                                MachineType: "est",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "aut",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "esse",
                                    Image: "sint",
                                    SizeGb: "veritatis",
                                    Snapshot: "numquam",
                                    Type: "eligendi",
                                },
                                MachineType: "error",
                                ProvisioningModel: "SPOT",
                                TaskPack: "et",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "ut",
                                    Image: "molestias",
                                    SizeGb: "cupiditate",
                                    Snapshot: "sint",
                                    Type: "explicabo",
                                },
                                MachineType: "et",
                                ProvisioningModel: "SPOT",
                                TaskPack: "vitae",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "non",
                                    Image: "minima",
                                    SizeGb: "voluptatem",
                                    Snapshot: "aut",
                                    Type: "libero",
                                },
                                MachineType: "voluptas",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "est",
                            },
                        },
                    },
                    "porro": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "nostrum": "voluptatem",
                            "sit": "in",
                            "officia": "omnis",
                            "voluptatem": "dolorem",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "quis",
                                    Image: "consequatur",
                                    SizeGb: "ratione",
                                    Snapshot: "cum",
                                    Type: "similique",
                                },
                                MachineType: "enim",
                                ProvisioningModel: "SPOT",
                                TaskPack: "id",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "quis",
                                    Image: "sapiente",
                                    SizeGb: "et",
                                    Snapshot: "dolore",
                                    Type: "possimus",
                                },
                                MachineType: "in",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "deserunt",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "eveniet",
                                    Image: "sunt",
                                    SizeGb: "rerum",
                                    Snapshot: "modi",
                                    Type: "necessitatibus",
                                },
                                MachineType: "tenetur",
                                ProvisioningModel: "SPOT",
                                TaskPack: "ducimus",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "ducimus",
                                    Image: "nulla",
                                    SizeGb: "reiciendis",
                                    Snapshot: "cumque",
                                    Type: "fugit",
                                },
                                MachineType: "ullam",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "vel",
                            },
                        },
                    },
                    "velit": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "cum": "aut",
                            "magnam": "culpa",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "aut",
                                    Image: "delectus",
                                    SizeGb: "eligendi",
                                    Snapshot: "officia",
                                    Type: "est",
                                },
                                MachineType: "distinctio",
                                ProvisioningModel: "SPOT",
                                TaskPack: "provident",
                            },
                            shared.InstanceStatus{
                                BootDisk: &shared.Disk{
                                    DiskInterface: "a",
                                    Image: "incidunt",
                                    SizeGb: "facilis",
                                    Snapshot: "qui",
                                    Type: "nihil",
                                },
                                MachineType: "dolorum",
                                ProvisioningModel: "SPOT",
                                TaskPack: "voluptatum",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "rem",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "corporis",
                    TaskCountPerNode: "porro",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "quis",
                                KeyName: "nostrum",
                            },
                            SecretVariables: map[string]string{
                                "et": "placeat",
                                "molestiae": "debitis",
                            },
                            Variables: map[string]string{
                                "aut": "ullam",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "explicabo",
                                KeyName: "similique",
                            },
                            SecretVariables: map[string]string{
                                "deserunt": "omnis",
                                "in": "aperiam",
                            },
                            Variables: map[string]string{
                                "ut": "et",
                                "voluptatem": "et",
                                "modi": "eveniet",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "qui",
                                KeyName: "consequatur",
                            },
                            SecretVariables: map[string]string{
                                "iusto": "maiores",
                            },
                            Variables: map[string]string{
                                "quaerat": "aut",
                                "sed": "nihil",
                                "ducimus": "aspernatur",
                                "aspernatur": "sint",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "aliquid",
                            CPUMilli: "quo",
                            MemoryMib: "totam",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KMSEnvMap{
                                CipherText: "repellat",
                                KeyName: "voluptas",
                            },
                            SecretVariables: map[string]string{
                                "et": "accusamus",
                            },
                            Variables: map[string]string{
                                "neque": "molestias",
                            },
                        },
                        Environments: map[string]string{
                            "dolorem": "quia",
                            "omnis": "pariatur",
                            "et": "consequatur",
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
                        MaxRunDuration: "quis",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "quam",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "ab",
                                        "et",
                                        "consequatur",
                                    },
                                    Entrypoint: "aut",
                                    ImageURI: "sit",
                                    Options: "vero",
                                    Password: "incidunt",
                                    Username: "Adolf_Runolfsdottir",
                                    Volumes: []string{
                                        "placeat",
                                        "ipsum",
                                        "laboriosam",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "occaecati",
                                        KeyName: "corrupti",
                                    },
                                    SecretVariables: map[string]string{
                                        "laboriosam": "velit",
                                    },
                                    Variables: map[string]string{
                                        "sit": "ipsum",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "autem",
                                    Text: "laudantium",
                                },
                                Timeout: "modi",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "officiis",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "rerum",
                                        "non",
                                    },
                                    Entrypoint: "est",
                                    ImageURI: "nihil",
                                    Options: "mollitia",
                                    Password: "doloremque",
                                    Username: "Ottilie_Cruickshank",
                                    Volumes: []string{
                                        "in",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KMSEnvMap{
                                        CipherText: "cumque",
                                        KeyName: "labore",
                                    },
                                    SecretVariables: map[string]string{
                                        "recusandae": "ut",
                                        "laborum": "soluta",
                                        "sed": "et",
                                        "officia": "placeat",
                                    },
                                    Variables: map[string]string{
                                        "delectus": "enim",
                                        "iste": "in",
                                        "non": "non",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "modi",
                                    Text: "amet",
                                },
                                Timeout: "eius",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "similique",
                                Gcs: &shared.Gcs{
                                    RemotePath: "quod",
                                },
                                MountOptions: []string{
                                    "quos",
                                    "ut",
                                },
                                MountPath: "tempora",
                                Nfs: &shared.Nfs{
                                    RemotePath: "soluta",
                                    Server: "aliquam",
                                },
                            },
                            shared.Volume{
                                DeviceName: "dicta",
                                Gcs: &shared.Gcs{
                                    RemotePath: "inventore",
                                },
                                MountOptions: []string{
                                    "iusto",
                                },
                                MountPath: "corrupti",
                                Nfs: &shared.Nfs{
                                    RemotePath: "enim",
                                    Server: "aut",
                                },
                            },
                            shared.Volume{
                                DeviceName: "optio",
                                Gcs: &shared.Gcs{
                                    RemotePath: "reiciendis",
                                },
                                MountOptions: []string{
                                    "et",
                                    "dolor",
                                },
                                MountPath: "perspiciatis",
                                Nfs: &shared.Nfs{
                                    RemotePath: "accusantium",
                                    Server: "at",
                                },
                            },
                            shared.Volume{
                                DeviceName: "et",
                                Gcs: &shared.Gcs{
                                    RemotePath: "maxime",
                                },
                                MountOptions: []string{
                                    "deleniti",
                                    "qui",
                                    "cum",
                                },
                                MountPath: "sed",
                                Nfs: &shared.Nfs{
                                    RemotePath: "est",
                                    Server: "eveniet",
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