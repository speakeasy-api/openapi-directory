# RootVmwareComputeCluster

## Overview

VMware compute clusters.

### Available Operations

* [GetAsyncRequestStatusForComputeCluster](#getasyncrequeststatusforcomputecluster) - Get asynchronous request details for VMware cluster
* [GetComputeCluster](#getcomputecluster) - Get details for the compute cluster
* [GetIoFilters](#getiofilters) - Get the ioFilters on the VMware compute cluster with a specific ID
* [InstallIoFilter](#installiofilter) - Install the Rubrik ioFilter to the VMware cluster with a specific ID
* [QueryComputeCluster](#querycomputecluster) - Get all the clusters belonging to this datacenter
* [UninstallIoFilter](#uninstalliofilter) - Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID
* [UpdateComputeCluster](#updatecomputecluster) - Modify information for a VMware compute cluster
* [UpgradeIoFilter](#upgradeiofilter) - Upgrade the Rubrik ioFilter for the VMware cluster with a specific ID

## GetAsyncRequestStatusForComputeCluster

Get the details of an asynchronous request that involves a VMware compute cluster.

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
    res, err := s.RootVmwareComputeCluster.GetAsyncRequestStatusForComputeCluster(ctx, operations.GetAsyncRequestStatusForComputeClusterRequest{
        ID: "41240d44-87ac-4693-b94c-3b9d2488d795",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetComputeCluster

Get details for the compute cluster.

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
    res, err := s.RootVmwareComputeCluster.GetComputeCluster(ctx, operations.GetComputeClusterRequest{
        ID: "aa42fc40-5669-4f69-a006-d21249450819",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeClusterDetail != nil {
        // handle response
    }
}
```

## GetIoFilters

Get the summary of the ioFilters on the VMware compute cluster with a specific ID.

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
    res, err := s.RootVmwareComputeCluster.GetIoFilters(ctx, operations.GetIoFiltersRequest{
        ID: "d7c3b1b4-1844-4060-a003-10d023dc901f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IoFilterSummaryListResponse != nil {
        // handle response
    }
}
```

## InstallIoFilter

Install the latest version of Rubrik ioFilter to the VMware cluster with a specific ID. The cluster must be in maintenance mode to install the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

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
    res, err := s.RootVmwareComputeCluster.InstallIoFilter(ctx, operations.InstallIoFilterRequest{
        FullyQualifiedDomainNameInfo: shared.FullyQualifiedDomainNameInfo{
            Fqdn: "veniam",
        },
        ID: "afd2a6c4-4846-4ae9-9892-53c8962f4896",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## QueryComputeCluster

Get all the clusters belonging to this datacenter.

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
    res, err := s.RootVmwareComputeCluster.QueryComputeCluster(ctx, operations.QueryComputeClusterRequest{
        DatacenterID: sdk.String("rerum"),
        PrimaryClusterID: sdk.String("a"),
        SnappableStatus: operations.QueryComputeClusterSnappableStatusEnumProtectable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeClusterSummaryListResponse != nil {
        // handle response
    }
}
```

## UninstallIoFilter

Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID. The cluster must be in maintenance mode to uninstall the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

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
    res, err := s.RootVmwareComputeCluster.UninstallIoFilter(ctx, operations.UninstallIoFilterRequest{
        ID: "51e4652d-3c34-43d6-9778-af491247725e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## UpdateComputeCluster

Update the configuredSlaDomainId for a VMware compute cluster with a specific ID.

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
    res, err := s.RootVmwareComputeCluster.UpdateComputeCluster(ctx, operations.UpdateComputeClusterRequest{
        ComputeClusterUpdate: shared.ComputeClusterUpdate{
            ConfiguredSLADomainID: sdk.String("commodi"),
        },
        ID: "21909e91-044a-45de-99ac-7706670cf1cf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeClusterDetail != nil {
        // handle response
    }
}
```

## UpgradeIoFilter

Upgrade the Rubrik ioFilter for a VMware cluster with a specific ID. The cluster must be in maintenance mode to upgrade the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

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
    res, err := s.RootVmwareComputeCluster.UpgradeIoFilter(ctx, operations.UpgradeIoFilterRequest{
        FullyQualifiedDomainNameInfo: shared.FullyQualifiedDomainNameInfo{
            Fqdn: "quis",
        },
        ID: "93260525-1e66-4bb4-a689-7d99a2d33567",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```
