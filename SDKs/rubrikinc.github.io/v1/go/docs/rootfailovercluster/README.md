# RootFailoverCluster

## Overview

Failover clusters.

### Available Operations

* [BulkDeleteFailoverCluster](#bulkdeletefailovercluster) - Delete the provided failover clusters
* [CreateFailoverCluster](#createfailovercluster) - Create a failover cluster
* [DeleteFailoverCluster](#deletefailovercluster) - Delete a failover cluster
* [GetFailoverCluster](#getfailovercluster) - Get details of a failover cluster
* [QueryFailoverCluster](#queryfailovercluster) - Get a summary of all failover clusters
* [UpdateFailoverCluster](#updatefailovercluster) - Update a failover cluster

## BulkDeleteFailoverCluster

Delete the provided failover clusters.

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
    res, err := s.RootFailoverCluster.BulkDeleteFailoverCluster(ctx, operations.BulkDeleteFailoverClusterRequest{
        Ids: []string{
            "perspiciatis",
            "debitis",
        },
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

## CreateFailoverCluster

Create a failover cluster.

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
    res, err := s.RootFailoverCluster.CreateFailoverCluster(ctx, shared.FailoverClusterConfig{
        ConfiguredSLADomainID: sdk.String("ullam"),
        HostIds: []string{
            "accusantium",
        },
        Name: "Carolyn McLaughlin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterDetail != nil {
        // handle response
    }
}
```

## DeleteFailoverCluster

Delete a failover cluster.

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
    res, err := s.RootFailoverCluster.DeleteFailoverCluster(ctx, operations.DeleteFailoverClusterRequest{
        ID: "dc5e3476-2799-4bfb-be69-49fb2bb4ecae",
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

## GetFailoverCluster

Get details of a failover cluster.

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
    res, err := s.RootFailoverCluster.GetFailoverCluster(ctx, operations.GetFailoverClusterRequest{
        ID: "6c3d5db3-adeb-4d5d-aea4-c506a8aa94c0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterDetail != nil {
        // handle response
    }
}
```

## QueryFailoverCluster

Get a summary of all failover clusters.

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
    res, err := s.RootFailoverCluster.QueryFailoverCluster(ctx, operations.QueryFailoverClusterRequest{
        Limit: sdk.Int(143528),
        Name: sdk.String("Megan Hackett"),
        Offset: sdk.Int(342921),
        OperatingSystemType: operations.QueryFailoverClusterOperatingSystemTypeEnumWindows.ToPointer(),
        PrimaryClusterID: sdk.String("unde"),
        SLAAssignment: operations.QueryFailoverClusterSLAAssignmentEnumUnassigned.ToPointer(),
        SortBy: operations.QueryFailoverClusterSortByEnumName.ToPointer(),
        SortOrder: operations.QueryFailoverClusterSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateFailoverCluster

Update failover cluster with specified properties.

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
    res, err := s.RootFailoverCluster.UpdateFailoverCluster(ctx, operations.UpdateFailoverClusterRequest{
        FailoverClusterConfig: shared.FailoverClusterConfig{
            ConfiguredSLADomainID: sdk.String("mollitia"),
            HostIds: []string{
                "nostrum",
                "esse",
            },
            Name: "Grant Schultz MD",
        },
        ID: "c600dec0-01ac-4802-a2ec-09ff8f0f816f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterDetail != nil {
        // handle response
    }
}
```
