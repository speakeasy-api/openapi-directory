# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_notify_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_notify_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBindingRequest,
  CreateBindingResponse
} from "openapi/dist/sdk/models/operations";
import {
  BindingEnumBindingTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateBindingRequest = {
  requestBody: {
    address: "5786 Little Streets",
    bindingType: BindingEnumBindingTypeEnum.Sms,
    credentialSid: "error",
    endpoint: "deserunt",
    identity: "suscipit",
    notificationProtocolVersion: "iure",
    tag: [
      "debitis",
      "ipsa",
    ],
  },
  serviceSid: "delectus",
};

sdk.createBinding(req).then((res: CreateBindingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createBinding`
* `createCredential`
* `createNotification`
* `createService`
* `deleteBinding`
* `deleteCredential`
* `deleteService`
* `fetchBinding`
* `fetchCredential`
* `fetchService`
* `listBinding`
* `listCredential`
* `listService`
* `updateCredential`
* `updateService`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

