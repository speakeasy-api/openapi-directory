# search

## Overview

Search for entities

### Available Operations

* [getAutocomplete](#getautocomplete) - Returns list of matching concepts or entities using lexical search
* [getSearchEntities](#getsearchentities) - Returns list of matching concepts or entities using lexical search
* [getSearchHpoEntities](#getsearchhpoentities) - Returns list of matching concepts or entities using lexical search

## getAutocomplete

Returns list of matching concepts or entities using lexical search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutocompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutocompleteRequest();
    $request->boostFx = [
        'culpa',
        'fugiat',
        'inventore',
    ];
    $request->boostQ = [
        'ad',
        'sapiente',
        'voluptates',
    ];
    $request->category = [
        'nesciunt',
        'ab',
    ];
    $request->excludeGroups = false;
    $request->fq = [
        'suscipit',
        'quidem',
        'delectus',
        'nemo',
    ];
    $request->highlightClass = 'cumque';
    $request->includeEqs = false;
    $request->minMatch = 'voluptatum';
    $request->minimalTokenizer = false;
    $request->prefix = [
        'atque',
    ];
    $request->rows = 979706;
    $request->start = 'expedita';
    $request->taxon = [
        'totam',
        'quod',
        'aspernatur',
    ];
    $request->term = 'eaque';

    $response = $sdk->search->getAutocomplete($request);

    if ($response->autocompleteResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchEntities

Returns list of matching concepts or entities using lexical search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchEntitiesRequest();
    $request->boostFx = [
        'nam',
        'ex',
        'odio',
        'delectus',
    ];
    $request->boostQ = [
        'ut',
        'distinctio',
        'eius',
        'eos',
    ];
    $request->category = [
        'repudiandae',
        'sint',
    ];
    $request->excludeGroups = false;
    $request->fq = [
        'debitis',
        'laboriosam',
        'eos',
    ];
    $request->highlightClass = 'amet';
    $request->includeEqs = false;
    $request->minMatch = 'incidunt';
    $request->minimalTokenizer = false;
    $request->prefix = [
        'occaecati',
        'reiciendis',
        'voluptate',
        'tempore',
    ];
    $request->rows = 447323;
    $request->start = 'omnis';
    $request->taxon = [
        'tenetur',
        'recusandae',
        'expedita',
        'iusto',
    ];
    $request->term = 'esse';

    $response = $sdk->search->getSearchEntities($request);

    if ($response->searchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchHpoEntities

Returns list of matching concepts or entities using lexical search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchHpoEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchHpoEntitiesRequest();
    $request->anatomicalSystem = 'harum';
    $request->anatomicalSystemLabel = 'ad';
    $request->highlightClass = 'quod';
    $request->phenotypeGroup = 'ratione';
    $request->phenotypeGroupLabel = 'totam';
    $request->rows = 873681;
    $request->start = 'dolore';
    $request->term = 'nam';

    $response = $sdk->search->getSearchHpoEntities($request);

    if ($response->layResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
