# internationalPayments

### Available Operations

* [createInternationalPaymentConsentsJson](#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [createInternationalPaymentConsentsRaw](#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [createInternationalPaymentsJson](#createinternationalpaymentsjson) - Create International Payments
* [createInternationalPaymentsRaw](#createinternationalpaymentsraw) - Create International Payments
* [getInternationalPaymentConsentsConsentId](#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [getInternationalPaymentConsentsConsentIdFundsConfirmation](#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [getInternationalPaymentsInternationalPaymentId](#getinternationalpaymentsinternationalpaymentid) - Get International Payments

## createInternationalPaymentConsentsJson

Create International Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationExchangeRateInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalConsent5DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalPaymentConsentsJsonRequest();
    $request->authorization = 'quas';
    $request->obWriteInternationalConsent5 = new OBWriteInternationalConsent5();
    $request->obWriteInternationalConsent5->data = new OBWriteInternationalConsent5Data();
    $request->obWriteInternationalConsent5->data->authorisation = new OBWriteInternationalConsent5DataAuthorisation();
    $request->obWriteInternationalConsent5->data->authorisation->authorisationType = OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum::ANY;
    $request->obWriteInternationalConsent5->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T13:34:46.515Z');
    $request->obWriteInternationalConsent5->data->initiation = new OBWriteInternationalConsent5DataInitiation();
    $request->obWriteInternationalConsent5->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::FOLLOWING_SERVICE_LEVEL;
    $request->obWriteInternationalConsent5->data->initiation->creditor = new OBWriteInternationalConsent5DataInitiationCreditor();
    $request->obWriteInternationalConsent5->data->initiation->creditor->name = 'Jody Schuster';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->addressLine = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::POSTAL;
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->buildingNumber = 'culpa';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->country = 'Iceland';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->countrySubDivision = 'tenetur';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->department = 'quae';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->postCode = '44278-7039';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->streetName = 'dicta';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->subDepartment = 'ullam';
    $request->obWriteInternationalConsent5->data->initiation->creditor->postalAddress->townName = 'reprehenderit';
    $request->obWriteInternationalConsent5->data->initiation->creditorAccount = new OBWriteInternationalConsent5DataInitiationCreditorAccount();
    $request->obWriteInternationalConsent5->data->initiation->creditorAccount->identification = 'ullam';
    $request->obWriteInternationalConsent5->data->initiation->creditorAccount->name = 'Margaret Lemke';
    $request->obWriteInternationalConsent5->data->initiation->creditorAccount->schemeName = 'ex';
    $request->obWriteInternationalConsent5->data->initiation->creditorAccount->secondaryIdentification = 'deleniti';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent = new OBWriteInternationalConsent5DataInitiationCreditorAgent();
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->identification = 'itaque';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->name = 'Roger Monahan PhD';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->addressLine = [
        'voluptate',
    ];
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::BUSINESS;
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->buildingNumber = 'minima';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->country = 'Belize';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'consectetur';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->department = 'adipisci';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->postCode = '80505-4605';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->streetName = 'non';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->subDepartment = 'voluptatem';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->postalAddress->townName = 'dolor';
    $request->obWriteInternationalConsent5->data->initiation->creditorAgent->schemeName = 'occaecati';
    $request->obWriteInternationalConsent5->data->initiation->currencyOfTransfer = 'numquam';
    $request->obWriteInternationalConsent5->data->initiation->debtorAccount = new OBWriteInternationalConsent5DataInitiationDebtorAccount();
    $request->obWriteInternationalConsent5->data->initiation->debtorAccount->identification = 'impedit';
    $request->obWriteInternationalConsent5->data->initiation->debtorAccount->name = 'Loretta Anderson DVM';
    $request->obWriteInternationalConsent5->data->initiation->debtorAccount->schemeName = 'natus';
    $request->obWriteInternationalConsent5->data->initiation->debtorAccount->secondaryIdentification = 'velit';
    $request->obWriteInternationalConsent5->data->initiation->destinationCountryCode = 'voluptatibus';
    $request->obWriteInternationalConsent5->data->initiation->endToEndIdentification = 'voluptas';
    $request->obWriteInternationalConsent5->data->initiation->exchangeRateInformation = new OBWriteInternationalConsent5DataInitiationExchangeRateInformation();
    $request->obWriteInternationalConsent5->data->initiation->exchangeRateInformation->contractIdentification = 'asperiores';
    $request->obWriteInternationalConsent5->data->initiation->exchangeRateInformation->exchangeRate = 456.59;
    $request->obWriteInternationalConsent5->data->initiation->exchangeRateInformation->rateType = OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum::AGREED;
    $request->obWriteInternationalConsent5->data->initiation->exchangeRateInformation->unitCurrency = 'quaerat';
    $request->obWriteInternationalConsent5->data->initiation->extendedPurpose = 'consequuntur';
    $request->obWriteInternationalConsent5->data->initiation->instructedAmount = new OBWriteInternationalConsent5DataInitiationInstructedAmount();
    $request->obWriteInternationalConsent5->data->initiation->instructedAmount->amount = 'repellendus';
    $request->obWriteInternationalConsent5->data->initiation->instructedAmount->currency = 'officia';
    $request->obWriteInternationalConsent5->data->initiation->instructionIdentification = 'maxime';
    $request->obWriteInternationalConsent5->data->initiation->instructionPriority = OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum::NORMAL;
    $request->obWriteInternationalConsent5->data->initiation->localInstrument = 'officia';
    $request->obWriteInternationalConsent5->data->initiation->purpose = 'asperiores';
    $request->obWriteInternationalConsent5->data->initiation->remittanceInformation = new OBWriteInternationalConsent5DataInitiationRemittanceInformation();
    $request->obWriteInternationalConsent5->data->initiation->remittanceInformation->reference = 'nemo';
    $request->obWriteInternationalConsent5->data->initiation->remittanceInformation->unstructured = 'quae';
    $request->obWriteInternationalConsent5->data->initiation->supplementaryData = [
        'porro' => 'quod',
        'labore' => 'ab',
    ];
    $request->obWriteInternationalConsent5->data->readRefundAccount = OBWriteInternationalConsent5DataReadRefundAccountEnum::NO;
    $request->obWriteInternationalConsent5->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteInternationalConsent5->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::SCA;
    $request->obWriteInternationalConsent5->data->scaSupportData->referencePaymentOrderId = 'id';
    $request->obWriteInternationalConsent5->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::ECOMMERCE_GOODS;
    $request->obWriteInternationalConsent5->risk = new OBRisk1();
    $request->obWriteInternationalConsent5->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternationalConsent5->risk->deliveryAddress->addressLine = [
        'culpa',
    ];
    $request->obWriteInternationalConsent5->risk->deliveryAddress->buildingNumber = 'est';
    $request->obWriteInternationalConsent5->risk->deliveryAddress->country = 'Uganda';
    $request->obWriteInternationalConsent5->risk->deliveryAddress->countrySubDivision = 'totam';
    $request->obWriteInternationalConsent5->risk->deliveryAddress->postCode = '44542-8774';
    $request->obWriteInternationalConsent5->risk->deliveryAddress->streetName = 'in';
    $request->obWriteInternationalConsent5->risk->deliveryAddress->townName = 'corporis';
    $request->obWriteInternationalConsent5->risk->merchantCategoryCode = 'reiciendis';
    $request->obWriteInternationalConsent5->risk->merchantCustomerIdentification = 'assumenda';
    $request->obWriteInternationalConsent5->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::ECOMMERCE_GOODS;
    $request->xCustomerUserAgent = 'recusandae';
    $request->xFapiAuthDate = 'aliquid';
    $request->xFapiCustomerIpAddress = 'aperiam';
    $request->xFapiInteractionId = 'cum';
    $request->xIdempotencyKey = 'consectetur';
    $request->xJwsSignature = 'in';

    $requestSecurity = new CreateInternationalPaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->createInternationalPaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalPaymentConsentsRaw

Create International Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalPaymentConsentsRawRequest();
    $request->authorization = 'exercitationem';
    $request->requestBody = 'earum';
    $request->xCustomerUserAgent = 'facere';
    $request->xFapiAuthDate = 'numquam';
    $request->xFapiCustomerIpAddress = 'doloribus';
    $request->xFapiInteractionId = 'suscipit';
    $request->xIdempotencyKey = 'reiciendis';
    $request->xJwsSignature = 'quidem';

    $requestSecurity = new CreateInternationalPaymentConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->createInternationalPaymentConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalPaymentsJson

Create International Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationExchangeRateInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationInstructionPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternational3DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalPaymentsJsonRequest();
    $request->authorization = 'saepe';
    $request->obWriteInternational3 = new OBWriteInternational3();
    $request->obWriteInternational3->data = new OBWriteInternational3Data();
    $request->obWriteInternational3->data->consentId = 'necessitatibus';
    $request->obWriteInternational3->data->initiation = new OBWriteInternational3DataInitiation();
    $request->obWriteInternational3->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::BORNE_BY_DEBTOR;
    $request->obWriteInternational3->data->initiation->creditor = new OBWriteInternational3DataInitiationCreditor();
    $request->obWriteInternational3->data->initiation->creditor->name = 'Ollie Flatley';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->addressLine = [
        'dignissimos',
    ];
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::STATEMENT;
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->buildingNumber = 'debitis';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->country = 'Denmark';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->countrySubDivision = 'corporis';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->department = 'harum';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->postCode = '09718';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->streetName = 'similique';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->subDepartment = 'tempora';
    $request->obWriteInternational3->data->initiation->creditor->postalAddress->townName = 'aspernatur';
    $request->obWriteInternational3->data->initiation->creditorAccount = new OBWriteInternational3DataInitiationCreditorAccount();
    $request->obWriteInternational3->data->initiation->creditorAccount->identification = 'voluptas';
    $request->obWriteInternational3->data->initiation->creditorAccount->name = 'Melanie Hane';
    $request->obWriteInternational3->data->initiation->creditorAccount->schemeName = 'adipisci';
    $request->obWriteInternational3->data->initiation->creditorAccount->secondaryIdentification = 'minus';
    $request->obWriteInternational3->data->initiation->creditorAgent = new OBWriteInternational3DataInitiationCreditorAgent();
    $request->obWriteInternational3->data->initiation->creditorAgent->identification = 'dolores';
    $request->obWriteInternational3->data->initiation->creditorAgent->name = 'Harvey Gulgowski';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->addressLine = [
        'ullam',
        'adipisci',
        'cum',
        'blanditiis',
    ];
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::PO_BOX;
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->buildingNumber = 'hic';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->country = 'Cook Islands';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'culpa';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->department = 'corrupti';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->postCode = '59370-6191';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->streetName = 'asperiores';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->subDepartment = 'facilis';
    $request->obWriteInternational3->data->initiation->creditorAgent->postalAddress->townName = 'voluptate';
    $request->obWriteInternational3->data->initiation->creditorAgent->schemeName = 'expedita';
    $request->obWriteInternational3->data->initiation->currencyOfTransfer = 'ab';
    $request->obWriteInternational3->data->initiation->debtorAccount = new OBWriteInternational3DataInitiationDebtorAccount();
    $request->obWriteInternational3->data->initiation->debtorAccount->identification = 'iste';
    $request->obWriteInternational3->data->initiation->debtorAccount->name = 'Janie Cremin';
    $request->obWriteInternational3->data->initiation->debtorAccount->schemeName = 'quidem';
    $request->obWriteInternational3->data->initiation->debtorAccount->secondaryIdentification = 'explicabo';
    $request->obWriteInternational3->data->initiation->destinationCountryCode = 'voluptas';
    $request->obWriteInternational3->data->initiation->endToEndIdentification = 'unde';
    $request->obWriteInternational3->data->initiation->exchangeRateInformation = new OBWriteInternational3DataInitiationExchangeRateInformation();
    $request->obWriteInternational3->data->initiation->exchangeRateInformation->contractIdentification = 'architecto';
    $request->obWriteInternational3->data->initiation->exchangeRateInformation->exchangeRate = 3828.08;
    $request->obWriteInternational3->data->initiation->exchangeRateInformation->rateType = OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum::INDICATIVE;
    $request->obWriteInternational3->data->initiation->exchangeRateInformation->unitCurrency = 'debitis';
    $request->obWriteInternational3->data->initiation->extendedPurpose = 'illo';
    $request->obWriteInternational3->data->initiation->instructedAmount = new OBWriteInternational3DataInitiationInstructedAmount();
    $request->obWriteInternational3->data->initiation->instructedAmount->amount = 'reiciendis';
    $request->obWriteInternational3->data->initiation->instructedAmount->currency = 'perferendis';
    $request->obWriteInternational3->data->initiation->instructionIdentification = 'corrupti';
    $request->obWriteInternational3->data->initiation->instructionPriority = OBWriteInternational3DataInitiationInstructionPriorityEnum::URGENT;
    $request->obWriteInternational3->data->initiation->localInstrument = 'incidunt';
    $request->obWriteInternational3->data->initiation->purpose = 'sed';
    $request->obWriteInternational3->data->initiation->remittanceInformation = new OBWriteInternational3DataInitiationRemittanceInformation();
    $request->obWriteInternational3->data->initiation->remittanceInformation->reference = 'provident';
    $request->obWriteInternational3->data->initiation->remittanceInformation->unstructured = 'eius';
    $request->obWriteInternational3->data->initiation->supplementaryData = [
        'ipsum' => 'ea',
        'occaecati' => 'quos',
        'voluptatibus' => 'tempora',
        'tempora' => 'voluptate',
    ];
    $request->obWriteInternational3->risk = new OBRisk1();
    $request->obWriteInternational3->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternational3->risk->deliveryAddress->addressLine = [
        'ex',
        'sit',
        'non',
        'officiis',
    ];
    $request->obWriteInternational3->risk->deliveryAddress->buildingNumber = 'praesentium';
    $request->obWriteInternational3->risk->deliveryAddress->country = 'Pitcairn Islands';
    $request->obWriteInternational3->risk->deliveryAddress->countrySubDivision = 'quaerat';
    $request->obWriteInternational3->risk->deliveryAddress->postCode = '38507';
    $request->obWriteInternational3->risk->deliveryAddress->streetName = 'error';
    $request->obWriteInternational3->risk->deliveryAddress->townName = 'veniam';
    $request->obWriteInternational3->risk->merchantCategoryCode = 'minima';
    $request->obWriteInternational3->risk->merchantCustomerIdentification = 'recusandae';
    $request->obWriteInternational3->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'nulla';
    $request->xFapiAuthDate = 'magni';
    $request->xFapiCustomerIpAddress = 'aperiam';
    $request->xFapiInteractionId = 'saepe';
    $request->xIdempotencyKey = 'numquam';
    $request->xJwsSignature = 'veniam';

    $requestSecurity = new CreateInternationalPaymentsJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->createInternationalPaymentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalPaymentsRaw

Create International Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalPaymentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalPaymentsRawRequest();
    $request->authorization = 'in';
    $request->requestBody = 'officiis';
    $request->xCustomerUserAgent = 'beatae';
    $request->xFapiAuthDate = 'laudantium';
    $request->xFapiCustomerIpAddress = 'exercitationem';
    $request->xFapiInteractionId = 'praesentium';
    $request->xIdempotencyKey = 'cum';
    $request->xJwsSignature = 'laboriosam';

    $requestSecurity = new CreateInternationalPaymentsRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->createInternationalPaymentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalPaymentConsentsConsentId

Get International Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalPaymentConsentsConsentIdRequest();
    $request->authorization = 'dolorum';
    $request->consentId = 'voluptatum';
    $request->xCustomerUserAgent = 'error';
    $request->xFapiAuthDate = 'hic';
    $request->xFapiCustomerIpAddress = 'expedita';
    $request->xFapiInteractionId = 'debitis';

    $requestSecurity = new GetInternationalPaymentConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->getInternationalPaymentConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalPaymentConsentsConsentIdFundsConfirmation

Get International Payment Consents Funds Confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest();
    $request->authorization = 'neque';
    $request->consentId = 'dolorum';
    $request->xCustomerUserAgent = 'nostrum';
    $request->xFapiAuthDate = 'officia';
    $request->xFapiCustomerIpAddress = 'dolorum';
    $request->xFapiInteractionId = 'corrupti';

    $requestSecurity = new GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->getInternationalPaymentConsentsConsentIdFundsConfirmation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalPaymentsInternationalPaymentId

Get International Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentsInternationalPaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentsInternationalPaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalPaymentsInternationalPaymentIdRequest();
    $request->authorization = 'accusamus';
    $request->internationalPaymentId = 'tempora';
    $request->xCustomerUserAgent = 'atque';
    $request->xFapiAuthDate = 'fugit';
    $request->xFapiCustomerIpAddress = 'ut';
    $request->xFapiInteractionId = 'fugiat';

    $requestSecurity = new GetInternationalPaymentsInternationalPaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalPayments->getInternationalPaymentsInternationalPaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
