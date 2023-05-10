# labels

## Overview

Print shipping labels for any of the top global carriers in minutes—instead of weeks. Simply [connect your existing carrier accounts](https://www.shipengine.com/docs/carriers/setup/) in the API dashboard, and then [begin creating labels](https://www.shipengine.com/docs/shipping/use-a-carrier-service/).


Follow this quick start guide to create your first shipping label with ShipEngine
<https://www.shipengine.com/docs/labels/create-a-label/>
### Available Operations

* [createLabel](#createlabel) - Purchase Label
* [createLabelFromRate](#createlabelfromrate) - Purchase Label with Rate ID
* [createLabelFromShipment](#createlabelfromshipment) - Purchase Label with Shipment ID
* [createReturnLabel](#createreturnlabel) - Create a return label
* [getLabelByExternalShipmentId](#getlabelbyexternalshipmentid) - Get Label By External Shipment ID
* [getLabelById](#getlabelbyid) - Get Label By ID
* [getTrackingLogFromLabel](#gettrackinglogfromlabel) - Get Label Tracking Information
* [listLabels](#listlabels) - List labels
* [voidLabel](#voidlabel) - Void a Label By ID

## createLabel

Purchase and print a label for shipment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\LabelChargeEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyDisplaySchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyLabelDownloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyLabelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyLabelLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptions;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsBillToPartyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDelivery;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAmount;
use \OpenAPI\OpenAPI\Models\Shared\CollectOnDeliveryPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsWeight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsFedexFreight;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedShipmentOptionsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomsItemInput;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderSourceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyPartialShipmentOriginTypeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequestBodyValidateAddressEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelRequestBodyInput();
    $request->chargeEvent = LabelChargeEventEnum::ON_CARRIER_ACCEPTANCE;
    $request->displayScheme = CreateLabelRequestBodyDisplaySchemeEnum::LABEL;
    $request->isReturnLabel = false;
    $request->labelDownloadType = CreateLabelRequestBodyLabelDownloadTypeEnum::URL;
    $request->labelFormat = CreateLabelRequestBodyLabelFormatEnum::ZPL;
    $request->labelImageId = 'img_DtBXupDBxREpHnwEXhTfgK';
    $request->labelLayout = CreateLabelRequestBodyLabelLayoutEnum::LETTER;
    $request->outboundLabelId = 'se-28529731';
    $request->rmaNumber = 'mollitia';
    $request->shipFromServicePointId = '614940';
    $request->shipToServicePointId = '614940';
    $request->shipment = new CreateLabelRequestBodyPartialShipmentInput();
    $request->shipment->advancedOptions = new AdvancedShipmentOptions();
    $request->shipment->advancedOptions->billToAccount = 'laborum';
    $request->shipment->advancedOptions->billToCountryCode = 'CA';
    $request->shipment->advancedOptions->billToParty = AdvancedShipmentOptionsBillToPartyEnum::RECIPIENT;
    $request->shipment->advancedOptions->billToPostalCode = 'dolorem';
    $request->shipment->advancedOptions->collectOnDelivery = new CollectOnDelivery();
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount = new PaymentAmount();
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount->amount = 3581.52;
    $request->shipment->advancedOptions->collectOnDelivery->paymentAmount->currency = 'explicabo';
    $request->shipment->advancedOptions->collectOnDelivery->paymentType = CollectOnDeliveryPaymentTypeEnum::NONE;
    $request->shipment->advancedOptions->containsAlcohol = false;
    $request->shipment->advancedOptions->customField1 = 'enim';
    $request->shipment->advancedOptions->customField2 = 'omnis';
    $request->shipment->advancedOptions->customField3 = 'nemo';
    $request->shipment->advancedOptions->deliveredDutyPaid = false;
    $request->shipment->advancedOptions->dryIce = false;
    $request->shipment->advancedOptions->dryIceWeight = new AdvancedShipmentOptionsWeight();
    $request->shipment->advancedOptions->dryIceWeight->unit = WeightUnitEnum::OUNCE;
    $request->shipment->advancedOptions->dryIceWeight->value = 5701.97;
    $request->shipment->advancedOptions->fedexFreight = new AdvancedShipmentOptionsFedexFreight();
    $request->shipment->advancedOptions->fedexFreight->bookingConfirmation = 'accusantium';
    $request->shipment->advancedOptions->fedexFreight->shipperLoadAndCount = 'iure';
    $request->shipment->advancedOptions->freightClass = '77.5';
    $request->shipment->advancedOptions->nonMachinable = false;
    $request->shipment->advancedOptions->originType = AdvancedShipmentOptionsOriginTypeEnum::DROP_OFF;
    $request->shipment->advancedOptions->saturdayDelivery = false;
    $request->shipment->advancedOptions->shipperRelease = false;
    $request->shipment->advancedOptions->thirdPartyConsignee = false;
    $request->shipment->advancedOptions->useUpsGroundFreightPricing = false;
    $request->shipment->carrierId = 'se-28529731';
    $request->shipment->confirmation = CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum::VERBAL_CONFIRMATION;
    $request->shipment->customs = new CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput();
    $request->shipment->customs->contents = CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum::SAMPLE;
    $request->shipment->customs->customsItems = [
        new CustomsItemInput(),
    ];
    $request->shipment->customs->nonDelivery = CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum::TREAT_AS_ABANDONED;
    $request->shipment->externalOrderId = 'dolorem';
    $request->shipment->externalShipmentId = 'culpa';
    $request->shipment->insuranceProvider = CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum::NONE;
    $request->shipment->isReturn = false;
    $request->shipment->items = [
        new ShipmentItem(),
        new ShipmentItem(),
        new ShipmentItem(),
        new ShipmentItem(),
    ];
    $request->shipment->orderSourceCode = OrderSourceNameEnum::STITCH_LABS;
    $request->shipment->originType = CreateLabelRequestBodyPartialShipmentOriginTypeEnum::DROP_OFF;
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
    $request->shipment->returnTo->instructions = 'commodi';
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
    $request->shipment->shipFrom->instructions = 'quam';
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
    $request->shipment->shipTo->instructions = 'molestiae';
    $request->shipment->shipTo->name = 'John Doe';
    $request->shipment->shipTo->phone = '+1 204-253-9411 ext. 123';
    $request->shipment->shipTo->postalCode = '78756-3717';
    $request->shipment->shipTo->stateProvince = 'Manitoba';
    $request->shipment->shipmentNumber = 'velit';
    $request->shipment->taxIdentifiers = [
        new TaxIdentifier(),
        new TaxIdentifier(),
        new TaxIdentifier(),
    ];
    $request->shipment->warehouseId = 'se-28529731';
    $request->testLabel = false;
    $request->validateAddress = CreateLabelRequestBodyValidateAddressEnum::NO_VALIDATION;

    $response = $sdk->labels->createLabel($request);

    if ($response->createLabelResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLabelFromRate

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
to generate a label without having to refill in the shipment information repeatedly.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelFromRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromRateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromRateRequestBodyDisplaySchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelDownloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromRateRequestBodyLabelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromRateRequestBodyLabelLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateAddressEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelFromRateRequest();
    $request->createLabelFromRateRequestBody = new CreateLabelFromRateRequestBody();
    $request->createLabelFromRateRequestBody->displayScheme = CreateLabelFromRateRequestBodyDisplaySchemeEnum::QR_CODE;
    $request->createLabelFromRateRequestBody->labelDownloadType = LabelDownloadTypeEnum::URL;
    $request->createLabelFromRateRequestBody->labelFormat = CreateLabelFromRateRequestBodyLabelFormatEnum::ZPL;
    $request->createLabelFromRateRequestBody->labelLayout = CreateLabelFromRateRequestBodyLabelLayoutEnum::LETTER;
    $request->createLabelFromRateRequestBody->validateAddress = ValidateAddressEnum::NO_VALIDATION;
    $request->rateId = 'se-28529731';

    $response = $sdk->labels->createLabelFromRate($request);

    if ($response->createLabelFromRateResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLabelFromShipment

Purchase a label using a shipment ID that has already been created with the desired address and
package info.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelFromShipmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromShipmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromShipmentRequestBodyDisplaySchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelDownloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromShipmentRequestBodyLabelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelFromShipmentRequestBodyLabelLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateAddressEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelFromShipmentRequest();
    $request->createLabelFromShipmentRequestBody = new CreateLabelFromShipmentRequestBody();
    $request->createLabelFromShipmentRequestBody->displayScheme = CreateLabelFromShipmentRequestBodyDisplaySchemeEnum::LABEL;
    $request->createLabelFromShipmentRequestBody->labelDownloadType = LabelDownloadTypeEnum::INLINE;
    $request->createLabelFromShipmentRequestBody->labelFormat = CreateLabelFromShipmentRequestBodyLabelFormatEnum::PDF;
    $request->createLabelFromShipmentRequestBody->labelLayout = CreateLabelFromShipmentRequestBodyLabelLayoutEnum::LETTER;
    $request->createLabelFromShipmentRequestBody->validateAddress = ValidateAddressEnum::VALIDATE_ONLY;
    $request->shipmentId = 'se-28529731';

    $response = $sdk->labels->createLabelFromShipment($request);

    if ($response->createLabelFromShipmentResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReturnLabel

Create a return label

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReturnLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnLabelRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LabelChargeEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnLabelRequestBodyDisplaySchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnLabelRequestBodyLabelDownloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnLabelRequestBodyLabelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnLabelRequestBodyLabelLayoutEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReturnLabelRequest();
    $request->createReturnLabelRequestBody = new CreateReturnLabelRequestBody();
    $request->createReturnLabelRequestBody->chargeEvent = LabelChargeEventEnum::ON_CREATION;
    $request->createReturnLabelRequestBody->displayScheme = CreateReturnLabelRequestBodyDisplaySchemeEnum::LABEL_AND_QR_CODE;
    $request->createReturnLabelRequestBody->labelDownloadType = CreateReturnLabelRequestBodyLabelDownloadTypeEnum::URL;
    $request->createReturnLabelRequestBody->labelFormat = CreateReturnLabelRequestBodyLabelFormatEnum::PDF;
    $request->createReturnLabelRequestBody->labelImageId = 'img_DtBXupDBxREpHnwEXhTfgK';
    $request->createReturnLabelRequestBody->labelLayout = CreateReturnLabelRequestBodyLabelLayoutEnum::LETTER;
    $request->labelId = 'se-28529731';

    $response = $sdk->labels->createReturnLabel($request);

    if ($response->createReturnLabelResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLabelByExternalShipmentId

Find a label by using the external shipment id that was used during label creation


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLabelByExternalShipmentIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelDownloadTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLabelByExternalShipmentIdRequest();
    $request->externalShipmentId = 'temporibus';
    $request->labelDownloadType = LabelDownloadTypeEnum::INLINE;

    $response = $sdk->labels->getLabelByExternalShipmentId($request);

    if ($response->getLabelByExternalShipmentIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLabelById

Retrieve information for individual labels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLabelByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelDownloadTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLabelByIdRequest();
    $request->labelDownloadType = LabelDownloadTypeEnum::URL;
    $request->labelId = 'se-28529731';

    $response = $sdk->labels->getLabelById($request);

    if ($response->getLabelByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackingLogFromLabel

Retrieve the label's tracking information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackingLogFromLabelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackingLogFromLabelRequest();
    $request->labelId = 'se-28529731';

    $response = $sdk->labels->getTrackingLogFromLabel($request);

    if ($response->getTrackingLogFromLabelResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLabels

This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.

By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelsSortDirSortDirEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLabelsRequest();
    $request->batchId = 'se-28529731';
    $request->carrierId = 'se-28529731';
    $request->createdAtEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-27T18:38:42.890Z');
    $request->createdAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-05T19:50:46.898Z');
    $request->labelStatus = LabelStatusEnum::ERROR;
    $request->page = 976762;
    $request->pageSize = 55714;
    $request->rateId = 'se-28529731';
    $request->serviceCode = 'usps_first_class_mail';
    $request->shipmentId = 'se-28529731';
    $request->sortBy = ListLabelsSortByEnum::CREATED_AT;
    $request->sortDir = ListLabelsSortDirSortDirEnum::ASC;
    $request->trackingNumber = 'cum';
    $request->warehouseId = 'se-28529731';

    $response = $sdk->labels->listLabels($request);

    if ($response->listLabelsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## voidLabel

Void a label by ID to get a refund.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VoidLabelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VoidLabelRequest();
    $request->labelId = 'se-28529731';

    $response = $sdk->labels->voidLabel($request);

    if ($response->voidLabelResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
