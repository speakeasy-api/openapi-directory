# SDK

## Overview

NFL play-by-play API.

### Available Operations

* [playByPlay](#playbyplay) - Play By Play
* [playByPlayDelta](#playbyplaydelta) - Play By Play Delta
* [playByPlaySimulation](#playbyplaysimulation) - Play By Play Simulation

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
    $request->hometeam = 'nulla';
    $request->season = 'corrupti';
    $request->week = 'illum';

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
    $request->format = PlayByPlayDeltaFormatEnum::XML;
    $request->minutes = 'error';
    $request->season = 'deserunt';
    $request->week = 'suscipit';

    $response = $sdk->sdk->playByPlayDelta($request);

    if ($response->playByPlays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playByPlaySimulation

Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlaySimulationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlaySimulationFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayByPlaySimulationRequest();
    $request->format = PlayByPlaySimulationFormatEnum::XML;
    $request->numberofplays = 'magnam';

    $response = $sdk->sdk->playByPlaySimulation($request);

    if ($response->playByPlays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
