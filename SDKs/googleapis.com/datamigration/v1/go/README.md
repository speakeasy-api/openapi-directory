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
            Parent: "sit",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ConnectionProfileID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            SkipValidation: false,
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "ut",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "dolorem",
                        User: "et",
                    },
                    Labels: map[string]string{
                        "iste": "vitae",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "dolores": "illum",
                            "debitis": "vel",
                            "odio": "dolore",
                        },
                        ID: "id",
                        Labels: map[string]string{
                            "accusantium": "totam",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 6745438398739480977,
                        },
                    },
                    VpcNetwork: "quis",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: true,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "non",
                    Collation: "voluptas",
                    DataDiskSizeGb: "omnis",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "sed": "officiis",
                    },
                    DatabaseVersion: "POSTGRES_12",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "nobis",
                                Label: "odio",
                                TTL: "qui",
                                Value: "recusandae",
                            },
                        },
                        EnableIpv4: true,
                        PrivateNetwork: "ipsum",
                        RequireSsl: true,
                    },
                    RootPassword: "modi",
                    SecondaryZone: "sint",
                    SourceID: "inventore",
                    StorageAutoResizeLimit: "ut",
                    Tier: "exercitationem",
                    UserLabels: map[string]string{
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                        "dolor": "beatae",
                    },
                    Zone: "veritatis",
                },
            },
            DisplayName: "in",
            Error: &shared.Status{
                Code: 3508963237347473586,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ex": "dolores",
                    },
                    map[string]interface{}{
                        "vel": "rerum",
                    },
                },
                Message: "mollitia",
            },
            Labels: map[string]string{
                "quam": "reprehenderit",
                "qui": "qui",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "unde",
                Host: "in",
                Password: "autem",
                Port: 8086159467323165929,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ut",
                    ClientCertificate: "itaque",
                    ClientKey: "ab",
                },
                Username: "neque",
            },
            Name: "ullam",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "et",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "accusantium",
                    Password: "esse",
                    Port: 5902760509050140210,
                    PrivateKey: "quam",
                    Username: "velit",
                },
                Host: "cumque",
                Password: "soluta",
                Port: 759605945513541974,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "voluptates",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "et": "optio",
                    "qui": "earum",
                    "illo": "omnis",
                },
                Username: "ut",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "consequatur",
                Host: "dolor",
                Password: "commodi",
                Port: 1925401661646756611,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "reprehenderit",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "consectetur",
                    ClientCertificate: "nostrum",
                    ClientKey: "ut",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "sed": "a",
                    "soluta": "aut",
                    "quas": "consequuntur",
                },
                Username: "laudantium",
            },
            Provider: "AURORA",
            State: "FAILED",
        },
    }
    
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req)
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

* `DatamigrationProjectsLocationsConnectionProfilesCreate` - Creates a new connection profile in a given project and location.
* `DatamigrationProjectsLocationsConnectionProfilesList` - Retrieves a list of all connection profiles in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesApply` - Apply draft tree onto a specific destination database
* `DatamigrationProjectsLocationsConversionWorkspacesCommit` - Marks all the data in the conversion workspace as committed.
* `DatamigrationProjectsLocationsConversionWorkspacesConvert` - Creates a draft tree schema for the destination database.
* `DatamigrationProjectsLocationsConversionWorkspacesCreate` - Creates a new conversion workspace in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions` - Retrieves a list of committed revisions of a specific conversion workspace.
* `DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities` - Use this method to describe the database entities tree for a specific conversion workspace and a specific tree type. The DB Entities are not a resource like conversion workspace or mapping rule, and they can not be created, updated or deleted like one. Instead they are simple data objects describing the structure of the client database.
* `DatamigrationProjectsLocationsConversionWorkspacesList` - Lists conversion workspaces in a given project and location.
* `DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport` - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* `DatamigrationProjectsLocationsConversionWorkspacesRollback` - Rollbacks a conversion workspace to the last committed spanshot.
* `DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs` - Use this method to search/list the background jobs for a specific conversion workspace. The background jobs are not a resource like conversion workspace or mapping rule, and they can not be created, updated or deleted like one. Instead they are a way to expose the data plane jobs log.
* `DatamigrationProjectsLocationsConversionWorkspacesSeed` - Imports a snapshot of the source database into the conversion workspace.
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
* `DatamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatamigrationProjectsLocationsPrivateConnectionsCreate` - Creates a new private connection in a given project and location.
* `DatamigrationProjectsLocationsPrivateConnectionsDelete` - Deletes a single Database Migration Service private connection.
* `DatamigrationProjectsLocationsPrivateConnectionsGet` - Gets details of a single private connection.
* `DatamigrationProjectsLocationsPrivateConnectionsList` - Retrieves a list of private connections in a given project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
