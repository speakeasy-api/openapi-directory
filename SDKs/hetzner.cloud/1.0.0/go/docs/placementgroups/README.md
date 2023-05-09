# PlacementGroups

## Overview

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different instances within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of instances within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some instances might fail together.


### Available Operations

* [DeletePlacementGroupsID](#deleteplacementgroupsid) - Delete a PlacementGroup
* [GetPlacementGroups](#getplacementgroups) - Get all PlacementGroups
* [GetPlacementGroupsID](#getplacementgroupsid) - Get a PlacementGroup
* [PostPlacementGroups](#postplacementgroups) - Create a PlacementGroup
* [PutPlacementGroupsID](#putplacementgroupsid) - Update a PlacementGroup

## DeletePlacementGroupsID

Deletes a PlacementGroup.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlacementGroups.DeletePlacementGroupsID(ctx, operations.DeletePlacementGroupsIDRequest{
        ID: 848009,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPlacementGroups

Returns all PlacementGroup objects.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlacementGroups.GetPlacementGroups(ctx, operations.GetPlacementGroupsRequest{
        LabelSelector: sdk.String("pariatur"),
        Name: sdk.String("Nathaniel Marks"),
        Sort: operations.GetPlacementGroupsSortEnumID.ToPointer(),
        Type: operations.GetPlacementGroupsTypeParameterTypeEnumSpread.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroupsResponse != nil {
        // handle response
    }
}
```

## GetPlacementGroupsID

Gets a specific PlacementGroup object.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlacementGroups.GetPlacementGroupsID(ctx, operations.GetPlacementGroupsIDRequest{
        ID: 69167,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroupResponse != nil {
        // handle response
    }
}
```

## PostPlacementGroups

Creates a new PlacementGroup.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlacementGroups.PostPlacementGroups(ctx, operations.PostPlacementGroupsCreatePlacementGroupRequest{
        Labels: map[string]interface{}{
            "quidem": "ipsam",
            "voluptate": "autem",
            "nam": "eaque",
            "pariatur": "nemo",
        },
        Name: "my Placement Group",
        Type: operations.PostPlacementGroupsCreatePlacementGroupRequestTypeEnumSpread,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePlacementGroupResponse != nil {
        // handle response
    }
}
```

## PutPlacementGroupsID

Updates the PlacementGroup properties.

Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlacementGroups.PutPlacementGroupsID(ctx, operations.PutPlacementGroupsIDRequest{
        RequestBody: &operations.PutPlacementGroupsIDUpdatePlacementGroupRequest{
            Labels: map[string]interface{}{
                "perferendis": "fugiat",
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
            },
            Name: sdk.String("my Placement Group"),
        },
        ID: 749999,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroupResponse != nil {
        // handle response
    }
}
```
