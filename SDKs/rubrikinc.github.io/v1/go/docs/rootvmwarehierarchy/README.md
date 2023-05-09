# RootVmwareHierarchy

## Overview

VMware hierarchy.

### Available Operations

* [GetVmwareHierarchyExport](#getvmwarehierarchyexport) - Get Available VMware Hierarchy Objects for Export Operations
* [GetVmwareHierarchyObject](#getvmwarehierarchyobject) - Get VMware Hierarchy Object Information

## GetVmwareHierarchyExport

Get VMware Clusters, Hosts, and Resource Pool hierarchy objects that are available as the target for Virtual Machine Export operations.

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
    res, err := s.RootVmwareHierarchy.GetVmwareHierarchyExport(ctx, operations.GetVmwareHierarchyExportRequest{
        RootID: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHierarchyInfoListResponse != nil {
        // handle response
    }
}
```

## GetVmwareHierarchyObject

Get VMware Clusters, Hosts, and Resource Pool hierarchy object detail information by object ID.

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
    res, err := s.RootVmwareHierarchy.GetVmwareHierarchyObject(ctx, operations.GetVmwareHierarchyObjectRequest{
        ID: "ee6cf59f-358a-4aea-8ae3-23a31bf7ba1c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHierarchyInfo != nil {
        // handle response
    }
}
```
