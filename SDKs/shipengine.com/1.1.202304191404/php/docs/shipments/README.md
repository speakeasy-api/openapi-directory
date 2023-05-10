# shipments

## Overview

Shipments are at the center of the ShipEngine API.  A shipment is the first step in [creating a shipping label](https://www.shipengine.com/docs/labels/create-a-label/), or [creating a manifest](https://www.shipengine.com/docs/shipping/manifests/).  It's also essential for [getting shipping rates](https://www.shipengine.com/docs/rates/).


Learn about the shipment object model concept, and how to persist and re-use shipment data inside ShipEngine.

<https://www.shipengine.com/docs/shipping/create-a-shipment/>
### Available Operations

* [cancelShipments](#cancelshipments) - Cancel a Shipment
* [createShipments](#createshipments) - Create Shipments
* [getShipmentByExternalId](#getshipmentbyexternalid) - Get Shipment By External ID
* [getShipmentById](#getshipmentbyid) - Get Shipment By ID
* [listShipmentRates](#listshipmentrates) - Get Shipment Rates
* [listShipments](#listshipments) - List Shipments
* [parseShipment](#parseshipment) - Parse shipping info
* [tagShipment](#tagshipment) - Add Tag to Shipment
* [untagShipment](#untagshipment) - Remove Tag from Shipment
* [updateShipment](#updateshipment) - Update Shipment By ID

## cancelShipments

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
would remove it from this process


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelShipmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelShipmentsRequest();
    $request->shipmentId = 'se-28529731';

    $response = $sdk->shipments->cancelShipments($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createShipments

Create one or multiple shipments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateShipmentsRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptions;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsBillToPartyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDelivery;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDeliveryPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsWeight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsFedexFreight;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentDeliveryConfirmationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentInternationalShipmentOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomsItemInput;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentInsuranceProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderSourceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageInput;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageMonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\LabelMessages;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddressAddressResidentialIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxableEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressValidatingShipmentValidateAddressEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShipmentsRequestBodyInput();
    $request->shipments = [
        new AddressValidatingShipmentInput(),
        new AddressValidatingShipmentInput(),
        new AddressValidatingShipmentInput(),
        new AddressValidatingShipmentInput(),
    ];

    $response = $sdk->shipments->createShipments($request);

    if ($response->createShipmentsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShipmentByExternalId

Query Shipments created using your own custom ID convention using this endpint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentByExternalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShipmentByExternalIdRequest();
    $request->externalShipmentId = 'amet';

    $response = $sdk->shipments->getShipmentByExternalId($request);

    if ($response->getShipmentByExternalIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShipmentById

Get an individual shipment based on its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShipmentByIdRequest();
    $request->shipmentId = 'se-28529731';

    $response = $sdk->shipments->getShipmentById($request);

    if ($response->getShipmentByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShipmentRates

Get Rates for the shipment information associated with the shipment ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListShipmentRatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShipmentRatesRequest();
    $request->createdAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T17:53:23.400Z');
    $request->shipmentId = 'se-28529731';

    $response = $sdk->shipments->listShipmentRates($request);

    if ($response->listShipmentRatesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShipments

Get list of Shipments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListShipmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListShipmentsSortDirSortDirEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShipmentsRequest();
    $request->batchId = 'se-28529731';
    $request->createdAtEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T03:14:12.839Z');
    $request->createdAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->modifiedAtEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-13T09:38:30.777Z');
    $request->modifiedAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T15:11:13.227Z');
    $request->page = 660174;
    $request->pageSize = 287991;
    $request->salesOrderId = 'labore';
    $request->shipmentStatus = ShipmentStatusEnum::PROCESSING;
    $request->sortBy = ShipmentsSortByEnum::CREATED_AT;
    $request->sortDir = ListShipmentsSortDirSortDirEnum::DESC;
    $request->tag = 'eum';

    $response = $sdk->shipments->listShipments($request);

    if ($response->listShipmentsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseShipment

The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.

> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ParseShipmentRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptions;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsBillToPartyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDelivery;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDeliveryPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsWeight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsFedexFreight;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentDeliveryConfirmationEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentInternationalShipmentOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentInternationalShipmentOptionsPackageContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomsItemInput;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentInternationalShipmentOptionsNonDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentInsuranceProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderSourceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartialShipmentOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageInput;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageMonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\LabelMessages;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddressAddressResidentialIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxableEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseShipmentRequestBodyInput();
    $request->shipment = new PartialShipmentInput();
    $request->shipment->advancedOptions = new AdvancedShipmentOptions();
    $request->shipment->advancedOptions->billToAccount = 'vero';
    $request->shipment->advancedOptions->billToCountryCode = 'CA';
    $request->shipment->advancedOptions->billToParty = AdvancedShipmentOptionsBillToPartyEnum::RECIPIENT;
    $request->shipment->advancedOptions->billToPostalCode = 'architecto';
    $request->shipment->advancedOptions->collectOnDelivery = new CollectOnDelivery();
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount = new PaymentAmount();
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount->amount = 2982.82;
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount->currency = 'et';
    $request->shipment->advancedOptions->collectOnDelivery->paymentType = CollectOnDeliveryPaymentTypeEnum::CASH_EQUIVALENT;
    $request->shipment->advancedOptions->containsAlcohol = false;
    $request->shipment->advancedOptions->customField1 = 'ullam';
    $request->shipment->advancedOptions->customField2 = 'provident';
    $request->shipment->advancedOptions->customField3 = 'quos';
    $request->shipment->advancedOptions->deliveredDutyPaid = false;
    $request->shipment->advancedOptions->dryIce = false;
    $request->shipment->advancedOptions->dryIceWeight = new AdvancedShipmentOptionsWeight();
    $request->shipment->advancedOptions->dryIceWeight->unit = WeightUnitEnum::GRAM;
    $request->shipment->advancedOptions->dryIceWeight->value = 336.25;
    $request->shipment->advancedOptions->fedexFreight = new AdvancedShipmentOptionsFedexFreight();
    $request->shipment->advancedOptions->fedexFreight->bookingConfirmation = 'mollitia';
    $request->shipment->advancedOptions->fedexFreight->shipperLoadAndCount = 'reiciendis';
    $request->shipment->advancedOptions->freightClass = '77.5';
    $request->shipment->advancedOptions->nonMachinable = false;
    $request->shipment->advancedOptions->originType = AdvancedShipmentOptionsOriginTypeEnum::DROP_OFF;
    $request->shipment->advancedOptions->saturdayDelivery = false;
    $request->shipment->advancedOptions->shipperRelease = false;
    $request->shipment->advancedOptions->thirdPartyConsignee = false;
    $request->shipment->advancedOptions->useUpsGroundFreightPricing = false;
    $request->shipment->carrierId = 'se-28529731';
    $request->shipment->confirmation = PartialShipmentDeliveryConfirmationEnum::SIGNATURE;
    $request->shipment->customs = new PartialShipmentInternationalShipmentOptionsInput();
    $request->shipment->customs->contents = PartialShipmentInternationalShipmentOptionsPackageContentsEnum::GIFT;
    $request->shipment->customs->customsItems = [
        new CustomsItemInput(),
    ];
    $request->shipment->customs->nonDelivery = PartialShipmentInternationalShipmentOptionsNonDeliveryEnum::TREAT_AS_ABANDONED;
    $request->shipment->externalOrderId = 'odit';
    $request->shipment->externalShipmentId = 'nemo';
    $request->shipment->insuranceProvider = PartialShipmentInsuranceProviderEnum::NONE;
    $request->shipment->isReturn = false;
    $request->shipment->items = [
        new ShipmentItem(),
        new ShipmentItem(),
    ];
    $request->shipment->orderSourceCode = OrderSourceNameEnum::VOLUSION;
    $request->shipment->originType = PartialShipmentOriginTypeEnum::DROP_OFF;
    $request->shipment->packages = [
        new PackageInput(),
        new PackageInput(),
    ];
    $request->shipment->returnTo = new ShippingAddress();
    $request->shipment->returnTo->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->shipment->returnTo->addressLine2 = 'Unit 408';
    $request->shipment->returnTo->addressLine3 = 'Building #7';
    $request->shipment->returnTo->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->shipment->returnTo->cityLocality = 'Winnipeg';
    $request->shipment->returnTo->companyName = 'The Home Depot';
    $request->shipment->returnTo->countryCode = 'CA';
    $request->shipment->returnTo->email = 'example@example.com';
    $request->shipment->returnTo->instructions = 'maxime';
    $request->shipment->returnTo->name = 'John Doe';
    $request->shipment->returnTo->phone = '+1 204-253-9411 ext. 123';
    $request->shipment->returnTo->postalCode = '78756-3717';
    $request->shipment->returnTo->stateProvince = 'Manitoba';
    $request->shipment->serviceCode = 'usps_first_class_mail';
    $request->shipment->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T00:00:00.000Z');
    $request->shipment->shipFrom = new ShippingAddress();
    $request->shipment->shipFrom->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->shipment->shipFrom->addressLine2 = 'Unit 408';
    $request->shipment->shipFrom->addressLine3 = 'Building #7';
    $request->shipment->shipFrom->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->shipment->shipFrom->cityLocality = 'Winnipeg';
    $request->shipment->shipFrom->companyName = 'The Home Depot';
    $request->shipment->shipFrom->countryCode = 'CA';
    $request->shipment->shipFrom->email = 'example@example.com';
    $request->shipment->shipFrom->instructions = 'deleniti';
    $request->shipment->shipFrom->name = 'John Doe';
    $request->shipment->shipFrom->phone = '+1 204-253-9411 ext. 123';
    $request->shipment->shipFrom->postalCode = '78756-3717';
    $request->shipment->shipFrom->stateProvince = 'Manitoba';
    $request->shipment->shipTo = new ShippingAddress();
    $request->shipment->shipTo->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->shipment->shipTo->addressLine2 = 'Unit 408';
    $request->shipment->shipTo->addressLine3 = 'Building #7';
    $request->shipment->shipTo->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->shipment->shipTo->cityLocality = 'Winnipeg';
    $request->shipment->shipTo->companyName = 'The Home Depot';
    $request->shipment->shipTo->countryCode = 'CA';
    $request->shipment->shipTo->email = 'example@example.com';
    $request->shipment->shipTo->instructions = 'facilis';
    $request->shipment->shipTo->name = 'John Doe';
    $request->shipment->shipTo->phone = '+1 204-253-9411 ext. 123';
    $request->shipment->shipTo->postalCode = '78756-3717';
    $request->shipment->shipTo->stateProvince = 'Manitoba';
    $request->shipment->shipmentNumber = 'in';
    $request->shipment->taxIdentifiers = [
        new TaxIdentifier(),
    ];
    $request->shipment->warehouseId = 'se-28529731';
    $request->text = 'I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.
    ';

    $response = $sdk->shipments->parseShipment($request);

    if ($response->parseShipmentResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagShipment

Add a tag to the shipment object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagShipmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagShipmentRequest();
    $request->shipmentId = 'se-28529731';
    $request->tagName = 'Fragile';

    $response = $sdk->shipments->tagShipment($request);

    if ($response->tagShipmentResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagShipment

Remove an existing tag from the Shipment object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagShipmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagShipmentRequest();
    $request->shipmentId = 'se-28529731';
    $request->tagName = 'Fragile';

    $response = $sdk->shipments->untagShipment($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShipment

Update a shipment object based on its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShipmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptions;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsBillToPartyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDelivery;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDeliveryPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsWeight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsFedexFreight;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyDeliveryConfirmationEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyInternationalShipmentOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomsItemInput;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyInsuranceProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderSourceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageInput;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageMonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\LabelMessages;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddressAddressResidentialIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxableEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShipmentRequestBodyValidateAddressEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShipmentRequest();
    $request->shipmentId = 'se-28529731';
    $request->updateShipmentRequestBodyInput = new UpdateShipmentRequestBodyInput();
    $request->updateShipmentRequestBodyInput->advancedOptions = new AdvancedShipmentOptions();
    $request->updateShipmentRequestBodyInput->advancedOptions->billToAccount = 'architecto';
    $request->updateShipmentRequestBodyInput->advancedOptions->billToCountryCode = 'CA';
    $request->updateShipmentRequestBodyInput->advancedOptions->billToParty = AdvancedShipmentOptionsBillToPartyEnum::THIRD_PARTY;
    $request->updateShipmentRequestBodyInput->advancedOptions->billToPostalCode = 'ullam';
    $request->updateShipmentRequestBodyInput->advancedOptions->collectOnDelivery = new CollectOnDelivery();
    $request->updateShipmentRequestBodyInput->advancedOptions->collectOnDelivery->paymentAmount = new PaymentAmount();
    $request->updateShipmentRequestBodyInput->advancedOptions->collectOnDelivery->paymentAmount->amount = 7142.42;
    $request->updateShipmentRequestBodyInput->advancedOptions->collectOnDelivery->paymentAmount->currency = 'nihil';
    $request->updateShipmentRequestBodyInput->advancedOptions->collectOnDelivery->paymentType = CollectOnDeliveryPaymentTypeEnum::NONE;
    $request->updateShipmentRequestBodyInput->advancedOptions->containsAlcohol = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->customField1 = 'quibusdam';
    $request->updateShipmentRequestBodyInput->advancedOptions->customField2 = 'sed';
    $request->updateShipmentRequestBodyInput->advancedOptions->customField3 = 'saepe';
    $request->updateShipmentRequestBodyInput->advancedOptions->deliveredDutyPaid = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->dryIce = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->dryIceWeight = new AdvancedShipmentOptionsWeight();
    $request->updateShipmentRequestBodyInput->advancedOptions->dryIceWeight->unit = WeightUnitEnum::KILOGRAM;
    $request->updateShipmentRequestBodyInput->advancedOptions->dryIceWeight->value = 375.59;
    $request->updateShipmentRequestBodyInput->advancedOptions->fedexFreight = new AdvancedShipmentOptionsFedexFreight();
    $request->updateShipmentRequestBodyInput->advancedOptions->fedexFreight->bookingConfirmation = 'consequuntur';
    $request->updateShipmentRequestBodyInput->advancedOptions->fedexFreight->shipperLoadAndCount = 'praesentium';
    $request->updateShipmentRequestBodyInput->advancedOptions->freightClass = '77.5';
    $request->updateShipmentRequestBodyInput->advancedOptions->nonMachinable = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->originType = AdvancedShipmentOptionsOriginTypeEnum::DROP_OFF;
    $request->updateShipmentRequestBodyInput->advancedOptions->saturdayDelivery = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->shipperRelease = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->thirdPartyConsignee = false;
    $request->updateShipmentRequestBodyInput->advancedOptions->useUpsGroundFreightPricing = false;
    $request->updateShipmentRequestBodyInput->carrierId = 'se-28529731';
    $request->updateShipmentRequestBodyInput->confirmation = UpdateShipmentRequestBodyDeliveryConfirmationEnum::DELIVERY;
    $request->updateShipmentRequestBodyInput->customs = new UpdateShipmentRequestBodyInternationalShipmentOptionsInput();
    $request->updateShipmentRequestBodyInput->customs->contents = UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum::MERCHANDISE;
    $request->updateShipmentRequestBodyInput->customs->customsItems = [
        new CustomsItemInput(),
        new CustomsItemInput(),
        new CustomsItemInput(),
        new CustomsItemInput(),
    ];
    $request->updateShipmentRequestBodyInput->customs->nonDelivery = UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum::TREAT_AS_ABANDONED;
    $request->updateShipmentRequestBodyInput->externalOrderId = 'pariatur';
    $request->updateShipmentRequestBodyInput->externalShipmentId = 'maxime';
    $request->updateShipmentRequestBodyInput->insuranceProvider = UpdateShipmentRequestBodyInsuranceProviderEnum::SHIPSURANCE;
    $request->updateShipmentRequestBodyInput->isReturn = false;
    $request->updateShipmentRequestBodyInput->items = [
        new ShipmentItem(),
        new ShipmentItem(),
        new ShipmentItem(),
    ];
    $request->updateShipmentRequestBodyInput->orderSourceCode = OrderSourceNameEnum::BRIGHTPEARL;
    $request->updateShipmentRequestBodyInput->originType = UpdateShipmentRequestBodyOriginTypeEnum::PICKUP;
    $request->updateShipmentRequestBodyInput->packages = [
        new PackageInput(),
    ];
    $request->updateShipmentRequestBodyInput->returnTo = new ShippingAddress();
    $request->updateShipmentRequestBodyInput->returnTo->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->updateShipmentRequestBodyInput->returnTo->addressLine2 = 'Unit 408';
    $request->updateShipmentRequestBodyInput->returnTo->addressLine3 = 'Building #7';
    $request->updateShipmentRequestBodyInput->returnTo->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->updateShipmentRequestBodyInput->returnTo->cityLocality = 'Winnipeg';
    $request->updateShipmentRequestBodyInput->returnTo->companyName = 'The Home Depot';
    $request->updateShipmentRequestBodyInput->returnTo->countryCode = 'CA';
    $request->updateShipmentRequestBodyInput->returnTo->email = 'example@example.com';
    $request->updateShipmentRequestBodyInput->returnTo->instructions = 'ab';
    $request->updateShipmentRequestBodyInput->returnTo->name = 'John Doe';
    $request->updateShipmentRequestBodyInput->returnTo->phone = '+1 204-253-9411 ext. 123';
    $request->updateShipmentRequestBodyInput->returnTo->postalCode = '78756-3717';
    $request->updateShipmentRequestBodyInput->returnTo->stateProvince = 'Manitoba';
    $request->updateShipmentRequestBodyInput->serviceCode = 'usps_first_class_mail';
    $request->updateShipmentRequestBodyInput->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T00:00:00.000Z');
    $request->updateShipmentRequestBodyInput->shipFrom = new ShippingAddress();
    $request->updateShipmentRequestBodyInput->shipFrom->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->updateShipmentRequestBodyInput->shipFrom->addressLine2 = 'Unit 408';
    $request->updateShipmentRequestBodyInput->shipFrom->addressLine3 = 'Building #7';
    $request->updateShipmentRequestBodyInput->shipFrom->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->updateShipmentRequestBodyInput->shipFrom->cityLocality = 'Winnipeg';
    $request->updateShipmentRequestBodyInput->shipFrom->companyName = 'The Home Depot';
    $request->updateShipmentRequestBodyInput->shipFrom->countryCode = 'CA';
    $request->updateShipmentRequestBodyInput->shipFrom->email = 'example@example.com';
    $request->updateShipmentRequestBodyInput->shipFrom->instructions = 'maiores';
    $request->updateShipmentRequestBodyInput->shipFrom->name = 'John Doe';
    $request->updateShipmentRequestBodyInput->shipFrom->phone = '+1 204-253-9411 ext. 123';
    $request->updateShipmentRequestBodyInput->shipFrom->postalCode = '78756-3717';
    $request->updateShipmentRequestBodyInput->shipFrom->stateProvince = 'Manitoba';
    $request->updateShipmentRequestBodyInput->shipTo = new ShippingAddress();
    $request->updateShipmentRequestBodyInput->shipTo->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->updateShipmentRequestBodyInput->shipTo->addressLine2 = 'Unit 408';
    $request->updateShipmentRequestBodyInput->shipTo->addressLine3 = 'Building #7';
    $request->updateShipmentRequestBodyInput->shipTo->addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum::NO;
    $request->updateShipmentRequestBodyInput->shipTo->cityLocality = 'Winnipeg';
    $request->updateShipmentRequestBodyInput->shipTo->companyName = 'The Home Depot';
    $request->updateShipmentRequestBodyInput->shipTo->countryCode = 'CA';
    $request->updateShipmentRequestBodyInput->shipTo->email = 'example@example.com';
    $request->updateShipmentRequestBodyInput->shipTo->instructions = 'quidem';
    $request->updateShipmentRequestBodyInput->shipTo->name = 'John Doe';
    $request->updateShipmentRequestBodyInput->shipTo->phone = '+1 204-253-9411 ext. 123';
    $request->updateShipmentRequestBodyInput->shipTo->postalCode = '78756-3717';
    $request->updateShipmentRequestBodyInput->shipTo->stateProvince = 'Manitoba';
    $request->updateShipmentRequestBodyInput->shipmentNumber = 'ipsam';
    $request->updateShipmentRequestBodyInput->taxIdentifiers = [
        new TaxIdentifier(),
        new TaxIdentifier(),
    ];
    $request->updateShipmentRequestBodyInput->validateAddress = UpdateShipmentRequestBodyValidateAddressEnum::VALIDATE_ONLY;
    $request->updateShipmentRequestBodyInput->warehouseId = 'se-28529731';

    $response = $sdk->shipments->updateShipment($request);

    if ($response->updateShipmentResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
