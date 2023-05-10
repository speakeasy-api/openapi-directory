# SDK

## Overview

LoL v3 Projections

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [projectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [projectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player

## dfsSlatesByDate

Dfs Slates By Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesByDateRequest();
    $request->date = 'distinctio';
    $request->format = DfsSlatesByDateFormatEnum::XML;

    $response = $sdk->sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByDate

Projected Player Game Stats by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByDateRequest();
    $request->date = 'unde';
    $request->format = ProjectedPlayerGameStatsByDateFormatEnum::JSON;

    $response = $sdk->sdk->projectedPlayerGameStatsByDate($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByPlayer

Projected Player Game Stats by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByPlayerRequest();
    $request->date = 'corrupti';
    $request->format = ProjectedPlayerGameStatsByPlayerFormatEnum::JSON;
    $request->playerid = 'vel';

    $response = $sdk->sdk->projectedPlayerGameStatsByPlayer($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
