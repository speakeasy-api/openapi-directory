# Projects

### Available Operations

* [ComposerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [ComposerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [ComposerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [ComposerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [ComposerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [ComposerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [ComposerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ComposerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ComposerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
                AirflowURI: sdk.String("vero"),
                DagGcsPrefix: sdk.String("nihil"),
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: sdk.String("praesentium"),
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: sdk.String("voluptatibus"),
                },
                EnvironmentSize: shared.EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeUnspecified.ToPointer(),
                GkeCluster: sdk.String("omnis"),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: sdk.String("voluptate"),
                    Recurrence: sdk.String("cum"),
                    StartTime: sdk.String("perferendis"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("reprehenderit"),
                            DisplayName: sdk.String("ut"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: sdk.Int(979587),
                    EnableIPMasqAgent: sdk.Bool(false),
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: sdk.String("dicta"),
                        ClusterSecondaryRangeName: sdk.String("corporis"),
                        ServicesIpv4CidrBlock: sdk.String("dolore"),
                        ServicesSecondaryRangeName: sdk.String("iusto"),
                        UseIPAliases: sdk.Bool(false),
                    },
                    Location: sdk.String("dicta"),
                    MachineType: sdk.String("harum"),
                    Network: sdk.String("enim"),
                    OauthScopes: []string{
                        "commodi",
                        "repudiandae",
                        "quae",
                        "ipsum",
                    },
                    ServiceAccount: sdk.String("quidem"),
                    Subnetwork: sdk.String("molestias"),
                    Tags: []string{
                        "pariatur",
                        "modi",
                        "praesentium",
                    },
                },
                NodeCount: sdk.Int(523248),
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: sdk.String("voluptates"),
                    CloudComposerNetworkIpv4CidrBlock: sdk.String("quasi"),
                    CloudSQLIpv4CidrBlock: sdk.String("repudiandae"),
                    EnablePrivateEnvironment: sdk.Bool(false),
                    EnablePrivatelyUsedPublicIps: sdk.Bool(false),
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: shared.NetworkingConfigConnectionTypeEnumVpcPeering.ToPointer(),
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: sdk.Bool(false),
                        MasterIpv4CidrBlock: sdk.String("veritatis"),
                    },
                    WebServerIpv4CidrBlock: sdk.String("itaque"),
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: sdk.Bool(false),
                        SnapshotCreationSchedule: sdk.String("incidunt"),
                        SnapshotLocation: sdk.String("enim"),
                        TimeZone: sdk.String("consequatur"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "quibusdam": "explicabo",
                        "deserunt": "distinctio",
                        "quibusdam": "labore",
                    },
                    EnvVariables: map[string]string{
                        "qui": "aliquid",
                        "cupiditate": "quos",
                    },
                    ImageVersion: sdk.String("perferendis"),
                    PypiPackages: map[string]string{
                        "assumenda": "ipsam",
                    },
                    PythonVersion: sdk.String("alias"),
                    SchedulerCount: sdk.Int(146441),
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: sdk.String("dolorum"),
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: sdk.String("tempora"),
                            Value: sdk.String("facilis"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("tempore"),
                            Value: sdk.String("labore"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("delectus"),
                            Value: sdk.String("eum"),
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: sdk.Int(248753),
                        CPU: sdk.Float32(7561.07),
                        MemoryGb: sdk.Float32(5761.57),
                        StorageGb: sdk.Float32(3960.98),
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: sdk.Float32(5920.42),
                        MemoryGb: sdk.Float32(8960.39),
                        StorageGb: sdk.Float32(5722.52),
                    },
                    Worker: &shared.WorkerResource{
                        CPU: sdk.Float32(6389.21),
                        MaxCount: sdk.Int(223081),
                        MemoryGb: sdk.Float32(8915.55),
                        MinCount: sdk.Int(952749),
                        StorageGb: sdk.Float32(6800.56),
                    },
                },
            },
            CreateTime: sdk.String("in"),
            Labels: map[string]string{
                "illum": "maiores",
                "rerum": "dicta",
            },
            Name: sdk.String("Blanca Schulist"),
            State: shared.EnvironmentStateEnumDeleting.ToPointer(),
            UpdateTime: sdk.String("accusamus"),
            UUID: sdk.String("395efb9b-a88f-43a6-a997-074ba4469b6e"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ullam"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
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
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(141264),
        PageToken: sdk.String("nemo"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
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
            SnapshotPath: sdk.String("maxime"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Environment: "architecto",
        Fields: sdk.String("architecto"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: sdk.String("sed"),
                DagGcsPrefix: sdk.String("saepe"),
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: sdk.String("pariatur"),
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: sdk.String("accusantium"),
                },
                EnvironmentSize: shared.EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeUnspecified.ToPointer(),
                GkeCluster: sdk.String("praesentium"),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: sdk.String("natus"),
                    Recurrence: sdk.String("magni"),
                    StartTime: sdk.String("sunt"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("illum"),
                            DisplayName: sdk.String("pariatur"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("maxime"),
                            DisplayName: sdk.String("ea"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("excepturi"),
                            DisplayName: sdk.String("odit"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("ea"),
                            DisplayName: sdk.String("accusantium"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: sdk.Int(69167),
                    EnableIPMasqAgent: sdk.Bool(false),
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: sdk.String("maiores"),
                        ClusterSecondaryRangeName: sdk.String("quidem"),
                        ServicesIpv4CidrBlock: sdk.String("ipsam"),
                        ServicesSecondaryRangeName: sdk.String("voluptate"),
                        UseIPAliases: sdk.Bool(false),
                    },
                    Location: sdk.String("autem"),
                    MachineType: sdk.String("nam"),
                    Network: sdk.String("eaque"),
                    OauthScopes: []string{
                        "nemo",
                        "voluptatibus",
                        "perferendis",
                        "fugiat",
                    },
                    ServiceAccount: sdk.String("amet"),
                    Subnetwork: sdk.String("aut"),
                    Tags: []string{
                        "corporis",
                        "hic",
                        "libero",
                        "nobis",
                    },
                },
                NodeCount: sdk.Int(171629),
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: sdk.String("quis"),
                    CloudComposerNetworkIpv4CidrBlock: sdk.String("totam"),
                    CloudSQLIpv4CidrBlock: sdk.String("dignissimos"),
                    EnablePrivateEnvironment: sdk.Bool(false),
                    EnablePrivatelyUsedPublicIps: sdk.Bool(false),
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: shared.NetworkingConfigConnectionTypeEnumConnectionTypeUnspecified.ToPointer(),
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: sdk.Bool(false),
                        MasterIpv4CidrBlock: sdk.String("quis"),
                    },
                    WebServerIpv4CidrBlock: sdk.String("nesciunt"),
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: sdk.Bool(false),
                        SnapshotCreationSchedule: sdk.String("eos"),
                        SnapshotLocation: sdk.String("perferendis"),
                        TimeZone: sdk.String("dolores"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "quam": "dolor",
                        "vero": "nostrum",
                        "hic": "recusandae",
                        "omnis": "facilis",
                    },
                    EnvVariables: map[string]string{
                        "voluptatem": "porro",
                        "consequuntur": "blanditiis",
                        "error": "eaque",
                    },
                    ImageVersion: sdk.String("occaecati"),
                    PypiPackages: map[string]string{
                        "adipisci": "asperiores",
                        "earum": "modi",
                        "iste": "dolorum",
                    },
                    PythonVersion: sdk.String("deleniti"),
                    SchedulerCount: sdk.Int(864282),
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: sdk.String("provident"),
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: sdk.String("libero"),
                            Value: sdk.String("delectus"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("quaerat"),
                            Value: sdk.String("quos"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("aliquid"),
                            Value: sdk.String("dolorem"),
                        },
                        shared.AllowedIPRange{
                            Description: sdk.String("dolorem"),
                            Value: sdk.String("dolor"),
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: sdk.Int(186193),
                        CPU: sdk.Float32(2187.49),
                        MemoryGb: sdk.Float32(9443.73),
                        StorageGb: sdk.Float32(5695.74),
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: sdk.Float32(7395.51),
                        MemoryGb: sdk.Float32(4521.09),
                        StorageGb: sdk.Float32(4904.59),
                    },
                    Worker: &shared.WorkerResource{
                        CPU: sdk.Float32(9702.37),
                        MaxCount: sdk.Int(227414),
                        MemoryGb: sdk.Float32(6805.45),
                        MinCount: sdk.Int(254356),
                        StorageGb: sdk.Float32(852.95),
                    },
                },
            },
            CreateTime: sdk.String("ipsa"),
            Labels: map[string]string{
                "iure": "odio",
            },
            Name: sdk.String("Sophia Predovic"),
            State: shared.EnvironmentStateEnumUpdating.ToPointer(),
            UpdateTime: sdk.String("eos"),
            UUID: sdk.String("80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95"),
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("alias"),
        Key: sdk.String("at"),
        Name: "Rhonda Kautzer",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UpdateMask: sdk.String("a"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("harum"),
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
            SnapshotLocation: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Environment: "tempore",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("totam"),
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
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("sed"),
        IncludePastReleases: sdk.Bool(false),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(374170),
        PageToken: sdk.String("deserunt"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("qui"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("laborum"),
        Name: "Randall Cole",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestias"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("magni"),
        Key: sdk.String("odio"),
        Name: "Marion Reichert DDS",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("saepe"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("tempore"),
        Filter: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        Name: "Mike Greenholt",
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(100294),
        PageToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("itaque"),
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
