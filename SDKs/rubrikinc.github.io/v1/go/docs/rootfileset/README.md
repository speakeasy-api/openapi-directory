# RootFileset

## Overview

File system filesets.

### Available Operations

* [BrowseFilesetSnapshot](#browsefilesetsnapshot) - Lists all files and directories in a given path
* [CreateDownloadFilesetSnapshotFromCloud](#createdownloadfilesetsnapshotfromcloud) - Create a download fileset snapshot from archival request
* [CreateFileset](#createfileset) - Create one fileset for a host
* [CreateFilesetBackupJob](#createfilesetbackupjob) - Initiate an on-demand backup for a fileset
* [CreateFilesetDownloadFileJob](#createfilesetdownloadfilejob) - Create a file download job from a fileset backup
* [CreateFilesetExportFileJob](#createfilesetexportfilejob) - Create export job
* [CreateFilesetRestoreFileJob](#createfilesetrestorefilejob) - Create restore job
* [DeleteFileset](#deletefileset) - Delete a fileset
* [DeleteFilesetSnapshot](#deletefilesetsnapshot) - Delete a fileset snapshot
* [DeleteFilesetSnapshots](#deletefilesetsnapshots) - Delete all snapshots of a fileset
* [GetFileset](#getfileset) - Get information for a single fileset
* [GetFilesetAsyncRequestStatus](#getfilesetasyncrequeststatus) - Get details about an async request
* [GetFilesetSnapshot](#getfilesetsnapshot) - Get information for a fileset snapshot
* [GetMissedFilesetSnapshots](#getmissedfilesetsnapshots) - Get missed snapshots for a fileset
* [QueryFileset](#queryfileset) - Get summary information for all filesets
* [SearchFileset](#searchfileset) - Search for a file within the fileset
* [UpdateFileset](#updatefileset) - Update a Fileset

## BrowseFilesetSnapshot

Lists all files and directories in a given path.

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
    res, err := s.RootFileset.BrowseFilesetSnapshot(ctx, operations.BrowseFilesetSnapshotRequest{
        ID: "9171b51c-1bdb-41cf-8b88-8ebdfc4ccca9",
        Limit: sdk.Int(580238),
        Offset: sdk.Int(726851),
        Path: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrowseResponseListResponse != nil {
        // handle response
    }
}
```

## CreateDownloadFilesetSnapshotFromCloud

Create a download fileset snapshot from archival request.

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
    res, err := s.RootFileset.CreateDownloadFilesetSnapshotFromCloud(ctx, operations.CreateDownloadFilesetSnapshotFromCloudRequest{
        ID: "7fc0b2dc-e108-473e-82b0-06d678878ba8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateFileset

Create a fileset for a network host. A fileset is a fileset template applied to a host.

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
    res, err := s.RootFileset.CreateFileset(ctx, operations.CreateFilesetRequestBody{
        ArraySpec: &shared.FilesetArraySpec{
            ProxyHostID: sdk.String("nostrum"),
        },
        EnableHardlinkSupport: sdk.Bool(false),
        EnableSymlinkResolution: sdk.Bool(false),
        FailoverClusterAppID: sdk.String("atque"),
        HostID: sdk.String("architecto"),
        IsPassthrough: sdk.Bool(false),
        ShareID: sdk.String("est"),
        SnapMirrorLabelForFullBackup: sdk.String("enim"),
        SnapMirrorLabelForIncrementalBackup: sdk.String("rem"),
        TemplateID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetDetail != nil {
        // handle response
    }
}
```

## CreateFilesetBackupJob

Create an on-demand backup request for the given fileset.

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
    res, err := s.RootFileset.CreateFilesetBackupJob(ctx, operations.CreateFilesetBackupJobRequest{
        BaseOnDemandSnapshotConfig: &shared.BaseOnDemandSnapshotConfig{
            SLAID: sdk.String("quae"),
        },
        ID: "8c54fefa-9c95-4f2e-ac55-65d307cfee81",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateFilesetDownloadFileJob

Initiate a job to download a file from a backup of a fileset. Returns a job instance ID.
An email notification will be sent out when the download is ready. When the download is ready, the file can be downloaded from the corresponding event which includes the job instance ID as the value of **jobInstanceId**.

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
    res, err := s.RootFileset.CreateFilesetDownloadFileJob(ctx, operations.CreateFilesetDownloadFileJobRequest{
        FilesetDownloadFileJobConfig: shared.FilesetDownloadFileJobConfig{
            LegalHoldDownloadConfig: &shared.LegalHoldDownloadConfig{
                IsLegalHoldDownload: false,
            },
            SourceDir: "fugit",
        },
        ID: "06e2813f-a4a4-41c4-80d3-f2132af03102",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateFilesetExportFileJob

Initiate a job to copy a file or folder from a fileset backup to a destination host other than the source host. Returns the job instance ID.

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
    res, err := s.RootFileset.CreateFilesetExportFileJob(ctx, operations.CreateFilesetExportFileJobRequest{
        FilesetExportFileJobConfig: shared.FilesetExportFileJobConfig{
            DestinationDir: "nulla",
            HostID: "enim",
            IgnoreErrors: sdk.Bool(false),
            ShareID: sdk.String("illo"),
            SourceDir: "magnam",
        },
        ID: "f4cc6f18-bf96-421a-aa4f-77a87ee3e4be",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateFilesetRestoreFileJob

Initiate a job to copy a file or folder from a fileset backup to the source host. Returns the job instance ID.

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
    res, err := s.RootFileset.CreateFilesetRestoreFileJob(ctx, operations.CreateFilesetRestoreFileJobRequest{
        FilesetRestoreFileJobConfig: shared.FilesetRestoreFileJobConfig{
            DestinationDir: "dignissimos",
            IgnoreErrors: sdk.Bool(false),
            SourceDir: "ipsam",
        },
        ID: "2c65b344-18e3-4bb9-9c8d-975e0e8419d8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteFileset

Delete a fileset by specifying the fileset ID.

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
    res, err := s.RootFileset.DeleteFileset(ctx, operations.DeleteFilesetRequest{
        ID: "f84f144f-3e07-4edc-84aa-5f3cabd905a9",
        PreserveSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFilesetSnapshot

Delete a fileset snapshot. A snapshot is deleted only if it is an on-demand snapshot, a snapshot of an unprotected fileset or a local snapshot that was downloaded from an archive location.

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
    res, err := s.RootFileset.DeleteFilesetSnapshot(ctx, operations.DeleteFilesetSnapshotRequest{
        ID: "72e05672-8227-4b2d-b094-70bf7a4fa87c",
        Location: operations.DeleteFilesetSnapshotLocationEnumLocal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFilesetSnapshots

Delete all snapshots that were created based on a fileset by providing the fileset ID.
Requires an unprotected fileset. Remove the fileset from all SLA Domains.

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
    res, err := s.RootFileset.DeleteFilesetSnapshots(ctx, operations.DeleteFilesetSnapshotsRequest{
        ID: "535a6fae-54eb-4f60-8321-f023b75d2367",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileset

Retrieve summary information for a fileset by specifying the fileset ID.

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
    res, err := s.RootFileset.GetFileset(ctx, operations.GetFilesetRequest{
        ID: "fe1a0cc8-df79-4f0a-b96d-90c364b7c15d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetDetail != nil {
        // handle response
    }
}
```

## GetFilesetAsyncRequestStatus

Get details about a fileset related async request.

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
    res, err := s.RootFileset.GetFilesetAsyncRequestStatus(ctx, operations.GetFilesetAsyncRequestStatusRequest{
        ID: "fbace188-b1c4-4ee2-88c6-ce611feeb1c7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetFilesetSnapshot

Retrieve summary information for a fileset snapshot by specifying the snapshot ID.

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
    res, err := s.RootFileset.GetFilesetSnapshot(ctx, operations.GetFilesetSnapshotRequest{
        ID: "cbdb6eec-7437-48ba-a531-7747dc915ad2",
        Verbose: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetSnapshotDetail != nil {
        // handle response
    }
}
```

## GetMissedFilesetSnapshots

Retrieve summary information about all missed snapshots for a fileset.

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
    res, err := s.RootFileset.GetMissedFilesetSnapshots(ctx, operations.GetMissedFilesetSnapshotsRequest{
        ID: "caf5dd67-23dc-40f5-ae2f-3a6b70087875",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```

## QueryFileset

Retrieve summary information for each fileset. Optionally, filter the retrieved information.

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
    res, err := s.RootFileset.QueryFileset(ctx, operations.QueryFilesetRequest{
        EffectiveSLADomainID: sdk.String("iure"),
        HostID: sdk.String("ab"),
        HostName: sdk.String("fresh-cuckoo.org"),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(357984),
        Name: sdk.String("Elmer Schaefer"),
        Offset: sdk.Int(722392),
        PrimaryClusterID: sdk.String("nemo"),
        ShareID: sdk.String("enim"),
        SortBy: operations.QueryFilesetSortByEnumTemplateID.ToPointer(),
        SortOrder: operations.QueryFilesetSortOrderEnumAsc.ToPointer(),
        TemplateID: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetSummaryListResponse != nil {
        // handle response
    }
}
```

## SearchFileset

Search for a file within the fileset. Search via full path prefix or filename prefix.

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
    res, err := s.RootFileset.SearchFileset(ctx, operations.SearchFilesetRequest{
        Cursor: sdk.String("perferendis"),
        ID: "80d40bca-cc6c-4bd6-b5f3-ec909304f926",
        Limit: sdk.Int(740347),
        Path: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponseListResponse != nil {
        // handle response
    }
}
```

## UpdateFileset

Update a Fileset with the specified properties.

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
    res, err := s.RootFileset.UpdateFileset(ctx, operations.UpdateFilesetRequest{
        FilesetUpdate: shared.FilesetUpdate{
            ConfiguredSLADomainID: sdk.String("possimus"),
            ForceFull: sdk.Bool(false),
            ForceFullPartitionIds: []int{
                373054,
            },
            SnapMirrorLabelForFullBackup: sdk.String("nostrum"),
            SnapMirrorLabelForIncrementalBackup: sdk.String("sequi"),
        },
        ID: "819b474b-0ed2-40e5-a248-fff639a910ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetDetail != nil {
        // handle response
    }
}
```
