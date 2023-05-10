# internationalScheduledPayments

### Available Operations

* [createInternationalScheduledPaymentConsentsJson](#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentConsentsRaw](#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentsJson](#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [createInternationalScheduledPaymentsRaw](#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [getInternationalScheduledPaymentConsentsConsentId](#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation](#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [getInternationalScheduledPaymentsInternationalScheduledPaymentId](#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

## createInternationalScheduledPaymentConsentsJson

Create International Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduledConsent5DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalScheduledPaymentConsentsJsonRequest();
    $request->authorization = 'voluptatem';
    $request->obWriteInternationalScheduledConsent5 = new OBWriteInternationalScheduledConsent5();
    $request->obWriteInternationalScheduledConsent5->data = new OBWriteInternationalScheduledConsent5Data();
    $request->obWriteInternationalScheduledConsent5->data->authorisation = new OBWriteInternationalScheduledConsent5DataAuthorisation();
    $request->obWriteInternationalScheduledConsent5->data->authorisation->authorisationType = OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum::SINGLE;
    $request->obWriteInternationalScheduledConsent5->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-27T06:14:44.746Z');
    $request->obWriteInternationalScheduledConsent5->data->initiation = new OBWriteInternationalScheduledConsent5DataInitiation();
    $request->obWriteInternationalScheduledConsent5->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::BORNE_BY_CREDITOR;
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor = new OBWriteInternationalScheduledConsent5DataInitiationCreditor();
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->name = 'Brittany Bailey';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->addressLine = [
        'corporis',
        'et',
        'blanditiis',
        'ex',
    ];
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::CORRESPONDENCE;
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->buildingNumber = 'sit';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->country = 'Isle of Man';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->countrySubDivision = 'nostrum';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->department = 'saepe';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->postCode = '02926-1052';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->streetName = 'quidem';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->subDepartment = 'atque';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditor->postalAddress->townName = 'laborum';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAccount = new OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount();
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAccount->identification = 'nam';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAccount->name = 'Brent Abernathy';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAccount->schemeName = 'voluptate';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAccount->secondaryIdentification = 'unde';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent = new OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent();
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->identification = 'reiciendis';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->name = 'Marcos Windler MD';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->addressLine = [
        'reprehenderit',
        'facere',
        'fuga',
    ];
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::PO_BOX;
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->buildingNumber = 'mollitia';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->country = 'Greece';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'voluptatem';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->department = 'quisquam';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->postCode = '05495-3680';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->streetName = 'esse';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->subDepartment = 'amet';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->postalAddress->townName = 'assumenda';
    $request->obWriteInternationalScheduledConsent5->data->initiation->creditorAgent->schemeName = 'ea';
    $request->obWriteInternationalScheduledConsent5->data->initiation->currencyOfTransfer = 'atque';
    $request->obWriteInternationalScheduledConsent5->data->initiation->debtorAccount = new OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount();
    $request->obWriteInternationalScheduledConsent5->data->initiation->debtorAccount->identification = 'error';
    $request->obWriteInternationalScheduledConsent5->data->initiation->debtorAccount->name = 'Frankie Thompson';
    $request->obWriteInternationalScheduledConsent5->data->initiation->debtorAccount->schemeName = 'aspernatur';
    $request->obWriteInternationalScheduledConsent5->data->initiation->debtorAccount->secondaryIdentification = 'ex';
    $request->obWriteInternationalScheduledConsent5->data->initiation->destinationCountryCode = 'maiores';
    $request->obWriteInternationalScheduledConsent5->data->initiation->endToEndIdentification = 'corrupti';
    $request->obWriteInternationalScheduledConsent5->data->initiation->exchangeRateInformation = new OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation();
    $request->obWriteInternationalScheduledConsent5->data->initiation->exchangeRateInformation->contractIdentification = 'at';
    $request->obWriteInternationalScheduledConsent5->data->initiation->exchangeRateInformation->exchangeRate = 6216.93;
    $request->obWriteInternationalScheduledConsent5->data->initiation->exchangeRateInformation->rateType = OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum::AGREED;
    $request->obWriteInternationalScheduledConsent5->data->initiation->exchangeRateInformation->unitCurrency = 'suscipit';
    $request->obWriteInternationalScheduledConsent5->data->initiation->extendedPurpose = 'repudiandae';
    $request->obWriteInternationalScheduledConsent5->data->initiation->instructedAmount = new OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount();
    $request->obWriteInternationalScheduledConsent5->data->initiation->instructedAmount->amount = 'atque';
    $request->obWriteInternationalScheduledConsent5->data->initiation->instructedAmount->currency = 'atque';
    $request->obWriteInternationalScheduledConsent5->data->initiation->instructionIdentification = 'sunt';
    $request->obWriteInternationalScheduledConsent5->data->initiation->instructionPriority = OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum::URGENT;
    $request->obWriteInternationalScheduledConsent5->data->initiation->localInstrument = 'dolorum';
    $request->obWriteInternationalScheduledConsent5->data->initiation->purpose = 'repellendus';
    $request->obWriteInternationalScheduledConsent5->data->initiation->remittanceInformation = new OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation();
    $request->obWriteInternationalScheduledConsent5->data->initiation->remittanceInformation->reference = 'labore';
    $request->obWriteInternationalScheduledConsent5->data->initiation->remittanceInformation->unstructured = 'reiciendis';
    $request->obWriteInternationalScheduledConsent5->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T06:42:09.189Z');
    $request->obWriteInternationalScheduledConsent5->data->initiation->supplementaryData = [
        'accusantium' => 'beatae',
    ];
    $request->obWriteInternationalScheduledConsent5->data->permission = OBWriteInternationalScheduledConsent5DataPermissionEnum::CREATE;
    $request->obWriteInternationalScheduledConsent5->data->readRefundAccount = OBWriteInternationalScheduledConsent5DataReadRefundAccountEnum::NO;
    $request->obWriteInternationalScheduledConsent5->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteInternationalScheduledConsent5->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::CA;
    $request->obWriteInternationalScheduledConsent5->data->scaSupportData->referencePaymentOrderId = 'laboriosam';
    $request->obWriteInternationalScheduledConsent5->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::CONTACTLESS_TRAVEL;
    $request->obWriteInternationalScheduledConsent5->risk = new OBRisk1();
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->addressLine = [
        'molestias',
        'magnam',
        'saepe',
        'consequuntur',
    ];
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->buildingNumber = 'occaecati';
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->country = 'Timor-Leste';
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->countrySubDivision = 'perspiciatis';
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->postCode = '29511';
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->streetName = 'id';
    $request->obWriteInternationalScheduledConsent5->risk->deliveryAddress->townName = 'quis';
    $request->obWriteInternationalScheduledConsent5->risk->merchantCategoryCode = 'reprehenderit';
    $request->obWriteInternationalScheduledConsent5->risk->merchantCustomerIdentification = 'error';
    $request->obWriteInternationalScheduledConsent5->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::BILL_PAYMENT;
    $request->xCustomerUserAgent = 'corporis';
    $request->xFapiAuthDate = 'quidem';
    $request->xFapiCustomerIpAddress = 'eveniet';
    $request->xFapiInteractionId = 'non';
    $request->xIdempotencyKey = 'vero';
    $request->xJwsSignature = 'doloremque';

    $requestSecurity = new CreateInternationalScheduledPaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->createInternationalScheduledPaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalScheduledPaymentConsentsRaw

Create International Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalScheduledPaymentConsentsRawRequest();
    $request->authorization = 'iure';
    $request->requestBody = 'ipsa';
    $request->xCustomerUserAgent = 'totam';
    $request->xFapiAuthDate = 'quae';
    $request->xFapiCustomerIpAddress = 'molestiae';
    $request->xFapiInteractionId = 'eveniet';
    $request->xIdempotencyKey = 'qui';
    $request->xJwsSignature = 'cum';

    $requestSecurity = new CreateInternationalScheduledPaymentConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->createInternationalScheduledPaymentConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalScheduledPaymentsJson

Create International Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationExchangeRateInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalScheduled3DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalScheduledPaymentsJsonRequest();
    $request->authorization = 'iure';
    $request->obWriteInternationalScheduled3 = new OBWriteInternationalScheduled3();
    $request->obWriteInternationalScheduled3->data = new OBWriteInternationalScheduled3Data();
    $request->obWriteInternationalScheduled3->data->consentId = 'necessitatibus';
    $request->obWriteInternationalScheduled3->data->initiation = new OBWriteInternationalScheduled3DataInitiation();
    $request->obWriteInternationalScheduled3->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::BORNE_BY_CREDITOR;
    $request->obWriteInternationalScheduled3->data->initiation->creditor = new OBWriteInternationalScheduled3DataInitiationCreditor();
    $request->obWriteInternationalScheduled3->data->initiation->creditor->name = 'Kelvin Lehner';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->addressLine = [
        'repellat',
        'alias',
    ];
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::DELIVERY_TO;
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->buildingNumber = 'perspiciatis';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->country = 'Republic of Korea';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->countrySubDivision = 'mollitia';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->department = 'voluptas';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->postCode = '99163';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->streetName = 'dolore';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->subDepartment = 'dolorum';
    $request->obWriteInternationalScheduled3->data->initiation->creditor->postalAddress->townName = 'nesciunt';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAccount = new OBWriteInternationalScheduled3DataInitiationCreditorAccount();
    $request->obWriteInternationalScheduled3->data->initiation->creditorAccount->identification = 'quae';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAccount->name = 'Arturo Hagenes';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAccount->schemeName = 'ut';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAccount->secondaryIdentification = 'culpa';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent = new OBWriteInternationalScheduled3DataInitiationCreditorAgent();
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->identification = 'adipisci';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->name = 'Armando Kemmer';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->addressLine = [
        'provident',
        'quis',
    ];
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::MAIL_TO;
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->buildingNumber = 'reiciendis';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->country = 'Montenegro';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'aspernatur';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->department = 'ullam';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->postCode = '63658';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->streetName = 'animi';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->subDepartment = 'ex';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->postalAddress->townName = 'aliquid';
    $request->obWriteInternationalScheduled3->data->initiation->creditorAgent->schemeName = 'accusantium';
    $request->obWriteInternationalScheduled3->data->initiation->currencyOfTransfer = 'repellat';
    $request->obWriteInternationalScheduled3->data->initiation->debtorAccount = new OBWriteInternationalScheduled3DataInitiationDebtorAccount();
    $request->obWriteInternationalScheduled3->data->initiation->debtorAccount->identification = 'doloribus';
    $request->obWriteInternationalScheduled3->data->initiation->debtorAccount->name = 'Arlene Reichert';
    $request->obWriteInternationalScheduled3->data->initiation->debtorAccount->schemeName = 'laborum';
    $request->obWriteInternationalScheduled3->data->initiation->debtorAccount->secondaryIdentification = 'placeat';
    $request->obWriteInternationalScheduled3->data->initiation->destinationCountryCode = 'modi';
    $request->obWriteInternationalScheduled3->data->initiation->endToEndIdentification = 'voluptatibus';
    $request->obWriteInternationalScheduled3->data->initiation->exchangeRateInformation = new OBWriteInternationalScheduled3DataInitiationExchangeRateInformation();
    $request->obWriteInternationalScheduled3->data->initiation->exchangeRateInformation->contractIdentification = 'molestias';
    $request->obWriteInternationalScheduled3->data->initiation->exchangeRateInformation->exchangeRate = 8897.94;
    $request->obWriteInternationalScheduled3->data->initiation->exchangeRateInformation->rateType = OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum::INDICATIVE;
    $request->obWriteInternationalScheduled3->data->initiation->exchangeRateInformation->unitCurrency = 'cumque';
    $request->obWriteInternationalScheduled3->data->initiation->extendedPurpose = 'vitae';
    $request->obWriteInternationalScheduled3->data->initiation->instructedAmount = new OBWriteInternationalScheduled3DataInitiationInstructedAmount();
    $request->obWriteInternationalScheduled3->data->initiation->instructedAmount->amount = 'rerum';
    $request->obWriteInternationalScheduled3->data->initiation->instructedAmount->currency = 'tempora';
    $request->obWriteInternationalScheduled3->data->initiation->instructionIdentification = 'quis';
    $request->obWriteInternationalScheduled3->data->initiation->instructionPriority = OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnum::NORMAL;
    $request->obWriteInternationalScheduled3->data->initiation->localInstrument = 'fugit';
    $request->obWriteInternationalScheduled3->data->initiation->purpose = 'cumque';
    $request->obWriteInternationalScheduled3->data->initiation->remittanceInformation = new OBWriteInternationalScheduled3DataInitiationRemittanceInformation();
    $request->obWriteInternationalScheduled3->data->initiation->remittanceInformation->reference = 'quae';
    $request->obWriteInternationalScheduled3->data->initiation->remittanceInformation->unstructured = 'perferendis';
    $request->obWriteInternationalScheduled3->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T21:40:40.524Z');
    $request->obWriteInternationalScheduled3->data->initiation->supplementaryData = [
        'eius' => 'rem',
        'at' => 'impedit',
    ];
    $request->obWriteInternationalScheduled3->risk = new OBRisk1();
    $request->obWriteInternationalScheduled3->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->addressLine = [
        'sapiente',
    ];
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->buildingNumber = 'eum';
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->country = 'Bouvet Island (Bouvetoya)';
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->countrySubDivision = 'minima';
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->postCode = '55979';
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->streetName = 'illum';
    $request->obWriteInternationalScheduled3->risk->deliveryAddress->townName = 'eaque';
    $request->obWriteInternationalScheduled3->risk->merchantCategoryCode = 'earum';
    $request->obWriteInternationalScheduled3->risk->merchantCustomerIdentification = 'perspiciatis';
    $request->obWriteInternationalScheduled3->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'debitis';
    $request->xFapiAuthDate = 'aliquid';
    $request->xFapiCustomerIpAddress = 'porro';
    $request->xFapiInteractionId = 'suscipit';
    $request->xIdempotencyKey = 'dolorem';
    $request->xJwsSignature = 'fugit';

    $requestSecurity = new CreateInternationalScheduledPaymentsJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->createInternationalScheduledPaymentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalScheduledPaymentsRaw

Create International Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalScheduledPaymentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalScheduledPaymentsRawRequest();
    $request->authorization = 'cumque';
    $request->requestBody = 'fuga';
    $request->xCustomerUserAgent = 'ratione';
    $request->xFapiAuthDate = 'animi';
    $request->xFapiCustomerIpAddress = 'necessitatibus';
    $request->xFapiInteractionId = 'nulla';
    $request->xIdempotencyKey = 'consequatur';
    $request->xJwsSignature = 'quasi';

    $requestSecurity = new CreateInternationalScheduledPaymentsRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->createInternationalScheduledPaymentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalScheduledPaymentConsentsConsentId

Get International Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalScheduledPaymentConsentsConsentIdRequest();
    $request->authorization = 'et';
    $request->consentId = 'ducimus';
    $request->xCustomerUserAgent = 'natus';
    $request->xFapiAuthDate = 'occaecati';
    $request->xFapiCustomerIpAddress = 'suscipit';
    $request->xFapiInteractionId = 'adipisci';

    $requestSecurity = new GetInternationalScheduledPaymentConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->getInternationalScheduledPaymentConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation

Get International Scheduled Payment Consents Funds Confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest();
    $request->authorization = 'quasi';
    $request->consentId = 'magni';
    $request->xCustomerUserAgent = 'doloribus';
    $request->xFapiAuthDate = 'nulla';
    $request->xFapiCustomerIpAddress = 'necessitatibus';
    $request->xFapiInteractionId = 'ipsa';

    $requestSecurity = new GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalScheduledPaymentsInternationalScheduledPaymentId

Get International Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest();
    $request->authorization = 'tempora';
    $request->internationalScheduledPaymentId = 'nihil';
    $request->xCustomerUserAgent = 'molestiae';
    $request->xFapiAuthDate = 'dicta';
    $request->xFapiCustomerIpAddress = 'iusto';
    $request->xFapiInteractionId = 'esse';

    $requestSecurity = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalScheduledPayments->getInternationalScheduledPaymentsInternationalScheduledPaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
