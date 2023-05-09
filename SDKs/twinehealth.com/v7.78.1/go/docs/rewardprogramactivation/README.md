# RewardProgramActivation

## Overview

A reward program activation is the activation of a reward program for a specific patient.

### Available Operations

* [CreateRewardProgramActivation](#createrewardprogramactivation) - Create a reward program activation
* [FetchRewardProgramActivation](#fetchrewardprogramactivation) - Get a reward program activation
* [FetchRewardProgramActivations](#fetchrewardprogramactivations) - List reward program activations

## CreateRewardProgramActivation

Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.

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
    res, err := s.RewardProgramActivation.CreateRewardProgramActivation(ctx, shared.CreateRewardProgramActivationRequestInput{
        Data: shared.RewardProgramActivationResourceInput{
            Attributes: &shared.RewardProgramActivationResourceAttributesInput{
                ActivatedAt: "libero",
                Active: sdk.Bool(false),
                DeactivatedAt: sdk.String("iste"),
            },
            ID: sdk.String("1c8d975e-0e84-419d-8f84-f144f3e07edc"),
            Relationships: &shared.RewardProgramActivationResourceRelationships{
                Patient: shared.RewardProgramActivationResourceRelationshipsPatient{
                    Data: &shared.RewardProgramActivationResourceRelationshipsPatientData{
                        ID: sdk.String("c4aa5f3c-abd9-405a-972e-056728227b2d"),
                        Type: sdk.String("nesciunt"),
                    },
                },
                RewardProgram: shared.RewardProgramActivationResourceRelationshipsRewardProgram{
                    Data: &shared.RewardProgramActivationResourceRelationshipsRewardProgramData{
                        ID: sdk.String("09470bf7-a4fa-487c-b535-a6fae54ebf60"),
                        Type: sdk.String("optio"),
                    },
                },
            },
            Type: "sequi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRewardProgramActivationResponse != nil {
        // handle response
    }
}
```

## FetchRewardProgramActivation

Get a reward program activationrecord by id.

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
    res, err := s.RewardProgramActivation.FetchRewardProgramActivation(ctx, operations.FetchRewardProgramActivationRequest{
        ID: "21f023b7-5d23-467f-a1a0-cc8df79f0a39",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardProgramActivationResponse != nil {
        // handle response
    }
}
```

## FetchRewardProgramActivations

Get a list of reward program activations matching the specified filters.

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
    res, err := s.RewardProgramActivation.FetchRewardProgramActivations(ctx, operations.FetchRewardProgramActivationsRequest{
        FilterGroups: sdk.String("ex"),
        FilterOrganization: sdk.String("repellendus"),
        FilterPatient: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRewardProgramActivationsResponse != nil {
        // handle response
    }
}
```
