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
    $request->inventorySourceInput->commitment = InventorySourceCommitmentEnum::INVENTORY_SOURCE_COMMITMENT_GUARANTEED;
    $request->inventorySourceInput->creativeConfigs = [
        new CreativeConfig(),
        new CreativeConfig(),
    ];
    $request->inventorySourceInput->dealId = 'velit';
    $request->inventorySourceInput->deliveryMethod = InventorySourceDeliveryMethodEnum::INVENTORY_SOURCE_DELIVERY_METHOD_TAG;
    $request->inventorySourceInput->displayName = 'enim';
    $request->inventorySourceInput->exchange = InventorySourceExchangeEnum::EXCHANGE_UNITED;
    $request->inventorySourceInput->guaranteedOrderId = 'saepe';
    $request->inventorySourceInput->inventorySourceType = InventorySourceInventorySourceTypeEnum::INVENTORY_SOURCE_TYPE_PRIVATE;
    $request->inventorySourceInput->publisherName = 'repudiandae';
    $request->inventorySourceInput->rateDetails = new RateDetails();
    $request->inventorySourceInput->rateDetails->inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum::INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED;
    $request->inventorySourceInput->rateDetails->minimumSpend = new Money();
    $request->inventorySourceInput->rateDetails->minimumSpend->currencyCode = 'officia';
    $request->inventorySourceInput->rateDetails->minimumSpend->nanos = 770128;
    $request->inventorySourceInput->rateDetails->minimumSpend->units = 'quasi';
    $request->inventorySourceInput->rateDetails->rate = new Money();
    $request->inventorySourceInput->rateDetails->rate->currencyCode = 'blanditiis';
    $request->inventorySourceInput->rateDetails->rate->nanos = 260911;
    $request->inventorySourceInput->rateDetails->rate->units = 'quisquam';
    $request->inventorySourceInput->rateDetails->unitsPurchased = 'eos';
    $request->inventorySourceInput->readWriteAccessors = new InventorySourceAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers = new InventorySourceAccessorsAdvertiserAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers->advertiserIds = [
        'natus',
        'minus',
        'quia',
    ];
    $request->inventorySourceInput->readWriteAccessors->partner = new InventorySourceAccessorsPartnerAccessor();
    $request->inventorySourceInput->readWriteAccessors->partner->partnerId = 'magnam';
    $request->inventorySourceInput->status = new InventorySourceStatusInput();
    $request->inventorySourceInput->status->entityPauseReason = 'reprehenderit';
    $request->inventorySourceInput->status->entityStatus = InventorySourceStatusEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->inventorySourceInput->subSitePropertyId = 'quos';
    $request->inventorySourceInput->timeRange = new TimeRange();
    $request->inventorySourceInput->timeRange->endTime = 'corrupti';
    $request->inventorySourceInput->timeRange->startTime = 'amet';
    $request->accessToken = 'molestiae';
    $request->advertiserId = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'perferendis';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'architecto';
    $request->partnerId = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'maiores';

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
        'earum',
    ];
    $request->editInventorySourceReadWriteAccessorsRequest->advertisersUpdate->removedAdvertisers = [
        'ipsam',
        'eaque',
    ];
    $request->editInventorySourceReadWriteAccessorsRequest->assignPartner = false;
    $request->editInventorySourceReadWriteAccessorsRequest->partnerId = 'exercitationem';
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'nisi';
    $request->inventorySourceId = 'tenetur';
    $request->key = 'quis';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'id';
    $request->inventorySourceId = 'sapiente';
    $request->key = 'sed';
    $request->oauthToken = 'possimus';
    $request->partnerId = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'adipisci';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'harum';
    $request->advertiserId = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iure';
    $request->fields = 'explicabo';
    $request->filter = 'minus';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->orderBy = 'velit';
    $request->pageSize = 937865;
    $request->pageToken = 'praesentium';
    $request->partnerId = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'mollitia';

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
    $request->inventorySourceInput->commitment = InventorySourceCommitmentEnum::INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED;
    $request->inventorySourceInput->creativeConfigs = [
        new CreativeConfig(),
        new CreativeConfig(),
        new CreativeConfig(),
        new CreativeConfig(),
    ];
    $request->inventorySourceInput->dealId = 'doloremque';
    $request->inventorySourceInput->deliveryMethod = InventorySourceDeliveryMethodEnum::INVENTORY_SOURCE_DELIVERY_METHOD_TAG;
    $request->inventorySourceInput->displayName = 'corrupti';
    $request->inventorySourceInput->exchange = InventorySourceExchangeEnum::EXCHANGE_ADFORM;
    $request->inventorySourceInput->guaranteedOrderId = 'deserunt';
    $request->inventorySourceInput->inventorySourceType = InventorySourceInventorySourceTypeEnum::INVENTORY_SOURCE_TYPE_PRIVATE;
    $request->inventorySourceInput->publisherName = 'excepturi';
    $request->inventorySourceInput->rateDetails = new RateDetails();
    $request->inventorySourceInput->rateDetails->inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum::INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED;
    $request->inventorySourceInput->rateDetails->minimumSpend = new Money();
    $request->inventorySourceInput->rateDetails->minimumSpend->currencyCode = 'tempora';
    $request->inventorySourceInput->rateDetails->minimumSpend->nanos = 821904;
    $request->inventorySourceInput->rateDetails->minimumSpend->units = 'dolor';
    $request->inventorySourceInput->rateDetails->rate = new Money();
    $request->inventorySourceInput->rateDetails->rate->currencyCode = 'rerum';
    $request->inventorySourceInput->rateDetails->rate->nanos = 153582;
    $request->inventorySourceInput->rateDetails->rate->units = 'accusamus';
    $request->inventorySourceInput->rateDetails->unitsPurchased = 'optio';
    $request->inventorySourceInput->readWriteAccessors = new InventorySourceAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers = new InventorySourceAccessorsAdvertiserAccessors();
    $request->inventorySourceInput->readWriteAccessors->advertisers->advertiserIds = [
        'minus',
        'quo',
        'quos',
        'asperiores',
    ];
    $request->inventorySourceInput->readWriteAccessors->partner = new InventorySourceAccessorsPartnerAccessor();
    $request->inventorySourceInput->readWriteAccessors->partner->partnerId = 'voluptatum';
    $request->inventorySourceInput->status = new InventorySourceStatusInput();
    $request->inventorySourceInput->status->entityPauseReason = 'iste';
    $request->inventorySourceInput->status->entityStatus = InventorySourceStatusEntityStatusEnum::ENTITY_STATUS_ARCHIVED;
    $request->inventorySourceInput->subSitePropertyId = 'accusantium';
    $request->inventorySourceInput->timeRange = new TimeRange();
    $request->inventorySourceInput->timeRange->endTime = 'illo';
    $request->inventorySourceInput->timeRange->startTime = 'aut';
    $request->accessToken = 'doloribus';
    $request->advertiserId = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'neque';
    $request->inventorySourceId = 'pariatur';
    $request->key = 'vel';
    $request->oauthToken = 'sapiente';
    $request->partnerId = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->updateMask = 'quos';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'non';

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
