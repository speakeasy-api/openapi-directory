# Group

## Overview

A group is a cohort of patients within an organization. The creation of groups allows for the segmentation of dashboards and analytics. For example, a group might correspond to the patients in a particular practice or the employees of a particular employer.

### Available Operations

* [CreateGroup](#creategroup) - Create a group
* [FetchGroup](#fetchgroup) - Get a group
* [FetchGroups](#fetchgroups) - List groups

## CreateGroup

Create a group record.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Group.CreateGroup(ctx, shared.CreateGroupRequestInput{
        Data: shared.GroupResourceInput{
            Attributes: shared.GroupResourceAttributes{
                Bio: sdk.String("Team Health is all about the patient experience."),
                Name: "Team Health",
            },
            ID: "57b36e3c04ad8c2224f2af38",
            Type: shared.GroupResourceTypeEnumGroup,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## FetchGroup

Get a group record by id.

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
    res, err := s.Group.FetchGroup(ctx, operations.FetchGroupRequest{
        ID: "6e205e16-deab-43fe-8957-8a64584273a8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGroupResponse != nil {
        // handle response
    }
}
```

## FetchGroups

Get a list of groups matching the specified filters.

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
    res, err := s.Group.FetchGroups(ctx, operations.FetchGroupsRequest{
        FilterName: sdk.String("incidunt"),
        FilterOrganization: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGroupsResponse != nil {
        // handle response
    }
}
```
