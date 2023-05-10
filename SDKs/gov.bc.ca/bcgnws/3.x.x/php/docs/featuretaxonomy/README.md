# featureTaxonomy

### Available Operations

* [getFeatureCategories](#getfeaturecategories) - Get all feature categories
* [getFeatureClasses](#getfeatureclasses) - Get all feature classes
* [getFeatureTypes](#getfeaturetypes) - Get all feature types

## getFeatureCategories

Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureCategoriesOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureCategoriesRequest();
    $request->outputFormat = GetFeatureCategoriesOutputFormatEnum::XML;

    $response = $sdk->featureTaxonomy->getFeatureCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeatureClasses

Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureClassesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureClassesOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureClassesRequest();
    $request->outputFormat = GetFeatureClassesOutputFormatEnum::XML;

    $response = $sdk->featureTaxonomy->getFeatureClasses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeatureTypes

Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureTypesOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureTypesRequest();
    $request->outputFormat = GetFeatureTypesOutputFormatEnum::XML;

    $response = $sdk->featureTaxonomy->getFeatureTypes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
