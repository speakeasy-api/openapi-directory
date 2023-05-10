# swaggerDoc

## Overview

Operations about swagger_docs

### Available Operations

* [getSwaggerDocFormat](#getswaggerdocformat) - Swagger compatible API description
* [getSwaggerDocNameFormat](#getswaggerdocnameformat) - Swagger compatible API description for specific API

## getSwaggerDocFormat

Swagger compatible API description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->swaggerDoc->getSwaggerDocFormat();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwaggerDocNameFormat

Swagger compatible API description for specific API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSwaggerDocNameFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSwaggerDocNameFormatRequest();
    $request->name = 'Stuart Stiedemann';

    $response = $sdk->swaggerDoc->getSwaggerDocNameFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
