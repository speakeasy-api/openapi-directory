# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest("corrupti") {{
                requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest("provident") {{
                    deviceSid = "distinctio";
                    friendlyName = "quibusdam";
                }};;
            }};            

            CreateDeployedDevicesCertificateResponse res = sdk.createDeployedDevicesCertificate(req, new CreateDeployedDevicesCertificateSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDeployedDevicesCertificate](docs/sdk/README.md#createdeployeddevicescertificate) - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createDeployedDevicesDeployment](docs/sdk/README.md#createdeployeddevicesdeployment) - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* [createDeployedDevicesDevice](docs/sdk/README.md#createdeployeddevicesdevice) - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* [createDeployedDevicesFleet](docs/sdk/README.md#createdeployeddevicesfleet) - Create a new Fleet for scoping of deployed devices within your account.
* [createDeployedDevicesKey](docs/sdk/README.md#createdeployeddeviceskey) - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createHostedNumbersAuthorizationDocument](docs/sdk/README.md#createhostednumbersauthorizationdocument) - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* [createHostedNumbersHostedNumberOrder](docs/sdk/README.md#createhostednumbershostednumberorder) - Host a phone number's capability on Twilio's platform.
* [createMarketplaceInstalledAddOn](docs/sdk/README.md#createmarketplaceinstalledaddon) - Install an Add-on for the Account specified.
* [createSyncDocument](docs/sdk/README.md#createsyncdocument)
* [createSyncService](docs/sdk/README.md#createsyncservice)
* [createSyncSyncList](docs/sdk/README.md#createsyncsynclist)
* [createSyncSyncListItem](docs/sdk/README.md#createsyncsynclistitem)
* [createSyncSyncMap](docs/sdk/README.md#createsyncsyncmap)
* [createSyncSyncMapItem](docs/sdk/README.md#createsyncsyncmapitem)
* [createUnderstandAssistant](docs/sdk/README.md#createunderstandassistant)
* [createUnderstandField](docs/sdk/README.md#createunderstandfield)
* [createUnderstandFieldType](docs/sdk/README.md#createunderstandfieldtype)
* [createUnderstandFieldValue](docs/sdk/README.md#createunderstandfieldvalue)
* [createUnderstandModelBuild](docs/sdk/README.md#createunderstandmodelbuild)
* [createUnderstandQuery](docs/sdk/README.md#createunderstandquery)
* [createUnderstandSample](docs/sdk/README.md#createunderstandsample)
* [createUnderstandTask](docs/sdk/README.md#createunderstandtask)
* [createWirelessCommand](docs/sdk/README.md#createwirelesscommand)
* [createWirelessRatePlan](docs/sdk/README.md#createwirelessrateplan)
* [deleteDeployedDevicesCertificate](docs/sdk/README.md#deletedeployeddevicescertificate) - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteDeployedDevicesDeployment](docs/sdk/README.md#deletedeployeddevicesdeployment) - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* [deleteDeployedDevicesDevice](docs/sdk/README.md#deletedeployeddevicesdevice) - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* [deleteDeployedDevicesFleet](docs/sdk/README.md#deletedeployeddevicesfleet) - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* [deleteDeployedDevicesKey](docs/sdk/README.md#deletedeployeddeviceskey) - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteHostedNumbersHostedNumberOrder](docs/sdk/README.md#deletehostednumbershostednumberorder) - Cancel the HostedNumberOrder (only available when the status is in `received`).
* [deleteMarketplaceInstalledAddOn](docs/sdk/README.md#deletemarketplaceinstalledaddon) - Remove an Add-on installation from your account
* [deleteSyncDocument](docs/sdk/README.md#deletesyncdocument)
* [deleteSyncDocumentPermission](docs/sdk/README.md#deletesyncdocumentpermission) - Delete a specific Sync Document Permission.
* [deleteSyncService](docs/sdk/README.md#deletesyncservice)
* [deleteSyncSyncList](docs/sdk/README.md#deletesyncsynclist)
* [deleteSyncSyncListItem](docs/sdk/README.md#deletesyncsynclistitem)
* [deleteSyncSyncListPermission](docs/sdk/README.md#deletesyncsynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncSyncMap](docs/sdk/README.md#deletesyncsyncmap)
* [deleteSyncSyncMapItem](docs/sdk/README.md#deletesyncsyncmapitem)
* [deleteSyncSyncMapPermission](docs/sdk/README.md#deletesyncsyncmappermission) - Delete a specific Sync Map Permission.
* [deleteUnderstandAssistant](docs/sdk/README.md#deleteunderstandassistant)
* [deleteUnderstandField](docs/sdk/README.md#deleteunderstandfield)
* [deleteUnderstandFieldType](docs/sdk/README.md#deleteunderstandfieldtype)
* [deleteUnderstandFieldValue](docs/sdk/README.md#deleteunderstandfieldvalue)
* [deleteUnderstandModelBuild](docs/sdk/README.md#deleteunderstandmodelbuild)
* [deleteUnderstandQuery](docs/sdk/README.md#deleteunderstandquery)
* [deleteUnderstandSample](docs/sdk/README.md#deleteunderstandsample)
* [deleteUnderstandTask](docs/sdk/README.md#deleteunderstandtask)
* [deleteWirelessRatePlan](docs/sdk/README.md#deletewirelessrateplan)
* [fetchDeployedDevicesCertificate](docs/sdk/README.md#fetchdeployeddevicescertificate) - Fetch information about a specific Certificate credential in the Fleet.
* [fetchDeployedDevicesDeployment](docs/sdk/README.md#fetchdeployeddevicesdeployment) - Fetch information about a specific Deployment in the Fleet.
* [fetchDeployedDevicesDevice](docs/sdk/README.md#fetchdeployeddevicesdevice) - Fetch information about a specific Device in the Fleet.
* [fetchDeployedDevicesFleet](docs/sdk/README.md#fetchdeployeddevicesfleet) - Fetch information about a specific Fleet in your account.
* [fetchDeployedDevicesKey](docs/sdk/README.md#fetchdeployeddeviceskey) - Fetch information about a specific Key credential in the Fleet.
* [fetchHostedNumbersAuthorizationDocument](docs/sdk/README.md#fetchhostednumbersauthorizationdocument) - Fetch a specific AuthorizationDocument.
* [fetchHostedNumbersHostedNumberOrder](docs/sdk/README.md#fetchhostednumbershostednumberorder) - Fetch a specific HostedNumberOrder.
* [fetchMarketplaceAvailableAddOn](docs/sdk/README.md#fetchmarketplaceavailableaddon) - Fetch an instance of an Add-on currently available to be installed.
* [fetchMarketplaceAvailableAddOnExtension](docs/sdk/README.md#fetchmarketplaceavailableaddonextension) - Fetch an instance of an Extension for the Available Add-on.
* [fetchMarketplaceInstalledAddOn](docs/sdk/README.md#fetchmarketplaceinstalledaddon) - Fetch an instance of an Add-on currently installed on this Account.
* [fetchMarketplaceInstalledAddOnExtension](docs/sdk/README.md#fetchmarketplaceinstalledaddonextension) - Fetch an instance of an Extension for the Installed Add-on.
* [fetchSyncDocument](docs/sdk/README.md#fetchsyncdocument)
* [fetchSyncDocumentPermission](docs/sdk/README.md#fetchsyncdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchSyncService](docs/sdk/README.md#fetchsyncservice)
* [fetchSyncSyncList](docs/sdk/README.md#fetchsyncsynclist)
* [fetchSyncSyncListItem](docs/sdk/README.md#fetchsyncsynclistitem)
* [fetchSyncSyncListPermission](docs/sdk/README.md#fetchsyncsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncSyncMap](docs/sdk/README.md#fetchsyncsyncmap)
* [fetchSyncSyncMapItem](docs/sdk/README.md#fetchsyncsyncmapitem)
* [fetchSyncSyncMapPermission](docs/sdk/README.md#fetchsyncsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchUnderstandAssistant](docs/sdk/README.md#fetchunderstandassistant)
* [fetchUnderstandAssistantFallbackActions](docs/sdk/README.md#fetchunderstandassistantfallbackactions)
* [fetchUnderstandAssistantInitiationActions](docs/sdk/README.md#fetchunderstandassistantinitiationactions)
* [fetchUnderstandDialogue](docs/sdk/README.md#fetchunderstanddialogue)
* [fetchUnderstandField](docs/sdk/README.md#fetchunderstandfield)
* [fetchUnderstandFieldType](docs/sdk/README.md#fetchunderstandfieldtype)
* [fetchUnderstandFieldValue](docs/sdk/README.md#fetchunderstandfieldvalue)
* [fetchUnderstandModelBuild](docs/sdk/README.md#fetchunderstandmodelbuild)
* [fetchUnderstandQuery](docs/sdk/README.md#fetchunderstandquery)
* [fetchUnderstandSample](docs/sdk/README.md#fetchunderstandsample)
* [fetchUnderstandStyleSheet](docs/sdk/README.md#fetchunderstandstylesheet) - Returns Style sheet JSON object for this Assistant
* [fetchUnderstandTask](docs/sdk/README.md#fetchunderstandtask)
* [fetchUnderstandTaskActions](docs/sdk/README.md#fetchunderstandtaskactions) - Returns JSON actions for this Task.
* [fetchUnderstandTaskStatistics](docs/sdk/README.md#fetchunderstandtaskstatistics)
* [fetchWirelessCommand](docs/sdk/README.md#fetchwirelesscommand)
* [fetchWirelessRatePlan](docs/sdk/README.md#fetchwirelessrateplan)
* [fetchWirelessSim](docs/sdk/README.md#fetchwirelesssim)
* [fetchWirelessUsage](docs/sdk/README.md#fetchwirelessusage)
* [listDeployedDevicesCertificate](docs/sdk/README.md#listdeployeddevicescertificate) - Retrieve a list of all Certificate credentials belonging to the Fleet.
* [listDeployedDevicesDeployment](docs/sdk/README.md#listdeployeddevicesdeployment) - Retrieve a list of all Deployments belonging to the Fleet.
* [listDeployedDevicesDevice](docs/sdk/README.md#listdeployeddevicesdevice) - Retrieve a list of all Devices belonging to the Fleet.
* [listDeployedDevicesFleet](docs/sdk/README.md#listdeployeddevicesfleet) - Retrieve a list of all Fleets belonging to your account.
* [listDeployedDevicesKey](docs/sdk/README.md#listdeployeddeviceskey) - Retrieve a list of all Keys credentials belonging to the Fleet.
* [listHostedNumbersAuthorizationDocument](docs/sdk/README.md#listhostednumbersauthorizationdocument) - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* [listHostedNumbersDependentHostedNumberOrder](docs/sdk/README.md#listhostednumbersdependenthostednumberorder) - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* [listHostedNumbersHostedNumberOrder](docs/sdk/README.md#listhostednumbershostednumberorder) - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* [listMarketplaceAvailableAddOn](docs/sdk/README.md#listmarketplaceavailableaddon) - Retrieve a list of Add-ons currently available to be installed.
* [listMarketplaceAvailableAddOnExtension](docs/sdk/README.md#listmarketplaceavailableaddonextension) - Retrieve a list of Extensions for the Available Add-on.
* [listMarketplaceInstalledAddOn](docs/sdk/README.md#listmarketplaceinstalledaddon) - Retrieve a list of Add-ons currently installed on this Account.
* [listMarketplaceInstalledAddOnExtension](docs/sdk/README.md#listmarketplaceinstalledaddonextension) - Retrieve a list of Extensions for the Installed Add-on.
* [listSyncDocument](docs/sdk/README.md#listsyncdocument)
* [listSyncDocumentPermission](docs/sdk/README.md#listsyncdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listSyncService](docs/sdk/README.md#listsyncservice)
* [listSyncSyncList](docs/sdk/README.md#listsyncsynclist)
* [listSyncSyncListItem](docs/sdk/README.md#listsyncsynclistitem)
* [listSyncSyncListPermission](docs/sdk/README.md#listsyncsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncSyncMap](docs/sdk/README.md#listsyncsyncmap)
* [listSyncSyncMapItem](docs/sdk/README.md#listsyncsyncmapitem)
* [listSyncSyncMapPermission](docs/sdk/README.md#listsyncsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listUnderstandAssistant](docs/sdk/README.md#listunderstandassistant)
* [listUnderstandField](docs/sdk/README.md#listunderstandfield)
* [listUnderstandFieldType](docs/sdk/README.md#listunderstandfieldtype)
* [listUnderstandFieldValue](docs/sdk/README.md#listunderstandfieldvalue)
* [listUnderstandModelBuild](docs/sdk/README.md#listunderstandmodelbuild)
* [listUnderstandQuery](docs/sdk/README.md#listunderstandquery)
* [listUnderstandSample](docs/sdk/README.md#listunderstandsample)
* [listUnderstandTask](docs/sdk/README.md#listunderstandtask)
* [listWirelessCommand](docs/sdk/README.md#listwirelesscommand)
* [listWirelessRatePlan](docs/sdk/README.md#listwirelessrateplan)
* [listWirelessSim](docs/sdk/README.md#listwirelesssim)
* [updateDeployedDevicesCertificate](docs/sdk/README.md#updatedeployeddevicescertificate) - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateDeployedDevicesDeployment](docs/sdk/README.md#updatedeployeddevicesdeployment) - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* [updateDeployedDevicesDevice](docs/sdk/README.md#updatedeployeddevicesdevice) - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* [updateDeployedDevicesFleet](docs/sdk/README.md#updatedeployeddevicesfleet) - Update the friendly name property of a specific Fleet in your account.
* [updateDeployedDevicesKey](docs/sdk/README.md#updatedeployeddeviceskey) - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateHostedNumbersAuthorizationDocument](docs/sdk/README.md#updatehostednumbersauthorizationdocument) - Updates a specific AuthorizationDocument.
* [updateHostedNumbersHostedNumberOrder](docs/sdk/README.md#updatehostednumbershostednumberorder) - Updates a specific HostedNumberOrder.
* [updateMarketplaceInstalledAddOn](docs/sdk/README.md#updatemarketplaceinstalledaddon) - Update an Add-on installation for the Account specified.
* [updateMarketplaceInstalledAddOnExtension](docs/sdk/README.md#updatemarketplaceinstalledaddonextension) - Update an Extension for an Add-on installation.
* [updateSyncDocument](docs/sdk/README.md#updatesyncdocument)
* [updateSyncDocumentPermission](docs/sdk/README.md#updatesyncdocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateSyncService](docs/sdk/README.md#updatesyncservice)
* [updateSyncSyncListItem](docs/sdk/README.md#updatesyncsynclistitem)
* [updateSyncSyncListPermission](docs/sdk/README.md#updatesyncsynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncSyncMapItem](docs/sdk/README.md#updatesyncsyncmapitem)
* [updateSyncSyncMapPermission](docs/sdk/README.md#updatesyncsyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateUnderstandAssistant](docs/sdk/README.md#updateunderstandassistant)
* [updateUnderstandAssistantFallbackActions](docs/sdk/README.md#updateunderstandassistantfallbackactions)
* [updateUnderstandAssistantInitiationActions](docs/sdk/README.md#updateunderstandassistantinitiationactions)
* [updateUnderstandFieldType](docs/sdk/README.md#updateunderstandfieldtype)
* [updateUnderstandModelBuild](docs/sdk/README.md#updateunderstandmodelbuild)
* [updateUnderstandQuery](docs/sdk/README.md#updateunderstandquery)
* [updateUnderstandSample](docs/sdk/README.md#updateunderstandsample)
* [updateUnderstandStyleSheet](docs/sdk/README.md#updateunderstandstylesheet) - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* [updateUnderstandTask](docs/sdk/README.md#updateunderstandtask)
* [updateUnderstandTaskActions](docs/sdk/README.md#updateunderstandtaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWirelessRatePlan](docs/sdk/README.md#updatewirelessrateplan)
* [updateWirelessSim](docs/sdk/README.md#updatewirelesssim)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
