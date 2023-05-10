# attributes

## Overview

Computed attributes management

### Available Operations

* [deleteAttributesComputedId](#deleteattributescomputedid) - Delete an Attribute
* [getAttributesComputed](#getattributescomputed) - Fetch a list of Attributes
* [postAttributesComputed](#postattributescomputed) - Create an Attribute
* [putAttributesComputedId](#putattributescomputedid) - Update an Attribute

## deleteAttributesComputedId

Delete an Attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttributesComputedIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttributesComputedIdRequest();
    $request->id = 592845;

    $response = $sdk->attributes->deleteAttributesComputedId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttributesComputed

Without params, it returns a list of Attributes the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttributesComputedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttributesComputedRequest();
    $request->all = false;
    $request->deviceId = 715190;
    $request->groupId = 844266;
    $request->refresh = false;
    $request->userId = 602763;

    $response = $sdk->attributes->getAttributesComputed($request);

    if ($response->attributes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttributesComputed

Create an Attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Attribute();
    $request->attribute = 'nulla';
    $request->description = 'corrupti';
    $request->expression = 'illum';
    $request->id = 423655;
    $request->type = 'error';

    $response = $sdk->attributes->postAttributesComputed($request);

    if ($response->attribute !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAttributesComputedId

Update an Attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAttributesComputedIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAttributesComputedIdRequest();
    $request->attribute = new Attribute();
    $request->attribute->attribute = 'deserunt';
    $request->attribute->description = 'suscipit';
    $request->attribute->expression = 'iure';
    $request->attribute->id = 297534;
    $request->attribute->type = 'debitis';
    $request->id = 56713;

    $response = $sdk->attributes->putAttributesComputedId($request);

    if ($response->attribute !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
