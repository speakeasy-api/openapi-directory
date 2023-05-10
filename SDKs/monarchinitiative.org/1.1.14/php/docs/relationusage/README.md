# relationUsage

## Overview

Usage of different relationship types

### Available Operations

* [getRelationUsageBetweenResource](#getrelationusagebetweenresource) - All relations used plus count of associations
* [getRelationUsagePivotLabelResource](#getrelationusagepivotlabelresource) - Relation usage count for all subj x obj category combinations, showing label
* [getRelationUsagePivotResource](#getrelationusagepivotresource) - Relation usage count for all subj x obj category combinations
* [getRelationUsageResource](#getrelationusageresource) - All relations used plus count of associations

## getRelationUsageBetweenResource

All relations used plus count of associations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationUsageBetweenResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationUsageBetweenResourceRequest();
    $request->evidence = 'maxime';
    $request->objectCategory = 'delectus';
    $request->subjectCategory = 'laboriosam';
    $request->subjectTaxon = 'laboriosam';

    $response = $sdk->relationUsage->getRelationUsageBetweenResource($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationUsagePivotLabelResource

Relation usage count for all subj x obj category combinations, showing label

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationUsagePivotLabelResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationUsagePivotLabelResourceRequest();
    $request->evidence = 'quam';
    $request->subjectTaxon = 'fuga';

    $response = $sdk->relationUsage->getRelationUsagePivotLabelResource($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationUsagePivotResource

Relation usage count for all subj x obj category combinations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationUsagePivotResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationUsagePivotResourceRequest();
    $request->evidence = 'officia';
    $request->subjectTaxon = 'repellat';

    $response = $sdk->relationUsage->getRelationUsagePivotResource($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationUsageResource

All relations used plus count of associations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationUsageResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationUsageResourceRequest();
    $request->evidence = 'cupiditate';
    $request->subjectTaxon = 'soluta';

    $response = $sdk->relationUsage->getRelationUsageResource($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
