# emailTemplates

## Overview

Email Templates Management

### Available Operations

* [getV2EmailTemplatesJson](#getv2emailtemplatesjson) - List email templates
* [getV2EmailTemplatesIdJson](#getv2emailtemplatesidjson) - Fetch an email template

## getV2EmailTemplatesJson

Fetches multiple email template records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmailTemplatesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EmailTemplatesJsonRequest();
    $request->cadenceId = [
        940782,
        848151,
        52508,
    ];
    $request->filterByOwner = false;
    $request->groupId = [
        596211,
        983427,
        891801,
        399802,
    ];
    $request->ids = [
        380335,
        211534,
        147808,
        764995,
    ];
    $request->includeArchivedTemplates = false;
    $request->includeCadenceTemplates = false;
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->linkedToTeamTemplate = false;
    $request->page = 684935;
    $request->perPage = 189062;
    $request->search = 'animi';
    $request->sortBy = 'necessitatibus';
    $request->sortDirection = 'nulla';
    $request->tag = [
        'quasi',
    ];
    $request->tagIds = [
        497777,
    ];
    $request->updatedAt = [
        'occaecati',
        'suscipit',
        'adipisci',
    ];

    $response = $sdk->emailTemplates->getV2EmailTemplatesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2EmailTemplatesIdJson

Fetches an email template, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmailTemplatesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EmailTemplatesIdJsonRequest();
    $request->id = '12fde047-7177-48ff-a1d0-17476360a15d';
    $request->includeSignature = false;

    $response = $sdk->emailTemplates->getV2EmailTemplatesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
