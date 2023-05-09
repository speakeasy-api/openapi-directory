# RootVcdCluster

## Overview

vCloud cluster.

### Available Operations

* [CreateVcdClusterV1](#createvcdclusterv1) - Add a vCD Cluster
* [DeleteVcdClusterV1](#deletevcdclusterv1) - Remove vCD Cluster
* [GetVcdClusterAsyncRequestStatusV1](#getvcdclusterasyncrequeststatusv1) - Get vCD Cluster job status
* [GetVcdClusterV1](#getvcdclusterv1) - Get vCD Cluster details
* [QueryVcdClusterV1](#queryvcdclusterv1) - Get summary for all vCD Clusters
* [QueryVcdVimServerV1](#queryvcdvimserverv1) - Get VimServers of a vCD Cluster
* [RefreshVcdClusterV1](#refreshvcdclusterv1) - Refresh a vCD Cluster
* [UpdateVcdClusterV1](#updatevcdclusterv1) - Change vCD Cluster object

## CreateVcdClusterV1

Create a vCD Cluster object by providing the address of the vCD Cluster and the credentials for an account on the vCD Cluster that has administrator privileges. This request initiates an asynchronous job to connect with the vCD Cluster and retrieve the required metadata.

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
    res, err := s.RootVcdCluster.CreateVcdClusterV1(ctx, shared.VcdClusterConfig{
        CaCerts: sdk.String("atque"),
        Hostname: "intelligent-schnitzel.biz",
        Password: "reiciendis",
        Username: "Odie_Collier40",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteVcdClusterV1

Start an asynchronous job to remove a vCD Cluster object.

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
    res, err := s.RootVcdCluster.DeleteVcdClusterV1(ctx, operations.DeleteVcdClusterV1Request{
        ID: "2a00bef6-9e10-4015-b630-bda7afded84a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetVcdClusterAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vCD Cluster.

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
    res, err := s.RootVcdCluster.GetVcdClusterAsyncRequestStatusV1(ctx, operations.GetVcdClusterAsyncRequestStatusV1Request{
        ID: "35a41238-e1a7-435a-826a-e33bef971a8f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetVcdClusterV1

Retrieve detailed information for a vCD Cluster object.

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
    res, err := s.RootVcdCluster.GetVcdClusterV1(ctx, operations.GetVcdClusterV1Request{
        ID: "46bca110-6fe9-465b-b11d-08cf88ec9f7b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdClusterSummary != nil {
        // handle response
    }
}
```

## QueryVcdClusterV1

Retrieve summary information for all vCD cluster objects.

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
    res, err := s.RootVcdCluster.QueryVcdClusterV1(ctx, operations.QueryVcdClusterV1Request{
        Name: sdk.String("Sergio Nitzsche"),
        SortBy: operations.QueryVcdClusterV1SortByEnumName.ToPointer(),
        SortOrder: operations.QueryVcdClusterV1SortOrderEnumDesc.ToPointer(),
        Status: operations.QueryVcdClusterV1StatusEnumConnected.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdClusterSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryVcdVimServerV1

Retrieves the VimServer representation of the vCenter Servers that are attached to a specified vCD Cluster object.

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
    res, err := s.RootVcdCluster.QueryVcdVimServerV1(ctx, operations.QueryVcdVimServerV1Request{
        ID: "56ed333b-b0ce-48aa-a543-2a986eb7e14c",
        SortBy: operations.QueryVcdVimServerV1SortByEnumStatus.ToPointer(),
        SortOrder: operations.QueryVcdVimServerV1SortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VimserverSummaryListResponse != nil {
        // handle response
    }
}
```

## RefreshVcdClusterV1

Start an asynchronous job to refresh the metadata for a specified vCD Cluster object.

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
    res, err := s.RootVcdCluster.RefreshVcdClusterV1(ctx, operations.RefreshVcdClusterV1Request{
        ID: "64089150-0970-419a-88f8-8ece7bf904e0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## UpdateVcdClusterV1

Modify the hostname and credentials of a specified vCD Cluster object.

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
    res, err := s.RootVcdCluster.UpdateVcdClusterV1(ctx, operations.UpdateVcdClusterV1Request{
        VcdClusterPatch: shared.VcdClusterPatch{
            CaCerts: sdk.String("architecto"),
            ConfiguredSLADomainID: sdk.String("dicta"),
            Hostname: sdk.String("alienated-ex-husband.org"),
            Password: sdk.String("sequi"),
            Username: sdk.String("Jon53"),
        },
        ID: "162c6beb-68a0-4f65-bb7d-03a1480f8de3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdClusterSummary != nil {
        // handle response
    }
}
```
