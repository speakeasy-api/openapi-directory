# RootOracle

## Overview

Oracle.

### Available Operations

* [BulkUpdateOracleDb](#bulkupdateoracledb) - Update Oracle Databases
* [BulkUpdateOracleHost](#bulkupdateoraclehost) - Update Oracle Hosts
* [BulkUpdateOracleRac](#bulkupdateoraclerac) - Update Oracle RACs
* [CreateOracleValidateBackupJob](#createoraclevalidatebackupjob) - Validate Oracle database backups
* [DeleteDownloadedSnapshots](#deletedownloadedsnapshots) - Delete downloaded Oracle database snapshots and log snapshots
* [GetAcoParameterList](#getacoparameterlist) - List of supported Advanced Cloning Options
* [GetExampleAcoDownloadLink](#getexampleacodownloadlink) - Link to download the Advanced Recovery Options example file
* [GetOracleDbV1](#getoracledbv1) - Get Oracle database information
* [OracleRestoreEstimate](#oraclerestoreestimate) - Get a size estimate for a restore or export
* [QueryOracleDbV1](#queryoracledbv1) - Get summary information for Oracle databases
* [UpdateOracleDataGuardGroup](#updateoracledataguardgroup) - Update an Oracle Data Guard group
* [UpdateOracleDbV1](#updateoracledbv1) - Update an Oracle database
* [ValidateOracleAcoFile](#validateoracleacofile) - Validate Oracle ACO file

## BulkUpdateOracleDb

Update the properties of the objects that represent the specified Oracle Databases.

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
    res, err := s.RootOracle.BulkUpdateOracleDb(ctx, shared.OracleBulkUpdate{
        ConfiguredSLADomainIDDeprecated: sdk.String("incidunt"),
        HostLogRetentionHours: sdk.Int(174836),
        HostMount: sdk.String("labore"),
        Ids: []string{
            "consequatur",
            "voluptatem",
            "officia",
            "architecto",
        },
        LogBackupFrequencyInMinutes: sdk.Int(845984),
        LogRetentionHours: sdk.Int(420647),
        NodeOrder: []shared.OracleNodeOrder{
            shared.OracleNodeOrder{
                NodeName: "tempore",
                Order: 587157,
            },
            shared.OracleNodeOrder{
                NodeName: "modi",
                Order: 191653,
            },
            shared.OracleNodeOrder{
                NodeName: "aliquam",
                Order: 410321,
            },
            shared.OracleNodeOrder{
                NodeName: "aliquam",
                Order: 357684,
            },
        },
        NumChannels: sdk.Int(872602),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkOracleDbDetails != nil {
        // handle response
    }
}
```

## BulkUpdateOracleHost

Update properties to Oracle Host objects.

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
    res, err := s.RootOracle.BulkUpdateOracleHost(ctx, shared.OracleBulkUpdate{
        ConfiguredSLADomainIDDeprecated: sdk.String("ipsa"),
        HostLogRetentionHours: sdk.Int(226097),
        HostMount: sdk.String("aut"),
        Ids: []string{
            "quaerat",
            "repellat",
            "expedita",
        },
        LogBackupFrequencyInMinutes: sdk.Int(728466),
        LogRetentionHours: sdk.Int(650937),
        NodeOrder: []shared.OracleNodeOrder{
            shared.OracleNodeOrder{
                NodeName: "cumque",
                Order: 765459,
            },
            shared.OracleNodeOrder{
                NodeName: "vero",
                Order: 953916,
            },
        },
        NumChannels: sdk.Int(948810),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkOracleHostDetails != nil {
        // handle response
    }
}
```

## BulkUpdateOracleRac

Update the properties of the objects that represent the specified Oracle RAC.

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
    res, err := s.RootOracle.BulkUpdateOracleRac(ctx, shared.OracleBulkUpdate{
        ConfiguredSLADomainIDDeprecated: sdk.String("ipsam"),
        HostLogRetentionHours: sdk.Int(798122),
        HostMount: sdk.String("facilis"),
        Ids: []string{
            "illo",
        },
        LogBackupFrequencyInMinutes: sdk.Int(968599),
        LogRetentionHours: sdk.Int(895297),
        NodeOrder: []shared.OracleNodeOrder{
            shared.OracleNodeOrder{
                NodeName: "quasi",
                Order: 883797,
            },
            shared.OracleNodeOrder{
                NodeName: "ipsam",
                Order: 134412,
            },
        },
        NumChannels: sdk.Int(542506),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkOracleRacDetails != nil {
        // handle response
    }
}
```

## CreateOracleValidateBackupJob

Queue a job to validate Oracle backups for a database snapshot or a specified timestamp.

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
    res, err := s.RootOracle.CreateOracleValidateBackupJob(ctx, operations.CreateOracleValidateBackupJobRequest{
        OracleValidateConfig: shared.OracleValidateConfig{
            NumChannels: sdk.Int(655694),
            RecoveryPoint: shared.OracleRecoveryPoint{
                SnapshotID: sdk.String("eius"),
                TimestampMs: sdk.Int64(321265),
            },
            SgaMaxSizeInMb: sdk.Int64(649269),
            TargetMountPath: sdk.String("minus"),
            TargetOracleHome: sdk.String("quos"),
            TargetOracleHostOrRacID: "explicabo",
        },
        ID: "b85f8bc2-caba-48da-8127-dd597ff4711a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteDownloadedSnapshots

Requests an asynchronous job to expire downloaded database snapshots taken during a specified time period as well as log snapshots that contain any logs with timestamps within that time period.

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
    res, err := s.RootOracle.DeleteDownloadedSnapshots(ctx, operations.DeleteDownloadedSnapshotsRequest{
        AfterTime: types.MustTimeFromString("2022-10-26T14:58:38.874Z"),
        BeforeTime: types.MustTimeFromString("2021-06-09T00:59:17.904Z"),
        ID: "74b86cec-c74f-477b-8848-bd6a6f0441d2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetAcoParameterList

Get the list of supported Advanced Cloning Options (ACO) parameters.

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
    res, err := s.RootOracle.GetAcoParameterList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleAcoParameterList != nil {
        // handle response
    }
}
```

## GetExampleAcoDownloadLink

Link to download the Advanced Recovery Options example file which can be used to customize Oracle recoveries.

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
    res, err := s.RootOracle.GetExampleAcoDownloadLink(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleFileDownloadLink != nil {
        // handle response
    }
}
```

## GetOracleDbV1

Retrieves detailed information for a specified Oracle database object.

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
    res, err := s.RootOracle.GetOracleDbV1(ctx, operations.GetOracleDbV1Request{
        ID: "c3b80809-4373-4e06-8459-bebbad02f258",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleDbDetail != nil {
        // handle response
    }
}
```

## OracleRestoreEstimate

The estimated size of the data to download from an archival location in order to perform a specified restore or export operation.

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
    res, err := s.RootOracle.OracleRestoreEstimate(ctx, operations.OracleRestoreEstimateRequest{
        ID: "6bcf1525-58da-4a95-be6c-d02756c354aa",
        RecoveryTime: types.MustTimeFromString("2022-10-05T05:40:14.727Z"),
        SnapshotID: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleRestoreEstimateResult != nil {
        // handle response
    }
}
```

## QueryOracleDbV1

Retrieves an array containing summary information about the Oracle database objects in the Rubrik cluster.

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
    res, err := s.RootOracle.QueryOracleDbV1(ctx, operations.QueryOracleDbV1Request{
        EffectiveSLADomainID: sdk.String("cum"),
        IncludeBackupTaskInfo: sdk.Bool(false),
        IsDataGuardGroup: sdk.Bool(false),
        IsLiveMount: sdk.Bool(false),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(300732),
        Name: sdk.String("Gretchen Block"),
        Offset: sdk.Int(225415),
        PrimaryClusterID: sdk.String("minus"),
        SLAAssignment: operations.QueryOracleDbV1SLAAssignmentEnumDerived.ToPointer(),
        SortBy: operations.QueryOracleDbV1SortByEnumEffectiveSLADomainName.ToPointer(),
        SortOrder: operations.QueryOracleDbV1SortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleDbSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateOracleDataGuardGroup

Update properties of an Oracle Data Guard group object.

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
    res, err := s.RootOracle.UpdateOracleDataGuardGroup(ctx, operations.UpdateOracleDataGuardGroupRequest{
        OracleDataGuardGroupUpdate: shared.OracleDataGuardGroupUpdate{
            HostLogRetentionHours: sdk.Int(502686),
            HostMount: sdk.String("eligendi"),
            LogBackupFrequencyInMinutes: sdk.Int(186318),
            LogRetentionHours: sdk.Int(225677),
            NumChannels: sdk.Int(926359),
            PreferredDGMemberUniqueNames: []string{
                "corrupti",
                "sit",
                "magni",
            },
            ShouldBackupFromPrimaryOnly: sdk.Bool(false),
        },
        ID: "d82f0d45-eb4a-48b6-b4ee-5cfc18edc7f7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleDbDetail != nil {
        // handle response
    }
}
```

## UpdateOracleDbV1

Updates the properties of a specified Oracle database object.

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
    res, err := s.RootOracle.UpdateOracleDbV1(ctx, operations.UpdateOracleDbV1Request{
        OracleUpdate: shared.OracleUpdate{
            ConfiguredSLADomainIDDeprecated: sdk.String("quos"),
            HostLogRetentionHours: sdk.Int(493774),
            HostMount: sdk.String("earum"),
            LogBackupFrequencyInMinutes: sdk.Int(236910),
            LogRetentionHours: sdk.Int(169610),
            NodeOrder: []shared.OracleNodeOrder{
                shared.OracleNodeOrder{
                    NodeName: "voluptatem",
                    Order: 258750,
                },
                shared.OracleNodeOrder{
                    NodeName: "rerum",
                    Order: 198159,
                },
                shared.OracleNodeOrder{
                    NodeName: "pariatur",
                    Order: 243752,
                },
                shared.OracleNodeOrder{
                    NodeName: "necessitatibus",
                    Order: 817352,
                },
            },
            NumChannels: sdk.Int(61471),
        },
        ID: "c5670ef4-2bd3-4c9f-9cc5-03f6c39bcd0a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleDbDetail != nil {
        // handle response
    }
}
```

## ValidateOracleAcoFile

Validate the provided Oracle ACO (Advanced Cloning Options) file.

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
    res, err := s.RootOracle.ValidateOracleAcoFile(ctx, operations.ValidateOracleAcoFileRequest{
        RequestBody: "vel",
        IsLiveMount: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OracleAcoValidationResult != nil {
        // handle response
    }
}
```
