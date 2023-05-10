# cards

## Overview

Fetch cards globally

### Available Operations

* [cards](#cards) - fetch the list of cards
* [findPetsByTags](#findpetsbytags) - Finds Card by Global ID
* [getSetsSetCardLocalId](#getsetssetcardlocalid)

## cards

desc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cards->cards();

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findPetsByTags

Find a defined card thatusing its global id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindPetsByTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindPetsByTagsRequest();
    $request->cardId = 'corrupti';

    $response = $sdk->cards->findPetsByTags($request);

    if ($response->card !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetsSetCardLocalId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSetsSetCardLocalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetsSetCardLocalIdRequest();
    $request->cardLocalId = 'provident';
    $request->set = 'distinctio';

    $response = $sdk->cards->getSetsSetCardLocalId($request);

    if ($response->card !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
