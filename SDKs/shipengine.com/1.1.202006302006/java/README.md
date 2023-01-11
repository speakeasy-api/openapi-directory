# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ParseAddressRequest req = new ParseAddressRequest() {{
                request = new ParseAddressRequestBody() {{
                    address = new PartialAddress() {{
                        addressLine1 = "sit";
                        addressLine2 = "voluptas";
                        addressLine3 = "culpa";
                        addressResidentialIndicator = new java.util.HashMap<String, Object>() {{
                            put("consequuntur", "dolor");
                            put("expedita", "voluptas");
                        }};
                        cityLocality = "fugit";
                        companyName = "et";
                        countryCode = "nihil";
                        name = "rerum";
                        phone = "dicta";
                        postalCode = "debitis";
                        stateProvince = "voluptatum";
                    }};
                    text = "et";
                }};
            }};

            ParseAddressResponse res = sdk.addresses.parseAddress(req);

            if (res.parseAddressResponseBody.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### carrier_accounts

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
* `listManifests` - List Manifests

### package_types

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

### shipments

* `cancelShipments` - Cancel a Shipment
* `createShipments` - Create Shipments
* `getShipmentByExternalId` - Get Shipment By External ID
* `getShipmentById` - Get Shipment By ID
* `listShipmentErrors` - Get Shipment Errors
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

### tracking

* `getTrackingLog` - Get Tracking Information
* `startTracking` - Start Tracking a Package
* `stopTracking` - Stop Tracking a Package

### warehouses

* `createWarehouse` - Create Warehouse
* `deleteWarehouse` - Delete Warehouse By ID
* `getWarehouseById` - Get Warehouse By Id
* `listWarehouses` - List Warehouses
* `updateWarehouse` - Update WareHouse By Id

### webhooks

* `createWebhook` - Create a Webhook
* `deleteWebhook` - Delete Webhook By ID
* `getWebhookById` - Get Webhook By ID
* `listWebhooks` - List Webhooks
* `updateWebhook` - Update a Webhook

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
