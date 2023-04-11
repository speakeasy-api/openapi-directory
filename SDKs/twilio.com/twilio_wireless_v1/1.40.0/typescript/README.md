# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_wireless_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_wireless_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCommandCreateCommandRequest,
  CreateCommandResponse,
  CreateCommandCreateCommandRequestCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CommandEnumCommandModeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCommandCreateCommandRequest = {
  callbackMethod: CreateCommandCreateCommandRequestCallbackMethodEnum.Patch,
  callbackUrl: "https://salty-stag.name",
  command: "nulla",
  commandMode: CommandEnumCommandModeEnum.Binary,
  deliveryReceiptRequested: false,
  includeSid: "illum",
  sim: "vel",
};

sdk.createCommand(req).then((res: CreateCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createCommand` - Send a Command to a Sim.
* `createRatePlan`
* `deleteCommand` - Delete a Command instance from your account.
* `deleteRatePlan`
* `deleteSim` - Delete a Sim resource on your Account.
* `fetchCommand` - Fetch a Command instance from your account.
* `fetchRatePlan`
* `fetchSim` - Fetch a Sim resource on your Account.
* `listAccountUsageRecord`
* `listCommand` - Retrieve a list of Commands from your account.
* `listDataSession`
* `listRatePlan`
* `listSim` - Retrieve a list of Sim resources on your Account.
* `listUsageRecord`
* `updateRatePlan`
* `updateSim` - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

