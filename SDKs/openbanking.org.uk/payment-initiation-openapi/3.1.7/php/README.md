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


### domesticPayments

* `createDomesticPaymentConsentsJson` - Create Domestic Payment Consents
* `createDomesticPaymentConsentsRaw` - Create Domestic Payment Consents
* `createDomesticPaymentsJson` - Create Domestic Payments
* `createDomesticPaymentsRaw` - Create Domestic Payments
* `getDomesticPaymentConsentsConsentId` - Get Domestic Payment Consents
* `getDomesticPaymentConsentsConsentIdFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `getDomesticPaymentsDomesticPaymentId` - Get Domestic Payments

### domesticScheduledPayments

* `createDomesticScheduledPaymentConsentsJson` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentConsentsRaw` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentsJson` - Create Domestic Scheduled Payments
* `createDomesticScheduledPaymentsRaw` - Create Domestic Scheduled Payments
* `getDomesticScheduledPaymentConsentsConsentId` - Get Domestic Scheduled Payment Consents
* `getDomesticScheduledPaymentsDomesticScheduledPaymentId` - Get Domestic Scheduled Payments

### domesticStandingOrders

* `createDomesticStandingOrderConsentsJson` - Create Domestic Standing Order Consents
* `createDomesticStandingOrderConsentsRaw` - Create Domestic Standing Order Consents
* `createDomesticStandingOrdersJson` - Create Domestic Standing Orders
* `createDomesticStandingOrdersRaw` - Create Domestic Standing Orders
* `getDomesticStandingOrderConsentsConsentId` - Get Domestic Standing Order Consents
* `getDomesticStandingOrdersDomesticStandingOrderId` - Get Domestic Standing Orders

### filePayments

* `createFilePaymentConsentsConsentIdFileJson` - Create File Payment Consents
* `createFilePaymentConsentsConsentIdFileRaw` - Create File Payment Consents
* `createFilePaymentConsentsJson` - Create File Payment Consents
* `createFilePaymentConsentsRaw` - Create File Payment Consents
* `createFilePaymentsJson` - Create File Payments
* `createFilePaymentsRaw` - Create File Payments
* `getFilePaymentConsentsConsentId` - Get File Payment Consents
* `getFilePaymentConsentsConsentIdFile` - Get File Payment Consents
* `getFilePaymentsFilePaymentId` - Get File Payments
* `getFilePaymentsFilePaymentIdReportFile` - Get File Payments

### internationalPayments

* `createInternationalPaymentConsentsJson` - Create International Payment Consents
* `createInternationalPaymentConsentsRaw` - Create International Payment Consents
* `createInternationalPaymentsJson` - Create International Payments
* `createInternationalPaymentsRaw` - Create International Payments
* `getInternationalPaymentConsentsConsentId` - Get International Payment Consents
* `getInternationalPaymentConsentsConsentIdFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `getInternationalPaymentsInternationalPaymentId` - Get International Payments

### internationalScheduledPayments

* `createInternationalScheduledPaymentConsentsJson` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentConsentsRaw` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentsJson` - Create International Scheduled Payments
* `createInternationalScheduledPaymentsRaw` - Create International Scheduled Payments
* `getInternationalScheduledPaymentConsentsConsentId` - Get International Scheduled Payment Consents
* `getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `getInternationalScheduledPaymentsInternationalScheduledPaymentId` - Get International Scheduled Payments

### internationalStandingOrders

* `createInternationalStandingOrderConsentsJson` - Create International Standing Order Consents
* `createInternationalStandingOrderConsentsRaw` - Create International Standing Order Consents
* `createInternationalStandingOrdersJson` - Create International Standing Orders
* `createInternationalStandingOrdersRaw` - Create International Standing Orders
* `getInternationalStandingOrderConsentsConsentId` - Get International Standing Order Consents
* `getInternationalStandingOrdersInternationalStandingOrderPaymentId` - Get International Standing Orders

### paymentDetails

* `getDomesticPaymentsDomesticPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails` - Get Payment Details
* `getFilePaymentsFilePaymentIdPaymentDetails` - Get Payment Details
* `getInternationalPaymentsInternationalPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails` - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
