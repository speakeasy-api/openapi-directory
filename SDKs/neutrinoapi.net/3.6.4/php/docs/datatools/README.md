# dataTools

### Available Operations

* [badWordFilter](#badwordfilter) - Bad Word Filter
* [emailValidate](#emailvalidate) - Email Validate
* [phoneValidate](#phonevalidate) - Phone Validate
* [uaLookup](#ualookup) - UA Lookup

## badWordFilter

Detect bad words, swear words and profanity in a given text

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BadWordFilterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BadWordFilterRequestBody();
    $request->catalog = 'quibusdam';
    $request->censorCharacter = 'unde';
    $request->content = 'nulla';

    $response = $sdk->dataTools->badWordFilter($request);

    if ($response->badWordFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emailValidate

Parse, validate and clean an email address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmailValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailValidateRequest();
    $request->email = 'Roselyn_Kassulke@yahoo.com';
    $request->fixTypos = false;

    $response = $sdk->dataTools->emailValidate($request);

    if ($response->emailValidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneValidate

Parse, validate and get location information about a phone number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneValidateRequest();
    $request->countryCode = 'HM';
    $request->ip = 'iure';
    $request->number = 'magnam';

    $response = $sdk->dataTools->phoneValidate($request);

    if ($response->phoneValidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uaLookup

Parse, validate and get detailed user-agent information from a user agent string or from client hints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UALookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UALookupRequest();
    $request->deviceBrand = 'debitis';
    $request->deviceModel = 'ipsa';
    $request->ua = 'delectus';
    $request->uaMobile = 'tempora';
    $request->uaPlatform = 'suscipit';
    $request->uaPlatformVersion = 'molestiae';
    $request->uaVersion = 'minus';

    $response = $sdk->dataTools->uaLookup($request);

    if ($response->uaLookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
