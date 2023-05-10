# inventorySources

### Available Operations

* [displayvideoInventorySourcesCreate](#displayvideoinventorysourcescreate) - Creates a new inventory source. Returns the newly created inventory source if successful.
* [displayvideoInventorySourcesEditInventorySourceReadWriteAccessors](#displayvideoinventorysourceseditinventorysourcereadwriteaccessors) - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* [displayvideoInventorySourcesGet](#displayvideoinventorysourcesget) - Gets an inventory source.
* [displayvideoInventorySourcesList](#displayvideoinventorysourceslist) - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoInventorySourcesPatch](#displayvideoinventorysourcespatch) - Updates an existing inventory source. Returns the updated inventory source if successful.

## displayvideoInventorySourcesCreate

Creates a new inventory source. Returns the newly created inventory source if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceInput;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceCommitmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\CreativeConfigCreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceDisplayCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceVideoCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceInventorySourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RateDetails;
use \OpenAPI\OpenAPI\Models\Shared\RateDetailsInventorySourceRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessors;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessorsAdvertiserAccessors;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessorsPartnerAccessor;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceStatusEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inventorySourceInput = new InventorySourceInput();
    $request->inventorySourceInput->commitment = InventorySourceCommitmentEnum::INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED;
    $request->inventorySourceInput->creativeConfigs = [
        new CreativeConfig(),
        new CreativeConfig(),
    ];
    $request->inventorySourceInput->dealId = 'rem';
    $request->inventorySourceInput->deliveryMethod = InventorySourceDeliveryMethodEnum::INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED;
    $request->inventorySourceInput->displayName = 'ullam';
    $request->inventorySourceInput->exchange = InventorySourceExchangeEnum::EXCHANGE_NEXSTAR_DIGITAL;
    $request->inventorySourceInput->guaranteedOrderId = 'dicta';
    $request->inventorySourceInput->inventorySourceType = InventorySourceInventorySourceTypeEnum::INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE;
    $request->inventorySourceInput->publisherName = 'eligendi';
    $request->inventorySourceInput->rateDetails = new RateDetails();
    $request->inventorySourceInput->rateDetails->inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum::INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED;
    $request->inventorySourceInput->rateDetails->minimumSpend = new Money();
    $request->inventorySourceInput->rateDetails->minimumSpend->currencyCode = 'officiis';
    $request->inventorySourceInput->rateDetails->minimumSpend->nanos = 100002;
    $request->inventorySourceInput->rateDetails->minimumSpend->units = 'architecto';
    $request->inventorySourceInput->rateDetails->rate = new Money();
    $request->inventorySourceInput->rateDetails->rate->currencyCode = 'enim';
    $request->inventorySourceInput->rateDetails->rate->nanos = 758985;
    $request->inventorySourceInput->rateDetails->rate->units = 'rem';
    $request->inventorySourceInput->rateDetails->unitsPurchased = 'perferendis';
    $request->inventorySourceInput->readWriteAccessors = new InventorySourceAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers = new InventorySourceAccessorsAdvertiserAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers->advertiserIds = [
        'reiciendis',
        'a',
        'iste',
    ];
    $request->inventorySourceInput->readWriteAccessors->partner = new InventorySourceAccessorsPartnerAccessor();
    $request->inventorySourceInput->readWriteAccessors->partner->partnerId = 'dicta';
    $request->inventorySourceInput->status = new InventorySourceStatusInput();
    $request->inventorySourceInput->status->entityPauseReason = 'quos';
    $request->inventorySourceInput->status->entityStatus = InventorySourceStatusEntityStatusEnum::ENTITY_STATUS_ARCHIVED;
    $request->inventorySourceInput->subSitePropertyId = 'dolore';
    $request->inventorySourceInput->timeRange = new TimeRange();
    $request->inventorySourceInput->timeRange->endTime = 'modi';
    $request->inventorySourceInput->timeRange->startTime = 'itaque';
    $request->accessToken = 'maxime';
    $request->advertiserId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'vero';
    $request->key = 'doloribus';
    $request->oauthToken = 'impedit';
    $request->partnerId = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DisplayvideoInventorySourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySources->displayvideoInventorySourcesCreate($request, $requestSecurity);

    if ($response->inventorySource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourcesEditInventorySourceReadWriteAccessors

Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EditInventorySourceReadWriteAccessorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->editInventorySourceReadWriteAccessorsRequest = new EditInventorySourceReadWriteAccessorsRequest();
    $request->editInventorySourceReadWriteAccessorsRequest->advertisersUpdate = new EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate();
    $request->editInventorySourceReadWriteAccessorsRequest->advertisersUpdate->addedAdvertisers = [
        'nihil',
        'esse',
        'iure',
    ];
    $request->editInventorySourceReadWriteAccessorsRequest->advertisersUpdate->removedAdvertisers = [
        'nesciunt',
        'debitis',
    ];
    $request->editInventorySourceReadWriteAccessorsRequest->assignPartner = false;
    $request->editInventorySourceReadWriteAccessorsRequest->partnerId = 'vel';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'consequuntur';
    $request->inventorySourceId = 'officia';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySources->displayvideoInventorySourcesEditInventorySourceReadWriteAccessors($request, $requestSecurity);

    if ($response->inventorySourceAccessors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourcesGet

Gets an inventory source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'neque';
    $request->inventorySourceId = 'facere';
    $request->key = 'aliquam';
    $request->oauthToken = 'quos';
    $request->partnerId = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DisplayvideoInventorySourcesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySources->displayvideoInventorySourcesGet($request, $requestSecurity);

    if ($response->inventorySource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourcesList

Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->advertiserId = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'repellat';
    $request->filter = 'nemo';
    $request->key = 'doloribus';
    $request->oauthToken = 'possimus';
    $request->orderBy = 'unde';
    $request->pageSize = 275425;
    $request->pageToken = 'explicabo';
    $request->partnerId = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DisplayvideoInventorySourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySources->displayvideoInventorySourcesList($request, $requestSecurity);

    if ($response->listInventorySourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourcesPatch

Updates an existing inventory source. Returns the updated inventory source if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceInput;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceCommitmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\CreativeConfigCreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceDisplayCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceVideoCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceInventorySourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RateDetails;
use \OpenAPI\OpenAPI\Models\Shared\RateDetailsInventorySourceRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessors;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessorsAdvertiserAccessors;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAccessorsPartnerAccessor;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceStatusEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourcesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourcesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inventorySourceInput = new InventorySourceInput();
    $request->inventorySourceInput->commitment = InventorySourceCommitmentEnum::INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED;
    $request->inventorySourceInput->creativeConfigs = [
        new CreativeConfig(),
        new CreativeConfig(),
    ];
    $request->inventorySourceInput->dealId = 'sapiente';
    $request->inventorySourceInput->deliveryMethod = InventorySourceDeliveryMethodEnum::INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED;
    $request->inventorySourceInput->displayName = 'veniam';
    $request->inventorySourceInput->exchange = InventorySourceExchangeEnum::EXCHANGE_VISTAR;
    $request->inventorySourceInput->guaranteedOrderId = 'officia';
    $request->inventorySourceInput->inventorySourceType = InventorySourceInventorySourceTypeEnum::INVENTORY_SOURCE_TYPE_PRIVATE;
    $request->inventorySourceInput->publisherName = 'ut';
    $request->inventorySourceInput->rateDetails = new RateDetails();
    $request->inventorySourceInput->rateDetails->inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum::INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED;
    $request->inventorySourceInput->rateDetails->minimumSpend = new Money();
    $request->inventorySourceInput->rateDetails->minimumSpend->currencyCode = 'tenetur';
    $request->inventorySourceInput->rateDetails->minimumSpend->nanos = 236790;
    $request->inventorySourceInput->rateDetails->minimumSpend->units = 'libero';
    $request->inventorySourceInput->rateDetails->rate = new Money();
    $request->inventorySourceInput->rateDetails->rate->currencyCode = 'in';
    $request->inventorySourceInput->rateDetails->rate->nanos = 329651;
    $request->inventorySourceInput->rateDetails->rate->units = 'ex';
    $request->inventorySourceInput->rateDetails->unitsPurchased = 'minus';
    $request->inventorySourceInput->readWriteAccessors = new InventorySourceAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers = new InventorySourceAccessorsAdvertiserAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers->advertiserIds = [
        'beatae',
    ];
    $request->inventorySourceInput->readWriteAccessors->partner = new InventorySourceAccessorsPartnerAccessor();
    $request->inventorySourceInput->readWriteAccessors->partner->partnerId = 'hic';
    $request->inventorySourceInput->status = new InventorySourceStatusInput();
    $request->inventorySourceInput->status->entityPauseReason = 'nisi';
    $request->inventorySourceInput->status->entityStatus = InventorySourceStatusEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->inventorySourceInput->subSitePropertyId = 'dolor';
    $request->inventorySourceInput->timeRange = new TimeRange();
    $request->inventorySourceInput->timeRange->endTime = 'ducimus';
    $request->inventorySourceInput->timeRange->startTime = 'fuga';
    $request->accessToken = 'minima';
    $request->advertiserId = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'magni';
    $request->inventorySourceId = 'incidunt';
    $request->key = 'adipisci';
    $request->oauthToken = 'praesentium';
    $request->partnerId = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->updateMask = 'expedita';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DisplayvideoInventorySourcesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySources->displayvideoInventorySourcesPatch($request, $requestSecurity);

    if ($response->inventorySource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
