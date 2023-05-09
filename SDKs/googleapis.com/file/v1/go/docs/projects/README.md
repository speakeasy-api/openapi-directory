# Projects

### Available Operations

* [FileProjectsLocationsBackupsCreate](#fileprojectslocationsbackupscreate) - Creates a backup.
* [FileProjectsLocationsBackupsList](#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesCreate](#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesList](#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesRestore](#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesRevert](#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
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
            KmsKey: sdk.String("temporibus"),
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
            Description: sdk.String("modi"),
            Etag: sdk.String("qui"),
            FileShares: []shared.FileShareConfig{
                shared.FileShareConfig{
                    CapacityGb: sdk.String("cum"),
                    Name: sdk.String("Edna Mante II"),
                    NfsExportOptions: []shared.NfsExportOptions{
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumAccessModeUnspecified.ToPointer(),
                            AnonGid: sdk.String("iste"),
                            AnonUID: sdk.String("dolor"),
                            IPRanges: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumRootSquash.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("corporis"),
                            AnonUID: sdk.String("iste"),
                            IPRanges: []string{
                                "saepe",
                                "quidem",
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
                            SquashMode: shared.NfsExportOptionsSquashModeEnumNoRootSquash.ToPointer(),
                        },
                    },
                    SourceBackup: sdk.String("explicabo"),
                },
                shared.FileShareConfig{
                    CapacityGb: sdk.String("nobis"),
                    Name: sdk.String("Guadalupe Hickle"),
                    NfsExportOptions: []shared.NfsExportOptions{
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("culpa"),
                            AnonUID: sdk.String("doloribus"),
                            IPRanges: []string{
                                "architecto",
                                "mollitia",
                                "dolorem",
                                "culpa",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumSquashModeUnspecified.ToPointer(),
                        },
                    },
                    SourceBackup: sdk.String("repellat"),
                },
                shared.FileShareConfig{
                    CapacityGb: sdk.String("mollitia"),
                    Name: sdk.String("Francis Jerde"),
                    NfsExportOptions: []shared.NfsExportOptions{
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("quia"),
                            AnonUID: sdk.String("quis"),
                            IPRanges: []string{
                                "laborum",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumNoRootSquash.ToPointer(),
                        },
                    },
                    SourceBackup: sdk.String("enim"),
                },
                shared.FileShareConfig{
                    CapacityGb: sdk.String("odit"),
                    Name: sdk.String("Jimmy Wiegand"),
                    NfsExportOptions: []shared.NfsExportOptions{
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumAccessModeUnspecified.ToPointer(),
                            AnonGid: sdk.String("quasi"),
                            AnonUID: sdk.String("error"),
                            IPRanges: []string{
                                "laborum",
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumRootSquash.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("praesentium"),
                            AnonUID: sdk.String("voluptatibus"),
                            IPRanges: []string{
                                "omnis",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumNoRootSquash.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadWrite.ToPointer(),
                            AnonGid: sdk.String("perferendis"),
                            AnonUID: sdk.String("doloremque"),
                            IPRanges: []string{
                                "ut",
                                "maiores",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumSquashModeUnspecified.ToPointer(),
                        },
                        shared.NfsExportOptions{
                            AccessMode: shared.NfsExportOptionsAccessModeEnumReadOnly.ToPointer(),
                            AnonGid: sdk.String("dolore"),
                            AnonUID: sdk.String("iusto"),
                            IPRanges: []string{
                                "harum",
                            },
                            SquashMode: shared.NfsExportOptionsSquashModeEnumSquashModeUnspecified.ToPointer(),
                        },
                    },
                    SourceBackup: sdk.String("accusamus"),
                },
            },
            KmsKeyName: sdk.String("commodi"),
            Labels: map[string]string{
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
                "modi": "praesentium",
            },
            Networks: []shared.NetworkConfigInput{
                shared.NetworkConfigInput{
                    ConnectMode: shared.NetworkConfigConnectModeEnumPrivateServiceAccess.ToPointer(),
                    Modes: []shared.NetworkConfigModesEnum{
                        shared.NetworkConfigModesEnumModeIpv4,
                    },
                    Network: sdk.String("sint"),
                    ReservedIPRange: sdk.String("veritatis"),
                },
                shared.NetworkConfigInput{
                    ConnectMode: shared.NetworkConfigConnectModeEnumPrivateServiceAccess.ToPointer(),
                    Modes: []shared.NetworkConfigModesEnum{
                        shared.NetworkConfigModesEnumAddressModeUnspecified,
                        shared.NetworkConfigModesEnumAddressModeUnspecified,
                    },
                    Network: sdk.String("est"),
                    ReservedIPRange: sdk.String("quibusdam"),
                },
                shared.NetworkConfigInput{
                    ConnectMode: shared.NetworkConfigConnectModeEnumConnectModeUnspecified.ToPointer(),
                    Modes: []shared.NetworkConfigModesEnum{
                        shared.NetworkConfigModesEnumModeIpv4,
                        shared.NetworkConfigModesEnumModeIpv4,
                        shared.NetworkConfigModesEnumAddressModeUnspecified,
                    },
                    Network: sdk.String("modi"),
                    ReservedIPRange: sdk.String("qui"),
                },
            },
            Tier: shared.InstanceTierEnumBasicHdd.ToPointer(),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        InstanceID: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
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
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Filter: sdk.String("non"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("sint"),
        OrderBy: sdk.String("aliquid"),
        PageSize: sdk.Int64(592042),
        PageToken: sdk.String("necessitatibus"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RestoreInstanceRequest: &shared.RestoreInstanceRequest{
            FileShare: sdk.String("dolorum"),
            SourceBackup: sdk.String("in"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        Name: "Blanca Schulist",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RevertInstanceRequest: &shared.RevertInstanceRequest{
            TargetSnapshotID: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        Name: "Jaime Will",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
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
            Description: sdk.String("perferendis"),
            Labels: map[string]string{
                "magnam": "distinctio",
                "id": "labore",
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("vero"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        SnapshotID: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
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
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        OrderBy: sdk.String("ad"),
        PageSize: sdk.Int64(431418),
        PageToken: sdk.String("dolor"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("quasi"),
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
            Description: sdk.String("doloribus"),
            Labels: map[string]string{
                "eius": "maxime",
                "deleniti": "facilis",
                "in": "architecto",
                "architecto": "repudiandae",
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        Name: "Mr. Jenna Stroman",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UpdateMask: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
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
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("odit"),
        Filter: sdk.String("ea"),
        IncludeUnrevealedLocations: sdk.Bool(false),
        Key: sdk.String("accusantium"),
        Name: "Ebony Predovic",
        OauthToken: sdk.String("autem"),
        PageSize: sdk.Int64(722056),
        PageToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
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
            "amet": "aut",
            "cumque": "corporis",
            "hic": "libero",
            "nobis": "dolores",
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        Name: "Ruby Auer",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nostrum"),
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
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Force: sdk.Bool(false),
        Key: sdk.String("voluptatem"),
        Name: "Bobby Kutch V",
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("earum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("provident"),
        Name: "Randolph Wintheiser",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
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
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Filter: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        Name: "Allen Parisian Jr.",
        OauthToken: sdk.String("ipsa"),
        PageSize: sdk.Int64(434417),
        PageToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
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
