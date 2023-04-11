# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/shipengine.com/1.1.202303022103/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/shipengine.com/1.1.202303022103/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ParseAddressRequestBody,
  ParseAddressResponse
} from "openapi/dist/sdk/models/operations";
import {
  PartialAddressAddressResidentialIndicatorEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ParseAddressRequestBody = {
  address: {
    addressLine1: "1999 Bishop Grandin Blvd.",
    addressLine2: "Unit 408",
    addressLine3: "Building #7",
    addressResidentialIndicator: PartialAddressAddressResidentialIndicatorEnum.No,
    cityLocality: "Winnipeg",
    companyName: "The Home Depot",
    countryCode: "CA",
    email: "example@example.com",
    name: "John Doe",
    phone: "+1 204-253-9411 ext. 123",
    postalCode: "78756-3717",
    stateProvince: "Manitoba",
  },
  text: "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
};

sdk.addresses.parseAddress(req).then((res: ParseAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addresses

* `parseAddress` - Parse an address
* `validateAddress` - Validate An Address

### batches

* `addToBatch` - Add to a Batch
* `createBatch` - Create A Batch
* `deleteBatch` - Delete Batch By Id
* `getBatchByExternalId` - Get Batch By External ID
* `getBatchById` - Get Batch By ID
* `listBatchErrors` - Get Batch Errors
* `listBatches` - List Batches
* `processBatch` - Process Batch ID Labels
* `removeFromBatch` - Remove From Batch
* `updateBatch` - Update Batch By Id

### carrierAccounts

* `connectCarrier` - Connect a carrier account
* `disconnectCarrier` - Disconnect a carrier
* `getCarrierSettings` - Get carrier settings
* `updateCarrierSettings` - Update carrier settings

### carriers

* `addFundsToCarrier` - Add Funds To Carrier
* `getCarrierById` - Get Carrier By ID
* `getCarrierOptions` - Get Carrier Options
* `listCarrierPackageTypes` - List Carrier Package Types
* `listCarrierServices` - List Carrier Services
* `listCarriers` - List Carriers

### downloads

* `downloadFile` - Download File

### insurance

* `addFundsToInsurance` - Add Funds To Insurance
* `connectInsurer` - Connect a Shipsurance Account
* `disconnectInsurer` - Disconnect a Shipsurance Account
* `getInsuranceBalance` - Get Insurance Funds Balance

### labels

* `createLabel` - Purchase Label
* `createLabelFromRate` - Purchase Label with Rate ID
* `createLabelFromShipment` - Purchase Label with Shipment ID
* `createReturnLabel` - Create a return label
* `getLabelByExternalShipmentId` - Get Label By External Shipment ID
* `getLabelById` - Get Label By ID
* `getTrackingLogFromLabel` - Get Label Tracking Information
* `listLabels` - List labels
* `voidLabel` - Void a Label By ID

### manifests

* `createManifest` - Create Manifest
* `getManifestById` - Get Manifest By Id
* `getManifestRequestById` - Get Manifest Request By Id
* `listManifests` - List Manifests

### packagePickups

* `deleteScheduledPickup` - Delete a Scheduled Pickup
* `getPickupById` - Get Pickup By ID
* `listScheduledPickups` - List Scheduled Pickups
* `schedulePickup` - Schedule a Pickup

### packageTypes

* `createPackageType` - Create Custom Package Type
* `deletePackageType` - Delete A Custom Package By ID
* `getPackageTypeById` - Get Custom Package Type By ID
* `listPackageTypes` - List Custom Package Types
* `updatePackageType` - Update Custom Package Type By ID

### rates

* `calculateRates` - Get Shipping Rates
* `compareBulkRates` - Get Bulk Rates
* `estimateRates` - Estimate Rates
* `getRateById` - Get Rate By ID

### servicePoints

* `servicePointsGetById` - Get Service Point By ID
* `servicePointsList` - List Service Points

### shipments

* `cancelShipments` - Cancel a Shipment
* `createShipments` - Create Shipments
* `getShipmentByExternalId` - Get Shipment By External ID
* `getShipmentById` - Get Shipment By ID
* `listShipmentRates` - Get Shipment Rates
* `listShipments` - List Shipments
* `parseShipment` - Parse shipping info
* `tagShipment` - Add Tag to Shipment
* `untagShipment` - Remove Tag from Shipment
* `updateShipment` - Update Shipment By ID

### tags

* `createTag` - Create a New Tag
* `deleteTag` - Delete Tag
* `listTags` - Get Tags
* `renameTag` - Update Tag Name

### tokens

* `tokensGetEphemeralToken` - Get Ephemeral Token

### tracking

* `getTrackingLog` - Get Tracking Information
* `startTracking` - Start Tracking a Package
* `stopTracking` - Stop Tracking a Package

### warehouses

* `createWarehouse` - Create Warehouse
* `deleteWarehouse` - Delete Warehouse By ID
* `getWarehouseById` - Get Warehouse By Id
* `listWarehouses` - List Warehouses
* `updateWarehouse` - Update Warehouse By Id
* `updateWarehouseSettings` - Update Warehouse Settings

### webhooks

* `createWebhook` - Create a Webhook
* `deleteWebhook` - Delete Webhook By ID
* `getWebhookById` - Get Webhook By ID
* `listWebhooks` - List Webhooks
* `updateWebhook` - Update a Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

