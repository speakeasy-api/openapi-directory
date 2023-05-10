# serverTypes

## Overview

Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [getServerTypes](#getservertypes) - Get all Server Types
* [getServerTypesId](#getservertypesid) - Get a Server Type

## getServerTypes

Gets all Server type objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServerTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServerTypesRequest();
    $request->name = 'Rene Hane';

    $response = $sdk->serverTypes->getServerTypes($request);

    if ($response->getServerTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServerTypesId

Gets a specific Server type object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServerTypesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServerTypesIdRequest();
    $request->id = 628982;

    $response = $sdk->serverTypes->getServerTypesId($request);

    if ($response->getServerTypesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
