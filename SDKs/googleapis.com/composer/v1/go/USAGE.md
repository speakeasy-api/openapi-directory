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
    
    req := operations.ComposerProjectsLocationsEnvironmentsCreateRequest{
        Security: operations.ComposerProjectsLocationsEnvironmentsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ComposerProjectsLocationsEnvironmentsCreatePathParams{
            Parent: "ut",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "adipisci",
            Alt: "json",
            Callback: "atque",
            Fields: "ducimus",
            Key: "necessitatibus",
            OauthToken: "accusantium",
            PrettyPrint: true,
            QuotaUser: "molestiae",
            UploadType: "et",
            UploadProtocol: "voluptatum",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "inventore",
                DagGcsPrefix: "voluptas",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "animi",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "dolores",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_SMALL",
                GkeCluster: "ratione",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "ut",
                    Recurrence: "inventore",
                    StartTime: "ut",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "ducimus",
                            DisplayName: "delectus",
                        },
                        shared.CidrBlock{
                            CidrBlock: "non",
                            DisplayName: "enim",
                        },
                        shared.CidrBlock{
                            CidrBlock: "eum",
                            DisplayName: "sed",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 4201965112952250917,
                    EnableIPMasqAgent: true,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "repellat",
                        ClusterSecondaryRangeName: "et",
                        ServicesIpv4CidrBlock: "assumenda",
                        ServicesSecondaryRangeName: "voluptates",
                        UseIPAliases: false,
                    },
                    Location: "tempora",
                    MachineType: "quaerat",
                    Network: "explicabo",
                    OauthScopes: []string{
                        "enim",
                        "amet",
                        "reiciendis",
                    },
                    ServiceAccount: "repudiandae",
                    Subnetwork: "rerum",
                    Tags: []string{
                        "voluptas",
                    },
                },
                NodeCount: 3952350477465608078,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "at",
                    CloudComposerNetworkIpv4CidrBlock: "rerum",
                    CloudSQLIpv4CidrBlock: "unde",
                    EnablePrivateEnvironment: false,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "PRIVATE_SERVICE_CONNECT",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: false,
                        MasterIpv4CidrBlock: "est",
                    },
                    WebServerIpv4CidrBlock: "doloremque",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: false,
                        SnapshotCreationSchedule: "quam",
                        SnapshotLocation: "rerum",
                        TimeZone: "non",
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "aspernatur": "accusantium",
                        "dolorem": "deserunt",
                        "saepe": "sunt",
                    },
                    EnvVariables: map[string]string{
                        "amet": "omnis",
                        "eos": "necessitatibus",
                    },
                    ImageVersion: "eius",
                    PypiPackages: map[string]string{
                        "hic": "et",
                    },
                    PythonVersion: "rerum",
                    SchedulerCount: 7896028332639996295,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "et",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "quia",
                            Value: "maiores",
                        },
                        shared.AllowedIPRange{
                            Description: "veniam",
                            Value: "quia",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 5491409673542965108,
                        CPU: 44.200001,
                        MemoryGb: 67.199997,
                        StorageGb: 78.199997,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 54.200001,
                        MemoryGb: 80.099998,
                        StorageGb: 60.200001,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 54.200001,
                        MaxCount: 5326439103155895190,
                        MemoryGb: 85.099998,
                        MinCount: 3337928581207051642,
                        StorageGb: 81.199997,
                    },
                },
            },
            CreateTime: "doloremque",
            Labels: map[string]string{
                "est": "exercitationem",
            },
            Name: "sunt",
            State: "STATE_UNSPECIFIED",
            UpdateTime: "quia",
            UUID: "ut",
        },
    }
    
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->