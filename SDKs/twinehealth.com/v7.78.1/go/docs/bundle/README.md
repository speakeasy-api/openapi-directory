# Bundle

## Overview

A bundle is a collection of actions (an action plan) in a patient's plan summary.

### Available Operations

* [CreateBundle](#createbundle) - Create bundle
* [FetchBundle](#fetchbundle) - Get a bundle
* [UpdateBundle](#updatebundle) - Update a bundle

## CreateBundle

Create a bundle in a patient's plan

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
    res, err := s.Bundle.CreateBundle(ctx, shared.CreateBundleRequest{
        Data: shared.BundleResource{
            Attributes: &shared.BundleResourceAttributes{
                Thread: sdk.String("tenetur"),
                EffectiveFrom: "quae",
                EffectiveTo: sdk.String("earum"),
                Title: "Ms.",
                Type: "in",
            },
            ID: "4bdb04f1-5756-4082-968e-a19f1d170513",
            Relationships: &shared.BundleResourceRelationships{
                Actions: &shared.BundleResourceRelationshipsActions{
                    Data: &shared.BundleResourceRelationshipsActionsData{
                        ID: sdk.String("39d08086-a184-4039-8c26-071f93f5f064"),
                        Type: sdk.String("consequuntur"),
                    },
                    Links: map[string]interface{}{
                        "officia": "maxime",
                        "dignissimos": "officia",
                        "asperiores": "nemo",
                        "quae": "quaerat",
                    },
                },
                Plan: &shared.BundleResourceRelationshipsPlan{
                    Data: &shared.BundleResourceRelationshipsPlanData{
                        ID: sdk.String("cc413aa6-3aae-48d6-b864-dbb675fd5e60"),
                        Type: sdk.String("cum"),
                    },
                    Links: map[string]interface{}{
                        "in": "exercitationem",
                    },
                },
            },
            Type: "earum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBundleResponse != nil {
        // handle response
    }
}
```

## FetchBundle

Get a bundle from a patient's plan.

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
    res, err := s.Bundle.FetchBundle(ctx, operations.FetchBundleRequest{
        ID: "d4f6fbee-41f3-4331-bfe3-5b60eb1ea426",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchBundleResponse != nil {
        // handle response
    }
}
```

## UpdateBundle

Updte a bundle from a patient's plan.

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
    res, err := s.Bundle.UpdateBundle(ctx, operations.UpdateBundleRequest{
        UpdateBundleRequest: shared.UpdateBundleRequest{
            Data: shared.BundleResource{
                Attributes: &shared.BundleResourceAttributes{
                    Thread: sdk.String("voluptas"),
                    EffectiveFrom: "voluptas",
                    EffectiveTo: sdk.String("minima"),
                    Title: "Miss",
                    Type: "dolorum",
                },
                ID: "3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7",
                Relationships: &shared.BundleResourceRelationships{
                    Actions: &shared.BundleResourceRelationshipsActions{
                        Data: &shared.BundleResourceRelationshipsActionsData{
                            ID: sdk.String("b194a276-b269-416f-a1f0-8f4294e3698f"),
                            Type: sdk.String("tempora"),
                        },
                        Links: map[string]interface{}{
                            "voluptate": "reiciendis",
                            "ex": "sit",
                        },
                    },
                    Plan: &shared.BundleResourceRelationshipsPlan{
                        Data: &shared.BundleResourceRelationshipsPlanData{
                            ID: sdk.String("3e8b445e-80ca-455e-bd20-e457e1858b6a"),
                            Type: sdk.String("voluptatum"),
                        },
                        Links: map[string]interface{}{
                            "hic": "expedita",
                            "debitis": "neque",
                            "dolorum": "nostrum",
                        },
                    },
                },
                Type: "officia",
            },
        },
        ID: "a8e4824d-0ab4-4075-888e-51862065e904",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBundleResponse != nil {
        // handle response
    }
}
```
