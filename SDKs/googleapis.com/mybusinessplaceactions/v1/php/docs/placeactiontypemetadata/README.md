# placeActionTypeMetadata

### Available Operations

* [mybusinessplaceactionsPlaceActionTypeMetadataList](#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.

## mybusinessplaceactionsPlaceActionTypeMetadataList

Returns the list of available place action types for a location or country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsPlaceActionTypeMetadataListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsPlaceActionTypeMetadataListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->filter = 'velit';
    $request->key = 'error';
    $request->languageCode = 'quia';
    $request->oauthToken = 'quis';
    $request->pageSize = 110375;
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $response = $sdk->placeActionTypeMetadata->mybusinessplaceactionsPlaceActionTypeMetadataList($request);

    if ($response->listPlaceActionTypeMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
