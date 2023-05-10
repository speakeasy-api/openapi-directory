<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkPlaceActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placeActionLinkInput = new PlaceActionLinkInput();
    $request->placeActionLinkInput->isPreferred = false;
    $request->placeActionLinkInput->name = 'Kelvin Sporer';
    $request->placeActionLinkInput->placeActionType = PlaceActionLinkPlaceActionTypeEnum::FOOD_ORDERING;
    $request->placeActionLinkInput->uri = 'https://impressive-ox.name';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksCreate($request);

    if ($response->placeActionLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->