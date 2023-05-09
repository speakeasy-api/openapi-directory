# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1beta1/go
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
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumAlways.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    DataDiskSizeGb: sdk.String("distinctio"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdHdd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumMysql56.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("magnam"),
                                Label: sdk.String("debitis"),
                                TTL: sdk.String("ipsa"),
                                Value: sdk.String("delectus"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("tempora"),
                                Label: sdk.String("suscipit"),
                                TTL: sdk.String("molestiae"),
                                Value: sdk.String("minus"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("placeat"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("voluptatum"),
                    SourceID: sdk.String("iusto"),
                    StorageAutoResizeLimit: sdk.String("excepturi"),
                    Tier: sdk.String("nisi"),
                    UserLabels: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    Zone: sdk.String("sapiente"),
                },
            },
            DisplayName: sdk.String("quo"),
            Error: &shared.Status{
                Code: sdk.Int(140350),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    map[string]interface{}{
                        "nam": "officia",
                    },
                    map[string]interface{}{
                        "fugit": "deleniti",
                        "hic": "optio",
                        "totam": "beatae",
                    },
                    map[string]interface{}{
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
                Message: sdk.String("cum"),
            },
            Labels: map[string]string{
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("ad"),
                Host: sdk.String("natus"),
                Password: sdk.String("sed"),
                Port: sdk.Int(612096),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("dolor"),
                    ClientCertificate: sdk.String("natus"),
                    ClientKey: sdk.String("laboriosam"),
                },
                Username: sdk.String("Tyra.Turcotte35"),
            },
            Name: sdk.String("Brad Turcotte Jr."),
            Provider: shared.ConnectionProfileProviderEnumRds.ToPointer(),
            State: shared.ConnectionProfileStateEnumDeleting.ToPointer(),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        ConnectionProfileID: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
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
* [DatamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [DatamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [DatamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [DatamigrationProjectsLocationsMigrationJobsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [DatamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [DatamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [DatamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [DatamigrationProjectsLocationsMigrationJobsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [DatamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [DatamigrationProjectsLocationsMigrationJobsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DatamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [DatamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatamigrationProjectsLocationsOperationsDelete](docs/projects/README.md#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatamigrationProjectsLocationsOperationsGet](docs/projects/README.md#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
