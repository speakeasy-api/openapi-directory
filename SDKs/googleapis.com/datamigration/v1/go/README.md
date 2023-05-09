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
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: sdk.String("provident"),
                Settings: &shared.AlloyDbSettingsInput{
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("distinctio"),
                    },
                    InitialUser: &shared.UserPasswordInput{
                        Password: sdk.String("quibusdam"),
                        User: sdk.String("unde"),
                    },
                    Labels: map[string]string{
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        ID: sdk.String("796ed151-a05d-4fc2-9df7-cc78ca1ba928"),
                        Labels: map[string]string{
                            "optio": "totam",
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: sdk.Int(736918),
                        },
                    },
                    VpcNetwork: sdk.String("esse"),
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumSQLActivationPolicyUnspecified.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    AvailabilityType: shared.CloudSQLSettingsAvailabilityTypeEnumZonal.ToPointer(),
                    CmekKeyName: sdk.String("aspernatur"),
                    Collation: sdk.String("perferendis"),
                    DataDiskSizeGb: sdk.String("ad"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdSsd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "iste": "dolor",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumMysql80.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AllocatedIPRange: sdk.String("laboriosam"),
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("saepe"),
                                Label: sdk.String("fuga"),
                                TTL: sdk.String("in"),
                                Value: sdk.String("corporis"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("iste"),
                                Label: sdk.String("iure"),
                                TTL: sdk.String("saepe"),
                                Value: sdk.String("quidem"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("architecto"),
                                Label: sdk.String("ipsa"),
                                TTL: sdk.String("reiciendis"),
                                Value: sdk.String("est"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("mollitia"),
                                Label: sdk.String("laborum"),
                                TTL: sdk.String("dolores"),
                                Value: sdk.String("dolorem"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("corporis"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("explicabo"),
                    SecondaryZone: sdk.String("nobis"),
                    SourceID: sdk.String("enim"),
                    StorageAutoResizeLimit: sdk.String("omnis"),
                    Tier: sdk.String("nemo"),
                    UserLabels: map[string]string{
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                    Zone: sdk.String("doloribus"),
                },
            },
            DisplayName: sdk.String("sapiente"),
            Error: &shared.Status{
                Code: sdk.Int(102044),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "culpa": "consequuntur",
                    },
                    map[string]interface{}{
                        "mollitia": "occaecati",
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    map[string]interface{}{
                        "quis": "vitae",
                    },
                },
                Message: sdk.String("laborum"),
            },
            Labels: map[string]string{
                "enim": "odit",
                "quo": "sequi",
                "tenetur": "ipsam",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("id"),
                Host: sdk.String("possimus"),
                Password: sdk.String("aut"),
                Port: sdk.Int(97101),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("error"),
                    ClientCertificate: sdk.String("temporibus"),
                    ClientKey: sdk.String("laborum"),
                },
                Username: sdk.String("Austyn_Witting46"),
            },
            Name: sdk.String("Jan Bednar"),
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: sdk.String("cum"),
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: sdk.String("agile-arch-rival.info"),
                    Password: sdk.String("ut"),
                    Port: sdk.Int(979587),
                    PrivateKey: sdk.String("dicta"),
                    Username: sdk.String("Floy.Gulgowski"),
                },
                Host: sdk.String("harum"),
                Password: sdk.String("enim"),
                Port: sdk.Int(880476),
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: sdk.String("commodi"),
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "quae": "ipsum",
                    "quidem": "molestias",
                    "excepturi": "pariatur",
                    "modi": "praesentium",
                },
                Username: sdk.String("Judah92"),
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: sdk.String("sint"),
                Host: sdk.String("veritatis"),
                Password: sdk.String("itaque"),
                Port: sdk.Int(277718),
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: sdk.String("enim"),
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("consequatur"),
                    ClientCertificate: sdk.String("est"),
                    ClientKey: sdk.String("quibusdam"),
                },
                StaticIPConnectivity: map[string]interface{}{
                    "deserunt": "distinctio",
                },
                Username: sdk.String("Ron18"),
            },
            Provider: shared.ConnectionProfileProviderEnumCloudsql.ToPointer(),
            State: shared.ConnectionProfileStateEnumUpdating.ToPointer(),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        ConnectionProfileID: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        RequestID: sdk.String("tempora"),
        SkipValidation: sdk.Bool(false),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
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

* [DatamigrationProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [DatamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesApply](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [DatamigrationProjectsLocationsConversionWorkspacesCommit](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [DatamigrationProjectsLocationsConversionWorkspacesConvert](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [DatamigrationProjectsLocationsConversionWorkspacesCreate](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [DatamigrationProjectsLocationsConversionWorkspacesList](docs/projects/README.md#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [DatamigrationProjectsLocationsConversionWorkspacesRollback](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [DatamigrationProjectsLocationsConversionWorkspacesSeed](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [DatamigrationProjectsLocationsFetchStaticIps](docs/projects/README.md#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [DatamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [DatamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [DatamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [DatamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [DatamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [DatamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [DatamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [DatamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [DatamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [DatamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatamigrationProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [DatamigrationProjectsLocationsPrivateConnectionsDelete](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [DatamigrationProjectsLocationsPrivateConnectionsGet](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatamigrationProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
