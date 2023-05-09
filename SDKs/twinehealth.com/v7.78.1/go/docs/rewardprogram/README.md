# RewardProgram

## Overview

A reward program provides the details for a rewards program for a group. Different rewards programs can be created for different periods of time specified by the start_at and end_at dates. A reward program can activated for a patient any time between these dates. An activated reward program for a patient is called a reward program activation.

### Available Operations

* [CreateRewardProgram](#createrewardprogram) - Create a reward program
* [FetchRewardProgram](#fetchrewardprogram) - Get a reward program
* [FetchRewardProgramGroup](#fetchrewardprogramgroup) - Get group for a reward program
* [FetchRewardPrograms](#fetchrewardprograms) - List reward programs

## CreateRewardProgram

Create a reward program for a group.

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
    res, err := s.RewardProgram.CreateRewardProgram(ctx, shared.CreateRewardProgramRequest{
        Data: shared.RewardProgramResource{
            Attributes: &shared.RewardProgramResourceAttributes{
                BudgetUnit: shared.RewardProgramResourceAttributesBudgetUnitEnumPoint.ToPointer(),
                BudgetValue: 4804.21,
                Description: sdk.String("dolor"),
                DurationActive: sdk.Float64(9171.52),
                EndAt: "tempora",
                Frozen: sdk.Bool(false),
                FulfillAsEarned: sdk.Bool(false),
                Name: "Ms. Susie Batz",
                StartAt: "eum",
                Tagline: sdk.String("reprehenderit"),
            },
            ID: sdk.String("8878ba85-81a5-4820-8c54-fefa9c95f2ea"),
            Relationships: &shared.RewardProgramResourceRelationships{
                Group: shared.RewardProgramResourceRelationshipsGroup{
                    Data: shared.RewardProgramResourceRelationshipsGroupData{
                        ID: "c5565d30-7cfe-4e81-a06e-2813fa4a41c4",
                        Type: "voluptatum",
                    },
                },
            },
            Type: "ipsa",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRewardProgramResponse != nil {
        // handle response
    }
}
```

## FetchRewardProgram

Get a reward program record by id.

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
    res, err := s.RewardProgram.FetchRewardProgram(ctx, operations.FetchRewardProgramRequest{
        ID: "d3f2132a-f031-402d-914f-4cc6f18bf962",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardProgramResponse != nil {
        // handle response
    }
}
```

## FetchRewardProgramGroup

Get the group related to a reward program.

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
    res, err := s.RewardProgram.FetchRewardProgramGroup(ctx, operations.FetchRewardProgramGroupRequest{
        ID: "1a6a4f77-a87e-4e3e-8be7-52c65b34418e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGroupsResponse != nil {
        // handle response
    }
}
```

## FetchRewardPrograms

Get a list of reward programs matching the specified filters.

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
    res, err := s.RewardProgram.FetchRewardPrograms(ctx, operations.FetchRewardProgramsRequest{
        FilterGroups: sdk.String("dolor"),
        FilterOrganization: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardProgramsResponse != nil {
        // handle response
    }
}
```
