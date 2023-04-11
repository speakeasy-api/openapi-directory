# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tokenjay.app/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tokenjay.app/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CalcSigmaRsvExchangeRequest,
  CalcSigmaRsvExchangeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CalcSigmaRsvExchangeRequest = {
  amount: 548814,
};

sdk.ageUsd.calcSigmaRsvExchange(req).then((res: CalcSigmaRsvExchangeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ageUsd

* `calcSigmaRsvExchange` - Calculates SigRSV exchange
* `calcSigmaUsdExchange` - Calculates SigUSD exchange
* `doSigmaRsvExchange` - Builds ErgoPayRequest for SigRSV exchange
* `doSigmaUsdExchange` - Builds ErgoPayRequest for SigUSD exchange
* `getAgeUsdInfo` - Returns state of AgeUSD at this moment
* `getSigmaRsvPrice` - Lists price and available volume for SigmaRSV
* `getSigmaUsdPrice` - Lists price and available volume for SigmaUSD

### babelFeeController

* `checkForNotifications`
* `ergoPayCreateBabelBox1`
* `getBabelFeeOverview`

### babelFeeNewOfferController

* `doCreateBabelBox`
* `ergoPayCreateBabelBox`
* `getBabelFeeNewOffer`
* `replaceTokenAmountInputFields`

### boxConsolidationController

* `epConsolidate`
* `mainApp1`

### paymentPortal

* `addPaymentRequest` - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* `getPaymentState` - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### peerDetection

* `getPeersList` - Lists known peers sorted by block height

### tokenBurnController

* `getBurningTransaction`
* `mainApp`
* `prepareTransaction`

### tokenPrices

* `getTokenPrice` - Lists price and available volume for a certain token
* `getTokenPrices` - Lists all token prices and available volume

### tokenVerification

* `checkToken` - Check a token verification
* `listBlocked` - Lists all blocked tokens
* `listGenuine` - Lists all genuine tokens known
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

