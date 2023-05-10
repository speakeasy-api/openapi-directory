# locations

### Available Operations

* [mybusinessbusinesscallsLocationsBusinesscallsinsightsList](#mybusinessbusinesscallslocationsbusinesscallsinsightslist) - Returns insights for Business calls for a location.
* [mybusinessbusinesscallsLocationsGetBusinesscallssettings](#mybusinessbusinesscallslocationsgetbusinesscallssettings) - Returns the Business calls settings resource for the given location.
* [mybusinessbusinesscallsLocationsUpdateBusinesscallssettings](#mybusinessbusinesscallslocationsupdatebusinesscallssettings) - Updates the Business call settings for the specified location.

## mybusinessbusinesscallsLocationsBusinesscallsinsightsList

Returns insights for Business calls for a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $response = $sdk->locations->mybusinessbusinesscallsLocationsBusinesscallsinsightsList($request);

    if ($response->listBusinessCallsInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinesscallsLocationsGetBusinesscallssettings

Returns the Business calls settings resource for the given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->name = 'Timmy Satterfield';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $response = $sdk->locations->mybusinessbusinesscallsLocationsGetBusinesscallssettings($request);

    if ($response->businessCallsSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinesscallsLocationsUpdateBusinesscallssettings

Updates the Business call settings for the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BusinessCallsSettings;
use \OpenAPI\OpenAPI\Models\Shared\BusinessCallsSettingsCallsStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->businessCallsSettings = new BusinessCallsSettings();
    $request->businessCallsSettings->callsState = BusinessCallsSettingsCallsStateEnum::ENABLED;
    $request->businessCallsSettings->consentTime = 'totam';
    $request->businessCallsSettings->name = 'Omar Carroll';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->name = 'Jack Johns';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->updateMask = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $response = $sdk->locations->mybusinessbusinesscallsLocationsUpdateBusinesscallssettings($request);

    if ($response->businessCallsSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
