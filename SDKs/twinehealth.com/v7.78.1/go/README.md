# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twinehealth.com/v7.78.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := shared.CreateActionRequestInput{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Action

* `CreateAction` - Create action
* `FetchAction` - Get an action
* `UpdateAction` - Update an action

### Bundle

* `CreateBundle` - Create bundle
* `FetchBundle` - Get a bundle
* `UpdateBundle` - Update a bundle

### CalendarEvent

* `CreateCalendarEvent` - Create calendar event
* `DeleteCalendarEvent` - Delete a calendar event
* `FetchCalendarEvent` - Get a calendar event
* `FetchCalendarEvents` - List calendar events
* `UpdateCalendarEvent` - Update a calendar event

### CalendarEventResponse

* `CreateCalendarEventResponse` - Create calendar event response

### Coach

* `FetchCoach` - Get a coach
* `FetchCoaches` - List coaches

### EmailHistory

* `FetchEmailHistories` - List email histories
* `FetchEmailHistory` - Get an email history

### Group

* `CreateGroup` - Create a group
* `FetchGroup` - Get a group
* `FetchGroups` - List groups

### HealthProfile

* `FetchHealthProfile` - Get a health profile
* `FetchHealthProfiles` - List health profiles

### HealthProfileAnswer

* `FetchHealthProfileAnswer` - Get a health profile answer
* `FetchHealthProfileAnswers` - List health profile answers

### HealthProfileQuestion

* `FetchHealthProfileQuestion` - Get a health profile question
* `FetchHealthProfileQuestions` - List health profile questions

### HealthQuestionDefinition

* `FetchHealthQuestionDefinition` - Get a health question definition
* `FetchHealthQuestionDefinitions` - List health question definitions

### Metric

* `CreatePatientHealthMetric` - Create patient health metrics
* `FetchPatientHealthMetric` - Get a patient health metric
* `FetchPatientHealthMetrics` - List patient health metrics

### Oauth

* `CreateToken` - Create an oauth token
* `FetchTokenGroups` - Get the groups for a token
* `FetchTokenOrganization` - Get the organization for a token

### Organization

* `FetchOrganization` - Get an organization

### Patient

* `CreatePatient` - Create a patient
* `FetchPatient` - Get a patient
* `FetchPatientCoaches` - List coaches for a patient
* `FetchPatientGroups` - List groups for a patient
* `FetchPatients` - List patients
* `UpdatePatient` - Update a patient
* `UpsertPatient` - Upsert patient

### Plan

* `FetchPatientPlanSummaries` - List patient plan summaries
* `FetchPatientPlanSummary` - Get the plan summary for a patient
* `UpdatePatientPlanSummary` - Update a plan summary

### Result

* `FetchPatientHealthResult` - Get a patient health result
* `FetchPatientHealthResults` - List patient health results

### Reward

* `CreateReward` - Create a reward
* `FetchReward` - Get a reward
* `FetchRewards` - List rewards

### RewardEarning

* `CreateRewardEarning` - Create a reward earning
* `FetchRewardEarning` - Get a reward earning
* `FetchRewardEarnings` - List reward earnings

### RewardEarningFulfillment

* `CreateRewardEarningFulfillment` - Create a reward earning fulfillment
* `FetchRewardEarningFulfillment` - Get a reward earning fulfillment
* `FetchRewardEarningFulfillments` - List reward earning fulfillments

### RewardProgram

* `CreateRewardProgram` - Create a reward program
* `FetchRewardProgram` - Get a reward program
* `FetchRewardProgramGroup` - Get group for a reward program
* `FetchRewardPrograms` - List reward programs

### RewardProgramActivation

* `CreateRewardProgramActivation` - Create a reward program activation
* `FetchRewardProgramActivation` - Get a reward program activation
* `FetchRewardProgramActivations` - List reward program activations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
