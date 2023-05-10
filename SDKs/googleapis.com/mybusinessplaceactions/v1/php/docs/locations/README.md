# locations

### Available Operations

* [mybusinessplaceactionsLocationsPlaceActionLinksCreate](#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [mybusinessplaceactionsLocationsPlaceActionLinksDelete](#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksGet](#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [mybusinessplaceactionsLocationsPlaceActionLinksList](#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksPatch](#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

## mybusinessplaceactionsLocationsPlaceActionLinksCreate

Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.

### Example Usage

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
    $request->placeActionLinkInput->name = 'Ted Mante';
    $request->placeActionLinkInput->placeActionType = PlaceActionLinkPlaceActionTypeEnum::FOOD_TAKEOUT;
    $request->placeActionLinkInput->uri = 'http://gloomy-blanket.name';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksCreate($request);

    if ($response->placeActionLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksDelete

Deletes a place action link from the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->name = 'Antoinette Nikolaus';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksGet

Gets the specified place action link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksGet($request);

    if ($response->placeActionLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksList

Lists the place action links for the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->filter = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->pageSize = 359508;
    $request->pageToken = 'iste';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksList($request);

    if ($response->listPlaceActionLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksPatch

Updates the specified place action link and returns it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkPlaceActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placeActionLinkInput = new PlaceActionLinkInput();
    $request->placeActionLinkInput->isPreferred = false;
    $request->placeActionLinkInput->name = 'Carlton O'Hara';
    $request->placeActionLinkInput->placeActionType = PlaceActionLinkPlaceActionTypeEnum::APPOINTMENT;
    $request->placeActionLinkInput->uri = 'http://colorless-ribbon.biz';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->name = 'Cecilia Yundt MD';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->updateMask = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksPatch($request);

    if ($response->placeActionLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
