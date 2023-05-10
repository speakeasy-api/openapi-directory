# application

## Overview

Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.

### Available Operations

* [linkApplication](#linkapplication) - Link application to an account
* [unliWithoutApplicationnkApplication](#unliwithoutapplicationnkapplication) - Unlink application from an account

## linkApplication

Link application to an account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LinkApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\LinkApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LinkApplicationProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\LinkApplicationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkApplicationRequest();
    $request->requestBody = new LinkApplicationRequestBody();
    $request->requestBody->application = 'applicationId';
    $request->externalId = 'distinctio';
    $request->provider = LinkApplicationProviderEnum::WHATSAPP;

    $requestSecurity = new LinkApplicationSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->application->linkApplication($request, $requestSecurity);

    if ($response->accountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unliWithoutApplicationnkApplication

Unlink application from an account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnliWithoutApplicationnkApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnliWithoutApplicationnkApplicationProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UnliWithoutApplicationnkApplicationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnliWithoutApplicationnkApplicationRequest();
    $request->applicationId = 'unde';
    $request->externalId = 'nulla';
    $request->provider = UnliWithoutApplicationnkApplicationProviderEnum::VIBER_SERVICE_MSG;

    $requestSecurity = new UnliWithoutApplicationnkApplicationSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->application->unliWithoutApplicationnkApplication($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
