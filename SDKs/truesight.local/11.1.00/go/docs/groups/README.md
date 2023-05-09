# Groups

## Overview

API operations to interact with the monitored Groups.

### Available Operations

* [GetGroups](#getgroups) - Gets all group summaries.
* [GetOneGroup](#getonegroup) - Gets detailed information about a specific group.
* [UpdateEnergyCost](#updateenergycost) - Updates the values of the energy footprint parameter for a specific group.

## GetGroups

Lists the available GroupSummary instances.

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
    res, err := s.Groups.GetGroups(ctx, operations.GetGroupsRequest{
        Direction: operations.GetGroupsDirectionEnumAsc.ToPointer(),
        Limit: sdk.Int(264555),
        Page: sdk.String("qui"),
        Sort: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOneGroup

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.

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
    res, err := s.Groups.GetOneGroup(ctx, operations.GetOneGroupRequest{
        GroupID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateEnergyCost

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.UpdateEnergyCost(ctx, operations.UpdateEnergyCostRequest{
        GroupConfiguration: &shared.GroupConfiguration{
            Co2Emission: sdk.Float64(0.3),
            EnergyCost: sdk.Float64(0.3),
            GroupNameFilter: sdk.String("Group [0-9]+"),
        },
        GroupID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
