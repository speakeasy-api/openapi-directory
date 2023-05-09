# RootSapHana

## Overview

SAP HANA.

### Available Operations

* [AddSapHanaSystem](#addsaphanasystem) - Add a SAP HANA system
* [ConfigureSapHanaRestore](#configuresaphanarestore) - Configure the target database for system copy restore
* [CreateOnDemandSapHanaBackup](#createondemandsaphanabackup) - Create on demand database snapshot
* [CreateSapHanaSystemRefresh](#createsaphanasystemrefresh) - Refresh SAP HANA system metadata
* [DeleteSapHanaDbSnapshot](#deletesaphanadbsnapshot) - Delete a particular full snapshot of a SAP HANA database
* [DeleteSapHanaSystem](#deletesaphanasystem) - Delete a SAP HANA system
* [GetMissedSapHanaDbSnapshots](#getmissedsaphanadbsnapshots) - Retrieve summary information for missed snapshots of a SAP HANA database
* [GetSapHanaDatabase](#getsaphanadatabase) - Get detailed information for an SAP HANA database
* [GetSapHanaDbAsyncRequestStatus](#getsaphanadbasyncrequeststatus) - Get the status of a SAP HANA database request
* [GetSapHanaDbRecoverableRanges](#getsaphanadbrecoverableranges) - Get recoverable ranges of a SAP HANA database
* [GetSapHanaDbSnapshot](#getsaphanadbsnapshot) - Get SAP HANA database snapshot details
* [GetSapHanaSystem](#getsaphanasystem) - Get summary information for a SAP HANA system
* [GetSapHanaSystemAsyncRequestStatus](#getsaphanasystemasyncrequeststatus) - Get the status of a SAP HANA system request
* [PatchSapHanaDatabase](#patchsaphanadatabase) - Update the SLA Domain for an SAP HANA database
* [PatchSapHanaSystem](#patchsaphanasystem) - Update the SLA Domain for a SAP HANA system
* [QuerySapHanaDatabases](#querysaphanadatabases) - Get summary information for discovered SAP HANA databases
* [QuerySapHanaDbSnapshot](#querysaphanadbsnapshot) - Get a summary list of snapshots for a SAP HANA database
* [QuerySapHanaSystems](#querysaphanasystems) - Get summary information for added SAP HANA systems
* [UnconfigureSapHanaRestore](#unconfiguresaphanarestore) - Reset the configuration for system copy restore on target database

## AddSapHanaSystem

Add a SAP HANA system to the Rubrik cluster.

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
    res, err := s.RootSapHana.AddSapHanaSystem(ctx, shared.SapHanaSystemConfig{
        DataPathSpec: &shared.SapHanaSystemDataPathSpec{
            DataPathType: shared.SapHanaDataPathTypeEnumManagedVolume.ToPointer(),
        },
        HostIds: []string{
            "quasi",
            "iure",
            "ex",
        },
        InstanceNumber: "error",
        Password: "deleniti",
        Sid: "tempore",
        Username: "Summer26",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaAddSystemResponse != nil {
        // handle response
    }
}
```

## ConfigureSapHanaRestore

Initiates a job to configure the specified target database for a system copy restore by sending metadata about the source database. System copy restore in SAP HANA is done across different databases.

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
    res, err := s.RootSapHana.ConfigureSapHanaRestore(ctx, operations.ConfigureSapHanaRestoreRequest{
        SapHanaRestoreSourceConfig: shared.SapHanaRestoreSourceConfig{
            SnappableID: sdk.String("quaerat"),
        },
        ID: "eac8b3a2-875c-46c1-be60-6d07d2a9c87a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateOnDemandSapHanaBackup

Initiates a job to take an on demand full snapshot of a specified SAP HANA database object. The GET /sap_hana/db/request/{id} endpoint can be used to monitor the progress of the job.

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
    res, err := s.RootSapHana.CreateOnDemandSapHanaBackup(ctx, operations.CreateOnDemandSapHanaBackupRequest{
        BaseOnDemandSnapshotConfig: &shared.BaseOnDemandSnapshotConfig{
            SLAID: sdk.String("repudiandae"),
        },
        ID: "50c16661-a1d9-4136-a7e8-d53213f3f658",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateSapHanaSystemRefresh

Initiates a job to refresh metadata of a SAP HANA system object. The GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

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
    res, err := s.RootSapHana.CreateSapHanaSystemRefresh(ctx, operations.CreateSapHanaSystemRefreshRequest{
        ID: "752db764-c59f-40a5-aceb-cada29ca7918",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteSapHanaDbSnapshot

Initiates a request to delete a particular full snapshot of a SAP HANA database. If the log retention period for the database is still in effect, the snapshot will be deleted when the log retention period ends.

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
    res, err := s.RootSapHana.DeleteSapHanaDbSnapshot(ctx, operations.DeleteSapHanaDbSnapshotRequest{
        ID: "1c956716-63c5-430b-9665-163a3638512a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSapHanaSystem

Initiates a job to delete a SAP HANA system object. GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

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
    res, err := s.RootSapHana.DeleteSapHanaSystem(ctx, operations.DeleteSapHanaSystemRequest{
        ID: "b2521b9f-2e07-4246-bb8a-40bc05fab0d6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetMissedSapHanaDbSnapshots

Returns a summary of information for the missed snapshots of a SAP HANA database. Retrieve only the missed snapshots that occur between the beginning and ending timestamps.

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
    res, err := s.RootSapHana.GetMissedSapHanaDbSnapshots(ctx, operations.GetMissedSapHanaDbSnapshotsRequest{
        AfterTime: types.MustTimeFromString("2022-12-24T20:12:42.367Z"),
        BeforeTime: types.MustTimeFromString("2020-07-21T02:26:22.103Z"),
        ID: "f22a94d2-0ec9-40ea-81d1-f465e85156ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```

## GetSapHanaDatabase

Returns a detailed view of the SAP HANA database.

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
    res, err := s.RootSapHana.GetSapHanaDatabase(ctx, operations.GetSapHanaDatabaseRequest{
        ID: "f73fdf54-fdd5-4ea9-9433-98dafb42a8d6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaDatabaseDetail != nil {
        // handle response
    }
}
```

## GetSapHanaDbAsyncRequestStatus

Get details about a SAP HANA database related request which includes the status of data backup job.

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
    res, err := s.RootSapHana.GetSapHanaDbAsyncRequestStatus(ctx, operations.GetSapHanaDbAsyncRequestStatusRequest{
        ID: "3388e4d8-039e-4a5f-9b18-a244fd619039",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetSapHanaDbRecoverableRanges

Retrieve the recoverable ranges for a specified SAP HANA database. Provide a beginning and/or ending timestamp to retrieve only the recoverable ranges that fall within this period of time.

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
    res, err := s.RootSapHana.GetSapHanaDbRecoverableRanges(ctx, operations.GetSapHanaDbRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2020-12-21T15:06:24.224Z"),
        BeforeTime: types.MustTimeFromString("2020-07-10T19:34:43.413Z"),
        ID: "38ed0dc6-71dc-47f1-a3af-15920c90d1b4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaRecoverableRangeListResponse != nil {
        // handle response
    }
}
```

## GetSapHanaDbSnapshot

Retrieve detailed information about a full or an incremental snapshot of a SAP HANA database.

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
    res, err := s.RootSapHana.GetSapHanaDbSnapshot(ctx, operations.GetSapHanaDbSnapshotRequest{
        ID: "901f2bd8-9c8a-4326-b9da-5b7b6902b881",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaDatabaseSnapshotDetail != nil {
        // handle response
    }
}
```

## GetSapHanaSystem

Returns a summary view of a SAP HANA system.

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
    res, err := s.RootSapHana.GetSapHanaSystem(ctx, operations.GetSapHanaSystemRequest{
        ID: "a94f6436-64a8-4f0a-b8c6-91d732d9fbaf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaSystemSummary != nil {
        // handle response
    }
}
```

## GetSapHanaSystemAsyncRequestStatus

Get details about a SAP HANA system related request which includes the status of delete or refresh system job.

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
    res, err := s.RootSapHana.GetSapHanaSystemAsyncRequestStatus(ctx, operations.GetSapHanaSystemAsyncRequestStatusRequest{
        ID: "9476a2ae-8dcc-450c-8a35-12c737848930",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## PatchSapHanaDatabase

Update the SLA Domain that is configured for an SAP HANA database.

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
    res, err := s.RootSapHana.PatchSapHanaDatabase(ctx, operations.PatchSapHanaDatabaseRequest{
        SapHanaDatabasePatch: shared.SapHanaDatabasePatch{
            ConfiguredSLADomainID: sdk.String("dignissimos"),
            LogSnapshotJobIntervalInMinutes: sdk.Int(326420),
        },
        ID: "0a00e966-ec73-46d4-b194-398c783c9239",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaDatabaseDetail != nil {
        // handle response
    }
}
```

## PatchSapHanaSystem

Update the SLA Domain that is configured for a SAP HANA system.

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
    res, err := s.RootSapHana.PatchSapHanaSystem(ctx, operations.PatchSapHanaSystemRequest{
        SapHanaSystemPatch: shared.SapHanaSystemPatch{
            ConfiguredSLADomainID: sdk.String("praesentium"),
            HostIds: []string{
                "fugiat",
                "ipsum",
                "pariatur",
                "amet",
            },
            InstanceNumber: sdk.String("deserunt"),
            Password: sdk.String("nobis"),
            Sid: sdk.String("quam"),
            Username: sdk.String("Randy81"),
        },
        ID: "5ca8649a-70cf-4d5d-a989-b7206451077d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaPatchSystemResponse != nil {
        // handle response
    }
}
```

## QuerySapHanaDatabases

Returns summary information for SAP HANA databases connected to the CDM cluster.

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
    res, err := s.RootSapHana.QuerySapHanaDatabases(ctx, operations.QuerySapHanaDatabasesRequest{
        EffectiveSLADomainID: sdk.String("et"),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(596802),
        Name: sdk.String("Pablo Lehner"),
        Offset: sdk.Int(261953),
        PrimaryClusterID: sdk.String("perspiciatis"),
        SLAAssignment: sdk.String("consequuntur"),
        SortBy: operations.QuerySapHanaDatabasesSortByEnumSapHanaSystemName.ToPointer(),
        SortOrder: operations.QuerySapHanaDatabasesSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaDatabaseSummaryListResponse != nil {
        // handle response
    }
}
```

## QuerySapHanaDbSnapshot

Retrieve summary information about the full and incremental snapshots of a specified SAP HANA database.

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
    res, err := s.RootSapHana.QuerySapHanaDbSnapshot(ctx, operations.QuerySapHanaDbSnapshotRequest{
        AfterTime: types.MustTimeFromString("2022-09-20T16:27:28.106Z"),
        BackupType: operations.QuerySapHanaDbSnapshotBackupTypeEnumIncremental.ToPointer(),
        BeforeTime: types.MustTimeFromString("2021-08-20T14:41:12.661Z"),
        ID: "2c195454-5e95-45dc-8185-ea4901c7c43a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaDatabaseSnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QuerySapHanaSystems

Returns summary information for SAP HANA systems.

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
    res, err := s.RootSapHana.QuerySapHanaSystems(ctx, operations.QuerySapHanaSystemsRequest{
        Limit: sdk.Int(815667),
        Offset: sdk.Int(129870),
        PrimaryClusterID: sdk.String("nulla"),
        Sid: sdk.String("laborum"),
        SortBy: operations.QuerySapHanaSystemsSortByEnumSid.ToPointer(),
        SortOrder: operations.QuerySapHanaSystemsSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SapHanaSystemSummaryListResponse != nil {
        // handle response
    }
}
```

## UnconfigureSapHanaRestore

Initiates a job to reset the configuration for the system copy restore on the specified target database. System copy restore in SAP HANA is done across different databases.

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
    res, err := s.RootSapHana.UnconfigureSapHanaRestore(ctx, operations.UnconfigureSapHanaRestoreRequest{
        ID: "784aba3d-230e-4df7-b811-a115382bd7ed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```
