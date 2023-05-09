# Projects

### Available Operations

* [DatamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [DatamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesApply](#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [DatamigrationProjectsLocationsConversionWorkspacesCommit](#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [DatamigrationProjectsLocationsConversionWorkspacesConvert](#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [DatamigrationProjectsLocationsConversionWorkspacesCreate](#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [DatamigrationProjectsLocationsConversionWorkspacesList](#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [DatamigrationProjectsLocationsConversionWorkspacesRollback](#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [DatamigrationProjectsLocationsConversionWorkspacesSeed](#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [DatamigrationProjectsLocationsFetchStaticIps](#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [DatamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [DatamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsGenerateSSHScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [DatamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [DatamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [DatamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [DatamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [DatamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [DatamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [DatamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [DatamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [DatamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatamigrationProjectsLocationsPrivateConnectionsCreate](#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [DatamigrationProjectsLocationsPrivateConnectionsDelete](#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [DatamigrationProjectsLocationsPrivateConnectionsGet](#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatamigrationProjectsLocationsPrivateConnectionsList](#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: sdk.String("delectus"),
                Settings: &shared.AlloyDbSettingsInput{
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("eum"),
                    },
                    InitialUser: &shared.UserPasswordInput{
                        Password: sdk.String("non"),
                        User: sdk.String("eligendi"),
                    },
                    Labels: map[string]string{
                        "aliquid": "provident",
                        "necessitatibus": "sint",
                        "officia": "dolor",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "a": "dolorum",
                            "in": "in",
                            "illum": "maiores",
                            "rerum": "dicta",
                        },
                        ID: sdk.String("4cd66ae3-95ef-4b9b-a88f-3a66997074ba"),
                        Labels: map[string]string{
                            "labore": "suscipit",
                            "natus": "nobis",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: sdk.Int(428769),
                        },
                    },
                    VpcNetwork: sdk.String("vero"),
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumSQLActivationPolicyUnspecified.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    AvailabilityType: shared.CloudSQLSettingsAvailabilityTypeEnumSQLAvailabilityTypeUnspecified.ToPointer(),
                    CmekKeyName: sdk.String("magnam"),
                    Collation: sdk.String("et"),
                    DataDiskSizeGb: sdk.String("excepturi"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdSsd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "quos": "sint",
                        "accusantium": "mollitia",
                        "reiciendis": "mollitia",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumPostgres96.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AllocatedIPRange: sdk.String("eum"),
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("necessitatibus"),
                                Label: sdk.String("odit"),
                                TTL: sdk.String("nemo"),
                                Value: sdk.String("quasi"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("iure"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("doloribus"),
                    SecondaryZone: sdk.String("debitis"),
                    SourceID: sdk.String("eius"),
                    StorageAutoResizeLimit: sdk.String("maxime"),
                    Tier: sdk.String("deleniti"),
                    UserLabels: map[string]string{
                        "in": "architecto",
                        "architecto": "repudiandae",
                        "ullam": "expedita",
                    },
                    Zone: sdk.String("nihil"),
                },
            },
            DisplayName: sdk.String("repellat"),
            Error: &shared.Status{
                Code: sdk.Int(841140),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "pariatur": "accusantium",
                        "consequuntur": "praesentium",
                        "natus": "magni",
                        "sunt": "quo",
                    },
                },
                Message: sdk.String("illum"),
            },
            Labels: map[string]string{
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
                "ab": "maiores",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("quidem"),
                Host: sdk.String("ipsam"),
                Password: sdk.String("voluptate"),
                Port: sdk.Int(420075),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("nam"),
                    ClientCertificate: sdk.String("eaque"),
                    ClientKey: sdk.String("pariatur"),
                },
                Username: sdk.String("Freddie85"),
            },
            Name: sdk.String("Jennifer Runolfsdottir"),
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: sdk.String("libero"),
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: sdk.String("shy-closet.info"),
                    Password: sdk.String("totam"),
                    Port: sdk.Int(489549),
                    PrivateKey: sdk.String("eaque"),
                    Username: sdk.String("Eulah1"),
                },
                Host: sdk.String("dolores"),
                Password: sdk.String("minus"),
                Port: sdk.Int(463451),
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: sdk.String("dolor"),
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "nostrum": "hic",
                    "recusandae": "omnis",
                    "facilis": "perspiciatis",
                    "voluptatem": "porro",
                },
                Username: sdk.String("Casimer.Kutch"),
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: sdk.String("occaecati"),
                Host: sdk.String("rerum"),
                Password: sdk.String("adipisci"),
                Port: sdk.Int(992397),
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: sdk.String("earum"),
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("modi"),
                    ClientCertificate: sdk.String("iste"),
                    ClientKey: sdk.String("dolorum"),
                },
                StaticIPConnectivity: map[string]interface{}{
                    "pariatur": "provident",
                    "nobis": "libero",
                    "delectus": "quaerat",
                },
                Username: sdk.String("Kayden20"),
            },
            Provider: shared.ConnectionProfileProviderEnumCloudsql.ToPointer(),
            State: shared.ConnectionProfileStateEnumDraft.ToPointer(),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        ConnectionProfileID: sdk.String("cum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        RequestID: sdk.String("numquam"),
        SkipValidation: sdk.Bool(false),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ipsa"),
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

## DatamigrationProjectsLocationsConnectionProfilesList

Retrieves a list of all connection profiles in a given project and location.

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
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("accusamus"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("voluptas"),
        OrderBy: sdk.String("natus"),
        PageSize: sdk.Int64(179603),
        PageToken: sdk.String("atque"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
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

## DatamigrationProjectsLocationsConversionWorkspacesApply

Applies draft tree onto a specific destination database.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesApply(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesApplyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplyConversionWorkspaceRequest: &shared.ApplyConversionWorkspaceRequest{
            ConnectionProfile: sdk.String("iusto"),
            Filter: sdk.String("voluptate"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("distinctio"),
        Name: "Jessie Emmerich",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesApplySecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesCommit

Marks all the data in the conversion workspace as committed.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesCommit(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesCommitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CommitConversionWorkspaceRequest: &shared.CommitConversionWorkspaceRequest{
            CommitName: sdk.String("optio"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("deserunt"),
        Name: "Derek Sipes",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesConvert

Creates a draft tree schema for the destination database.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesConvert(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesConvertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConvertConversionWorkspaceRequest: &shared.ConvertConversionWorkspaceRequest{
            AutoCommit: sdk.Bool(false),
            Filter: sdk.String("quod"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("a"),
        Key: sdk.String("esse"),
        Name: "Tyrone Emard",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesCreate

Creates a new conversion workspace in a given project and location.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesCreate(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConversionWorkspaceInput: &shared.ConversionWorkspaceInput{
            Destination: &shared.DatabaseEngineInfo{
                Engine: shared.DatabaseEngineInfoEngineEnumDatabaseEngineUnspecified.ToPointer(),
                Version: sdk.String("sapiente"),
            },
            DisplayName: sdk.String("totam"),
            GlobalSettings: map[string]string{
                "sit": "expedita",
                "neque": "sed",
            },
            Name: sdk.String("Kelli Hintz"),
            Source: &shared.DatabaseEngineInfo{
                Engine: shared.DatabaseEngineInfoEngineEnumDatabaseEngineUnspecified.ToPointer(),
                Version: sdk.String("incidunt"),
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        ConversionWorkspaceID: sdk.String("pariatur"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("laborum"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        RequestID: sdk.String("aspernatur"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions

Retrieves a list of committed revisions of a specific conversion workspace.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestias"),
        CommitID: sdk.String("temporibus"),
        ConversionWorkspace: "qui",
        Fields: sdk.String("neque"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConversionWorkspaceRevisionsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities

Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        CommitID: sdk.String("soluta"),
        ConversionWorkspace: "nobis",
        Fields: sdk.String("et"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("veritatis"),
        PageSize: sdk.Int64(749255),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        Tree: operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnumDraftTree.ToPointer(),
        Uncommitted: sdk.Bool(false),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatabaseEntitiesResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsConversionWorkspacesList

Lists conversion workspaces in a given project and location.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesList(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("aut"),
        PageSize: sdk.Int64(555649),
        PageToken: sdk.String("itaque"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("porro"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversionWorkspacesResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport

Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImport(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportMappingRulesRequest: &shared.ImportMappingRulesRequest{
            AutoCommit: sdk.Bool(false),
            RulesFiles: []shared.RulesFile{
                shared.RulesFile{
                    RulesContent: sdk.String("facilis"),
                    RulesSourceFilename: sdk.String("cupiditate"),
                },
                shared.RulesFile{
                    RulesContent: sdk.String("qui"),
                    RulesSourceFilename: sdk.String("quae"),
                },
            },
            RulesFormat: shared.ImportMappingRulesRequestRulesFormatEnumImportRulesFileFormatHarbourBridgeSessionFile.ToPointer(),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("omnis"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesRollback

Rolls back a conversion workspace to the last committed snapshot.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesRollback(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "tenetur": "dignissimos",
            "hic": "distinctio",
            "quod": "odio",
            "similique": "facilis",
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("illum"),
        Name: "Dr. Faye Rutherford",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity{
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

## DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs

Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        CompletedUntilTime: sdk.String("alias"),
        ConversionWorkspace: "officia",
        Fields: sdk.String("tempora"),
        Key: sdk.String("ipsam"),
        MaxSize: sdk.Int64(410492),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        ReturnMostRecentPerJobType: sdk.Bool(false),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchBackgroundJobsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsConversionWorkspacesSeed

Imports a snapshot of the source database into the conversion workspace.

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
    res, err := s.Projects.DatamigrationProjectsLocationsConversionWorkspacesSeed(ctx, operations.DatamigrationProjectsLocationsConversionWorkspacesSeedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SeedConversionWorkspaceRequest: &shared.SeedConversionWorkspaceRequest{
            AutoCommit: sdk.Bool(false),
            DestinationConnectionProfile: sdk.String("ex"),
            SourceConnectionProfile: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("ex"),
        Name: "Marshall Wiza",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity{
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

## DatamigrationProjectsLocationsFetchStaticIps

Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.

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
    res, err := s.Projects.DatamigrationProjectsLocationsFetchStaticIps(ctx, operations.DatamigrationProjectsLocationsFetchStaticIpsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("ea"),
        Name: "Glenn Walter",
        OauthToken: sdk.String("eaque"),
        PageSize: sdk.Int64(952871),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DatamigrationProjectsLocationsFetchStaticIpsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchStaticIpsResponse != nil {
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
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("inventore"),
        Filter: sdk.String("non"),
        Key: sdk.String("et"),
        Name: "Neal Schroeder",
        OauthToken: sdk.String("autem"),
        PageSize: sdk.Int64(752135),
        PageToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("voluptas"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MigrationJobInput: &shared.MigrationJobInput{
            ConversionWorkspace: &shared.ConversionWorkspaceInfo{
                CommitID: sdk.String("quasi"),
                Name: sdk.String("Carrie Cole IV"),
            },
            Destination: sdk.String("magnam"),
            DestinationDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumMysql.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumCloudsql.ToPointer(),
            },
            DisplayName: sdk.String("esse"),
            DumpFlags: &shared.DumpFlags{
                DumpFlags: []shared.DumpFlag{
                    shared.DumpFlag{
                        Name: sdk.String("Blake Kihn"),
                        Value: sdk.String("ut"),
                    },
                    shared.DumpFlag{
                        Name: sdk.String("Yolanda Shields"),
                        Value: sdk.String("quisquam"),
                    },
                },
            },
            DumpPath: sdk.String("veritatis"),
            Error: &shared.Status{
                Code: sdk.Int(56848),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "neque": "quo",
                        "illum": "quo",
                        "fuga": "eius",
                    },
                    map[string]interface{}{
                        "voluptas": "ab",
                    },
                    map[string]interface{}{
                        "consequatur": "tempora",
                        "debitis": "ipsam",
                        "aspernatur": "sequi",
                    },
                },
                Message: sdk.String("quo"),
            },
            Filter: sdk.String("esse"),
            Labels: map[string]string{
                "aperiam": "distinctio",
                "quod": "dignissimos",
                "inventore": "nihil",
                "totam": "accusamus",
            },
            Name: sdk.String("Courtney Mayert"),
            ReverseSSHConnectivity: &shared.ReverseSSHConnectivity{
                VM: sdk.String("dolores"),
                VMIP: sdk.String("deserunt"),
                VMPort: sdk.Int(475289),
                Vpc: sdk.String("accusantium"),
            },
            Source: sdk.String("porro"),
            SourceDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumMysql.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumRds.ToPointer(),
            },
            State: shared.MigrationJobStateEnumDeleting.ToPointer(),
            StaticIPConnectivity: map[string]interface{}{
                "deleniti": "fugit",
            },
            Type: shared.MigrationJobTypeEnumContinuous.ToPointer(),
            VpcPeeringConnectivity: &shared.VpcPeeringConnectivity{
                Vpc: sdk.String("mollitia"),
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("minima"),
        Key: sdk.String("nisi"),
        MigrationJobID: sdk.String("fugit"),
        OauthToken: sdk.String("sapiente"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        RequestID: sdk.String("explicabo"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("occaecati"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateSSHScriptRequest: &shared.GenerateSSHScriptRequest{
            VM: sdk.String("et"),
            VMCreationConfig: &shared.VMCreationConfig{
                Subnet: sdk.String("esse"),
                VMMachineType: sdk.String("eveniet"),
                VMZone: sdk.String("accusamus"),
            },
            VMPort: sdk.Int(82971),
            VMSelectionConfig: &shared.VMSelectionConfig{
                VMZone: sdk.String("esse"),
            },
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("quasi"),
        MigrationJob: "saepe",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("rerum"),
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
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sit"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("adipisci"),
        OrderBy: sdk.String("cumque"),
        PageSize: sdk.Int64(160538),
        PageToken: sdk.String("consequatur"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("consectetur"),
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
            ConversionWorkspace: &shared.ConversionWorkspaceInfo{
                CommitID: sdk.String("blanditiis"),
                Name: sdk.String("Randal Stiedemann"),
            },
            Destination: sdk.String("quasi"),
            DestinationDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumOracle.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumAurora.ToPointer(),
            },
            DisplayName: sdk.String("sint"),
            DumpFlags: &shared.DumpFlags{
                DumpFlags: []shared.DumpFlag{
                    shared.DumpFlag{
                        Name: sdk.String("Howard Upton"),
                        Value: sdk.String("veritatis"),
                    },
                    shared.DumpFlag{
                        Name: sdk.String("Ann Murphy"),
                        Value: sdk.String("tenetur"),
                    },
                    shared.DumpFlag{
                        Name: sdk.String("Lila Kassulke"),
                        Value: sdk.String("libero"),
                    },
                    shared.DumpFlag{
                        Name: sdk.String("Gerardo Bartoletti"),
                        Value: sdk.String("dicta"),
                    },
                },
            },
            DumpPath: sdk.String("ullam"),
            Error: &shared.Status{
                Code: sdk.Int(443879),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aut": "voluptatum",
                        "qui": "quibusdam",
                    },
                    map[string]interface{}{
                        "deleniti": "itaque",
                        "dolorum": "architecto",
                    },
                },
                Message: sdk.String("omnis"),
            },
            Filter: sdk.String("tenetur"),
            Labels: map[string]string{
                "at": "et",
            },
            Name: sdk.String("Mrs. Cynthia Hansen"),
            ReverseSSHConnectivity: &shared.ReverseSSHConnectivity{
                VM: sdk.String("iste"),
                VMIP: sdk.String("temporibus"),
                VMPort: sdk.Int(33074),
                Vpc: sdk.String("rem"),
            },
            Source: sdk.String("aut"),
            SourceDatabase: &shared.DatabaseType{
                Engine: shared.DatabaseTypeEngineEnumPostgresql.ToPointer(),
                Provider: shared.DatabaseTypeProviderEnumRds.ToPointer(),
            },
            State: shared.MigrationJobStateEnumStopped.ToPointer(),
            StaticIPConnectivity: map[string]interface{}{
                "corrupti": "non",
            },
            Type: shared.MigrationJobTypeEnumTypeUnspecified.ToPointer(),
            VpcPeeringConnectivity: &shared.VpcPeeringConnectivity{
                Vpc: sdk.String("dolor"),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("voluptas"),
        Name: "Marian Buckridge",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        RequestID: sdk.String("voluptas"),
        UpdateMask: sdk.String("asperiores"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("ea"),
        ValidateOnly: sdk.Bool(false),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "repellendus": "officia",
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nemo"),
        Name: "Darlene Sawayn",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("id"),
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
            "culpa": "est",
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("vel"),
        Key: sdk.String("ducimus"),
        Name: "Cecil Grant",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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
            "nemo": "recusandae",
            "aliquid": "aperiam",
            "cum": "consectetur",
            "in": "exercitationem",
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("suscipit"),
        Name: "Rickey Ullrich",
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("non"),
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
            "dignissimos": "a",
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("harum"),
        Key: sdk.String("laboriosam"),
        Name: "Dr. Silvia Renner",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("voluptas"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "nobis": "dolorum",
            "adipisci": "minus",
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("aliquam"),
        Name: "Lionel Herman",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nesciunt"),
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
            "pariatur": "totam",
            "hic": "exercitationem",
            "nobis": "sit",
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("asperiores"),
        Name: "Miss Jared Quitzon",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("commodi"),
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
            "voluptas": "unde",
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("illo"),
        Name: "Thomas Lockman",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("necessitatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("tempora"),
        Key: sdk.String("tempora"),
        Name: "Mrs. Johanna Jacobson",
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(708609),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("debitis"),
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

## DatamigrationProjectsLocationsPrivateConnectionsCreate

Creates a new private connection in a given project and location.

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsCreate(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PrivateConnectionInput: &shared.PrivateConnectionInput{
            DisplayName: sdk.String("sit"),
            Error: &shared.Status{
                Code: sdk.Int(750595),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "minima": "recusandae",
                        "reiciendis": "nulla",
                    },
                    map[string]interface{}{
                        "aperiam": "saepe",
                    },
                    map[string]interface{}{
                        "veniam": "in",
                        "officiis": "beatae",
                    },
                },
                Message: sdk.String("laudantium"),
            },
            Labels: map[string]string{
                "praesentium": "cum",
                "laboriosam": "dolorum",
            },
            Name: sdk.String("Evan Welch"),
            VpcPeeringConfig: &shared.VpcPeeringConfig{
                Subnet: sdk.String("neque"),
                VpcName: sdk.String("dolorum"),
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("tempora"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        PrivateConnectionID: sdk.String("fugit"),
        QuotaUser: sdk.String("ut"),
        RequestID: sdk.String("fugiat"),
        SkipValidation: sdk.Bool(false),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity{
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

## DatamigrationProjectsLocationsPrivateConnectionsDelete

Deletes a single Database Migration Service private connection.

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsDelete(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("sit"),
        Name: "Willard Walker IV",
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        RequestID: sdk.String("sit"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity{
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

## DatamigrationProjectsLocationsPrivateConnectionsGet

Gets details of a single private connection.

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsGet(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("dolorem"),
        Name: "Gerald Bradtke",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("nam"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateConnection != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicy

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicy(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("unde"),
        OptionsRequestedPolicyVersion: sdk.Int64(972083),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        Resource: "repellendus",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicySecurity{
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

## DatamigrationProjectsLocationsPrivateConnectionsList

Retrieves a list of private connections in a given project and location.

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsList(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("facere"),
        Filter: sdk.String("fuga"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("mollitia"),
        OrderBy: sdk.String("veniam"),
        PageSize: sdk.Int64(29100),
        PageToken: sdk.String("quisquam"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrivateConnectionsResponse != nil {
        // handle response
    }
}
```

## DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicy

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicy(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "maxime",
                                    "et",
                                    "esse",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ea",
                                    "atque",
                                    "error",
                                    "officiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("accusamus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aspernatur",
                                    "ex",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "at",
                                    "error",
                                    "blanditiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "atque",
                                    "atque",
                                    "sunt",
                                    "recusandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("repellendus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "doloremque",
                                    "repudiandae",
                                    "dicta",
                                    "accusantium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "enim",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("velit"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("molestias"),
                            Expression: sdk.String("magnam"),
                            Location: sdk.String("saepe"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "officiis",
                            "perspiciatis",
                            "in",
                        },
                        Role: sdk.String("adipisci"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eveniet"),
                            Expression: sdk.String("occaecati"),
                            Location: sdk.String("consequuntur"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "quis",
                            "reprehenderit",
                            "error",
                        },
                        Role: sdk.String("illo"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("corporis"),
                            Expression: sdk.String("quidem"),
                            Location: sdk.String("eveniet"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "doloremque",
                            "iure",
                            "ipsa",
                            "totam",
                        },
                        Role: sdk.String("quae"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("molestiae"),
                            Expression: sdk.String("eveniet"),
                            Location: sdk.String("qui"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "necessitatibus",
                            "ratione",
                        },
                        Role: sdk.String("laborum"),
                    },
                },
                Etag: sdk.String("distinctio"),
                Version: sdk.Int(528940),
            },
            UpdateMask: sdk.String("rem"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("alias"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Resource: "mollitia",
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicySecurity{
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

## DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissions

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
    res, err := s.Projects.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissions(ctx, operations.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "dolores",
                "id",
                "minima",
                "dolore",
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        Resource: "ex",
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsSecurity{
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
