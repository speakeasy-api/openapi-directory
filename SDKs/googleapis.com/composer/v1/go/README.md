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
            Parent: "unde",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "eum",
                DagGcsPrefix: "iusto",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "ullam",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "saepe",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_UNSPECIFIED",
                GkeCluster: "sapiente",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "enim",
                    Recurrence: "eum",
                    StartTime: "voluptatum",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "vel",
                            DisplayName: "non",
                        },
                        shared.CidrBlock{
                            CidrBlock: "deleniti",
                            DisplayName: "similique",
                        },
                        shared.CidrBlock{
                            CidrBlock: "reprehenderit",
                            DisplayName: "molestiae",
                        },
                        shared.CidrBlock{
                            CidrBlock: "quo",
                            DisplayName: "quasi",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 337396,
                    EnableIPMasqAgent: false,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "dicta",
                        ClusterSecondaryRangeName: "est",
                        ServicesIpv4CidrBlock: "voluptatem",
                        ServicesSecondaryRangeName: "consequatur",
                        UseIPAliases: false,
                    },
                    Location: "fugiat",
                    MachineType: "a",
                    Network: "omnis",
                    OauthScopes: []string{
                        "accusamus",
                    },
                    ServiceAccount: "accusamus",
                    Subnetwork: "reiciendis",
                    Tags: []string{
                        "quibusdam",
                        "et",
                    },
                },
                NodeCount: 461479,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "occaecati",
                    CloudComposerNetworkIpv4CidrBlock: "dolor",
                    CloudSQLIpv4CidrBlock: "soluta",
                    EnablePrivateEnvironment: false,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "CONNECTION_TYPE_UNSPECIFIED",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: false,
                        MasterIpv4CidrBlock: "quisquam",
                    },
                    WebServerIpv4CidrBlock: "rerum",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: false,
                        SnapshotCreationSchedule: "culpa",
                        SnapshotLocation: "qui",
                        TimeZone: "sed",
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "possimus": "occaecati",
                        "odit": "esse",
                        "rem": "voluptatem",
                        "amet": "est",
                    },
                    EnvVariables: map[string]string{
                        "blanditiis": "numquam",
                        "similique": "dolores",
                        "sit": "quia",
                    },
                    ImageVersion: "et",
                    PypiPackages: map[string]string{
                        "laborum": "modi",
                    },
                    PythonVersion: "et",
                    SchedulerCount: 386489,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "earum",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "soluta",
                            Value: "qui",
                        },
                        shared.AllowedIPRange{
                            Description: "ea",
                            Value: "laborum",
                        },
                        shared.AllowedIPRange{
                            Description: "iusto",
                            Value: "ut",
                        },
                        shared.AllowedIPRange{
                            Description: "optio",
                            Value: "aspernatur",
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
            CreateTime: "commodi",
            Labels: map[string]string{
                "similique": "eaque",
                "odio": "harum",
            },
            Name: "doloribus",
            State: "ERROR",
            UpdateTime: "aut",
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
* `ComposerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
