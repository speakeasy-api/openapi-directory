<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BillingbudgetsBillingAccountsBudgetsCreateRequest, BillingbudgetsBillingAccountsBudgetsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BillingbudgetsBillingAccountsBudgetsCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    amount: {
      lastPeriodAmount: {
        "debitis": "voluptatum",
        "et": "ut",
        "dolorem": "et",
      },
      specifiedAmount: {
        currencyCode: "voluptate",
        nanos: 3287288577352441706,
        units: "vitae",
      },
    },
    budgetFilter: {
      calendarPeriod: "QUARTER",
      creditTypes: [
        "illum",
      ],
      creditTypesTreatment: "EXCLUDE_ALL_CREDITS",
      customPeriod: {
        endDate: {
          day: 3706853784096366226,
          month: 2627038740284806767,
          year: 6303220950515014660,
        },
        startDate: {
          day: 4035568504096476779,
          month: 959367522974354090,
          year: 2914295034816259174,
        },
      },
      labels: {
        "commodi": [
          "est",
          "aut",
          "odit",
        ],
        "non": [
          "omnis",
        ],
        "aut": [
          "sed",
        ],
      },
      projects: [
        "autem",
        "consectetur",
      ],
      services: [
        "odio",
      ],
      subaccounts: [
        "recusandae",
      ],
    },
    displayName: "at",
    etag: "ipsum",
    notificationsRule: {
      disableDefaultIamRecipients: true,
      monitoringNotificationChannels: [
        "sint",
        "inventore",
      ],
      pubsubTopic: "ut",
      schemaVersion: "exercitationem",
    },
    thresholdRules: [
      {
        spendBasis: "BASIS_UNSPECIFIED",
        thresholdPercent: 7.200000,
      },
      {
        spendBasis: "FORECASTED_SPEND",
        thresholdPercent: 94.199997,
      },
      {
        spendBasis: "CURRENT_SPEND",
        thresholdPercent: 80.199997,
      },
    ],
  },
};

sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req).then((res: BillingbudgetsBillingAccountsBudgetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->