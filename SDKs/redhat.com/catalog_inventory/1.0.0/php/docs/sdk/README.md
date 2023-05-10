# SDK

## Overview

Catalog Inventory

### Available Operations

* [getDocumentation](#getdocumentation) - Return this API document in JSON format
* [postGraphQL](#postgraphql) - Perform a GraphQL Query

## getDocumentation

Return this API document in JSON format

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
    $response = $sdk->sdk->getDocumentation();

    if ($response->getDocumentation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGraphQL

Performs a GraphQL Query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\GraphQLRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GraphQLRequest();
    $request->operationName = 'corrupti';
    $request->query = 'provident';
    $request->variables = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];

    $response = $sdk->sdk->postGraphQL($request);

    if ($response->graphQLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
