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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
