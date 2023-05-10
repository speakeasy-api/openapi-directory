# domesticPayments

### Available Operations

* [createDomesticPaymentConsentsJson](#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [createDomesticPaymentConsentsRaw](#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [createDomesticPaymentsJson](#createdomesticpaymentsjson) - Create Domestic Payments
* [createDomesticPaymentsRaw](#createdomesticpaymentsraw) - Create Domestic Payments
* [getDomesticPaymentConsentsConsentId](#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [getDomesticPaymentConsentsConsentIdFundsConfirmation](#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [getDomesticPaymentsDomesticPaymentId](#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

## createDomesticPaymentConsentsJson

Create Domestic Payment Consents

### Example Usage

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
    $request->authorization = 'quidem';
    $request->obWriteDomesticConsent4 = new OBWriteDomesticConsent4();
    $request->obWriteDomesticConsent4->data = new OBWriteDomesticConsent4Data();
    $request->obWriteDomesticConsent4->data->authorisation = new OBWriteDomesticConsent4DataAuthorisation();
    $request->obWriteDomesticConsent4->data->authorisation->authorisationType = OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum::ANY;
    $request->obWriteDomesticConsent4->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T00:28:21.182Z');
    $request->obWriteDomesticConsent4->data->initiation = new OBWriteDomesticConsent4DataInitiation();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->identification = 'est';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->name = 'Cameron Dach';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->schemeName = 'explicabo';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->secondaryIdentification = 'nobis';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressLine = [
        'omnis',
        'nemo',
    ];
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::DELIVERY_TO;
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->buildingNumber = 'excepturi';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->country = 'Argentina';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->countrySubDivision = 'iure';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->department = 'culpa';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->postCode = '91626-1965';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->streetName = 'numquam';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->subDepartment = 'commodi';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->townName = 'quam';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount();
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->identification = 'molestiae';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->name = 'Sabrina Cronin MD';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->schemeName = 'animi';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->secondaryIdentification = 'enim';
    $request->obWriteDomesticConsent4->data->initiation->endToEndIdentification = 'odit';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount();
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->amount = 'quo';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->currency = 'sequi';
    $request->obWriteDomesticConsent4->data->initiation->instructionIdentification = 'tenetur';
    $request->obWriteDomesticConsent4->data->initiation->localInstrument = 'ipsam';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation();
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->reference = 'id';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->unstructured = 'possimus';
    $request->obWriteDomesticConsent4->data->initiation->supplementaryData = [
        'quasi' => 'error',
    ];
    $request->obWriteDomesticConsent4->data->readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum::YES;
    $request->obWriteDomesticConsent4->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteDomesticConsent4->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::SCA;
    $request->obWriteDomesticConsent4->data->scaSupportData->referencePaymentOrderId = 'quasi';
    $request->obWriteDomesticConsent4->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::PARTY_TO_PARTY;
    $request->obWriteDomesticConsent4->risk = new OBRisk1();
    $request->obWriteDomesticConsent4->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticConsent4->risk->deliveryAddress->addressLine = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->obWriteDomesticConsent4->risk->deliveryAddress->buildingNumber = 'ipsa';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->country = 'Mozambique';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->countrySubDivision = 'voluptate';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->postCode = '00429-1324';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->streetName = 'dicta';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->townName = 'harum';
    $request->obWriteDomesticConsent4->risk->merchantCategoryCode = 'enim';
    $request->obWriteDomesticConsent4->risk->merchantCustomerIdentification = 'accusamus';
    $request->obWriteDomesticConsent4->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::ECOMMERCE_SERVICES;
    $request->xCustomerUserAgent = 'repudiandae';
    $request->xFapiAuthDate = 'quae';
    $request->xFapiCustomerIpAddress = 'ipsum';
    $request->xFapiInteractionId = 'quidem';
    $request->xIdempotencyKey = 'molestias';
    $request->xJwsSignature = 'excepturi';

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

## createDomesticPaymentConsentsRaw

Create Domestic Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticPaymentConsentsRawRequest();
    $request->authorization = 'pariatur';
    $request->requestBody = 'modi';
    $request->xCustomerUserAgent = 'praesentium';
    $request->xFapiAuthDate = 'rem';
    $request->xFapiCustomerIpAddress = 'voluptates';
    $request->xFapiInteractionId = 'quasi';
    $request->xIdempotencyKey = 'repudiandae';
    $request->xJwsSignature = 'sint';

    $requestSecurity = new CreateDomesticPaymentConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->createDomesticPaymentConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticPaymentsJson

Create Domestic Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomestic2DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticPaymentsJsonRequest();
    $request->authorization = 'veritatis';
    $request->obWriteDomestic2 = new OBWriteDomestic2();
    $request->obWriteDomestic2->data = new OBWriteDomestic2Data();
    $request->obWriteDomestic2->data->consentId = 'itaque';
    $request->obWriteDomestic2->data->initiation = new OBWriteDomestic2DataInitiation();
    $request->obWriteDomestic2->data->initiation->creditorAccount = new OBWriteDomestic2DataInitiationCreditorAccount();
    $request->obWriteDomestic2->data->initiation->creditorAccount->identification = 'incidunt';
    $request->obWriteDomestic2->data->initiation->creditorAccount->name = 'Elizabeth Orn';
    $request->obWriteDomestic2->data->initiation->creditorAccount->schemeName = 'deserunt';
    $request->obWriteDomestic2->data->initiation->creditorAccount->secondaryIdentification = 'distinctio';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->addressLine = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::PO_BOX;
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->buildingNumber = 'quos';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->country = 'Andorra';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->countrySubDivision = 'magni';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->department = 'assumenda';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->postCode = '01652';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->streetName = 'facilis';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->subDepartment = 'tempore';
    $request->obWriteDomestic2->data->initiation->creditorPostalAddress->townName = 'labore';
    $request->obWriteDomestic2->data->initiation->debtorAccount = new OBWriteDomestic2DataInitiationDebtorAccount();
    $request->obWriteDomestic2->data->initiation->debtorAccount->identification = 'delectus';
    $request->obWriteDomestic2->data->initiation->debtorAccount->name = 'Ethel Roob';
    $request->obWriteDomestic2->data->initiation->debtorAccount->schemeName = 'provident';
    $request->obWriteDomestic2->data->initiation->debtorAccount->secondaryIdentification = 'necessitatibus';
    $request->obWriteDomestic2->data->initiation->endToEndIdentification = 'sint';
    $request->obWriteDomestic2->data->initiation->instructedAmount = new OBWriteDomestic2DataInitiationInstructedAmount();
    $request->obWriteDomestic2->data->initiation->instructedAmount->amount = 'officia';
    $request->obWriteDomestic2->data->initiation->instructedAmount->currency = 'dolor';
    $request->obWriteDomestic2->data->initiation->instructionIdentification = 'debitis';
    $request->obWriteDomestic2->data->initiation->localInstrument = 'a';
    $request->obWriteDomestic2->data->initiation->remittanceInformation = new OBWriteDomestic2DataInitiationRemittanceInformation();
    $request->obWriteDomestic2->data->initiation->remittanceInformation->reference = 'dolorum';
    $request->obWriteDomestic2->data->initiation->remittanceInformation->unstructured = 'in';
    $request->obWriteDomestic2->data->initiation->supplementaryData = [
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->obWriteDomestic2->risk = new OBRisk1();
    $request->obWriteDomestic2->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomestic2->risk->deliveryAddress->addressLine = [
        'cumque',
        'facere',
    ];
    $request->obWriteDomestic2->risk->deliveryAddress->buildingNumber = 'ea';
    $request->obWriteDomestic2->risk->deliveryAddress->country = 'Hungary';
    $request->obWriteDomestic2->risk->deliveryAddress->countrySubDivision = 'laborum';
    $request->obWriteDomestic2->risk->deliveryAddress->postCode = '25389-6576';
    $request->obWriteDomestic2->risk->deliveryAddress->streetName = 'blanditiis';
    $request->obWriteDomestic2->risk->deliveryAddress->townName = 'deleniti';
    $request->obWriteDomestic2->risk->merchantCategoryCode = 'sapiente';
    $request->obWriteDomestic2->risk->merchantCustomerIdentification = 'amet';
    $request->obWriteDomestic2->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::OTHER;
    $request->xCustomerUserAgent = 'nisi';
    $request->xFapiAuthDate = 'vel';
    $request->xFapiCustomerIpAddress = 'natus';
    $request->xFapiInteractionId = 'omnis';
    $request->xIdempotencyKey = 'molestiae';
    $request->xJwsSignature = 'perferendis';

    $requestSecurity = new CreateDomesticPaymentsJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->createDomesticPaymentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticPaymentsRaw

Create Domestic Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticPaymentsRawRequest();
    $request->authorization = 'nihil';
    $request->requestBody = 'magnam';
    $request->xCustomerUserAgent = 'distinctio';
    $request->xFapiAuthDate = 'id';
    $request->xFapiCustomerIpAddress = 'labore';
    $request->xFapiInteractionId = 'labore';
    $request->xIdempotencyKey = 'suscipit';
    $request->xJwsSignature = 'natus';

    $requestSecurity = new CreateDomesticPaymentsRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->createDomesticPaymentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticPaymentConsentsConsentId

Get Domestic Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticPaymentConsentsConsentIdRequest();
    $request->authorization = 'nobis';
    $request->consentId = 'eum';
    $request->xCustomerUserAgent = 'vero';
    $request->xFapiAuthDate = 'aspernatur';
    $request->xFapiCustomerIpAddress = 'architecto';
    $request->xFapiInteractionId = 'magnam';

    $requestSecurity = new GetDomesticPaymentConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->getDomesticPaymentConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticPaymentConsentsConsentIdFundsConfirmation

Get Domestic Payment Consents Funds Confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest();
    $request->authorization = 'et';
    $request->consentId = 'excepturi';
    $request->xCustomerUserAgent = 'ullam';
    $request->xFapiAuthDate = 'provident';
    $request->xFapiCustomerIpAddress = 'quos';
    $request->xFapiInteractionId = 'sint';

    $requestSecurity = new GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->getDomesticPaymentConsentsConsentIdFundsConfirmation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticPaymentsDomesticPaymentId

Get Domestic Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentsDomesticPaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentsDomesticPaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticPaymentsDomesticPaymentIdRequest();
    $request->authorization = 'accusantium';
    $request->domesticPaymentId = 'mollitia';
    $request->xCustomerUserAgent = 'reiciendis';
    $request->xFapiAuthDate = 'mollitia';
    $request->xFapiCustomerIpAddress = 'ad';
    $request->xFapiInteractionId = 'eum';

    $requestSecurity = new GetDomesticPaymentsDomesticPaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->getDomesticPaymentsDomesticPaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
