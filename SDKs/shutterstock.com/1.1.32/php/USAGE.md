<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTrackCollectionItemsRequest();
    $request->collectionItemRequest = new CollectionItemRequest();
    $request->collectionItemRequest->items = [
        new CollectionItem(),
        new CollectionItem(),
        new CollectionItem(),
    ];
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $requestSecurity = new AddTrackCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->addTrackCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->