# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ParseAddressRequest{
        Request: shared.ParseAddressRequestBody{
            Address: &shared.PartialAddress{
                AddressLine1: "veritatis",
                AddressLine2: "consequatur",
                AddressLine3: "molestiae",
                AddressResidentialIndicator: map[string]interface{}{
                    "qui": "autem",
                    "quia": "enim",
                },
                CityLocality: "quis",
                CompanyName: "beatae",
                CountryCode: "eos",
                Name: "numquam",
                Phone: "voluptate",
                PostalCode: "tempora",
                StateProvince: "id",
            },
            Text: "accusamus",
        },
    }
    
    res, err := s.Addresses.ParseAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseAddressResponseBody != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### addresses

* `ParseAddress` - Parse an address
* `ValidateAddress` - Validate An Address

### batches

* `AddToBatch` - Add to a Batch
* `CreateBatch` - Create A Batch
* `DeleteBatch` - Delete Batch By Id
* `GetBatchByExternalID` - Get Batch By External ID
* `GetBatchByID` - Get Batch By ID
* `ListBatchErrors` - Get Batch Errors
* `ListBatches` - List Batches
* `ProcessBatch` - Process Batch ID Labels
* `RemoveFromBatch` - Remove From Batch
* `UpdateBatch` - Update Batch By Id

### carrier_accounts

* `ConnectCarrier` - Connect a carrier account
* `DisconnectCarrier` - Disconnect a carrier
* `GetCarrierSettings` - Get carrier settings
* `UpdateCarrierSettings` - Update carrier settings

### carriers

* `AddFundsToCarrier` - Add Funds To Carrier
* `GetCarrierByID` - Get Carrier By ID
* `GetCarrierOptions` - Get Carrier Options
* `ListCarrierPackageTypes` - List Carrier Package Types
* `ListCarrierServices` - List Carrier Services
* `ListCarriers` - List Carriers

### downloads

* `DownloadFile` - Download File

### insurance

* `AddFundsToInsurance` - Add Funds To Insurance
* `ConnectInsurer` - Connect a Shipsurance Account
* `DisconnectInsurer` - Disconnect a Shipsurance Account
* `GetInsuranceBalance` - Get Insurance Funds Balance

### labels

* `CreateLabel` - Purchase Label
* `CreateLabelFromRate` - Purchase Label with Rate ID
* `CreateLabelFromShipment` - Purchase Label with Shipment ID
* `CreateReturnLabel` - Create a return label
* `GetLabelByExternalShipmentID` - Get Label By External Shipment ID
* `GetLabelByID` - Get Label By ID
* `GetTrackingLogFromLabel` - Get Label Tracking Information
* `ListLabels` - List labels
* `VoidLabel` - Void a Label By ID

### manifests

* `CreateManifest` - Create Manifest
* `GetManifestByID` - Get Manifest By Id
* `ListManifests` - List Manifests

### package_types

* `CreatePackageType` - Create Custom Package Type
* `DeletePackageType` - Delete A Custom Package By ID
* `GetPackageTypeByID` - Get Custom Package Type By ID
* `ListPackageTypes` - List Custom Package Types
* `UpdatePackageType` - Update Custom Package Type By ID

### rates

* `CalculateRates` - Get Shipping Rates
* `CompareBulkRates` - Get Bulk Rates
* `EstimateRates` - Estimate Rates
* `GetRateByID` - Get Rate By ID

### shipments

* `CancelShipments` - Cancel a Shipment
* `CreateShipments` - Create Shipments
* `GetShipmentByExternalID` - Get Shipment By External ID
* `GetShipmentByID` - Get Shipment By ID
* `ListShipmentErrors` - Get Shipment Errors
* `ListShipmentRates` - Get Shipment Rates
* `ListShipments` - List Shipments
* `ParseShipment` - Parse shipping info
* `TagShipment` - Add Tag to Shipment
* `UntagShipment` - Remove Tag from Shipment
* `UpdateShipment` - Update Shipment By ID

### tags

* `CreateTag` - Create a New Tag
* `DeleteTag` - Delete Tag
* `ListTags` - Get Tags
* `RenameTag` - Update Tag Name

### tracking

* `GetTrackingLog` - Get Tracking Information
* `StartTracking` - Start Tracking a Package
* `StopTracking` - Stop Tracking a Package

### warehouses

* `CreateWarehouse` - Create Warehouse
* `DeleteWarehouse` - Delete Warehouse By ID
* `GetWarehouseByID` - Get Warehouse By Id
* `ListWarehouses` - List Warehouses
* `UpdateWarehouse` - Update WareHouse By Id

### webhooks

* `CreateWebhook` - Create a Webhook
* `DeleteWebhook` - Delete Webhook By ID
* `GetWebhookByID` - Get Webhook By ID
* `ListWebhooks` - List Webhooks
* `UpdateWebhook` - Update a Webhook

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
