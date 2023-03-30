<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateActionRequest{
        Request: shared.CreateActionRequestInput{
            Data: shared.ActionResourceInput{
                Attributes: &shared.ActionResourceAttributesInput{
                    Thread: "corrupti",
                    Details: map[string]interface{}{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EffectiveFrom: "vel",
                    EffectiveTo: "error",
                    FrequencyGoal: &shared.ActionResourceAttributesFrequencyGoal{
                        Weeks: &shared.ActionResourceAttributesFrequencyGoalWeeks{
                            Days: []shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum{
                                "2",
                                "3",
                                "2",
                            },
                        },
                    },
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Label: "ipsa",
                            System: "delectus",
                            Value: "tempora",
                        },
                        shared.Identifier{
                            Label: "suscipit",
                            System: "molestiae",
                            Value: "minus",
                        },
                        shared.Identifier{
                            Label: "placeat",
                            System: "voluptatum",
                            Value: "iusto",
                        },
                        shared.Identifier{
                            Label: "excepturi",
                            System: "nisi",
                            Value: "recusandae",
                        },
                    },
                    Intake: map[string]interface{}{
                        "ab": "quis",
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                        "repellendus": "sapiente",
                    },
                    MetricRequired: false,
                    Metrics: []shared.ActionMetric{
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "at": "at",
                            },
                            MetricType: "maiores",
                            Unit: "molestiae",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "quod",
                                    Value: 8009.11,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "esse",
                                    Value: 5204.78,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "dolorum": "dicta",
                                "nam": "officia",
                                "occaecati": "fugit",
                                "deleniti": "hic",
                            },
                            MetricType: "optio",
                            Unit: "totam",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "beatae",
                                    Value: 4146.62,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "molestiae",
                                    Value: 2645.55,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "impedit": "cum",
                            },
                            MetricType: "esse",
                            Unit: "ipsum",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "excepturi",
                                    Value: 1352.18,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "perferendis",
                                    Value: 3241.41,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "sed": "iste",
                                "dolor": "natus",
                                "laboriosam": "hic",
                            },
                            MetricType: "saepe",
                            Unit: "fuga",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "in",
                                    Value: 3595.08,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "iste",
                                    Value: 4370.32,
                                },
                            },
                        },
                    },
                    Title: "Dr.",
                    Tracking: false,
                    Type: "other_lifestyle",
                    Windows: []shared.ActionWindow{
                        shared.ActionWindow{
                            ID: "architecto",
                            Title: "Mr.",
                            Type: "reiciendis",
                        },
                        shared.ActionWindow{
                            ID: "est",
                            Title: "Miss",
                            Type: "laborum",
                        },
                        shared.ActionWindow{
                            ID: "dolores",
                            Title: "Mrs.",
                            Type: "corporis",
                        },
                    },
                },
                ID: "explicabo",
                Relationships: &shared.ActionResourceRelationships{
                    Plan: &shared.ActionResourceRelationshipsPlan{
                        Data: &shared.ActionResourceRelationshipsPlanData{
                            ID: "nobis",
                            Type: "enim",
                        },
                        Links: map[string]interface{}{
                            "nemo": "minima",
                            "excepturi": "accusantium",
                            "iure": "culpa",
                        },
                    },
                },
                Type: "doloribus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Action.CreateAction(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->