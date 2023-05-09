# RootVcdHierarchy

## Overview

vCloud hierarchy.

### Available Operations

* [GetVcdHierarchyChildrenV1](#getvcdhierarchychildrenv1) - Get immediate descendant objects
* [GetVcdHierarchyDescendantsV1](#getvcdhierarchydescendantsv1) - Get list of descendant objects
* [GetVcdHierarchyObjectV1](#getvcdhierarchyobjectv1) - Get summary of a vCD hierarchy object

## GetVcdHierarchyChildrenV1

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
    res, err := s.RootVcdHierarchy.GetVcdHierarchyChildrenV1(ctx, operations.GetVcdHierarchyChildrenV1Request{
        EffectiveSLADomainID: sdk.String("voluptatem"),
        ID: "f069d810-618d-497e-9522-97510da80312",
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(158768),
        Name: sdk.String("Wayne Rolfson"),
        ObjectType: operations.GetVcdHierarchyChildrenV1ObjectTypeEnumCluster.ToPointer(),
        Offset: sdk.Int(780614),
        PrimaryClusterID: sdk.String("sed"),
        SLAAssignment: operations.GetVcdHierarchyChildrenV1SLAAssignmentEnumUnassigned.ToPointer(),
        SnappableStatus: operations.GetVcdHierarchyChildrenV1SnappableStatusEnumProtectable.ToPointer(),
        SortBy: operations.GetVcdHierarchyChildrenV1SortByEnumSLAAssignment.ToPointer(),
        SortOrder: operations.GetVcdHierarchyChildrenV1SortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetVcdHierarchyDescendantsV1

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
    res, err := s.RootVcdHierarchy.GetVcdHierarchyDescendantsV1(ctx, operations.GetVcdHierarchyDescendantsV1Request{
        EffectiveSLADomainID: sdk.String("odit"),
        ID: "bb97ee10-2da2-4de3-9f8e-01bf33eaab45",
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(260908),
        Name: sdk.String("Jacqueline Pagac III"),
        ObjectType: operations.GetVcdHierarchyDescendantsV1ObjectTypeEnumCluster.ToPointer(),
        Offset: sdk.Int(276945),
        PrimaryClusterID: sdk.String("soluta"),
        SLAAssignment: operations.GetVcdHierarchyDescendantsV1SLAAssignmentEnumUnassigned.ToPointer(),
        SnappableStatus: operations.GetVcdHierarchyDescendantsV1SnappableStatusEnumProtectable.ToPointer(),
        SortBy: operations.GetVcdHierarchyDescendantsV1SortByEnumName.ToPointer(),
        SortOrder: operations.GetVcdHierarchyDescendantsV1SortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdHierarchyObjectSummaryListResponse != nil {
        // handle response
    }
}
```

## GetVcdHierarchyObjectV1

Retrieve details for the specified object in the vCD hierarchy.

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
    res, err := s.RootVcdHierarchy.GetVcdHierarchyObjectV1(ctx, operations.GetVcdHierarchyObjectV1Request{
        ID: "c9fc61aa-e5eb-45f0-8492-b5744d08a226",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdHierarchyObjectSummary != nil {
        // handle response
    }
}
```
