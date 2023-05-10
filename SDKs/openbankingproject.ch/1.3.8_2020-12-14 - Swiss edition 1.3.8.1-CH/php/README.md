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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consents;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountReference16CH;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalInformationAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAllPsd2Enum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsWithBalanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConsentRequest();
    $request->digest = 'corrupti';
    $request->psuAccept = 'provident';
    $request->psuAcceptCharset = 'distinctio';
    $request->psuAcceptEncoding = 'quibusdam';
    $request->psuAcceptLanguage = 'unde';
    $request->psuCorporateID = 'nulla';
    $request->psuCorporateIDType = 'corrupti';
    $request->psuDeviceID = 'illum';
    $request->psuGeoLocation = 'vel';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'deserunt';
    $request->psuIDType = 'suscipit';
    $request->psuIPAddress = '112.76.228.14';
    $request->psuIPPort = 'delectus';
    $request->psuUserAgent = 'tempora';
    $request->signature = 'suscipit';
    $request->tppBrandLoggingInformation = 'molestiae';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'https://studious-lynx.info';
    $request->tppNotificationContentPreferred = 'excepturi';
    $request->tppNotificationURI = 'nisi';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://tangible-bathroom.info';
    $request->tppSignatureCertificate = 'veritatis';
    $request->xRequestID = 'deserunt';
    $request->consents = new Consents();
    $request->consents->access = new AccountAccess();
    $request->consents->access->accounts = [
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation = new AdditionalInformationAccess();
    $request->consents->access->additionalInformation->ownerName = [
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation->trustedBeneficiaries = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->allPsd2 = AccountAccessAllPsd2Enum::ALL_ACCOUNTS_WITH_OWNER_NAME;
    $request->consents->access->availableAccounts = AccountAccessAvailableAccountsEnum::ALL_ACCOUNTS_WITH_OWNER_NAME;
    $request->consents->access->availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum::ALL_ACCOUNTS;
    $request->consents->access->balances = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->restrictedTo = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->consents->access->transactions = [
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->combinedServiceIndicator = false;
    $request->consents->frequencyPerDay = 4;
    $request->consents->recurringIndicator = false;
    $request->consents->validUntil = DateTime::createFromFormat('Y-m-d', '2020-12-31');

    $requestSecurity = new CreateConsentSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->createConsent($request, $requestSecurity);

    if ($response->consentsResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountInformationServiceAIS](docs/accountinformationserviceais/README.md)

* [createConsent](docs/accountinformationserviceais/README.md#createconsent) - Create consent
* [deleteConsent](docs/accountinformationserviceais/README.md#deleteconsent) - Delete Consent
* [getAccountList](docs/accountinformationserviceais/README.md#getaccountlist) - Read account list
* [getBalances](docs/accountinformationserviceais/README.md#getbalances) - Read balance
* [getConsentAuthorisation](docs/accountinformationserviceais/README.md#getconsentauthorisation) - Get consent authorisation sub-resources request
* [getConsentInformation](docs/accountinformationserviceais/README.md#getconsentinformation) - Get consent request
* [getConsentScaStatus](docs/accountinformationserviceais/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getConsentStatus](docs/accountinformationserviceais/README.md#getconsentstatus) - Consent status request
* [getTransactionDetails](docs/accountinformationserviceais/README.md#gettransactiondetails) - Read transaction details
* [getTransactionList](docs/accountinformationserviceais/README.md#gettransactionlist) - Read transaction list of an account
* [readAccountDetails](docs/accountinformationserviceais/README.md#readaccountdetails) - Read account details
* [startConsentAuthorisation](docs/accountinformationserviceais/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [updateConsentsPsuData](docs/accountinformationserviceais/README.md#updateconsentspsudata) - Update PSU Data for consents

### [commonServices](docs/commonservices/README.md)

* [deleteSigningBasket](docs/commonservices/README.md#deletesigningbasket) - Delete the signing basket
* [getConsentScaStatus](docs/commonservices/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getPaymentCancellationScaStatus](docs/commonservices/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInitiationAuthorisation](docs/commonservices/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationScaStatus](docs/commonservices/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getSigningBasketAuthorisation](docs/commonservices/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](docs/commonservices/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](docs/commonservices/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [startConsentAuthorisation](docs/commonservices/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [startPaymentAuthorisation](docs/commonservices/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](docs/commonservices/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [startSigningBasketAuthorisation](docs/commonservices/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateConsentsPsuData](docs/commonservices/README.md#updateconsentspsudata) - Update PSU Data for consents
* [updatePaymentCancellationPsuData](docs/commonservices/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](docs/commonservices/README.md#updatepaymentpsudata) - Update PSU data for payment initiation
* [updateSigningBasketPsuData](docs/commonservices/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket

### [confirmationOfFundsServicePIIS](docs/confirmationoffundsservicepiis/README.md)

* [checkAvailabilityOfFunds](docs/confirmationoffundsservicepiis/README.md#checkavailabilityoffunds) - Confirmation of funds request

### [paymentInitiationServicePIS](docs/paymentinitiationservicepis/README.md)

* [cancelPayment](docs/paymentinitiationservicepis/README.md#cancelpayment) - Payment cancellation request
* [getPaymentCancellationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInformation](docs/paymentinitiationservicepis/README.md#getpaymentinformation) - Get payment information
* [getPaymentInitiationAuthorisation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationCancellationAuthorisationInformation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationcancellationauthorisationinformation) - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* [getPaymentInitiationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getPaymentInitiationStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationstatus) - Payment initiation status request
* [initiatePaymentJson](docs/paymentinitiationservicepis/README.md#initiatepaymentjson) - Payment initiation request
* [initiatePaymentMultipart](docs/paymentinitiationservicepis/README.md#initiatepaymentmultipart) - Payment initiation request
* [initiatePaymentRaw](docs/paymentinitiationservicepis/README.md#initiatepaymentraw) - Payment initiation request
* [startPaymentAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [updatePaymentCancellationPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentpsudata) - Update PSU data for payment initiation

### [signingBasketsServiceSBS](docs/signingbasketsservicesbs/README.md)

* [createSigningBasket](docs/signingbasketsservicesbs/README.md#createsigningbasket) - Create a signing basket resource
* [deleteSigningBasket](docs/signingbasketsservicesbs/README.md#deletesigningbasket) - Delete the signing basket
* [getSigningBasket](docs/signingbasketsservicesbs/README.md#getsigningbasket) - Returns the content of an signing basket object
* [getSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [startSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateSigningBasketPsuData](docs/signingbasketsservicesbs/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
