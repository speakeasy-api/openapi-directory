<!-- Start SDK Example Usage -->
```typescript
import {
  ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest,
  ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  V1Beta1ImportProducerOverridesRequestForceOnlyEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest = {
  dollarXgafv: XgafvEnum.Two,
  v1Beta1ImportProducerOverridesRequest: {
    force: false,
    forceOnly: [
      V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LimitDecreasePercentageTooHigh,
      V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LimitDecreasePercentageTooHigh,
      V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LimitDecreaseBelowUsage,
    ],
    inlineSource: {
      overrides: [
        {
          adminOverrideAncestor: "corrupti",
          dimensions: {
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
          },
          metric: "delectus",
          name: "tempora",
          overrideValue: "suscipit",
          unit: "molestiae",
        },
        {
          adminOverrideAncestor: "minus",
          dimensions: {
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
          },
          metric: "veritatis",
          name: "deserunt",
          overrideValue: "perferendis",
          unit: "ipsam",
        },
        {
          adminOverrideAncestor: "repellendus",
          dimensions: {
            "quo": "odit",
            "at": "at",
            "maiores": "molestiae",
            "quod": "quod",
          },
          metric: "esse",
          name: "totam",
          overrideValue: "porro",
          unit: "dolorum",
        },
        {
          adminOverrideAncestor: "dicta",
          dimensions: {
            "officia": "occaecati",
            "fugit": "deleniti",
            "hic": "optio",
          },
          metric: "totam",
          name: "beatae",
          overrideValue: "commodi",
          unit: "molestiae",
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

sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req).then((res: ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->