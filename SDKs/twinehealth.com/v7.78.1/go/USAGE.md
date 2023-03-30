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
                    Thread: "unde",
                    Details: map[string]interface{}{
                        "porro": "nulla",
                        "id": "vero",
                        "perspiciatis": "nulla",
                    },
                    EffectiveFrom: "nihil",
                    EffectiveTo: "fuga",
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
                            Label: "inventore",
                            System: "sapiente",
                            Value: "enim",
                        },
                        shared.Identifier{
                            Label: "eum",
                            System: "voluptatum",
                            Value: "autem",
                        },
                        shared.Identifier{
                            Label: "vel",
                            System: "non",
                            Value: "deleniti",
                        },
                        shared.Identifier{
                            Label: "similique",
                            System: "reprehenderit",
                            Value: "molestiae",
                        },
                    },
                    Intake: map[string]interface{}{
                        "quasi": "laboriosam",
                        "dicta": "est",
                        "voluptatem": "consequatur",
                        "fugiat": "a",
                    },
                    MetricRequired: false,
                    Metrics: []shared.ActionMetric{
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "accusamus": "accusamus",
                            },
                            MetricType: "reiciendis",
                            Unit: "rem",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "quibusdam",
                                    Value: 8009.11,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "praesentium",
                                    Value: 5204.78,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "soluta": "sed",
                                "quisquam": "rerum",
                                "culpa": "qui",
                                "sed": "rerum",
                            },
                            MetricType: "possimus",
                            Unit: "occaecati",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "odit",
                                    Value: 4146.62,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "rem",
                                    Value: 2645.55,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "est": "id",
                            },
                            MetricType: "blanditiis",
                            Unit: "numquam",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "similique",
                                    Value: 1352.18,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "sit",
                                    Value: 3241.41,
                                },
                            },
                        },
                        shared.ActionMetric{
                            Goal: map[string]interface{}{
                                "voluptatem": "laborum",
                                "modi": "et",
                                "iure": "earum",
                            },
                            MetricType: "ut",
                            Unit: "soluta",
                            Validations: &shared.ActionMetricValidations{
                                Maximum: &shared.ActionMetricValidationsMaximum{
                                    Unit: "qui",
                                    Value: 3595.08,
                                },
                                Minimum: &shared.ActionMetricValidationsMinimum{
                                    Unit: "laborum",
                                    Value: 4370.32,
                                },
                            },
                        },
                    },
                    Title: "Human Quality Executive",
                    Tracking: false,
                    Type: "other_lifestyle",
                    Windows: []shared.ActionWindow{
                        shared.ActionWindow{
                            ID: "libero",
                            Title: "Dynamic Branding Officer",
                            Type: "non",
                        },
                        shared.ActionWindow{
                            ID: "ea",
                            Title: "Direct Mobility Specialist",
                            Type: "est",
                        },
                        shared.ActionWindow{
                            ID: "commodi",
                            Title: "National Intranet Supervisor",
                            Type: "odio",
                        },
                        shared.ActionWindow{
                            ID: "harum",
                            Title: "Principal Usability Executive",
                            Type: "et",
                        },
                    },
                },
                ID: "non",
                Relationships: &shared.ActionResourceRelationships{
                    Plan: &shared.ActionResourceRelationshipsPlan{
                        Data: &shared.ActionResourceRelationshipsPlanData{
                            ID: "quidem",
                            Type: "neque",
                        },
                        Links: map[string]interface{}{
                            "et": "culpa",
                            "aliquam": "esse",
                            "totam": "voluptatum",
                            "et": "fuga",
                        },
                    },
                },
                Type: "nesciunt",
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