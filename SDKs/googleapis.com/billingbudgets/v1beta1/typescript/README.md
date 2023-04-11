# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1beta1/typescript
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

