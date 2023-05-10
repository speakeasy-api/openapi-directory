# shipment

### Available Operations

* [getShipment](#getshipment) - Get a specific shipment.
* [getShipmentList](#getshipmentlist) - List shipments of project
* [postShipmentJson](#postshipmentjson) - Create a shipment
* [postShipmentRaw](#postshipmentraw) - Create a shipment
* [putShipmentLocationJson](#putshipmentlocationjson) - Update a specific shipment location
* [putShipmentLocationRaw](#putshipmentlocationraw) - Update a specific shipment location

## getShipment

Get a specific shipment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShipmentRequest();
    $request->projectId = 'incidunt';
    $request->shipmentId = 'enim';
    $request->workgroupId = 'consequatur';

    $response = $sdk->shipment->getShipment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShipmentList

List shipments of project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShipmentListRequest();
    $request->projectId = 'est';
    $request->workgroupId = 'quibusdam';

    $response = $sdk->shipment->getShipmentList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postShipmentJson

Create a shipment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostShipmentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentLocationPostPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostShipmentJsonRequest();
    $request->shipmentLocationPostPersistVO = new ShipmentLocationPostPersistVO();
    $request->shipmentLocationPostPersistVO->addressLine1 = 'sample address_line1';
    $request->shipmentLocationPostPersistVO->addressLine2 = 'sample address_line2';
    $request->shipmentLocationPostPersistVO->addressLine3 = 'sample address_line3';
    $request->shipmentLocationPostPersistVO->batchLabel = 'sample batch_label';
    $request->shipmentLocationPostPersistVO->city = 'sample city';
    $request->shipmentLocationPostPersistVO->companyName = 'sample company_name';
    $request->shipmentLocationPostPersistVO->countryIsoCode = 'sample country_iso_code';
    $request->shipmentLocationPostPersistVO->deliveryDate = DateTime::createFromFormat('Y-m-d', '2022-05-09');
    $request->shipmentLocationPostPersistVO->descriptionOrTitle = 'sample description_or_title';
    $request->shipmentLocationPostPersistVO->email = 'sample email';
    $request->shipmentLocationPostPersistVO->firstName = 'sample first_name';
    $request->shipmentLocationPostPersistVO->innerCartonLabel = 'sample inner_carton_label';
    $request->shipmentLocationPostPersistVO->lastName = 'sample last_name';
    $request->shipmentLocationPostPersistVO->middleName = 'sample middle_name';
    $request->shipmentLocationPostPersistVO->outerCartonLabel = 'sample outer_carton_label';
    $request->shipmentLocationPostPersistVO->palletLablel = 'sample pallet_lablel';
    $request->shipmentLocationPostPersistVO->poofType = 'sample poof_type';
    $request->shipmentLocationPostPersistVO->postalCode = 'sample postal_code';
    $request->shipmentLocationPostPersistVO->requestType = 'sample request_type';
    $request->shipmentLocationPostPersistVO->requestedQuantity = 1;
    $request->shipmentLocationPostPersistVO->shipmentCustomFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->shipmentLocationPostPersistVO->shipmentRequestCustomFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->shipmentLocationPostPersistVO->shippingCarrier = 'sample shipping_carrier';
    $request->shipmentLocationPostPersistVO->shippingInstruction = 'sample shipping_instruction';
    $request->shipmentLocationPostPersistVO->shppingMethod = 'sample shpping_method';
    $request->shipmentLocationPostPersistVO->specIds = 'sample spec_ids';
    $request->shipmentLocationPostPersistVO->state = 'sample state';
    $request->shipmentLocationPostPersistVO->workPhoneNumber = 'sample work_phone_number';
    $request->shipmentLocationPostPersistVO->workgroupName = 'sample workgroup_name';
    $request->projectId = 'labore';
    $request->workgroupId = 'modi';

    $response = $sdk->shipment->postShipmentJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postShipmentRaw

Create a shipment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostShipmentRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostShipmentRawRequest();
    $request->requestBody = 'qui';
    $request->projectId = 'aliquid';
    $request->workgroupId = 'cupiditate';

    $response = $sdk->shipment->postShipmentRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putShipmentLocationJson

Update a specific shipment location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutShipmentLocationJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentLocationPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutShipmentLocationJsonRequest();
    $request->shipmentLocationPersistVO = new ShipmentLocationPersistVO();
    $request->shipmentLocationPersistVO->dueDate = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->shipmentLocationPersistVO->qtyReceived = 1;
    $request->shipmentLocationPersistVO->qtyRequested = 1;
    $request->shipmentLocationPersistVO->qtyShipped = 1;
    $request->shipmentLocationPersistVO->receivedDate = DateTime::createFromFormat('Y-m-d', '2022-03-04');
    $request->shipmentLocationPersistVO->shippedDate = DateTime::createFromFormat('Y-m-d', '2022-12-30');
    $request->shipmentLocationPersistVO->shippingCost = 'fugit';
    $request->shipmentLocationPersistVO->type = 'sample type';
    $request->locationId = 'dolorum';
    $request->projectId = 'excepturi';
    $request->shipmentId = 'tempora';
    $request->workgroupId = 'facilis';

    $response = $sdk->shipment->putShipmentLocationJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putShipmentLocationRaw

Update a specific shipment location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutShipmentLocationRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutShipmentLocationRawRequest();
    $request->requestBody = 'tempore';
    $request->locationId = 'labore';
    $request->projectId = 'delectus';
    $request->shipmentId = 'eum';
    $request->workgroupId = 'non';

    $response = $sdk->shipment->putShipmentLocationRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
