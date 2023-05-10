# savedListViews

## Overview

Saved List Views

### Available Operations

* [deleteV2SavedListViewsIdJson](#deletev2savedlistviewsidjson) - Delete a saved list view
* [getV2SavedListViewsJson](#getv2savedlistviewsjson) - List saved list views
* [getV2SavedListViewsIdJson](#getv2savedlistviewsidjson) - Fetch a saved list view
* [postV2SavedListViewsJson](#postv2savedlistviewsjson) - Create a saved list view
* [putV2SavedListViewsIdJson](#putv2savedlistviewsidjson) - Update a saved list view

## deleteV2SavedListViewsIdJson

Deletes a saved list view. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2SavedListViewsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2SavedListViewsIdJsonRequest();
    $request->id = '3e902c14-125b-4096-8a66-8151a472af92';

    $response = $sdk->savedListViews->deleteV2SavedListViewsIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2SavedListViewsJson

Fetches multiple saved list view records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2SavedListViewsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2SavedListViewsJsonRequest();
    $request->ids = [
        805463,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 337841;
    $request->perPage = 586108;
    $request->sortBy = 'aliquam';
    $request->sortDirection = 'excepturi';
    $request->view = 'maiores';

    $response = $sdk->savedListViews->getV2SavedListViewsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2SavedListViewsIdJson

Fetches a saved list view, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2SavedListViewsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2SavedListViewsIdJsonRequest();
    $request->id = '83f350cf-876f-4fb9-81c6-ecbb4e243cf7';

    $response = $sdk->savedListViews->getV2SavedListViewsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2SavedListViewsJson

Creates a saved list view.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2SavedListViewsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2SavedListViewsJsonRequestBody();
    $request->isDefault = false;
    $request->name = 'Perry Zieme';
    $request->view = 'maiores';
    $request->viewParams = 'itaque';

    $response = $sdk->savedListViews->postV2SavedListViewsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2SavedListViewsIdJson

Updates a saved list view.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2SavedListViewsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2SavedListViewsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2SavedListViewsIdJsonRequest();
    $request->requestBody = new PutV2SavedListViewsIdJsonRequestBody();
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Gerard Herzog';
    $request->requestBody->viewParams = 'enim';
    $request->id = 'ae6e0ac1-84c2-4b9c-a47c-88373a40e194';

    $response = $sdk->savedListViews->putV2SavedListViewsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
