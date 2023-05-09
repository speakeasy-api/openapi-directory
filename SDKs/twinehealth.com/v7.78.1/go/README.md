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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Action](docs/action/README.md)

* [CreateAction](docs/action/README.md#createaction) - Create action
* [FetchAction](docs/action/README.md#fetchaction) - Get an action
* [UpdateAction](docs/action/README.md#updateaction) - Update an action

### [Bundle](docs/bundle/README.md)

* [CreateBundle](docs/bundle/README.md#createbundle) - Create bundle
* [FetchBundle](docs/bundle/README.md#fetchbundle) - Get a bundle
* [UpdateBundle](docs/bundle/README.md#updatebundle) - Update a bundle

### [CalendarEvent](docs/calendarevent/README.md)

* [CreateCalendarEvent](docs/calendarevent/README.md#createcalendarevent) - Create calendar event
* [DeleteCalendarEvent](docs/calendarevent/README.md#deletecalendarevent) - Delete a calendar event
* [FetchCalendarEvent](docs/calendarevent/README.md#fetchcalendarevent) - Get a calendar event
* [FetchCalendarEvents](docs/calendarevent/README.md#fetchcalendarevents) - List calendar events
* [UpdateCalendarEvent](docs/calendarevent/README.md#updatecalendarevent) - Update a calendar event

### [CalendarEventResponse](docs/calendareventresponse/README.md)

* [CreateCalendarEventResponse](docs/calendareventresponse/README.md#createcalendareventresponse) - Create calendar event response

### [Coach](docs/coach/README.md)

* [FetchCoach](docs/coach/README.md#fetchcoach) - Get a coach
* [FetchCoaches](docs/coach/README.md#fetchcoaches) - List coaches

### [EmailHistory](docs/emailhistory/README.md)

* [FetchEmailHistories](docs/emailhistory/README.md#fetchemailhistories) - List email histories
* [FetchEmailHistory](docs/emailhistory/README.md#fetchemailhistory) - Get an email history

### [Group](docs/group/README.md)

* [CreateGroup](docs/group/README.md#creategroup) - Create a group
* [FetchGroup](docs/group/README.md#fetchgroup) - Get a group
* [FetchGroups](docs/group/README.md#fetchgroups) - List groups

### [HealthProfile](docs/healthprofile/README.md)

* [FetchHealthProfile](docs/healthprofile/README.md#fetchhealthprofile) - Get a health profile
* [FetchHealthProfiles](docs/healthprofile/README.md#fetchhealthprofiles) - List health profiles

### [HealthProfileAnswer](docs/healthprofileanswer/README.md)

* [FetchHealthProfileAnswer](docs/healthprofileanswer/README.md#fetchhealthprofileanswer) - Get a health profile answer
* [FetchHealthProfileAnswers](docs/healthprofileanswer/README.md#fetchhealthprofileanswers) - List health profile answers

### [HealthProfileQuestion](docs/healthprofilequestion/README.md)

* [FetchHealthProfileQuestion](docs/healthprofilequestion/README.md#fetchhealthprofilequestion) - Get a health profile question
* [FetchHealthProfileQuestions](docs/healthprofilequestion/README.md#fetchhealthprofilequestions) - List health profile questions

### [HealthQuestionDefinition](docs/healthquestiondefinition/README.md)

* [FetchHealthQuestionDefinition](docs/healthquestiondefinition/README.md#fetchhealthquestiondefinition) - Get a health question definition
* [FetchHealthQuestionDefinitions](docs/healthquestiondefinition/README.md#fetchhealthquestiondefinitions) - List health question definitions

### [Metric](docs/metric/README.md)

* [CreatePatientHealthMetric](docs/metric/README.md#createpatienthealthmetric) - Create patient health metrics
* [FetchPatientHealthMetric](docs/metric/README.md#fetchpatienthealthmetric) - Get a patient health metric
* [FetchPatientHealthMetrics](docs/metric/README.md#fetchpatienthealthmetrics) - List patient health metrics

### [Oauth](docs/oauth/README.md)

* [CreateToken](docs/oauth/README.md#createtoken) - Create an oauth token
* [FetchTokenGroups](docs/oauth/README.md#fetchtokengroups) - Get the groups for a token
* [FetchTokenOrganization](docs/oauth/README.md#fetchtokenorganization) - Get the organization for a token

### [Organization](docs/organization/README.md)

* [FetchOrganization](docs/organization/README.md#fetchorganization) - Get an organization

### [Patient](docs/patient/README.md)

* [CreatePatient](docs/patient/README.md#createpatient) - Create a patient
* [FetchPatient](docs/patient/README.md#fetchpatient) - Get a patient
* [FetchPatientCoaches](docs/patient/README.md#fetchpatientcoaches) - List coaches for a patient
* [FetchPatientGroups](docs/patient/README.md#fetchpatientgroups) - List groups for a patient
* [FetchPatients](docs/patient/README.md#fetchpatients) - List patients
* [UpdatePatient](docs/patient/README.md#updatepatient) - Update a patient
* [UpsertPatient](docs/patient/README.md#upsertpatient) - Upsert patient

### [Plan](docs/plan/README.md)

* [FetchPatientPlanSummaries](docs/plan/README.md#fetchpatientplansummaries) - List patient plan summaries
* [FetchPatientPlanSummary](docs/plan/README.md#fetchpatientplansummary) - Get the plan summary for a patient
* [UpdatePatientPlanSummary](docs/plan/README.md#updatepatientplansummary) - Update a plan summary

### [Result](docs/result/README.md)

* [FetchPatientHealthResult](docs/result/README.md#fetchpatienthealthresult) - Get a patient health result
* [FetchPatientHealthResults](docs/result/README.md#fetchpatienthealthresults) - List patient health results

### [Reward](docs/reward/README.md)

* [CreateReward](docs/reward/README.md#createreward) - Create a reward
* [FetchReward](docs/reward/README.md#fetchreward) - Get a reward
* [FetchRewards](docs/reward/README.md#fetchrewards) - List rewards

### [RewardEarning](docs/rewardearning/README.md)

* [CreateRewardEarning](docs/rewardearning/README.md#createrewardearning) - Create a reward earning
* [FetchRewardEarning](docs/rewardearning/README.md#fetchrewardearning) - Get a reward earning
* [FetchRewardEarnings](docs/rewardearning/README.md#fetchrewardearnings) - List reward earnings

### [RewardEarningFulfillment](docs/rewardearningfulfillment/README.md)

* [CreateRewardEarningFulfillment](docs/rewardearningfulfillment/README.md#createrewardearningfulfillment) - Create a reward earning fulfillment
* [FetchRewardEarningFulfillment](docs/rewardearningfulfillment/README.md#fetchrewardearningfulfillment) - Get a reward earning fulfillment
* [FetchRewardEarningFulfillments](docs/rewardearningfulfillment/README.md#fetchrewardearningfulfillments) - List reward earning fulfillments

### [RewardProgram](docs/rewardprogram/README.md)

* [CreateRewardProgram](docs/rewardprogram/README.md#createrewardprogram) - Create a reward program
* [FetchRewardProgram](docs/rewardprogram/README.md#fetchrewardprogram) - Get a reward program
* [FetchRewardProgramGroup](docs/rewardprogram/README.md#fetchrewardprogramgroup) - Get group for a reward program
* [FetchRewardPrograms](docs/rewardprogram/README.md#fetchrewardprograms) - List reward programs

### [RewardProgramActivation](docs/rewardprogramactivation/README.md)

* [CreateRewardProgramActivation](docs/rewardprogramactivation/README.md#createrewardprogramactivation) - Create a reward program activation
* [FetchRewardProgramActivation](docs/rewardprogramactivation/README.md#fetchrewardprogramactivation) - Get a reward program activation
* [FetchRewardProgramActivations](docs/rewardprogramactivation/README.md#fetchrewardprogramactivations) - List reward program activations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
