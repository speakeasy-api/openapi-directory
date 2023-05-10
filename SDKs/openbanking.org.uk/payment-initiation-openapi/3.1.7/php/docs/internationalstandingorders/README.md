# internationalStandingOrders

### Available Operations

* [createInternationalStandingOrderConsentsJson](#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [createInternationalStandingOrderConsentsRaw](#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [createInternationalStandingOrdersJson](#createinternationalstandingordersjson) - Create International Standing Orders
* [createInternationalStandingOrdersRaw](#createinternationalstandingordersraw) - Create International Standing Orders
* [getInternationalStandingOrderConsentsConsentId](#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [getInternationalStandingOrdersInternationalStandingOrderPaymentId](#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

## createInternationalStandingOrderConsentsJson

Create International Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrderConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrderConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalStandingOrderConsentsJsonRequest();
    $request->authorization = 'praesentium';
    $request->obWriteInternationalStandingOrderConsent6 = new OBWriteInternationalStandingOrderConsent6();
    $request->obWriteInternationalStandingOrderConsent6->data = new OBWriteInternationalStandingOrderConsent6Data();
    $request->obWriteInternationalStandingOrderConsent6->data->authorisation = new OBWriteInternationalStandingOrderConsent6DataAuthorisation();
    $request->obWriteInternationalStandingOrderConsent6->data->authorisation->authorisationType = OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum::SINGLE;
    $request->obWriteInternationalStandingOrderConsent6->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T00:59:48.564Z');
    $request->obWriteInternationalStandingOrderConsent6->data->initiation = new OBWriteInternationalStandingOrderConsent6DataInitiation();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::BORNE_BY_CREDITOR;
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor = new OBWriteInternationalStandingOrderConsent6DataInitiationCreditor();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->name = 'Brian Carroll';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->addressLine = [
        'ex',
        'consectetur',
    ];
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::MAIL_TO;
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->buildingNumber = 'ipsa';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->country = 'Oman';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->countrySubDivision = 'sunt';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->department = 'nostrum';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->postCode = '73633-0436';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->streetName = 'id';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->subDepartment = 'ab';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditor->postalAddress->townName = 'error';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAccount = new OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAccount->identification = 'possimus';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAccount->name = 'Shaun Osinski';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAccount->schemeName = 'deleniti';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAccount->secondaryIdentification = 'enim';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent = new OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->identification = 'vitae';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->name = 'Ruben Ryan';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->addressLine = [
        'expedita',
        'voluptatem',
    ];
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::PO_BOX;
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->buildingNumber = 'cum';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->country = 'Iceland';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'beatae';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->department = 'voluptatum';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->postCode = '07660-9816';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->streetName = 'pariatur';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->subDepartment = 'debitis';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->postalAddress->townName = 'voluptatem';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->creditorAgent->schemeName = 'alias';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->currencyOfTransfer = 'deleniti';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->debtorAccount = new OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->debtorAccount->identification = 'earum';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->debtorAccount->name = 'Miranda Ledner';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->debtorAccount->schemeName = 'asperiores';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->debtorAccount->secondaryIdentification = 'ratione';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->destinationCountryCode = 'ullam';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->extendedPurpose = 'perferendis';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->finalPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-12T15:01:22.390Z');
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->firstPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-22T03:49:26.507Z');
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->frequency = 'nam';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->instructedAmount = new OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount();
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->instructedAmount->amount = 'ipsam';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->instructedAmount->currency = 'culpa';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->numberOfPayments = 'dolor';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->purpose = 'aliquam';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->reference = 'inventore';
    $request->obWriteInternationalStandingOrderConsent6->data->initiation->supplementaryData = [
        'veritatis' => 'tempora',
        'dolor' => 'consequatur',
        'architecto' => 'sit',
    ];
    $request->obWriteInternationalStandingOrderConsent6->data->permission = OBWriteInternationalStandingOrderConsent6DataPermissionEnum::CREATE;
    $request->obWriteInternationalStandingOrderConsent6->data->readRefundAccount = OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum::NO;
    $request->obWriteInternationalStandingOrderConsent6->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteInternationalStandingOrderConsent6->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::CA;
    $request->obWriteInternationalStandingOrderConsent6->data->scaSupportData->referencePaymentOrderId = 'ab';
    $request->obWriteInternationalStandingOrderConsent6->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::ECOMMERCE_SERVICES;
    $request->obWriteInternationalStandingOrderConsent6->risk = new OBRisk1();
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->addressLine = [
        'dolor',
    ];
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->buildingNumber = 'fugiat';
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->country = 'Guyana';
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->countrySubDivision = 'consequuntur';
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->postCode = '59784';
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->streetName = 'necessitatibus';
    $request->obWriteInternationalStandingOrderConsent6->risk->deliveryAddress->townName = 'sed';
    $request->obWriteInternationalStandingOrderConsent6->risk->merchantCategoryCode = 'veniam';
    $request->obWriteInternationalStandingOrderConsent6->risk->merchantCustomerIdentification = 'nesciunt';
    $request->obWriteInternationalStandingOrderConsent6->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::OTHER;
    $request->xCustomerUserAgent = 'eum';
    $request->xFapiAuthDate = 'vel';
    $request->xFapiCustomerIpAddress = 'voluptatum';
    $request->xFapiInteractionId = 'magnam';
    $request->xIdempotencyKey = 'exercitationem';
    $request->xJwsSignature = 'ab';

    $requestSecurity = new CreateInternationalStandingOrderConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->createInternationalStandingOrderConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalStandingOrderConsentsRaw

Create International Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrderConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrderConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalStandingOrderConsentsRawRequest();
    $request->authorization = 'porro';
    $request->requestBody = 'autem';
    $request->xCustomerUserAgent = 'nobis';
    $request->xFapiAuthDate = 'laboriosam';
    $request->xFapiCustomerIpAddress = 'recusandae';
    $request->xFapiInteractionId = 'consequuntur';
    $request->xIdempotencyKey = 'voluptatem';
    $request->xJwsSignature = 'exercitationem';

    $requestSecurity = new CreateInternationalStandingOrderConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->createInternationalStandingOrderConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalStandingOrdersJson

Create International Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrdersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiationCreditor;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiationCreditorAgent;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteInternationalStandingOrder4DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrdersJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalStandingOrdersJsonRequest();
    $request->authorization = 'necessitatibus';
    $request->obWriteInternationalStandingOrder4 = new OBWriteInternationalStandingOrder4();
    $request->obWriteInternationalStandingOrder4->data = new OBWriteInternationalStandingOrder4Data();
    $request->obWriteInternationalStandingOrder4->data->consentId = 'quasi';
    $request->obWriteInternationalStandingOrder4->data->initiation = new OBWriteInternationalStandingOrder4DataInitiation();
    $request->obWriteInternationalStandingOrder4->data->initiation->chargeBearer = OBChargeBearerType1CodeEnum::BORNE_BY_DEBTOR;
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor = new OBWriteInternationalStandingOrder4DataInitiationCreditor();
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->name = 'Caleb Orn';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->addressLine = [
        'repudiandae',
        'optio',
        'occaecati',
        'nemo',
    ];
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->addressType = OBAddressTypeCodeEnum::MAIL_TO;
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->buildingNumber = 'blanditiis';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->country = 'Nicaragua';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->countrySubDivision = 'voluptas';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->department = 'numquam';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->postCode = '52142';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->streetName = 'fuga';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->subDepartment = 'laudantium';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditor->postalAddress->townName = 'incidunt';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAccount = new OBWriteInternationalStandingOrder4DataInitiationCreditorAccount();
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAccount->identification = 'quasi';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAccount->name = 'Clint Carroll';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAccount->schemeName = 'consectetur';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAccount->secondaryIdentification = 'aperiam';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent = new OBWriteInternationalStandingOrder4DataInitiationCreditorAgent();
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->identification = 'cupiditate';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->name = 'Dominic Abernathy';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress = new OBPostalAddress6();
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->addressLine = [
        'iste',
        'magni',
        'inventore',
    ];
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->addressType = OBAddressTypeCodeEnum::POSTAL;
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->buildingNumber = 'accusamus';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->country = 'Virgin Islands, U.S.';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->countrySubDivision = 'distinctio';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->department = 'omnis';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->postCode = '35838-5494';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->streetName = 'totam';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->subDepartment = 'earum';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->postalAddress->townName = 'modi';
    $request->obWriteInternationalStandingOrder4->data->initiation->creditorAgent->schemeName = 'nam';
    $request->obWriteInternationalStandingOrder4->data->initiation->currencyOfTransfer = 'vero';
    $request->obWriteInternationalStandingOrder4->data->initiation->debtorAccount = new OBWriteInternationalStandingOrder4DataInitiationDebtorAccount();
    $request->obWriteInternationalStandingOrder4->data->initiation->debtorAccount->identification = 'voluptatem';
    $request->obWriteInternationalStandingOrder4->data->initiation->debtorAccount->name = 'Mrs. Gina Abbott';
    $request->obWriteInternationalStandingOrder4->data->initiation->debtorAccount->schemeName = 'enim';
    $request->obWriteInternationalStandingOrder4->data->initiation->debtorAccount->secondaryIdentification = 'sint';
    $request->obWriteInternationalStandingOrder4->data->initiation->destinationCountryCode = 'nulla';
    $request->obWriteInternationalStandingOrder4->data->initiation->extendedPurpose = 'deserunt';
    $request->obWriteInternationalStandingOrder4->data->initiation->finalPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-20T23:18:24.165Z');
    $request->obWriteInternationalStandingOrder4->data->initiation->firstPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T06:49:02.857Z');
    $request->obWriteInternationalStandingOrder4->data->initiation->frequency = 'quis';
    $request->obWriteInternationalStandingOrder4->data->initiation->instructedAmount = new OBWriteInternationalStandingOrder4DataInitiationInstructedAmount();
    $request->obWriteInternationalStandingOrder4->data->initiation->instructedAmount->amount = 'sint';
    $request->obWriteInternationalStandingOrder4->data->initiation->instructedAmount->currency = 'accusamus';
    $request->obWriteInternationalStandingOrder4->data->initiation->numberOfPayments = 'impedit';
    $request->obWriteInternationalStandingOrder4->data->initiation->purpose = 'hic';
    $request->obWriteInternationalStandingOrder4->data->initiation->reference = 'necessitatibus';
    $request->obWriteInternationalStandingOrder4->data->initiation->supplementaryData = [
        'ex' => 'voluptas',
        'debitis' => 'delectus',
        'quae' => 'minus',
        'fuga' => 'laborum',
    ];
    $request->obWriteInternationalStandingOrder4->risk = new OBRisk1();
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->addressLine = [
        'velit',
    ];
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->buildingNumber = 'atque';
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->country = 'Croatia';
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->countrySubDivision = 'impedit';
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->postCode = '79724';
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->streetName = 'voluptate';
    $request->obWriteInternationalStandingOrder4->risk->deliveryAddress->townName = 'sequi';
    $request->obWriteInternationalStandingOrder4->risk->merchantCategoryCode = 'dignissimos';
    $request->obWriteInternationalStandingOrder4->risk->merchantCustomerIdentification = 'neque';
    $request->obWriteInternationalStandingOrder4->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::OTHER;
    $request->xCustomerUserAgent = 'deleniti';
    $request->xFapiAuthDate = 'quibusdam';
    $request->xFapiCustomerIpAddress = 'iure';
    $request->xFapiInteractionId = 'odit';
    $request->xIdempotencyKey = 'voluptatibus';
    $request->xJwsSignature = 'vel';

    $requestSecurity = new CreateInternationalStandingOrdersJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->createInternationalStandingOrdersJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInternationalStandingOrdersRaw

Create International Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrdersRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInternationalStandingOrdersRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInternationalStandingOrdersRawRequest();
    $request->authorization = 'magnam';
    $request->requestBody = 'quibusdam';
    $request->xCustomerUserAgent = 'inventore';
    $request->xFapiAuthDate = 'facere';
    $request->xFapiCustomerIpAddress = 'libero';
    $request->xFapiInteractionId = 'architecto';
    $request->xIdempotencyKey = 'voluptatibus';
    $request->xJwsSignature = 'quia';

    $requestSecurity = new CreateInternationalStandingOrdersRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->createInternationalStandingOrdersRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalStandingOrderConsentsConsentId

Get International Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrderConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrderConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalStandingOrderConsentsConsentIdRequest();
    $request->authorization = 'porro';
    $request->consentId = 'aliquam';
    $request->xCustomerUserAgent = 'velit';
    $request->xFapiAuthDate = 'illo';
    $request->xFapiCustomerIpAddress = 'accusantium';
    $request->xFapiInteractionId = 'vel';

    $requestSecurity = new GetInternationalStandingOrderConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->getInternationalStandingOrderConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalStandingOrdersInternationalStandingOrderPaymentId

Get International Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest();
    $request->authorization = 'ea';
    $request->internationalStandingOrderPaymentId = 'beatae';
    $request->xCustomerUserAgent = 'vero';
    $request->xFapiAuthDate = 'excepturi';
    $request->xFapiCustomerIpAddress = 'eum';
    $request->xFapiInteractionId = 'velit';

    $requestSecurity = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internationalStandingOrders->getInternationalStandingOrdersInternationalStandingOrderPaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
