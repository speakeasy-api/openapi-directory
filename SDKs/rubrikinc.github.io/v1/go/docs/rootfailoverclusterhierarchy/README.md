# RootFailoverClusterHierarchy

## Overview

Failover cluster hierarchy.

### Available Operations

* [GetFailoverClusterHierarchyChildren](#getfailoverclusterhierarchychildren) - Get list of immediate descendant objects
* [GetFailoverClusterHierarchyDescendants](#getfailoverclusterhierarchydescendants) - Get list of descendant objects
* [GetFailoverClusterHierarchyObject](#getfailoverclusterhierarchyobject) - Get summary of a hierarchy object

## GetFailoverClusterHierarchyChildren

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
    res, err := s.RootFailoverClusterHierarchy.GetFailoverClusterHierarchyChildren(ctx, operations.GetFailoverClusterHierarchyChildrenRequest{
        ConfiguredSLADomainID: sdk.String("sit"),
        ID: "bd0af2df-e13d-4b4f-a2cb-a3f8941aebc0",
        Limit: sdk.Int(711871),
        Name: sdk.String("Timothy Nolan"),
        ObjectType: operations.GetFailoverClusterHierarchyChildrenObjectTypeEnumFailoverClusterApp.ToPointer(),
        Offset: sdk.Int(273677),
        OperatingSystemType: operations.GetFailoverClusterHierarchyChildrenOperatingSystemTypeEnumUnixLike.ToPointer(),
        PrimaryClusterID: sdk.String("dolor"),
        SLAAssignment: operations.GetFailoverClusterHierarchyChildrenSLAAssignmentEnumUnassigned.ToPointer(),
        SortBy: operations.GetFailoverClusterHierarchyChildrenSortByEnumName.ToPointer(),
        SortOrder: operations.GetFailoverClusterHierarchyChildrenSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetFailoverClusterHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

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
    res, err := s.RootFailoverClusterHierarchy.GetFailoverClusterHierarchyDescendants(ctx, operations.GetFailoverClusterHierarchyDescendantsRequest{
        ConfiguredSLADomainID: sdk.String("optio"),
        ID: "fcc8f895-010f-45dd-bd6f-a1804e54c82f",
        Limit: sdk.Int(81581),
        Name: sdk.String("Marsha O'Reilly"),
        ObjectType: operations.GetFailoverClusterHierarchyDescendantsObjectTypeEnumFailoverClusterApp.ToPointer(),
        Offset: sdk.Int(768195),
        OperatingSystemType: operations.GetFailoverClusterHierarchyDescendantsOperatingSystemTypeEnumLinux.ToPointer(),
        PrimaryClusterID: sdk.String("voluptatum"),
        SLAAssignment: operations.GetFailoverClusterHierarchyDescendantsSLAAssignmentEnumDirect.ToPointer(),
        SortBy: operations.GetFailoverClusterHierarchyDescendantsSortByEnumName.ToPointer(),
        SortOrder: operations.GetFailoverClusterHierarchyDescendantsSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetFailoverClusterHierarchyObject

Retrieve details for the specified hierarchy object.

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
    res, err := s.RootFailoverClusterHierarchy.GetFailoverClusterHierarchyObject(ctx, operations.GetFailoverClusterHierarchyObjectRequest{
        ID: "484380b1-f6b8-4ca2-b5a6-0a04c495cc69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterHierarchyObjectSummary != nil {
        // handle response
    }
}
```
