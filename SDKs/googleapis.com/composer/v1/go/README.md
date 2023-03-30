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
        Security: operations.ComposerProjectsLocationsEnvironmentsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ComposerProjectsLocationsEnvironmentsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "suscipit",
                DagGcsPrefix: "iure",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "magnam",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "debitis",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_UNSPECIFIED",
                GkeCluster: "delectus",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "tempora",
                    Recurrence: "suscipit",
                    StartTime: "molestiae",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "placeat",
                            DisplayName: "voluptatum",
                        },
                        shared.CidrBlock{
                            CidrBlock: "iusto",
                            DisplayName: "excepturi",
                        },
                        shared.CidrBlock{
                            CidrBlock: "nisi",
                            DisplayName: "recusandae",
                        },
                        shared.CidrBlock{
                            CidrBlock: "temporibus",
                            DisplayName: "ab",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 337396,
                    EnableIPMasqAgent: false,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "veritatis",
                        ClusterSecondaryRangeName: "deserunt",
                        ServicesIpv4CidrBlock: "perferendis",
                        ServicesSecondaryRangeName: "ipsam",
                        UseIPAliases: false,
                    },
                    Location: "repellendus",
                    MachineType: "sapiente",
                    Network: "quo",
                    OauthScopes: []string{
                        "at",
                    },
                    ServiceAccount: "at",
                    Subnetwork: "maiores",
                    Tags: []string{
                        "quod",
                        "quod",
                    },
                },
                NodeCount: 461479,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "totam",
                    CloudComposerNetworkIpv4CidrBlock: "porro",
                    CloudSQLIpv4CidrBlock: "dolorum",
                    EnablePrivateEnvironment: false,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "CONNECTION_TYPE_UNSPECIFIED",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: false,
                        MasterIpv4CidrBlock: "nam",
                    },
                    WebServerIpv4CidrBlock: "officia",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: false,
                        SnapshotCreationSchedule: "occaecati",
                        SnapshotLocation: "fugit",
                        TimeZone: "deleniti",
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    EnvVariables: map[string]string{
                        "esse": "ipsum",
                        "excepturi": "aspernatur",
                        "perferendis": "ad",
                    },
                    ImageVersion: "natus",
                    PypiPackages: map[string]string{
                        "iste": "dolor",
                    },
                    PythonVersion: "natus",
                    SchedulerCount: 386489,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "hic",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "fuga",
                            Value: "in",
                        },
                        shared.AllowedIPRange{
                            Description: "corporis",
                            Value: "iste",
                        },
                        shared.AllowedIPRange{
                            Description: "iure",
                            Value: "saepe",
                        },
                        shared.AllowedIPRange{
                            Description: "quidem",
                            Value: "architecto",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 60225,
                        CPU: 9698.1,
                        MemoryGb: 6667.67,
                        StorageGb: 6531.4,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 6706.38,
                        MemoryGb: 1709.09,
                        StorageGb: 2103.82,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 3581.52,
                        MaxCount: 128926,
                        MemoryGb: 7506.86,
                        MinCount: 315428,
                        StorageGb: 6078.31,
                    },
                },
            },
            CreateTime: "nemo",
            Labels: map[string]string{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            Name: "doloribus",
            State: "ERROR",
            UpdateTime: "architecto",
            UUID: "a3a2fa94-6773-4925-9aa5-2c3f5ad019da",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
