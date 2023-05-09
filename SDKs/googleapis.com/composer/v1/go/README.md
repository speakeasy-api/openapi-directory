# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/composer/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, operations.ComposerProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: sdk.String("provident"),
                DagGcsPrefix: sdk.String("distinctio"),
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: sdk.String("quibusdam"),
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: sdk.String("unde"),
                },
                EnvironmentSize: shared.EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeLarge.ToPointer(),
                GkeCluster: sdk.String("corrupti"),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: sdk.String("illum"),
                    Recurrence: sdk.String("vel"),
                    StartTime: sdk.String("error"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("suscipit"),
                            DisplayName: sdk.String("iure"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("magnam"),
                            DisplayName: sdk.String("debitis"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("ipsa"),
                            DisplayName: sdk.String("delectus"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: sdk.Int(272656),
                    EnableIPMasqAgent: sdk.Bool(false),
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: sdk.String("suscipit"),
                        ClusterSecondaryRangeName: sdk.String("molestiae"),
                        ServicesIpv4CidrBlock: sdk.String("minus"),
                        ServicesSecondaryRangeName: sdk.String("placeat"),
                        UseIPAliases: sdk.Bool(false),
                    },
                    Location: sdk.String("voluptatum"),
                    MachineType: sdk.String("iusto"),
                    Network: sdk.String("excepturi"),
                    OauthScopes: []string{
                        "recusandae",
                        "temporibus",
                    },
                    ServiceAccount: sdk.String("ab"),
                    Subnetwork: sdk.String("quis"),
                    Tags: []string{
                        "deserunt",
                    },
                },
                NodeCount: sdk.Int(20218),
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: sdk.String("ipsam"),
                    CloudComposerNetworkIpv4CidrBlock: sdk.String("repellendus"),
                    CloudSQLIpv4CidrBlock: sdk.String("sapiente"),
                    EnablePrivateEnvironment: sdk.Bool(false),
                    EnablePrivatelyUsedPublicIps: sdk.Bool(false),
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: shared.NetworkingConfigConnectionTypeEnumPrivateServiceConnect.ToPointer(),
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: sdk.Bool(false),
                        MasterIpv4CidrBlock: sdk.String("odit"),
                    },
                    WebServerIpv4CidrBlock: sdk.String("at"),
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: sdk.Bool(false),
                        SnapshotCreationSchedule: sdk.String("at"),
                        SnapshotLocation: sdk.String("maiores"),
                        TimeZone: sdk.String("molestiae"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "quod": "esse",
                        "totam": "porro",
                        "dolorum": "dicta",
                        "nam": "officia",
                    },
                    EnvVariables: map[string]string{
                        "fugit": "deleniti",
                        "hic": "optio",
                        "totam": "beatae",
                    },
                    ImageVersion: sdk.String("commodi"),
                    PypiPackages: map[string]string{
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    PythonVersion: sdk.String("esse"),
                    SchedulerCount: sdk.Int(216550),
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: sdk.String("excepturi"),
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: sdk.String("perferendis"),
                            Value: sdk.String("ad"),
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: sdk.Int(617636),
                        CPU: sdk.Float32(1496.75),
                        MemoryGb: sdk.Float32(6120.96),
                        StorageGb: sdk.Float32(2223.21),
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: sdk.Float32(6169.34),
                        MemoryGb: sdk.Float32(3864.89),
                        StorageGb: sdk.Float32(9437.49),
                    },
                    Worker: &shared.WorkerResource{
                        CPU: sdk.Float32(9025.99),
                        MaxCount: sdk.Int(681820),
                        MemoryGb: sdk.Float32(4499.5),
                        MinCount: sdk.Int(359508),
                        StorageGb: sdk.Float32(6130.64),
                    },
                },
            },
            CreateTime: sdk.String("iure"),
            Labels: map[string]string{
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
            Name: sdk.String("Stacy Champlin"),
            State: shared.EnvironmentStateEnumUpdating.ToPointer(),
            UpdateTime: sdk.String("nemo"),
            UUID: sdk.String("5907aff1-a3a2-4fa9-8677-39251aa52c3f"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("reiciendis"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ComposerProjectsLocationsEnvironmentsCreate](docs/projects/README.md#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [ComposerProjectsLocationsEnvironmentsList](docs/projects/README.md#composerprojectslocationsenvironmentslist) - List environments.
* [ComposerProjectsLocationsEnvironmentsLoadSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [ComposerProjectsLocationsEnvironmentsPatch](docs/projects/README.md#composerprojectslocationsenvironmentspatch) - Update an environment.
* [ComposerProjectsLocationsEnvironmentsSaveSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [ComposerProjectsLocationsImageVersionsList](docs/projects/README.md#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [ComposerProjectsLocationsOperationsDelete](docs/projects/README.md#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ComposerProjectsLocationsOperationsGet](docs/projects/README.md#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ComposerProjectsLocationsOperationsList](docs/projects/README.md#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
