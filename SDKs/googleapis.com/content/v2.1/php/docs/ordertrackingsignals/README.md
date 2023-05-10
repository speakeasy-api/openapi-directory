# ordertrackingsignals

### Available Operations

* [contentOrdertrackingsignalsCreate](#contentordertrackingsignalscreate) - Creates new order tracking signal.

## contentOrdertrackingsignalsCreate

Creates new order tracking signal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdertrackingsignalsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTrackingSignalInput;
use \OpenAPI\OpenAPI\Models\Shared\PriceAmount;
use \OpenAPI\OpenAPI\Models\Shared\OrderTrackingSignalLineItemDetails;
use \OpenAPI\OpenAPI\Models\Shared\DateTime;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\OrderTrackingSignalShipmentLineItemMapping;
use \OpenAPI\OpenAPI\Models\Shared\OrderTrackingSignalShippingInfo;
use \OpenAPI\OpenAPI\Models\Shared\OrderTrackingSignalShippingInfoShippingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdertrackingsignalsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdertrackingsignalsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->orderTrackingSignalInput = new OrderTrackingSignalInput();
    $request->orderTrackingSignalInput->customerShippingFee = new PriceAmount();
    $request->orderTrackingSignalInput->customerShippingFee->currency = 'sint';
    $request->orderTrackingSignalInput->customerShippingFee->value = 'enim';
    $request->orderTrackingSignalInput->deliveryPostalCode = 'hic';
    $request->orderTrackingSignalInput->deliveryRegionCode = 'animi';
    $request->orderTrackingSignalInput->lineItems = [
        new OrderTrackingSignalLineItemDetails(),
        new OrderTrackingSignalLineItemDetails(),
        new OrderTrackingSignalLineItemDetails(),
    ];
    $request->orderTrackingSignalInput->merchantId = 'totam';
    $request->orderTrackingSignalInput->orderCreatedTime = new DateTime();
    $request->orderTrackingSignalInput->orderCreatedTime->day = 564667;
    $request->orderTrackingSignalInput->orderCreatedTime->hours = 484966;
    $request->orderTrackingSignalInput->orderCreatedTime->minutes = 51170;
    $request->orderTrackingSignalInput->orderCreatedTime->month = 901163;
    $request->orderTrackingSignalInput->orderCreatedTime->nanos = 104078;
    $request->orderTrackingSignalInput->orderCreatedTime->seconds = 554645;
    $request->orderTrackingSignalInput->orderCreatedTime->timeZone = new TimeZone();
    $request->orderTrackingSignalInput->orderCreatedTime->timeZone->id = '9dbb30fc-b33e-4a05-9b19-7cd44e2f52d8';
    $request->orderTrackingSignalInput->orderCreatedTime->timeZone->version = 'odit';
    $request->orderTrackingSignalInput->orderCreatedTime->utcOffset = 'pariatur';
    $request->orderTrackingSignalInput->orderCreatedTime->year = 227362;
    $request->orderTrackingSignalInput->orderId = 'exercitationem';
    $request->orderTrackingSignalInput->shipmentLineItemMapping = [
        new OrderTrackingSignalShipmentLineItemMapping(),
    ];
    $request->orderTrackingSignalInput->shippingInfo = [
        new OrderTrackingSignalShippingInfo(),
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nisi';
    $request->fields = 'voluptatibus';
    $request->key = 'quaerat';
    $request->merchantId = 'blanditiis';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new ContentOrdertrackingsignalsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ordertrackingsignals->contentOrdertrackingsignalsCreate($request, $requestSecurity);

    if ($response->orderTrackingSignal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
