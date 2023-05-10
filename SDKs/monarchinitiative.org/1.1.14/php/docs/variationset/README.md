# variationSet

## Overview

Operations related to sets of variants

### Available Operations

* [deleteVariantSetItem](#deletevariantsetitem) - Deletes variant set
* [getVariantAnalyze](#getvariantanalyze) - Returns list of matches
* [getVariantSetItem](#getvariantsetitem) - Returns a variant set
* [getVariantSetsArchiveCollection](#getvariantsetsarchivecollection) - Returns list of variant sets from a specified time period
* [getVariantSetsCollection](#getvariantsetscollection) - Returns list of variant sets
* [postVariantSetsCollection](#postvariantsetscollection) - Creates a new variant set
* [putVariantSetItem](#putvariantsetitem) - Updates a variant set

## deleteVariantSetItem

Deletes variant set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVariantSetItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVariantSetItemRequest();
    $request->id = '37b01afd-d788-4624-989e-b44873f5033f';

    $response = $sdk->variationSet->deleteVariantSetItem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantAnalyze

Returns list of matches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantAnalyzeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantAnalyzeRequest();
    $request->id = '19dbf125-ce41-452e-ab9c-d7e5224a6a0e';

    $response = $sdk->variationSet->getVariantAnalyze($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantSetItem

Returns a variant set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantSetItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantSetItemRequest();
    $request->id = '123b7847-ec59-4e1f-a7f3-c4cce4b6d769';

    $response = $sdk->variationSet->getVariantSetItem($request);

    if ($response->variantSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantSetsArchiveCollection

Returns list of variant sets from a specified time period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantSetsArchiveCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantSetsArchiveCollectionPerPageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantSetsArchiveCollectionRequest();
    $request->day = 400145;
    $request->month = 996101;
    $request->page = 957032;
    $request->perPage = GetVariantSetsArchiveCollectionPerPageEnum::TEN;
    $request->year = 757494;

    $response = $sdk->variationSet->getVariantSetsArchiveCollection($request);

    if ($response->pageOfVariantSets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantSetsCollection

Returns list of variant sets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantSetsCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantSetsCollectionPerPageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantSetsCollectionRequest();
    $request->page = 353424;
    $request->perPage = GetVariantSetsCollectionPerPageEnum::TWENTY;

    $response = $sdk->variationSet->getVariantSetsCollection($request);

    if ($response->pageOfVariantSets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVariantSetsCollection

Creates a new variant set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VariantSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VariantSet();
    $request->body = 'eius';
    $request->category = 'dignissimos';
    $request->categoryId = 361113;
    $request->id = 16590;
    $request->pubDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T03:32:00.669Z');
    $request->title = 'Mrs.';

    $response = $sdk->variationSet->postVariantSetsCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putVariantSetItem

Updates a variant set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutVariantSetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\VariantSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutVariantSetItemRequest();
    $request->id = '7e44f51f-8b08-44c3-997e-193a245467f9';
    $request->variantSet = new VariantSet();
    $request->variantSet->body = 'modi';
    $request->variantSet->category = 'corrupti';
    $request->variantSet->categoryId = 472429;
    $request->variantSet->id = 260046;
    $request->variantSet->pubDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-25T03:49:08.911Z');
    $request->variantSet->title = 'Dr.';

    $response = $sdk->variationSet->putVariantSetItem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
