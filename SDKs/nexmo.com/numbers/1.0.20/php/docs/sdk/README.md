# SDK

## Overview

The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>

Numbers product documentation on the Vonage Developer Portal
<https://developer.nexmo.com/numbers/overview>
### Available Operations

* [buyANumber](#buyanumber) - Buy a number
* [cancelANumber](#cancelanumber) - Cancel a number
* [getAvailableNumbers](#getavailablenumbers) - Search available numbers
* [getOwnedNumbers](#getownednumbers) - List the numbers you own
* [updateANumber](#updateanumber) - Update a number

## buyANumber

Request to purchase a specific inbound number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NumberDetails();
    $request->country = 'GB';
    $request->msisdn = '447700900000';
    $request->targetApiKey = '1a2345b7';

    $response = $sdk->sdk->buyANumber($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelANumber

Cancel your subscription for a specific inbound number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NumberDetails();
    $request->country = 'GB';
    $request->msisdn = '447700900000';
    $request->targetApiKey = '1a2345b7';

    $response = $sdk->sdk->cancelANumber($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAvailableNumbers

Retrieve inbound numbers that are available for the specified country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableNumbersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableNumbersFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchPatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailableNumbersRequest();
    $request->country = 'GB';
    $request->features = GetAvailableNumbersFeaturesEnum::MMS;
    $request->index = 592845;
    $request->pattern = 'distinctio';
    $request->searchPattern = SearchPatternEnum::TWO;
    $request->size = 602763;
    $request->type = TypeEnum::LANDLINE_TOLL_FREE;

    $response = $sdk->sdk->getAvailableNumbers($request);

    if ($response->availableNumbers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOwnedNumbers

Retrieve all the inbound numbers associated with your Vonage account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOwnedNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchPatternEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOwnedNumbersRequest();
    $request->applicationId = 'corrupti';
    $request->country = 'GB';
    $request->hasApplication = false;
    $request->index = 847252;
    $request->pattern = 'vel';
    $request->searchPattern = SearchPatternEnum::ONE;
    $request->size = 645894;

    $response = $sdk->sdk->getOwnedNumbers($request);

    if ($response->inboundNumbers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateANumber

Change the behaviour of a number that you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetailsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetailsUpdateMessagesCallbackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetailsUpdateVoiceCallbackTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NumberDetailsUpdate();
    $request->appId = 'aaaaaaaa-bbbb-cccc-dddd-0123456789abc';
    $request->country = 'GB';
    $request->messagesCallbackType = NumberDetailsUpdateMessagesCallbackTypeEnum::APP;
    $request->messagesCallbackValue = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab';
    $request->moHttpUrl = 'https://example.com/webhooks/inbound-sms';
    $request->moSmppSysType = 'inbound';
    $request->msisdn = '447700900000';
    $request->voiceCallbackType = NumberDetailsUpdateVoiceCallbackTypeEnum::TEL;
    $request->voiceCallbackValue = '447700900000';
    $request->voiceStatusCallback = 'https://example.com/webhooks/status';

    $response = $sdk->sdk->updateANumber($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
