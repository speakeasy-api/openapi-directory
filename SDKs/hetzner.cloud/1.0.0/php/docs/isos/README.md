# isOs

## Overview

ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.

On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.

To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.


### Available Operations

* [getIsos](#getisos) - Get all ISOs
* [getIsosId](#getisosid) - Get an ISO

## getIsos

Returns all available ISO objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIsosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIsosRequest();
    $request->architecture = 'numquam';
    $request->includeArchitectureWildcard = false;
    $request->name = 'Claudia Krajcik';

    $response = $sdk->isOs->getIsos($request);

    if ($response->getIsos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIsosId

Returns a specific ISO object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIsosIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIsosIdRequest();
    $request->id = 158969;

    $response = $sdk->isOs->getIsosId($request);

    if ($response->getIsosId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
