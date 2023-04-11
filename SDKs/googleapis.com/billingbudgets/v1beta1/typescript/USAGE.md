<!-- Start SDK Example Usage -->
```typescript
import {
  BillingbudgetsBillingAccountsBudgetsCreateRequest,
  BillingbudgetsBillingAccountsBudgetsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum,
  GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum,
  GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BillingbudgetsBillingAccountsBudgetsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput: {
    budget: {
      allUpdatesRule: {
        disableDefaultIamRecipients: false,
        monitoringNotificationChannels: [
          "distinctio",
          "quibusdam",
          "unde",
        ],
        pubsubTopic: "nulla",
        schemaVersion: "corrupti",
      },
      amount: {
        lastPeriodAmount: {
          "vel": "error",
          "deserunt": "suscipit",
          "iure": "magnam",
          "debitis": "ipsa",
        },
        specifiedAmount: {
          currencyCode: "delectus",
          nanos: 272656,
          units: "suscipit",
        },
      },
      budgetFilter: {
        calendarPeriod: GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum.Month,
        creditTypes: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
        creditTypesTreatment: GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum.IncludeAllCredits,
        customPeriod: {
          endDate: {
            day: 925597,
            month: 836079,
            year: 71036,
          },
          startDate: {
            day: 337396,
            month: 87129,
            year: 648172,
          },
        },
        labels: {
          "ipsam": [
            "sapiente",
            "quo",
            "odit",
            "at",
          ],
        },
        projects: [
          "maiores",
          "molestiae",
          "quod",
          "quod",
        ],
        services: [
          "totam",
          "porro",
        ],
        subaccounts: [
          "dicta",
          "nam",
          "officia",
        ],
      },
      displayName: "occaecati",
      etag: "fugit",
      thresholdRules: [
        {
          spendBasis: GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.ForecastedSpend,
          thresholdPercent: 7586.16,
        },
        {
          spendBasis: GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.CurrentSpend,
          thresholdPercent: 1059.07,
        },
        {
          spendBasis: GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.CurrentSpend,
          thresholdPercent: 4736,
        },
      ],
    },
  },
  accessToken: "modi",
  alt: AltEnum.Json,
  callback: "impedit",
  fields: "cum",
  key: "esse",
  oauthToken: "ipsum",
  parent: "excepturi",
  prettyPrint: false,
  quotaUser: "aspernatur",
  uploadType: "perferendis",
  uploadProtocol: "ad",
};

sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req).then((res: BillingbudgetsBillingAccountsBudgetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->