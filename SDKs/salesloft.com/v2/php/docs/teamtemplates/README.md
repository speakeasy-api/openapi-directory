# teamTemplates

## Overview

Team Template Management

### Available Operations

* [getV2TeamTemplatesJson](#getv2teamtemplatesjson) - List team templates
* [getV2TeamTemplatesIdJson](#getv2teamtemplatesidjson) - Fetch a team template

## getV2TeamTemplatesJson

Fetches multiple team template records. The records can be filtered, paged, and sorted according to
the respective parameters.

Team templates are templates that are available team-wide. Admins may use
team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,
and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TeamTemplatesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TeamTemplatesJsonRequest();
    $request->ids = [
        'dolor',
        'voluptates',
    ];
    $request->includeArchivedTemplates = false;
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 274295;
    $request->perPage = 169935;
    $request->search = 'rerum';
    $request->sortBy = 'doloremque';
    $request->sortDirection = 'voluptatem';
    $request->tag = [
        'at',
        'eum',
    ];
    $request->tagIds = [
        531195,
        502393,
    ];
    $request->updatedAt = [
        'atque',
        'rerum',
    ];

    $response = $sdk->teamTemplates->getV2TeamTemplatesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2TeamTemplatesIdJson

Fetches a team template, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TeamTemplatesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TeamTemplatesIdJsonRequest();
    $request->id = 'a8581a58-208c-454f-afa9-c95f2eac5565';
    $request->includeSignature = false;

    $response = $sdk->teamTemplates->getV2TeamTemplatesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
