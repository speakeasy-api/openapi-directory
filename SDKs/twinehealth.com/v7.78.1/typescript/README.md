# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twinehealth.com/v7.78.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twinehealth.com/v7.78.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateActionRequestInput,
  CreateActionResponse
} from "openapi/dist/sdk/models/operations";
import {
  ActionResourceAttributesFrequencyGoalWeeksDaysEnum,
  ActionResourceAttributesTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateActionRequestInput = {
  data: {
    attributes: {
      thread: "corrupti",
      details: {
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
      },
      effectiveFrom: "vel",
      effectiveTo: "error",
      frequencyGoal: {
        weeks: {
          days: [
            ActionResourceAttributesFrequencyGoalWeeksDaysEnum.Two,
            ActionResourceAttributesFrequencyGoalWeeksDaysEnum.Three,
            ActionResourceAttributesFrequencyGoalWeeksDaysEnum.Two,
          ],
        },
      },
      identifiers: [
        {
          label: "ipsa",
          system: "delectus",
          value: "tempora",
        },
        {
          label: "suscipit",
          system: "molestiae",
          value: "minus",
        },
        {
          label: "placeat",
          system: "voluptatum",
          value: "iusto",
        },
        {
          label: "excepturi",
          system: "nisi",
          value: "recusandae",
        },
      ],
      intake: {
        "ab": "quis",
        "veritatis": "deserunt",
        "perferendis": "ipsam",
        "repellendus": "sapiente",
      },
      metricRequired: false,
      metrics: [
        {
          goal: {
            "at": "at",
          },
          metricType: "maiores",
          unit: "molestiae",
          validations: {
            maximum: {
              unit: "quod",
              value: 8009.11,
            },
            minimum: {
              unit: "esse",
              value: 5204.78,
            },
          },
        },
        {
          goal: {
            "dolorum": "dicta",
            "nam": "officia",
            "occaecati": "fugit",
            "deleniti": "hic",
          },
          metricType: "optio",
          unit: "totam",
          validations: {
            maximum: {
              unit: "beatae",
              value: 4146.62,
            },
            minimum: {
              unit: "molestiae",
              value: 2645.55,
            },
          },
        },
        {
          goal: {
            "impedit": "cum",
          },
          metricType: "esse",
          unit: "ipsum",
          validations: {
            maximum: {
              unit: "excepturi",
              value: 1352.18,
            },
            minimum: {
              unit: "perferendis",
              value: 3241.41,
            },
          },
        },
        {
          goal: {
            "sed": "iste",
            "dolor": "natus",
            "laboriosam": "hic",
          },
          metricType: "saepe",
          unit: "fuga",
          validations: {
            maximum: {
              unit: "in",
              value: 3595.08,
            },
            minimum: {
              unit: "iste",
              value: 4370.32,
            },
          },
        },
      ],
      title: "Dr.",
      tracking: false,
      type: ActionResourceAttributesTypeEnum.OtherLifestyle,
      windows: [
        {
          id: "architecto",
          title: "Mr.",
          type: "reiciendis",
        },
        {
          id: "est",
          title: "Miss",
          type: "laborum",
        },
        {
          id: "dolores",
          title: "Mrs.",
          type: "corporis",
        },
      ],
    },
    id: "explicabo",
    relationships: {
      plan: {
        data: {
          id: "nobis",
          type: "enim",
        },
        links: {
          "nemo": "minima",
          "excepturi": "accusantium",
          "iure": "culpa",
        },
      },
    },
    type: "doloribus",
  },
};

sdk.action.createAction(req).then((res: CreateActionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

