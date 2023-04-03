# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### action

* `createAction` - Create action
* `fetchAction` - Get an action
* `updateAction` - Update an action

### bundle

* `createBundle` - Create bundle
* `fetchBundle` - Get a bundle
* `updateBundle` - Update a bundle

### calendarEvent

* `createCalendarEvent` - Create calendar event
* `deleteCalendarEvent` - Delete a calendar event
* `fetchCalendarEvent` - Get a calendar event
* `fetchCalendarEvents` - List calendar events
* `updateCalendarEvent` - Update a calendar event

### calendarEventResponse

* `createCalendarEventResponse` - Create calendar event response

### coach

* `fetchCoach` - Get a coach
* `fetchCoaches` - List coaches

### emailHistory

* `fetchEmailHistories` - List email histories
* `fetchEmailHistory` - Get an email history

### group

* `createGroup` - Create a group
* `fetchGroup` - Get a group
* `fetchGroups` - List groups

### healthProfile

* `fetchHealthProfile` - Get a health profile
* `fetchHealthProfiles` - List health profiles

### healthProfileAnswer

* `fetchHealthProfileAnswer` - Get a health profile answer
* `fetchHealthProfileAnswers` - List health profile answers

### healthProfileQuestion

* `fetchHealthProfileQuestion` - Get a health profile question
* `fetchHealthProfileQuestions` - List health profile questions

### healthQuestionDefinition

* `fetchHealthQuestionDefinition` - Get a health question definition
* `fetchHealthQuestionDefinitions` - List health question definitions

### metric

* `createPatientHealthMetric` - Create patient health metrics
* `fetchPatientHealthMetric` - Get a patient health metric
* `fetchPatientHealthMetrics` - List patient health metrics

### oauth

* `createToken` - Create an oauth token
* `fetchTokenGroups` - Get the groups for a token
* `fetchTokenOrganization` - Get the organization for a token

### organization

* `fetchOrganization` - Get an organization

### patient

* `createPatient` - Create a patient
* `fetchPatient` - Get a patient
* `fetchPatientCoaches` - List coaches for a patient
* `fetchPatientGroups` - List groups for a patient
* `fetchPatients` - List patients
* `updatePatient` - Update a patient
* `upsertPatient` - Upsert patient

### plan

* `fetchPatientPlanSummaries` - List patient plan summaries
* `fetchPatientPlanSummary` - Get the plan summary for a patient
* `updatePatientPlanSummary` - Update a plan summary

### result

* `fetchPatientHealthResult` - Get a patient health result
* `fetchPatientHealthResults` - List patient health results

### reward

* `createReward` - Create a reward
* `fetchReward` - Get a reward
* `fetchRewards` - List rewards

### rewardEarning

* `createRewardEarning` - Create a reward earning
* `fetchRewardEarning` - Get a reward earning
* `fetchRewardEarnings` - List reward earnings

### rewardEarningFulfillment

* `createRewardEarningFulfillment` - Create a reward earning fulfillment
* `fetchRewardEarningFulfillment` - Get a reward earning fulfillment
* `fetchRewardEarningFulfillments` - List reward earning fulfillments

### rewardProgram

* `createRewardProgram` - Create a reward program
* `fetchRewardProgram` - Get a reward program
* `fetchRewardProgramGroup` - Get group for a reward program
* `fetchRewardPrograms` - List reward programs

### rewardProgramActivation

* `createRewardProgramActivation` - Create a reward program activation
* `fetchRewardProgramActivation` - Get a reward program activation
* `fetchRewardProgramActivations` - List reward program activations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
