# shippingsettings

### Available Operations

* [contentShippingsettingsCustombatch](#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [contentShippingsettingsGet](#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [contentShippingsettingsGetsupportedcarriers](#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [contentShippingsettingsGetsupportedholidays](#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [contentShippingsettingsGetsupportedpickupservices](#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [contentShippingsettingsList](#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [contentShippingsettingsUpdate](#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

## contentShippingsettingsCustombatch

Retrieves and updates the shipping settings of multiple accounts in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingsettingsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingsettingsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\ShippingSettings;
use \OpenAPI\OpenAPI\Models\Shared\PostalCodeGroup;
use \OpenAPI\OpenAPI\Models\Shared\PostalCodeRange;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\CutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDayConfig;
use \OpenAPI\OpenAPI\Models\Shared\HolidayCutoff;
use \OpenAPI\OpenAPI\Models\Shared\TransitTable;
use \OpenAPI\OpenAPI\Models\Shared\TransitTableTransitTimeRow;
use \OpenAPI\OpenAPI\Models\Shared\TransitTableTransitTimeRowTransitTimeValue;
use \OpenAPI\OpenAPI\Models\Shared\WarehouseBasedDeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\MinimumOrderValueTable;
use \OpenAPI\OpenAPI\Models\Shared\MinimumOrderValueTableStoreCodeSetWithMov;
use \OpenAPI\OpenAPI\Models\Shared\PickupCarrierService;
use \OpenAPI\OpenAPI\Models\Shared\RateGroup;
use \OpenAPI\OpenAPI\Models\Shared\CarrierRate;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\Headers;
use \OpenAPI\OpenAPI\Models\Shared\LocationIdSet;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfigCutoffConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfigCutoffConfigLocalCutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\Distance;
use \OpenAPI\OpenAPI\Models\Shared\Warehouse;
use \OpenAPI\OpenAPI\Models\Shared\WarehouseCutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shippingsettingsCustomBatchRequest = new ShippingsettingsCustomBatchRequest();
    $request->shippingsettingsCustomBatchRequest->entries = [
        new ShippingsettingsCustomBatchRequestEntry(),
        new ShippingsettingsCustomBatchRequestEntry(),
        new ShippingsettingsCustomBatchRequestEntry(),
        new ShippingsettingsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->fields = 'facere';
    $request->key = 'maxime';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new ContentShippingsettingsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsCustombatch($request, $requestSecurity);

    if ($response->shippingsettingsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsGet

Retrieves the shipping settings of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->accountId = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'voluptatum';
    $request->key = 'perferendis';
    $request->merchantId = 'laborum';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ContentShippingsettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsGet($request, $requestSecurity);

    if ($response->shippingSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsGetsupportedcarriers

Retrieves supported carriers and carrier services for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedcarriersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedcarriersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsGetsupportedcarriersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'illum';
    $request->key = 'at';
    $request->merchantId = 'tenetur';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ContentShippingsettingsGetsupportedcarriersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsGetsupportedcarriers($request, $requestSecurity);

    if ($response->shippingsettingsGetSupportedCarriersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsGetsupportedholidays

Retrieves supported holidays for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedholidaysRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedholidaysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsGetsupportedholidaysRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'quas';
    $request->key = 'odio';
    $request->merchantId = 'commodi';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ContentShippingsettingsGetsupportedholidaysSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsGetsupportedholidays($request, $requestSecurity);

    if ($response->shippingsettingsGetSupportedHolidaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsGetsupportedpickupservices

Retrieves supported pickup services for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedpickupservicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsGetsupportedpickupservicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsGetsupportedpickupservicesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'natus';
    $request->key = 'illum';
    $request->merchantId = 'a';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new ContentShippingsettingsGetsupportedpickupservicesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsGetsupportedpickupservices($request, $requestSecurity);

    if ($response->shippingsettingsGetSupportedPickupServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsList

Lists the shipping settings of the sub-accounts in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'facere';
    $request->key = 'dignissimos';
    $request->maxResults = 614346;
    $request->merchantId = 'provident';
    $request->oauthToken = 'dolor';
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new ContentShippingsettingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsList($request, $requestSecurity);

    if ($response->shippingsettingsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShippingsettingsUpdate

Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingSettings;
use \OpenAPI\OpenAPI\Models\Shared\PostalCodeGroup;
use \OpenAPI\OpenAPI\Models\Shared\PostalCodeRange;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\CutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDayConfig;
use \OpenAPI\OpenAPI\Models\Shared\HolidayCutoff;
use \OpenAPI\OpenAPI\Models\Shared\TransitTable;
use \OpenAPI\OpenAPI\Models\Shared\TransitTableTransitTimeRow;
use \OpenAPI\OpenAPI\Models\Shared\TransitTableTransitTimeRowTransitTimeValue;
use \OpenAPI\OpenAPI\Models\Shared\WarehouseBasedDeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\MinimumOrderValueTable;
use \OpenAPI\OpenAPI\Models\Shared\MinimumOrderValueTableStoreCodeSetWithMov;
use \OpenAPI\OpenAPI\Models\Shared\PickupCarrierService;
use \OpenAPI\OpenAPI\Models\Shared\RateGroup;
use \OpenAPI\OpenAPI\Models\Shared\CarrierRate;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\Headers;
use \OpenAPI\OpenAPI\Models\Shared\LocationIdSet;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfigCutoffConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStoreConfigCutoffConfigLocalCutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\Distance;
use \OpenAPI\OpenAPI\Models\Shared\Warehouse;
use \OpenAPI\OpenAPI\Models\Shared\WarehouseCutoffTime;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShippingsettingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShippingsettingsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->shippingSettings = new ShippingSettings();
    $request->shippingSettings->accountId = 'laborum';
    $request->shippingSettings->postalCodeGroups = [
        new PostalCodeGroup(),
        new PostalCodeGroup(),
    ];
    $request->shippingSettings->services = [
        new Service(),
        new Service(),
        new Service(),
        new Service(),
    ];
    $request->shippingSettings->warehouses = [
        new Warehouse(),
    ];
    $request->accessToken = 'fugiat';
    $request->accountId = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'velit';
    $request->key = 'ullam';
    $request->merchantId = 'quis';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ratione';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new ContentShippingsettingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingsettings->contentShippingsettingsUpdate($request, $requestSecurity);

    if ($response->shippingSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
