# RewardEarningFulfillment

## Overview

A reward earning fulfillment specifies the portion of a reward earning that was fulfilled and at what date.

### Available Operations

* [CreateRewardEarningFulfillment](#createrewardearningfulfillment) - Create a reward earning fulfillment
* [FetchRewardEarningFulfillment](#fetchrewardearningfulfillment) - Get a reward earning fulfillment
* [FetchRewardEarningFulfillments](#fetchrewardearningfulfillments) - List reward earning fulfillments

## CreateRewardEarningFulfillment

Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.

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
    res, err := s.RewardEarningFulfillment.CreateRewardEarningFulfillment(ctx, shared.CreateRewardEarningFulfillmentRequestInput{
        Data: shared.RewardEarningFulfillmentResourceInput{
            Attributes: &shared.RewardEarningFulfillmentResourceAttributesInput{
                FulfilledAt: "aperiam",
                FulfilledValue: 2512,
            },
            ID: sdk.String("e54c82f1-68a3-463c-8873-e484380b1f6b"),
            Relationships: &shared.RewardEarningFulfillmentResourceRelationshipsInput{
                RewardEarning: shared.RewardEarningFulfillmentResourceRelationshipsRewardEarning{
                    Data: &shared.RewardEarningFulfillmentResourceRelationshipsRewardEarningData{
                        ID: sdk.String("8ca275a6-0a04-4c49-9cc6-99171b51c1bd"),
                        Type: sdk.String("facilis"),
                    },
                },
            },
            Type: "beatae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRewardEarningFulfillmentResponse != nil {
        // handle response
    }
}
```

## FetchRewardEarningFulfillment

Get a reward earning fulfillment record by id.

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
    res, err := s.RewardEarningFulfillment.FetchRewardEarningFulfillment(ctx, operations.FetchRewardEarningFulfillmentRequest{
        ID: "cf4b888e-bdfc-44cc-8a99-bc7fc0b2dce1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardEarningFulfillmentResponse != nil {
        // handle response
    }
}
```

## FetchRewardEarningFulfillments

Get a list of reward earning fulfillments matching the specified filters.

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
    res, err := s.RewardEarningFulfillment.FetchRewardEarningFulfillments(ctx, operations.FetchRewardEarningFulfillmentsRequest{
        FilterPatient: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardEarningFulfillmentsResponse != nil {
        // handle response
    }
}
```
