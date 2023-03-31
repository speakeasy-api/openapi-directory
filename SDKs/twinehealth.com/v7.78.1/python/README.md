# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twinehealth.com/v7.78.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateActionRequestInput(
    data=shared.ActionResourceInput(
        attributes=shared.ActionResourceAttributesInput(
            thread="corrupti",
            details={
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            effective_from="vel",
            effective_to="error",
            frequency_goal=shared.ActionResourceAttributesFrequencyGoal(
                weeks=shared.ActionResourceAttributesFrequencyGoalWeeks(
                    days=[
                        "2",
                        "3",
                        "2",
                    ],
                ),
            ),
            identifiers=[
                shared.Identifier(
                    label="ipsa",
                    system="delectus",
                    value="tempora",
                ),
                shared.Identifier(
                    label="suscipit",
                    system="molestiae",
                    value="minus",
                ),
                shared.Identifier(
                    label="placeat",
                    system="voluptatum",
                    value="iusto",
                ),
                shared.Identifier(
                    label="excepturi",
                    system="nisi",
                    value="recusandae",
                ),
            ],
            intake={
                "ab": "quis",
                "veritatis": "deserunt",
                "perferendis": "ipsam",
                "repellendus": "sapiente",
            },
            metric_required=False,
            metrics=[
                shared.ActionMetric(
                    goal={
                        "at": "at",
                    },
                    metric_type="maiores",
                    unit="molestiae",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="quod",
                            value=8009.11,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="esse",
                            value=5204.78,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                    metric_type="optio",
                    unit="totam",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="beatae",
                            value=4146.62,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="molestiae",
                            value=2645.55,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "impedit": "cum",
                    },
                    metric_type="esse",
                    unit="ipsum",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="excepturi",
                            value=1352.18,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="perferendis",
                            value=3241.41,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                    metric_type="saepe",
                    unit="fuga",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="in",
                            value=3595.08,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="iste",
                            value=4370.32,
                        ),
                    ),
                ),
            ],
            title="Dr.",
            tracking=False,
            type="other_lifestyle",
            windows=[
                shared.ActionWindow(
                    id="architecto",
                    title="Mr.",
                    type="reiciendis",
                ),
                shared.ActionWindow(
                    id="est",
                    title="Miss",
                    type="laborum",
                ),
                shared.ActionWindow(
                    id="dolores",
                    title="Mrs.",
                    type="corporis",
                ),
            ],
        ),
        id="explicabo",
        relationships=shared.ActionResourceRelationships(
            plan=shared.ActionResourceRelationshipsPlan(
                data=shared.ActionResourceRelationshipsPlanData(
                    id="nobis",
                    type="enim",
                ),
                links={
                    "nemo": "minima",
                    "excepturi": "accusantium",
                    "iure": "culpa",
                },
            ),
        ),
        type="doloribus",
    ),
)
    
res = s.action.create_action(req)

if res.create_action_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### action

* `create_action` - Create action
* `fetch_action` - Get an action
* `update_action` - Update an action

### bundle

* `create_bundle` - Create bundle
* `fetch_bundle` - Get a bundle
* `update_bundle` - Update a bundle

### calendar_event

* `create_calendar_event` - Create calendar event
* `delete_calendar_event` - Delete a calendar event
* `fetch_calendar_event` - Get a calendar event
* `fetch_calendar_events` - List calendar events
* `update_calendar_event` - Update a calendar event

### calendar_event_response

* `create_calendar_event_response` - Create calendar event response

### coach

* `fetch_coach` - Get a coach
* `fetch_coaches` - List coaches

### email_history

* `fetch_email_histories` - List email histories
* `fetch_email_history` - Get an email history

### group

* `create_group` - Create a group
* `fetch_group` - Get a group
* `fetch_groups` - List groups

### health_profile

* `fetch_health_profile` - Get a health profile
* `fetch_health_profiles` - List health profiles

### health_profile_answer

* `fetch_health_profile_answer` - Get a health profile answer
* `fetch_health_profile_answers` - List health profile answers

### health_profile_question

* `fetch_health_profile_question` - Get a health profile question
* `fetch_health_profile_questions` - List health profile questions

### health_question_definition

* `fetch_health_question_definition` - Get a health question definition
* `fetch_health_question_definitions` - List health question definitions

### metric

* `create_patient_health_metric` - Create patient health metrics
* `fetch_patient_health_metric` - Get a patient health metric
* `fetch_patient_health_metrics` - List patient health metrics

### oauth

* `create_token` - Create an oauth token
* `fetch_token_groups` - Get the groups for a token
* `fetch_token_organization` - Get the organization for a token

### organization

* `fetch_organization` - Get an organization

### patient

* `create_patient` - Create a patient
* `fetch_patient` - Get a patient
* `fetch_patient_coaches` - List coaches for a patient
* `fetch_patient_groups` - List groups for a patient
* `fetch_patients` - List patients
* `update_patient` - Update a patient
* `upsert_patient` - Upsert patient

### plan

* `fetch_patient_plan_summaries` - List patient plan summaries
* `fetch_patient_plan_summary` - Get the plan summary for a patient
* `update_patient_plan_summary` - Update a plan summary

### result

* `fetch_patient_health_result` - Get a patient health result
* `fetch_patient_health_results` - List patient health results

### reward

* `create_reward` - Create a reward
* `fetch_reward` - Get a reward
* `fetch_rewards` - List rewards

### reward_earning

* `create_reward_earning` - Create a reward earning
* `fetch_reward_earning` - Get a reward earning
* `fetch_reward_earnings` - List reward earnings

### reward_earning_fulfillment

* `create_reward_earning_fulfillment` - Create a reward earning fulfillment
* `fetch_reward_earning_fulfillment` - Get a reward earning fulfillment
* `fetch_reward_earning_fulfillments` - List reward earning fulfillments

### reward_program

* `create_reward_program` - Create a reward program
* `fetch_reward_program` - Get a reward program
* `fetch_reward_program_group` - Get group for a reward program
* `fetch_reward_programs` - List reward programs

### reward_program_activation

* `create_reward_program_activation` - Create a reward program activation
* `fetch_reward_program_activation` - Get a reward program activation
* `fetch_reward_program_activations` - List reward program activations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
