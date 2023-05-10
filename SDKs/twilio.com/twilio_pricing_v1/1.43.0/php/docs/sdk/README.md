# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchMessagingCountry](#fetchmessagingcountry)
* [fetchPhoneNumberCountry](#fetchphonenumbercountry)
* [fetchVoiceCountry](#fetchvoicecountry)
* [fetchVoiceNumber](#fetchvoicenumber)
* [listMessagingCountry](#listmessagingcountry)
* [listPhoneNumberCountry](#listphonenumbercountry)
* [listVoiceCountry](#listvoicecountry)

## fetchMessagingCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessagingCountryRequest();
    $request->isoCountry = 'provident';

    $requestSecurity = new FetchMessagingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessagingCountry($request, $requestSecurity);

    if ($response->pricingV1MessagingMessagingCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPhoneNumberCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberCountryRequest();
    $request->isoCountry = 'distinctio';

    $requestSecurity = new FetchPhoneNumberCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumberCountry($request, $requestSecurity);

    if ($response->pricingV1PhoneNumberPhoneNumberCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVoiceCountry

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
    $request->isoCountry = 'quibusdam';

    $requestSecurity = new FetchVoiceCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVoiceCountry($request, $requestSecurity);

    if ($response->pricingV1VoiceVoiceCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVoiceNumber

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
    $request->number = 'unde';

    $requestSecurity = new FetchVoiceNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVoiceNumber($request, $requestSecurity);

    if ($response->pricingV1VoiceVoiceNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMessagingCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMessagingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMessagingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMessagingCountryRequest();
    $request->page = 857946;
    $request->pageSize = 544883;
    $request->pageToken = 'illum';

    $requestSecurity = new ListMessagingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMessagingCountry($request, $requestSecurity);

    if ($response->listMessagingCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPhoneNumberCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPhoneNumberCountryRequest();
    $request->page = 423655;
    $request->pageSize = 623564;
    $request->pageToken = 'deserunt';

    $requestSecurity = new ListPhoneNumberCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPhoneNumberCountry($request, $requestSecurity);

    if ($response->listPhoneNumberCountryResponse !== null) {
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
    $request->page = 384382;
    $request->pageSize = 437587;
    $request->pageToken = 'magnam';

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
