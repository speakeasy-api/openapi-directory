# attributes

### Available Operations

* [mybusinessbusinessinformationAttributesList](#mybusinessbusinessinformationattributeslist) - Returns the list of attributes that would be available for a location with the given primary category and country.

## mybusinessbusinessinformationAttributesList

Returns the list of attributes that would be available for a location with the given primary category and country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationAttributesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationAttributesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->categoryName = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->languageCode = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->pageSize = 83112;
    $request->pageToken = 'itaque';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->regionCode = 'consequatur';
    $request->showAll = false;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $response = $sdk->attributes->mybusinessbusinessinformationAttributesList($request);

    if ($response->listAttributeMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
