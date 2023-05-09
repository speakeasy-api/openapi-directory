# Projects

### Available Operations

* [ComposerProjectsLocationsEnvironmentsCheckUpgrade](#composerprojectslocationsenvironmentscheckupgrade) - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* [ComposerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [ComposerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [ComposerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [ComposerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [ComposerProjectsLocationsEnvironmentsRestartWebServer](#composerprojectslocationsenvironmentsrestartwebserver) - Restart Airflow web server.
* [ComposerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [ComposerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [ComposerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ComposerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ComposerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## ComposerProjectsLocationsEnvironmentsCheckUpgrade

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCheckUpgrade(ctx, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CheckUpgradeRequest: &shared.CheckUpgradeRequest{
            ImageVersion: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Environment: "tempora",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity{
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

## ComposerProjectsLocationsEnvironmentsCreate

Create a new environment.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, operations.ComposerProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: sdk.String("nisi"),
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: sdk.String("recusandae"),
                },
                EnvironmentSize: shared.EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeLarge.ToPointer(),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: sdk.String("ab"),
                    Recurrence: sdk.String("quis"),
                    StartTime: sdk.String("veritatis"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("perferendis"),
                            DisplayName: sdk.String("ipsam"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("repellendus"),
                            DisplayName: sdk.String("sapiente"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("quo"),
                            DisplayName: sdk.String("odit"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: sdk.Int(870013),
                    EnableIPMasqAgent: sdk.Bool(false),
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: sdk.String("at"),
                        ClusterSecondaryRangeName: sdk.String("maiores"),
                        ServicesIpv4CidrBlock: sdk.String("molestiae"),
                        ServicesSecondaryRangeName: sdk.String("quod"),
                        UseIPAliases: sdk.Bool(false),
                    },
                    Location: sdk.String("quod"),
                    MachineType: sdk.String("esse"),
                    MaxPodsPerNode: sdk.Int(520478),
                    Network: sdk.String("porro"),
                    OauthScopes: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                    ServiceAccount: sdk.String("occaecati"),
                    Subnetwork: sdk.String("fugit"),
                    Tags: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                },
                NodeCount: sdk.Int(105907),
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: sdk.String("commodi"),
                    CloudComposerNetworkIpv4CidrBlock: sdk.String("molestiae"),
                    CloudSQLIpv4CidrBlock: sdk.String("modi"),
                    EnablePrivateEnvironment: sdk.Bool(false),
                    EnablePrivatelyUsedPublicIps: sdk.Bool(false),
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: shared.NetworkingConfigConnectionTypeEnumConnectionTypeUnspecified.ToPointer(),
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: sdk.Bool(false),
                        MasterIpv4CidrBlock: sdk.String("impedit"),
                    },
                    WebServerIpv4CidrBlock: sdk.String("cum"),
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: sdk.Bool(false),
                        SnapshotCreationSchedule: sdk.String("esse"),
                        SnapshotLocation: sdk.String("ipsum"),
                        TimeZone: sdk.String("excepturi"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "perferendis": "ad",
                    },
                    CloudDataLineageIntegration: &shared.CloudDataLineageIntegration{
                        Enabled: sdk.Bool(false),
                    },
                    EnvVariables: map[string]string{
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                    ImageVersion: sdk.String("saepe"),
                    PypiPackages: map[string]string{
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                    PythonVersion: sdk.String("architecto"),
                    SchedulerCount: sdk.Int(60225),
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: sdk.String("reiciendis"),
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: sdk.String("mollitia"),
                            Value: sdk.String("laborum"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("dolores"),
                            Value: sdk.String("dolorem"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("corporis"),
                            Value: sdk.String("explicabo"),
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: sdk.Int(750686),
                        CPU: sdk.Float32(3154.28),
                        MemoryGb: sdk.Float32(6078.31),
                        StorageGb: sdk.Float32(3637.11),
                    },
                    Triggerer: &shared.TriggererResource{
                        Count: sdk.Int(325047),
                        CPU: sdk.Float32(5701.97),
                        MemoryGb: sdk.Float32(384.25),
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: sdk.Float32(4386.01),
                        MemoryGb: sdk.Float32(6342.74),
                        StorageGb: sdk.Float32(9883.74),
                    },
                    Worker: &shared.WorkerResource{
                        CPU: sdk.Float32(9589.5),
                        MaxCount: sdk.Int(102044),
                        MemoryGb: sdk.Float32(6527.9),
                        MinCount: sdk.Int(208876),
                        StorageGb: sdk.Float32(6350.59),
                    },
                },
            },
            Labels: map[string]string{
                "repellat": "mollitia",
            },
            Name: sdk.String("Francis Jerde"),
            State: shared.EnvironmentStateEnumCreating.ToPointer(),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.ComposerProjectsLocationsEnvironmentsCreateSecurity{
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

## ComposerProjectsLocationsEnvironmentsList

List environments.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsList(ctx, operations.ComposerProjectsLocationsEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        PageSize: sdk.Int64(837945),
        PageToken: sdk.String("laborum"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.ComposerProjectsLocationsEnvironmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## ComposerProjectsLocationsEnvironmentsLoadSnapshot

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsLoadSnapshot(ctx, operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LoadSnapshotRequest: &shared.LoadSnapshotRequest{
            SkipAirflowOverridesSetting: sdk.Bool(false),
            SkipEnvironmentVariablesSetting: sdk.Bool(false),
            SkipGcsDataCopying: sdk.Bool(false),
            SkipPypiPackagesInstallation: sdk.Bool(false),
            SnapshotPath: sdk.String("praesentium"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Environment: "voluptate",
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity{
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

## ComposerProjectsLocationsEnvironmentsPatch

Update an environment.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsPatch(ctx, operations.ComposerProjectsLocationsEnvironmentsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: sdk.String("corporis"),
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: sdk.String("dolore"),
                },
                EnvironmentSize: shared.EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeSmall.ToPointer(),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: sdk.String("dicta"),
                    Recurrence: sdk.String("harum"),
                    StartTime: sdk.String("enim"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("commodi"),
                            DisplayName: sdk.String("repudiandae"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("quae"),
                            DisplayName: sdk.String("ipsum"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("quidem"),
                            DisplayName: sdk.String("molestias"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("excepturi"),
                            DisplayName: sdk.String("pariatur"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: sdk.Int(265389),
                    EnableIPMasqAgent: sdk.Bool(false),
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: sdk.String("praesentium"),
                        ClusterSecondaryRangeName: sdk.String("rem"),
                        ServicesIpv4CidrBlock: sdk.String("voluptates"),
                        ServicesSecondaryRangeName: sdk.String("quasi"),
                        UseIPAliases: sdk.Bool(false),
                    },
                    Location: sdk.String("repudiandae"),
                    MachineType: sdk.String("sint"),
                    MaxPodsPerNode: sdk.Int(83112),
                    Network: sdk.String("itaque"),
                    OauthScopes: []string{
                        "enim",
                        "consequatur",
                    },
                    ServiceAccount: sdk.String("est"),
                    Subnetwork: sdk.String("quibusdam"),
                    Tags: []string{
                        "deserunt",
                    },
                },
                NodeCount: sdk.Int(716327),
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: sdk.String("quibusdam"),
                    CloudComposerNetworkIpv4CidrBlock: sdk.String("labore"),
                    CloudSQLIpv4CidrBlock: sdk.String("modi"),
                    EnablePrivateEnvironment: sdk.Bool(false),
                    EnablePrivatelyUsedPublicIps: sdk.Bool(false),
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: shared.NetworkingConfigConnectionTypeEnumConnectionTypeUnspecified.ToPointer(),
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: sdk.Bool(false),
                        MasterIpv4CidrBlock: sdk.String("aliquid"),
                    },
                    WebServerIpv4CidrBlock: sdk.String("cupiditate"),
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: sdk.Bool(false),
                        SnapshotCreationSchedule: sdk.String("quos"),
                        SnapshotLocation: sdk.String("perferendis"),
                        TimeZone: sdk.String("magni"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "ipsam": "alias",
                        "fugit": "dolorum",
                        "excepturi": "tempora",
                        "facilis": "tempore",
                    },
                    CloudDataLineageIntegration: &shared.CloudDataLineageIntegration{
                        Enabled: sdk.Bool(false),
                    },
                    EnvVariables: map[string]string{
                        "delectus": "eum",
                        "non": "eligendi",
                    },
                    ImageVersion: sdk.String("sint"),
                    PypiPackages: map[string]string{
                        "provident": "necessitatibus",
                        "sint": "officia",
                    },
                    PythonVersion: sdk.String("dolor"),
                    SchedulerCount: sdk.Int(891555),
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: sdk.String("a"),
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: sdk.String("in"),
                            Value: sdk.String("in"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("illum"),
                            Value: sdk.String("maiores"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("rerum"),
                            Value: sdk.String("dicta"),
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: sdk.Int(297437),
                        CPU: sdk.Float32(7670.24),
                        MemoryGb: sdk.Float32(8137.98),
                        StorageGb: sdk.Float32(4118.2),
                    },
                    Triggerer: &shared.TriggererResource{
                        Count: sdk.Int(396506),
                        CPU: sdk.Float32(6754.39),
                        MemoryGb: sdk.Float32(8811.04),
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: sdk.Float32(2497.96),
                        MemoryGb: sdk.Float32(5812.73),
                        StorageGb: sdk.Float32(3132.18),
                    },
                    Worker: &shared.WorkerResource{
                        CPU: sdk.Float32(8817.36),
                        MaxCount: sdk.Int(965417),
                        MemoryGb: sdk.Float32(6925.32),
                        MinCount: sdk.Int(588465),
                        StorageGb: sdk.Float32(7252.55),
                    },
                },
            },
            Labels: map[string]string{
                "blanditiis": "deleniti",
                "sapiente": "amet",
                "deserunt": "nisi",
            },
            Name: sdk.String("Ada Moen IV"),
            State: shared.EnvironmentStateEnumCreating.ToPointer(),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("suscipit"),
        Name: "Robin Keebler",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UpdateMask: sdk.String("et"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.ComposerProjectsLocationsEnvironmentsPatchSecurity{
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

## ComposerProjectsLocationsEnvironmentsRestartWebServer

Restart Airflow web server.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsRestartWebServer(ctx, operations.ComposerProjectsLocationsEnvironmentsRestartWebServerRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sint": "accusantium",
            "mollitia": "reiciendis",
            "mollitia": "ad",
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("odit"),
        Key: sdk.String("nemo"),
        Name: "Vera Wyman",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
    }, operations.ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity{
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

## ComposerProjectsLocationsEnvironmentsSaveSnapshot

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsSaveSnapshot(ctx, operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SaveSnapshotRequest: &shared.SaveSnapshotRequest{
            SnapshotLocation: sdk.String("architecto"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Environment: "nihil",
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity{
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

## ComposerProjectsLocationsImageVersionsList

List ImageVersions for provided location.

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
    res, err := s.Projects.ComposerProjectsLocationsImageVersionsList(ctx, operations.ComposerProjectsLocationsImageVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("sunt"),
        IncludePastReleases: sdk.Bool(false),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(864934),
        PageToken: sdk.String("maxime"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.ComposerProjectsLocationsImageVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageVersionsResponse != nil {
        // handle response
    }
}
```

## ComposerProjectsLocationsOperationsDelete

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
    res, err := s.Projects.ComposerProjectsLocationsOperationsDelete(ctx, operations.ComposerProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        Name: "Candice Beatty",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ComposerProjectsLocationsOperationsDeleteSecurity{
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

## ComposerProjectsLocationsOperationsGet

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
    res, err := s.Projects.ComposerProjectsLocationsOperationsGet(ctx, operations.ComposerProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("libero"),
        Key: sdk.String("nobis"),
        Name: "Beatrice Lebsack II",
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.ComposerProjectsLocationsOperationsGetSecurity{
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

## ComposerProjectsLocationsOperationsList

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
    res, err := s.Projects.ComposerProjectsLocationsOperationsList(ctx, operations.ComposerProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nostrum"),
        Filter: sdk.String("hic"),
        Key: sdk.String("recusandae"),
        Name: "Miss Cesar Metz",
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(621479),
        PageToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.ComposerProjectsLocationsOperationsListSecurity{
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
