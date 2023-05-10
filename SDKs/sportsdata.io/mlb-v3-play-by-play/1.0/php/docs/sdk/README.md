# SDK

## Overview

MLB play-by-play API.

### Available Operations

* [playByPlay](#playbyplay) - Play By Play
* [playByPlayDelta](#playbyplaydelta) - Play By Play Delta

## playByPlay

Play By Play

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayByPlayRequest();
    $request->format = PlayByPlayFormatEnum::JSON;
    $request->gameid = 'quibusdam';

    $response = $sdk->sdk->playByPlay($request);

    if ($response->playByPlay !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playByPlayDelta

Play By Play Delta

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayDeltaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayDeltaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayByPlayDeltaRequest();
    $request->date = 'unde';
    $request->format = PlayByPlayDeltaFormatEnum::JSON;
    $request->minutes = 'corrupti';

    $response = $sdk->sdk->playByPlayDelta($request);

    if ($response->playByPlays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
