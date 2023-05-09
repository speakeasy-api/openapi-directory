# RootSLADomain

## Overview

SLA Domains.

### Available Operations

* [AssignSLAToDownloadedSnapshots](#assignslatodownloadedsnapshots) - Assign retention SLA Domain to the downloaded snapshots of a single object
* [CreateSLADomain](#createsladomain) - Create SLA Domain
* [DeleteSLADomain](#deletesladomain) - Remove SLA Domain
* [GetSLADomain](#getsladomain) - Get SLA Domain details
* [~~PatchSLADomain~~](#patchsladomain) - Patch SLA Domain :warning: **Deprecated**
* [QuerySLADomain](#querysladomain) - Get list of SLA Domains
* [UpdateSLADomain](#updatesladomain) - Update SLA Domain

## AssignSLAToDownloadedSnapshots

Assigns an SLA Domain to a list of downloaded snapshots. The SLA Domain manages retention for the snapshots in the downloaded location. The assignment does not affect the retention of the snapshots in other locations.

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
    res, err := s.RootSLADomain.AssignSLAToDownloadedSnapshots(ctx, shared.DownloadedSnapshotSLAAssignmentInfo{
        ObjectID: "illum",
        SLADomainID: "aspernatur",
        SnapshotIds: []string{
            "deserunt",
            "dignissimos",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateSLADomain

Create a new SLA Domain on a Rubrik cluster by specifying Domain Rules and policies. Only Managed Volume objects support minute frequency to take transaction log backup. SLA assignment on other objects will be disallowed.

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
    res, err := s.RootSLADomain.CreateSLADomain(ctx, shared.SLADomainDefinition{
        AllowedBackupWindows: []shared.BackupWindow{
            shared.BackupWindow{
                DurationInHours: 706786,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(726563),
                    Hour: 545201,
                    Minutes: 986368,
                },
            },
            shared.BackupWindow{
                DurationInHours: 316800,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(244989),
                    Hour: 152542,
                    Minutes: 826114,
                },
            },
            shared.BackupWindow{
                DurationInHours: 540603,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(596802),
                    Hour: 142156,
                    Minutes: 754053,
                },
            },
            shared.BackupWindow{
                DurationInHours: 939305,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(480053),
                    Hour: 539891,
                    Minutes: 124692,
                },
            },
        },
        ArchivalSpecs: []shared.ArchivalSpec{
            shared.ArchivalSpec{
                ArchivalThreshold: 810324,
                ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                    ColdStorageClass: shared.CloudStorageColdTierEnumGlacierDeepArchive.ToPointer(),
                    IsInstantTieringEnabled: false,
                    MinAccessibleDurationInSeconds: sdk.Int64(347321),
                    ShouldTierExistingSnapshots: sdk.Bool(false),
                },
                IsPassthroughSupported: sdk.Bool(false),
                LocationID: "architecto",
                LocationName: sdk.String("consequuntur"),
            },
        },
        FirstFullAllowedBackupWindows: []shared.BackupWindow{
            shared.BackupWindow{
                DurationInHours: 533350,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(457289),
                    Hour: 528169,
                    Minutes: 132662,
                },
            },
            shared.BackupWindow{
                DurationInHours: 260929,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(37211),
                    Hour: 749893,
                    Minutes: 993378,
                },
            },
            shared.BackupWindow{
                DurationInHours: 358257,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(274368),
                    Hour: 530807,
                    Minutes: 952249,
                },
            },
            shared.BackupWindow{
                DurationInHours: 545595,
                StartTimeAttributes: shared.SLAStartTimeAttributes{
                    DayOfWeek: sdk.Int(501836),
                    Hour: 944690,
                    Minutes: 503015,
                },
            },
        },
        Frequencies: []shared.SLAFrequency{
            shared.SLAFrequency{
                Frequency: 91069,
                Retention: 689508,
                TimeUnit: "a",
            },
            shared.SLAFrequency{
                Frequency: 812,
                Retention: 732896,
                TimeUnit: "quod",
            },
            shared.SLAFrequency{
                Frequency: 518728,
                Retention: 888127,
                TimeUnit: "dicta",
            },
            shared.SLAFrequency{
                Frequency: 982277,
                Retention: 175676,
                TimeUnit: "perferendis",
            },
        },
        IsRetentionLocked: sdk.Bool(false),
        LocalRetentionLimit: sdk.Int64(432167),
        Name: "Corey Streich",
        ReplicationSpecs: []shared.ReplicationSpec{
            shared.ReplicationSpec{
                LocationID: "temporibus",
                LocationName: sdk.String("doloremque"),
                LogRetentionLimit: sdk.Int64(46751),
                ReplicationType: shared.ReplicationTypeEnumReplicationToCloudLocation.ToPointer(),
                RetentionLimit: 69326,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SLADomainSummary != nil {
        // handle response
    }
}
```

## DeleteSLADomain

Delete an SLA Domain from a Rubrik cluster. The SLA Domain must not be assigned to any VMs, filesets or databases.

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
    res, err := s.RootSLADomain.DeleteSLADomain(ctx, operations.DeleteSLADomainRequest{
        ID: "090f6706-673f-43a6-81c5-768dce742409",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSLADomain

Retrieve summary information for a specified SLA Domain.

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
    res, err := s.RootSLADomain.GetSLADomain(ctx, operations.GetSLADomainRequest{
        ID: "a215e086-0148-49a5-b63e-3af3dd9dda33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SLADomainSummary != nil {
        // handle response
    }
}
```

## ~~PatchSLADomain~~

(DEPRECATED) Patch the properties of an SLA Domain. The recommended endpoint is v3/sla_domain/{id}.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.RootSLADomain.PatchSLADomain(ctx, operations.PatchSLADomainRequest{
        SLADomainPatchDefinition: shared.SLADomainPatchDefinition{
            AllowedBackupWindows: []shared.BackupWindow{
                shared.BackupWindow{
                    DurationInHours: 811245,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(867308),
                        Hour: 425868,
                        Minutes: 248112,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 279965,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(508373),
                        Hour: 215791,
                        Minutes: 929775,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 252323,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(679150),
                        Hour: 456809,
                        Minutes: 660519,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 616743,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(559765),
                        Hour: 902577,
                        Minutes: 268831,
                    },
                },
            },
            ArchivalSpecs: []shared.ArchivalSpec{
                shared.ArchivalSpec{
                    ArchivalThreshold: 978416,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumAzureArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(447510),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "debitis",
                    LocationName: sdk.String("quaerat"),
                },
                shared.ArchivalSpec{
                    ArchivalThreshold: 344719,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumGlacierDeepArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(518116),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "omnis",
                    LocationName: sdk.String("veniam"),
                },
                shared.ArchivalSpec{
                    ArchivalThreshold: 342241,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumGlacierDeepArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(303791),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "vitae",
                    LocationName: sdk.String("ipsum"),
                },
                shared.ArchivalSpec{
                    ArchivalThreshold: 923327,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumAzureArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(218093),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "error",
                    LocationName: sdk.String("numquam"),
                },
            },
            FirstFullAllowedBackupWindows: []shared.BackupWindow{
                shared.BackupWindow{
                    DurationInHours: 175709,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(234848),
                        Hour: 115657,
                        Minutes: 55124,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 580877,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(18901),
                        Hour: 439135,
                        Minutes: 738496,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 816900,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(188253),
                        Hour: 337161,
                        Minutes: 266643,
                    },
                },
            },
            Frequencies: []shared.SLAFrequency{
                shared.SLAFrequency{
                    Frequency: 14112,
                    Retention: 586327,
                    TimeUnit: "sed",
                },
                shared.SLAFrequency{
                    Frequency: 687643,
                    Retention: 874446,
                    TimeUnit: "nihil",
                },
                shared.SLAFrequency{
                    Frequency: 242061,
                    Retention: 276916,
                    TimeUnit: "a",
                },
                shared.SLAFrequency{
                    Frequency: 7370,
                    Retention: 164347,
                    TimeUnit: "numquam",
                },
            },
            IsRetentionLocked: sdk.Bool(false),
            LocalRetentionLimit: sdk.Int64(253261),
            Name: sdk.String("Dewey Lemke"),
            ReplicationSpecs: []shared.ReplicationSpec{
                shared.ReplicationSpec{
                    LocationID: "expedita",
                    LocationName: sdk.String("quidem"),
                    LogRetentionLimit: sdk.Int64(159433),
                    ReplicationType: shared.ReplicationTypeEnumReplicationToCluster.ToPointer(),
                    RetentionLimit: 991563,
                },
                shared.ReplicationSpec{
                    LocationID: "debitis",
                    LocationName: sdk.String("nostrum"),
                    LogRetentionLimit: sdk.Int64(841562),
                    ReplicationType: shared.ReplicationTypeEnumReplicationToCloudLocation.ToPointer(),
                    RetentionLimit: 85797,
                },
            },
        },
        ID: "1cbfe749-caf4-45a2-bf69-e2c9e6d10e9d",
        ShouldApplyToExistingSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SLADomainSummary != nil {
        // handle response
    }
}
```

## QuerySLADomain

Retrieve summary information for all SLA Domains.

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
    res, err := s.RootSLADomain.QuerySLADomain(ctx, operations.QuerySLADomainRequest{
        DataSources: []string{
            "neque",
            "est",
            "repellendus",
        },
        Name: sdk.String("Rosalie Kautzer I"),
        PrimaryClusterID: sdk.String("quasi"),
        SnapshotIds: []string{
            "molestias",
        },
        SortBy: operations.QuerySLADomainSortByEnumName.ToPointer(),
        SortOrder: operations.QuerySLADomainSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SLADomainSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateSLADomain

Update the properties of an SLA Domain.

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
    res, err := s.RootSLADomain.UpdateSLADomain(ctx, operations.UpdateSLADomainRequest{
        SLADomainDefinition: shared.SLADomainDefinition{
            AllowedBackupWindows: []shared.BackupWindow{
                shared.BackupWindow{
                    DurationInHours: 787042,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(201229),
                        Hour: 194556,
                        Minutes: 448203,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 264002,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(472077),
                        Hour: 243931,
                        Minutes: 11336,
                    },
                },
                shared.BackupWindow{
                    DurationInHours: 523613,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(142520),
                        Hour: 727641,
                        Minutes: 624300,
                    },
                },
            },
            ArchivalSpecs: []shared.ArchivalSpec{
                shared.ArchivalSpec{
                    ArchivalThreshold: 992821,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumAzureArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(650392),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "distinctio",
                    LocationName: sdk.String("dicta"),
                },
                shared.ArchivalSpec{
                    ArchivalThreshold: 937687,
                    ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                        ColdStorageClass: shared.CloudStorageColdTierEnumGlacierDeepArchive.ToPointer(),
                        IsInstantTieringEnabled: false,
                        MinAccessibleDurationInSeconds: sdk.Int64(364287),
                        ShouldTierExistingSnapshots: sdk.Bool(false),
                    },
                    IsPassthroughSupported: sdk.Bool(false),
                    LocationID: "eum",
                    LocationName: sdk.String("iusto"),
                },
            },
            FirstFullAllowedBackupWindows: []shared.BackupWindow{
                shared.BackupWindow{
                    DurationInHours: 913888,
                    StartTimeAttributes: shared.SLAStartTimeAttributes{
                        DayOfWeek: sdk.Int(599825),
                        Hour: 772566,
                        Minutes: 228046,
                    },
                },
            },
            Frequencies: []shared.SLAFrequency{
                shared.SLAFrequency{
                    Frequency: 416782,
                    Retention: 205150,
                    TimeUnit: "enim",
                },
            },
            IsRetentionLocked: sdk.Bool(false),
            LocalRetentionLimit: sdk.Int64(53599),
            Name: "Eddie Keeling II",
            ReplicationSpecs: []shared.ReplicationSpec{
                shared.ReplicationSpec{
                    LocationID: "nihil",
                    LocationName: sdk.String("blanditiis"),
                    LogRetentionLimit: sdk.Int64(616039),
                    ReplicationType: shared.ReplicationTypeEnumReplicationToCloudLocation.ToPointer(),
                    RetentionLimit: 930874,
                },
            },
        },
        ID: "0e991594-d93a-474c-8252-fe3b4b4db8b7",
        ShouldApplyToExistingSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SLADomainSummary != nil {
        // handle response
    }
}
```
