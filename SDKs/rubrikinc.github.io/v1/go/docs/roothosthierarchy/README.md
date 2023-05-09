# RootHostHierarchy

## Overview

Host hierarchy.

### Available Operations

* [GetHostHierarchyChildren](#gethosthierarchychildren) - Get immediate descendant objects
* [GetHostHierarchyObject](#gethosthierarchyobject) - Get summary of a host/share hierarchy object

## GetHostHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

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
    res, err := s.RootHostHierarchy.GetHostHierarchyChildren(ctx, operations.GetHostHierarchyChildrenRequest{
        EffectiveSLADomainID: sdk.String("voluptatum"),
        ExportPoint: sdk.String("debitis"),
        ID: "feef9341-52ed-47e2-93f4-c157deaa7170",
        Limit: sdk.Int(962120),
        Name: sdk.String("Joanne Hettinger"),
        ObjectType: operations.GetHostHierarchyChildrenObjectTypeEnumShare.ToPointer(),
        Offset: sdk.Int(967006),
        OperatingSystemType: operations.GetHostHierarchyChildrenOperatingSystemTypeEnumNone.ToPointer(),
        PrimaryClusterID: sdk.String("laboriosam"),
        SLAAssignment: operations.GetHostHierarchyChildrenSLAAssignmentEnumDirect.ToPointer(),
        SortBy: operations.GetHostHierarchyChildrenSortByEnumShareType.ToPointer(),
        SortOrder: operations.GetHostHierarchyChildrenSortOrderEnumDesc.ToPointer(),
        TemplateID: sdk.String("repellat"),
        VendorType: operations.GetHostHierarchyChildrenVendorTypeEnumNetApp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetHostHierarchyObject

Retrieve details for the specified object in the host/share hierarchy.


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
    res, err := s.RootHostHierarchy.GetHostHierarchyObject(ctx, operations.GetHostHierarchyObjectRequest{
        ID: "bbad185f-e431-4d6b-b5c8-38fbb8c20cb6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHostHierarchyObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
