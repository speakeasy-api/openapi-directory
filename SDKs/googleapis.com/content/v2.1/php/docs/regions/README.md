# regions

### Available Operations

* [contentRegionsCreate](#contentregionscreate) - Creates a region definition in your Merchant Center account.
* [contentRegionsDelete](#contentregionsdelete) - Deletes a region definition from your Merchant Center account.
* [contentRegionsGet](#contentregionsget) - Retrieves a region defined in your Merchant Center account.
* [contentRegionsList](#contentregionslist) - Lists the regions in your Merchant Center account.
* [contentRegionsPatch](#contentregionspatch) - Updates a region definition in your Merchant Center account.

## contentRegionsCreate

Creates a region definition in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInput;
use \OpenAPI\OpenAPI\Models\Shared\RegionGeoTargetArea;
use \OpenAPI\OpenAPI\Models\Shared\RegionPostalCodeArea;
use \OpenAPI\OpenAPI\Models\Shared\RegionPostalCodeAreaPostalCodeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInput = new RegionInput();
    $request->regionInput->displayName = 'eum';
    $request->regionInput->geotargetArea = new RegionGeoTargetArea();
    $request->regionInput->geotargetArea->geotargetCriteriaIds = [
        'voluptatum',
        'blanditiis',
    ];
    $request->regionInput->postalCodeArea = new RegionPostalCodeArea();
    $request->regionInput->postalCodeArea->postalCodes = [
        new RegionPostalCodeAreaPostalCodeRange(),
        new RegionPostalCodeAreaPostalCodeRange(),
    ];
    $request->regionInput->postalCodeArea->regionCode = 'atque';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'nostrum';
    $request->key = 'atque';
    $request->merchantId = 'architecto';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->regionId = 'rem';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new ContentRegionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->contentRegionsCreate($request, $requestSecurity);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRegionsDelete

Deletes a region definition from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'sapiente';
    $request->key = 'saepe';
    $request->merchantId = 'delectus';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->regionId = 'cumque';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new ContentRegionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->contentRegionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRegionsGet

Retrieves a region defined in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'cumque';
    $request->key = 'quis';
    $request->merchantId = 'enim';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->regionId = 'illum';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new ContentRegionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->contentRegionsGet($request, $requestSecurity);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRegionsList

Lists the regions in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'voluptates';
    $request->key = 'praesentium';
    $request->merchantId = 'dicta';
    $request->oauthToken = 'fugit';
    $request->pageSize = 25190;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ContentRegionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->contentRegionsList($request, $requestSecurity);

    if ($response->listRegionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRegionsPatch

Updates a region definition in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInput;
use \OpenAPI\OpenAPI\Models\Shared\RegionGeoTargetArea;
use \OpenAPI\OpenAPI\Models\Shared\RegionPostalCodeArea;
use \OpenAPI\OpenAPI\Models\Shared\RegionPostalCodeAreaPostalCodeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInput = new RegionInput();
    $request->regionInput->displayName = 'nesciunt';
    $request->regionInput->geotargetArea = new RegionGeoTargetArea();
    $request->regionInput->geotargetArea->geotargetCriteriaIds = [
        'laborum',
        'aliquam',
        'deserunt',
        'modi',
    ];
    $request->regionInput->postalCodeArea = new RegionPostalCodeArea();
    $request->regionInput->postalCodeArea->postalCodes = [
        new RegionPostalCodeAreaPostalCodeRange(),
    ];
    $request->regionInput->postalCodeArea->regionCode = 'impedit';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'at';
    $request->key = 'dolorem';
    $request->merchantId = 'repellat';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->regionId = 'sequi';
    $request->updateMask = 'fugit';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContentRegionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->contentRegionsPatch($request, $requestSecurity);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
