# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_routes_v2/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_routes_v2/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FetchPhoneNumberRequest,
  FetchPhoneNumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchPhoneNumberRequest = {
  phoneNumber: "corrupti",
};

sdk.fetchPhoneNumber(req).then((res: FetchPhoneNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `fetchPhoneNumber` - Fetch the Inbound Processing Region assigned to a phone number.
* `fetchSipDomain`
* `fetchTrunks` - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* `updatePhoneNumber` - Assign an Inbound Processing Region to a phone number.
* `updateSipDomain`
* `updateTrunks` - Assign an Inbound Processing Region to a SIP Trunk
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

