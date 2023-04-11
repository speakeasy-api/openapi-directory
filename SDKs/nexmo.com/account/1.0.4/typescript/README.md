# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/account/1.0.4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/account/1.0.4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountBalanceRequest,
  GetAccountBalanceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountBalanceRequest = {
  apiKey: "abcd1234",
  apiSecret: "ABCDEFGH01234abc",
};

sdk.balance.getAccountBalance(req).then((res: GetAccountBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### balance

* `getAccountBalance` - Get Account Balance
* `topUpAccountBalance` - Top Up Account Balance

### configuration

* `changeAccountSettings` - Change Account Settings
* `registerSender` - Register an email sender

### secretManagement

* `createAPISecret` - Create API Secret
* `retrieveAPISecret` - Retrieve one API Secret
* `retrieveAPISecrets` - Retrieve API Secrets
* `revokeAPISecret` - Revoke an API Secret
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

