# RootVmwareVcenter

## Overview

VMware vCenter.

### Available Operations

* [CreateRefresh](#createrefresh) - Refresh vCenter Server metadata
* [CreateRefreshVMV1](#createrefreshvmv1) - Refresh single virtual machine metadata in a vcenter
* [CreateVcenter](#createvcenter) - Add vCenter Server
* [DeleteVcenter](#deletevcenter) - Remove vCenter Server
* [GetHotAddBandwidth](#gethotaddbandwidth) - Get the ingest and export bandwidth limits for HotAdd with the vCenter
* [GetHotAddNetwork](#gethotaddnetwork) - Retrieve the user-configured network for HotAdd operations
* [GetNetworks](#getnetworks) - Get the user-configured networks in the vCenter
* [GetNumProxiesNeeded](#getnumproxiesneeded) - Get the number of HotAdd proxies needed for the vCenter
* [GetVcenter](#getvcenter) - Get the details of a vCenter Server
* [GetVcenterAsyncRequestStatus](#getvcenterasyncrequeststatus) - Get vCenter Server async request
* [PatchVcenter](#patchvcenter) - Update the SLA Domain for a vCenter Server
* [QueryHotAddProxyVM](#queryhotaddproxyvm) - Get a list of HotAdd proxy virtual machines
* [QueryVcenter](#queryvcenter) - Get list of vCenters
* [SetHotAddBandwidth](#sethotaddbandwidth) - Set the ingest and export bandwidth limits for HotAdd with the vCenter
* [SetHotAddNetwork](#sethotaddnetwork) - Set the user-configured network for HotAdd backup and recovery
* [UpdateVcenter](#updatevcenter) - Update vCenter Server

## CreateRefresh

Create a job to refresh the metadata for the specified vCenter Server.

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
    res, err := s.RootVmwareVcenter.CreateRefresh(ctx, operations.CreateRefreshRequest{
        ID: "3138f30d-f3db-4022-baa5-65fb8f652ebb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateRefreshVMV1

Refresh the metadata for a single virtual machine controlled by vCenter.

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
    res, err := s.RootVmwareVcenter.CreateRefreshVMV1(ctx, operations.CreateRefreshVMV1Request{
        RequestBody: "perspiciatis",
        ID: "d3838387-9024-43b2-93da-b30e917f50fd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateVcenter

(DEPRECATED) Create a vCenter Server object by providing the address and account credentials of the vCenter Server. Initiates an asynchronous job to establish a connection with the vCenter Server and retrieve all metadata. Use GET /vcenter/{id}/status to check status. The recommended endpoint is /v2/vmware/vcenter. This endpoint will remain available in future releases despite deprecation.

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
    res, err := s.RootVmwareVcenter.CreateVcenter(ctx, shared.VcenterConfig{
        CaCerts: sdk.String("animi"),
        ComputeVisibilityFilter: []shared.ClusterVisibilityConfig{
            shared.ClusterVisibilityConfig{
                HostGroupFilter: []string{
                    "porro",
                    "voluptatum",
                },
                ID: "b1bb55a2-92b0-4bc3-bb74-4664eb1d0338",
            },
        },
        ConflictResolutionAuthz: shared.VcenterConfigConflictResolutionAuthzEnumNoConflictResolution.ToPointer(),
        Hostname: "rough-activist.net",
        Password: "architecto",
        Username: "Monica44",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteVcenter

Initiates an asynchronous job to remove a vCenter Server object. The vCenter Server cannot have VMs mounted through the Rubrik cluster.

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
    res, err := s.RootVmwareVcenter.DeleteVcenter(ctx, operations.DeleteVcenterRequest{
        ID: "afee74b6-feb9-4457-87ed-af39d16fbf76",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetHotAddBandwidth

Get the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

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
    res, err := s.RootVmwareVcenter.GetHotAddBandwidth(ctx, operations.GetHotAddBandwidthRequest{
        ID: "fd162b30-3e30-423b-93e3-4316cf55b431",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HotAddBandwidthInfo != nil {
        // handle response
    }
}
```

## GetHotAddNetwork

Retrieve the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

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
    res, err := s.RootVmwareVcenter.GetHotAddNetwork(ctx, operations.GetHotAddNetworkRequest{
        ID: "3553ccf1-c204-4c4a-9cc9-904c5195b864",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HotAddNetworkConfigWithName != nil {
        // handle response
    }
}
```

## GetNetworks

Get the names and IDs of the user configured networks in the vCenter. This information enables users to choose a desired network for backups to go through for VMware Cloud on AWS setups.

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
    res, err := s.RootVmwareVcenter.GetNetworks(ctx, operations.GetNetworksRequest{
        ID: "8cefa78f-1e2d-43b9-81e0-952bbb4cbb19",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NetworkInfoListResponse != nil {
        // handle response
    }
}
```

## GetNumProxiesNeeded

Get the number of HotAdd proxies that need to be deployed to the vCenter to support the maximum number of ingest jobs.

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
    res, err := s.RootVmwareVcenter.GetNumProxiesNeeded(ctx, operations.GetNumProxiesNeededRequest{
        ID: "f713d95a-4169-4c13-8727-1e18ea9e4511",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HotAddProxiesNeededInfo != nil {
        // handle response
    }
}
```

## GetVcenter

Retrieve detailed information for a vCenter Server object.

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
    res, err := s.RootVmwareVcenter.GetVcenter(ctx, operations.GetVcenterRequest{
        ID: "8c2cc57f-bd60-4b1a-b8ed-29a9d4eea856",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcenterDetail != nil {
        // handle response
    }
}
```

## GetVcenterAsyncRequestStatus

Get details about a vcenter related async request.

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
    res, err := s.RootVmwareVcenter.GetVcenterAsyncRequestStatus(ctx, operations.GetVcenterAsyncRequestStatusRequest{
        ID: "58c2d4f4-c88b-4e4f-a78f-d9667e46c51d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## PatchVcenter

Update the SLA Domain that is configured for a vCenter Server.

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
    res, err := s.RootVmwareVcenter.PatchVcenter(ctx, operations.PatchVcenterRequest{
        VcenterPatch: shared.VcenterPatch{
            CaCerts: sdk.String("dolores"),
            ConfiguredSLADomainID: sdk.String("voluptatibus"),
        },
        ID: "faa58dce-f234-4c95-9b9b-df2190abd9bb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcenterSummary != nil {
        // handle response
    }
}
```

## QueryHotAddProxyVM

Retrieve summary information for all HotAdd proxy virtual machines.

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
    res, err := s.RootVmwareVcenter.QueryHotAddProxyVM(ctx, operations.QueryHotAddProxyVMRequest{
        Name: sdk.String("Delbert Cummerata"),
        SortBy: operations.QueryHotAddProxyVMSortByEnumName.ToPointer(),
        SortOrder: operations.QueryHotAddProxyVMSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HotAddProxyVMInfoListResponse != nil {
        // handle response
    }
}
```

## QueryVcenter

Retrieve information for each managed vCenter, including: ID, managed ID, address, username, SLA ID, and primary cluster ID.

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
    res, err := s.RootVmwareVcenter.QueryVcenter(ctx, operations.QueryVcenterRequest{
        IgnoreConnectionStatus: sdk.Bool(false),
        PrimaryClusterID: sdk.String("saepe"),
        SnappableStatus: operations.QueryVcenterSnappableStatusEnumProtectable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcenterSummaryListResponse != nil {
        // handle response
    }
}
```

## SetHotAddBandwidth

Set the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

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
    res, err := s.RootVmwareVcenter.SetHotAddBandwidth(ctx, operations.SetHotAddBandwidthRequest{
        HotAddBandwidthInfo: shared.HotAddBandwidthInfo{
            ExportLimit: 770376,
            IngestLimit: 165507,
        },
        ID: "659ce028-0840-4c69-af68-e45c8addfac7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetHotAddNetwork

Set the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

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
    res, err := s.RootVmwareVcenter.SetHotAddNetwork(ctx, operations.SetHotAddNetworkRequest{
        HotAddNetworkConfigWithID: shared.HotAddNetworkConfigWithID{
            NetworkID: "nostrum",
            StaticIPInfo: &shared.StaticIPInfo{
                DNSServers: []string{
                    "enim",
                    "ipsa",
                },
                Gateway: sdk.String("ipsa"),
                IPAddresses: []string{
                    "nesciunt",
                    "aperiam",
                },
                SubnetMask: "optio",
            },
        },
        ID: "6632b439-1fdf-401c-be91-e8f7bc69d460",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVcenter

Update the address, username and password of the specified vCenter Server object.

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
    res, err := s.RootVmwareVcenter.UpdateVcenter(ctx, operations.UpdateVcenterRequest{
        VcenterConfig: shared.VcenterConfig{
            CaCerts: sdk.String("est"),
            ComputeVisibilityFilter: []shared.ClusterVisibilityConfig{
                shared.ClusterVisibilityConfig{
                    HostGroupFilter: []string{
                        "debitis",
                        "quo",
                    },
                    ID: "eb26d10f-1ef2-4631-87c0-f0f873f9d5c2",
                },
                shared.ClusterVisibilityConfig{
                    HostGroupFilter: []string{
                        "doloribus",
                        "illum",
                    },
                    ID: "3e0b4a4a-4253-4c30-a571-1f42c7e7dc54",
                },
            },
            ConflictResolutionAuthz: shared.VcenterConfigConflictResolutionAuthzEnumNoConflictResolution.ToPointer(),
            Hostname: "severe-tumbler.com",
            Password: "excepturi",
            Username: "Timmothy68",
        },
        ID: "7a215ca1-2a4b-4a9d-9998-8192cfd0c77c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcenterSummary != nil {
        // handle response
    }
}
```
