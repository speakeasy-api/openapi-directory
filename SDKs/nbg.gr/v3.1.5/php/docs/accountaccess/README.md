# accountAccess

### Available Operations

* [deleteAccountAccessConsentsConsentId](#deleteaccountaccessconsentsconsentid) - Delete Account Access Consents
* [getAccountAccessConsentsConsentId](#getaccountaccessconsentsconsentid) - Get Account Access Consents
* [postAccountAccessConsents](#postaccountaccessconsents) - Create Account Access Consents

## deleteAccountAccessConsentsConsentId

Delete Account Access Consents by Consent ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAccessConsentsConsentIdRequest();
    $request->consentId = 'corrupti';
    $request->sandboxId = 'illum';
    $request->xCustomerUserAgent = 'vel';
    $request->xFapiAuthDate = 'error';
    $request->xFapiCustomerIpAddress = 'deserunt';
    $request->xFapiInteractionId = 'suscipit';

    $requestSecurity = new DeleteAccountAccessConsentsConsentIdSecurity();
    $requestSecurity->clientCredentialsToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountAccess->deleteAccountAccessConsentsConsentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountAccessConsentsConsentId

Get Account Access Consents by Consent ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountAccessConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountAccessConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountAccessConsentsConsentIdRequest();
    $request->consentId = 'iure';
    $request->sandboxId = 'magnam';
    $request->xCustomerUserAgent = 'debitis';
    $request->xFapiAuthDate = 'ipsa';
    $request->xFapiCustomerIpAddress = 'delectus';
    $request->xFapiInteractionId = 'tempora';

    $requestSecurity = new GetAccountAccessConsentsConsentIdSecurity();
    $requestSecurity->clientCredentialsToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountAccess->getAccountAccessConsentsConsentId($request, $requestSecurity);

    if ($response->obReadConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountAccessConsents

Create Account Access Consents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountAccessConsentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBReadConsent1;
use \OpenAPI\OpenAPI\Models\Shared\OBReadData1;
use \OpenAPI\OpenAPI\Models\Shared\OBExternalPermissions1CodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountAccessConsentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountAccessConsentsRequest();
    $request->obReadConsent1 = new OBReadConsent1();
    $request->obReadConsent1->data = new OBReadData1();
    $request->obReadConsent1->data->expirationDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-10T15:39:12.517Z');
    $request->obReadConsent1->data->permissions = [
        OBExternalPermissions1CodeEnum::READ_TRANSACTIONS_BASIC,
        OBExternalPermissions1CodeEnum::READ_SCHEDULED_PAYMENTS_BASIC,
        OBExternalPermissions1CodeEnum::READ_PRODUCTS,
        OBExternalPermissions1CodeEnum::READ_SCHEDULED_PAYMENTS_BASIC,
    ];
    $request->obReadConsent1->data->transactionFromDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T03:46:24.500Z');
    $request->obReadConsent1->data->transactionToDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T05:10:19.629Z');
    $request->obReadConsent1->risk = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];
    $request->sandboxId = 'repellendus';
    $request->xCustomerUserAgent = 'sapiente';
    $request->xFapiAuthDate = 'quo';
    $request->xFapiCustomerIpAddress = 'odit';
    $request->xFapiInteractionId = 'at';

    $requestSecurity = new PostAccountAccessConsentsSecurity();
    $requestSecurity->clientCredentialsToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountAccess->postAccountAccessConsents($request, $requestSecurity);

    if ($response->obReadConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
