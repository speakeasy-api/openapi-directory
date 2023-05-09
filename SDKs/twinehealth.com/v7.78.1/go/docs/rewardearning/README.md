# RewardEarning

## Overview

A reward earning specifies the portion of a reward that was earned and at what date.

### Available Operations

* [CreateRewardEarning](#createrewardearning) - Create a reward earning
* [FetchRewardEarning](#fetchrewardearning) - Get a reward earning
* [FetchRewardEarnings](#fetchrewardearnings) - List reward earnings

## CreateRewardEarning

Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.

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
    res, err := s.RewardEarning.CreateRewardEarning(ctx, shared.CreateRewardEarningRequestInput{
        Data: shared.RewardEarningResourceInput{
            Attributes: &shared.RewardEarningResourceAttributesInput{
                EarnedAt: "quos",
                EarnedValue: 5488.46,
            },
            ID: sdk.String("373a40e1-942f-432e-9505-5756f5d56d0b"),
            Relationships: &shared.RewardEarningResourceRelationshipsInput{
                Reward: shared.RewardEarningResourceRelationshipsReward{
                    Data: &shared.RewardEarningResourceRelationshipsRewardData{
                        ID: sdk.String("d0af2dfe-13db-44f6-acba-3f8941aebc0b"),
                        Type: sdk.String("corrupti"),
                    },
                },
            },
            Type: "eaque",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRewardEarningResponse != nil {
        // handle response
    }
}
```

## FetchRewardEarning

Get a reward earning record by id.

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
    res, err := s.RewardEarning.FetchRewardEarning(ctx, operations.FetchRewardEarningRequest{
        ID: "a6924d3b-2ecf-4cc8-b895-010f5dd3d6fa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardEarningResponse != nil {
        // handle response
    }
}
```

## FetchRewardEarnings

Get a list of reward earnings matching the specified filters.

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
    res, err := s.RewardEarning.FetchRewardEarnings(ctx, operations.FetchRewardEarningsRequest{
        FilterGroups: "quae",
        FilterPatient: "quos",
        FilterReadyForFulfillment: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardEarningsResponse != nil {
        // handle response
    }
}
```
