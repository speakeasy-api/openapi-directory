# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActionResponse;
import org.openapis.openapi.models.shared.ActionMetric;
import org.openapis.openapi.models.shared.ActionMetricValidations;
import org.openapis.openapi.models.shared.ActionMetricValidationsMaximum;
import org.openapis.openapi.models.shared.ActionMetricValidationsMinimum;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoal;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeks;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesInput;
import org.openapis.openapi.models.shared.ActionResourceAttributesTypeEnum;
import org.openapis.openapi.models.shared.ActionResourceInput;
import org.openapis.openapi.models.shared.ActionResourceRelationships;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.ActionWindow;
import org.openapis.openapi.models.shared.CreateActionRequestInput;
import org.openapis.openapi.models.shared.Identifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateActionRequestInput req = new CreateActionRequestInput(                new ActionResourceInput("corrupti", "provident") {{
                                attributes = new ActionResourceAttributesInput("distinctio", "quibusdam", ActionResourceAttributesTypeEnum.OTHER_LIFESTYLE) {{
                                    thread = "unde";
                                    details = new java.util.HashMap<String, Object>() {{
                                        put("corrupti", "illum");
                                        put("vel", "error");
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                    }};
                                    effectiveTo = "debitis";
                                    frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                        weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                            days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.SIX),
                                            }};
                                        }};;
                                    }};;
                                    identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                        add(new Identifier("placeat", "voluptatum") {{
                                            label = "suscipit";
                                            system = "molestiae";
                                            value = "minus";
                                        }}),
                                        add(new Identifier("recusandae", "temporibus") {{
                                            label = "iusto";
                                            system = "excepturi";
                                            value = "nisi";
                                        }}),
                                    }};
                                    intake = new java.util.HashMap<String, Object>() {{
                                        put("quis", "veritatis");
                                    }};
                                    metricRequired = false;
                                    metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "repellendus");
                                            }};
                                            metricType = "sapiente";
                                            unit = "quo";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "odit";
                                                    value = 8700.13;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "at";
                                                    value = 9786.19;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("quod", "quod");
                                                put("esse", "totam");
                                            }};
                                            metricType = "porro";
                                            unit = "dolorum";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "dicta";
                                                    value = 7206.33;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "officia";
                                                    value = 5820.2;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("deleniti", "hic");
                                            }};
                                            metricType = "optio";
                                            unit = "totam";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "beatae";
                                                    value = 4146.62;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "molestiae";
                                                    value = 2645.55;
                                                }};
                                            }};
                                        }}),
                                    }};
                                    tracking = false;
                                    windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                        add(new ActionWindow("nobis") {{
                                            id = "cb739205-9293-496f-aa75-96eb10faaa23";
                                            title = "Mrs.";
                                            type = "explicabo";
                                        }}),
                                    }};
                                }};;
                                relationships = new ActionResourceRelationships() {{
                                    plan = new ActionResourceRelationshipsPlan() {{
                                        data = new ActionResourceRelationshipsPlanData() {{
                                            id = "5955907a-ff1a-43a2-ba94-67739251aa52";
                                            type = "quo";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("tenetur", "ipsam");
                                        }};
                                    }};;
                                }};;
                            }};);            

            CreateActionResponse res = sdk.action.createAction(req);

            if (res.createActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
