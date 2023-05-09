<!-- Start SDK Example Usage -->
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
                Thread: sdk.String("corrupti"),
                Details: map[string]interface{}{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                EffectiveFrom: "vel",
                EffectiveTo: sdk.String("error"),
                FrequencyGoal: &shared.ActionResourceAttributesFrequencyGoal{
                    Weeks: &shared.ActionResourceAttributesFrequencyGoalWeeks{
                        Days: []shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum{
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumTwo,
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumThree,
                            shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnumTwo,
                        },
                    },
                },
                Identifiers: []shared.Identifier{
                    shared.Identifier{
                        Label: sdk.String("ipsa"),
                        System: "delectus",
                        Value: "tempora",
                    },
                    shared.Identifier{
                        Label: sdk.String("suscipit"),
                        System: "molestiae",
                        Value: "minus",
                    },
                    shared.Identifier{
                        Label: sdk.String("placeat"),
                        System: "voluptatum",
                        Value: "iusto",
                    },
                    shared.Identifier{
                        Label: sdk.String("excepturi"),
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
                MetricRequired: sdk.Bool(false),
                Metrics: []shared.ActionMetric{
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "at": "at",
                        },
                        MetricType: sdk.String("maiores"),
                        Unit: sdk.String("molestiae"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("quod"),
                                Value: sdk.Float64(8009.11),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("esse"),
                                Value: sdk.Float64(5204.78),
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
                        MetricType: sdk.String("optio"),
                        Unit: sdk.String("totam"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("beatae"),
                                Value: sdk.Float64(4146.62),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("molestiae"),
                                Value: sdk.Float64(2645.55),
                            },
                        },
                    },
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "impedit": "cum",
                        },
                        MetricType: sdk.String("esse"),
                        Unit: sdk.String("ipsum"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("excepturi"),
                                Value: sdk.Float64(1352.18),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("perferendis"),
                                Value: sdk.Float64(3241.41),
                            },
                        },
                    },
                    shared.ActionMetric{
                        Goal: map[string]interface{}{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                        MetricType: sdk.String("saepe"),
                        Unit: sdk.String("fuga"),
                        Validations: &shared.ActionMetricValidations{
                            Maximum: &shared.ActionMetricValidationsMaximum{
                                Unit: sdk.String("in"),
                                Value: sdk.Float64(3595.08),
                            },
                            Minimum: &shared.ActionMetricValidationsMinimum{
                                Unit: sdk.String("iste"),
                                Value: sdk.Float64(4370.32),
                            },
                        },
                    },
                },
                Title: "Dr.",
                Tracking: sdk.Bool(false),
                Type: shared.ActionResourceAttributesTypeEnumOtherLifestyle,
                Windows: []shared.ActionWindow{
                    shared.ActionWindow{
                        ID: sdk.String("10faaa23-52c5-4955-907a-ff1a3a2fa946"),
                        Title: sdk.String("Ms."),
                        Type: "molestiae",
                    },
                    shared.ActionWindow{
                        ID: sdk.String("39251aa5-2c3f-45ad-819d-a1ffe78f097b"),
                        Title: sdk.String("Mr."),
                        Type: "doloremque",
                    },
                    shared.ActionWindow{
                        ID: sdk.String("74f15471-b5e6-4e13-b99d-488e1e91e450"),
                        Title: sdk.String("Miss"),
                        Type: "quibusdam",
                    },
                },
            },
            ID: "2abd4426-9802-4d50-aa94-bb4f63c969e9",
            Relationships: &shared.ActionResourceRelationships{
                Plan: &shared.ActionResourceRelationshipsPlan{
                    Data: &shared.ActionResourceRelationshipsPlanData{
                        ID: sdk.String("a3efa77d-fb14-4cd6-aae3-95efb9ba88f3"),
                        Type: sdk.String("deserunt"),
                    },
                    Links: map[string]interface{}{
                        "vel": "natus",
                        "omnis": "molestiae",
                    },
                },
            },
            Type: "perferendis",
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
<!-- End SDK Example Usage -->