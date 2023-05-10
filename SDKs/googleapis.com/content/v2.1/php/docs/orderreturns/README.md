# orderreturns

### Available Operations

* [contentOrderreturnsAcknowledge](#contentorderreturnsacknowledge) - Acks an order return in your Merchant Center account.
* [contentOrderreturnsCreateorderreturn](#contentorderreturnscreateorderreturn) - Create return in your Merchant Center account.
* [contentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsLabelsCreate](#contentorderreturnslabelscreate) - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* [contentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.
* [contentOrderreturnsProcess](#contentorderreturnsprocess) - Processes return in your Merchant Center account.

## contentOrderreturnsAcknowledge

Acks an order return in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orderreturnsAcknowledgeRequest = new OrderreturnsAcknowledgeRequest();
    $request->orderreturnsAcknowledgeRequest->operationId = 'tempora';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'iusto';
    $request->key = 'esse';
    $request->merchantId = 'praesentium';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->returnId = 'vel';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new ContentOrderreturnsAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsAcknowledge($request, $requestSecurity);

    if ($response->orderreturnsAcknowledgeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsCreateorderreturn

Create return in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsCreateorderreturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsCreateOrderReturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsLineItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsCreateorderreturnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsCreateorderreturnRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orderreturnsCreateOrderReturnRequest = new OrderreturnsCreateOrderReturnRequest();
    $request->orderreturnsCreateOrderReturnRequest->lineItems = [
        new OrderreturnsLineItem(),
    ];
    $request->orderreturnsCreateOrderReturnRequest->operationId = 'odio';
    $request->orderreturnsCreateOrderReturnRequest->orderId = 'tempora';
    $request->orderreturnsCreateOrderReturnRequest->returnMethodType = 'esse';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'ipsa';
    $request->key = 'laborum';
    $request->merchantId = 'sunt';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ContentOrderreturnsCreateorderreturnSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsCreateorderreturn($request, $requestSecurity);

    if ($response->orderreturnsCreateOrderReturnResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'eum';
    $request->key = 'voluptas';
    $request->merchantId = 'iste';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->returnId = 'error';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new ContentOrderreturnsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsGet($request, $requestSecurity);

    if ($response->merchantOrderReturn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsLabelsCreate

Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsLabelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnShippingLabel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsLabelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsLabelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->returnShippingLabel = new ReturnShippingLabel();
    $request->returnShippingLabel->carrier = 'laborum';
    $request->returnShippingLabel->labelUri = 'libero';
    $request->returnShippingLabel->trackingId = 'ad';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->fields = 'repellendus';
    $request->key = 'ex';
    $request->merchantId = 'quo';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->returnId = 'ad';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new ContentOrderreturnsLabelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsLabelsCreate($request, $requestSecurity);

    if ($response->returnShippingLabel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsList

Lists order returns in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListShipmentStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListShipmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListShipmentTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->acknowledged = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->createdEndDate = 'voluptatum';
    $request->createdStartDate = 'omnis';
    $request->fields = 'veritatis';
    $request->googleOrderIds = [
        'est',
        'culpa',
        'voluptatem',
    ];
    $request->key = 'sapiente';
    $request->maxResults = 889288;
    $request->merchantId = 'architecto';
    $request->oauthToken = 'fuga';
    $request->orderBy = ContentOrderreturnsListOrderByEnum::RETURN_CREATION_TIME_ASC;
    $request->pageToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->shipmentStates = [
        ContentOrderreturnsListShipmentStatesEnum::COMPLETED,
    ];
    $request->shipmentStatus = [
        ContentOrderreturnsListShipmentStatusEnum::IN_PROGRESS,
        ContentOrderreturnsListShipmentStatusEnum::PROCESSED,
        ContentOrderreturnsListShipmentStatusEnum::IN_PROGRESS,
        ContentOrderreturnsListShipmentStatusEnum::PROCESSED,
    ];
    $request->shipmentTrackingNumbers = [
        'asperiores',
        'ratione',
    ];
    $request->shipmentTypes = [
        ContentOrderreturnsListShipmentTypesEnum::BY_MAIL,
        ContentOrderreturnsListShipmentTypesEnum::CONTACT_CUSTOMER_SUPPORT,
    ];
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new ContentOrderreturnsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsList($request, $requestSecurity);

    if ($response->orderreturnsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsProcess

Processes return in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsRefundOperation;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsPartialRefund;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsReturnItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderreturnsRejectOperation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->orderreturnsProcessRequest = new OrderreturnsProcessRequest();
    $request->orderreturnsProcessRequest->fullChargeReturnShippingCost = false;
    $request->orderreturnsProcessRequest->operationId = 'nam';
    $request->orderreturnsProcessRequest->refundShippingFee = new OrderreturnsRefundOperation();
    $request->orderreturnsProcessRequest->refundShippingFee->fullRefund = false;
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund = new OrderreturnsPartialRefund();
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->priceAmount = new Price();
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->priceAmount->currency = 'ipsam';
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->priceAmount->value = 'culpa';
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->taxAmount = new Price();
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->taxAmount->currency = 'dolor';
    $request->orderreturnsProcessRequest->refundShippingFee->partialRefund->taxAmount->value = 'aliquam';
    $request->orderreturnsProcessRequest->refundShippingFee->paymentType = 'inventore';
    $request->orderreturnsProcessRequest->refundShippingFee->reasonText = 'deleniti';
    $request->orderreturnsProcessRequest->refundShippingFee->returnRefundReason = 'veritatis';
    $request->orderreturnsProcessRequest->returnItems = [
        new OrderreturnsReturnItem(),
        new OrderreturnsReturnItem(),
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'sit';
    $request->key = 'modi';
    $request->merchantId = 'fugit';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->returnId = 'quae';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new ContentOrderreturnsProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsProcess($request, $requestSecurity);

    if ($response->orderreturnsProcessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
