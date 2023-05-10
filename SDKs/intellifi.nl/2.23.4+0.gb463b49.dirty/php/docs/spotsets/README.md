# spotsets

## Overview

The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
Spotsets primarly are used as an input for Sense&Control.


<https://intellifi.zendesk.com/hc/en-us/articles/360009282834>
### Available Operations

* [getSpotsets](#getspotsets) - Get spotsets
* [getSpotsetsId](#getspotsetsid) - Get spotset
* [postSpotsets](#postspotsets) - Create spotset
* [putSpotsetsId](#putspotsetsid) - Update existing spotset

## getSpotsets

Get spotsets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->spotsets->getSpotsets();

    if ($response->spotSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotsetsId

Get spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotsetsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotsetsIdRequest();
    $request->id = '6349e1cf-9e06-4e3a-8370-00ae6b6bc9b8';

    $response = $sdk->spotsets->getSpotsetsId($request);

    if ($response->spotSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpotsets

Create spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpotSetTypeTypeInput();
    $request->itemType = ItemTypeEnum::TAG;
    $request->setid = 455579;
    $request->type = SpotSetTypeTypeTypeEnum::TYPE;

    $response = $sdk->spotsets->postSpotsets($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSpotsetsId

Update existing spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSpotsetsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpotSetUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSpotsetsIdRequest();
    $request->spotSetUpdate = new SpotSetUpdate();
    $request->spotSetUpdate->delete = false;
    $request->id = '59eac55a-9741-4d31-9352-965bb8a72026';

    $response = $sdk->spotsets->putSpotsetsId($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
