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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AgeUsd.CalcSigmaRsvExchange(ctx, operations.CalcSigmaRsvExchangeRequest{
        Amount: 548814,
    })
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


### [AgeUsd](docs/ageusd/README.md)

* [CalcSigmaRsvExchange](docs/ageusd/README.md#calcsigmarsvexchange) - Calculates SigRSV exchange
* [CalcSigmaUsdExchange](docs/ageusd/README.md#calcsigmausdexchange) - Calculates SigUSD exchange
* [DoSigmaRsvExchange](docs/ageusd/README.md#dosigmarsvexchange) - Builds ErgoPayRequest for SigRSV exchange
* [DoSigmaUsdExchange](docs/ageusd/README.md#dosigmausdexchange) - Builds ErgoPayRequest for SigUSD exchange
* [GetAgeUsdInfo](docs/ageusd/README.md#getageusdinfo) - Returns state of AgeUSD at this moment
* [GetSigmaRsvPrice](docs/ageusd/README.md#getsigmarsvprice) - Lists price and available volume for SigmaRSV
* [GetSigmaUsdPrice](docs/ageusd/README.md#getsigmausdprice) - Lists price and available volume for SigmaUSD

### [BabelFeeController](docs/babelfeecontroller/README.md)

* [CheckForNotifications](docs/babelfeecontroller/README.md#checkfornotifications)
* [ErgoPayCreateBabelBox1](docs/babelfeecontroller/README.md#ergopaycreatebabelbox1)
* [GetBabelFeeOverview](docs/babelfeecontroller/README.md#getbabelfeeoverview)

### [BabelFeeNewOfferController](docs/babelfeenewoffercontroller/README.md)

* [DoCreateBabelBox](docs/babelfeenewoffercontroller/README.md#docreatebabelbox)
* [ErgoPayCreateBabelBox](docs/babelfeenewoffercontroller/README.md#ergopaycreatebabelbox)
* [GetBabelFeeNewOffer](docs/babelfeenewoffercontroller/README.md#getbabelfeenewoffer)
* [ReplaceTokenAmountInputFields](docs/babelfeenewoffercontroller/README.md#replacetokenamountinputfields)

### [BoxConsolidationController](docs/boxconsolidationcontroller/README.md)

* [EpConsolidate](docs/boxconsolidationcontroller/README.md#epconsolidate)
* [MainApp1](docs/boxconsolidationcontroller/README.md#mainapp1)

### [PaymentPortal](docs/paymentportal/README.md)

* [AddPaymentRequest](docs/paymentportal/README.md#addpaymentrequest) - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* [GetPaymentState](docs/paymentportal/README.md#getpaymentstate) - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### [PeerDetection](docs/peerdetection/README.md)

* [GetPeersList](docs/peerdetection/README.md#getpeerslist) - Lists known peers sorted by block height

### [TokenBurnController](docs/tokenburncontroller/README.md)

* [GetBurningTransaction](docs/tokenburncontroller/README.md#getburningtransaction)
* [MainApp](docs/tokenburncontroller/README.md#mainapp)
* [PrepareTransaction](docs/tokenburncontroller/README.md#preparetransaction)

### [TokenPrices](docs/tokenprices/README.md)

* [GetTokenPrice](docs/tokenprices/README.md#gettokenprice) - Lists price and available volume for a certain token
* [GetTokenPrices](docs/tokenprices/README.md#gettokenprices) - Lists all token prices and available volume

### [TokenVerification](docs/tokenverification/README.md)

* [CheckToken](docs/tokenverification/README.md#checktoken) - Check a token verification
* [ListBlocked](docs/tokenverification/README.md#listblocked) - Lists all blocked tokens
* [ListGenuine](docs/tokenverification/README.md#listgenuine) - Lists all genuine tokens known
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
