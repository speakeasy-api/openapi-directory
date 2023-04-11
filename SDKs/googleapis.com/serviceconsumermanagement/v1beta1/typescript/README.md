# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/serviceconsumermanagement/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/serviceconsumermanagement/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### services

* `serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides` - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate` - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete` - Deletes a producer override.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList` - Lists all producer overrides on this limit.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch` - Updates a producer override.
* `serviceconsumermanagementServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

