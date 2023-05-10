# attributes

### Available Operations

* [mybusinessAttributesList](#mybusinessattributeslist) - Returns the list of available attributes that would be available for a location with the given primary category and country.

## mybusinessAttributesList

Returns the list of available attributes that would be available for a location with the given primary category and country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAttributesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAttributesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->categoryId = 'officiis';
    $request->country = 'Liechtenstein';
    $request->fields = 'facilis';
    $request->key = 'quaerat';
    $request->languageCode = 'incidunt';
    $request->name = 'Miss Alyssa Leffler';
    $request->oauthToken = 'veniam';
    $request->pageSize = 329543;
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'magni';

    $response = $sdk->attributes->mybusinessAttributesList($request);

    if ($response->listAttributeMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
