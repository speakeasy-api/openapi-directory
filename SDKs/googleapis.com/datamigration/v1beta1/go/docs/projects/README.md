# Projects

### Available Operations

* [DatamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [DatamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [DatamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [DatamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [DatamigrationProjectsLocationsMigrationJobsGetIamPolicy](#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [DatamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [DatamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [DatamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [DatamigrationProjectsLocationsMigrationJobsSetIamPolicy](#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [DatamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [DatamigrationProjectsLocationsMigrationJobsTestIamPermissions](#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DatamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [DatamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatamigrationProjectsLocationsOperationsDelete](#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatamigrationProjectsLocationsOperationsGet](#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## DatamigrationProjectsLocationsConnectionProfilesCreate

Creates a new connection profile in a given project and location.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumAlways.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    DataDiskSizeGb: sdk.String("culpa"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdHdd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "architecto": "mollitia",
                        "dolorem": "culpa",
                        "consequuntur": "repellat",
                        "mollitia": "occaecati",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumMysql56.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("quam"),
                                Label: sdk.String("molestiae"),
                                TTL: sdk.String("velit"),
                                Value: sdk.String("error"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("quia"),
                                Label: sdk.String("quis"),
                                TTL: sdk.String("vitae"),
                                Value: sdk.String("laborum"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("animi"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("enim"),
                    SourceID: sdk.String("odit"),
                    StorageAutoResizeLimit: sdk.String("quo"),
                    Tier: sdk.String("sequi"),
                    UserLabels: map[string]string{
                        "ipsam": "id",
                        "possimus": "aut",
                        "quasi": "error",
                        "temporibus": "laborum",
                    },
                    Zone: sdk.String("quasi"),
                },
            },
            DisplayName: sdk.String("reiciendis"),
            Error: &shared.Status{
                Code: sdk.Int(976460),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "praesentium": "voluptatibus",
                        "ipsa": "omnis",
                    },
                    map[string]interface{}{
                        "cum": "perferendis",
                        "doloremque": "reprehenderit",
                    },
                    map[string]interface{}{
                        "maiores": "dicta",
                        "corporis": "dolore",
                    },
                    map[string]interface{}{
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                },
                Message: sdk.String("commodi"),
            },
            Labels: map[string]string{
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
                "modi": "praesentium",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("rem"),
                Host: sdk.String("voluptates"),
                Password: sdk.String("quasi"),
                Port: sdk.Int(921158),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("sint"),
                    ClientCertificate: sdk.String("veritatis"),
                    ClientKey: sdk.String("itaque"),
                },
                Username: sdk.String("Drew66"),
            },
            Name: sdk.String("Benjamin O'Connell"),
            Provider: shared.ConnectionProfileProviderEnumDatabaseProviderUnspecified.ToPointer(),
            State: shared.ConnectionProfileStateEnumCreating.ToPointer(),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        ConnectionProfileID: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("assumenda"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        RequestID: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
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

## DatamigrationProjectsLocationsConnectionProfilesList

Retrieve a list of all connection profiles in a given project and location.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesList(ctx, operations.DatamigrationProjectsLocationsConnectionProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("delectus"),
        Filter: sdk.String("eum"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("eligendi"),
        OrderBy: sdk.String("sint"),
        PageSize: sdk.Int64(396098),
        PageToken: sdk.String("provident"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DatamigrationProjectsLocationsConnectionProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionProfilesResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsList(ctx, operations.DatamigrationProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Filter: sdk.String("illum"),
        Key: sdk.String("maiores"),
        Name: "Keith Gulgowski",
        OauthToken: sdk.String("ea"),
        PageSize: sdk.Int64(396506),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.DatamigrationProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsCreate

Creates a new migration job in a given project and location.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsCreate(ctx, operations.DatamigrationProjectsLocationsMigrationJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MigrationJobInput: &shared.MigrationJobInput{
            Destination: sdk.String("accusamus"),
            DestinationDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumMysql.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumRds.ToPointer(),
            },
            DisplayName: sdk.String("provident"),
            DumpPath: sdk.String("nam"),
            Error: &shared.Status{
                Code: sdk.Int(659669),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "sapiente": "amet",
                        "deserunt": "nisi",
                        "vel": "natus",
                    },
                    map[string]interface{}{
                        "molestiae": "perferendis",
                        "nihil": "magnam",
                        "distinctio": "id",
                    },
                    map[string]interface{}{
                        "labore": "suscipit",
                        "natus": "nobis",
                    },
                },
                Message: sdk.String("eum"),
            },
            Labels: map[string]string{
                "aspernatur": "architecto",
                "magnam": "et",
                "excepturi": "ullam",
                "provident": "quos",
            },
            Name: sdk.String("Kenneth O'Hara"),
            ReverseSSHConnectivity: &shared.ReverseSSHConnectivity{
                VM: sdk.String("ad"),
                VMIP: sdk.String("eum"),
                VMPort: sdk.Int(221262),
                Vpc: sdk.String("necessitatibus"),
            },
            Source: sdk.String("odit"),
            SourceDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumDatabaseEngineUnspecified.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumDatabaseProviderUnspecified.ToPointer(),
            },
            State: shared.MigrationJobStateEnumFailed.ToPointer(),
            StaticIPConnectivity: map[string]interface{}{
                "debitis": "eius",
                "maxime": "deleniti",
                "facilis": "in",
                "architecto": "architecto",
            },
            Type: shared.MigrationJobTypeEnumContinuous.ToPointer(),
            VpcPeeringConnectivity: &shared.VpcPeeringConnectivity{
                Vpc: sdk.String("ullam"),
            },
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("sed"),
        MigrationJobID: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        RequestID: sdk.String("praesentium"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsCreateSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript

Generate a SSH configuration script to configure the reverse SSH connectivity.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript(ctx, operations.DatamigrationProjectsLocationsMigrationJobsGenerateSSHScriptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateSSHScriptRequest: &shared.GenerateSSHScriptRequest{
            VM: sdk.String("quo"),
            VMCreationConfig: &shared.VMCreationConfig{
                Subnet: sdk.String("illum"),
                VMMachineType: sdk.String("pariatur"),
                VMZone: sdk.String("maxime"),
            },
            VMPort: sdk.Int(411397),
            VMSelectionConfig: &shared.VMSelectionConfig{
                VMZone: sdk.String("excepturi"),
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("ab"),
        Key: sdk.String("maiores"),
        MigrationJob: "quidem",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nam"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsGenerateSSHScriptSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHScript != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsGetIamPolicy(ctx, operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("amet"),
        OptionsRequestedPolicyVersion: sdk.Int64(11714),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        Resource: "corporis",
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsList

Lists migration jobs in a given project and location.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsList(ctx, operations.DatamigrationProjectsLocationsMigrationJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Filter: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        OrderBy: sdk.String("eos"),
        PageSize: sdk.Int64(18521),
        PageToken: sdk.String("dolores"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMigrationJobsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsPatch

Updates the parameters of a single migration job.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsPatch(ctx, operations.DatamigrationProjectsLocationsMigrationJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MigrationJobInput: &shared.MigrationJobInput{
            Destination: sdk.String("hic"),
            DestinationDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumMysql.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumCloudsql.ToPointer(),
            },
            DisplayName: sdk.String("facilis"),
            DumpPath: sdk.String("perspiciatis"),
            Error: &shared.Status{
                Code: sdk.Int(31838),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "blanditiis": "error",
                    },
                    map[string]interface{}{
                        "occaecati": "rerum",
                    },
                    map[string]interface{}{
                        "asperiores": "earum",
                    },
                    map[string]interface{}{
                        "iste": "dolorum",
                        "deleniti": "pariatur",
                    },
                },
                Message: sdk.String("provident"),
            },
            Labels: map[string]string{
                "libero": "delectus",
                "quaerat": "quos",
                "aliquid": "dolorem",
                "dolorem": "dolor",
            },
            Name: sdk.String("Tiffany Welch"),
            ReverseSSHConnectivity: &shared.ReverseSSHConnectivity{
                VM: sdk.String("voluptate"),
                VMIP: sdk.String("dignissimos"),
                VMPort: sdk.Int(970237),
                Vpc: sdk.String("amet"),
            },
            Source: sdk.String("dolorum"),
            SourceDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumDatabaseEngineUnspecified.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumDatabaseProviderUnspecified.ToPointer(),
            },
            State: shared.MigrationJobStateEnumStateUnspecified.ToPointer(),
            StaticIPConnectivity: map[string]interface{}{
                "iure": "odio",
            },
            Type: shared.MigrationJobTypeEnumTypeUnspecified.ToPointer(),
            VpcPeeringConnectivity: &shared.VpcPeeringConnectivity{
                Vpc: sdk.String("accusamus"),
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        Name: "Miss Paul Steuber",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        RequestID: sdk.String("dolorum"),
        UpdateMask: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsPatchSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsPromote

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsPromote(ctx, operations.DatamigrationProjectsLocationsMigrationJobsPromoteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "nihil": "ipsum",
            "voluptate": "id",
            "saepe": "eius",
            "aspernatur": "perferendis",
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("ad"),
        Key: sdk.String("saepe"),
        Name: "Rosie McKenzie",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("at"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsPromoteSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsRestart

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsRestart(ctx, operations.DatamigrationProjectsLocationsMigrationJobsRestartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "vel": "quod",
            "officiis": "qui",
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("harum"),
        Key: sdk.String("iusto"),
        Name: "Rosalie White",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsRestartSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsResume

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsResume(ctx, operations.DatamigrationProjectsLocationsMigrationJobsResumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "nihil": "sit",
            "expedita": "neque",
            "sed": "vel",
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("quam"),
        Key: sdk.String("ipsum"),
        Name: "Norma McGlynn",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsResumeSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsSetIamPolicy(ctx, operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "facilis",
                                    "aliquid",
                                    "quam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("temporibus"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("neque"),
                            Expression: sdk.String("fugit"),
                            Location: sdk.String("magni"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "ullam",
                        },
                        Role: sdk.String("nam"),
                    },
                },
                Etag: sdk.String("hic"),
                Version: sdk.Int(30452),
            },
            UpdateMask: sdk.String("cumque"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "quos",
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsStart

Start an already created migration job.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsStart(ctx, operations.DatamigrationProjectsLocationsMigrationJobsStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolorem": "dolore",
            "labore": "adipisci",
            "dolorum": "architecto",
            "quae": "aut",
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        Key: sdk.String("repellendus"),
        Name: "Domingo Grady",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsStartSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsStop

Stops a running migration job.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsStop(ctx, operations.DatamigrationProjectsLocationsMigrationJobsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quisquam": "vero",
            "omnis": "quis",
            "ipsum": "delectus",
            "voluptate": "consectetur",
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("hic"),
        Key: sdk.String("distinctio"),
        Name: "Lonnie Murray",
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsStopSecurity{
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

## DatamigrationProjectsLocationsMigrationJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsTestIamPermissions(ctx, operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "impedit",
                "aut",
                "voluptatibus",
            },
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("porro"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        Resource: "eligendi",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsMigrationJobsVerify

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsMigrationJobsVerify(ctx, operations.DatamigrationProjectsLocationsMigrationJobsVerifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ipsam": "ea",
            "aspernatur": "vel",
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("ex"),
        Key: sdk.String("laudantium"),
        Name: "Ms. Cindy Wuckert",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DatamigrationProjectsLocationsMigrationJobsVerifySecurity{
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

## DatamigrationProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsOperationsCancel(ctx, operations.DatamigrationProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ea": "impedit",
            "corporis": "veniam",
            "aliquid": "inventore",
            "magnam": "ea",
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("minima"),
        Name: "Mr. Elsa Reinger",
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DatamigrationProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsOperationsDelete(ctx, operations.DatamigrationProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("laborum"),
        Force: sdk.Bool(false),
        Key: sdk.String("placeat"),
        Name: "Agnes Johnston",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        RequestID: sdk.String("voluptas"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatamigrationProjectsLocationsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsOperationsGet(ctx, operations.DatamigrationProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("molestiae"),
        Name: "Viola Gibson",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.DatamigrationProjectsLocationsOperationsGetSecurity{
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

## DatamigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.DatamigrationProjectsLocationsOperationsList(ctx, operations.DatamigrationProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("assumenda"),
        Filter: sdk.String("eos"),
        Key: sdk.String("praesentium"),
        Name: "Harold Bednar",
        OauthToken: sdk.String("neque"),
        PageSize: sdk.Int64(778696),
        PageToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DatamigrationProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
