# customFields

## Overview

Custom Field Management

### Available Operations

* [deleteV2CustomFieldsIdJson](#deletev2customfieldsidjson) - Delete a custom field
* [getV2CustomFieldsJson](#getv2customfieldsjson) - List custom fields
* [getV2CustomFieldsIdJson](#getv2customfieldsidjson) - Fetch a custom field
* [postV2CustomFieldsJson](#postv2customfieldsjson) - Create a custom field
* [putV2CustomFieldsIdJson](#putv2customfieldsidjson) - Update a custom field

## deleteV2CustomFieldsIdJson

Deletes a custom field.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2CustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2CustomFieldsIdJsonRequest();
    $request->id = '9e973e92-2a57-4a15-be3e-060807e2b6e3';

    $response = $sdk->customFields->deleteV2CustomFieldsIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CustomFieldsJson

Fetches multiple custom field records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CustomFieldsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CustomFieldsJsonRequest();
    $request->fieldType = 'laborum';
    $request->ids = [
        528940,
        523006,
        304446,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 320565;
    $request->perPage = 997963;
    $request->sortBy = 'alias';
    $request->sortDirection = 'corporis';

    $response = $sdk->customFields->getV2CustomFieldsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CustomFieldsIdJson

Fetches a custom field, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CustomFieldsIdJsonRequest();
    $request->id = '97a60ff2-a54a-431e-9476-4a3e865e7956';

    $response = $sdk->customFields->getV2CustomFieldsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2CustomFieldsJson

Creates a custom field.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2CustomFieldsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2CustomFieldsJsonRequestBody();
    $request->fieldType = 'reiciendis';
    $request->name = 'Miss Bruce Hermann';

    $response = $sdk->customFields->postV2CustomFieldsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2CustomFieldsIdJson

Update a custom field.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2CustomFieldsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2CustomFieldsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2CustomFieldsIdJsonRequest();
    $request->requestBody = new PutV2CustomFieldsIdJsonRequestBody();
    $request->requestBody->fieldType = 'mollitia';
    $request->requestBody->name = 'Rufus Okuneva';
    $request->id = '0ff57bfa-ad4f-49ef-81b4-512c1032648d';

    $response = $sdk->customFields->putV2CustomFieldsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
