# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_preview/1.43.0/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateDeployedDevicesCertificate(ctx, operations.CreateDeployedDevicesCertificateRequest{
        FleetSid: "corrupti",
        RequestBody: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "provident",
            DeviceSid: sdk.String("distinctio"),
            FriendlyName: sdk.String("quibusdam"),
        },
    }, operations.CreateDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateDeployedDevicesCertificate](docs/sdk/README.md#createdeployeddevicescertificate) - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* [CreateDeployedDevicesDeployment](docs/sdk/README.md#createdeployeddevicesdeployment) - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* [CreateDeployedDevicesDevice](docs/sdk/README.md#createdeployeddevicesdevice) - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* [CreateDeployedDevicesFleet](docs/sdk/README.md#createdeployeddevicesfleet) - Create a new Fleet for scoping of deployed devices within your account.
* [CreateDeployedDevicesKey](docs/sdk/README.md#createdeployeddeviceskey) - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* [CreateHostedNumbersAuthorizationDocument](docs/sdk/README.md#createhostednumbersauthorizationdocument) - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* [CreateHostedNumbersHostedNumberOrder](docs/sdk/README.md#createhostednumbershostednumberorder) - Host a phone number's capability on Twilio's platform.
* [CreateMarketplaceInstalledAddOn](docs/sdk/README.md#createmarketplaceinstalledaddon) - Install an Add-on for the Account specified.
* [CreateSyncDocument](docs/sdk/README.md#createsyncdocument)
* [CreateSyncService](docs/sdk/README.md#createsyncservice)
* [CreateSyncSyncList](docs/sdk/README.md#createsyncsynclist)
* [CreateSyncSyncListItem](docs/sdk/README.md#createsyncsynclistitem)
* [CreateSyncSyncMap](docs/sdk/README.md#createsyncsyncmap)
* [CreateSyncSyncMapItem](docs/sdk/README.md#createsyncsyncmapitem)
* [CreateUnderstandAssistant](docs/sdk/README.md#createunderstandassistant)
* [CreateUnderstandField](docs/sdk/README.md#createunderstandfield)
* [CreateUnderstandFieldType](docs/sdk/README.md#createunderstandfieldtype)
* [CreateUnderstandFieldValue](docs/sdk/README.md#createunderstandfieldvalue)
* [CreateUnderstandModelBuild](docs/sdk/README.md#createunderstandmodelbuild)
* [CreateUnderstandQuery](docs/sdk/README.md#createunderstandquery)
* [CreateUnderstandSample](docs/sdk/README.md#createunderstandsample)
* [CreateUnderstandTask](docs/sdk/README.md#createunderstandtask)
* [CreateWirelessCommand](docs/sdk/README.md#createwirelesscommand)
* [CreateWirelessRatePlan](docs/sdk/README.md#createwirelessrateplan)
* [DeleteDeployedDevicesCertificate](docs/sdk/README.md#deletedeployeddevicescertificate) - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [DeleteDeployedDevicesDeployment](docs/sdk/README.md#deletedeployeddevicesdeployment) - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* [DeleteDeployedDevicesDevice](docs/sdk/README.md#deletedeployeddevicesdevice) - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* [DeleteDeployedDevicesFleet](docs/sdk/README.md#deletedeployeddevicesfleet) - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* [DeleteDeployedDevicesKey](docs/sdk/README.md#deletedeployeddeviceskey) - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [DeleteHostedNumbersHostedNumberOrder](docs/sdk/README.md#deletehostednumbershostednumberorder) - Cancel the HostedNumberOrder (only available when the status is in `received`).
* [DeleteMarketplaceInstalledAddOn](docs/sdk/README.md#deletemarketplaceinstalledaddon) - Remove an Add-on installation from your account
* [DeleteSyncDocument](docs/sdk/README.md#deletesyncdocument)
* [DeleteSyncDocumentPermission](docs/sdk/README.md#deletesyncdocumentpermission) - Delete a specific Sync Document Permission.
* [DeleteSyncService](docs/sdk/README.md#deletesyncservice)
* [DeleteSyncSyncList](docs/sdk/README.md#deletesyncsynclist)
* [DeleteSyncSyncListItem](docs/sdk/README.md#deletesyncsynclistitem)
* [DeleteSyncSyncListPermission](docs/sdk/README.md#deletesyncsynclistpermission) - Delete a specific Sync List Permission.
* [DeleteSyncSyncMap](docs/sdk/README.md#deletesyncsyncmap)
* [DeleteSyncSyncMapItem](docs/sdk/README.md#deletesyncsyncmapitem)
* [DeleteSyncSyncMapPermission](docs/sdk/README.md#deletesyncsyncmappermission) - Delete a specific Sync Map Permission.
* [DeleteUnderstandAssistant](docs/sdk/README.md#deleteunderstandassistant)
* [DeleteUnderstandField](docs/sdk/README.md#deleteunderstandfield)
* [DeleteUnderstandFieldType](docs/sdk/README.md#deleteunderstandfieldtype)
* [DeleteUnderstandFieldValue](docs/sdk/README.md#deleteunderstandfieldvalue)
* [DeleteUnderstandModelBuild](docs/sdk/README.md#deleteunderstandmodelbuild)
* [DeleteUnderstandQuery](docs/sdk/README.md#deleteunderstandquery)
* [DeleteUnderstandSample](docs/sdk/README.md#deleteunderstandsample)
* [DeleteUnderstandTask](docs/sdk/README.md#deleteunderstandtask)
* [DeleteWirelessRatePlan](docs/sdk/README.md#deletewirelessrateplan)
* [FetchDeployedDevicesCertificate](docs/sdk/README.md#fetchdeployeddevicescertificate) - Fetch information about a specific Certificate credential in the Fleet.
* [FetchDeployedDevicesDeployment](docs/sdk/README.md#fetchdeployeddevicesdeployment) - Fetch information about a specific Deployment in the Fleet.
* [FetchDeployedDevicesDevice](docs/sdk/README.md#fetchdeployeddevicesdevice) - Fetch information about a specific Device in the Fleet.
* [FetchDeployedDevicesFleet](docs/sdk/README.md#fetchdeployeddevicesfleet) - Fetch information about a specific Fleet in your account.
* [FetchDeployedDevicesKey](docs/sdk/README.md#fetchdeployeddeviceskey) - Fetch information about a specific Key credential in the Fleet.
* [FetchHostedNumbersAuthorizationDocument](docs/sdk/README.md#fetchhostednumbersauthorizationdocument) - Fetch a specific AuthorizationDocument.
* [FetchHostedNumbersHostedNumberOrder](docs/sdk/README.md#fetchhostednumbershostednumberorder) - Fetch a specific HostedNumberOrder.
* [FetchMarketplaceAvailableAddOn](docs/sdk/README.md#fetchmarketplaceavailableaddon) - Fetch an instance of an Add-on currently available to be installed.
* [FetchMarketplaceAvailableAddOnExtension](docs/sdk/README.md#fetchmarketplaceavailableaddonextension) - Fetch an instance of an Extension for the Available Add-on.
* [FetchMarketplaceInstalledAddOn](docs/sdk/README.md#fetchmarketplaceinstalledaddon) - Fetch an instance of an Add-on currently installed on this Account.
* [FetchMarketplaceInstalledAddOnExtension](docs/sdk/README.md#fetchmarketplaceinstalledaddonextension) - Fetch an instance of an Extension for the Installed Add-on.
* [FetchSyncDocument](docs/sdk/README.md#fetchsyncdocument)
* [FetchSyncDocumentPermission](docs/sdk/README.md#fetchsyncdocumentpermission) - Fetch a specific Sync Document Permission.
* [FetchSyncService](docs/sdk/README.md#fetchsyncservice)
* [FetchSyncSyncList](docs/sdk/README.md#fetchsyncsynclist)
* [FetchSyncSyncListItem](docs/sdk/README.md#fetchsyncsynclistitem)
* [FetchSyncSyncListPermission](docs/sdk/README.md#fetchsyncsynclistpermission) - Fetch a specific Sync List Permission.
* [FetchSyncSyncMap](docs/sdk/README.md#fetchsyncsyncmap)
* [FetchSyncSyncMapItem](docs/sdk/README.md#fetchsyncsyncmapitem)
* [FetchSyncSyncMapPermission](docs/sdk/README.md#fetchsyncsyncmappermission) - Fetch a specific Sync Map Permission.
* [FetchUnderstandAssistant](docs/sdk/README.md#fetchunderstandassistant)
* [FetchUnderstandAssistantFallbackActions](docs/sdk/README.md#fetchunderstandassistantfallbackactions)
* [FetchUnderstandAssistantInitiationActions](docs/sdk/README.md#fetchunderstandassistantinitiationactions)
* [FetchUnderstandDialogue](docs/sdk/README.md#fetchunderstanddialogue)
* [FetchUnderstandField](docs/sdk/README.md#fetchunderstandfield)
* [FetchUnderstandFieldType](docs/sdk/README.md#fetchunderstandfieldtype)
* [FetchUnderstandFieldValue](docs/sdk/README.md#fetchunderstandfieldvalue)
* [FetchUnderstandModelBuild](docs/sdk/README.md#fetchunderstandmodelbuild)
* [FetchUnderstandQuery](docs/sdk/README.md#fetchunderstandquery)
* [FetchUnderstandSample](docs/sdk/README.md#fetchunderstandsample)
* [FetchUnderstandStyleSheet](docs/sdk/README.md#fetchunderstandstylesheet) - Returns Style sheet JSON object for this Assistant
* [FetchUnderstandTask](docs/sdk/README.md#fetchunderstandtask)
* [FetchUnderstandTaskActions](docs/sdk/README.md#fetchunderstandtaskactions) - Returns JSON actions for this Task.
* [FetchUnderstandTaskStatistics](docs/sdk/README.md#fetchunderstandtaskstatistics)
* [FetchWirelessCommand](docs/sdk/README.md#fetchwirelesscommand)
* [FetchWirelessRatePlan](docs/sdk/README.md#fetchwirelessrateplan)
* [FetchWirelessSim](docs/sdk/README.md#fetchwirelesssim)
* [FetchWirelessUsage](docs/sdk/README.md#fetchwirelessusage)
* [ListDeployedDevicesCertificate](docs/sdk/README.md#listdeployeddevicescertificate) - Retrieve a list of all Certificate credentials belonging to the Fleet.
* [ListDeployedDevicesDeployment](docs/sdk/README.md#listdeployeddevicesdeployment) - Retrieve a list of all Deployments belonging to the Fleet.
* [ListDeployedDevicesDevice](docs/sdk/README.md#listdeployeddevicesdevice) - Retrieve a list of all Devices belonging to the Fleet.
* [ListDeployedDevicesFleet](docs/sdk/README.md#listdeployeddevicesfleet) - Retrieve a list of all Fleets belonging to your account.
* [ListDeployedDevicesKey](docs/sdk/README.md#listdeployeddeviceskey) - Retrieve a list of all Keys credentials belonging to the Fleet.
* [ListHostedNumbersAuthorizationDocument](docs/sdk/README.md#listhostednumbersauthorizationdocument) - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* [ListHostedNumbersDependentHostedNumberOrder](docs/sdk/README.md#listhostednumbersdependenthostednumberorder) - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* [ListHostedNumbersHostedNumberOrder](docs/sdk/README.md#listhostednumbershostednumberorder) - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* [ListMarketplaceAvailableAddOn](docs/sdk/README.md#listmarketplaceavailableaddon) - Retrieve a list of Add-ons currently available to be installed.
* [ListMarketplaceAvailableAddOnExtension](docs/sdk/README.md#listmarketplaceavailableaddonextension) - Retrieve a list of Extensions for the Available Add-on.
* [ListMarketplaceInstalledAddOn](docs/sdk/README.md#listmarketplaceinstalledaddon) - Retrieve a list of Add-ons currently installed on this Account.
* [ListMarketplaceInstalledAddOnExtension](docs/sdk/README.md#listmarketplaceinstalledaddonextension) - Retrieve a list of Extensions for the Installed Add-on.
* [ListSyncDocument](docs/sdk/README.md#listsyncdocument)
* [ListSyncDocumentPermission](docs/sdk/README.md#listsyncdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [ListSyncService](docs/sdk/README.md#listsyncservice)
* [ListSyncSyncList](docs/sdk/README.md#listsyncsynclist)
* [ListSyncSyncListItem](docs/sdk/README.md#listsyncsynclistitem)
* [ListSyncSyncListPermission](docs/sdk/README.md#listsyncsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [ListSyncSyncMap](docs/sdk/README.md#listsyncsyncmap)
* [ListSyncSyncMapItem](docs/sdk/README.md#listsyncsyncmapitem)
* [ListSyncSyncMapPermission](docs/sdk/README.md#listsyncsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [ListUnderstandAssistant](docs/sdk/README.md#listunderstandassistant)
* [ListUnderstandField](docs/sdk/README.md#listunderstandfield)
* [ListUnderstandFieldType](docs/sdk/README.md#listunderstandfieldtype)
* [ListUnderstandFieldValue](docs/sdk/README.md#listunderstandfieldvalue)
* [ListUnderstandModelBuild](docs/sdk/README.md#listunderstandmodelbuild)
* [ListUnderstandQuery](docs/sdk/README.md#listunderstandquery)
* [ListUnderstandSample](docs/sdk/README.md#listunderstandsample)
* [ListUnderstandTask](docs/sdk/README.md#listunderstandtask)
* [ListWirelessCommand](docs/sdk/README.md#listwirelesscommand)
* [ListWirelessRatePlan](docs/sdk/README.md#listwirelessrateplan)
* [ListWirelessSim](docs/sdk/README.md#listwirelesssim)
* [UpdateDeployedDevicesCertificate](docs/sdk/README.md#updatedeployeddevicescertificate) - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* [UpdateDeployedDevicesDeployment](docs/sdk/README.md#updatedeployeddevicesdeployment) - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* [UpdateDeployedDevicesDevice](docs/sdk/README.md#updatedeployeddevicesdevice) - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* [UpdateDeployedDevicesFleet](docs/sdk/README.md#updatedeployeddevicesfleet) - Update the friendly name property of a specific Fleet in your account.
* [UpdateDeployedDevicesKey](docs/sdk/README.md#updatedeployeddeviceskey) - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* [UpdateHostedNumbersAuthorizationDocument](docs/sdk/README.md#updatehostednumbersauthorizationdocument) - Updates a specific AuthorizationDocument.
* [UpdateHostedNumbersHostedNumberOrder](docs/sdk/README.md#updatehostednumbershostednumberorder) - Updates a specific HostedNumberOrder.
* [UpdateMarketplaceInstalledAddOn](docs/sdk/README.md#updatemarketplaceinstalledaddon) - Update an Add-on installation for the Account specified.
* [UpdateMarketplaceInstalledAddOnExtension](docs/sdk/README.md#updatemarketplaceinstalledaddonextension) - Update an Extension for an Add-on installation.
* [UpdateSyncDocument](docs/sdk/README.md#updatesyncdocument)
* [UpdateSyncDocumentPermission](docs/sdk/README.md#updatesyncdocumentpermission) - Update an identity's access to a specific Sync Document.
* [UpdateSyncService](docs/sdk/README.md#updatesyncservice)
* [UpdateSyncSyncListItem](docs/sdk/README.md#updatesyncsynclistitem)
* [UpdateSyncSyncListPermission](docs/sdk/README.md#updatesyncsynclistpermission) - Update an identity's access to a specific Sync List.
* [UpdateSyncSyncMapItem](docs/sdk/README.md#updatesyncsyncmapitem)
* [UpdateSyncSyncMapPermission](docs/sdk/README.md#updatesyncsyncmappermission) - Update an identity's access to a specific Sync Map.
* [UpdateUnderstandAssistant](docs/sdk/README.md#updateunderstandassistant)
* [UpdateUnderstandAssistantFallbackActions](docs/sdk/README.md#updateunderstandassistantfallbackactions)
* [UpdateUnderstandAssistantInitiationActions](docs/sdk/README.md#updateunderstandassistantinitiationactions)
* [UpdateUnderstandFieldType](docs/sdk/README.md#updateunderstandfieldtype)
* [UpdateUnderstandModelBuild](docs/sdk/README.md#updateunderstandmodelbuild)
* [UpdateUnderstandQuery](docs/sdk/README.md#updateunderstandquery)
* [UpdateUnderstandSample](docs/sdk/README.md#updateunderstandsample)
* [UpdateUnderstandStyleSheet](docs/sdk/README.md#updateunderstandstylesheet) - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* [UpdateUnderstandTask](docs/sdk/README.md#updateunderstandtask)
* [UpdateUnderstandTaskActions](docs/sdk/README.md#updateunderstandtaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [UpdateWirelessRatePlan](docs/sdk/README.md#updatewirelessrateplan)
* [UpdateWirelessSim](docs/sdk/README.md#updatewirelesssim)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
