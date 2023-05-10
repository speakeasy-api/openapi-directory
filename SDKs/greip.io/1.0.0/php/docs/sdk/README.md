# SDK

## Overview

This documentation shows how to use Greip API, by highlighting the API methods, options and some other features that allow you to get the most of this API.

API Documentaion
<https://docs.greip.io>
### Available Operations

* [getASNLookup](#getasnlookup) - ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
* [getBINLookup](#getbinlookup) - This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
* [getBulkLookup](#getbulklookup) - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* [getCountry](#getcountry) - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* [getGeoIP](#getgeoip) - Returns the geolocation data of the visitor.
* [getIPLookup](#getiplookup) - Returns the geolocation data of a specific IP Address.
* [getBadWords](#getbadwords) - badWords endpoint: Detects whether user inputs contain profanity or not.
* [getValidateEmail](#getvalidateemail) - This method can be used as an extra-layer of your system for validating email addresses.
* [getValidatePhone](#getvalidatephone) - This method can be used as an extra-layer of your system for validating phone numbers.

## getASNLookup

ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.

Greip API - ASN Lookup
<https://docs.greip.io/methods/asn-lookup-api>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetASNLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetASNLookupRequest();
    $request->asn = '15169';
    $request->format = 'JSON';
    $request->isList = 'no';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';

    $response = $sdk->sdk->getASNLookup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBINLookup

This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.

Greip API - BIN/IIN Validation
<https://docs.greip.io/methods/bin-iin-validation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBINLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBINLookupRequest();
    $request->bin = '489022';
    $request->format = 'JSON';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';

    $response = $sdk->sdk->getBINLookup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBulkLookup

BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.

Greip API - Bulk Lookup
<https://docs.greip.io/methods/bulk-lookup>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBulkLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBulkLookupRequest();
    $request->format = 'XML';
    $request->ips = '1.1.1.1,2.2.2.2';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->lang = 'AR';
    $request->params = 'currency';

    $response = $sdk->sdk->getBulkLookup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCountry

Country endpoint: Returns the information of a specific country by passing the `countrCode`.

Greip API - Country Data API
<https://docs.greip.io/methods/country-data-api>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountryRequest();
    $request->countryCode = 'PS';
    $request->format = 'XML';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->lang = 'AR';
    $request->params = 'language';

    $response = $sdk->sdk->getCountry($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeoIP

Returns the geolocation data of the visitor.

Greip API - Retrieve Visitor Info
<https://docs.greip.io/methods/retrieve-visitor-info>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeoIPRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeoIPRequest();
    $request->format = 'XML';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->lang = 'AR';
    $request->params = 'currency';

    $response = $sdk->sdk->getGeoIP($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIPLookup

Returns the geolocation data of a specific IP Address.

Greip API - Lookup IP Address
<https://docs.greip.io/methods/lookup-ip-address>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIPLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIPLookupRequest();
    $request->format = 'XML';
    $request->ip = '1.1.1.1';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->lang = 'AR';
    $request->params = 'currency';

    $response = $sdk->sdk->getIPLookup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadWords

badWords endpoint: Detects whether user inputs contain profanity or not.

Greip API - Profanity Detection
<https://docs.greip.io/methods/profanity-detection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadWordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadWordsRequest();
    $request->format = 'JSON';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->listBadWords = 'no';
    $request->scoreOnly = 'no';
    $request->text = 'This is a sample text without profanity!';

    $response = $sdk->sdk->getBadWords($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValidateEmail

This method can be used as an extra-layer of your system for validating email addresses.

Greip API - Email Validation
<https://docs.greip.io/methods/data-validation/email-validation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetValidateEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetValidateEmailRequest();
    $request->email = 'name@domain.com';
    $request->format = 'JSON';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';

    $response = $sdk->sdk->getValidateEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValidatePhone

This method can be used as an extra-layer of your system for validating phone numbers.

Greip API - Phone Number Validation
<https://docs.greip.io/methods/data-validation/phone-number-validation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetValidatePhoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetValidatePhoneRequest();
    $request->countryCode = 'US';
    $request->format = 'JSON';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';
    $request->phone = '1234567890';

    $response = $sdk->sdk->getValidatePhone($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
