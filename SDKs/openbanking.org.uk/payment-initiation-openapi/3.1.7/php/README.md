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
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticPaymentConsentsJsonRequest();
    $request->authorization = 'corrupti';
    $request->obWriteDomesticConsent4 = new OBWriteDomesticConsent4();
    $request->obWriteDomesticConsent4->data = new OBWriteDomesticConsent4Data();
    $request->obWriteDomesticConsent4->data->authorisation = new OBWriteDomesticConsent4DataAuthorisation();
    $request->obWriteDomesticConsent4->data->authorisation->authorisationType = OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum::SINGLE;
    $request->obWriteDomesticConsent4->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->obWriteDomesticConsent4->data->initiation = new OBWriteDomesticConsent4DataInitiation();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->identification = 'unde';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->name = 'Johnnie Stamm';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->schemeName = 'deserunt';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->secondaryIdentification = 'suscipit';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressLine = [
        'magnam',
        'debitis',
    ];
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::BUSINESS;
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->buildingNumber = 'delectus';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->country = 'Ethiopia';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->countrySubDivision = 'suscipit';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->department = 'molestiae';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->postCode = '85453-9803';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->streetName = 'veritatis';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->subDepartment = 'deserunt';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->townName = 'perferendis';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount();
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->identification = 'ipsam';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->name = 'Timmy Satterfield';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->schemeName = 'at';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->secondaryIdentification = 'maiores';
    $request->obWriteDomesticConsent4->data->initiation->endToEndIdentification = 'molestiae';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount();
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->amount = 'quod';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->currency = 'quod';
    $request->obWriteDomesticConsent4->data->initiation->instructionIdentification = 'esse';
    $request->obWriteDomesticConsent4->data->initiation->localInstrument = 'totam';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation();
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->reference = 'porro';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->unstructured = 'dolorum';
    $request->obWriteDomesticConsent4->data->initiation->supplementaryData = [
        'nam' => 'officia',
    ];
    $request->obWriteDomesticConsent4->data->readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum::YES;
    $request->obWriteDomesticConsent4->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteDomesticConsent4->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::CA;
    $request->obWriteDomesticConsent4->data->scaSupportData->referencePaymentOrderId = 'deleniti';
    $request->obWriteDomesticConsent4->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::PARTY_TO_PARTY;
    $request->obWriteDomesticConsent4->risk = new OBRisk1();
    $request->obWriteDomesticConsent4->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticConsent4->risk->deliveryAddress->addressLine = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->obWriteDomesticConsent4->risk->deliveryAddress->buildingNumber = 'modi';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->country = 'Cocos (Keeling) Islands';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->countrySubDivision = 'impedit';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->postCode = '42510-3616';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->streetName = 'dolor';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->townName = 'natus';
    $request->obWriteDomesticConsent4->risk->merchantCategoryCode = 'laboriosam';
    $request->obWriteDomesticConsent4->risk->merchantCustomerIdentification = 'hic';
    $request->obWriteDomesticConsent4->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'fuga';
    $request->xFapiAuthDate = 'in';
    $request->xFapiCustomerIpAddress = 'corporis';
    $request->xFapiInteractionId = 'iste';
    $request->xIdempotencyKey = 'iure';
    $request->xJwsSignature = 'saepe';

    $requestSecurity = new CreateDomesticPaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->createDomesticPaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [domesticPayments](docs/domesticpayments/README.md)

* [createDomesticPaymentConsentsJson](docs/domesticpayments/README.md#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [createDomesticPaymentConsentsRaw](docs/domesticpayments/README.md#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [createDomesticPaymentsJson](docs/domesticpayments/README.md#createdomesticpaymentsjson) - Create Domestic Payments
* [createDomesticPaymentsRaw](docs/domesticpayments/README.md#createdomesticpaymentsraw) - Create Domestic Payments
* [getDomesticPaymentConsentsConsentId](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [getDomesticPaymentConsentsConsentIdFundsConfirmation](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [getDomesticPaymentsDomesticPaymentId](docs/domesticpayments/README.md#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

### [domesticScheduledPayments](docs/domesticscheduledpayments/README.md)

* [createDomesticScheduledPaymentConsentsJson](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentConsentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentsJson](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [createDomesticScheduledPaymentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [getDomesticScheduledPaymentConsentsConsentId](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [getDomesticScheduledPaymentsDomesticScheduledPaymentId](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

### [domesticStandingOrders](docs/domesticstandingorders/README.md)

* [createDomesticStandingOrderConsentsJson](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [createDomesticStandingOrderConsentsRaw](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [createDomesticStandingOrdersJson](docs/domesticstandingorders/README.md#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [createDomesticStandingOrdersRaw](docs/domesticstandingorders/README.md#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [getDomesticStandingOrderConsentsConsentId](docs/domesticstandingorders/README.md#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [getDomesticStandingOrdersDomesticStandingOrderId](docs/domesticstandingorders/README.md#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

### [filePayments](docs/filepayments/README.md)

* [createFilePaymentConsentsConsentIdFileJson](docs/filepayments/README.md#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [createFilePaymentConsentsConsentIdFileRaw](docs/filepayments/README.md#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [createFilePaymentConsentsJson](docs/filepayments/README.md#createfilepaymentconsentsjson) - Create File Payment Consents
* [createFilePaymentConsentsRaw](docs/filepayments/README.md#createfilepaymentconsentsraw) - Create File Payment Consents
* [createFilePaymentsJson](docs/filepayments/README.md#createfilepaymentsjson) - Create File Payments
* [createFilePaymentsRaw](docs/filepayments/README.md#createfilepaymentsraw) - Create File Payments
* [getFilePaymentConsentsConsentId](docs/filepayments/README.md#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [getFilePaymentConsentsConsentIdFile](docs/filepayments/README.md#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [getFilePaymentsFilePaymentId](docs/filepayments/README.md#getfilepaymentsfilepaymentid) - Get File Payments
* [getFilePaymentsFilePaymentIdReportFile](docs/filepayments/README.md#getfilepaymentsfilepaymentidreportfile) - Get File Payments

### [internationalPayments](docs/internationalpayments/README.md)

* [createInternationalPaymentConsentsJson](docs/internationalpayments/README.md#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [createInternationalPaymentConsentsRaw](docs/internationalpayments/README.md#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [createInternationalPaymentsJson](docs/internationalpayments/README.md#createinternationalpaymentsjson) - Create International Payments
* [createInternationalPaymentsRaw](docs/internationalpayments/README.md#createinternationalpaymentsraw) - Create International Payments
* [getInternationalPaymentConsentsConsentId](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [getInternationalPaymentConsentsConsentIdFundsConfirmation](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [getInternationalPaymentsInternationalPaymentId](docs/internationalpayments/README.md#getinternationalpaymentsinternationalpaymentid) - Get International Payments

### [internationalScheduledPayments](docs/internationalscheduledpayments/README.md)

* [createInternationalScheduledPaymentConsentsJson](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentConsentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentsJson](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [createInternationalScheduledPaymentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [getInternationalScheduledPaymentConsentsConsentId](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [getInternationalScheduledPaymentsInternationalScheduledPaymentId](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

### [internationalStandingOrders](docs/internationalstandingorders/README.md)

* [createInternationalStandingOrderConsentsJson](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [createInternationalStandingOrderConsentsRaw](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [createInternationalStandingOrdersJson](docs/internationalstandingorders/README.md#createinternationalstandingordersjson) - Create International Standing Orders
* [createInternationalStandingOrdersRaw](docs/internationalstandingorders/README.md#createinternationalstandingordersraw) - Create International Standing Orders
* [getInternationalStandingOrderConsentsConsentId](docs/internationalstandingorders/README.md#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [getInternationalStandingOrdersInternationalStandingOrderPaymentId](docs/internationalstandingorders/README.md#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

### [paymentDetails](docs/paymentdetails/README.md)

* [getDomesticPaymentsDomesticPaymentIdPaymentDetails](docs/paymentdetails/README.md#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails](docs/paymentdetails/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails](docs/paymentdetails/README.md#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [getFilePaymentsFilePaymentIdPaymentDetails](docs/paymentdetails/README.md#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [getInternationalPaymentsInternationalPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
