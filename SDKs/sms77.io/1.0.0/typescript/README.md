# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sms77.io/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sms77.io/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsRequest,
  AnalyticsResponse,
  AnalyticsGroupByEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: AnalyticsRequest = {
  end: "corrupti",
  groupBy: AnalyticsGroupByEnum.Subaccount,
  label: "distinctio",
  start: "quibusdam",
  subaccounts: "unde",
};

sdk.analytics.analytics(req).then((res: AnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analytics

* `analytics`

### balance

* `balance`

### contacts

* `contactsGet`
* `contactsPOST`

### hooks

* `hooksGet`
* `hooksPOST`

### lookup

* `lookup`
* `lookupCnam`
* `lookupFormat`
* `lookupHlr`
* `lookupMnp`

### pricing

* `pricing`

### sms

* `sms`

### status

* `status`

### validateForVoice

* `validateForVoice`

### voice

* `voice`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

