# domesticScheduledPayments

### Available Operations

* [createDomesticScheduledPaymentConsentsJson](#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentConsentsRaw](#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentsJson](#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [createDomesticScheduledPaymentsRaw](#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [getDomesticScheduledPaymentConsentsConsentId](#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [getDomesticScheduledPaymentsDomesticScheduledPaymentId](#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

## createDomesticScheduledPaymentConsentsJson

Create Domestic Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduledConsent4DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticScheduledPaymentConsentsJsonRequest();
    $request->authorization = 'dolor';
    $request->obWriteDomesticScheduledConsent4 = new OBWriteDomesticScheduledConsent4();
    $request->obWriteDomesticScheduledConsent4->data = new OBWriteDomesticScheduledConsent4Data();
    $request->obWriteDomesticScheduledConsent4->data->authorisation = new OBWriteDomesticScheduledConsent4DataAuthorisation();
    $request->obWriteDomesticScheduledConsent4->data->authorisation->authorisationType = OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum::SINGLE;
    $request->obWriteDomesticScheduledConsent4->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T20:09:28.183Z');
    $request->obWriteDomesticScheduledConsent4->data->initiation = new OBWriteDomesticScheduledConsent4DataInitiation();
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorAccount = new OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount();
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorAccount->identification = 'quasi';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorAccount->name = 'Melba Toy';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorAccount->schemeName = 'deleniti';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorAccount->secondaryIdentification = 'facilis';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->addressLine = [
        'architecto',
        'architecto',
    ];
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::STATEMENT;
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->buildingNumber = 'ullam';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->country = 'Portugal';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->countrySubDivision = 'nihil';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->department = 'repellat';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->postCode = '19801-5611';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->streetName = 'quo';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->subDepartment = 'illum';
    $request->obWriteDomesticScheduledConsent4->data->initiation->creditorPostalAddress->townName = 'pariatur';
    $request->obWriteDomesticScheduledConsent4->data->initiation->debtorAccount = new OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount();
    $request->obWriteDomesticScheduledConsent4->data->initiation->debtorAccount->identification = 'maxime';
    $request->obWriteDomesticScheduledConsent4->data->initiation->debtorAccount->name = 'Miriam Connelly Jr.';
    $request->obWriteDomesticScheduledConsent4->data->initiation->debtorAccount->schemeName = 'maiores';
    $request->obWriteDomesticScheduledConsent4->data->initiation->debtorAccount->secondaryIdentification = 'quidem';
    $request->obWriteDomesticScheduledConsent4->data->initiation->endToEndIdentification = 'ipsam';
    $request->obWriteDomesticScheduledConsent4->data->initiation->instructedAmount = new OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount();
    $request->obWriteDomesticScheduledConsent4->data->initiation->instructedAmount->amount = 'voluptate';
    $request->obWriteDomesticScheduledConsent4->data->initiation->instructedAmount->currency = 'autem';
    $request->obWriteDomesticScheduledConsent4->data->initiation->instructionIdentification = 'nam';
    $request->obWriteDomesticScheduledConsent4->data->initiation->localInstrument = 'eaque';
    $request->obWriteDomesticScheduledConsent4->data->initiation->remittanceInformation = new OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation();
    $request->obWriteDomesticScheduledConsent4->data->initiation->remittanceInformation->reference = 'pariatur';
    $request->obWriteDomesticScheduledConsent4->data->initiation->remittanceInformation->unstructured = 'nemo';
    $request->obWriteDomesticScheduledConsent4->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T19:01:00.083Z');
    $request->obWriteDomesticScheduledConsent4->data->initiation->supplementaryData = [
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
        'nobis' => 'dolores',
    ];
    $request->obWriteDomesticScheduledConsent4->data->permission = OBWriteDomesticScheduledConsent4DataPermissionEnum::CREATE;
    $request->obWriteDomesticScheduledConsent4->data->readRefundAccount = OBWriteDomesticScheduledConsent4DataReadRefundAccountEnum::NO;
    $request->obWriteDomesticScheduledConsent4->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteDomesticScheduledConsent4->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::SCA;
    $request->obWriteDomesticScheduledConsent4->data->scaSupportData->referencePaymentOrderId = 'dignissimos';
    $request->obWriteDomesticScheduledConsent4->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::BILL_PAYMENT;
    $request->obWriteDomesticScheduledConsent4->risk = new OBRisk1();
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->addressLine = [
        'nesciunt',
        'eos',
    ];
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->buildingNumber = 'perferendis';
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->country = 'Chad';
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->countrySubDivision = 'minus';
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->postCode = '28399';
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->streetName = 'omnis';
    $request->obWriteDomesticScheduledConsent4->risk->deliveryAddress->townName = 'facilis';
    $request->obWriteDomesticScheduledConsent4->risk->merchantCategoryCode = 'perspiciatis';
    $request->obWriteDomesticScheduledConsent4->risk->merchantCustomerIdentification = 'voluptatem';
    $request->obWriteDomesticScheduledConsent4->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::OTHER;
    $request->xCustomerUserAgent = 'consequuntur';
    $request->xFapiAuthDate = 'blanditiis';
    $request->xFapiCustomerIpAddress = 'error';
    $request->xFapiInteractionId = 'eaque';
    $request->xIdempotencyKey = 'occaecati';
    $request->xJwsSignature = 'rerum';

    $requestSecurity = new CreateDomesticScheduledPaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->createDomesticScheduledPaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticScheduledPaymentConsentsRaw

Create Domestic Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticScheduledPaymentConsentsRawRequest();
    $request->authorization = 'adipisci';
    $request->requestBody = 'asperiores';
    $request->xCustomerUserAgent = 'earum';
    $request->xFapiAuthDate = 'modi';
    $request->xFapiCustomerIpAddress = 'iste';
    $request->xFapiInteractionId = 'dolorum';
    $request->xIdempotencyKey = 'deleniti';
    $request->xJwsSignature = 'pariatur';

    $requestSecurity = new CreateDomesticScheduledPaymentConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->createDomesticScheduledPaymentConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticScheduledPaymentsJson

Create Domestic Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticScheduled2DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticScheduledPaymentsJsonRequest();
    $request->authorization = 'provident';
    $request->obWriteDomesticScheduled2 = new OBWriteDomesticScheduled2();
    $request->obWriteDomesticScheduled2->data = new OBWriteDomesticScheduled2Data();
    $request->obWriteDomesticScheduled2->data->consentId = 'nobis';
    $request->obWriteDomesticScheduled2->data->initiation = new OBWriteDomesticScheduled2DataInitiation();
    $request->obWriteDomesticScheduled2->data->initiation->creditorAccount = new OBWriteDomesticScheduled2DataInitiationCreditorAccount();
    $request->obWriteDomesticScheduled2->data->initiation->creditorAccount->identification = 'libero';
    $request->obWriteDomesticScheduled2->data->initiation->creditorAccount->name = 'Alex Luettgen';
    $request->obWriteDomesticScheduled2->data->initiation->creditorAccount->schemeName = 'dolorem';
    $request->obWriteDomesticScheduled2->data->initiation->creditorAccount->secondaryIdentification = 'dolor';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->addressLine = [
        'ipsum',
    ];
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::STATEMENT;
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->buildingNumber = 'excepturi';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->country = 'Rwanda';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->countrySubDivision = 'voluptate';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->department = 'dignissimos';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->postCode = '26200-0443';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->streetName = 'accusamus';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->subDepartment = 'quidem';
    $request->obWriteDomesticScheduled2->data->initiation->creditorPostalAddress->townName = 'voluptatibus';
    $request->obWriteDomesticScheduled2->data->initiation->debtorAccount = new OBWriteDomesticScheduled2DataInitiationDebtorAccount();
    $request->obWriteDomesticScheduled2->data->initiation->debtorAccount->identification = 'voluptas';
    $request->obWriteDomesticScheduled2->data->initiation->debtorAccount->name = 'Dr. Craig Littel DDS';
    $request->obWriteDomesticScheduled2->data->initiation->debtorAccount->schemeName = 'dolorum';
    $request->obWriteDomesticScheduled2->data->initiation->debtorAccount->secondaryIdentification = 'iusto';
    $request->obWriteDomesticScheduled2->data->initiation->endToEndIdentification = 'voluptate';
    $request->obWriteDomesticScheduled2->data->initiation->instructedAmount = new OBWriteDomesticScheduled2DataInitiationInstructedAmount();
    $request->obWriteDomesticScheduled2->data->initiation->instructedAmount->amount = 'dolorum';
    $request->obWriteDomesticScheduled2->data->initiation->instructedAmount->currency = 'deleniti';
    $request->obWriteDomesticScheduled2->data->initiation->instructionIdentification = 'omnis';
    $request->obWriteDomesticScheduled2->data->initiation->localInstrument = 'necessitatibus';
    $request->obWriteDomesticScheduled2->data->initiation->remittanceInformation = new OBWriteDomesticScheduled2DataInitiationRemittanceInformation();
    $request->obWriteDomesticScheduled2->data->initiation->remittanceInformation->reference = 'distinctio';
    $request->obWriteDomesticScheduled2->data->initiation->remittanceInformation->unstructured = 'asperiores';
    $request->obWriteDomesticScheduled2->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T19:58:56.024Z');
    $request->obWriteDomesticScheduled2->data->initiation->supplementaryData = [
        'id' => 'saepe',
        'eius' => 'aspernatur',
    ];
    $request->obWriteDomesticScheduled2->risk = new OBRisk1();
    $request->obWriteDomesticScheduled2->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->addressLine = [
        'amet',
    ];
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->buildingNumber = 'optio';
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->country = 'Thailand';
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->countrySubDivision = 'ad';
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->postCode = '36538-5608';
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->streetName = 'quaerat';
    $request->obWriteDomesticScheduled2->risk->deliveryAddress->townName = 'tempora';
    $request->obWriteDomesticScheduled2->risk->merchantCategoryCode = 'vel';
    $request->obWriteDomesticScheduled2->risk->merchantCustomerIdentification = 'quod';
    $request->obWriteDomesticScheduled2->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'qui';
    $request->xFapiAuthDate = 'dolorum';
    $request->xFapiCustomerIpAddress = 'a';
    $request->xFapiInteractionId = 'esse';
    $request->xIdempotencyKey = 'harum';
    $request->xJwsSignature = 'iusto';

    $requestSecurity = new CreateDomesticScheduledPaymentsJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->createDomesticScheduledPaymentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticScheduledPaymentsRaw

Create Domestic Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticScheduledPaymentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticScheduledPaymentsRawRequest();
    $request->authorization = 'ipsum';
    $request->requestBody = 'quisquam';
    $request->xCustomerUserAgent = 'tenetur';
    $request->xFapiAuthDate = 'amet';
    $request->xFapiCustomerIpAddress = 'tempore';
    $request->xFapiInteractionId = 'accusamus';
    $request->xIdempotencyKey = 'numquam';
    $request->xJwsSignature = 'enim';

    $requestSecurity = new CreateDomesticScheduledPaymentsRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->createDomesticScheduledPaymentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticScheduledPaymentConsentsConsentId

Get Domestic Scheduled Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticScheduledPaymentConsentsConsentIdRequest();
    $request->authorization = 'dolorem';
    $request->consentId = 'sapiente';
    $request->xCustomerUserAgent = 'totam';
    $request->xFapiAuthDate = 'nihil';
    $request->xFapiCustomerIpAddress = 'sit';
    $request->xFapiInteractionId = 'expedita';

    $requestSecurity = new GetDomesticScheduledPaymentConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->getDomesticScheduledPaymentConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticScheduledPaymentsDomesticScheduledPaymentId

Get Domestic Scheduled Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest();
    $request->authorization = 'neque';
    $request->domesticScheduledPaymentId = 'sed';
    $request->xCustomerUserAgent = 'vel';
    $request->xFapiAuthDate = 'libero';
    $request->xFapiCustomerIpAddress = 'voluptas';
    $request->xFapiInteractionId = 'deserunt';

    $requestSecurity = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticScheduledPayments->getDomesticScheduledPaymentsDomesticScheduledPaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
