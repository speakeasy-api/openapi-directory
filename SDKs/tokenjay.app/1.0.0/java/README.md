# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeRequest;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalcSigmaRsvExchangeRequest req = new CalcSigmaRsvExchangeRequest(548814L);            

            CalcSigmaRsvExchangeResponse res = sdk.ageUsd.calcSigmaRsvExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ageUsd](docs/ageusd/README.md)

* [calcSigmaRsvExchange](docs/ageusd/README.md#calcsigmarsvexchange) - Calculates SigRSV exchange
* [calcSigmaUsdExchange](docs/ageusd/README.md#calcsigmausdexchange) - Calculates SigUSD exchange
* [doSigmaRsvExchange](docs/ageusd/README.md#dosigmarsvexchange) - Builds ErgoPayRequest for SigRSV exchange
* [doSigmaUsdExchange](docs/ageusd/README.md#dosigmausdexchange) - Builds ErgoPayRequest for SigUSD exchange
* [getAgeUsdInfo](docs/ageusd/README.md#getageusdinfo) - Returns state of AgeUSD at this moment
* [getSigmaRsvPrice](docs/ageusd/README.md#getsigmarsvprice) - Lists price and available volume for SigmaRSV
* [getSigmaUsdPrice](docs/ageusd/README.md#getsigmausdprice) - Lists price and available volume for SigmaUSD

### [babelFeeController](docs/babelfeecontroller/README.md)

* [checkForNotifications](docs/babelfeecontroller/README.md#checkfornotifications)
* [ergoPayCreateBabelBox1](docs/babelfeecontroller/README.md#ergopaycreatebabelbox1)
* [getBabelFeeOverview](docs/babelfeecontroller/README.md#getbabelfeeoverview)

### [babelFeeNewOfferController](docs/babelfeenewoffercontroller/README.md)

* [doCreateBabelBox](docs/babelfeenewoffercontroller/README.md#docreatebabelbox)
* [ergoPayCreateBabelBox](docs/babelfeenewoffercontroller/README.md#ergopaycreatebabelbox)
* [getBabelFeeNewOffer](docs/babelfeenewoffercontroller/README.md#getbabelfeenewoffer)
* [replaceTokenAmountInputFields](docs/babelfeenewoffercontroller/README.md#replacetokenamountinputfields)

### [boxConsolidationController](docs/boxconsolidationcontroller/README.md)

* [epConsolidate](docs/boxconsolidationcontroller/README.md#epconsolidate)
* [mainApp1](docs/boxconsolidationcontroller/README.md#mainapp1)

### [paymentPortal](docs/paymentportal/README.md)

* [addPaymentRequest](docs/paymentportal/README.md#addpaymentrequest) - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* [getPaymentState](docs/paymentportal/README.md#getpaymentstate) - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### [peerDetection](docs/peerdetection/README.md)

* [getPeersList](docs/peerdetection/README.md#getpeerslist) - Lists known peers sorted by block height

### [tokenBurnController](docs/tokenburncontroller/README.md)

* [getBurningTransaction](docs/tokenburncontroller/README.md#getburningtransaction)
* [mainApp](docs/tokenburncontroller/README.md#mainapp)
* [prepareTransaction](docs/tokenburncontroller/README.md#preparetransaction)

### [tokenPrices](docs/tokenprices/README.md)

* [getTokenPrice](docs/tokenprices/README.md#gettokenprice) - Lists price and available volume for a certain token
* [getTokenPrices](docs/tokenprices/README.md#gettokenprices) - Lists all token prices and available volume

### [tokenVerification](docs/tokenverification/README.md)

* [checkToken](docs/tokenverification/README.md#checktoken) - Check a token verification
* [listBlocked](docs/tokenverification/README.md#listblocked) - Lists all blocked tokens
* [listGenuine](docs/tokenverification/README.md#listgenuine) - Lists all genuine tokens known
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
