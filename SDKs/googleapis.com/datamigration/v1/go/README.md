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
        DollarXgafv: "2",
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "provident",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "distinctio",
                        User: "quibusdam",
                    },
                    Labels: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        ID: "delectus",
                        Labels: map[string]string{
                            "suscipit": "molestiae",
                            "minus": "placeat",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 528895,
                        },
                    },
                    VpcNetwork: "iusto",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "recusandae",
                    Collation: "temporibus",
                    DataDiskSizeGb: "ab",
                    DataDiskType: "PD_SSD",
                    DatabaseFlags: map[string]string{
                        "deserunt": "perferendis",
                    },
                    DatabaseVersion: "POSTGRES_9_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "sapiente",
                                Label: "quo",
                                TTL: "odit",
                                Value: "at",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "at",
                                Label: "maiores",
                                TTL: "molestiae",
                                Value: "quod",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "quod",
                                Label: "esse",
                                TTL: "totam",
                                Value: "porro",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "dolorum",
                                Label: "dicta",
                                TTL: "nam",
                                Value: "officia",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "occaecati",
                        RequireSsl: false,
                    },
                    RootPassword: "fugit",
                    SecondaryZone: "deleniti",
                    SourceID: "hic",
                    StorageAutoResizeLimit: "optio",
                    Tier: "totam",
                    UserLabels: map[string]string{
                        "commodi": "molestiae",
                    },
                    Zone: "modi",
                },
            },
            DisplayName: "qui",
            Error: &shared.Status{
                Code: 774234,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    map[string]interface{}{
                        "natus": "sed",
                        "iste": "dolor",
                    },
                    map[string]interface{}{
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                    },
                },
                Message: "iste",
            },
            Labels: map[string]string{
                "saepe": "quidem",
                "architecto": "ipsa",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "reiciendis",
                Host: "est",
                Password: "mollitia",
                Port: 670638,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "dolores",
                    ClientCertificate: "dolorem",
                    ClientKey: "corporis",
                },
                Username: "Braulio60",
            },
            Name: "nemo",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "minima",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "nippy-apse.info",
                    Password: "culpa",
                    Port: 988374,
                    PrivateKey: "sapiente",
                    Username: "Bart63",
                },
                Host: "consequuntur",
                Password: "repellat",
                Port: 653108,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "occaecati",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "commodi": "quam",
                    "molestiae": "velit",
                },
                Username: "Linda.Cronin",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "laborum",
                Host: "animi",
                Password: "enim",
                Port: 138183,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "quo",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "sequi",
                    ClientCertificate: "tenetur",
                    ClientKey: "ipsam",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
                Username: "Austyn_Witting46",
            },
            Provider: "RDS",
            State: "FAILED",
        },
        AccessToken: "ipsa",
        Alt: "media",
        Callback: "voluptate",
        ConnectionProfileID: "cum",
        Fields: "perferendis",
        Key: "doloremque",
        OauthToken: "reprehenderit",
        Parent: "ut",
        PrettyPrint: false,
        QuotaUser: "maiores",
        RequestID: "dicta",
        SkipValidation: false,
        UploadType: "corporis",
        UploadProtocol: "dolore",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
