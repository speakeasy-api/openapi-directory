# feature

### Available Operations

* [getFeature](#getfeature) - Feature Detail
* [listFeatureTypes](#listfeaturetypes) - Feature Type Collection
* [listFeatures](#listfeatures) - Feature Collection

## getFeature

Return the content of the selected feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureRequest();
    $request->featureId = 'excepturi';

    $requestSecurity = new GetFeatureSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->feature->getFeature($request, $requestSecurity);

    if ($response->getFeature200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeatureTypes

Return a collection of Feature Types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFeatureTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListFeatureTypesSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->feature->listFeatureTypes($requestSecurity);

    if ($response->listFeatureTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeatures

Return a collection of Feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFeaturesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFeaturesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFeaturesRequest();
    $request->date = 'nisi';
    $request->end = 'recusandae';
    $request->start = 'temporibus';
    $request->type = 'ab';

    $requestSecurity = new ListFeaturesSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->feature->listFeatures($request, $requestSecurity);

    if ($response->listFeatures200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
