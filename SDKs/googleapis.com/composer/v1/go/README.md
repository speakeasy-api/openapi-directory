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
            Parent: "sit",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "dicta",
                DagGcsPrefix: "debitis",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "voluptatum",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "et",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_LARGE",
                GkeCluster: "dolorem",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "et",
                    Recurrence: "voluptate",
                    StartTime: "iste",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "totam",
                            DisplayName: "dolores",
                        },
                    },
                    Enabled: false,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 6392442863481646880,
                    EnableIPMasqAgent: false,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "odio",
                        ClusterSecondaryRangeName: "dolore",
                        ServicesIpv4CidrBlock: "id",
                        ServicesSecondaryRangeName: "aspernatur",
                        UseIPAliases: true,
                    },
                    Location: "totam",
                    MachineType: "commodi",
                    Network: "quis",
                    OauthScopes: []string{
                        "aut",
                        "odit",
                    },
                    ServiceAccount: "non",
                    Subnetwork: "voluptas",
                    Tags: []string{
                        "aut",
                        "illo",
                    },
                },
                NodeCount: 5558237345453186302,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "officiis",
                    CloudComposerNetworkIpv4CidrBlock: "autem",
                    CloudSQLIpv4CidrBlock: "consectetur",
                    EnablePrivateEnvironment: false,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "CONNECTION_TYPE_UNSPECIFIED",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: true,
                        MasterIpv4CidrBlock: "at",
                    },
                    WebServerIpv4CidrBlock: "ipsum",
                },
                RecoveryConfig: &shared.RecoveryConfig{
                    ScheduledSnapshotsConfig: &shared.ScheduledSnapshotsConfig{
                        Enabled: true,
                        SnapshotCreationSchedule: "modi",
                        SnapshotLocation: "sint",
                        TimeZone: "inventore",
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "exercitationem": "aut",
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                    },
                    EnvVariables: map[string]string{
                        "beatae": "veritatis",
                        "in": "et",
                    },
                    ImageVersion: "omnis",
                    PypiPackages: map[string]string{
                        "ex": "dolores",
                    },
                    PythonVersion: "placeat",
                    SchedulerCount: 2118716725206170867,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "rerum",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "voluptas",
                            Value: "quam",
                        },
                        shared.AllowedIPRange{
                            Description: "reprehenderit",
                            Value: "qui",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 8056746523676181822,
                        CPU: 72.199997,
                        MemoryGb: 72.199997,
                        StorageGb: 22.100000,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 12.100000,
                        MemoryGb: 76.099998,
                        StorageGb: 40.099998,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 28.100000,
                        MaxCount: 3604381780091280195,
                        MemoryGb: 20.100000,
                        MinCount: 759605945513541974,
                        StorageGb: 31.200001,
                    },
                },
            },
            CreateTime: "et",
            Labels: map[string]string{
                "qui": "earum",
                "illo": "omnis",
                "ut": "consequatur",
            },
            Name: "dolor",
            State: "DELETING",
            UpdateTime: "error",
            UUID: "reprehenderit",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
