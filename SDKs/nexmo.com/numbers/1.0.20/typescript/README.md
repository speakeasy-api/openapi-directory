# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/numbers/1.0.20/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/numbers/1.0.20/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.NumberDetails,
  BuyANumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
    apiSecret: "YOUR_API_KEY_HERE",
  },
});

const req: shared.NumberDetails = {
  country: "GB",
  msisdn: "447700900000",
  targetApiKey: "1a2345b7",
};

sdk.buyANumber(req).then((res: BuyANumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `buyANumber` - Buy a number
* `cancelANumber` - Cancel a number
* `getAvailableNumbers` - Search available numbers
* `getOwnedNumbers` - List the numbers you own
* `updateANumber` - Update a number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

