# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shipengine.com/1.1.202303022103/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.ParseAddressRequestBody{
        Address: &shared.PartialAddress{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: "Unit 408",
            AddressLine3: "Building #7",
            AddressResidentialIndicator: "no",
            CityLocality: "Winnipeg",
            CompanyName: "The Home Depot",
            CountryCode: "CA",
            Email: "example@example.com",
            Name: "John Doe",
            Phone: "+1 204-253-9411 ext. 123",
            PostalCode: "78756-3717",
            StateProvince: "Manitoba",
        },
        Text: "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
    }

    ctx := context.Background()
    res, err := s.Addresses.ParseAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseAddressResponseBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Addresses

* `ParseAddress` - Parse an address
* `ValidateAddress` - Validate An Address

### Batches

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

### CarrierAccounts

* `ConnectCarrier` - Connect a carrier account
* `DisconnectCarrier` - Disconnect a carrier
* `GetCarrierSettings` - Get carrier settings
* `UpdateCarrierSettings` - Update carrier settings

### Carriers

* `AddFundsToCarrier` - Add Funds To Carrier
* `GetCarrierByID` - Get Carrier By ID
* `GetCarrierOptions` - Get Carrier Options
* `ListCarrierPackageTypes` - List Carrier Package Types
* `ListCarrierServices` - List Carrier Services
* `ListCarriers` - List Carriers

### Downloads

* `DownloadFile` - Download File

### Insurance

* `AddFundsToInsurance` - Add Funds To Insurance
* `ConnectInsurer` - Connect a Shipsurance Account
* `DisconnectInsurer` - Disconnect a Shipsurance Account
* `GetInsuranceBalance` - Get Insurance Funds Balance

### Labels

* `CreateLabel` - Purchase Label
* `CreateLabelFromRate` - Purchase Label with Rate ID
* `CreateLabelFromShipment` - Purchase Label with Shipment ID
* `CreateReturnLabel` - Create a return label
* `GetLabelByExternalShipmentID` - Get Label By External Shipment ID
* `GetLabelByID` - Get Label By ID
* `GetTrackingLogFromLabel` - Get Label Tracking Information
* `ListLabels` - List labels
* `VoidLabel` - Void a Label By ID

### Manifests

* `CreateManifest` - Create Manifest
* `GetManifestByID` - Get Manifest By Id
* `GetManifestRequestByID` - Get Manifest Request By Id
* `ListManifests` - List Manifests

### PackagePickups

* `DeleteScheduledPickup` - Delete a Scheduled Pickup
* `GetPickupByID` - Get Pickup By ID
* `ListScheduledPickups` - List Scheduled Pickups
* `SchedulePickup` - Schedule a Pickup

### PackageTypes

* `CreatePackageType` - Create Custom Package Type
* `DeletePackageType` - Delete A Custom Package By ID
* `GetPackageTypeByID` - Get Custom Package Type By ID
* `ListPackageTypes` - List Custom Package Types
* `UpdatePackageType` - Update Custom Package Type By ID

### Rates

* `CalculateRates` - Get Shipping Rates
* `CompareBulkRates` - Get Bulk Rates
* `EstimateRates` - Estimate Rates
* `GetRateByID` - Get Rate By ID

### ServicePoints

* `ServicePointsGetByID` - Get Service Point By ID
* `ServicePointsList` - List Service Points

### Shipments

* `CancelShipments` - Cancel a Shipment
* `CreateShipments` - Create Shipments
* `GetShipmentByExternalID` - Get Shipment By External ID
* `GetShipmentByID` - Get Shipment By ID
* `ListShipmentRates` - Get Shipment Rates
* `ListShipments` - List Shipments
* `ParseShipment` - Parse shipping info
* `TagShipment` - Add Tag to Shipment
* `UntagShipment` - Remove Tag from Shipment
* `UpdateShipment` - Update Shipment By ID

### Tags

* `CreateTag` - Create a New Tag
* `DeleteTag` - Delete Tag
* `ListTags` - Get Tags
* `RenameTag` - Update Tag Name

### Tokens

* `TokensGetEphemeralToken` - Get Ephemeral Token

### Tracking

* `GetTrackingLog` - Get Tracking Information
* `StartTracking` - Start Tracking a Package
* `StopTracking` - Stop Tracking a Package

### Warehouses

* `CreateWarehouse` - Create Warehouse
* `DeleteWarehouse` - Delete Warehouse By ID
* `GetWarehouseByID` - Get Warehouse By Id
* `ListWarehouses` - List Warehouses
* `UpdateWarehouse` - Update Warehouse By Id
* `UpdateWarehouseSettings` - Update Warehouse Settings

### Webhooks

* `CreateWebhook` - Create a Webhook
* `DeleteWebhook` - Delete Webhook By ID
* `GetWebhookByID` - Get Webhook By ID
* `ListWebhooks` - List Webhooks
* `UpdateWebhook` - Update a Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
