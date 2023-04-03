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

import org.openapis.openapi.models.operations.AccessTokenPutFormResponse;
import org.openapis.openapi.models.shared.AccessTokenToPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccessTokenToPut req = new AccessTokenToPut() {{
                cardId = 548814;
                userId = 592845;
            }}            

            AccessTokenPutFormResponse res = sdk.accessToken.accessTokenPutForm(req);

            if (res.accessTokenPutForm200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accessToken

* `accessTokenPutForm` - Creates a Access Token to write on a Card (e.g. NFC)
* `accessTokenPutJson` - Creates a Access Token to write on a Card (e.g. NFC)
* `accessTokenPutRaw` - Creates a Access Token to write on a Card (e.g. NFC)

### account

* `accountLogin`
* `postApiAccountLogin`

### actions

* `actionsGet` - Gets all available Actions of a Device
* `actionsPostForm` - Set an action for the specified device.
* `actionsPostJson` - Set an action for the specified device.
* `actionsPostRaw` - Set an action for the specified device.

### additionalDeviceInformation

* `additionalDeviceInformationGet` - Gets the additional information (e.g. Firmware Version) about a device.

### customDevice

* `customDeviceGet` - Gets all Custom Devices
* `customDevicePostForm` - Creates or updates a Custom Device or updates it's values.
* `customDevicePostJson` - Creates or updates a Custom Device or updates it's values.
* `customDevicePostRaw` - Creates or updates a Custom Device or updates it's values.
* `getApiCustomDeviceId` - Gets a Custom Device by it's ID

### deviceBySerial

* `deviceBySerialGet` - Gets a Device by it's Serial Number. The Serial is the part before the "-".

### devices

* `devicesGet` - Gets all Devices
* `devicesPostForm` - Creates or updates a Device or updates it's values.
* `devicesPostJson` - Creates or updates a Device or updates it's values.
* `devicesPostRaw` - Creates or updates a Device or updates it's values.
* `devicesPut` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `getApiDevicesId` - Gets a Device by it's ID

### devicesByEnergy

* `devicesByEnergyGet` - Gets all Devices for an Energy Type

### devicesBySubType

* `devicesBySubTypeGet` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### fastSendDeviceValues

* `fastSendDeviceValuesGet` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### folder

* `folderGet` - Gets the Values for a folder or a meter

### folderAssign

* `folderAssignPost` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### folderMenu

* `folderMenuGet` - Gets the folder menu items (each item might contain child items)
* `folderMenuPostForm` - Creates and updates the folder menu items
* `folderMenuPostJson` - Creates and updates the folder menu items
* `folderMenuPostRaw` - Creates and updates the folder menu items

### folderSettings

* `folderSettingsDelete` - Deletes a folder
* `folderSettingsGet` - Gets the settings of a folder or meter
* `folderSettingsPostForm` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folderSettingsPostJson` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folderSettingsPostRaw` - Add or edit a folder or a meter. To add a new folder use and empty ID

### health

* `healthGet` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### mBus

* `mBusPostForm` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `mBusPostJson` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `mBusPostRaw` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### meterFolderInformation

* `meterFolderInformationGet` - Beta: Gets the General Information for a Meter or a Folder
* `meterFolderInformationPostForm` - Sets the Name of a Meter or a Folder
* `meterFolderInformationPostJson` - Sets the Name of a Meter or a Folder
* `meterFolderInformationPostRaw` - Sets the Name of a Meter or a Folder

### meterValues

* `meterValuesGet` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

### oAuth

* `oAuthAuthorize`
* `postApiOauthAuthorize`

### pico

* `picoGet` - Gets all pico charging stations for this user

### picoCharging

* `picoChargingGet` - Gets the active charging data of a pico station

### picoChargingHistory

* `picoChargingHistoryGet` - Gets the last charging history for a pico station

### picoEnableFixCableLock

* `picoEnableFixCableLockPost` - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### picoLoadmanagementGroup

* `picoLoadmanagementGroupGet` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `getApiPicoLoadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### picoLoadmanagementSetDynamicCurrent

* `picoLoadmanagementSetDynamicCurrentPost` - Sets the dynamic current of a load management group or a single station.

### picoSettings

* `picoSettingsGet` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### registerForRealtimeApi

* `registerForRealtimeApiDelete` - Deletes a realtime API registration.
* `registerForRealtimeApiGet` - Gets all registrations for the Realtime API.
* `registerForRealtimeApiPostForm` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `registerForRealtimeApiPostJson` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `registerForRealtimeApiPostRaw` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### smartMeDeviceConfiguration

* `smartMeDeviceConfigurationGet` - Gets the configuration of a smart-me device.
* `smartMeDeviceConfigurationPostForm` - Sets the configuration of a smart-me device. The device needs to be online.
* `smartMeDeviceConfigurationPostJson` - Sets the configuration of a smart-me device. The device needs to be online.
* `smartMeDeviceConfigurationPostRaw` - Sets the configuration of a smart-me device. The device needs to be online.

### subUser

* `subUserDelete` - Delete a subuser
* `subUserGet` - Get a sub user. The user must be assigend to the user that makes this call.
* `subUserPostForm` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `subUserPostJson` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `subUserPostRaw` - Creates or updates a subuser.
            To create a new user set no ID (empty)

### user

* `userDelete` - Triggers user account deletion.
* `userGet` - Gets the informations for the user.

### userToFolderAssign

* `userToFolderAssignDelete` - Deletes a user to folder assignement
* `userToFolderAssignPost` - Assign a user to a folder

### values

* `valuesGet` - Gets all (last) values of a device

### valuesInPast

* `valuesInPastGet` - Gets all (last) values of a device
            The first Value found before the given Date is returned.

### valuesInPastMultiple

* `valuesInPastMultipleGet` - Gets multiple values of a device. This call needs a smart-me professional licence.

### virtualBillingMeterActive

* `virtualBillingMeterActiveGet` - Beta: Gets all active virtual meters
* `virtualBillingMeterActivePostForm` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtualBillingMeterActivePostJson` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtualBillingMeterActivePostRaw` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### virtualBillingMeterDeactivate

* `virtualBillingMeterDeactivatePostForm` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtualBillingMeterDeactivatePostJson` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtualBillingMeterDeactivatePostRaw` - Beta: Virtual Meter API: Deactivates a Virtual Meter.

### virtualBillingMeters

* `virtualBillingMetersGet` - Beta: Gets all Meters available to activate as a Virtual Meter.

### virtualMeterCalculateFormula

* `virtualMeterCalculateFormulaGet` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

### virtualTariff

* `virtualTariffGet` - Gets all Virtual Tariffs of a user
* `getApiVirtualTariffId` - Gets all virtual tariffs of a folder

### virtualTariffConsumption

* `virtualTariffConsumptionGet` - Gets the consumption of a folder with a virtuall tariffs.

### virtualTariffsForProperty

* `virtualTariffsForPropertyGet` - Gets all Virtual Tariffs for a property (folder)

### virtualTariffsStatusForProperty

* `virtualTariffsStatusForPropertyGet` - Gets the calculation status for a virtual tariff property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
