# nlpAnnotate

## Overview

annotate text using named entities

### Available Operations

* [getAnnotate](#getannotate) - Annotate a given text using SciGraph annotator
* [getAnnotateEntities](#getannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content
* [postAnnotate](#postannotate) - Annotate a given text using SciGraph annotator
* [postAnnotateEntities](#postannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content

## getAnnotate

Annotate a given text using SciGraph annotator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotateRequest();
    $request->content = 'repudiandae';
    $request->excludeCategory = [
        'molestias',
        'architecto',
    ];
    $request->includeAbbreviation = false;
    $request->includeAcronym = false;
    $request->includeCategory = [
        'quisquam',
        'praesentium',
        'facilis',
    ];
    $request->includeNumbers = false;
    $request->longestOnly = false;
    $request->minLength = 'assumenda';

    $response = $sdk->nlpAnnotate->getAnnotate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotateEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotateEntitiesRequest();
    $request->content = 'repudiandae';
    $request->excludeCategory = [
        'ipsum',
        'commodi',
        'vitae',
        'fugit',
    ];
    $request->includeAbbreviation = false;
    $request->includeAcronym = false;
    $request->includeCategory = [
        'ex',
        'neque',
        'quod',
    ];
    $request->includeNumbers = false;
    $request->longestOnly = false;
    $request->minLength = 'eos';

    $response = $sdk->nlpAnnotate->getAnnotateEntities($request);

    if ($response->entityAnnotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAnnotate

Annotate a given text using SciGraph annotator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAnnotateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAnnotateRequest();
    $request->content = 'alias';
    $request->excludeCategory = [
        'a',
        'facere',
    ];
    $request->includeAbbreviation = false;
    $request->includeAcronym = false;
    $request->includeCategory = [
        'atque',
        'quaerat',
        'aperiam',
    ];
    $request->includeNumbers = false;
    $request->longestOnly = false;
    $request->minLength = 'dignissimos';

    $response = $sdk->nlpAnnotate->postAnnotate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAnnotateEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAnnotateEntitiesRequest();
    $request->content = 'quam';
    $request->excludeCategory = [
        'fuga',
        'iure',
    ];
    $request->includeAbbreviation = false;
    $request->includeAcronym = false;
    $request->includeCategory = [
        'officia',
        'sint',
        'laborum',
    ];
    $request->includeNumbers = false;
    $request->longestOnly = false;
    $request->minLength = 'dolor';

    $response = $sdk->nlpAnnotate->postAnnotateEntities($request);

    if ($response->entityAnnotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
