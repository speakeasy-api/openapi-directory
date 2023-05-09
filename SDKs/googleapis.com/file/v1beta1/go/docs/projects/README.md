# Projects

### Available Operations

* [FileProjectsLocationsBackupsCreate](#fileprojectslocationsbackupscreate) - Creates a backup.
* [FileProjectsLocationsBackupsList](#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesCreate](#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesList](#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesRestore](#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesRevert](#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
* [FileProjectsLocationsInstancesSharesCreate](#fileprojectslocationsinstancessharescreate) - Creates a share.
* [FileProjectsLocationsInstancesSharesList](#fileprojectslocationsinstancesshareslist) - Lists all shares for a specified instance.
* [FileProjectsLocationsInstancesSnapshotsCreate](#fileprojectslocationsinstancessnapshotscreate) - Creates a snapshot.
* [FileProjectsLocationsInstancesSnapshotsList](#fileprojectslocationsinstancessnapshotslist) - Lists all snapshots in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesSnapshotsPatch](#fileprojectslocationsinstancessnapshotspatch) - Updates the settings of a specific snapshot.
* [FileProjectsLocationsList](#fileprojectslocationslist) - Lists information about the supported locations for this service.
* [FileProjectsLocationsOperationsCancel](#fileprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [FileProjectsLocationsOperationsDelete](#fileprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [FileProjectsLocationsOperationsGet](#fileprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [FileProjectsLocationsOperationsList](#fileprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## FileProjectsLocationsBackupsCreate

Creates a backup.

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
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, operations.FileProjectsLocationsBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("recusandae"),
            KmsKeyName: sdk.String("temporibus"),
            Labels: map[string]string{
                "quis": "veritatis",
            },
            SourceFileShare: sdk.String("deserunt"),
            SourceInstance: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        BackupID: sdk.String("sapiente"),
        Callback: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.FileProjectsLocationsBackupsCreateSecurity{
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

## FileProjectsLocationsBackupsList

Lists all backups in a project for either a specified location or for all locations.

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
    res, err := s.Projects.FileProjectsLocationsBackupsList(ctx, operations.FileProjectsLocationsBackupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        OrderBy: sdk.String("fugit"),
        PageSize: sdk.Int64(537373),
        PageToken: sdk.String("hic"),
        Parent: "optio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.FileProjectsLocationsBackupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsResponse != nil {
        // handle response
    }
}
```

## FileProjectsLocationsInstancesCreate

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

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
    res, err := s.Projects.FileProjectsLocationsInstancesCreate(ctx, operations.FileProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CapacityGb: sdk.String("modi"),
            Description: sdk.String("qui"),
            DirectoryServices: &shared.DirectoryServicesConfig{
                ManagedActiveDirectory: &shared.ManagedActiveDirectoryConfig{
                    Computer: sdk.String("impedit"),
                    Domain: sdk.String("cum"),
                },
            },
            Etag: sdk.String("esse"),
            FileShares: []shared.FileShareConfig{
                shared.FileShareConfig{
                    CapacityGb: sdk.String("excepturi"),
                    Name: sdk.String("Dorothy Hane"),
                    NfsExportOptions: []shared.NfsExportOptions{
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumAccessModeUnspecified.ToPointer(),
                            AnonGid: sdk.String("natus"),
                            AnonUID: sdk.String("laboriosam"),
                            IPRanges: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                            SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5,
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5P,
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5I,
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumSquashModeUnspecified.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumAccessModeUnspecified.ToPointer(),
                            AnonGid: sdk.String("reiciendis"),
                            AnonUID: sdk.String("est"),
                            IPRanges: []string{
                                "laborum",
                                "dolores",
                                "dolorem",
                            },
                            SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                                shared.NfsExportOptionsSecurityFlavorsEnumSecurityFlavorUnspecified,
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5I,
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumSquashModeUnspecified.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("nemo"),
                            AnonUID: sdk.String("minima"),
                            IPRanges: []string{
                                "accusantium",
                                "iure",
                                "culpa",
                            },
                            SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5P,
                                shared.NfsExportOptionsSecurityFlavorsEnumSecurityFlavorUnspecified,
                                shared.NfsExportOptionsSecurityFlavorsEnumKrb5I,
                                shared.NfsExportOptionsSecurityFlavorsEnumAuthSys,
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumNoRootSquash.ToPointer(),
                        },
                    },
                    SourceBackup: sdk.String("consequuntur"),
                },
            },
            KmsKeyName: sdk.String("repellat"),
            Labels: map[string]string{
                "occaecati": "numquam",
                "commodi": "quam",
                "molestiae": "velit",
            },
            MaxShareCount: sdk.String("error"),
            MultiShareEnabled: sdk.Bool(false),
            Networks: []shared.NetworkConfigInput{
                shared.NetworkConfigInput{
                    ConnectMode: shared.NetworkConfigConnectModeEnumDirectPeering.ToPointer(),
                    Modes: []shared.NetworkConfigModesEnum{
                        shared.NetworkConfigModesEnumModeIpv4,
                    },
                    Network: sdk.String("animi"),
                    ReservedIPRange: sdk.String("enim"),
                },
            },
            Protocol: shared.InstanceProtocolEnumFileProtocolUnspecified.ToPointer(),
            Tier: shared.InstanceTierEnumEnterprise.ToPointer(),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        InstanceID: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.FileProjectsLocationsInstancesCreateSecurity{
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

## FileProjectsLocationsInstancesList

Lists all instances in a project for either a specified location or for all locations.

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
    res, err := s.Projects.FileProjectsLocationsInstancesList(ctx, operations.FileProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("praesentium"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        OrderBy: sdk.String("voluptate"),
        PageSize: sdk.Int64(739264),
        PageToken: sdk.String("perferendis"),
        Parent: "doloremque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.FileProjectsLocationsInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## FileProjectsLocationsInstancesRestore

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

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
    res, err := s.Projects.FileProjectsLocationsInstancesRestore(ctx, operations.FileProjectsLocationsInstancesRestoreRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestoreInstanceRequest: &shared.RestoreInstanceRequest{
            FileShare: sdk.String("corporis"),
            SourceBackup: sdk.String("dolore"),
            SourceSnapshot: sdk.String("iusto"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.FileProjectsLocationsInstancesRestoreSecurity{
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

## FileProjectsLocationsInstancesRevert

Revert an existing instance's file system to a specified snapshot.

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
    res, err := s.Projects.FileProjectsLocationsInstancesRevert(ctx, operations.FileProjectsLocationsInstancesRevertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RevertInstanceRequest: &shared.RevertInstanceRequest{
            TargetSnapshotID: sdk.String("voluptates"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("itaque"),
        Name: "Erin Altenwerth",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.FileProjectsLocationsInstancesRevertSecurity{
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

## FileProjectsLocationsInstancesSharesCreate

Creates a share.

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
    res, err := s.Projects.FileProjectsLocationsInstancesSharesCreate(ctx, operations.FileProjectsLocationsInstancesSharesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ShareInput: &shared.ShareInput{
            Backup: sdk.String("modi"),
            CapacityGb: sdk.String("qui"),
            Description: sdk.String("aliquid"),
            Labels: map[string]string{
                "quos": "perferendis",
                "magni": "assumenda",
                "ipsam": "alias",
            },
            MountName: sdk.String("fugit"),
            NfsExportOptions: []shared.NfsExportOptions{
                shared.NfsExportOptions{
                    AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                    AnonGid: sdk.String("tempora"),
                    AnonUID: sdk.String("facilis"),
                    IPRanges: []string{
                        "labore",
                        "delectus",
                        "eum",
                    },
                    SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5I,
                    },
                    SquashMode: shared.NfsExportOptionsSquashModeEnumNoRootSquash.ToPointer(),
                },
                shared.NfsExportOptions{
                    AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                    AnonGid: sdk.String("provident"),
                    AnonUID: sdk.String("necessitatibus"),
                    IPRanges: []string{
                        "officia",
                        "dolor",
                        "debitis",
                    },
                    SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5I,
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5,
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5,
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5P,
                    },
                    SquashMode: shared.NfsExportOptionsSquashModeEnumRootSquash.ToPointer(),
                },
                shared.NfsExportOptions{
                    AccessMode: shared.NfsExportOptionsAccessModeEnumReadWrite.ToPointer(),
                    AnonGid: sdk.String("dicta"),
                    AnonUID: sdk.String("magnam"),
                    IPRanges: []string{
                        "facere",
                        "ea",
                        "aliquid",
                        "laborum",
                    },
                    SecurityFlavors: []shared.NfsExportOptionsSecurityFlavorsEnum{
                        shared.NfsExportOptionsSecurityFlavorsEnumAuthSys,
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5,
                        shared.NfsExportOptionsSecurityFlavorsEnumAuthSys,
                        shared.NfsExportOptionsSecurityFlavorsEnumKrb5P,
                    },
                    SquashMode: shared.NfsExportOptionsSquashModeEnumRootSquash.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("id"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("deleniti"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        ShareID: sdk.String("deserunt"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("vel"),
    }, operations.FileProjectsLocationsInstancesSharesCreateSecurity{
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

## FileProjectsLocationsInstancesSharesList

Lists all shares for a specified instance.

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
    res, err := s.Projects.FileProjectsLocationsInstancesSharesList(ctx, operations.FileProjectsLocationsInstancesSharesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("nihil"),
        Filter: sdk.String("magnam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("id"),
        OrderBy: sdk.String("labore"),
        PageSize: sdk.Int64(290077),
        PageToken: sdk.String("suscipit"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("vero"),
    }, operations.FileProjectsLocationsInstancesSharesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSharesResponse != nil {
        // handle response
    }
}
```

## FileProjectsLocationsInstancesSnapshotsCreate

Creates a snapshot.

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
    res, err := s.Projects.FileProjectsLocationsInstancesSnapshotsCreate(ctx, operations.FileProjectsLocationsInstancesSnapshotsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SnapshotInput: &shared.SnapshotInput{
            Description: sdk.String("architecto"),
            Labels: map[string]string{
                "et": "excepturi",
                "ullam": "provident",
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        SnapshotID: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.FileProjectsLocationsInstancesSnapshotsCreateSecurity{
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

## FileProjectsLocationsInstancesSnapshotsList

Lists all snapshots in a project for either a specified location or for all locations.

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
    res, err := s.Projects.FileProjectsLocationsInstancesSnapshotsList(ctx, operations.FileProjectsLocationsInstancesSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("debitis"),
        Filter: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        OrderBy: sdk.String("facilis"),
        PageSize: sdk.Int64(447926),
        PageToken: sdk.String("architecto"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.FileProjectsLocationsInstancesSnapshotsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResponse != nil {
        // handle response
    }
}
```

## FileProjectsLocationsInstancesSnapshotsPatch

Updates the settings of a specific snapshot.

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
    res, err := s.Projects.FileProjectsLocationsInstancesSnapshotsPatch(ctx, operations.FileProjectsLocationsInstancesSnapshotsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SnapshotInput: &shared.SnapshotInput{
            Description: sdk.String("repellat"),
            Labels: map[string]string{
                "sed": "saepe",
                "pariatur": "accusantium",
                "consequuntur": "praesentium",
                "natus": "magni",
            },
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("maxime"),
        Name: "Miriam Connelly Jr.",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UpdateMask: sdk.String("ipsam"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("autem"),
    }, operations.FileProjectsLocationsInstancesSnapshotsPatchSecurity{
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

## FileProjectsLocationsList

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
    res, err := s.Projects.FileProjectsLocationsList(ctx, operations.FileProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("perferendis"),
        IncludeUnrevealedLocations: sdk.Bool(false),
        Key: sdk.String("fugiat"),
        Name: "Jennifer Runolfsdottir",
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(749999),
        PageToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.FileProjectsLocationsListSecurity{
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

## FileProjectsLocationsOperationsCancel

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
    res, err := s.Projects.FileProjectsLocationsOperationsCancel(ctx, operations.FileProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "nesciunt": "eos",
            "perferendis": "dolores",
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nostrum"),
        Name: "Percy Mohr",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.FileProjectsLocationsOperationsCancelSecurity{
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

## FileProjectsLocationsOperationsDelete

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
    res, err := s.Projects.FileProjectsLocationsOperationsDelete(ctx, operations.FileProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("adipisci"),
        Force: sdk.Bool(false),
        Key: sdk.String("asperiores"),
        Name: "Edwin Morar",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.FileProjectsLocationsOperationsDeleteSecurity{
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

## FileProjectsLocationsOperationsGet

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
    res, err := s.Projects.FileProjectsLocationsOperationsGet(ctx, operations.FileProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolorem"),
        Name: "Norma Erdman",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.FileProjectsLocationsOperationsGetSecurity{
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

## FileProjectsLocationsOperationsList

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
    res, err := s.Projects.FileProjectsLocationsOperationsList(ctx, operations.FileProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("ipsa"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        Name: "Bertha Thompson",
        OauthToken: sdk.String("voluptas"),
        PageSize: sdk.Int64(617658),
        PageToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.FileProjectsLocationsOperationsListSecurity{
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
