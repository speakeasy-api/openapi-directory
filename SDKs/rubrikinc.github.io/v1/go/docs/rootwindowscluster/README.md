# RootWindowsCluster

## Overview

Windows clusters.

### Available Operations

* [GetWindowsCluster](#getwindowscluster) - Get detailed information for a Windows cluster
* [QueryWindowsCluster](#querywindowscluster) - Get summary information for Windows clusters

## GetWindowsCluster

Returns a detailed view of a Windows server failover cluster.

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
    res, err := s.RootWindowsCluster.GetWindowsCluster(ctx, operations.GetWindowsClusterRequest{
        ID: "505bf03a-93e9-4448-8ca3-7fb10789032a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WindowsClusterDetail != nil {
        // handle response
    }
}
```

## QueryWindowsCluster

Returns a list of summary information for Windows server failover clusters.

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
    res, err := s.RootWindowsCluster.QueryWindowsCluster(ctx, operations.QueryWindowsClusterRequest{
        IsAgentless: sdk.Bool(false),
        PrimaryClusterID: sdk.String("porro"),
        SnappableStatus: operations.QueryWindowsClusterSnappableStatusEnumProtectable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WindowsClusterSummaryListResponse != nil {
        // handle response
    }
}
```
