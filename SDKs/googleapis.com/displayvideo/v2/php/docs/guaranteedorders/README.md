# guaranteedOrders

### Available Operations

* [displayvideoGuaranteedOrdersCreate](#displayvideoguaranteedorderscreate) - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* [displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors](#displayvideoguaranteedorderseditguaranteedorderreadaccessors) - Edits read advertisers of a guaranteed order.
* [displayvideoGuaranteedOrdersGet](#displayvideoguaranteedordersget) - Gets a guaranteed order.
* [displayvideoGuaranteedOrdersList](#displayvideoguaranteedorderslist) - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoGuaranteedOrdersPatch](#displayvideoguaranteedorderspatch) - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

## displayvideoGuaranteedOrdersCreate

Creates a new guaranteed order. Returns the newly created guaranteed order if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderStatusEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGuaranteedOrdersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->guaranteedOrderInput = new GuaranteedOrderInput();
    $request->guaranteedOrderInput->defaultCampaignId = 'architecto';
    $request->guaranteedOrderInput->displayName = 'alias';
    $request->guaranteedOrderInput->exchange = GuaranteedOrderExchangeEnum::EXCHANGE_UNITED;
    $request->guaranteedOrderInput->publisherName = 'ipsa';
    $request->guaranteedOrderInput->readAccessInherited = false;
    $request->guaranteedOrderInput->readAdvertiserIds = [
        'necessitatibus',
        'quia',
        'dicta',
        'vel',
    ];
    $request->guaranteedOrderInput->readWriteAdvertiserId = 'perspiciatis';
    $request->guaranteedOrderInput->readWritePartnerId = 'debitis';
    $request->guaranteedOrderInput->status = new GuaranteedOrderStatusInput();
    $request->guaranteedOrderInput->status->entityPauseReason = 'ullam';
    $request->guaranteedOrderInput->status->entityStatus = GuaranteedOrderStatusEntityStatusEnum::ENTITY_STATUS_UNSPECIFIED;
    $request->accessToken = 'accusantium';
    $request->advertiserId = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'cumque';
    $request->key = 'iure';
    $request->oauthToken = 'quibusdam';
    $request->partnerId = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DisplayvideoGuaranteedOrdersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->guaranteedOrders->displayvideoGuaranteedOrdersCreate($request, $requestSecurity);

    if ($response->guaranteedOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors

Edits read advertisers of a guaranteed order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EditGuaranteedOrderReadAccessorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->editGuaranteedOrderReadAccessorsRequest = new EditGuaranteedOrderReadAccessorsRequest();
    $request->editGuaranteedOrderReadAccessorsRequest->addedAdvertisers = [
        'laboriosam',
        'sed',
    ];
    $request->editGuaranteedOrderReadAccessorsRequest->partnerId = 'odio';
    $request->editGuaranteedOrderReadAccessorsRequest->readAccessInherited = false;
    $request->editGuaranteedOrderReadAccessorsRequest->removedAdvertisers = [
        'provident',
        'cum',
        'doloribus',
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'laboriosam';
    $request->guaranteedOrderId = 'unde';
    $request->key = 'modi';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->guaranteedOrders->displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors($request, $requestSecurity);

    if ($response->editGuaranteedOrderReadAccessorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoGuaranteedOrdersGet

Gets a guaranteed order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGuaranteedOrdersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->advertiserId = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'id';
    $request->guaranteedOrderId = 'saepe';
    $request->key = 'autem';
    $request->oauthToken = 'quo';
    $request->partnerId = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new DisplayvideoGuaranteedOrdersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->guaranteedOrders->displayvideoGuaranteedOrdersGet($request, $requestSecurity);

    if ($response->guaranteedOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoGuaranteedOrdersList

Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGuaranteedOrdersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->advertiserId = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'distinctio';
    $request->filter = 'pariatur';
    $request->key = 'ad';
    $request->oauthToken = 'facere';
    $request->orderBy = 'laborum';
    $request->pageSize = 911451;
    $request->pageToken = 'laborum';
    $request->partnerId = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DisplayvideoGuaranteedOrdersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->guaranteedOrders->displayvideoGuaranteedOrdersList($request, $requestSecurity);

    if ($response->listGuaranteedOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoGuaranteedOrdersPatch

Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedOrderStatusEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGuaranteedOrdersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGuaranteedOrdersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->guaranteedOrderInput = new GuaranteedOrderInput();
    $request->guaranteedOrderInput->defaultCampaignId = 'deserunt';
    $request->guaranteedOrderInput->displayName = 'molestias';
    $request->guaranteedOrderInput->exchange = GuaranteedOrderExchangeEnum::EXCHANGE_UNRULYX;
    $request->guaranteedOrderInput->publisherName = 'est';
    $request->guaranteedOrderInput->readAccessInherited = false;
    $request->guaranteedOrderInput->readAdvertiserIds = [
        'labore',
        'quo',
        'perferendis',
    ];
    $request->guaranteedOrderInput->readWriteAdvertiserId = 'fugit';
    $request->guaranteedOrderInput->readWritePartnerId = 'aliquid';
    $request->guaranteedOrderInput->status = new GuaranteedOrderStatusInput();
    $request->guaranteedOrderInput->status->entityPauseReason = 'magnam';
    $request->guaranteedOrderInput->status->entityStatus = GuaranteedOrderStatusEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->accessToken = 'eligendi';
    $request->advertiserId = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'unde';
    $request->guaranteedOrderId = 'nulla';
    $request->key = 'error';
    $request->oauthToken = 'mollitia';
    $request->partnerId = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->updateMask = 'esse';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new DisplayvideoGuaranteedOrdersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->guaranteedOrders->displayvideoGuaranteedOrdersPatch($request, $requestSecurity);

    if ($response->guaranteedOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
