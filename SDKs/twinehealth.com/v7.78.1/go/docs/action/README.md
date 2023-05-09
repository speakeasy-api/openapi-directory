# Action

## Overview

An action is an actionable item in a patient's plan.

### Available Operations

* [CreateAction](#createaction) - Create action
* [FetchAction](#fetchaction) - Get an action
* [UpdateAction](#updateaction) - Update an action

## CreateAction

Create a plan action

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
    res, err := s.Action.CreateAction(ctx, shared.CreateActionRequestInput{
        Data: shared.ActionResourceInput{
            Attributes: &shared.ActionResourceAttributesInput{
                Thread: sdk.String("nihil"),
                Details: map[string]interface{}{
                    "distinctio": "id",
                    "labore": "labore",
                },
                EffectiveFrom: "suscipit",
                EffectiveTo: sdk.String("natus"),
                FrequencyGoal: &shared.ActionResourceAttributesFrequencyGoal{
                    Weeks: &shared.ActionResourceAttributesFrequencyGoalWeeks{
                        Days: []shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum{
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumThree,
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumSix,
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumZero,
                        },
                    },
                },
                Identifiers: []shared.Identifier{
                    shared.Identifier{
                        Label: sdk.String("magnam"),
                        System: "et",
                        Value: "excepturi",
                    },
                },
                Intake: map[string]interface{}{
                    "provident": "quos",
                    "sint": "accusantium",
                },
                MetricRequired: sdk.Bool(false),
                Metrics: []shared.ActionMetric{
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "mollitia": "ad",
                            "eum": "dolor",
                            "necessitatibus": "odit",
                            "nemo": "quasi",
                        },
                        MetricType: sdk.String("iure"),
                        Unit: sdk.String("doloribus"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("debitis"),
                                Value: sdk.Float64(2603.41),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("maxime"),
                                Value: sdk.Float64(5370.23),
                            },
                        },
                    },
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "in": "architecto",
                            "architecto": "repudiandae",
                            "ullam": "expedita",
                        },
                        MetricType: sdk.String("nihil"),
                        Unit: sdk.String("repellat"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("quibusdam"),
                                Value: sdk.Float64(1494.48),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("saepe"),
                                Value: sdk.Float64(8681.26),
                            },
                        },
                    },
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "consequuntur": "praesentium",
                        },
                        MetricType: sdk.String("natus"),
                        Unit: sdk.String("magni"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("sunt"),
                                Value: sdk.Float64(7790.51),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("illum"),
                                Value: sdk.Float64(8649.34),
                            },
                        },
                    },
                },
                Title: "Dr.",
                Tracking: sdk.Bool(false),
                Type: shared.ActionResourceAttributesTypeEnumOtherLifestyle,
                Windows: []shared.ActionWindow{
                    shared.ActionWindow{
                        ID: sdk.String("92601fb5-76b0-4d5f-8d30-c5fbb2587053"),
                        Title: sdk.String("Mr."),
                        Type: "perferendis",
                    },
                    shared.ActionWindow{
                        ID: sdk.String("2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf"),
                        Title: sdk.String("Mrs."),
                        Type: "quos",
                    },
                },
            },
            ID: "633323f9-b77f-43a4-9006-74ebf69280d1",
            Relationships: &shared.ActionResourceRelationships{
                Plan: &shared.ActionResourceRelationshipsPlan{
                    Data: &shared.ActionResourceRelationshipsPlanData{
                        ID: sdk.String("ba77a89e-bf73-47ae-8203-ce5e6a95d8a0"),
                        Type: sdk.String("at"),
                    },
                    Links: map[string]interface{}{
                        "tempora": "vel",
                        "quod": "officiis",
                    },
                },
            },
            Type: "qui",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActionResponse != nil {
        // handle response
    }
}
```

## FetchAction

Get a health action from a patient's plan.

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
    res, err := s.Action.FetchAction(ctx, operations.FetchActionRequest{
        ID: "af7a73cf-3be4-453f-870b-326b5a73429c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchActionResponse != nil {
        // handle response
    }
}
```

## UpdateAction

Update a health action from a patient's plan.

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
    res, err := s.Action.UpdateAction(ctx, operations.UpdateActionRequest{
        UpdateActionRequestInput: shared.UpdateActionRequestInput{
            Data: shared.ActionResourceInput{
                Attributes: &shared.ActionResourceAttributesInput{
                    Thread: sdk.String("pariatur"),
                    Details: map[string]interface{}{
                        "dicta": "laborum",
                        "totam": "incidunt",
                        "aspernatur": "dolores",
                    },
                    EffectiveFrom: "distinctio",
                    EffectiveTo: sdk.String("facilis"),
                    FrequencyGoal: &shared.ActionResourceAttributesFrequencyGoal{
                        Weeks: &shared.ActionResourceAttributesFrequencyGoalWeeks{
                            Days: []shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum{
                                shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumThree,
                                shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumThree,
                            },
                        },
                    },
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Label: sdk.String("qui"),
                            System: "neque",
                            Value: "fugit",
                        },
                        shared.Identifier{
                            Label: sdk.String("magni"),
                            System: "odio",
                            Value: "sunt",
                        },
                        shared.Identifier{
                            Label: sdk.String("ullam"),
                            System: "nam",
                            Value: "hic",
                        },
                        shared.Identifier{
                            Label: sdk.String("voluptatem"),
                            System: "cumque",
                            Value: "soluta",
                        },
                    },
                    Intake: map[string]interface{}{
                        "et": "saepe",
                        "ipsum": "veritatis",
                        "nobis": "quos",
                    },
                    MetricRequired: sdk.Bool(false),
                    Metrics: []shared.ActionMetric{
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "aperiam": "delectus",
                                "dolorem": "dolore",
                                "labore": "adipisci",
                            },
                            MetricType: sdk.String("dolorum"),
                            Unit: sdk.String("architecto"),
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: sdk.String("quae"),
                                    Value: sdk.Float64(164.29),
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: sdk.String("quas"),
                                    Value: sdk.Float64(9295.3),
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "est": "repellendus",
                            },
                            MetricType: sdk.String("porro"),
                            Unit: sdk.String("doloribus"),
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: sdk.String("ut"),
                                    Value: sdk.Float64(7034.95),
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: sdk.String("cupiditate"),
                                    Value: sdk.Float64(1816.31),
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "laudantium": "odio",
                            },
                            MetricType: sdk.String("occaecati"),
                            Unit: sdk.String("voluptatibus"),
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: sdk.String("quisquam"),
                                    Value: sdk.Float64(8765.06),
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: sdk.String("omnis"),
                                    Value: sdk.Float64(3381.59),
                                },
                            },
                        },
                    },
                    Title: "Mrs.",
                    Tracking: sdk.Bool(false),
                    Type: shared.ActionResourceAttributesTypeEnumOtherLifestyle,
                    Windows: []shared.ActionWindow{
                        shared.ActionWindow{
                            ID: sdk.String("73ef7fbc-7abd-474d-939c-0f5d2cff7c70"),
                            Title: sdk.String("Miss"),
                            Type: "tempora",
                        },
                        shared.ActionWindow{
                            ID: sdk.String("5626d436-813f-416d-9f5f-ce6c556146c3"),
                            Title: sdk.String("Dr."),
                            Type: "aspernatur",
                        },
                        shared.ActionWindow{
                            ID: sdk.String("50fb008c-42e1-441a-ac36-6c8dd6b14429"),
                            Title: sdk.String("Mr."),
                            Type: "molestiae",
                        },
                        shared.ActionWindow{
                            ID: sdk.String("474778a7-bd46-46d2-8c10-ab3cdca42519"),
                            Title: sdk.String("Mr."),
                            Type: "tempora",
                        },
                    },
                },
                ID: "e523c7e0-bc71-478e-8796-f2a70c688282",
                Relationships: &shared.ActionResourceRelationships{
                    Plan: &shared.ActionResourceRelationshipsPlan{
                        Data: &shared.ActionResourceRelationshipsPlanData{
                            ID: sdk.String("aa482562-f222-4e98-97ee-17cbe61e6b7b"),
                            Type: sdk.String("occaecati"),
                        },
                        Links: map[string]interface{}{
                            "distinctio": "eligendi",
                            "sit": "culpa",
                        },
                    },
                },
                Type: "tempore",
            },
        },
        ID: "3c20c4f3-789f-4d87-9f99-dd2efd121aa6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateActionResponse != nil {
        // handle response
    }
}
```
