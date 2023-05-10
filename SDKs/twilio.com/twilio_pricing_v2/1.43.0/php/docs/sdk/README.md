# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchTrunkingCountry](#fetchtrunkingcountry) - Fetch a specific Country.
* [fetchTrunkingNumber](#fetchtrunkingnumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [fetchVoiceCountry](#fetchvoicecountry) - Fetch a specific Country.
* [fetchVoiceNumber](#fetchvoicenumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [listTrunkingCountry](#listtrunkingcountry)
* [listVoiceCountry](#listvoicecountry)

## fetchTrunkingCountry

Fetch a specific Country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunkingCountryRequest();
    $request->isoCountry = 'provident';

    $requestSecurity = new FetchTrunkingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrunkingCountry($request, $requestSecurity);

    if ($response->pricingV2TrunkingCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrunkingNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunkingNumberRequest();
    $request->destinationNumber = 'distinctio';
    $request->originationNumber = 'quibusdam';

    $requestSecurity = new FetchTrunkingNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrunkingNumber($request, $requestSecurity);

    if ($response->pricingV2TrunkingNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVoiceCountry

Fetch a specific Country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVoiceCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVoiceCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVoiceCountryRequest();
    $request->isoCountry = 'unde';

    $requestSecurity = new FetchVoiceCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVoiceCountry($request, $requestSecurity);

    if ($response->pricingV2VoiceVoiceCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVoiceNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVoiceNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVoiceNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVoiceNumberRequest();
    $request->destinationNumber = 'nulla';
    $request->originationNumber = 'corrupti';

    $requestSecurity = new FetchVoiceNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVoiceNumber($request, $requestSecurity);

    if ($response->pricingV2VoiceVoiceNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrunkingCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrunkingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrunkingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrunkingCountryRequest();
    $request->page = 847252;
    $request->pageSize = 423655;
    $request->pageToken = 'error';

    $requestSecurity = new ListTrunkingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrunkingCountry($request, $requestSecurity);

    if ($response->listTrunkingCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVoiceCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVoiceCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVoiceCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVoiceCountryRequest();
    $request->page = 645894;
    $request->pageSize = 384382;
    $request->pageToken = 'iure';

    $requestSecurity = new ListVoiceCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVoiceCountry($request, $requestSecurity);

    if ($response->listVoiceCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
