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
                            BootDisk: &shared.Disk{
                                DiskInterface: "odio",
                                Image: "dolore",
                                SizeGb: "id",
                                Snapshot: "aspernatur",
                                Type: "accusantium",
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "commodi",
                                    ExistingDisk: "quis",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "est",
                                        Image: "aut",
                                        SizeGb: "odit",
                                        Snapshot: "non",
                                        Type: "voluptas",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "omnis",
                                    ExistingDisk: "aut",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "illo",
                                        Image: "sed",
                                        SizeGb: "officiis",
                                        Snapshot: "autem",
                                        Type: "consectetur",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "nobis",
                                    ExistingDisk: "odio",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "qui",
                                        Image: "recusandae",
                                        SizeGb: "at",
                                        Snapshot: "ipsum",
                                        Type: "eveniet",
                                    },
                                },
                            },
                            MachineType: "modi",
                            MinCPUPlatform: "sint",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "exercitationem": "aut",
                    "reprehenderit": "tempore",
                    "maiores": "incidunt",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "beatae",
                        "veritatis",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "et",
                            NoExternalIPAddress: false,
                            Subnetwork: "ipsum",
                        },
                        shared.NetworkInterface{
                            Network: "ex",
                            NoExternalIPAddress: true,
                            Subnetwork: "placeat",
                        },
                        shared.NetworkInterface{
                            Network: "vel",
                            NoExternalIPAddress: true,
                            Subnetwork: "mollitia",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "voluptas",
                },
            },
            Labels: map[string]string{
                "reprehenderit": "qui",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "DESTINATION_UNSPECIFIED",
                LogsPath: "unde",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "FAILED",
                        NewTaskState: "RUNNING",
                        Type: "TASK_STATE_CHANGED",
                    },
                    PubsubTopic: "itaque",
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "SUCCEEDED",
                        NewTaskState: "STATE_UNSPECIFIED",
                        Type: "TASK_STATE_CHANGED",
                    },
                    PubsubTopic: "et",
                },
            },
            Priority: "accusantium",
            Status: &shared.JobStatus{
                RunDuration: "esse",
                State: "FAILED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "velit",
                        EventTime: "cumque",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 3331863358128628835,
                        },
                        Type: "sunt",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "magni": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "optio": "qui",
                            "earum": "illo",
                            "omnis": "ut",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "dolor",
                                ProvisioningModel: "SPOT",
                                TaskPack: "error",
                            },
                            shared.InstanceStatus{
                                MachineType: "reprehenderit",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "nostrum",
                            },
                            shared.InstanceStatus{
                                MachineType: "ut",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "sed",
                            },
                        },
                    },
                    "a": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "aut": "quas",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "laudantium",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "ipsa",
                            },
                            shared.InstanceStatus{
                                MachineType: "expedita",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "perferendis",
                            },
                            shared.InstanceStatus{
                                MachineType: "atque",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "quisquam",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "ea",
                    PermissiveSSH: true,
                    RequireHostsFile: false,
                    TaskCount: "perferendis",
                    TaskCountPerNode: "et",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "reiciendis",
                                KeyName: "quis",
                            },
                            SecretVariables: map[string]string{
                                "minima": "necessitatibus",
                                "est": "quis",
                            },
                            Variables: map[string]string{
                                "labore": "et",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "impedit",
                            CPUMilli: "ad",
                            MemoryMib: "expedita",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "vel",
                                KeyName: "qui",
                            },
                            SecretVariables: map[string]string{
                                "nihil": "tempora",
                                "deserunt": "eaque",
                            },
                            Variables: map[string]string{
                                "sit": "autem",
                                "quis": "vel",
                            },
                        },
                        Environments: map[string]string{
                            "placeat": "qui",
                            "nisi": "quis",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        6165970817952435057,
                                        6017140934898985776,
                                        7953274849279451463,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        6870143829354119039,
                                        4400124260933614083,
                                        8532234679993278697,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 2151743514245058837,
                        MaxRunDuration: "minus",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "excepturi",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "delectus",
                                    },
                                    Entrypoint: "ipsa",
                                    ImageURI: "animi",
                                    Options: "animi",
                                    Password: "ut",
                                    Username: "aliquam",
                                    Volumes: []string{
                                        "sed",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "sed",
                                        KeyName: "et",
                                    },
                                    SecretVariables: map[string]string{
                                        "non": "cupiditate",
                                        "provident": "molestiae",
                                        "pariatur": "quasi",
                                    },
                                    Variables: map[string]string{
                                        "enim": "qui",
                                        "sit": "possimus",
                                        "modi": "neque",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "quia",
                                    Text: "et",
                                },
                                Timeout: "est",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "ex",
                                Gcs: &shared.Gcs{
                                    RemotePath: "voluptatem",
                                },
                                MountOptions: []string{
                                    "temporibus",
                                    "velit",
                                    "quae",
                                },
                                MountPath: "est",
                                Nfs: &shared.Nfs{
                                    RemotePath: "ut",
                                    Server: "necessitatibus",
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: "in",
                    PermissiveSSH: true,
                    RequireHostsFile: false,
                    TaskCount: "dolorum",
                    TaskCountPerNode: "doloribus",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "sunt",
                                KeyName: "earum",
                            },
                            SecretVariables: map[string]string{
                                "ut": "asperiores",
                                "et": "est",
                            },
                            Variables: map[string]string{
                                "quam": "voluptas",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "nihil",
                                KeyName: "dolores",
                            },
                            SecretVariables: map[string]string{
                                "impedit": "non",
                                "magnam": "ut",
                            },
                            Variables: map[string]string{
                                "illo": "qui",
                                "quia": "ipsam",
                                "ducimus": "enim",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "blanditiis",
                                KeyName: "distinctio",
                            },
                            SecretVariables: map[string]string{
                                "rerum": "dolore",
                            },
                            Variables: map[string]string{
                                "velit": "officia",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "modi",
                            CPUMilli: "sunt",
                            MemoryMib: "voluptas",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "amet",
                                KeyName: "et",
                            },
                            SecretVariables: map[string]string{
                                "qui": "excepturi",
                            },
                            Variables: map[string]string{
                                "corporis": "dicta",
                            },
                        },
                        Environments: map[string]string{
                            "doloremque": "quae",
                            "nisi": "recusandae",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        8548724411789968652,
                                        7434067341455688771,
                                        9068966224370832188,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 2386043087176739176,
                        MaxRunDuration: "et",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "porro",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "consequatur",
                                        "illum",
                                    },
                                    Entrypoint: "accusantium",
                                    ImageURI: "atque",
                                    Options: "amet",
                                    Password: "nisi",
                                    Username: "quidem",
                                    Volumes: []string{
                                        "quo",
                                        "vero",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "alias",
                                        KeyName: "totam",
                                    },
                                    SecretVariables: map[string]string{
                                        "eius": "repellat",
                                    },
                                    Variables: map[string]string{
                                        "omnis": "totam",
                                        "aut": "et",
                                        "magni": "necessitatibus",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "culpa",
                                    Text: "repellendus",
                                },
                                Timeout: "voluptas",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "architecto",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "quo",
                                        "et",
                                        "saepe",
                                    },
                                    Entrypoint: "commodi",
                                    ImageURI: "in",
                                    Options: "quibusdam",
                                    Password: "asperiores",
                                    Username: "quo",
                                    Volumes: []string{
                                        "soluta",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "tempora",
                                        KeyName: "commodi",
                                    },
                                    SecretVariables: map[string]string{
                                        "facere": "in",
                                        "et": "odit",
                                    },
                                    Variables: map[string]string{
                                        "id": "ipsum",
                                        "aut": "perspiciatis",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "vero",
                                    Text: "voluptatem",
                                },
                                Timeout: "ex",
                            },
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "distinctio",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "non",
                                        "non",
                                    },
                                    Entrypoint: "nam",
                                    ImageURI: "beatae",
                                    Options: "quae",
                                    Password: "qui",
                                    Username: "magni",
                                    Volumes: []string{
                                        "sit",
                                        "aut",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "neque",
                                        KeyName: "iusto",
                                    },
                                    SecretVariables: map[string]string{
                                        "repudiandae": "debitis",
                                        "autem": "odit",
                                        "enim": "ut",
                                    },
                                    Variables: map[string]string{
                                        "nihil": "laborum",
                                        "recusandae": "nihil",
                                        "exercitationem": "iste",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "id",
                                    Text: "autem",
                                },
                                Timeout: "hic",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "omnis",
                                Gcs: &shared.Gcs{
                                    RemotePath: "libero",
                                },
                                MountOptions: []string{
                                    "omnis",
                                    "minus",
                                },
                                MountPath: "nostrum",
                                Nfs: &shared.Nfs{
                                    RemotePath: "non",
                                    Server: "sit",
                                },
                            },
                            shared.Volume{
                                DeviceName: "repellat",
                                Gcs: &shared.Gcs{
                                    RemotePath: "quo",
                                },
                                MountOptions: []string{
                                    "laboriosam",
                                },
                                MountPath: "velit",
                                Nfs: &shared.Nfs{
                                    RemotePath: "ea",
                                    Server: "tempore",
                                },
                            },
                        },
                    },
                },
                shared.TaskGroupInput{
                    Parallelism: "fugit",
                    PermissiveSSH: false,
                    RequireHostsFile: false,
                    TaskCount: "aliquid",
                    TaskCountPerNode: "mollitia",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "magni",
                                KeyName: "recusandae",
                            },
                            SecretVariables: map[string]string{
                                "consequatur": "dolores",
                                "hic": "nihil",
                                "explicabo": "ex",
                            },
                            Variables: map[string]string{
                                "et": "quos",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "et",
                                KeyName: "explicabo",
                            },
                            SecretVariables: map[string]string{
                                "veniam": "qui",
                                "in": "odit",
                            },
                            Variables: map[string]string{
                                "corporis": "tenetur",
                                "esse": "similique",
                                "mollitia": "id",
                            },
                        },
                        shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "laboriosam",
                                KeyName: "quam",
                            },
                            SecretVariables: map[string]string{
                                "totam": "iusto",
                            },
                            Variables: map[string]string{
                                "repellendus": "sunt",
                                "eum": "earum",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "et",
                            CPUMilli: "officia",
                            MemoryMib: "aut",
                        },
                        Environment: &shared.Environment{
                            EncryptedVariables: &shared.KmsEnvMap{
                                CipherText: "dolor",
                                KeyName: "quia",
                            },
                            SecretVariables: map[string]string{
                                "ea": "et",
                                "expedita": "recusandae",
                            },
                            Variables: map[string]string{
                                "qui": "aut",
                            },
                        },
                        Environments: map[string]string{
                            "cupiditate": "temporibus",
                            "saepe": "sed",
                            "voluptatem": "vel",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        6693986723014203425,
                                        5749655769367477879,
                                        3913336783472859509,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        2305290727230306544,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 2483796053404353015,
                        MaxRunDuration: "aut",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: true,
                                Barrier: &shared.Barrier{
                                    Name: "quae",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "rerum",
                                    },
                                    Entrypoint: "officiis",
                                    ImageURI: "commodi",
                                    Options: "sed",
                                    Password: "voluptates",
                                    Username: "enim",
                                    Volumes: []string{
                                        "ipsa",
                                        "cum",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "sint",
                                        KeyName: "aut",
                                    },
                                    SecretVariables: map[string]string{
                                        "facilis": "et",
                                        "ut": "et",
                                        "quam": "sit",
                                    },
                                    Variables: map[string]string{
                                        "eaque": "consequuntur",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "amet",
                                    Text: "distinctio",
                                },
                                Timeout: "in",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "sequi",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "eum",
                                        "sunt",
                                        "cupiditate",
                                    },
                                    Entrypoint: "quam",
                                    ImageURI: "repellendus",
                                    Options: "dolores",
                                    Password: "nihil",
                                    Username: "ullam",
                                    Volumes: []string{
                                        "architecto",
                                        "beatae",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "consequatur",
                                        KeyName: "veniam",
                                    },
                                    SecretVariables: map[string]string{
                                        "beatae": "veritatis",
                                        "architecto": "voluptas",
                                        "voluptatibus": "maiores",
                                    },
                                    Variables: map[string]string{
                                        "modi": "eos",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "itaque",
                                    Text: "ipsum",
                                },
                                Timeout: "natus",
                            },
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "nostrum",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: true,
                                    Commands: []string{
                                        "eius",
                                        "totam",
                                    },
                                    Entrypoint: "amet",
                                    ImageURI: "blanditiis",
                                    Options: "unde",
                                    Password: "nihil",
                                    Username: "asperiores",
                                    Volumes: []string{
                                        "hic",
                                        "quo",
                                    },
                                },
                                Environment: &shared.Environment{
                                    EncryptedVariables: &shared.KmsEnvMap{
                                        CipherText: "est",
                                        KeyName: "nostrum",
                                    },
                                    SecretVariables: map[string]string{
                                        "enim": "occaecati",
                                        "possimus": "temporibus",
                                        "laborum": "voluptas",
                                    },
                                    Variables: map[string]string{
                                        "atque": "soluta",
                                        "tempora": "qui",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "quas",
                                    Text: "facere",
                                },
                                Timeout: "eveniet",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "fuga",
                                Gcs: &shared.Gcs{
                                    RemotePath: "error",
                                },
                                MountOptions: []string{
                                    "eaque",
                                },
                                MountPath: "omnis",
                                Nfs: &shared.Nfs{
                                    RemotePath: "esse",
                                    Server: "veritatis",
                                },
                            },
                            shared.Volume{
                                DeviceName: "voluptas",
                                Gcs: &shared.Gcs{
                                    RemotePath: "incidunt",
                                },
                                MountOptions: []string{
                                    "saepe",
                                    "est",
                                },
                                MountPath: "odio",
                                Nfs: &shared.Nfs{
                                    RemotePath: "delectus",
                                    Server: "delectus",
                                },
                            },
                            shared.Volume{
                                DeviceName: "voluptatem",
                                Gcs: &shared.Gcs{
                                    RemotePath: "et",
                                },
                                MountOptions: []string{
                                    "in",
                                    "ipsa",
                                    "repellat",
                                },
                                MountPath: "deleniti",
                                Nfs: &shared.Nfs{
                                    RemotePath: "asperiores",
                                    Server: "voluptatem",
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
* `BatchProjectsLocationsJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BatchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `BatchProjectsLocationsJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BatchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `BatchProjectsLocationsJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `BatchProjectsLocationsList` - Lists information about the supported locations for this service.
* `BatchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BatchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BatchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BatchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `BatchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
