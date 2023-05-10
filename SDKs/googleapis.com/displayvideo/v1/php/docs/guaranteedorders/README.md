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
    $request->guaranteedOrderInput->defaultCampaignId = 'quas';
    $request->guaranteedOrderInput->displayName = 'provident';
    $request->guaranteedOrderInput->exchange = GuaranteedOrderExchangeEnum::EXCHANGE_JCD;
    $request->guaranteedOrderInput->publisherName = 'rerum';
    $request->guaranteedOrderInput->readAccessInherited = false;
    $request->guaranteedOrderInput->readAdvertiserIds = [
        'corporis',
        'vero',
    ];
    $request->guaranteedOrderInput->readWriteAdvertiserId = 'similique';
    $request->guaranteedOrderInput->readWritePartnerId = 'repellendus';
    $request->guaranteedOrderInput->status = new GuaranteedOrderStatusInput();
    $request->guaranteedOrderInput->status->entityPauseReason = 'iure';
    $request->guaranteedOrderInput->status->entityStatus = GuaranteedOrderStatusEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->accessToken = 'commodi';
    $request->advertiserId = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'voluptatem';
    $request->key = 'ad';
    $request->oauthToken = 'quae';
    $request->partnerId = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->editGuaranteedOrderReadAccessorsRequest = new EditGuaranteedOrderReadAccessorsRequest();
    $request->editGuaranteedOrderReadAccessorsRequest->addedAdvertisers = [
        'quasi',
    ];
    $request->editGuaranteedOrderReadAccessorsRequest->partnerId = 'dicta';
    $request->editGuaranteedOrderReadAccessorsRequest->readAccessInherited = false;
    $request->editGuaranteedOrderReadAccessorsRequest->removedAdvertisers = [
        'doloremque',
        'earum',
        'iusto',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'necessitatibus';
    $request->guaranteedOrderId = 'provident';
    $request->key = 'repudiandae';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'itaque';

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
    $request->accessToken = 'corrupti';
    $request->advertiserId = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'eos';
    $request->guaranteedOrderId = 'totam';
    $request->key = 'dicta';
    $request->oauthToken = 'voluptatem';
    $request->partnerId = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'a';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->advertiserId = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'labore';
    $request->filter = 'minus';
    $request->key = 'esse';
    $request->oauthToken = 'voluptatem';
    $request->orderBy = 'perferendis';
    $request->pageSize = 698558;
    $request->pageToken = 'ea';
    $request->partnerId = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'velit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->guaranteedOrderInput = new GuaranteedOrderInput();
    $request->guaranteedOrderInput->defaultCampaignId = 'provident';
    $request->guaranteedOrderInput->displayName = 'consectetur';
    $request->guaranteedOrderInput->exchange = GuaranteedOrderExchangeEnum::EXCHANGE_SMAATO;
    $request->guaranteedOrderInput->publisherName = 'dignissimos';
    $request->guaranteedOrderInput->readAccessInherited = false;
    $request->guaranteedOrderInput->readAdvertiserIds = [
        'soluta',
    ];
    $request->guaranteedOrderInput->readWriteAdvertiserId = 'natus';
    $request->guaranteedOrderInput->readWritePartnerId = 'temporibus';
    $request->guaranteedOrderInput->status = new GuaranteedOrderStatusInput();
    $request->guaranteedOrderInput->status->entityPauseReason = 'officia';
    $request->guaranteedOrderInput->status->entityStatus = GuaranteedOrderStatusEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->accessToken = 'tenetur';
    $request->advertiserId = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'illum';
    $request->guaranteedOrderId = 'laborum';
    $request->key = 'dignissimos';
    $request->oauthToken = 'vero';
    $request->partnerId = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->updateMask = 'repellat';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'explicabo';

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
