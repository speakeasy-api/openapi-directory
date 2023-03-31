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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ComposerProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: "2",
        EnvironmentInput: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "provident",
                DagGcsPrefix: "distinctio",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "quibusdam",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "unde",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_LARGE",
                GkeCluster: "corrupti",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "illum",
                    Recurrence: "vel",
                    StartTime: "error",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "suscipit",
                            DisplayName: "iure",
                        },
                        shared.CidrBlock{
                            CidrBlock: "magnam",
                            DisplayName: "debitis",
                        },
                        shared.CidrBlock{
                            CidrBlock: "ipsa",
                            DisplayName: "delectus",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 272656,
                    EnableIPMasqAgent: false,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "suscipit",
                        ClusterSecondaryRangeName: "molestiae",
                        ServicesIpv4CidrBlock: "minus",
                        ServicesSecondaryRangeName: "placeat",
                        UseIPAliases: false,
                    },
                    Location: "voluptatum",
                    MachineType: "iusto",
                    Network: "excepturi",
                    OauthScopes: []string{
                        "recusandae",
                        "temporibus",
                    },
                    ServiceAccount: "ab",
                    Subnetwork: "quis",
                    Tags: []string{
                        "deserunt",
                    },
                },
                NodeCount: 20218,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "ipsam",
                    CloudComposerNetworkIpv4CidrBlock: "repellendus",
                    CloudSQLIpv4CidrBlock: "sapiente",
                    EnablePrivateEnvironment: false,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "PRIVATE_SERVICE_CONNECT",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: false,
                        MasterIpv4CidrBlock: "odit",
                    },
                    WebServerIpv4CidrBlock: "at",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: false,
                        SnapshotCreationSchedule: "at",
                        SnapshotLocation: "maiores",
                        TimeZone: "molestiae",
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
                    ImageVersion: "commodi",
                    PypiPackages: map[string]string{
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    PythonVersion: "esse",
                    SchedulerCount: 216550,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "excepturi",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "perferendis",
                            Value: "ad",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 617636,
                        CPU: 1496.75,
                        MemoryGb: 6120.96,
                        StorageGb: 2223.21,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 6169.34,
                        MemoryGb: 3864.89,
                        StorageGb: 9437.49,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 9025.99,
                        MaxCount: 681820,
                        MemoryGb: 4499.5,
                        MinCount: 359508,
                        StorageGb: 6130.64,
                    },
                },
            },
            CreateTime: "iure",
            Labels: map[string]string{
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
            Name: "dolorem",
            State: "RUNNING",
            UpdateTime: "explicabo",
            UUID: "c5955907-aff1-4a3a-afa9-467739251aa5",
        },
        AccessToken: "odit",
        Alt: "proto",
        Callback: "sequi",
        Fields: "tenetur",
        Key: "ipsam",
        OauthToken: "id",
        Parent: "possimus",
        PrettyPrint: false,
        QuotaUser: "aut",
        UploadType: "quasi",
        UploadProtocol: "error",
    }

    ctx := context.Background()
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, req, operations.ComposerProjectsLocationsEnvironmentsCreateSecurity{
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


### Projects

* `ComposerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `ComposerProjectsLocationsEnvironmentsList` - List environments.
* `ComposerProjectsLocationsEnvironmentsLoadSnapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `ComposerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `ComposerProjectsLocationsEnvironmentsSaveSnapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `ComposerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `ComposerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ComposerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ComposerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
