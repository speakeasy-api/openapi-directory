# social

## Overview

Social media and pseudonyms

### Available Operations

* [phoneCode](#phonecode) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* [phoneCodeBatch](#phonecodebatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* [phoneCodeGeo](#phonecodegeo) - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* [phoneCodeGeoBatch](#phonecodegeobatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* [phoneCodeGeoFeedbackLoop](#phonecodegeofeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

## phoneCode

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneCodeRequest();
    $request->firstName = 'Blanche';
    $request->lastName = 'Hessel';
    $request->phoneNumber = 'dolore';

    $requestSecurity = new PhoneCodeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->social->phoneCode($request, $requestSecurity);

    if ($response->firstLastNamePhoneCodedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneCodeBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNamePhoneNumberIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNamePhoneNumberIn;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNamePhoneNumberIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNamesWithPhoneNumbers = [
        new FirstLastNamePhoneNumberIn(),
    ];

    $requestSecurity = new PhoneCodeBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->social->phoneCodeBatch($request, $requestSecurity);

    if ($response->batchFirstLastNamePhoneCodedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneCodeGeo

[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeGeoRequest;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeGeoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneCodeGeoRequest();
    $request->countryIso2 = 'harum';
    $request->firstName = 'Emilie';
    $request->lastName = 'Thompson';
    $request->phoneNumber = 'commodi';

    $requestSecurity = new PhoneCodeGeoSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->social->phoneCodeGeo($request, $requestSecurity);

    if ($response->firstLastNamePhoneCodedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneCodeGeoBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNamePhoneNumberGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNamePhoneNumberGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeGeoBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNamePhoneNumberGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNamesWithPhoneNumbers = [
        new FirstLastNamePhoneNumberGeoIn(),
    ];

    $requestSecurity = new PhoneCodeGeoBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->social->phoneCodeGeoBatch($request, $requestSecurity);

    if ($response->batchFirstLastNamePhoneCodedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneCodeGeoFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeGeoFeedbackLoopRequest;
use \OpenAPI\OpenAPI\Models\Operations\PhoneCodeGeoFeedbackLoopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneCodeGeoFeedbackLoopRequest();
    $request->countryIso2 = 'ipsum';
    $request->firstName = 'Mathilde';
    $request->lastName = 'Mann';
    $request->phoneNumber = 'excepturi';
    $request->phoneNumberE164 = 'pariatur';

    $requestSecurity = new PhoneCodeGeoFeedbackLoopSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->social->phoneCodeGeoFeedbackLoop($request, $requestSecurity);

    if ($response->firstLastNamePhoneCodedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
