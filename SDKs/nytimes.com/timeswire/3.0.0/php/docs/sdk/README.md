# SDK

## Overview

With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

<http://developer.nytimes.com/>
### Available Operations

* [getContentJson](#getcontentjson)
* [getContentSourceSectionJson](#getcontentsourcesectionjson)
* [getContentSourceSectionTimePeriodJson](#getcontentsourcesectiontimeperiodjson)

## getContentJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentJsonRequest();
    $request->url = 'provident';

    $response = $sdk->sdk->getContentJson($request);

    if ($response->getContentJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentSourceSectionJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentSourceSectionJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentSourceSectionJsonSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentSourceSectionJsonRequest();
    $request->limit = 715190;
    $request->offset = 844266;
    $request->section = 'unde';
    $request->source = GetContentSourceSectionJsonSourceEnum::IHT;

    $response = $sdk->sdk->getContentSourceSectionJson($request);

    if ($response->getContentSourceSectionJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentSourceSectionTimePeriodJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentSourceSectionTimePeriodJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentSourceSectionTimePeriodJsonSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentSourceSectionTimePeriodJsonRequest();
    $request->limit = 544883;
    $request->offset = 847252;
    $request->section = 'vel';
    $request->source = GetContentSourceSectionTimePeriodJsonSourceEnum::NYT;
    $request->timePeriod = 645894;

    $response = $sdk->sdk->getContentSourceSectionTimePeriodJson($request);

    if ($response->getContentSourceSectionTimePeriodJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
