# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trunking_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trunking_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCredentialListRequest,
  CreateCredentialListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCredentialListRequest = {
  requestBody: {
    credentialListSid: "corrupti",
  },
  trunkSid: "provident",
};

sdk.createCredentialList(req).then((res: CreateCredentialListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createCredentialList`
* `createIpAccessControlList` - Associate an IP Access Control List with a Trunk
* `createOriginationUrl`
* `createPhoneNumber`
* `createTrunk`
* `deleteCredentialList`
* `deleteIpAccessControlList` - Remove an associated IP Access Control List from a Trunk
* `deleteOriginationUrl`
* `deletePhoneNumber`
* `deleteTrunk`
* `fetchCredentialList`
* `fetchIpAccessControlList`
* `fetchOriginationUrl`
* `fetchPhoneNumber`
* `fetchRecording`
* `fetchTrunk`
* `listCredentialList`
* `listIpAccessControlList` - List all IP Access Control Lists for a Trunk
* `listOriginationUrl`
* `listPhoneNumber`
* `listTrunk`
* `updateOriginationUrl`
* `updateRecording`
* `updateTrunk`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

