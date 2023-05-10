# settings

### Available Operations

* [getAllSettings](#getallsettings) - Get all settings
* [getDisplayedAttributes](#getdisplayedattributes) - Get displayed attributes
* [getDistinctAttribute](#getdistinctattribute) - Get distinct attribute
* [getFaceting](#getfaceting) - Get faceting
* [getFilterableAttributes](#getfilterableattributes) - Get filterable attributes
* [getPagination](#getpagination) - Get pagination
* [getRankingRules](#getrankingrules) - Get ranking rules
* [getSearchableAttributes](#getsearchableattributes) - Get searchable attributes
* [getSortableAttributes](#getsortableattributes) - Get sortable attributes
* [getStopWords](#getstopwords) - Get stop-words
* [getSynonyms](#getsynonyms) - Get synonyms
* [getTypoTolerance](#gettypotolerance) - Get typo-tolerance
* [resetAllSettings](#resetallsettings) - Reset all settings
* [resetDisplayedAttributes](#resetdisplayedattributes) - Reset displayed attributes
* [resetDistinctAttribute](#resetdistinctattribute) - Reset distinct attribute
* [resetFaceting](#resetfaceting) - Reset faceting
* [resetFilterableAttributes](#resetfilterableattributes) - Reset filterable attributes
* [resetPagination](#resetpagination) - Reset pagination
* [resetRankingRules](#resetrankingrules) - Reset ranking rules
* [resetSearchableAttributes](#resetsearchableattributes) - Reset searchable attributes
* [resetSortableAttributes](#resetsortableattributes) - Reset sortable attributes
* [resetStopWords](#resetstopwords) - Reset stop-words
* [resetSynonyms](#resetsynonyms) - Reset synonyms
* [resetTypoTolerance](#resettypotolerance) - Reset typo-tolerance
* [updateDisplayedAttributes](#updatedisplayedattributes) - Update displayed attributes
* [updateDistinctAttribute](#updatedistinctattribute) - Update distinct attribute
* [updateFaceting](#updatefaceting) - Update faceting
* [updateFilterableAttributes](#updatefilterableattributes) - Update filterable attributes
* [updatePagination](#updatepagination) - Update pagination
* [updateRankingRules](#updaterankingrules) - Update ranking rules
* [updateSearchableAttributes](#updatesearchableattributes) - Update searchable attributes
* [updateSettings](#updatesettings) - Update settings
* [updateSortableAttributes](#updatesortableattributes) - Update sortable attributes
* [updateStopWords](#updatestopwords) - Update stop-words
* [updateSynonyms](#updatesynonyms) - Update synonyms
* [updateTypoTolerance](#updatetypotolerance) - Update typo-tolerance

## getAllSettings

Get all settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getAllSettings();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisplayedAttributes

Get displayed attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getDisplayedAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistinctAttribute

Get distinct attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getDistinctAttribute();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFaceting

Get faceting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getFaceting();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilterableAttributes

Get filterable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getFilterableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPagination

Get pagination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getPagination();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRankingRules

Get ranking rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getRankingRules();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchableAttributes

Get searchable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getSearchableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSortableAttributes

Get sortable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getSortableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopWords

Get stop-words

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'the',
        'the',
    ]

    $response = $sdk->settings->getStopWords($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSynonyms

Get synonyms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getSynonyms();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTypoTolerance

Get typo-tolerance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->getTypoTolerance();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetAllSettings

Reset all settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetAllSettings();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetDisplayedAttributes

Reset displayed attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetDisplayedAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetDistinctAttribute

Reset distinct attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetDistinctAttribute();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetFaceting

Reset faceting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetFaceting();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetFilterableAttributes

Reset filterable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetFilterableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetPagination

Reset pagination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetPagination();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetRankingRules

Reset ranking rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetRankingRules();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetSearchableAttributes

Reset searchable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetSearchableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetSortableAttributes

Reset sortable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetSortableAttributes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetStopWords

Reset stop-words

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetStopWords();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetSynonyms

Reset synonyms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'magnam'

    $response = $sdk->settings->resetSynonyms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetTypoTolerance

Reset typo-tolerance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->settings->resetTypoTolerance();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDisplayedAttributes

Update displayed attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'title',
        'title',
        'title',
        'title',
    ]

    $response = $sdk->settings->updateDisplayedAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDistinctAttribute

Update distinct attribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'ipsa'

    $response = $sdk->settings->updateDistinctAttribute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFaceting

Update faceting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFacetingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFacetingRequestBody();
    $request->maxValuesPerFacet = 3000;

    $response = $sdk->settings->updateFaceting($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFilterableAttributes

Update filterable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'genre',
        'genre',
        'genre',
        'genre',
    ]

    $response = $sdk->settings->updateFilterableAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePagination

Update pagination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaginationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaginationRequestBody();
    $request->maxTotalHits = 2000;

    $response = $sdk->settings->updatePagination($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRankingRules

Update ranking rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'typo',
        'typo',
    ]

    $response = $sdk->settings->updateRankingRules($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSearchableAttributes

Update searchable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'title',
        'title',
    ]

    $response = $sdk->settings->updateSearchableAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettings

Update settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSettingsRequestBody();
    $request->displayedAttributes = [
        'title',
        'title',
    ];
    $request->filterableAttributes = [
        'genre',
        'genre',
        'genre',
        'genre',
    ];
    $request->searchableAttributes = [
        'title',
        'title',
        'title',
        'title',
    ];
    $request->sortableAttributes = [
        'price',
        'price',
        'price',
    ];
    $request->stopWords = [
        'of',
        'of',
    ];

    $response = $sdk->settings->updateSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSortableAttributes

Update sortable attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'price',
        'price',
        'price',
    ]

    $response = $sdk->settings->updateSortableAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStopWords

Update stop-words

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'the',
        'the',
    ]

    $response = $sdk->settings->updateStopWords($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSynonyms

Update synonyms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSynonymsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSynonymsRequestBody();
    $request->harryPotter = [
        'hp',
        'hp',
        'hp',
        'hp',
    ];
    $request->hp = [
        'harry potter',
        'harry potter',
        'harry potter',
        'harry potter',
    ];

    $response = $sdk->settings->updateSynonyms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTypoTolerance

Update typo-tolerance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypoToleranceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypoToleranceRequestBodyMinWordSizeForTypos;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTypoToleranceRequestBody();
    $request->disableOnAttributes = [
        'genre',
    ];
    $request->disableOnWords = [
        'Prince',
        'Prince',
    ];
    $request->minWordSizeForTypos = new UpdateTypoToleranceRequestBodyMinWordSizeForTypos();
    $request->minWordSizeForTypos->oneTypo = 2;
    $request->minWordSizeForTypos->twoTypos = 11;

    $response = $sdk->settings->updateTypoTolerance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
