<!-- Start SDK Example Usage -->
```typescript
import {
  BillingbudgetsBillingAccountsBudgetsCreateRequest,
  BillingbudgetsBillingAccountsBudgetsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum,
  GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum,
  GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BillingbudgetsBillingAccountsBudgetsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudBillingBudgetsV1BudgetInput: {
    amount: {
      lastPeriodAmount: {
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
      },
      specifiedAmount: {
        currencyCode: "vel",
        nanos: 623564,
        units: "deserunt",
      },
    },
    budgetFilter: {
      calendarPeriod: GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum.Month,
      creditTypes: [
        "magnam",
        "debitis",
      ],
      creditTypesTreatment: GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum.CreditTypesTreatmentUnspecified,
      customPeriod: {
        endDate: {
          day: 963663,
          month: 272656,
          year: 383441,
        },
        startDate: {
          day: 477665,
          month: 791725,
          year: 812169,
        },
      },
      labels: {
        "iusto": [
          "nisi",
          "recusandae",
          "temporibus",
        ],
        "ab": [
          "veritatis",
          "deserunt",
        ],
        "perferendis": [
          "repellendus",
          "sapiente",
        ],
      },
      projects: [
        "odit",
        "at",
        "at",
        "maiores",
      ],
      services: [
        "quod",
        "quod",
      ],
      subaccounts: [
        "totam",
        "porro",
      ],
    },
    displayName: "dolorum",
    etag: "dicta",
    notificationsRule: {
      disableDefaultIamRecipients: false,
      monitoringNotificationChannels: [
        "officia",
        "occaecati",
        "fugit",
      ],
      pubsubTopic: "deleniti",
      schemaVersion: "hic",
    },
    thresholdRules: [
      {
        spendBasis: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.CurrentSpend,
        thresholdPercent: 1059.07,
      },
      {
        spendBasis: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.CurrentSpend,
        thresholdPercent: 4736,
      },
      {
        spendBasis: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.BasisUnspecified,
        thresholdPercent: 1863.32,
      },
      {
        spendBasis: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.ForecastedSpend,
        thresholdPercent: 7369.18,
      },
    ],
  },
  accessToken: "esse",
  alt: AltEnum.Json,
  callback: "excepturi",
  fields: "aspernatur",
  key: "perferendis",
  oauthToken: "ad",
  parent: "natus",
  prettyPrint: false,
  quotaUser: "sed",
  uploadType: "iste",
  uploadProtocol: "dolor",
};

sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req).then((res: BillingbudgetsBillingAccountsBudgetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->