# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/interactivebrokers.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/interactivebrokers.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountsRequest,
  GetAccountsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    cookieAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsRequest = {
  account: "corrupti",
};

sdk.accountAndPortfolio.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountAndPortfolio

* `getAccounts` - Brokerage Accounts
* `getAccountsAccountPositions` - Account Positions
* `getAccountsAccountSummary` - Account Values Summary

### marketData

* `getMarketdataExchangeComponents` - Exchange Components

### oAuth

* `postOauthAccessToken` - Obtain a access token
* `postOauthLiveSessionToken` - Obtain a live session token
* `postOauthRequestToken` - Obtain a request token

### orderMarginRequirements

* `postAccountsAccountOrderImpact` - Return margin impact info

### orders

* `deleteAccountsAccountOrdersCustomerOrderId` - Cancel Order
* `getAccountsAccountOrders` - Open Orders
* `getAccountsAccountOrdersCustomerOrderId` - Return specific order info
* `postAccountsAccountOrders` - Place Order
* `putAccountsAccountOrdersCustomerOrderId` - Modify Order
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

