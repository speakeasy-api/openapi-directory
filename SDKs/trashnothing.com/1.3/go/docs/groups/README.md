# Groups

## Overview

Search, subscribe and unsubscribe to groups.

### Available Operations

* [GetGroup](#getgroup) - Retrieve a group
* [GetGroupsByIds](#getgroupsbyids) - Retrieve multiple groups
* [SearchGroups](#searchgroups) - Search groups

## GetGroup

Retrieve a group

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
    res, err := s.Groups.GetGroup(ctx, operations.GetGroupRequest{
        GroupID: "provident",
    }, operations.GetGroupSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## GetGroupsByIds

Retrieve multiple groups

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
    res, err := s.Groups.GetGroupsByIds(ctx, operations.GetGroupsByIdsRequest{
        GroupIds: "distinctio",
    }, operations.GetGroupsByIdsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## SearchGroups

Search groups

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
    res, err := s.Groups.SearchGroups(ctx, operations.SearchGroupsRequest{
        Country: sdk.String("Suriname"),
        Distance: sdk.Float64(6027.63),
        Latitude: sdk.Float64(8579.46),
        Longitude: sdk.Float64(5448.83),
        Name: sdk.String("Ben Mueller"),
        Page: sdk.Int64(437587),
        PerPage: sdk.Int64(297534),
        PostalCode: sdk.String("09234-7854"),
        Region: sdk.String("excepturi"),
    }, operations.SearchGroupsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGroups200ApplicationJSONObject != nil {
        // handle response
    }
}
```
