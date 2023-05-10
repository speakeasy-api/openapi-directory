# domesticStandingOrders

### Available Operations

* [createDomesticStandingOrderConsentsJson](#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [createDomesticStandingOrderConsentsRaw](#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [createDomesticStandingOrdersJson](#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [createDomesticStandingOrdersRaw](#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [getDomesticStandingOrderConsentsConsentId](#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [getDomesticStandingOrdersDomesticStandingOrderId](#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

## createDomesticStandingOrderConsentsJson

Create Domestic Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrderConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrderConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticStandingOrderConsentsJsonRequest();
    $request->authorization = 'quam';
    $request->obWriteDomesticStandingOrderConsent5 = new OBWriteDomesticStandingOrderConsent5();
    $request->obWriteDomesticStandingOrderConsent5->data = new OBWriteDomesticStandingOrderConsent5Data();
    $request->obWriteDomesticStandingOrderConsent5->data->authorisation = new OBWriteDomesticStandingOrderConsent5DataAuthorisation();
    $request->obWriteDomesticStandingOrderConsent5->data->authorisation->authorisationType = OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum::ANY;
    $request->obWriteDomesticStandingOrderConsent5->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T22:37:32.805Z');
    $request->obWriteDomesticStandingOrderConsent5->data->initiation = new OBWriteDomesticStandingOrderConsent5DataInitiation();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->creditorAccount = new OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->creditorAccount->identification = 'cupiditate';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->creditorAccount->name = 'Miss Jody Rogahn';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->creditorAccount->schemeName = 'incidunt';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->creditorAccount->secondaryIdentification = 'aspernatur';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->debtorAccount = new OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->debtorAccount->identification = 'dolores';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->debtorAccount->name = 'Cesar Hyatt';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->debtorAccount->schemeName = 'temporibus';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->debtorAccount->secondaryIdentification = 'qui';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->finalPaymentAmount = new OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->finalPaymentAmount->amount = 'neque';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->finalPaymentAmount->currency = 'fugit';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->finalPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:37:36.497Z');
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->firstPaymentAmount = new OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->firstPaymentAmount->amount = 'sunt';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->firstPaymentAmount->currency = 'ullam';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->firstPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-13T11:37:55.892Z');
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->frequency = 'voluptatem';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->numberOfPayments = 'cumque';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->recurringPaymentAmount = new OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount();
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->recurringPaymentAmount->amount = 'soluta';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->recurringPaymentAmount->currency = 'nobis';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->recurringPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T03:24:54.198Z');
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->reference = 'ipsum';
    $request->obWriteDomesticStandingOrderConsent5->data->initiation->supplementaryData = [
        'nobis' => 'quos',
    ];
    $request->obWriteDomesticStandingOrderConsent5->data->permission = OBWriteDomesticStandingOrderConsent5DataPermissionEnum::CREATE;
    $request->obWriteDomesticStandingOrderConsent5->data->readRefundAccount = OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum::YES;
    $request->obWriteDomesticStandingOrderConsent5->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteDomesticStandingOrderConsent5->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::SCA;
    $request->obWriteDomesticStandingOrderConsent5->data->scaSupportData->referencePaymentOrderId = 'aperiam';
    $request->obWriteDomesticStandingOrderConsent5->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::PARTY_TO_PARTY;
    $request->obWriteDomesticStandingOrderConsent5->risk = new OBRisk1();
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->addressLine = [
        'dolore',
    ];
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->buildingNumber = 'labore';
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->country = 'Dominica';
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->countrySubDivision = 'dolorum';
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->postCode = '00590';
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->streetName = 'est';
    $request->obWriteDomesticStandingOrderConsent5->risk->deliveryAddress->townName = 'repellendus';
    $request->obWriteDomesticStandingOrderConsent5->risk->merchantCategoryCode = 'porro';
    $request->obWriteDomesticStandingOrderConsent5->risk->merchantCustomerIdentification = 'doloribus';
    $request->obWriteDomesticStandingOrderConsent5->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::ECOMMERCE_GOODS;
    $request->xCustomerUserAgent = 'facilis';
    $request->xFapiAuthDate = 'cupiditate';
    $request->xFapiCustomerIpAddress = 'qui';
    $request->xFapiInteractionId = 'quae';
    $request->xIdempotencyKey = 'laudantium';
    $request->xJwsSignature = 'odio';

    $requestSecurity = new CreateDomesticStandingOrderConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->createDomesticStandingOrderConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticStandingOrderConsentsRaw

Create Domestic Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrderConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrderConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticStandingOrderConsentsRawRequest();
    $request->authorization = 'occaecati';
    $request->requestBody = 'voluptatibus';
    $request->xCustomerUserAgent = 'quisquam';
    $request->xFapiAuthDate = 'vero';
    $request->xFapiCustomerIpAddress = 'omnis';
    $request->xFapiInteractionId = 'quis';
    $request->xIdempotencyKey = 'ipsum';
    $request->xJwsSignature = 'delectus';

    $requestSecurity = new CreateDomesticStandingOrderConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->createDomesticStandingOrderConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticStandingOrdersJson

Create Domestic Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrdersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrdersJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticStandingOrdersJsonRequest();
    $request->authorization = 'voluptate';
    $request->obWriteDomesticStandingOrder3 = new OBWriteDomesticStandingOrder3();
    $request->obWriteDomesticStandingOrder3->data = new OBWriteDomesticStandingOrder3Data();
    $request->obWriteDomesticStandingOrder3->data->consentId = 'consectetur';
    $request->obWriteDomesticStandingOrder3->data->initiation = new OBWriteDomesticStandingOrder3DataInitiation();
    $request->obWriteDomesticStandingOrder3->data->initiation->creditorAccount = new OBWriteDomesticStandingOrder3DataInitiationCreditorAccount();
    $request->obWriteDomesticStandingOrder3->data->initiation->creditorAccount->identification = 'vero';
    $request->obWriteDomesticStandingOrder3->data->initiation->creditorAccount->name = 'Julio Weissnat';
    $request->obWriteDomesticStandingOrder3->data->initiation->creditorAccount->schemeName = 'odio';
    $request->obWriteDomesticStandingOrder3->data->initiation->creditorAccount->secondaryIdentification = 'similique';
    $request->obWriteDomesticStandingOrder3->data->initiation->debtorAccount = new OBWriteDomesticStandingOrder3DataInitiationDebtorAccount();
    $request->obWriteDomesticStandingOrder3->data->initiation->debtorAccount->identification = 'facilis';
    $request->obWriteDomesticStandingOrder3->data->initiation->debtorAccount->name = 'Allan Greenholt';
    $request->obWriteDomesticStandingOrder3->data->initiation->debtorAccount->schemeName = 'sequi';
    $request->obWriteDomesticStandingOrder3->data->initiation->debtorAccount->secondaryIdentification = 'natus';
    $request->obWriteDomesticStandingOrder3->data->initiation->finalPaymentAmount = new OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount();
    $request->obWriteDomesticStandingOrder3->data->initiation->finalPaymentAmount->amount = 'impedit';
    $request->obWriteDomesticStandingOrder3->data->initiation->finalPaymentAmount->currency = 'aut';
    $request->obWriteDomesticStandingOrder3->data->initiation->finalPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-16T18:42:11.269Z');
    $request->obWriteDomesticStandingOrder3->data->initiation->firstPaymentAmount = new OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount();
    $request->obWriteDomesticStandingOrder3->data->initiation->firstPaymentAmount->amount = 'nulla';
    $request->obWriteDomesticStandingOrder3->data->initiation->firstPaymentAmount->currency = 'fugit';
    $request->obWriteDomesticStandingOrder3->data->initiation->firstPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-21T21:31:25.345Z');
    $request->obWriteDomesticStandingOrder3->data->initiation->frequency = 'doloribus';
    $request->obWriteDomesticStandingOrder3->data->initiation->numberOfPayments = 'iusto';
    $request->obWriteDomesticStandingOrder3->data->initiation->recurringPaymentAmount = new OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount();
    $request->obWriteDomesticStandingOrder3->data->initiation->recurringPaymentAmount->amount = 'eligendi';
    $request->obWriteDomesticStandingOrder3->data->initiation->recurringPaymentAmount->currency = 'ducimus';
    $request->obWriteDomesticStandingOrder3->data->initiation->recurringPaymentDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T14:13:14.359Z');
    $request->obWriteDomesticStandingOrder3->data->initiation->reference = 'tempora';
    $request->obWriteDomesticStandingOrder3->data->initiation->supplementaryData = [
        'ea' => 'aspernatur',
        'vel' => 'possimus',
    ];
    $request->obWriteDomesticStandingOrder3->risk = new OBRisk1();
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->addressLine = [
        'ratione',
        'ex',
    ];
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->buildingNumber = 'laudantium';
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->country = 'Brazil';
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->countrySubDivision = 'dolor';
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->postCode = '04859-3979';
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->streetName = 'ea';
    $request->obWriteDomesticStandingOrder3->risk->deliveryAddress->townName = 'impedit';
    $request->obWriteDomesticStandingOrder3->risk->merchantCategoryCode = 'corporis';
    $request->obWriteDomesticStandingOrder3->risk->merchantCustomerIdentification = 'veniam';
    $request->obWriteDomesticStandingOrder3->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::ECOMMERCE_GOODS;
    $request->xCustomerUserAgent = 'inventore';
    $request->xFapiAuthDate = 'magnam';
    $request->xFapiCustomerIpAddress = 'ea';
    $request->xFapiInteractionId = 'quo';
    $request->xIdempotencyKey = 'consectetur';
    $request->xJwsSignature = 'recusandae';

    $requestSecurity = new CreateDomesticStandingOrdersJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->createDomesticStandingOrdersJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomesticStandingOrdersRaw

Create Domestic Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrdersRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticStandingOrdersRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticStandingOrdersRawRequest();
    $request->authorization = 'aspernatur';
    $request->requestBody = 'minima';
    $request->xCustomerUserAgent = 'eaque';
    $request->xFapiAuthDate = 'a';
    $request->xFapiCustomerIpAddress = 'libero';
    $request->xFapiInteractionId = 'aut';
    $request->xIdempotencyKey = 'aut';
    $request->xJwsSignature = 'deleniti';

    $requestSecurity = new CreateDomesticStandingOrdersRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->createDomesticStandingOrdersRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticStandingOrderConsentsConsentId

Get Domestic Standing Order Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrderConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrderConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticStandingOrderConsentsConsentIdRequest();
    $request->authorization = 'impedit';
    $request->consentId = 'aliquam';
    $request->xCustomerUserAgent = 'fugit';
    $request->xFapiAuthDate = 'accusamus';
    $request->xFapiCustomerIpAddress = 'inventore';
    $request->xFapiInteractionId = 'non';

    $requestSecurity = new GetDomesticStandingOrderConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->getDomesticStandingOrderConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticStandingOrdersDomesticStandingOrderId

Get Domestic Standing Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrdersDomesticStandingOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticStandingOrdersDomesticStandingOrderIdRequest();
    $request->authorization = 'et';
    $request->domesticStandingOrderId = 'dolorum';
    $request->xCustomerUserAgent = 'laborum';
    $request->xFapiAuthDate = 'placeat';
    $request->xFapiCustomerIpAddress = 'velit';
    $request->xFapiInteractionId = 'eum';

    $requestSecurity = new GetDomesticStandingOrdersDomesticStandingOrderIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticStandingOrders->getDomesticStandingOrdersDomesticStandingOrderId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
