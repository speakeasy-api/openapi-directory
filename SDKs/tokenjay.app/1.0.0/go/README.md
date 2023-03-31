# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tokenjay.app/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CalcSigmaRsvExchangeRequest{
        Amount: 548814,
    }

    ctx := context.Background()
    res, err := s.AgeUsd.CalcSigmaRsvExchange(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AgeUsd

* `CalcSigmaRsvExchange` - Calculates SigRSV exchange
* `CalcSigmaUsdExchange` - Calculates SigUSD exchange
* `DoSigmaRsvExchange` - Builds ErgoPayRequest for SigRSV exchange
* `DoSigmaUsdExchange` - Builds ErgoPayRequest for SigUSD exchange
* `GetAgeUsdInfo` - Returns state of AgeUSD at this moment
* `GetSigmaRsvPrice` - Lists price and available volume for SigmaRSV
* `GetSigmaUsdPrice` - Lists price and available volume for SigmaUSD

### BabelFeeController

* `CheckForNotifications`
* `ErgoPayCreateBabelBox1`
* `GetBabelFeeOverview`

### BabelFeeNewOfferController

* `DoCreateBabelBox`
* `ErgoPayCreateBabelBox`
* `GetBabelFeeNewOffer`
* `ReplaceTokenAmountInputFields`

### BoxConsolidationController

* `EpConsolidate`
* `MainApp1`

### PaymentPortal

* `AddPaymentRequest` - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* `GetPaymentState` - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### PeerDetection

* `GetPeersList` - Lists known peers sorted by block height

### TokenBurnController

* `GetBurningTransaction`
* `MainApp`
* `PrepareTransaction`

### TokenPrices

* `GetTokenPrice` - Lists price and available volume for a certain token
* `GetTokenPrices` - Lists all token prices and available volume

### TokenVerification

* `CheckToken` - Check a token verification
* `ListBlocked` - Lists all blocked tokens
* `ListGenuine` - Lists all genuine tokens known
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
