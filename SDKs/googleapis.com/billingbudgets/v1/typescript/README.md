# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### billingAccounts

* `billingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `billingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `billingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

