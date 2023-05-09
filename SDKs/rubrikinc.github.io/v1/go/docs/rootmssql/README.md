# RootMssql

## Overview

SQL Server instances and databases.

### Available Operations

* [AssignMssqlSLAProperties](#assignmssqlslaproperties) - Assign SLA properties to SQL Server objects
* [BrowseMssqlBackupFiles](#browsemssqlbackupfiles) - List snapshots and logs from a Microsoft SQL database
* [BulkUpdateMssqlDbV1](#bulkupdatemssqldbv1) - Update multiple Microsoft SQL databases
* [CountMssqlDbV1](#countmssqldbv1) - Returns a count of Microsoft SQL databases
* [CountMssqlInstanceV1](#countmssqlinstancev1) - Returns a count of Microsoft SQL instances
* [CreateDownloadMssqlBackupFiles](#createdownloadmssqlbackupfiles) - Download snapshots and logs backups from a Microsoft SQL Database
* [CreateDownloadMssqlBackupFilesByID](#createdownloadmssqlbackupfilesbyid) - Downloads a list of snapshot and log backups from a Microsoft SQL database
* [CreateExportMssqlDb](#createexportmssqldb) - Export a Microsoft SQL database to a new location
* [CreateLogShippingConfiguration](#createlogshippingconfiguration) - Create a log shipping configuration
* [CreateMssqlHostConfig](#createmssqlhostconfig) - Create a SQL Server host configuration
* [CreateMssqlMount](#createmssqlmount) - Live Mount SQL Server database from a point in time copy
* [CreateMssqlUnmount](#createmssqlunmount) - Delete a Live Mount of a SQL Server database
* [CreateOnDemandMssqlBackup](#createondemandmssqlbackup) - Take an on-demand backup of a Microsoft SQL database
* [CreateOnDemandMssqlBatchBackupV1](#createondemandmssqlbatchbackupv1) - Take an on-demand backup of multiple Microsoft SQL databases
* [CreateOnDemandMssqlLogBackup](#createondemandmssqllogbackup) - Take an on-demand log backup for a Microsoft SQL database
* [CreateRestoreMssqlDb](#createrestoremssqldb) - Restore a Microsoft SQL database
* [DeleteDownloadedMssqlDbRecoverableRangesV1](#deletedownloadedmssqldbrecoverablerangesv1) - Delete downloaded recoverable ranges of a Microsoft SQL database
* [DeleteLogShippingConfiguration](#deletelogshippingconfiguration) - Delete a specified log shipping configuration
* [DeleteMssqlDbSnapshots](#deletemssqldbsnapshots) - Delete all snapshots of a Microsoft SQL database
* [DeleteMssqlHostConfig](#deletemssqlhostconfig) - Delete the SQL Server host configuration
* [DownloadFromArchive](#downloadfromarchive) - Download snapshots and log backups from archival
* [GetCompatibleMssqlInstancesV1](#getcompatiblemssqlinstancesv1) - Get compatible instances for the recovery of a Microsoft SQL database
* [GetDefaultDbPropertiesV1](#getdefaultdbpropertiesv1) - Returns the current default properties for Microsoft SQL databases
* [GetDeleteMssqlDbRecoverableRangesStatusV1](#getdeletemssqldbrecoverablerangesstatusv1) - Get the deletion status of downloaded recoverable ranges
* [GetLogShippingConfiguration](#getlogshippingconfiguration) - Get a log shipping configuration
* [GetMissedMssqlDbSnapshots](#getmissedmssqldbsnapshots) - Get summary information for missed snapshots of a SQL database
* [GetMssqlAsyncRequestStatus](#getmssqlasyncrequeststatus) - Get details for an async request
* [GetMssqlAvailabilityGroupV1](#getmssqlavailabilitygroupv1) - Returns detailed information for a Microsoft SQL availability group
* [GetMssqlDb](#getmssqldb) - Get detailed information for a Microsoft SQL database
* [GetMssqlDbMissedRecoverableRanges](#getmssqldbmissedrecoverableranges) - Get missed recoverable ranges of a Microsoft SQL database
* [GetMssqlDbRecoverableRanges](#getmssqldbrecoverableranges) - Get recoverable ranges of a Microsoft SQL database
* [GetMssqlDbSnapshot](#getmssqldbsnapshot) - Get details information about a Microsoft SQL database snapshot
* [GetMssqlHierarchyChildren](#getmssqlhierarchychildren) - Get list of immediate descendant objects
* [GetMssqlHierarchyDescendants](#getmssqlhierarchydescendants) - Get list of descendant objects
* [GetMssqlHierarchyObject](#getmssqlhierarchyobject) - Get summary of a SQL Server hierarchy object
* [GetMssqlHostConfig](#getmssqlhostconfig) - Get the configuration for a specific host
* [GetMssqlInstance](#getmssqlinstance) - Get detailed information for a Microsoft SQL instance
* [GetMssqlMount](#getmssqlmount) - Get detailed information for a Live Mount of a SQL Server database
* [GetOnDemandMssqlBatchBackupResultV1](#getondemandmssqlbatchbackupresultv1) - Returns details for an on-demand backup of multiple Microsoft SQL databases
* [MssqlGetRestoreFilesV1](#mssqlgetrestorefilesv1) - Returns a list all database files to be restored
* [MssqlGetSnappableIDV1](#mssqlgetsnappableidv1) - Returns the snappableId for a Microsoft SQL database
* [MssqlRestoreEstimateV1](#mssqlrestoreestimatev1) - Returns a size estimate for a restore or export
* [QueryLogShippingConfigurations](#querylogshippingconfigurations) - Get log shipping configurations
* [QueryMssqlAvailabilityGroupV1](#querymssqlavailabilitygroupv1) - Returns summary information for Microsoft SQL availability groups
* [QueryMssqlDb](#querymssqldb) - Get summary information for SQL Server databases
* [QueryMssqlDbSnapshot](#querymssqldbsnapshot) - Get summary information for snapshots of a Microsoft SQL database
* [QueryMssqlHostConfig](#querymssqlhostconfig) - Get the summary of SQL Server host configurations
* [QueryMssqlInstance](#querymssqlinstance) - Get summary information for Microsoft SQL instances
* [QueryMssqlMount](#querymssqlmount) - Get summary information for all Live Mounts SQL Server databases
* [ReseedSecondary](#reseedsecondary) - Reseed a secondary database
* [UpdateDefaultDbPropertiesV1](#updatedefaultdbpropertiesv1) - Update the default properties for Microsoft SQL databases
* [UpdateLogShippingConfiguration](#updatelogshippingconfiguration) - Update a specified log shipping configuration
* [UpdateMssqlAvailabilityGroupV1](#updatemssqlavailabilitygroupv1) - Update a Microsoft SQL availability group
* [UpdateMssqlDb](#updatemssqldb) - Update a Microsoft SQL database
* [UpdateMssqlHostConfig](#updatemssqlhostconfig) - Update host configuration
* [UpdateMssqlInstance](#updatemssqlinstance) - Update a Microsoft SQL instance

## AssignMssqlSLAProperties

Assigns SLA Domain properties to SQL Server objects. Hosts and Windows clusters cannot be assigned SLA Domains directly. The SLA Domains are instead applied to the SQL Server child objects within the Host or Windows Cluster object. Newly discovered SQL Server objects within a given Host or Windows Cluster object do not inherit SLA Domain properties from other child SQL Server objects with the same parent object.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.AssignMssqlSLAProperties(ctx, shared.MssqlSLADomainAssignInfo{
        ConfiguredSLADomainID: sdk.String("quas"),
        CopyOnly: sdk.Bool(false),
        ExistingSnapshotRetention: shared.ExistingSnapshotRetentionEnumRetainSnapshots.ToPointer(),
        Ids: []string{
            "sed",
            "quibusdam",
        },
        LogBackupFrequencyInSeconds: sdk.Int(442864),
        LogRetentionHours: sdk.Int(455436),
        UseConfiguredDefaultLogRetention: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BrowseMssqlBackupFiles

When a recovery point is set, this API endpoint returns the snapshot and list of logs needed to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a recovery point or a range. Specify only LSNs or times.
This endpoint is only used to fetch data, but uses POST instead of GET due to limitations on parameters used in the body of a GET request. The parameter set for this endpoint is shared with the download_file endpoint.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.BrowseMssqlBackupFiles(ctx, operations.BrowseMssqlBackupFilesRequest{
        MssqlBackupSelection: shared.MssqlBackupSelection{
            BackupType: shared.MssqlBackupTypeEnumSnapshot.ToPointer(),
            EndPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-02-02T14:09:54.334Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "voluptate",
                    RecoveryForkGUID: sdk.String("hic"),
                },
                TimestampMs: sdk.Int64(871969),
            },
            LegalHoldDownloadConfig: &shared.LegalHoldDownloadConfig{
                IsLegalHoldDownload: false,
            },
            RecoveryPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-07-21T09:02:53.615Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "eius",
                    RecoveryForkGUID: sdk.String("aut"),
                },
                TimestampMs: sdk.Int64(8446),
            },
            StartPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2021-03-28T13:39:03.218Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "repellat",
                    RecoveryForkGUID: sdk.String("voluptatum"),
                },
                TimestampMs: sdk.Int64(817249),
            },
        },
        ID: "29de1dd7-097b-45da-88c5-7fa6c78a216e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlBackups != nil {
        // handle response
    }
}
```

## BulkUpdateMssqlDbV1

Update multiple Microsoft SQL databases with the specified properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.BulkUpdateMssqlDbV1(ctx, []shared.MssqlDbUpdateID{
        shared.MssqlDbUpdateID{
            DatabaseID: "excepturi",
            UpdateProperties: shared.MssqlDbUpdate{
                ConfiguredSLADomainID: sdk.String("harum"),
                CopyOnly: sdk.Bool(false),
                IsPaused: sdk.Bool(false),
                LogBackupFrequencyInSeconds: sdk.Int(675689),
                LogRetentionHours: sdk.Int(953707),
                MaxDataStreams: sdk.Int(922640),
                PostBackupScript: &shared.MssqlScriptDetail{
                    ScriptErrorAction: shared.ScriptErrorActionEnumContinue,
                    ScriptPath: "officia",
                    TimeoutMs: 389786,
                },
                PreBackupScript: &shared.MssqlScriptDetail{
                    ScriptErrorAction: shared.ScriptErrorActionEnumAbort,
                    ScriptPath: "cupiditate",
                    TimeoutMs: 83578,
                },
                ShouldForceFull: sdk.Bool(false),
                UseConfiguredDefaultLogRetention: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbDetails != nil {
        // handle response
    }
}
```

## CountMssqlDbV1

Returns a count of Microsoft SQL databases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CountMssqlDbV1(ctx, operations.CountMssqlDbV1Request{
        RootID: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedObjectsCount != nil {
        // handle response
    }
}
```

## CountMssqlInstanceV1

Returns a count of all Microsoft SQL instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CountMssqlInstanceV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CountResponse != nil {
        // handle response
    }
}
```

## CreateDownloadMssqlBackupFiles

Starts an asynchronous request to download a set of backup files as a single compressed zipfile.
When a recovery point is set, this API endpoint returns the snapshot and list of logs that Rubrik CDM would use to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a point in time or a range. Specify only LSNs or times.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateDownloadMssqlBackupFiles(ctx, operations.CreateDownloadMssqlBackupFilesRequest{
        MssqlBackupSelection: shared.MssqlBackupSelection{
            BackupType: shared.MssqlBackupTypeEnumLog.ToPointer(),
            EndPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-10-07T20:01:30.265Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "magnam",
                    RecoveryForkGUID: sdk.String("doloremque"),
                },
                TimestampMs: sdk.Int64(738325),
            },
            LegalHoldDownloadConfig: &shared.LegalHoldDownloadConfig{
                IsLegalHoldDownload: false,
            },
            RecoveryPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-09-28T08:10:05.488Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "maiores",
                    RecoveryForkGUID: sdk.String("delectus"),
                },
                TimestampMs: sdk.Int64(549710),
            },
            StartPoint: &shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2021-03-26T02:05:44.104Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "ab",
                    RecoveryForkGUID: sdk.String("voluptate"),
                },
                TimestampMs: sdk.Int64(10777),
            },
        },
        ID: "ef03b5f3-7e4a-4a86-8555-966732aa5dcb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateDownloadMssqlBackupFilesByID

Downloads a list of snapshot and log backups from a Microsoft SQL database.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateDownloadMssqlBackupFilesByID(ctx, operations.CreateDownloadMssqlBackupFilesByIDRequest{
        DownloadMssqlBackupFilesByIDJobConfig: shared.DownloadMssqlBackupFilesByIDJobConfig{
            Items: []string{
                "autem",
                "praesentium",
            },
            LegalHoldDownloadConfig: &shared.LegalHoldDownloadConfig{
                IsLegalHoldDownload: false,
            },
        },
        ID: "2cb70f8c-fd5f-4b6e-91b9-a9f74846e2c3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateExportMssqlDb

Create a request to export a Microsoft SQL database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateExportMssqlDb(ctx, operations.CreateExportMssqlDbRequest{
        ExportMssqlDbJobConfig: shared.ExportMssqlDbJobConfig{
            AllowOverwrite: sdk.Bool(false),
            FinishRecovery: sdk.Bool(false),
            MaxDataStreams: sdk.Int(203356),
            RecoveryPoint: shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-06-06T22:23:21.241Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "repellendus",
                    RecoveryForkGUID: sdk.String("soluta"),
                },
                TimestampMs: sdk.Int64(15205),
            },
            TargetDataFilePath: sdk.String("ullam"),
            TargetDatabaseName: "amet",
            TargetFilePaths: []shared.MssqlDbFileExportPath{
                shared.MssqlDbFileExportPath{
                    ExportPath: "quibusdam",
                    LogicalName: "sint",
                    NewFilename: sdk.String("voluptates"),
                    NewLogicalName: sdk.String("nihil"),
                },
                shared.MssqlDbFileExportPath{
                    ExportPath: "ad",
                    LogicalName: "eligendi",
                    NewFilename: sdk.String("fuga"),
                    NewLogicalName: sdk.String("consequatur"),
                },
            },
            TargetInstanceID: "sit",
            TargetLogFilePath: sdk.String("iure"),
        },
        ID: "f5392c11-a25a-48bf-92f9-7428ad9a9f8b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateLogShippingConfiguration

Create a log shipping configuration between a specified primary database and a specified secondary database. The transaction logs from the primary database are regularly restored to the secondary database in order to maintain the secondary database as a point-in-time copy of the primary database. The primary database must have log backups configured, and it must be in the full or bulk-logged recovery model.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateLogShippingConfiguration(ctx, operations.CreateLogShippingConfigurationRequest{
        MssqlLogShippingCreateConfig: shared.MssqlLogShippingCreateConfig{
            MaxDataStreams: sdk.Int(939096),
            ShouldDisconnectStandbyUsers: sdk.Bool(false),
            State: shared.MssqlLogShippingOkStateEnumStandby,
            TargetDataFilePath: sdk.String("explicabo"),
            TargetDatabaseName: "odit",
            TargetFilePaths: []shared.MssqlDbFileExportPath{
                shared.MssqlDbFileExportPath{
                    ExportPath: "architecto",
                    LogicalName: "quia",
                    NewFilename: sdk.String("ad"),
                    NewLogicalName: sdk.String("velit"),
                },
            },
            TargetInstanceID: "ullam",
            TargetLogFilePath: sdk.String("provident"),
        },
        ID: "d98387f7-a79c-4d72-8d24-84da21729f2a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateMssqlHostConfig

Creates a SQL Server host configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateMssqlHostConfig(ctx, shared.MssqlHostConfigurationWithHostID{
        EnableDatabaseBatchSnapshots: shared.HostConfigurationPropertyEnabledEnumDefault.ToPointer(),
        EnableGroupFetch: shared.HostConfigurationPropertyEnabledEnumEnabled.ToPointer(),
        EnableVdi: shared.HostConfigurationPropertyEnabledEnumEnabled.ToPointer(),
        EnableVdiDb: shared.HostConfigurationPropertyEnabledEnumDefault.ToPointer(),
        FileRestoreReadParallelism: sdk.Int(946416),
        FileRestoreWriteParallelism: sdk.Int(349558),
        FileTransferParallelism: sdk.Int(468221),
        HostID: "quia",
        MssqlDefaultMaxDataStreamsPerDatabase: sdk.Int(336123),
        PhysicalHostDatabaseRestoreThrottleMaxRefCount: sdk.Int(980323),
        PhysicalHostLogBackupThrottleMaxRefCount: sdk.Int(116807),
        ThrottlePhysicalHostMaxRefCount: sdk.Int(115849),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHostConfiguration != nil {
        // handle response
    }
}
```

## CreateMssqlMount

Create an asynchronous request to create a Live Mount SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateMssqlMount(ctx, operations.CreateMssqlMountRequest{
        MountMssqlDbConfig: shared.MountMssqlDbConfig{
            MountedDatabaseName: "eum",
            RecoveryModel: shared.MssqlDatabaseRecoveryModelEnumFull.ToPointer(),
            RecoveryPoint: shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2021-07-02T10:41:33.530Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "quasi",
                    RecoveryForkGUID: sdk.String("itaque"),
                },
                TimestampMs: sdk.Int64(306269),
            },
            TargetInstanceID: sdk.String("vitae"),
        },
        ID: "d8a23c23-e34f-42df-a4a1-97f6de922151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateMssqlUnmount

Create an async request to delete a Live Mount of a SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateMssqlUnmount(ctx, operations.CreateMssqlUnmountRequest{
        Force: sdk.Bool(false),
        ID: "fe171209-9853-4e9f-943d-854439ee2244",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateOnDemandMssqlBackup

Take an on-demand backup of a Microsoft SQL database. The forceFullSnapshot property can be set to true to force a full snapshot. To check the result of the request, poll /mssql/request/{id}.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateOnDemandMssqlBackup(ctx, operations.CreateOnDemandMssqlBackupRequest{
        MssqlBackupJobConfig: shared.MssqlBackupJobConfig{
            ForceFullSnapshot: sdk.Bool(false),
            SLAID: sdk.String("laboriosam"),
        },
        ID: "0443bc15-4188-4c2f-96e8-5da7832eabd6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateOnDemandMssqlBatchBackupV1

Take an on-demand backup of one or more Microsoft SQL databases. Set the forceFullSnapshot property to true to force a full snapshot for every database that is specified. Only one snapshot will be taken for each database, even if a database is included multiple times in the fields of the request body. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateOnDemandMssqlBatchBackupV1(ctx, shared.MssqlBatchBackupJobConfig{
        AvailabilityGroupIds: []string{
            "odio",
        },
        DatabaseIds: []string{
            "nesciunt",
            "harum",
            "aperiam",
            "pariatur",
        },
        ForceFullSnapshot: sdk.Bool(false),
        HostIds: []string{
            "architecto",
            "culpa",
        },
        InstanceIds: []string{
            "ut",
            "quidem",
        },
        SLAID: sdk.String("doloribus"),
        WindowsClusterIds: []string{
            "architecto",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateOnDemandMssqlLogBackup

Take an on-demand log backup for a Microsoft SQL database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateOnDemandMssqlLogBackup(ctx, operations.CreateOnDemandMssqlLogBackupRequest{
        ID: "bad8706d-4608-42bf-bdc4-1ff5d4e2ae4f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateRestoreMssqlDb

Create a request to restore a SQL Server database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.CreateRestoreMssqlDb(ctx, operations.CreateRestoreMssqlDbRequest{
        RestoreMssqlDbJobConfig: shared.RestoreMssqlDbJobConfig{
            FinishRecovery: sdk.Bool(false),
            MaxDataStreams: sdk.Int(704054),
            RecoveryPoint: shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2022-03-24T18:24:30.708Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "facilis",
                    RecoveryForkGUID: sdk.String("amet"),
                },
                TimestampMs: sdk.Int64(335303),
            },
        },
        ID: "d17638f1-edb7-4835-9ecc-5cb860f8cd58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteDownloadedMssqlDbRecoverableRangesV1

Deletes all local snapshots and logs that have previously been downloaded. Provide a begin or end time to delete only the downloaded snapshots and logs that fall within this time frame. The time is relative to when the snapshot or log backup was originally taken, not downloaded. Parts of the window may not be deleted if certain log files must be kept to preserve times outside the window. Data is deleted in the background. To check the status of the deletion, poll /mssql/db/recoverable_range/download/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.DeleteDownloadedMssqlDbRecoverableRangesV1(ctx, operations.DeleteDownloadedMssqlDbRecoverableRangesV1Request{
        AfterTime: types.MustTimeFromString("2022-04-05T04:53:49.318Z"),
        BeforeTime: types.MustTimeFromString("2022-01-20T21:15:59.889Z"),
        ID: "3810e4fe-4447-4297-8d3b-1dd3bbce247b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobScheduledResponse != nil {
        // handle response
    }
}
```

## DeleteLogShippingConfiguration

Deletes the specified log shipping configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.DeleteLogShippingConfiguration(ctx, operations.DeleteLogShippingConfigurationRequest{
        DeleteSecondaryDatabase: sdk.Bool(false),
        ID: "7684eff5-0126-4d71-8ffb-d0eb74b84219",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteMssqlDbSnapshots

Deletes all snapshots of a Microsoft SQL database. The database must be unprotected for the operation to succeed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.DeleteMssqlDbSnapshots(ctx, operations.DeleteMssqlDbSnapshotsRequest{
        ID: "53b44bd3-c431-459d-b3e5-953c00113986",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMssqlHostConfig

Deletes the SQL Server host configuration. The host falls back to use values from the global configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.DeleteMssqlHostConfig(ctx, operations.DeleteMssqlHostConfigRequest{
        HostID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadFromArchive

Starts an asynchronous request to download snapshots and logs from archival for a given database and recovery point.
If the specified point in time is already available locally, this endpoint throws an error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.DownloadFromArchive(ctx, operations.DownloadFromArchiveRequest{
        MssqlDownloadFromArchiveConfig: shared.MssqlDownloadFromArchiveConfig{
            RecoveryPoint: shared.MssqlRecoveryPoint{
                Date: types.MustTimeFromString("2021-08-20T15:02:34.009Z"),
                LsnPoint: &shared.LsnRecoveryPoint{
                    Lsn: "modi",
                    RecoveryForkGUID: sdk.String("et"),
                },
                TimestampMs: sdk.Int64(909583),
            },
        },
        ID: "6c31cc2f-1fcb-451c-9a41-ffbe9cbd795e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetCompatibleMssqlInstancesV1

Returns all compatible instances for export for the specified recovery time.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetCompatibleMssqlInstancesV1(ctx, operations.GetCompatibleMssqlInstancesV1Request{
        ID: "e65e076c-c7ab-4f61-aea5-c71641934b90",
        RecoveryTime: types.MustTimeFromString("2022-08-07T09:25:44.626Z"),
        RecoveryType: operations.GetCompatibleMssqlInstancesV1RecoveryTypeEnumRestore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlInstanceSummaryListResponse != nil {
        // handle response
    }
}
```

## GetDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetDefaultDbPropertiesV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbDefaults != nil {
        // handle response
    }
}
```

## GetDeleteMssqlDbRecoverableRangesStatusV1

Get the details of the progress made in deleting recoverable ranges. The recoverable ranges to delete are those specified by the DELETE request to /mssql/db/{id}/recoverable_range/download which yielded the response with the job id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetDeleteMssqlDbRecoverableRangesStatusV1(ctx, operations.GetDeleteMssqlDbRecoverableRangesStatusV1Request{
        ID: "09d19d2f-c2f9-4e2e-9059-44b935d237a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalJobInstanceDetail != nil {
        // handle response
    }
}
```

## GetLogShippingConfiguration

Retrieves a particular log shipping configuration with all the details of the configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetLogShippingConfiguration(ctx, operations.GetLogShippingConfigurationRequest{
        ID: "2f90849d-6aed-44ae-8b75-37cd9222c9ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlLogShippingDetail != nil {
        // handle response
    }
}
```

## GetMissedMssqlDbSnapshots

Returns a list of summary information for the missed snapshots of a Microsoft SQL database, including the time of day and the locations where the snapshot was missed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMissedMssqlDbSnapshots(ctx, operations.GetMissedMssqlDbSnapshotsRequest{
        AfterTime: types.MustTimeFromString("2022-07-02T13:06:10.709Z"),
        BeforeTime: types.MustTimeFromString("2022-05-21T10:47:52.181Z"),
        ID: "1aabfa2e-761f-40ca-8d45-6ef1031e6899",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```

## GetMssqlAsyncRequestStatus

Returns the task object for an async request related to SQL Server databases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlAsyncRequestStatus(ctx, operations.GetMssqlAsyncRequestStatusRequest{
        ID: "f0c2001e-22cd-455c-8058-4a184d76d971",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetMssqlAvailabilityGroupV1

Returns a detailed view of a Microsoft SQL availability group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlAvailabilityGroupV1(ctx, operations.GetMssqlAvailabilityGroupV1Request{
        ID: "fc820c65-b037-4bb8-a0cc-885187e4de04",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlAvailabilityGroupSummary != nil {
        // handle response
    }
}
```

## GetMssqlDb

Returns a detailed view of a Microsoft SQL database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlDb(ctx, operations.GetMssqlDbRequest{
        ID: "af28c5dd-db46-4aa1-8fd6-d828da013191",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbDetail != nil {
        // handle response
    }
}
```

## GetMssqlDbMissedRecoverableRanges

Retrieve a list of missed recoverable ranges for a Microsoft SQL database. For each run of one type of error, the first and last occurrence of the error are given.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlDbMissedRecoverableRanges(ctx, operations.GetMssqlDbMissedRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2022-10-25T19:35:03.327Z"),
        BeforeTime: types.MustTimeFromString("2022-03-13T00:34:09.899Z"),
        ID: "46645c1d-81f2-4904-af56-9b7aff0ea221",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlMissedRecoverableRangeListResponse != nil {
        // handle response
    }
}
```

## GetMssqlDbRecoverableRanges

Retrieve the recoverable ranges for a specified Microsoft SQL database. A begin and/or end timestamp can be provided to retrieve only the ranges that fall within the window.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlDbRecoverableRanges(ctx, operations.GetMssqlDbRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2022-03-11T11:31:59.311Z"),
        BeforeTime: types.MustTimeFromString("2021-03-11T09:23:41.480Z"),
        ID: "071bc163-e279-4a3b-884d-a99257d04f40",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlRecoverableRangeListResponse != nil {
        // handle response
    }
}
```

## GetMssqlDbSnapshot

Returns detailed information about a Microsoft SQL database snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlDbSnapshot(ctx, operations.GetMssqlDbSnapshotRequest{
        ID: "847a742d-8449-46cb-9eec-f6b99bc63562",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbSnapshotDetail != nil {
        // handle response
    }
}
```

## GetMssqlHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlHierarchyChildren(ctx, operations.GetMssqlHierarchyChildrenRequest{
        EffectiveSLADomainID: sdk.String("eveniet"),
        HasInstances: sdk.Bool(false),
        ID: "bfdf55c2-94c0-460b-86a1-287764eef6d0",
        IsClustered: sdk.Bool(false),
        IsLiveMount: sdk.Bool(false),
        IsLogShippingSecondary: sdk.Bool(false),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(781916),
        Name: sdk.String("Paulette Kassulke"),
        ObjectType: []GetMssqlHierarchyChildrenObjectTypeEnum{
            operations.GetMssqlHierarchyChildrenObjectTypeEnumWindowsCluster,
            operations.GetMssqlHierarchyChildrenObjectTypeEnumMssqlDatabase,
            operations.GetMssqlHierarchyChildrenObjectTypeEnumHost,
        },
        Offset: sdk.Int(836479),
        PrimaryClusterID: sdk.String("temporibus"),
        SLAAssignment: operations.GetMssqlHierarchyChildrenSLAAssignmentEnumDirect.ToPointer(),
        SnappableStatus: operations.GetMssqlHierarchyChildrenSnappableStatusEnumProtectable.ToPointer(),
        SortBy: operations.GetMssqlHierarchyChildrenSortByEnumDescendantCountMssqlInstance.ToPointer(),
        SortOrder: operations.GetMssqlHierarchyChildrenSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetMssqlHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlHierarchyDescendants(ctx, operations.GetMssqlHierarchyDescendantsRequest{
        EffectiveSLADomainID: sdk.String("nostrum"),
        HasInstances: sdk.Bool(false),
        ID: "71509a8e-870d-43c5-a1f9-c242c7b66a1f",
        IsClustered: sdk.Bool(false),
        IsLiveMount: sdk.Bool(false),
        IsLogShippingSecondary: sdk.Bool(false),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(214359),
        Name: sdk.String("Sadie Kulas"),
        ObjectType: []GetMssqlHierarchyDescendantsObjectTypeEnum{
            operations.GetMssqlHierarchyDescendantsObjectTypeEnumMssqlInstance,
            operations.GetMssqlHierarchyDescendantsObjectTypeEnumWindowsCluster,
            operations.GetMssqlHierarchyDescendantsObjectTypeEnumMssqlDatabase,
            operations.GetMssqlHierarchyDescendantsObjectTypeEnumMssqlDatabase,
        },
        Offset: sdk.Int(112441),
        PrimaryClusterID: sdk.String("excepturi"),
        SLAAssignment: operations.GetMssqlHierarchyDescendantsSLAAssignmentEnumDirect.ToPointer(),
        SnappableStatus: operations.GetMssqlHierarchyDescendantsSnappableStatusEnumProtectable.ToPointer(),
        SortBy: operations.GetMssqlHierarchyDescendantsSortByEnumLogBackupRetentionHours.ToPointer(),
        SortOrder: operations.GetMssqlHierarchyDescendantsSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetMssqlHierarchyObject

Retrieve details for the specified object in the SQL Server hierarchy.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlHierarchyObject(ctx, operations.GetMssqlHierarchyObjectRequest{
        ID: "f42a4bb4-38d8-45b2-a059-1d745e3c2059",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHierarchyObjectSummary != nil {
        // handle response
    }
}
```

## GetMssqlHostConfig

Returns the configuration for the specified SQL Server host.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlHostConfig(ctx, operations.GetMssqlHostConfigRequest{
        HostID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHostConfiguration != nil {
        // handle response
    }
}
```

## GetMssqlInstance

Returns a detailed view of a Microsoft SQL instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlInstance(ctx, operations.GetMssqlInstanceRequest{
        ID: "9c3f567e-0e25-4276-9b1d-62fcdace1f01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlInstanceSummary != nil {
        // handle response
    }
}
```

## GetMssqlMount

Returns detailed information for the specified Live Mount of a SQL Server database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetMssqlMount(ctx, operations.GetMssqlMountRequest{
        ID: "216ce223-9e8f-425c-90d1-9d959f439e39",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlMountDetail != nil {
        // handle response
    }
}
```

## GetOnDemandMssqlBatchBackupResultV1

Returns the details for an on-demand backup of multiple Microsoft SQL databases. This only returns details for requests that have finished successfully. To check the status of the request, poll /mssql/request/{id}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.GetOnDemandMssqlBatchBackupResultV1(ctx, operations.GetOnDemandMssqlBatchBackupResultV1Request{
        ID: "266cbd95-f7aa-42b2-8113-695d1e6698fc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlBatchBackupSummary != nil {
        // handle response
    }
}
```

## MssqlGetRestoreFilesV1

Provides a list of database files to be restored for the specified restore or export operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.MssqlGetRestoreFilesV1(ctx, operations.MssqlGetRestoreFilesV1Request{
        ID: "c4596217-c297-4767-a334-254038bfb597",
        Lsn: sdk.String("et"),
        RecoveryForkGUID: sdk.String("accusamus"),
        Time: types.MustTimeFromString("2021-12-06T18:58:47.369Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlRestoreFiles != nil {
        // handle response
    }
}
```

## MssqlGetSnappableIDV1

Returns the snappableId for a Microsoft SQL database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.MssqlGetSnappableIDV1(ctx, operations.MssqlGetSnappableIDV1Request{
        ID: "19055738-9ced-4bac-bfda-39594d66bc2a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlSnappableID != nil {
        // handle response
    }
}
```

## MssqlRestoreEstimateV1

Provides an estimate of resources needed for the specified restore or export operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.MssqlRestoreEstimateV1(ctx, operations.MssqlRestoreEstimateV1Request{
        ID: "e480632b-9954-4b6f-a220-6369828553cb",
        Lsn: sdk.String("ab"),
        RecoveryForkGUID: sdk.String("alias"),
        Time: types.MustTimeFromString("2022-12-17T08:16:58.104Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlRestoreEstimateResult != nil {
        // handle response
    }
}
```

## QueryLogShippingConfigurations

Retrieves all log shipping configuration objects. Results can be filtered and sorted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryLogShippingConfigurations(ctx, operations.QueryLogShippingConfigurationsRequest{
        Limit: sdk.Int(420259),
        Location: sdk.String("tempore"),
        Offset: sdk.Int(896695),
        PrimaryDatabaseID: sdk.String("reiciendis"),
        PrimaryDatabaseName: sdk.String("incidunt"),
        SecondaryDatabaseName: sdk.String("provident"),
        SortBy: operations.QueryLogShippingConfigurationsSortByEnumSecondaryDatabaseName.ToPointer(),
        SortOrder: operations.QueryLogShippingConfigurationsSortOrderEnumAsc.ToPointer(),
        Status: operations.QueryLogShippingConfigurationsStatusEnumStale.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlLogShippingSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlAvailabilityGroupV1

Returns a list of summary information for Microsoft SQL availability groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlAvailabilityGroupV1(ctx, operations.QueryMssqlAvailabilityGroupV1Request{
        PrimaryClusterID: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlAvailabilityGroupSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlDb

Returns a list of summary information for Microsoft SQL databases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlDb(ctx, operations.QueryMssqlDbRequest{
        AvailabilityGroupID: sdk.String("magni"),
        EffectiveSLADomainID: sdk.String("sit"),
        IncludeBackupTaskInfo: sdk.Bool(false),
        InstanceID: sdk.String("voluptas"),
        IsLiveMount: sdk.Bool(false),
        IsLogShippingSecondary: sdk.Bool(false),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(199990),
        Name: sdk.String("Fernando Gibson"),
        Offset: sdk.Int(402341),
        PrimaryClusterID: sdk.String("aliquid"),
        SLAAssignment: sdk.String("officia"),
        SortBy: operations.QueryMssqlDbSortByEnumName.ToPointer(),
        SortOrder: operations.QueryMssqlDbSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlDbSnapshot

Returns a list of summary information for snapshots of a Microsoft SQL database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlDbSnapshot(ctx, operations.QueryMssqlDbSnapshotRequest{
        AfterTime: types.MustTimeFromString("2020-04-12T12:20:02.988Z"),
        BeforeTime: types.MustTimeFromString("2022-01-01T05:01:27.982Z"),
        ID: "2bf19588-d40d-403f-bdeb-a297be3e90bc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbSnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlHostConfig

Returns a list of customized SQL Server host configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlHostConfig(ctx, operations.QueryMssqlHostConfigRequest{
        HostID: []string{
            "consequatur",
            "temporibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHostConfigurationWithHostIDListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlInstance

Returns a list of summary information for Microsoft SQL instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlInstance(ctx, operations.QueryMssqlInstanceRequest{
        PrimaryClusterID: sdk.String("doloribus"),
        RootID: sdk.String("quos"),
        SnappableStatus: operations.QueryMssqlInstanceSnappableStatusEnumProtectable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlInstanceSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryMssqlMount

Returns a list with summary information for all Live Mount SQL Server databases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.QueryMssqlMount(ctx, operations.QueryMssqlMountRequest{
        Limit: sdk.Int(416967),
        MountedDatabaseName: sdk.String("blanditiis"),
        Offset: sdk.Int(973519),
        SortBy: operations.QueryMssqlMountSortByEnumCreationDate.ToPointer(),
        SortOrder: operations.QueryMssqlMountSortOrderEnumAsc.ToPointer(),
        SourceDatabaseID: sdk.String("ratione"),
        SourceDatabaseName: sdk.String("dolore"),
        TargetInstanceID: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlMountSummaryListResponse != nil {
        // handle response
    }
}
```

## ReseedSecondary

Starts an asynchronous job to reseed a secondary database. Reseeding restores the data in the secondary database based on a log shipping configuration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.ReseedSecondary(ctx, operations.ReseedSecondaryRequest{
        MssqlLogShippingTargetStateOptions: shared.MssqlLogShippingTargetStateOptions{
            ShouldDisconnectStandbyUsers: sdk.Bool(false),
            State: shared.MssqlLogShippingOkStateEnumRestoring,
        },
        ID: "cb331d49-2f4f-4127-bb0e-0bf1f8217978",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## UpdateDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateDefaultDbPropertiesV1(ctx, shared.MssqlDbDefaultsUpdate{
        CbtStatus: sdk.Bool(false),
        LogBackupFrequencyInSeconds: sdk.Int64(860282),
        LogRetentionTimeInHours: sdk.Int(6517),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbDefaults != nil {
        // handle response
    }
}
```

## UpdateLogShippingConfiguration

Updates a specified log shipping configuration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateLogShippingConfiguration(ctx, operations.UpdateLogShippingConfigurationRequest{
        MssqlLogShippingTargetStateOptions: shared.MssqlLogShippingTargetStateOptions{
            ShouldDisconnectStandbyUsers: sdk.Bool(false),
            State: shared.MssqlLogShippingOkStateEnumStandby,
        },
        ID: "cca77aeb-7b70-421a-9204-6b64e99fb0e6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## UpdateMssqlAvailabilityGroupV1

Update a Microsoft SQL availability group with the specified properties.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateMssqlAvailabilityGroupV1(ctx, operations.UpdateMssqlAvailabilityGroupV1Request{
        MssqlSLAPatchProperties: shared.MssqlSLAPatchProperties{
            ConfiguredSLADomainID: sdk.String("reprehenderit"),
            CopyOnly: sdk.Bool(false),
            LogBackupFrequencyInSeconds: sdk.Int(899735),
            LogRetentionHours: sdk.Int(1962),
            UseConfiguredDefaultLogRetention: sdk.Bool(false),
        },
        ID: "94fdfed5-540e-4f53-a34a-1b8fe99731ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlAvailabilityGroupSummary != nil {
        // handle response
    }
}
```

## UpdateMssqlDb

Update a Microsoft SQL database with the specified properties.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateMssqlDb(ctx, operations.UpdateMssqlDbRequest{
        MssqlDbUpdate: shared.MssqlDbUpdate{
            ConfiguredSLADomainID: sdk.String("cumque"),
            CopyOnly: sdk.Bool(false),
            IsPaused: sdk.Bool(false),
            LogBackupFrequencyInSeconds: sdk.Int(44264),
            LogRetentionHours: sdk.Int(320760),
            MaxDataStreams: sdk.Int(852229),
            PostBackupScript: &shared.MssqlScriptDetail{
                ScriptErrorAction: shared.ScriptErrorActionEnumContinue,
                ScriptPath: "quis",
                TimeoutMs: 681953,
            },
            PreBackupScript: &shared.MssqlScriptDetail{
                ScriptErrorAction: shared.ScriptErrorActionEnumContinue,
                ScriptPath: "consequuntur",
                TimeoutMs: 850623,
            },
            ShouldForceFull: sdk.Bool(false),
            UseConfiguredDefaultLogRetention: sdk.Bool(false),
        },
        ID: "fb70fb38-7429-40d3-b656-1eca16ef8945",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlDbDetail != nil {
        // handle response
    }
}
```

## UpdateMssqlHostConfig

Updates the configuration for a specified host.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateMssqlHostConfig(ctx, operations.UpdateMssqlHostConfigRequest{
        MssqlHostConfiguration: shared.MssqlHostConfiguration{
            EnableDatabaseBatchSnapshots: shared.HostConfigurationPropertyEnabledEnumEnabled.ToPointer(),
            EnableGroupFetch: shared.HostConfigurationPropertyEnabledEnumDefault.ToPointer(),
            EnableVdi: shared.HostConfigurationPropertyEnabledEnumDefault.ToPointer(),
            EnableVdiDb: shared.HostConfigurationPropertyEnabledEnumDisabled.ToPointer(),
            FileRestoreReadParallelism: sdk.Int(392289),
            FileRestoreWriteParallelism: sdk.Int(881168),
            FileTransferParallelism: sdk.Int(884830),
            MssqlDefaultMaxDataStreamsPerDatabase: sdk.Int(896512),
            PhysicalHostDatabaseRestoreThrottleMaxRefCount: sdk.Int(720552),
            PhysicalHostLogBackupThrottleMaxRefCount: sdk.Int(367350),
            ThrottlePhysicalHostMaxRefCount: sdk.Int(84154),
        },
        HostID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlHostConfiguration != nil {
        // handle response
    }
}
```

## UpdateMssqlInstance

Update a Microsoft SQL instance with specified properties.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMssql.UpdateMssqlInstance(ctx, operations.UpdateMssqlInstanceRequest{
        MssqlSLAPatchProperties: shared.MssqlSLAPatchProperties{
            ConfiguredSLADomainID: sdk.String("impedit"),
            CopyOnly: sdk.Bool(false),
            LogBackupFrequencyInSeconds: sdk.Int(265773),
            LogRetentionHours: sdk.Int(822631),
            UseConfiguredDefaultLogRetention: sdk.Bool(false),
        },
        ID: "a1fad355-12f0-46d4-a5b7-2f0f548568a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MssqlInstanceSummary != nil {
        // handle response
    }
}
```
