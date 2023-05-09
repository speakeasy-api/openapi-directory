# RootHdfs

## Overview

HDFS.

### Available Operations

* [BrowseHdfsSnapshot](#browsehdfssnapshot) - Lists all files and directories in a given path
* [CreateHdfs](#createhdfs) - Create one HDFS directory for a host
* [CreateHdfsBackupJob](#createhdfsbackupjob) - Initiate an on-demand backup for a HDFS directory
* [CreateHdfsExportFileJob](#createhdfsexportfilejob) - Create export job
* [CreateHdfsRestoreFileJob](#createhdfsrestorefilejob) - Create restore job
* [DeleteHdfs](#deletehdfs) - Delete a HDFS directory
* [DeleteHdfsSnapshot](#deletehdfssnapshot) - Delete a HDFS directory snapshot
* [DeleteHdfsSnapshots](#deletehdfssnapshots) - Delete all snapshots of a HDFS directory
* [GetHdfs](#gethdfs) - Get information for a single HDFS directory
* [GetHdfsAsyncRequestStatus](#gethdfsasyncrequeststatus) - Get details about an asynchronous request
* [GetHdfsSnapshot](#gethdfssnapshot) - Get information for a HDFS directory snapshot
* [GetMissedHdfsSnapshots](#getmissedhdfssnapshots) - Get missed snapshots for a HDFS directory
* [QueryHdfs](#queryhdfs) - Get summary information for all HDFS directories
* [SearchHdfs](#searchhdfs) - Search for a file within the HDFS directory
* [UpdateHdfs](#updatehdfs) - Update a HDFS directory

## BrowseHdfsSnapshot

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
    res, err := s.RootHdfs.BrowseHdfsSnapshot(ctx, operations.BrowseHdfsSnapshotRequest{
        ID: "67b8e3c8-db03-4408-96d3-64ffd455906d",
        Limit: sdk.Int(116867),
        Offset: sdk.Int(154840),
        Path: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrowseResponseListResponse != nil {
        // handle response
    }
}
```

## CreateHdfs

Create a HDFS directory for a network host. A HDFS directory is a HDFS directory template applied to a host.

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
    res, err := s.RootHdfs.CreateHdfs(ctx, shared.HdfsCreate{
        HostID: sdk.String("neque"),
        TemplateID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsDetail != nil {
        // handle response
    }
}
```

## CreateHdfsBackupJob

Create on-demand backup request for HDFS directory.

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
    res, err := s.RootHdfs.CreateHdfsBackupJob(ctx, operations.CreateHdfsBackupJobRequest{
        BaseOnDemandSnapshotConfig: &shared.BaseOnDemandSnapshotConfig{
            SLAID: sdk.String("numquam"),
        },
        ID: "8e935c2c-9e81-4f30-be3e-43202d721657",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateHdfsExportFileJob

Initiate a job to copy a file or folder from a hdfs backup to a destination host other than the source host. Returns the job instance ID.

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
    res, err := s.RootHdfs.CreateHdfsExportFileJob(ctx, operations.CreateHdfsExportFileJobRequest{
        HdfsExportFileJobConfig: shared.HdfsExportFileJobConfig{
            DestinationDir: "vel",
            HostID: "minima",
            ShouldIgnoreErrors: sdk.Bool(false),
            SourceDir: "sit",
        },
        ID: "6641870d-9d21-4f9a-9030-c4ecc11a0836",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateHdfsRestoreFileJob

Initiate a job to copy a file or folder from a HDFS directory backup to the source host. Returns the job instance ID.

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
    res, err := s.RootHdfs.CreateHdfsRestoreFileJob(ctx, operations.CreateHdfsRestoreFileJobRequest{
        HdfsRestoreFileJobConfig: shared.HdfsRestoreFileJobConfig{
            DestinationDir: "tempora",
            ShouldIgnoreErrors: sdk.Bool(false),
            SourceDir: "eos",
        },
        ID: "9068b850-2a55-4e7f-b3bc-845e320a319f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteHdfs

Delete a HDFS directory by specifying the HDFS directory ID.

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
    res, err := s.RootHdfs.DeleteHdfs(ctx, operations.DeleteHdfsRequest{
        ID: "4badf947-c9a8-467b-8424-26665816ddca",
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

## DeleteHdfsSnapshot

Delete a HDFS directory snapshot. A snapshot is deleted only if it is an on-demand snapshot, or a snapshot of an unprotected HDFS directory.

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
    res, err := s.RootHdfs.DeleteHdfsSnapshot(ctx, operations.DeleteHdfsSnapshotRequest{
        ID: "8ef51fcb-4c59-43ec-92cd-aad0ec7afedb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHdfsSnapshots

Delete all snapshots that were created based on a hdfs by providing the HDFS directory ID.
Requires an unprotected HDFS directory. Remove the HDFS directory from all SLA Domains.

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
    res, err := s.RootHdfs.DeleteHdfsSnapshots(ctx, operations.DeleteHdfsSnapshotsRequest{
        ID: "d80df448-a47f-4939-8c58-880983dabf9e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHdfs

Retrieve summary information for a HDFS directory by specifying the HDFS directory ID.

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
    res, err := s.RootHdfs.GetHdfs(ctx, operations.GetHdfsRequest{
        ID: "f3ffdd9f-7f07-49af-8d35-724cdb0f4d28",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsDetail != nil {
        // handle response
    }
}
```

## GetHdfsAsyncRequestStatus

Get details about a hdfs related asynchronous request.

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
    res, err := s.RootHdfs.GetHdfsAsyncRequestStatus(ctx, operations.GetHdfsAsyncRequestStatusRequest{
        ID: "1187d568-44ed-4ed8-9a90-65e628bdfc20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetHdfsSnapshot

Retrieve summary information for a HDFS directory snapshot by specifying the snapshot ID.

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
    res, err := s.RootHdfs.GetHdfsSnapshot(ctx, operations.GetHdfsSnapshotRequest{
        ID: "32b6c879-923b-47e1-b584-f7ae12c6891f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsSnapshotDetail != nil {
        // handle response
    }
}
```

## GetMissedHdfsSnapshots

Retrieve summary information about all missed snapshots for a HDFS directory.

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
    res, err := s.RootHdfs.GetMissedHdfsSnapshots(ctx, operations.GetMissedHdfsSnapshotsRequest{
        ID: "82ce1157-1723-4053-b7dc-fa89df975e35",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```

## QueryHdfs

Retrieve summary information for each HDFS directory. Optionally, filter the retrieved information.

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
    res, err := s.RootHdfs.QueryHdfs(ctx, operations.QueryHdfsRequest{
        EffectiveSLADomainID: sdk.String("commodi"),
        HostID: sdk.String("vel"),
        HostName: sdk.String("meaty-granola.com"),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(596820),
        Name: sdk.String("Kellie Miller"),
        Offset: sdk.Int(833946),
        PrimaryClusterID: sdk.String("temporibus"),
        SortBy: operations.QueryHdfsSortByEnumExcludes.ToPointer(),
        SortOrder: operations.QueryHdfsSortOrderEnumAsc.ToPointer(),
        TemplateID: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsSummaryListResponse != nil {
        // handle response
    }
}
```

## SearchHdfs

Search for a file within the HDFS directory. Search using full path prefix or filename prefix.

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
    res, err := s.RootHdfs.SearchHdfs(ctx, operations.SearchHdfsRequest{
        Cursor: sdk.String("beatae"),
        ID: "11dea102-6d54-41a4-9190-feb21780bccc",
        Limit: sdk.Int(26321),
        Path: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponseListResponse != nil {
        // handle response
    }
}
```

## UpdateHdfs

Update a HDFS directory with the specified properties.

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
    res, err := s.RootHdfs.UpdateHdfs(ctx, operations.UpdateHdfsRequest{
        HdfsUpdate: shared.HdfsUpdate{
            ConfiguredSLADomainID: "distinctio",
        },
        ID: "bddb4847-08fb-44e3-91e6-bc158c4c4e54",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsDetail != nil {
        // handle response
    }
}
```
