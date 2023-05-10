# filters

### Available Operations

* [getSearchVersionNumberGeometryFilterExt](#getsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~getSearchVersionNumberRoutedFilterPositionHeadingExt~~](#getsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**
* [postSearchVersionNumberGeometryFilterExt](#postsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~postSearchVersionNumberRoutedFilterPositionHeadingExt~~](#postsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**

## getSearchVersionNumberGeometryFilterExt

Geometry Filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberGeometryFilterExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberGeometryFilterExtRequest();
    $request->ext = ExtEnum::JS;
    $request->geometryList = 'nulla';
    $request->poiList = 'corrupti';
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->filters->getSearchVersionNumberGeometryFilterExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest();
    $request->ext = ExtEnum::XML;
    $request->heading = 4236.55;
    $request->poiList = 'error';
    $request->position = 'deserunt';
    $request->routingTimeout = 384382;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->filters->getSearchVersionNumberRoutedFilterPositionHeadingExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSearchVersionNumberGeometryFilterExt

Geometry Filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSearchVersionNumberGeometryFilterExtRequest();
    $request->requestBody = new PostSearchVersionNumberGeometryFilterExtRequestBody();
    $request->requestBody->geometryList = [
        new PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList(),
        new PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList(),
    ];
    $request->requestBody->poiList = [
        new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList(),
        new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList(),
    ];
    $request->ext = ExtEnum::XML;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->filters->postSearchVersionNumberGeometryFilterExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~postSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest();
    $request->requestBody = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody();
    $request->requestBody->poiList = [
        new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList(),
    ];
    $request->ext = ExtEnum::XML;
    $request->heading = 2726.56;
    $request->position = 'suscipit';
    $request->routingTimeout = 477665;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->filters->postSearchVersionNumberRoutedFilterPositionHeadingExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
