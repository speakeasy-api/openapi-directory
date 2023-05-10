# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountSettingsImageRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountSettingsImageRequestBodyImageContentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountSettingsImageRequestBodyInput();
    $request->imageContentType = CreateAccountSettingsImageRequestBodyImageContentTypeEnum::IMAGE_JPEG;
    $request->imageData = 'iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==';
    $request->isDefault = false;
    $request->name = 'My logo';

    $response = $sdk->account->createAccountImage($request);

    if ($response->getAccountSettingsImagesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [createAccountImage](docs/account/README.md#createaccountimage) - Create an Account Image
* [deleteAccountImageById](docs/account/README.md#deleteaccountimagebyid) - Delete Account Image By Id
* [getAccountSettingsImagesById](docs/account/README.md#getaccountsettingsimagesbyid) - Get Account Image By ID
* [listAccountImages](docs/account/README.md#listaccountimages) - List Account Images
* [listAccountSettings](docs/account/README.md#listaccountsettings) - List Account Settings
* [updateAccountSettingsImagesById](docs/account/README.md#updateaccountsettingsimagesbyid) - Update Account Image By ID

### [addresses](docs/addresses/README.md)

* [parseAddress](docs/addresses/README.md#parseaddress) - Parse an address
* [validateAddress](docs/addresses/README.md#validateaddress) - Validate An Address

### [batches](docs/batches/README.md)

* [addToBatch](docs/batches/README.md#addtobatch) - Add to a Batch
* [createBatch](docs/batches/README.md#createbatch) - Create A Batch
* [deleteBatch](docs/batches/README.md#deletebatch) - Delete Batch By Id
* [getBatchByExternalId](docs/batches/README.md#getbatchbyexternalid) - Get Batch By External ID
* [getBatchById](docs/batches/README.md#getbatchbyid) - Get Batch By ID
* [listBatchErrors](docs/batches/README.md#listbatcherrors) - Get Batch Errors
* [listBatches](docs/batches/README.md#listbatches) - List Batches
* [processBatch](docs/batches/README.md#processbatch) - Process Batch ID Labels
* [removeFromBatch](docs/batches/README.md#removefrombatch) - Remove From Batch
* [updateBatch](docs/batches/README.md#updatebatch) - Update Batch By Id

### [carrierAccounts](docs/carrieraccounts/README.md)

* [connectCarrier](docs/carrieraccounts/README.md#connectcarrier) - Connect a carrier account
* [disconnectCarrier](docs/carrieraccounts/README.md#disconnectcarrier) - Disconnect a carrier
* [getCarrierSettings](docs/carrieraccounts/README.md#getcarriersettings) - Get carrier settings
* [updateCarrierSettings](docs/carrieraccounts/README.md#updatecarriersettings) - Update carrier settings

### [carriers](docs/carriers/README.md)

* [addFundsToCarrier](docs/carriers/README.md#addfundstocarrier) - Add Funds To Carrier
* [getCarrierById](docs/carriers/README.md#getcarrierbyid) - Get Carrier By ID
* [getCarrierOptions](docs/carriers/README.md#getcarrieroptions) - Get Carrier Options
* [listCarrierPackageTypes](docs/carriers/README.md#listcarrierpackagetypes) - List Carrier Package Types
* [listCarrierServices](docs/carriers/README.md#listcarrierservices) - List Carrier Services
* [listCarriers](docs/carriers/README.md#listcarriers) - List Carriers

### [downloads](docs/downloads/README.md)

* [downloadFile](docs/downloads/README.md#downloadfile) - Download File

### [insurance](docs/insurance/README.md)

* [addFundsToInsurance](docs/insurance/README.md#addfundstoinsurance) - Add Funds To Insurance
* [connectInsurer](docs/insurance/README.md#connectinsurer) - Connect a Shipsurance Account
* [disconnectInsurer](docs/insurance/README.md#disconnectinsurer) - Disconnect a Shipsurance Account
* [getInsuranceBalance](docs/insurance/README.md#getinsurancebalance) - Get Insurance Funds Balance

### [labels](docs/labels/README.md)

* [createLabel](docs/labels/README.md#createlabel) - Purchase Label
* [createLabelFromRate](docs/labels/README.md#createlabelfromrate) - Purchase Label with Rate ID
* [createLabelFromShipment](docs/labels/README.md#createlabelfromshipment) - Purchase Label with Shipment ID
* [createReturnLabel](docs/labels/README.md#createreturnlabel) - Create a return label
* [getLabelByExternalShipmentId](docs/labels/README.md#getlabelbyexternalshipmentid) - Get Label By External Shipment ID
* [getLabelById](docs/labels/README.md#getlabelbyid) - Get Label By ID
* [getTrackingLogFromLabel](docs/labels/README.md#gettrackinglogfromlabel) - Get Label Tracking Information
* [listLabels](docs/labels/README.md#listlabels) - List labels
* [voidLabel](docs/labels/README.md#voidlabel) - Void a Label By ID

### [manifests](docs/manifests/README.md)

* [createManifest](docs/manifests/README.md#createmanifest) - Create Manifest
* [getManifestById](docs/manifests/README.md#getmanifestbyid) - Get Manifest By Id
* [getManifestRequestById](docs/manifests/README.md#getmanifestrequestbyid) - Get Manifest Request By Id
* [listManifests](docs/manifests/README.md#listmanifests) - List Manifests

### [packagePickups](docs/packagepickups/README.md)

* [deleteScheduledPickup](docs/packagepickups/README.md#deletescheduledpickup) - Delete a Scheduled Pickup
* [getPickupById](docs/packagepickups/README.md#getpickupbyid) - Get Pickup By ID
* [listScheduledPickups](docs/packagepickups/README.md#listscheduledpickups) - List Scheduled Pickups
* [schedulePickup](docs/packagepickups/README.md#schedulepickup) - Schedule a Pickup

### [packageTypes](docs/packagetypes/README.md)

* [createPackageType](docs/packagetypes/README.md#createpackagetype) - Create Custom Package Type
* [deletePackageType](docs/packagetypes/README.md#deletepackagetype) - Delete A Custom Package By ID
* [getPackageTypeById](docs/packagetypes/README.md#getpackagetypebyid) - Get Custom Package Type By ID
* [listPackageTypes](docs/packagetypes/README.md#listpackagetypes) - List Custom Package Types
* [updatePackageType](docs/packagetypes/README.md#updatepackagetype) - Update Custom Package Type By ID

### [rates](docs/rates/README.md)

* [calculateRates](docs/rates/README.md#calculaterates) - Get Shipping Rates
* [compareBulkRates](docs/rates/README.md#comparebulkrates) - Get Bulk Rates
* [estimateRates](docs/rates/README.md#estimaterates) - Estimate Rates
* [getRateById](docs/rates/README.md#getratebyid) - Get Rate By ID

### [servicePoints](docs/servicepoints/README.md)

* [servicePointsGetById](docs/servicepoints/README.md#servicepointsgetbyid) - Get Service Point By ID
* [servicePointsList](docs/servicepoints/README.md#servicepointslist) - List Service Points

### [shipments](docs/shipments/README.md)

* [cancelShipments](docs/shipments/README.md#cancelshipments) - Cancel a Shipment
* [createShipments](docs/shipments/README.md#createshipments) - Create Shipments
* [getShipmentByExternalId](docs/shipments/README.md#getshipmentbyexternalid) - Get Shipment By External ID
* [getShipmentById](docs/shipments/README.md#getshipmentbyid) - Get Shipment By ID
* [listShipmentRates](docs/shipments/README.md#listshipmentrates) - Get Shipment Rates
* [listShipments](docs/shipments/README.md#listshipments) - List Shipments
* [parseShipment](docs/shipments/README.md#parseshipment) - Parse shipping info
* [tagShipment](docs/shipments/README.md#tagshipment) - Add Tag to Shipment
* [untagShipment](docs/shipments/README.md#untagshipment) - Remove Tag from Shipment
* [updateShipment](docs/shipments/README.md#updateshipment) - Update Shipment By ID

### [tags](docs/tags/README.md)

* [createTag](docs/tags/README.md#createtag) - Create a New Tag
* [deleteTag](docs/tags/README.md#deletetag) - Delete Tag
* [listTags](docs/tags/README.md#listtags) - Get Tags
* [renameTag](docs/tags/README.md#renametag) - Update Tag Name

### [tokens](docs/tokens/README.md)

* [tokensGetEphemeralToken](docs/tokens/README.md#tokensgetephemeraltoken) - Get Ephemeral Token

### [tracking](docs/tracking/README.md)

* [getTrackingLog](docs/tracking/README.md#gettrackinglog) - Get Tracking Information
* [startTracking](docs/tracking/README.md#starttracking) - Start Tracking a Package
* [stopTracking](docs/tracking/README.md#stoptracking) - Stop Tracking a Package

### [warehouses](docs/warehouses/README.md)

* [createWarehouse](docs/warehouses/README.md#createwarehouse) - Create Warehouse
* [deleteWarehouse](docs/warehouses/README.md#deletewarehouse) - Delete Warehouse By ID
* [getWarehouseById](docs/warehouses/README.md#getwarehousebyid) - Get Warehouse By Id
* [listWarehouses](docs/warehouses/README.md#listwarehouses) - List Warehouses
* [updateWarehouse](docs/warehouses/README.md#updatewarehouse) - Update Warehouse By Id
* [updateWarehouseSettings](docs/warehouses/README.md#updatewarehousesettings) - Update Warehouse Settings

### [webhooks](docs/webhooks/README.md)

* [createWebhook](docs/webhooks/README.md#createwebhook) - Create a Webhook
* [deleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete Webhook By ID
* [getWebhookById](docs/webhooks/README.md#getwebhookbyid) - Get Webhook By ID
* [listWebhooks](docs/webhooks/README.md#listwebhooks) - List Webhooks
* [updateWebhook](docs/webhooks/README.md#updatewebhook) - Update a Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
