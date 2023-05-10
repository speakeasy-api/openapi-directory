# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchPhoneNumber](#fetchphonenumber) - Fetch the Inbound Processing Region assigned to a phone number.
* [fetchSipDomain](#fetchsipdomain)
* [fetchTrunks](#fetchtrunks) - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* [updatePhoneNumber](#updatephonenumber) - Assign an Inbound Processing Region to a phone number.
* [updateSipDomain](#updatesipdomain)
* [updateTrunks](#updatetrunks) - Assign an Inbound Processing Region to a SIP Trunk

## fetchPhoneNumber

Fetch the Inbound Processing Region assigned to a phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberRequest();
    $request->phoneNumber = 'provident';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->routesV2PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipDomain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipDomainRequest();
    $request->sipDomain = 'distinctio';

    $requestSecurity = new FetchSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipDomain($request, $requestSecurity);

    if ($response->routesV2SipDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrunks

Fetch the Inbound Processing Region assigned to a SIP Trunk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunksRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunksRequest();
    $request->sipTrunkDomain = 'quibusdam';

    $requestSecurity = new FetchTrunksSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrunks($request, $requestSecurity);

    if ($response->routesV2Trunks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePhoneNumber

Assign an Inbound Processing Region to a phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberUpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePhoneNumberRequest();
    $request->phoneNumber = 'unde';
    $request->requestBody = new UpdatePhoneNumberUpdatePhoneNumberRequest();
    $request->requestBody->friendlyName = 'nulla';
    $request->requestBody->voiceRegion = 'corrupti';

    $requestSecurity = new UpdatePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updatePhoneNumber($request, $requestSecurity);

    if ($response->routesV2PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipDomain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainUpdateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipDomainRequest();
    $request->requestBody = new UpdateSipDomainUpdateSipDomainRequest();
    $request->requestBody->friendlyName = 'illum';
    $request->requestBody->voiceRegion = 'vel';
    $request->sipDomain = 'error';

    $requestSecurity = new UpdateSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipDomain($request, $requestSecurity);

    if ($response->routesV2SipDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrunks

Assign an Inbound Processing Region to a SIP Trunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunksRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunksUpdateTrunksRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrunksRequest();
    $request->requestBody = new UpdateTrunksUpdateTrunksRequest();
    $request->requestBody->friendlyName = 'deserunt';
    $request->requestBody->voiceRegion = 'suscipit';
    $request->sipTrunkDomain = 'iure';

    $requestSecurity = new UpdateTrunksSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTrunks($request, $requestSecurity);

    if ($response->routesV2Trunks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
