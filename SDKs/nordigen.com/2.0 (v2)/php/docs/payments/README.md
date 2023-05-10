# payments

### Available Operations

* [createPaymentForm](#createpaymentform) - Create payment
* [createPaymentJson](#createpaymentjson) - Create payment
* [createPaymentMultipart](#createpaymentmultipart) - Create payment
* [deletePeriodicPayment](#deleteperiodicpayment) - Delete periodic payment
* [listMinimumRequiredFieldsForInstitution](#listminimumrequiredfieldsforinstitution) - List minimum required fields for institution
* [listPayments](#listpayments) - Retrieve all payments belonging to the company
* [paymentsCreditorsCreateForm](#paymentscreditorscreateform) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateJson](#paymentscreditorscreatejson) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateMultipart](#paymentscreditorscreatemultipart) - API endpoints related to creditor accounts.
* [paymentsCreditorsDestroy](#paymentscreditorsdestroy) - API endpoints related to creditor accounts.
* [paymentsCreditorsList](#paymentscreditorslist) - API endpoints related to creditor accounts.
* [paymentsCreditorsRetrieve](#paymentscreditorsretrieve) - API endpoints related to creditor accounts.
* [paymentsSubmitCreateForm](#paymentssubmitcreateform) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateJson](#paymentssubmitcreatejson) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateMultipart](#paymentssubmitcreatemultipart) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [retrieveAllPaymentCreditorAccounts](#retrieveallpaymentcreditoraccounts) - Retrieve all payment creditor accounts
* [retrievePayment](#retrievepayment) - Retrieve payment

## createPaymentForm

Create payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequest2;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestExecutionRuleEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentWriteRequest2();
    $request->creditorAccount = '28921cdd-c692-4601-bb57-6b0d5f0d30c5';
    $request->creditorObject = new CreditorAccountWriteRequest();
    $request->creditorObject->account = 'hic';
    $request->creditorObject->addressCountry = AddressCountryEnumEnum::PL;
    $request->creditorObject->addressStreet = 'nobis';
    $request->creditorObject->agent = 'dolores';
    $request->creditorObject->agentName = 'quis';
    $request->creditorObject->currency = 'totam';
    $request->creditorObject->institutionId = 'dignissimos';
    $request->creditorObject->name = 'Beatrice Dooley Sr.';
    $request->creditorObject->postCode = '42839-9675';
    $request->creditorObject->type = CreditorAccountWriteRequestTypeEnum::IBAN;
    $request->customPaymentId = 'porro';
    $request->debtorAccount = 'consequuntur';
    $request->description = 'blanditiis';
    $request->institutionId = 'error';
    $request->instructedAmount = new InstructedAmountRequest();
    $request->instructedAmount->amount = 'eaque';
    $request->instructedAmount->currency = 'occaecati';
    $request->paymentProduct = 'rerum';
    $request->periodicPayment = new PeriodicPaymentRequest();
    $request->periodicPayment->dayOfExecution = 'adipisci';
    $request->periodicPayment->endDate = DateTime::createFromFormat('Y-m-d', '2020-03-14');
    $request->periodicPayment->executionRule = PeriodicPaymentRequestExecutionRuleEnum::FOLLOWING;
    $request->periodicPayment->frequency = PeriodicPaymentRequestFrequencyEnum::QUARTERLY;
    $request->periodicPayment->startDate = DateTime::createFromFormat('Y-m-d', '2021-12-05');
    $request->redirect = 'https://only-rice.net';
    $request->requestedExecutionDate = DateTime::createFromFormat('Y-m-d', '2022-01-24');
    $request->submitPayment = false;

    $response = $sdk->payments->createPaymentForm($request);

    if ($response->paymentWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPaymentJson

Create payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequestDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequestDebtorAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequestPaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestExecutionRuleEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentWriteRequest();
    $request->creditorAccount = '8633323f-9b77-4f3a-8100-674ebf69280d';
    $request->creditorObject = new CreditorAccountWriteRequest();
    $request->creditorObject->account = 'ab';
    $request->creditorObject->addressCountry = AddressCountryEnumEnum::PL;
    $request->creditorObject->addressStreet = 'dolorum';
    $request->creditorObject->agent = 'iusto';
    $request->creditorObject->agentName = 'voluptate';
    $request->creditorObject->currency = 'dolorum';
    $request->creditorObject->institutionId = 'deleniti';
    $request->creditorObject->name = 'Terence Rau';
    $request->creditorObject->postCode = '46921';
    $request->creditorObject->type = CreditorAccountWriteRequestTypeEnum::IBAN;
    $request->customPaymentId = 'amet';
    $request->debtorAccount = new PaymentWriteRequestDebtorAccount();
    $request->debtorAccount->account = 'optio';
    $request->debtorAccount->addressCountry = 'accusamus';
    $request->debtorAccount->addressStreet = 'ad';
    $request->debtorAccount->currency = 'saepe';
    $request->debtorAccount->name = 'Rosie McKenzie';
    $request->debtorAccount->postCode = '60832-4781';
    $request->debtorAccount->type = PaymentWriteRequestDebtorAccountTypeEnum::SCAN;
    $request->debtorAccount->typeNumber = 'a';
    $request->description = 'esse';
    $request->institutionId = 'harum';
    $request->instructedAmount = new InstructedAmountRequest();
    $request->instructedAmount->amount = 'iusto';
    $request->instructedAmount->currency = 'ipsum';
    $request->paymentProduct = PaymentWriteRequestPaymentProductEnum::SWIFT;
    $request->periodicPayment = new PeriodicPaymentRequest();
    $request->periodicPayment->dayOfExecution = 'tenetur';
    $request->periodicPayment->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-09');
    $request->periodicPayment->executionRule = PeriodicPaymentRequestExecutionRuleEnum::PRECEDING;
    $request->periodicPayment->frequency = PeriodicPaymentRequestFrequencyEnum::EVERY_TWO_WEEKS;
    $request->periodicPayment->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->redirect = 'https://masculine-introduction.com';
    $request->requestedExecutionDate = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->submitPayment = false;

    $response = $sdk->payments->createPaymentJson($request);

    if ($response->paymentWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPaymentMultipart

Create payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentWriteRequest2;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestExecutionRuleEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentRequestFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentWriteRequest2();
    $request->creditorAccount = '26b5a734-29cd-4b1a-8422-bb679d232271';
    $request->creditorObject = new CreditorAccountWriteRequest();
    $request->creditorObject->account = 'ullam';
    $request->creditorObject->addressCountry = AddressCountryEnumEnum::PL;
    $request->creditorObject->addressStreet = 'hic';
    $request->creditorObject->agent = 'voluptatem';
    $request->creditorObject->agentName = 'cumque';
    $request->creditorObject->currency = 'soluta';
    $request->creditorObject->institutionId = 'nobis';
    $request->creditorObject->name = 'Miss Kerry Emmerich';
    $request->creditorObject->postCode = '50922-2261';
    $request->creditorObject->type = CreditorAccountWriteRequestTypeEnum::IBAN;
    $request->customPaymentId = 'aut';
    $request->debtorAccount = 'quas';
    $request->description = 'itaque';
    $request->institutionId = 'consequatur';
    $request->instructedAmount = new InstructedAmountRequest();
    $request->instructedAmount->amount = 'est';
    $request->instructedAmount->currency = 'repellendus';
    $request->paymentProduct = 'porro';
    $request->periodicPayment = new PeriodicPaymentRequest();
    $request->periodicPayment->dayOfExecution = 'doloribus';
    $request->periodicPayment->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-19');
    $request->periodicPayment->executionRule = PeriodicPaymentRequestExecutionRuleEnum::PRECEDING;
    $request->periodicPayment->frequency = PeriodicPaymentRequestFrequencyEnum::WEEKLY;
    $request->periodicPayment->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-27');
    $request->redirect = 'http://obese-western.net';
    $request->requestedExecutionDate = DateTime::createFromFormat('Y-m-d', '2021-03-07');
    $request->submitPayment = false;

    $response = $sdk->payments->createPaymentMultipart($request);

    if ($response->paymentWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePeriodicPayment

Delete periodic payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePeriodicPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePeriodicPaymentRequest();
    $request->id = '53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7';

    $response = $sdk->payments->deletePeriodicPayment($request);

    if ($response->deletePeriodicPayment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMinimumRequiredFieldsForInstitution

List minimum required fields for institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMinimumRequiredFieldsForInstitutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMinimumRequiredFieldsForInstitutionRequest();
    $request->institutionId = 'eligendi';

    $response = $sdk->payments->listMinimumRequiredFieldsForInstitution($request);

    if ($response->listMinimumRequiredFieldsForInstitution200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPayments

Retrieve all payments belonging to the company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentsRequest();
    $request->limit = 497391;
    $request->offset = 4048;

    $response = $sdk->payments->listPayments($request);

    if ($response->paginatedPaymentReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsCreateForm

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest1;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditorAccountWriteRequest1();
    $request->account = 'officia';
    $request->addressCountry = AddressCountryEnumEnum::FI;
    $request->addressStreet = 'ipsam';
    $request->agent = 'ea';
    $request->agentName = 'aspernatur';
    $request->currency = 'vel';
    $request->institutionId = 'possimus';
    $request->name = 'Paula Jacobs I';
    $request->postCode = '04859-3979';
    $request->type = 'ea';

    $response = $sdk->payments->paymentsCreditorsCreateForm($request);

    if ($response->creditorAccountWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsCreateJson

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditorAccountWriteRequest();
    $request->account = 'impedit';
    $request->addressCountry = AddressCountryEnumEnum::GR;
    $request->addressStreet = 'veniam';
    $request->agent = 'aliquid';
    $request->agentName = 'inventore';
    $request->currency = 'magnam';
    $request->institutionId = 'ea';
    $request->name = 'Glenn Walter';
    $request->postCode = '97005';
    $request->type = CreditorAccountWriteRequestTypeEnum::SCAN;

    $response = $sdk->payments->paymentsCreditorsCreateJson($request);

    if ($response->creditorAccountWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsCreateMultipart

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest1;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditorAccountWriteRequest1();
    $request->account = 'aliquam';
    $request->addressCountry = AddressCountryEnumEnum::CY;
    $request->addressStreet = 'accusamus';
    $request->agent = 'inventore';
    $request->agentName = 'non';
    $request->currency = 'et';
    $request->institutionId = 'dolorum';
    $request->name = 'Clark Franecki';
    $request->postCode = '58837-0221';
    $request->type = 'provident';

    $response = $sdk->payments->paymentsCreditorsCreateMultipart($request);

    if ($response->creditorAccountWrite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsDestroy

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsCreditorsDestroyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsCreditorsDestroyRequest();
    $request->id = '07474778-a7bd-4466-928c-10ab3cdca425';

    $response = $sdk->payments->paymentsCreditorsDestroy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsList

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsCreditorsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsCreditorsListRequest();
    $request->account = 'ab';
    $request->addressCountry = 'cupiditate';
    $request->agent = 'consequatur';
    $request->currency = 'tempora';
    $request->limit = 892050;
    $request->name = 'Kelly Donnelly';
    $request->offset = 925164;
    $request->type = 'aperiam';

    $response = $sdk->payments->paymentsCreditorsList($request);

    if ($response->paginatedCreditorAccountList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsCreditorsRetrieve

API endpoints related to creditor accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsCreditorsRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsCreditorsRetrieveRequest();
    $request->id = 'bc7178e4-796f-42a7-8c68-8282aa482562';

    $response = $sdk->payments->paymentsCreditorsRetrieve($request);

    if ($response->creditorAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsSubmitCreateForm

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsSubmitCreateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentReadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsSubmitCreateFormRequest();
    $request->paymentReadRequest1 = new PaymentReadRequest1();
    $request->paymentReadRequest1->creditorAccount = 'f222e981-7ee1-47cb-a61e-6b7b95bc0ab3';
    $request->paymentReadRequest1->creditorObject = new CreditorAccountWriteRequest();
    $request->paymentReadRequest1->creditorObject->account = 'cumque';
    $request->paymentReadRequest1->creditorObject->addressCountry = AddressCountryEnumEnum::CZ;
    $request->paymentReadRequest1->creditorObject->addressStreet = 'consequatur';
    $request->paymentReadRequest1->creditorObject->agent = 'minus';
    $request->paymentReadRequest1->creditorObject->agentName = 'quaerat';
    $request->paymentReadRequest1->creditorObject->currency = 'sapiente';
    $request->paymentReadRequest1->creditorObject->institutionId = 'consectetur';
    $request->paymentReadRequest1->creditorObject->name = 'Mattie McLaughlin';
    $request->paymentReadRequest1->creditorObject->postCode = '40965-8819';
    $request->paymentReadRequest1->creditorObject->type = CreditorAccountWriteRequestTypeEnum::SCAN;
    $request->paymentReadRequest1->customPaymentId = 'facere';
    $request->paymentReadRequest1->debtorAccount = new DebtorAccountWriteRequest();
    $request->paymentReadRequest1->debtorAccount->account = 'veritatis';
    $request->paymentReadRequest1->debtorAccount->addressCountry = 'consequuntur';
    $request->paymentReadRequest1->debtorAccount->addressStreet = 'quasi';
    $request->paymentReadRequest1->debtorAccount->currency = 'similique';
    $request->paymentReadRequest1->debtorAccount->name = 'Dr. Gene Wiegand';
    $request->paymentReadRequest1->debtorAccount->postCode = '27870';
    $request->paymentReadRequest1->debtorAccount->type = DebtorAccountWriteRequestTypeEnum::IBAN;
    $request->paymentReadRequest1->debtorAccount->typeNumber = 'sapiente';
    $request->paymentReadRequest1->description = 'dicta';
    $request->paymentReadRequest1->institutionId = 'ullam';
    $request->paymentReadRequest1->instructedAmount = new InstructedAmountRequest();
    $request->paymentReadRequest1->instructedAmount->amount = 'reprehenderit';
    $request->paymentReadRequest1->instructedAmount->currency = 'ullam';
    $request->paymentReadRequest1->paymentProduct = 'nisi';
    $request->paymentReadRequest1->redirect = 'http://mild-commerce.org';
    $request->id = '68ea19f1-d170-4513-b9d0-8086a1840394';

    $response = $sdk->payments->paymentsSubmitCreateForm($request);

    if ($response->paymentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsSubmitCreateJson

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsSubmitCreateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentReadRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentReadRequestPaymentProductEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsSubmitCreateJsonRequest();
    $request->paymentReadRequest = new PaymentReadRequest();
    $request->paymentReadRequest->creditorAccount = 'c26071f9-3f5f-4064-adac-7af515cc413a';
    $request->paymentReadRequest->creditorObject = new CreditorAccountWriteRequest();
    $request->paymentReadRequest->creditorObject->account = 'id';
    $request->paymentReadRequest->creditorObject->addressCountry = AddressCountryEnumEnum::HU;
    $request->paymentReadRequest->creditorObject->addressStreet = 'velit';
    $request->paymentReadRequest->creditorObject->agent = 'culpa';
    $request->paymentReadRequest->creditorObject->agentName = 'est';
    $request->paymentReadRequest->creditorObject->currency = 'recusandae';
    $request->paymentReadRequest->creditorObject->institutionId = 'totam';
    $request->paymentReadRequest->creditorObject->name = 'Chester Kuphal';
    $request->paymentReadRequest->creditorObject->postCode = '87744';
    $request->paymentReadRequest->creditorObject->type = CreditorAccountWriteRequestTypeEnum::IBAN;
    $request->paymentReadRequest->customPaymentId = 'reiciendis';
    $request->paymentReadRequest->debtorAccount = new DebtorAccountWriteRequest();
    $request->paymentReadRequest->debtorAccount->account = 'assumenda';
    $request->paymentReadRequest->debtorAccount->addressCountry = 'nemo';
    $request->paymentReadRequest->debtorAccount->addressStreet = 'recusandae';
    $request->paymentReadRequest->debtorAccount->currency = 'aliquid';
    $request->paymentReadRequest->debtorAccount->name = 'Karla Feest';
    $request->paymentReadRequest->debtorAccount->postCode = '82939-6982';
    $request->paymentReadRequest->debtorAccount->type = DebtorAccountWriteRequestTypeEnum::IBAN;
    $request->paymentReadRequest->debtorAccount->typeNumber = 'asperiores';
    $request->paymentReadRequest->description = 'adipisci';
    $request->paymentReadRequest->institutionId = 'non';
    $request->paymentReadRequest->instructedAmount = new InstructedAmountRequest();
    $request->paymentReadRequest->instructedAmount->amount = 'amet';
    $request->paymentReadRequest->instructedAmount->currency = 'beatae';
    $request->paymentReadRequest->paymentProduct = PaymentReadRequestPaymentProductEnum::BACS;
    $request->paymentReadRequest->redirect = 'https://unimportant-custard.info';
    $request->id = 'b60eb1ea-4265-455b-a3c2-8744ed53b88f';

    $response = $sdk->payments->paymentsSubmitCreateJson($request);

    if ($response->paymentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsSubmitCreateMultipart

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsSubmitCreateMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentReadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressCountryEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebtorAccountWriteRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructedAmountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsSubmitCreateMultipartRequest();
    $request->paymentReadRequest1 = new PaymentReadRequest1();
    $request->paymentReadRequest1->creditorAccount = '3a8d8f5c-0b2f-42fb-bb19-4a276b26916f';
    $request->paymentReadRequest1->creditorObject = new CreditorAccountWriteRequest();
    $request->paymentReadRequest1->creditorObject->account = 'debitis';
    $request->paymentReadRequest1->creditorObject->addressCountry = AddressCountryEnumEnum::BG;
    $request->paymentReadRequest1->creditorObject->addressStreet = 'reiciendis';
    $request->paymentReadRequest1->creditorObject->agent = 'perferendis';
    $request->paymentReadRequest1->creditorObject->agentName = 'corrupti';
    $request->paymentReadRequest1->creditorObject->currency = 'maiores';
    $request->paymentReadRequest1->creditorObject->institutionId = 'incidunt';
    $request->paymentReadRequest1->creditorObject->name = 'Sherri Gerlach';
    $request->paymentReadRequest1->creditorObject->postCode = '55922';
    $request->paymentReadRequest1->creditorObject->type = CreditorAccountWriteRequestTypeEnum::IBAN;
    $request->paymentReadRequest1->customPaymentId = 'reiciendis';
    $request->paymentReadRequest1->debtorAccount = new DebtorAccountWriteRequest();
    $request->paymentReadRequest1->debtorAccount->account = 'ex';
    $request->paymentReadRequest1->debtorAccount->addressCountry = 'sit';
    $request->paymentReadRequest1->debtorAccount->addressStreet = 'non';
    $request->paymentReadRequest1->debtorAccount->currency = 'officiis';
    $request->paymentReadRequest1->debtorAccount->name = 'Malcolm Hagenes';
    $request->paymentReadRequest1->debtorAccount->postCode = '50763-3998';
    $request->paymentReadRequest1->debtorAccount->type = DebtorAccountWriteRequestTypeEnum::IBAN;
    $request->paymentReadRequest1->debtorAccount->typeNumber = 'aperiam';
    $request->paymentReadRequest1->description = 'saepe';
    $request->paymentReadRequest1->institutionId = 'numquam';
    $request->paymentReadRequest1->instructedAmount = new InstructedAmountRequest();
    $request->paymentReadRequest1->instructedAmount->amount = 'veniam';
    $request->paymentReadRequest1->instructedAmount->currency = 'in';
    $request->paymentReadRequest1->paymentProduct = 'officiis';
    $request->paymentReadRequest1->redirect = 'http://magnificent-fishbone.name';
    $request->id = 'b6a89fbe-3a5a-4a8e-8824-d0ab4075088e';

    $response = $sdk->payments->paymentsSubmitCreateMultipart($request);

    if ($response->paymentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAllPaymentCreditorAccounts

Retrieve all payment creditor accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->payments->retrieveAllPaymentCreditorAccounts();

    if ($response->creditorAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrievePayment

Retrieve payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePaymentRequest();
    $request->id = '51862065-e904-4f3b-9194-b8abf603a79f';

    $response = $sdk->payments->retrievePayment($request);

    if ($response->paymentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
