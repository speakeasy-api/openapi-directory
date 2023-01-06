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
            Parent: "provident",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "json",
            Callback: "accusamus",
            Fields: "sunt",
            JobID: "voluptatem",
            Key: "et",
            OauthToken: "quam",
            PrettyPrint: false,
            QuotaUser: "iure",
            RequestID: "dolores",
            UploadType: "rerum",
            UploadProtocol: "ut",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: true,
                        InstanceTemplate: "dolorum",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "sed",
                                    InstallGpuDrivers: true,
                                    Type: "voluptatibus",
                                },
                                shared.Accelerator{
                                    Count: "laudantium",
                                    InstallGpuDrivers: false,
                                    Type: "aperiam",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "et",
                                    ExistingDisk: "fuga",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "autem",
                                        Image: "qui",
                                        SizeGb: "autem",
                                        Snapshot: "unde",
                                        Type: "accusantium",
                                    },
                                },
                            },
                            MachineType: "harum",
                            MinCPUPlatform: "aliquid",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "officia": "ratione",
                    "quam": "non",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "ut",
                        "dolorem",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "doloribus",
                            NoExternalIPAddress: true,
                            Subnetwork: "similique",
                        },
                        shared.NetworkInterface{
                            Network: "similique",
                            NoExternalIPAddress: true,
                            Subnetwork: "rerum",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "occaecati",
                },
            },
            Labels: map[string]string{
                "reprehenderit": "consequatur",
                "corrupti": "occaecati",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "CLOUD_LOGGING",
                LogsPath: "aut",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "QUEUED",
                        NewTaskState: "FAILED",
                        Type: "TASK_STATE_CHANGED",
                    },
                    PubsubTopic: "temporibus",
                },
            },
            Priority: "nemo",
            Status: &shared.JobStatus{
                RunDuration: "reiciendis",
                State: "DELETION_IN_PROGRESS",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "dolor",
                        EventTime: "quidem",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 7272507434266527321,
                        },
                        Type: "non",
                    },
                    shared.StatusEvent{
                        Description: "dolorum",
                        EventTime: "iusto",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 4522791024445429453,
                        },
                        Type: "quos",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "similique": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "incidunt": "et",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "asperiores",
                                ProvisioningModel: "PREEMPTIBLE",
                                TaskPack: "similique",
                            },
                            shared.InstanceStatus{
                                MachineType: "molestias",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "velit",
                            },
                            shared.InstanceStatus{
                                MachineType: "eos",
                                ProvisioningModel: "STANDARD",
                                TaskPack: "tempore",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "rem",
                    PermissiveSSH: true,
                    RequireHostsFile: false,
                    TaskCount: "at",
                    TaskCountPerNode: "natus",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "et": "deleniti",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "recusandae": "quasi",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "qui",
                            CPUMilli: "debitis",
                            MemoryMib: "maiores",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "non": "quo",
                                "voluptatem": "dolores",
                            },
                        },
                        Environments: map[string]string{
                            "maxime": "quae",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        3949601812501700666,
                                        9181463986524583615,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "ACTION_UNSPECIFIED",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        9000514264736311475,
                                        3661698189582736879,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        5320225905259023026,
                                        4226060982335490971,
                                        6988089158248186858,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 6601998192391808988,
                        MaxRunDuration: "consequatur",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "iure",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "aut",
                                        "voluptate",
                                        "vero",
                                    },
                                    Entrypoint: "mollitia",
                                    ImageURI: "atque",
                                    Options: "placeat",
                                    Password: "est",
                                    Username: "velit",
                                    Volumes: []string{
                                        "enim",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "molestias": "alias",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "aut",
                                    Text: "inventore",
                                },
                                Timeout: "illo",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "sit",
                                Gcs: &shared.Gcs{
                                    RemotePath: "porro",
                                },
                                MountOptions: []string{
                                    "eos",
                                },
                                MountPath: "dolore",
                                Nfs: &shared.Nfs{
                                    RemotePath: "quia",
                                    Server: "aut",
                                },
                            },
                            shared.Volume{
                                DeviceName: "porro",
                                Gcs: &shared.Gcs{
                                    RemotePath: "ducimus",
                                },
                                MountOptions: []string{
                                    "cupiditate",
                                    "placeat",
                                    "mollitia",
                                },
                                MountPath: "quia",
                                Nfs: &shared.Nfs{
                                    RemotePath: "et",
                                    Server: "maiores",
                                },
                            },
                            shared.Volume{
                                DeviceName: "sint",
                                Gcs: &shared.Gcs{
                                    RemotePath: "autem",
                                },
                                MountOptions: []string{
                                    "et",
                                    "saepe",
                                },
                                MountPath: "rem",
                                Nfs: &shared.Nfs{
                                    RemotePath: "itaque",
                                    Server: "dignissimos",
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