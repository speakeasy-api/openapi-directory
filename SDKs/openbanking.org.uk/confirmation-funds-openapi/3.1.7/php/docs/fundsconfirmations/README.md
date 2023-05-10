# fundsConfirmations

### Available Operations

* [createFundsConfirmationConsents](#createfundsconfirmationconsents) - Create Funds Confirmation Consent
* [createFundsConfirmations](#createfundsconfirmations) - Create Funds Confirmation
* [deleteFundsConfirmationConsentsConsentId](#deletefundsconfirmationconsentsconsentid) - Delete Funds Confirmation Consent
* [getFundsConfirmationConsentsConsentId](#getfundsconfirmationconsentsconsentid) - Get Funds Confirmation Consent

## createFundsConfirmationConsents

Create Funds Confirmation Consent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1Data;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1DataDebtorAccount;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundsConfirmationConsentsRequest();
    $request->authorization = 'ipsa';
    $request->obFundsConfirmationConsent1 = new OBFundsConfirmationConsent1();
    $request->obFundsConfirmationConsent1->data = new OBFundsConfirmationConsent1Data();
    $request->obFundsConfirmationConsent1->data->debtorAccount = new OBFundsConfirmationConsent1DataDebtorAccount();
    $request->obFundsConfirmationConsent1->data->debtorAccount->identification = 'delectus';
    $request->obFundsConfirmationConsent1->data->debtorAccount->name = 'Laurie Kreiger';
    $request->obFundsConfirmationConsent1->data->debtorAccount->schemeName = 'voluptatum';
    $request->obFundsConfirmationConsent1->data->debtorAccount->secondaryIdentification = 'iusto';
    $request->obFundsConfirmationConsent1->data->expirationDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T06:24:36.919Z');
    $request->xCustomerUserAgent = 'recusandae';
    $request->xFapiAuthDate = 'temporibus';
    $request->xFapiCustomerIpAddress = 'ab';
    $request->xFapiInteractionId = 'quis';

    $requestSecurity = new CreateFundsConfirmationConsentsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->createFundsConfirmationConsents($request, $requestSecurity);

    if ($response->obFundsConfirmationConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFundsConfirmations

Create Funds Confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmation1;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmation1Data;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmation1DataInstructedAmount;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundsConfirmationsRequest();
    $request->authorization = 'veritatis';
    $request->obFundsConfirmation1 = new OBFundsConfirmation1();
    $request->obFundsConfirmation1->data = new OBFundsConfirmation1Data();
    $request->obFundsConfirmation1->data->consentId = 'deserunt';
    $request->obFundsConfirmation1->data->instructedAmount = new OBFundsConfirmation1DataInstructedAmount();
    $request->obFundsConfirmation1->data->instructedAmount->amount = 'perferendis';
    $request->obFundsConfirmation1->data->instructedAmount->currency = 'ipsam';
    $request->obFundsConfirmation1->data->reference = 'repellendus';
    $request->xCustomerUserAgent = 'sapiente';
    $request->xFapiAuthDate = 'quo';
    $request->xFapiCustomerIpAddress = 'odit';
    $request->xFapiInteractionId = 'at';

    $requestSecurity = new CreateFundsConfirmationsSecurity();
    $requestSecurity->psuoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->createFundsConfirmations($request, $requestSecurity);

    if ($response->obFundsConfirmationResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFundsConfirmationConsentsConsentId

Delete Funds Confirmation Consent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFundsConfirmationConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFundsConfirmationConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFundsConfirmationConsentsConsentIdRequest();
    $request->authorization = 'at';
    $request->consentId = 'maiores';
    $request->xCustomerUserAgent = 'molestiae';
    $request->xFapiAuthDate = 'quod';
    $request->xFapiCustomerIpAddress = 'quod';
    $request->xFapiInteractionId = 'esse';

    $requestSecurity = new DeleteFundsConfirmationConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->deleteFundsConfirmationConsentsConsentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFundsConfirmationConsentsConsentId

Get Funds Confirmation Consent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFundsConfirmationConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFundsConfirmationConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundsConfirmationConsentsConsentIdRequest();
    $request->authorization = 'totam';
    $request->consentId = 'porro';
    $request->xCustomerUserAgent = 'dolorum';
    $request->xFapiAuthDate = 'dicta';
    $request->xFapiCustomerIpAddress = 'nam';
    $request->xFapiInteractionId = 'officia';

    $requestSecurity = new GetFundsConfirmationConsentsConsentIdSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->getFundsConfirmationConsentsConsentId($request, $requestSecurity);

    if ($response->obFundsConfirmationConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
