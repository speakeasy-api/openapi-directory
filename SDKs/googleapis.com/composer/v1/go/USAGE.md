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
            Parent: "libero",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "proto",
            Callback: "vitae",
            Fields: "ut",
            Key: "debitis",
            OauthToken: "ea",
            PrettyPrint: false,
            QuotaUser: "quia",
            UploadType: "deserunt",
            UploadProtocol: "aliquid",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "nihil",
                DagGcsPrefix: "repellendus",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "aut",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "omnis",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_UNSPECIFIED",
                GkeCluster: "ut",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "voluptatem",
                    Recurrence: "illum",
                    StartTime: "porro",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "quis",
                            DisplayName: "ipsum",
                        },
                        shared.CidrBlock{
                            CidrBlock: "qui",
                            DisplayName: "et",
                        },
                        shared.CidrBlock{
                            CidrBlock: "blanditiis",
                            DisplayName: "quia",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 311637717214665668,
                    EnableIPMasqAgent: true,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "cupiditate",
                        ClusterSecondaryRangeName: "laborum",
                        ServicesIpv4CidrBlock: "deserunt",
                        ServicesSecondaryRangeName: "dicta",
                        UseIPAliases: true,
                    },
                    Location: "officiis",
                    MachineType: "et",
                    Network: "enim",
                    OauthScopes: []string{
                        "consequatur",
                        "rerum",
                        "quis",
                    },
                    ServiceAccount: "ut",
                    Subnetwork: "porro",
                    Tags: []string{
                        "quis",
                        "vitae",
                        "deserunt",
                    },
                },
                NodeCount: 6099216200680606768,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "consequuntur",
                    CloudComposerNetworkIpv4CidrBlock: "aspernatur",
                    CloudSQLIpv4CidrBlock: "temporibus",
                    EnablePrivateEnvironment: true,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "PRIVATE_SERVICE_CONNECT",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: true,
                        MasterIpv4CidrBlock: "in",
                    },
                    WebServerIpv4CidrBlock: "facilis",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: false,
                        SnapshotCreationSchedule: "sequi",
                        SnapshotLocation: "reprehenderit",
                        TimeZone: "consectetur",
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "fugit": "quisquam",
                        "in": "iure",
                    },
                    EnvVariables: map[string]string{
                        "sunt": "repellendus",
                        "accusantium": "est",
                        "esse": "maiores",
                    },
                    ImageVersion: "voluptatem",
                    PypiPackages: map[string]string{
                        "laudantium": "quas",
                        "dicta": "magnam",
                    },
                    PythonVersion: "id",
                    SchedulerCount: 1908515449089205551,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "necessitatibus",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "in",
                            Value: "quibusdam",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 9121031162648800012,
                        CPU: 84.099998,
                        MemoryGb: 63.099998,
                        StorageGb: 17.100000,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 38.099998,
                        MemoryGb: 89.199997,
                        StorageGb: 30.200001,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 55.099998,
                        MaxCount: 852588688461658516,
                        MemoryGb: 55.099998,
                        MinCount: 2104855243105749723,
                        StorageGb: 75.099998,
                    },
                },
            },
            CreateTime: "deserunt",
            Labels: map[string]string{
                "ea": "id",
                "omnis": "ut",
            },
            Name: "blanditiis",
            State: "DELETING",
            UpdateTime: "et",
            UUID: "voluptas",
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