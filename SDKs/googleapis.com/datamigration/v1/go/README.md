# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1/go
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

    req := operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest{
        Security: operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ConnectionProfileID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            SkipValidation: false,
            UploadType: "suscipit",
            UploadProtocol: "iure",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "magnam",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "debitis",
                        User: "ipsa",
                    },
                    Labels: map[string]string{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        ID: "veritatis",
                        Labels: map[string]string{
                            "perferendis": "ipsam",
                            "repellendus": "sapiente",
                            "quo": "odit",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 870013,
                        },
                    },
                    VpcNetwork: "at",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "NEVER",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "quod",
                    Collation: "quod",
                    DataDiskSizeGb: "esse",
                    DataDiskType: "PD_SSD",
                    DatabaseFlags: map[string]string{
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                    DatabaseVersion: "POSTGRES_12",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "beatae",
                                Label: "commodi",
                                TTL: "molestiae",
                                Value: "modi",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "qui",
                                Label: "impedit",
                                TTL: "cum",
                                Value: "esse",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "ipsum",
                                Label: "excepturi",
                                TTL: "aspernatur",
                                Value: "perferendis",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "ad",
                        RequireSsl: false,
                    },
                    RootPassword: "natus",
                    SecondaryZone: "sed",
                    SourceID: "iste",
                    StorageAutoResizeLimit: "dolor",
                    Tier: "natus",
                    UserLabels: map[string]string{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                    Zone: "corporis",
                },
            },
            DisplayName: "iste",
            Error: &shared.Status{
                Code: 437032,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                    },
                    map[string]interface{}{
                        "dolorem": "corporis",
                    },
                    map[string]interface{}{
                        "nobis": "enim",
                    },
                    map[string]interface{}{
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                },
                Message: "doloribus",
            },
            Labels: map[string]string{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "numquam",
                Host: "commodi",
                Password: "quam",
                Port: 474697,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "velit",
                    ClientCertificate: "error",
                    ClientKey: "quia",
                },
                Username: "Eugene_Brown31",
            },
            Name: "odit",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "quo",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "dimwitted-vaulting.info",
                    Password: "id",
                    Port: 820994,
                    PrivateKey: "aut",
                    Username: "Avery_Mueller9",
                },
                Host: "reiciendis",
                Password: "voluptatibus",
                Port: 878194,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "nihil",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "voluptatibus": "ipsa",
                    "omnis": "voluptate",
                    "cum": "perferendis",
                },
                Username: "Alison97",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "dicta",
                Host: "corporis",
                Password: "dolore",
                Port: 480894,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "dicta",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "harum",
                    ClientCertificate: "enim",
                    ClientKey: "accusamus",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "repudiandae": "quae",
                    "ipsum": "quidem",
                },
                Username: "Kennedi.Mante50",
            },
            Provider: "RDS",
            State: "FAILED",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req)
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

* `DatamigrationProjectsLocationsConnectionProfilesCreate` - Creates a new connection profile in a given project and location.
* `DatamigrationProjectsLocationsConnectionProfilesList` - Retrieves a list of all connection profiles in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesApply` - Applies draft tree onto a specific destination database.
* `DatamigrationProjectsLocationsConversionWorkspacesCommit` - Marks all the data in the conversion workspace as committed.
* `DatamigrationProjectsLocationsConversionWorkspacesConvert` - Creates a draft tree schema for the destination database.
* `DatamigrationProjectsLocationsConversionWorkspacesCreate` - Creates a new conversion workspace in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions` - Retrieves a list of committed revisions of a specific conversion workspace.
* `DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities` - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* `DatamigrationProjectsLocationsConversionWorkspacesList` - Lists conversion workspaces in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport` - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* `DatamigrationProjectsLocationsConversionWorkspacesRollback` - Rolls back a conversion workspace to the last committed snapshot.
* `DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs` - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* `DatamigrationProjectsLocationsConversionWorkspacesSeed` - Imports a snapshot of the source database into the conversion workspace.
* `DatamigrationProjectsLocationsFetchStaticIps` - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* `DatamigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatamigrationProjectsLocationsMigrationJobsCreate` - Creates a new migration job in a given project and location.
* `DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript` - Generate a SSH configuration script to configure the reverse SSH connectivity.
* `DatamigrationProjectsLocationsMigrationJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DatamigrationProjectsLocationsMigrationJobsList` - Lists migration jobs in a given project and location.
* `DatamigrationProjectsLocationsMigrationJobsPatch` - Updates the parameters of a single migration job.
* `DatamigrationProjectsLocationsMigrationJobsPromote` - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* `DatamigrationProjectsLocationsMigrationJobsRestart` - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* `DatamigrationProjectsLocationsMigrationJobsResume` - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* `DatamigrationProjectsLocationsMigrationJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DatamigrationProjectsLocationsMigrationJobsStart` - Start an already created migration job.
* `DatamigrationProjectsLocationsMigrationJobsStop` - Stops a running migration job.
* `DatamigrationProjectsLocationsMigrationJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DatamigrationProjectsLocationsMigrationJobsVerify` - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* `DatamigrationProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatamigrationProjectsLocationsPrivateConnectionsCreate` - Creates a new private connection in a given project and location.
* `DatamigrationProjectsLocationsPrivateConnectionsDelete` - Deletes a single Database Migration Service private connection.
* `DatamigrationProjectsLocationsPrivateConnectionsGet` - Gets details of a single private connection.
* `DatamigrationProjectsLocationsPrivateConnectionsList` - Retrieves a list of private connections in a given project and location.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
