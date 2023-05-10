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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateActionRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoal;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoalWeeks;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetric;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidations;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidationsMaximum;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidationsMinimum;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionWindow;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationshipsPlan;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationshipsPlanData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActionRequestInput();
    $request->data = new ActionResourceInput();
    $request->data->attributes = new ActionResourceAttributesInput();
    $request->data->attributes->thread = 'corrupti';
    $request->data->attributes->details = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->data->attributes->effectiveFrom = 'vel';
    $request->data->attributes->effectiveTo = 'error';
    $request->data->attributes->frequencyGoal = new ActionResourceAttributesFrequencyGoal();
    $request->data->attributes->frequencyGoal->weeks = new ActionResourceAttributesFrequencyGoalWeeks();
    $request->data->attributes->frequencyGoal->weeks->days = [
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::TWO,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::THREE,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::TWO,
    ];
    $request->data->attributes->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->data->attributes->intake = [
        'delectus' => 'tempora',
    ];
    $request->data->attributes->metricRequired = false;
    $request->data->attributes->metrics = [
        new ActionMetric(),
        new ActionMetric(),
    ];
    $request->data->attributes->title = 'Ms.';
    $request->data->attributes->tracking = false;
    $request->data->attributes->type = ActionResourceAttributesTypeEnum::OTHER_LIFESTYLE;
    $request->data->attributes->windows = [
        new ActionWindow(),
        new ActionWindow(),
        new ActionWindow(),
        new ActionWindow(),
    ];
    $request->data->id = 'c8796ed1-51a0-45df-82dd-f7cc78ca1ba9';
    $request->data->relationships = new ActionResourceRelationships();
    $request->data->relationships->plan = new ActionResourceRelationshipsPlan();
    $request->data->relationships->plan->data = new ActionResourceRelationshipsPlanData();
    $request->data->relationships->plan->data->id = '28fc8167-42cb-4739-a059-29396fea7596';
    $request->data->relationships->plan->data->type = 'saepe';
    $request->data->relationships->plan->links = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->data->type = 'dolores';

    $response = $sdk->action->createAction($request);

    if ($response->createActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [action](docs/action/README.md)

* [createAction](docs/action/README.md#createaction) - Create action
* [fetchAction](docs/action/README.md#fetchaction) - Get an action
* [updateAction](docs/action/README.md#updateaction) - Update an action

### [bundle](docs/bundle/README.md)

* [createBundle](docs/bundle/README.md#createbundle) - Create bundle
* [fetchBundle](docs/bundle/README.md#fetchbundle) - Get a bundle
* [updateBundle](docs/bundle/README.md#updatebundle) - Update a bundle

### [calendarEvent](docs/calendarevent/README.md)

* [createCalendarEvent](docs/calendarevent/README.md#createcalendarevent) - Create calendar event
* [deleteCalendarEvent](docs/calendarevent/README.md#deletecalendarevent) - Delete a calendar event
* [fetchCalendarEvent](docs/calendarevent/README.md#fetchcalendarevent) - Get a calendar event
* [fetchCalendarEvents](docs/calendarevent/README.md#fetchcalendarevents) - List calendar events
* [updateCalendarEvent](docs/calendarevent/README.md#updatecalendarevent) - Update a calendar event

### [calendarEventResponse](docs/calendareventresponse/README.md)

* [createCalendarEventResponse](docs/calendareventresponse/README.md#createcalendareventresponse) - Create calendar event response

### [coach](docs/coach/README.md)

* [fetchCoach](docs/coach/README.md#fetchcoach) - Get a coach
* [fetchCoaches](docs/coach/README.md#fetchcoaches) - List coaches

### [emailHistory](docs/emailhistory/README.md)

* [fetchEmailHistories](docs/emailhistory/README.md#fetchemailhistories) - List email histories
* [fetchEmailHistory](docs/emailhistory/README.md#fetchemailhistory) - Get an email history

### [group](docs/group/README.md)

* [createGroup](docs/group/README.md#creategroup) - Create a group
* [fetchGroup](docs/group/README.md#fetchgroup) - Get a group
* [fetchGroups](docs/group/README.md#fetchgroups) - List groups

### [healthProfile](docs/healthprofile/README.md)

* [fetchHealthProfile](docs/healthprofile/README.md#fetchhealthprofile) - Get a health profile
* [fetchHealthProfiles](docs/healthprofile/README.md#fetchhealthprofiles) - List health profiles

### [healthProfileAnswer](docs/healthprofileanswer/README.md)

* [fetchHealthProfileAnswer](docs/healthprofileanswer/README.md#fetchhealthprofileanswer) - Get a health profile answer
* [fetchHealthProfileAnswers](docs/healthprofileanswer/README.md#fetchhealthprofileanswers) - List health profile answers

### [healthProfileQuestion](docs/healthprofilequestion/README.md)

* [fetchHealthProfileQuestion](docs/healthprofilequestion/README.md#fetchhealthprofilequestion) - Get a health profile question
* [fetchHealthProfileQuestions](docs/healthprofilequestion/README.md#fetchhealthprofilequestions) - List health profile questions

### [healthQuestionDefinition](docs/healthquestiondefinition/README.md)

* [fetchHealthQuestionDefinition](docs/healthquestiondefinition/README.md#fetchhealthquestiondefinition) - Get a health question definition
* [fetchHealthQuestionDefinitions](docs/healthquestiondefinition/README.md#fetchhealthquestiondefinitions) - List health question definitions

### [metric](docs/metric/README.md)

* [createPatientHealthMetric](docs/metric/README.md#createpatienthealthmetric) - Create patient health metrics
* [fetchPatientHealthMetric](docs/metric/README.md#fetchpatienthealthmetric) - Get a patient health metric
* [fetchPatientHealthMetrics](docs/metric/README.md#fetchpatienthealthmetrics) - List patient health metrics

### [oauth](docs/oauth/README.md)

* [createToken](docs/oauth/README.md#createtoken) - Create an oauth token
* [fetchTokenGroups](docs/oauth/README.md#fetchtokengroups) - Get the groups for a token
* [fetchTokenOrganization](docs/oauth/README.md#fetchtokenorganization) - Get the organization for a token

### [organization](docs/organization/README.md)

* [fetchOrganization](docs/organization/README.md#fetchorganization) - Get an organization

### [patient](docs/patient/README.md)

* [createPatient](docs/patient/README.md#createpatient) - Create a patient
* [fetchPatient](docs/patient/README.md#fetchpatient) - Get a patient
* [fetchPatientCoaches](docs/patient/README.md#fetchpatientcoaches) - List coaches for a patient
* [fetchPatientGroups](docs/patient/README.md#fetchpatientgroups) - List groups for a patient
* [fetchPatients](docs/patient/README.md#fetchpatients) - List patients
* [updatePatient](docs/patient/README.md#updatepatient) - Update a patient
* [upsertPatient](docs/patient/README.md#upsertpatient) - Upsert patient

### [plan](docs/plan/README.md)

* [fetchPatientPlanSummaries](docs/plan/README.md#fetchpatientplansummaries) - List patient plan summaries
* [fetchPatientPlanSummary](docs/plan/README.md#fetchpatientplansummary) - Get the plan summary for a patient
* [updatePatientPlanSummary](docs/plan/README.md#updatepatientplansummary) - Update a plan summary

### [result](docs/result/README.md)

* [fetchPatientHealthResult](docs/result/README.md#fetchpatienthealthresult) - Get a patient health result
* [fetchPatientHealthResults](docs/result/README.md#fetchpatienthealthresults) - List patient health results

### [reward](docs/reward/README.md)

* [createReward](docs/reward/README.md#createreward) - Create a reward
* [fetchReward](docs/reward/README.md#fetchreward) - Get a reward
* [fetchRewards](docs/reward/README.md#fetchrewards) - List rewards

### [rewardEarning](docs/rewardearning/README.md)

* [createRewardEarning](docs/rewardearning/README.md#createrewardearning) - Create a reward earning
* [fetchRewardEarning](docs/rewardearning/README.md#fetchrewardearning) - Get a reward earning
* [fetchRewardEarnings](docs/rewardearning/README.md#fetchrewardearnings) - List reward earnings

### [rewardEarningFulfillment](docs/rewardearningfulfillment/README.md)

* [createRewardEarningFulfillment](docs/rewardearningfulfillment/README.md#createrewardearningfulfillment) - Create a reward earning fulfillment
* [fetchRewardEarningFulfillment](docs/rewardearningfulfillment/README.md#fetchrewardearningfulfillment) - Get a reward earning fulfillment
* [fetchRewardEarningFulfillments](docs/rewardearningfulfillment/README.md#fetchrewardearningfulfillments) - List reward earning fulfillments

### [rewardProgram](docs/rewardprogram/README.md)

* [createRewardProgram](docs/rewardprogram/README.md#createrewardprogram) - Create a reward program
* [fetchRewardProgram](docs/rewardprogram/README.md#fetchrewardprogram) - Get a reward program
* [fetchRewardProgramGroup](docs/rewardprogram/README.md#fetchrewardprogramgroup) - Get group for a reward program
* [fetchRewardPrograms](docs/rewardprogram/README.md#fetchrewardprograms) - List reward programs

### [rewardProgramActivation](docs/rewardprogramactivation/README.md)

* [createRewardProgramActivation](docs/rewardprogramactivation/README.md#createrewardprogramactivation) - Create a reward program activation
* [fetchRewardProgramActivation](docs/rewardprogramactivation/README.md#fetchrewardprogramactivation) - Get a reward program activation
* [fetchRewardProgramActivations](docs/rewardprogramactivation/README.md#fetchrewardprogramactivations) - List reward program activations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
