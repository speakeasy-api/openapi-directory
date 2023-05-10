# filePayments

### Available Operations

* [createFilePaymentConsentsConsentIdFileJson](#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [createFilePaymentConsentsConsentIdFileRaw](#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [createFilePaymentConsentsJson](#createfilepaymentconsentsjson) - Create File Payment Consents
* [createFilePaymentConsentsRaw](#createfilepaymentconsentsraw) - Create File Payment Consents
* [createFilePaymentsJson](#createfilepaymentsjson) - Create File Payments
* [createFilePaymentsRaw](#createfilepaymentsraw) - Create File Payments
* [getFilePaymentConsentsConsentId](#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [getFilePaymentConsentsConsentIdFile](#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [getFilePaymentsFilePaymentId](#getfilepaymentsfilepaymentid) - Get File Payments
* [getFilePaymentsFilePaymentIdReportFile](#getfilepaymentsfilepaymentidreportfile) - Get File Payments

## createFilePaymentConsentsConsentIdFileJson

Create File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsConsentIdFileJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsConsentIdFileJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentConsentsConsentIdFileJsonRequest();
    $request->authorization = 'autem';
    $request->consentId = 'nobis';
    $request->requestBody = [
        'assumenda' => 'nulla',
        'voluptas' => 'libero',
        'quasi' => 'tempora',
    ];
    $request->xCustomerUserAgent = 'numquam';
    $request->xFapiAuthDate = 'explicabo';
    $request->xFapiCustomerIpAddress = 'provident';
    $request->xFapiInteractionId = 'ipsa';
    $request->xIdempotencyKey = 'molestiae';
    $request->xJwsSignature = 'magnam';

    $requestSecurity = new CreateFilePaymentConsentsConsentIdFileJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentConsentsConsentIdFileJson($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilePaymentConsentsConsentIdFileRaw

Create File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsConsentIdFileRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsConsentIdFileRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentConsentsConsentIdFileRawRequest();
    $request->authorization = 'odio';
    $request->consentId = 'eius';
    $request->requestBody = 'esse';
    $request->xCustomerUserAgent = 'esse';
    $request->xFapiAuthDate = 'rem';
    $request->xFapiCustomerIpAddress = 'fuga';
    $request->xFapiInteractionId = 'reprehenderit';
    $request->xIdempotencyKey = 'quidem';
    $request->xJwsSignature = 'fugiat';

    $requestSecurity = new CreateFilePaymentConsentsConsentIdFileRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentConsentsConsentIdFileRaw($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilePaymentConsentsJson

Create File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFileConsent3DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentConsentsJsonRequest();
    $request->authorization = 'ut';
    $request->obWriteFileConsent3 = new OBWriteFileConsent3();
    $request->obWriteFileConsent3->data = new OBWriteFileConsent3Data();
    $request->obWriteFileConsent3->data->authorisation = new OBWriteFileConsent3DataAuthorisation();
    $request->obWriteFileConsent3->data->authorisation->authorisationType = OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnum::ANY;
    $request->obWriteFileConsent3->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-05T04:36:55.913Z');
    $request->obWriteFileConsent3->data->initiation = new OBWriteFileConsent3DataInitiation();
    $request->obWriteFileConsent3->data->initiation->controlSum = 1811.51;
    $request->obWriteFileConsent3->data->initiation->debtorAccount = new OBWriteFileConsent3DataInitiationDebtorAccount();
    $request->obWriteFileConsent3->data->initiation->debtorAccount->identification = 'praesentium';
    $request->obWriteFileConsent3->data->initiation->debtorAccount->name = 'Harold Bednar';
    $request->obWriteFileConsent3->data->initiation->debtorAccount->schemeName = 'neque';
    $request->obWriteFileConsent3->data->initiation->debtorAccount->secondaryIdentification = 'quo';
    $request->obWriteFileConsent3->data->initiation->fileHash = 'illum';
    $request->obWriteFileConsent3->data->initiation->fileReference = 'quo';
    $request->obWriteFileConsent3->data->initiation->fileType = 'fuga';
    $request->obWriteFileConsent3->data->initiation->localInstrument = 'eius';
    $request->obWriteFileConsent3->data->initiation->numberOfTransactions = 'eos';
    $request->obWriteFileConsent3->data->initiation->remittanceInformation = new OBWriteFileConsent3DataInitiationRemittanceInformation();
    $request->obWriteFileConsent3->data->initiation->remittanceInformation->reference = 'voluptas';
    $request->obWriteFileConsent3->data->initiation->remittanceInformation->unstructured = 'ab';
    $request->obWriteFileConsent3->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T22:15:46.522Z');
    $request->obWriteFileConsent3->data->initiation->supplementaryData = [
        'debitis' => 'ipsam',
        'aspernatur' => 'sequi',
    ];
    $request->obWriteFileConsent3->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteFileConsent3->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::SCA;
    $request->obWriteFileConsent3->data->scaSupportData->referencePaymentOrderId = 'esse';
    $request->obWriteFileConsent3->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'aperiam';
    $request->xFapiAuthDate = 'distinctio';
    $request->xFapiCustomerIpAddress = 'quod';
    $request->xFapiInteractionId = 'dignissimos';
    $request->xIdempotencyKey = 'inventore';
    $request->xJwsSignature = 'nihil';

    $requestSecurity = new CreateFilePaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilePaymentConsentsRaw

Create File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentConsentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentConsentsRawRequest();
    $request->authorization = 'totam';
    $request->requestBody = 'accusamus';
    $request->xCustomerUserAgent = 'aliquam';
    $request->xFapiAuthDate = 'odio';
    $request->xFapiCustomerIpAddress = 'occaecati';
    $request->xFapiInteractionId = 'commodi';
    $request->xIdempotencyKey = 'sapiente';
    $request->xJwsSignature = 'dolores';

    $requestSecurity = new CreateFilePaymentConsentsRawSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentConsentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilePaymentsJson

Create File Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFile2;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFile2Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFile2DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFile2DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteFile2DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentsJsonRequest();
    $request->authorization = 'deserunt';
    $request->obWriteFile2 = new OBWriteFile2();
    $request->obWriteFile2->data = new OBWriteFile2Data();
    $request->obWriteFile2->data->consentId = 'molestiae';
    $request->obWriteFile2->data->initiation = new OBWriteFile2DataInitiation();
    $request->obWriteFile2->data->initiation->controlSum = 353.62;
    $request->obWriteFile2->data->initiation->debtorAccount = new OBWriteFile2DataInitiationDebtorAccount();
    $request->obWriteFile2->data->initiation->debtorAccount->identification = 'porro';
    $request->obWriteFile2->data->initiation->debtorAccount->name = 'Dianne Langosh';
    $request->obWriteFile2->data->initiation->debtorAccount->schemeName = 'fugit';
    $request->obWriteFile2->data->initiation->debtorAccount->secondaryIdentification = 'fuga';
    $request->obWriteFile2->data->initiation->fileHash = 'mollitia';
    $request->obWriteFile2->data->initiation->fileReference = 'incidunt';
    $request->obWriteFile2->data->initiation->fileType = 'atque';
    $request->obWriteFile2->data->initiation->localInstrument = 'explicabo';
    $request->obWriteFile2->data->initiation->numberOfTransactions = 'minima';
    $request->obWriteFile2->data->initiation->remittanceInformation = new OBWriteFile2DataInitiationRemittanceInformation();
    $request->obWriteFile2->data->initiation->remittanceInformation->reference = 'nisi';
    $request->obWriteFile2->data->initiation->remittanceInformation->unstructured = 'fugit';
    $request->obWriteFile2->data->initiation->requestedExecutionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T22:36:51.892Z');
    $request->obWriteFile2->data->initiation->supplementaryData = [
        'explicabo' => 'saepe',
    ];
    $request->xCustomerUserAgent = 'occaecati';
    $request->xFapiAuthDate = 'atque';
    $request->xFapiCustomerIpAddress = 'et';
    $request->xFapiInteractionId = 'esse';
    $request->xIdempotencyKey = 'eveniet';
    $request->xJwsSignature = 'accusamus';

    $requestSecurity = new CreateFilePaymentsJsonSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilePaymentsRaw

Create File Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilePaymentsRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilePaymentsRawRequest();
    $request->authorization = 'veritatis';
    $request->requestBody = 'esse';
    $request->xCustomerUserAgent = 'quod';
    $request->xFapiAuthDate = 'nam';
    $request->xFapiCustomerIpAddress = 'vero';
    $request->xFapiInteractionId = 'aliquid';
    $request->xIdempotencyKey = 'quasi';
    $request->xJwsSignature = 'saepe';

    $requestSecurity = new CreateFilePaymentsRawSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->createFilePaymentsRaw($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilePaymentConsentsConsentId

Get File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilePaymentConsentsConsentIdRequest();
    $request->authorization = 'vel';
    $request->consentId = 'harum';
    $request->xCustomerUserAgent = 'molestiae';
    $request->xFapiAuthDate = 'rerum';
    $request->xFapiCustomerIpAddress = 'occaecati';
    $request->xFapiInteractionId = 'minima';

    $requestSecurity = new GetFilePaymentConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->getFilePaymentConsentsConsentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilePaymentConsentsConsentIdFile

Get File Payment Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentConsentsConsentIdFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentConsentsConsentIdFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilePaymentConsentsConsentIdFileRequest();
    $request->authorization = 'distinctio';
    $request->consentId = 'eligendi';
    $request->xCustomerUserAgent = 'sit';
    $request->xFapiAuthDate = 'culpa';
    $request->xFapiCustomerIpAddress = 'tempore';
    $request->xFapiInteractionId = 'adipisci';

    $requestSecurity = new GetFilePaymentConsentsConsentIdFileSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->getFilePaymentConsentsConsentIdFile($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilePaymentsFilePaymentId

Get File Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilePaymentsFilePaymentIdRequest();
    $request->authorization = 'cumque';
    $request->filePaymentId = 'consequuntur';
    $request->xCustomerUserAgent = 'consequatur';
    $request->xFapiAuthDate = 'minus';
    $request->xFapiCustomerIpAddress = 'quaerat';
    $request->xFapiInteractionId = 'sapiente';

    $requestSecurity = new GetFilePaymentsFilePaymentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->getFilePaymentsFilePaymentId($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilePaymentsFilePaymentIdReportFile

Get File Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdReportFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdReportFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilePaymentsFilePaymentIdReportFileRequest();
    $request->authorization = 'consectetur';
    $request->filePaymentId = 'esse';
    $request->xCustomerUserAgent = 'blanditiis';
    $request->xFapiAuthDate = 'provident';
    $request->xFapiCustomerIpAddress = 'a';
    $request->xFapiInteractionId = 'nulla';

    $requestSecurity = new GetFilePaymentsFilePaymentIdReportFileSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->filePayments->getFilePaymentsFilePaymentIdReportFile($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
