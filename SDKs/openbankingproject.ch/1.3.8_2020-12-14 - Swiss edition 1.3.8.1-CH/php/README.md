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


### accountInformationServiceAIS

* `createConsent` - Create consent
* `deleteConsent` - Delete Consent
* `getAccountList` - Read account list
* `getBalances` - Read balance
* `getConsentAuthorisation` - Get consent authorisation sub-resources request
* `getConsentInformation` - Get consent request
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getConsentStatus` - Consent status request
* `getTransactionDetails` - Read transaction details
* `getTransactionList` - Read transaction list of an account
* `readAccountDetails` - Read account details
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `updateConsentsPsuData` - Update PSU Data for consents

### commonServices

* `deleteSigningBasket` - Delete the signing basket
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateConsentsPsuData` - Update PSU Data for consents
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation
* `updateSigningBasketPsuData` - Update PSU data for signing basket

### confirmationOfFundsServicePIIS

* `checkAvailabilityOfFunds` - Confirmation of funds request

### paymentInitiationServicePIS

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePaymentJson` - Payment initiation request
* `initiatePaymentMultipart` - Payment initiation request
* `initiatePaymentRaw` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### signingBasketsServiceSBS

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
