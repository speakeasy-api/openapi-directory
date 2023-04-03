# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountAndPortfolio

* `getAccounts` - Brokerage Accounts
* `getAccountsAccountPositions` - Account Positions
* `getAccountsAccountSummary` - Account Values Summary

### financialInstrumentDefinitions

* `getSecdef` - Get security definition

### marketData

* `getMarketdataExchangeComponents` - Exchange Components
* `getMarketdataSnapshot` - Market Data Snapshot

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

### trades

* `getAccountsAccountTrades` - Returns trades in account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
