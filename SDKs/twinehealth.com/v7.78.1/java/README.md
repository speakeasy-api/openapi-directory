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

import org.openapis.openapi.models.operations.CreateActionRequest;
import org.openapis.openapi.models.operations.CreateActionResponse;
import org.openapis.openapi.models.shared.CreateActionRequestInput;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeks;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoal;
import org.openapis.openapi.models.shared.ActionResourceAttributesTypeEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesInput;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.ActionResourceRelationships;
import org.openapis.openapi.models.shared.ActionResourceInput;
import org.openapis.openapi.models.shared.ActionWindow;
import org.openapis.openapi.models.shared.ActionMetricValidationsMaximum;
import org.openapis.openapi.models.shared.ActionMetricValidationsMinimum;
import org.openapis.openapi.models.shared.ActionMetricValidations;
import org.openapis.openapi.models.shared.ActionMetric;
import org.openapis.openapi.models.shared.Identifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActionRequest req = new CreateActionRequest() {{
                request = new CreateActionRequestInput() {{
                    data = new ActionResourceInput() {{
                        attributes = new ActionResourceAttributesInput() {{
                            thread = "corrupti";
                            details = new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }};
                            effectiveFrom = "vel";
                            effectiveTo = "error";
                            frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                    days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                        add("2"),
                                        add("3"),
                                        add("2"),
                                    }};
                                }};
                            }};
                            identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                add(new Identifier() {{
                                    label = "ipsa";
                                    system = "delectus";
                                    value = "tempora";
                                }}),
                                add(new Identifier() {{
                                    label = "suscipit";
                                    system = "molestiae";
                                    value = "minus";
                                }}),
                                add(new Identifier() {{
                                    label = "placeat";
                                    system = "voluptatum";
                                    value = "iusto";
                                }}),
                                add(new Identifier() {{
                                    label = "excepturi";
                                    system = "nisi";
                                    value = "recusandae";
                                }}),
                            }};
                            intake = new java.util.HashMap<String, Object>() {{
                                put("ab", "quis");
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                                put("repellendus", "sapiente");
                            }};
                            metricRequired = false;
                            metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("at", "at");
                                    }};
                                    metricType = "maiores";
                                    unit = "molestiae";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "quod";
                                            value = 8009.11;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "esse";
                                            value = 5204.78;
                                        }};
                                    }};
                                }}),
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("dolorum", "dicta");
                                        put("nam", "officia");
                                        put("occaecati", "fugit");
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
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("impedit", "cum");
                                    }};
                                    metricType = "esse";
                                    unit = "ipsum";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "excepturi";
                                            value = 1352.18;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "perferendis";
                                            value = 3241.41;
                                        }};
                                    }};
                                }}),
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("sed", "iste");
                                        put("dolor", "natus");
                                        put("laboriosam", "hic");
                                    }};
                                    metricType = "saepe";
                                    unit = "fuga";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "in";
                                            value = 3595.08;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "iste";
                                            value = 4370.32;
                                        }};
                                    }};
                                }}),
                            }};
                            title = "Dr.";
                            tracking = false;
                            type = "other_lifestyle";
                            windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                add(new ActionWindow() {{
                                    id = "architecto";
                                    title = "Mr.";
                                    type = "reiciendis";
                                }}),
                                add(new ActionWindow() {{
                                    id = "est";
                                    title = "Miss";
                                    type = "laborum";
                                }}),
                                add(new ActionWindow() {{
                                    id = "dolores";
                                    title = "Mrs.";
                                    type = "corporis";
                                }}),
                            }};
                        }};
                        id = "explicabo";
                        relationships = new ActionResourceRelationships() {{
                            plan = new ActionResourceRelationshipsPlan() {{
                                data = new ActionResourceRelationshipsPlanData() {{
                                    id = "nobis";
                                    type = "enim";
                                }};
                                links = new java.util.HashMap<String, Object>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};
                        }};
                        type = "doloribus";
                    }};
                }};
            }};            

            CreateActionResponse res = sdk.action.createAction(req);

            if (res.createActionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
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
