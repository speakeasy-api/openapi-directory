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
            Parent: "quisquam",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "pariatur",
            ConnectionProfileID: "magnam",
            Fields: "at",
            Key: "quia",
            OauthToken: "cupiditate",
            PrettyPrint: true,
            QuotaUser: "sint",
            RequestID: "minus",
            UploadType: "fugiat",
            UploadProtocol: "quae",
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "rerum",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "voluptatem",
                        User: "quo",
                    },
                    Labels: map[string]string{
                        "voluptatibus": "atque",
                        "impedit": "quo",
                        "totam": "beatae",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "nihil": "earum",
                            "in": "molestias",
                            "delectus": "qui",
                        },
                        ID: "omnis",
                        Labels: map[string]string{
                            "ut": "maxime",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 7798248647133471774,
                        },
                    },
                    VpcNetwork: "ut",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: true,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "sint",
                    Collation: "assumenda",
                    DataDiskSizeGb: "facere",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "quo": "eum",
                        "et": "natus",
                        "aspernatur": "dolor",
                    },
                    DatabaseVersion: "MYSQL_8_0",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "quo",
                                Label: "ipsum",
                                TTL: "suscipit",
                                Value: "cumque",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "nisi",
                                Label: "aspernatur",
                                TTL: "animi",
                                Value: "dolorum",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "voluptas",
                        RequireSsl: false,
                    },
                    RootPassword: "ad",
                    SecondaryZone: "ut",
                    SourceID: "ut",
                    StorageAutoResizeLimit: "nobis",
                    Tier: "ut",
                    UserLabels: map[string]string{
                        "praesentium": "amet",
                        "est": "et",
                    },
                    Zone: "et",
                },
            },
            DisplayName: "quasi",
            Error: &shared.Status{
                Code: 8148871817430478862,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "vel": "sed",
                        "qui": "et",
                    },
                    map[string]interface{}{
                        "quasi": "pariatur",
                        "eius": "soluta",
                        "rerum": "ex",
                    },
                    map[string]interface{}{
                        "ratione": "amet",
                        "ipsam": "autem",
                        "est": "aut",
                    },
                },
                Message: "ipsam",
            },
            Labels: map[string]string{
                "temporibus": "eum",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "qui",
                Host: "quidem",
                Password: "eos",
                Port: 1905824125619466350,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "aliquam",
                    ClientCertificate: "fugit",
                    ClientKey: "consequatur",
                },
                Username: "excepturi",
            },
            Name: "est",
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "dolores",
                Host: "eum",
                Password: "sit",
                Port: 6636801957865916271,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ea",
                    ClientCertificate: "fugit",
                    ClientKey: "ad",
                },
                Username: "sapiente",
            },
            Provider: "RDS",
            State: "CREATING",
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
* `DatamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
