# tags

## Overview

Information about tags

### Available Operations

* [getResourcesTagsFormat](#getresourcestagsformat) - Get Tags
* [getResourcesTagsTagLanguagesFormat](#getresourcestagstaglanguagesformat) - Get TagLanguages
* [getResourcesTagsTagTypesFormat](#getresourcestagstagtypesformat) - Get MediaItems for Tag
* [getResourcesTagsIdFormat](#getresourcestagsidformat) - Get Tag by ID
* [getResourcesTagsIdMediaFormat](#getresourcestagsidmediaformat) - Get MediaItems for Tag
* [getResourcesTagsIdRelatedFormat](#getresourcestagsidrelatedformat) - Get related Tags by ID
* [getResourcesTagsIdSyndicateFormat](#getresourcestagsidsyndicateformat) - Get MediaItems for Tag

## getResourcesTagsFormat

List of Tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsFormatRequest();
    $request->format = 'laborum';
    $request->max = 96098;
    $request->mediaId = 971945;
    $request->name = 'Caleb Koss';
    $request->nameContains = 'ipsa';
    $request->offset = 604846;
    $request->sort = 'voluptate';
    $request->typeId = 739264;
    $request->typeName = 'perferendis';

    $response = $sdk->tags->getResourcesTagsFormat($request);

    if ($response->tagMarshallerWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsTagLanguagesFormat

List of Tag Languages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsTagLanguagesFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsTagLanguagesFormatRequest();
    $request->format = 'doloremque';

    $response = $sdk->tags->getResourcesTagsTagLanguagesFormat($request);

    if ($response->tagLanguageMarshallerWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsTagTypesFormat

List of Types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsTagTypesFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsTagTypesFormatRequest();
    $request->format = 'reprehenderit';

    $response = $sdk->tags->getResourcesTagsTagTypesFormat($request);

    if ($response->tagTypeMarshallerWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsIdFormat

Information about a specific tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsIdFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsIdFormatRequest();
    $request->format = 'ut';
    $request->id = 979587;

    $response = $sdk->tags->getResourcesTagsIdFormat($request);

    if ($response->tagMarshallerWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsIdMediaFormat

MediaItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsIdMediaFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsIdMediaFormatRequest();
    $request->format = 'dicta';
    $request->id = 359444;
    $request->max = 296140;
    $request->offset = 480894;
    $request->sort = 'dicta';

    $response = $sdk->tags->getResourcesTagsIdMediaFormat($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsIdRelatedFormat

Information about related tags to a specific tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsIdRelatedFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsIdRelatedFormatRequest();
    $request->format = 'harum';
    $request->id = 317983;
    $request->max = 880476;
    $request->offset = 414263;
    $request->sort = 'repudiandae';

    $response = $sdk->tags->getResourcesTagsIdRelatedFormat($request);

    if ($response->tagMarshallerWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesTagsIdSyndicateFormat

MediaItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesTagsIdSyndicateFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesTagsIdSyndicateFormatRequest();
    $request->displayMethod = 'quae';
    $request->format = 'ipsum';
    $request->id = 692472;

    $response = $sdk->tags->getResourcesTagsIdSyndicateFormat($request);

    if ($response->getResourcesTagsIdSyndicateFormat200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
