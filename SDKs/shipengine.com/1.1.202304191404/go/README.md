# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shipengine.com/1.1.202304191404/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.CreateAccountImage(ctx, shared.CreateAccountSettingsImageRequestBodyInput{
        ImageContentType: shared.CreateAccountSettingsImageRequestBodyImageContentTypeEnumImageJpeg,
        ImageData: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==",
        IsDefault: sdk.Bool(false),
        Name: "My logo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsImagesResponseBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [CreateAccountImage](docs/account/README.md#createaccountimage) - Create an Account Image
* [DeleteAccountImageByID](docs/account/README.md#deleteaccountimagebyid) - Delete Account Image By Id
* [GetAccountSettingsImagesByID](docs/account/README.md#getaccountsettingsimagesbyid) - Get Account Image By ID
* [ListAccountImages](docs/account/README.md#listaccountimages) - List Account Images
* [ListAccountSettings](docs/account/README.md#listaccountsettings) - List Account Settings
* [UpdateAccountSettingsImagesByID](docs/account/README.md#updateaccountsettingsimagesbyid) - Update Account Image By ID

### [Addresses](docs/addresses/README.md)

* [ParseAddress](docs/addresses/README.md#parseaddress) - Parse an address
* [ValidateAddress](docs/addresses/README.md#validateaddress) - Validate An Address

### [Batches](docs/batches/README.md)

* [AddToBatch](docs/batches/README.md#addtobatch) - Add to a Batch
* [CreateBatch](docs/batches/README.md#createbatch) - Create A Batch
* [DeleteBatch](docs/batches/README.md#deletebatch) - Delete Batch By Id
* [GetBatchByExternalID](docs/batches/README.md#getbatchbyexternalid) - Get Batch By External ID
* [GetBatchByID](docs/batches/README.md#getbatchbyid) - Get Batch By ID
* [ListBatchErrors](docs/batches/README.md#listbatcherrors) - Get Batch Errors
* [ListBatches](docs/batches/README.md#listbatches) - List Batches
* [ProcessBatch](docs/batches/README.md#processbatch) - Process Batch ID Labels
* [RemoveFromBatch](docs/batches/README.md#removefrombatch) - Remove From Batch
* [UpdateBatch](docs/batches/README.md#updatebatch) - Update Batch By Id

### [CarrierAccounts](docs/carrieraccounts/README.md)

* [ConnectCarrier](docs/carrieraccounts/README.md#connectcarrier) - Connect a carrier account
* [DisconnectCarrier](docs/carrieraccounts/README.md#disconnectcarrier) - Disconnect a carrier
* [GetCarrierSettings](docs/carrieraccounts/README.md#getcarriersettings) - Get carrier settings
* [UpdateCarrierSettings](docs/carrieraccounts/README.md#updatecarriersettings) - Update carrier settings

### [Carriers](docs/carriers/README.md)

* [AddFundsToCarrier](docs/carriers/README.md#addfundstocarrier) - Add Funds To Carrier
* [GetCarrierByID](docs/carriers/README.md#getcarrierbyid) - Get Carrier By ID
* [GetCarrierOptions](docs/carriers/README.md#getcarrieroptions) - Get Carrier Options
* [ListCarrierPackageTypes](docs/carriers/README.md#listcarrierpackagetypes) - List Carrier Package Types
* [ListCarrierServices](docs/carriers/README.md#listcarrierservices) - List Carrier Services
* [ListCarriers](docs/carriers/README.md#listcarriers) - List Carriers

### [Downloads](docs/downloads/README.md)

* [DownloadFile](docs/downloads/README.md#downloadfile) - Download File

### [Insurance](docs/insurance/README.md)

* [AddFundsToInsurance](docs/insurance/README.md#addfundstoinsurance) - Add Funds To Insurance
* [ConnectInsurer](docs/insurance/README.md#connectinsurer) - Connect a Shipsurance Account
* [DisconnectInsurer](docs/insurance/README.md#disconnectinsurer) - Disconnect a Shipsurance Account
* [GetInsuranceBalance](docs/insurance/README.md#getinsurancebalance) - Get Insurance Funds Balance

### [Labels](docs/labels/README.md)

* [CreateLabel](docs/labels/README.md#createlabel) - Purchase Label
* [CreateLabelFromRate](docs/labels/README.md#createlabelfromrate) - Purchase Label with Rate ID
* [CreateLabelFromShipment](docs/labels/README.md#createlabelfromshipment) - Purchase Label with Shipment ID
* [CreateReturnLabel](docs/labels/README.md#createreturnlabel) - Create a return label
* [GetLabelByExternalShipmentID](docs/labels/README.md#getlabelbyexternalshipmentid) - Get Label By External Shipment ID
* [GetLabelByID](docs/labels/README.md#getlabelbyid) - Get Label By ID
* [GetTrackingLogFromLabel](docs/labels/README.md#gettrackinglogfromlabel) - Get Label Tracking Information
* [ListLabels](docs/labels/README.md#listlabels) - List labels
* [VoidLabel](docs/labels/README.md#voidlabel) - Void a Label By ID

### [Manifests](docs/manifests/README.md)

* [CreateManifest](docs/manifests/README.md#createmanifest) - Create Manifest
* [GetManifestByID](docs/manifests/README.md#getmanifestbyid) - Get Manifest By Id
* [GetManifestRequestByID](docs/manifests/README.md#getmanifestrequestbyid) - Get Manifest Request By Id
* [ListManifests](docs/manifests/README.md#listmanifests) - List Manifests

### [PackagePickups](docs/packagepickups/README.md)

* [DeleteScheduledPickup](docs/packagepickups/README.md#deletescheduledpickup) - Delete a Scheduled Pickup
* [GetPickupByID](docs/packagepickups/README.md#getpickupbyid) - Get Pickup By ID
* [ListScheduledPickups](docs/packagepickups/README.md#listscheduledpickups) - List Scheduled Pickups
* [SchedulePickup](docs/packagepickups/README.md#schedulepickup) - Schedule a Pickup

### [PackageTypes](docs/packagetypes/README.md)

* [CreatePackageType](docs/packagetypes/README.md#createpackagetype) - Create Custom Package Type
* [DeletePackageType](docs/packagetypes/README.md#deletepackagetype) - Delete A Custom Package By ID
* [GetPackageTypeByID](docs/packagetypes/README.md#getpackagetypebyid) - Get Custom Package Type By ID
* [ListPackageTypes](docs/packagetypes/README.md#listpackagetypes) - List Custom Package Types
* [UpdatePackageType](docs/packagetypes/README.md#updatepackagetype) - Update Custom Package Type By ID

### [Rates](docs/rates/README.md)

* [CalculateRates](docs/rates/README.md#calculaterates) - Get Shipping Rates
* [CompareBulkRates](docs/rates/README.md#comparebulkrates) - Get Bulk Rates
* [EstimateRates](docs/rates/README.md#estimaterates) - Estimate Rates
* [GetRateByID](docs/rates/README.md#getratebyid) - Get Rate By ID

### [ServicePoints](docs/servicepoints/README.md)

* [ServicePointsGetByID](docs/servicepoints/README.md#servicepointsgetbyid) - Get Service Point By ID
* [ServicePointsList](docs/servicepoints/README.md#servicepointslist) - List Service Points

### [Shipments](docs/shipments/README.md)

* [CancelShipments](docs/shipments/README.md#cancelshipments) - Cancel a Shipment
* [CreateShipments](docs/shipments/README.md#createshipments) - Create Shipments
* [GetShipmentByExternalID](docs/shipments/README.md#getshipmentbyexternalid) - Get Shipment By External ID
* [GetShipmentByID](docs/shipments/README.md#getshipmentbyid) - Get Shipment By ID
* [ListShipmentRates](docs/shipments/README.md#listshipmentrates) - Get Shipment Rates
* [ListShipments](docs/shipments/README.md#listshipments) - List Shipments
* [ParseShipment](docs/shipments/README.md#parseshipment) - Parse shipping info
* [TagShipment](docs/shipments/README.md#tagshipment) - Add Tag to Shipment
* [UntagShipment](docs/shipments/README.md#untagshipment) - Remove Tag from Shipment
* [UpdateShipment](docs/shipments/README.md#updateshipment) - Update Shipment By ID

### [Tags](docs/tags/README.md)

* [CreateTag](docs/tags/README.md#createtag) - Create a New Tag
* [DeleteTag](docs/tags/README.md#deletetag) - Delete Tag
* [ListTags](docs/tags/README.md#listtags) - Get Tags
* [RenameTag](docs/tags/README.md#renametag) - Update Tag Name

### [Tokens](docs/tokens/README.md)

* [TokensGetEphemeralToken](docs/tokens/README.md#tokensgetephemeraltoken) - Get Ephemeral Token

### [Tracking](docs/tracking/README.md)

* [GetTrackingLog](docs/tracking/README.md#gettrackinglog) - Get Tracking Information
* [StartTracking](docs/tracking/README.md#starttracking) - Start Tracking a Package
* [StopTracking](docs/tracking/README.md#stoptracking) - Stop Tracking a Package

### [Warehouses](docs/warehouses/README.md)

* [CreateWarehouse](docs/warehouses/README.md#createwarehouse) - Create Warehouse
* [DeleteWarehouse](docs/warehouses/README.md#deletewarehouse) - Delete Warehouse By ID
* [GetWarehouseByID](docs/warehouses/README.md#getwarehousebyid) - Get Warehouse By Id
* [ListWarehouses](docs/warehouses/README.md#listwarehouses) - List Warehouses
* [UpdateWarehouse](docs/warehouses/README.md#updatewarehouse) - Update Warehouse By Id
* [UpdateWarehouseSettings](docs/warehouses/README.md#updatewarehousesettings) - Update Warehouse Settings

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhook](docs/webhooks/README.md#createwebhook) - Create a Webhook
* [DeleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete Webhook By ID
* [GetWebhookByID](docs/webhooks/README.md#getwebhookbyid) - Get Webhook By ID
* [ListWebhooks](docs/webhooks/README.md#listwebhooks) - List Webhooks
* [UpdateWebhook](docs/webhooks/README.md#updatewebhook) - Update a Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
