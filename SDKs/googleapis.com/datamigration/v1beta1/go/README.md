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
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "distinctio",
                    DataDiskType: "PD_HDD",
                    DatabaseFlags: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    DatabaseVersion: "MYSQL_5_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "magnam",
                                Label: "debitis",
                                TTL: "ipsa",
                                Value: "delectus",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "tempora",
                                Label: "suscipit",
                                TTL: "molestiae",
                                Value: "minus",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "placeat",
                        RequireSsl: false,
                    },
                    RootPassword: "voluptatum",
                    SourceID: "iusto",
                    StorageAutoResizeLimit: "excepturi",
                    Tier: "nisi",
                    UserLabels: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    Zone: "sapiente",
                },
            },
            DisplayName: "quo",
            Error: &shared.Status{
                Code: 140350,
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
                Message: "cum",
            },
            Labels: map[string]string{
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "ad",
                Host: "natus",
                Password: "sed",
                Port: 612096,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "dolor",
                    ClientCertificate: "natus",
                    ClientKey: "laboriosam",
                },
                Username: "Tyra.Turcotte35",
            },
            Name: "iste",
            Provider: "CLOUDSQL",
            State: "FAILED",
        },
        AccessToken: "quidem",
        Alt: "json",
        Callback: "ipsa",
        ConnectionProfileID: "reiciendis",
        Fields: "est",
        Key: "mollitia",
        OauthToken: "laborum",
        Parent: "dolores",
        PrettyPrint: false,
        QuotaUser: "dolorem",
        RequestID: "corporis",
        UploadType: "explicabo",
        UploadProtocol: "nobis",
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
* `DatamigrationProjectsLocationsConnectionProfilesList` - Retrieve a list of all connection profiles in a given project and location.
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
* `DatamigrationProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatamigrationProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
