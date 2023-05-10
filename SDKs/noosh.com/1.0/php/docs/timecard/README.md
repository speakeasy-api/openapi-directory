# timeCard

### Available Operations

* [getMyTimeCard](#getmytimecard) - Get a specific my time cards
* [getMyTimeCardList](#getmytimecardlist) - List my time cards
* [getReceivedTimeCard](#getreceivedtimecard) - List a specific received time cards
* [getReceivedTimeCardList](#getreceivedtimecardlist) - List received time cards

## getMyTimeCard

Get a specific my time cards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMyTimeCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMyTimeCardRequest();
    $request->timeCardId = 'saepe';
    $request->workgroupId = 'pariatur';

    $response = $sdk->timeCard->getMyTimeCard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMyTimeCardList

List my time cards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMyTimeCardListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMyTimeCardListRequest();
    $request->workgroupId = 'accusantium';

    $response = $sdk->timeCard->getMyTimeCardList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReceivedTimeCard

List a specific received time cards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReceivedTimeCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReceivedTimeCardRequest();
    $request->timeCardId = 'consequuntur';
    $request->workgroupId = 'praesentium';

    $response = $sdk->timeCard->getReceivedTimeCard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReceivedTimeCardList

List received time cards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReceivedTimeCardListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReceivedTimeCardListRequest();
    $request->workgroupId = 'natus';

    $response = $sdk->timeCard->getReceivedTimeCardList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
