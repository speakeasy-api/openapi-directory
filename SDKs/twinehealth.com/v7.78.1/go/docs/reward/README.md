# Reward

## Overview

A reward allocates a portion of the budget from the reward program activation for achieving a particular goal and sets a target date.

### Available Operations

* [CreateReward](#createreward) - Create a reward
* [FetchReward](#fetchreward) - Get a reward
* [FetchRewards](#fetchrewards) - List rewards

## CreateReward

Create a reward for a patient.

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
    res, err := s.Reward.CreateReward(ctx, shared.CreateRewardRequestInput{
        Data: shared.RewardResourceInput{
            Attributes: &shared.RewardResourceAttributesInput{
                Thread: sdk.String("esse"),
                AllocatedAt: "in",
                AllocatedValue: 7574.07,
                Description: "quasi",
                TargetAt: sdk.String("neque"),
            },
            ID: sdk.String("e902c141-25b0-4960-a668-151a472af923"),
            Relationships: &shared.RewardResourceRelationshipsInput{
                RewardProgramActivation: shared.RewardResourceRelationshipsRewardProgramActivation{
                    Data: &shared.RewardResourceRelationshipsRewardProgramActivationData{
                        ID: sdk.String("c5949f83-f350-4cf8-b6ff-b901c6ecbb4e"),
                        Type: sdk.String("fugit"),
                    },
                },
            },
            Type: "eius",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRewardResponse != nil {
        // handle response
    }
}
```

## FetchReward

Get a reward record by id.

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
    res, err := s.Reward.FetchReward(ctx, operations.FetchRewardRequest{
        ID: "3cf789ff-afed-4a53-a5ae-6e0ac184c2b9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardResponse != nil {
        // handle response
    }
}
```

## FetchRewards

Get a list of rewards matching the specified filters.

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
    res, err := s.Reward.FetchRewards(ctx, operations.FetchRewardsRequest{
        FilterGroups: sdk.String("minus"),
        FilterOrganization: sdk.String("quia"),
        FilterPatient: sdk.String("magnam"),
        FilterRewardProgramActivation: sdk.String("reprehenderit"),
        FilterThread: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardsResponse != nil {
        // handle response
    }
}
```
