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