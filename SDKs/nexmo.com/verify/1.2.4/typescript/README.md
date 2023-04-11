# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/verify/1.2.4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/verify/1.2.4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  VerifyCheckRequest,
  VerifyCheckResponse
} from "openapi/dist/sdk/models/operations";
import {
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VerifyCheckRequest = {
  checkRequest: {
    apiKey: "abcd1234",
    apiSecret: "Sup3rS3cr3t!!",
    code: "1234",
    ipAddress: "123.0.0.255",
    requestId: "abcdef0123456789abcdef0123456789",
  },
  format: FormatEnum.Xml,
};

sdk.verifyCheck(req).then((res: VerifyCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `verifyCheck` - Verify Check
* `verifyControl` - Verify Control
* `verifyRequestWithPsd2` - PSD2 (Payment Services Directive 2) Request
* `verifySearch` - Verify Search

### fraudManagement

* `networkUnblock` - Request a network unblock

### requests

* `verifyRequest` - Request a Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

