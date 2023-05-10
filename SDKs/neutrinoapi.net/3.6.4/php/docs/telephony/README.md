# telephony

### Available Operations

* [hlrLookup](#hlrlookup) - HLR Lookup
* [phonePlayback](#phoneplayback) - Phone Playback
* [phoneVerify](#phoneverify) - Phone Verify
* [smsVerify](#smsverify) - SMS Verify
* [verifySecurityCode](#verifysecuritycode) - Verify Security Code

## hlrLookup

Connect to the global mobile cellular network and retrieve the status of a mobile device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HLRLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HLRLookupRequest();
    $request->countryCode = 'IM';
    $request->number = 'quam';

    $response = $sdk->telephony->hlrLookup($request);

    if ($response->hlrLookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phonePlayback

Make an automated call to any valid phone number and playback an audio message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhonePlaybackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhonePlaybackRequestBody();
    $request->audioUrl = 'molestiae';
    $request->limit = 244425;
    $request->limitTtl = 623510;
    $request->number = 'quia';

    $response = $sdk->telephony->phonePlayback($request);

    if ($response->phonePlaybackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneVerify

Make an automated call to any valid phone number and playback a unique security code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneVerifyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneVerifyRequestBody();
    $request->codeLength = 338007;
    $request->countryCode = 'BN';
    $request->languageCode = 'laborum';
    $request->limit = 656330;
    $request->limitTtl = 317202;
    $request->number = 'odit';
    $request->playbackDelay = 778346;
    $request->securityCode = 196582;

    $response = $sdk->telephony->phoneVerify($request);

    if ($response->phoneVerifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smsVerify

Send a unique security code to any mobile device via SMS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SMSVerifyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SMSVerifyRequestBody();
    $request->codeLength = 949572;
    $request->countryCode = 'GU';
    $request->languageCode = 'id';
    $request->limit = 820994;
    $request->limitTtl = 13571;
    $request->number = 'quasi';
    $request->securityCode = 622846;

    $response = $sdk->telephony->smsVerify($request);

    if ($response->smsVerifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySecurityCode

Check if a security code sent via SMS Verify or Phone Verify is valid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VerifySecurityCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifySecurityCodeRequest();
    $request->limitBy = 'temporibus';
    $request->securityCode = 'laborum';

    $response = $sdk->telephony->verifySecurityCode($request);

    if ($response->verifySecurityCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
