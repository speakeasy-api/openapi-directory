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
                cardId = 548814L;
                userId = 592845L;
            }};            

            AccessTokenPutFormResponse res = sdk.accessToken.accessTokenPutForm(req);

            if (res.accessTokenPutForm200ApplicationJSONString != null) {
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


### [accessToken](docs/accesstoken/README.md)

* [accessTokenPutForm](docs/accesstoken/README.md#accesstokenputform) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutJson](docs/accesstoken/README.md#accesstokenputjson) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutRaw](docs/accesstoken/README.md#accesstokenputraw) - Creates a Access Token to write on a Card (e.g. NFC)

### [account](docs/account/README.md)

* [accountLogin](docs/account/README.md#accountlogin)
* [postApiAccountLogin](docs/account/README.md#postapiaccountlogin)

### [actions](docs/actions/README.md)

* [actionsGet](docs/actions/README.md#actionsget) - Gets all available Actions of a Device
* [actionsPostForm](docs/actions/README.md#actionspostform) - Set an action for the specified device.
* [actionsPostJson](docs/actions/README.md#actionspostjson) - Set an action for the specified device.
* [actionsPostRaw](docs/actions/README.md#actionspostraw) - Set an action for the specified device.

### [additionalDeviceInformation](docs/additionaldeviceinformation/README.md)

* [additionalDeviceInformationGet](docs/additionaldeviceinformation/README.md#additionaldeviceinformationget) - Gets the additional information (e.g. Firmware Version) about a device.

### [customDevice](docs/customdevice/README.md)

* [customDeviceGet](docs/customdevice/README.md#customdeviceget) - Gets all Custom Devices
* [customDevicePostForm](docs/customdevice/README.md#customdevicepostform) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostJson](docs/customdevice/README.md#customdevicepostjson) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostRaw](docs/customdevice/README.md#customdevicepostraw) - Creates or updates a Custom Device or updates it's values.
* [getApiCustomDeviceId](docs/customdevice/README.md#getapicustomdeviceid) - Gets a Custom Device by it's ID

### [deviceBySerial](docs/devicebyserial/README.md)

* [deviceBySerialGet](docs/devicebyserial/README.md#devicebyserialget) - Gets a Device by it's Serial Number. The Serial is the part before the "-".

### [devices](docs/devices/README.md)

* [devicesGet](docs/devices/README.md#devicesget) - Gets all Devices
* [devicesPostForm](docs/devices/README.md#devicespostform) - Creates or updates a Device or updates it's values.
* [devicesPostJson](docs/devices/README.md#devicespostjson) - Creates or updates a Device or updates it's values.
* [devicesPostRaw](docs/devices/README.md#devicespostraw) - Creates or updates a Device or updates it's values.
* [devicesPut](docs/devices/README.md#devicesput) - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* [getApiDevicesId](docs/devices/README.md#getapidevicesid) - Gets a Device by it's ID

### [devicesByEnergy](docs/devicesbyenergy/README.md)

* [devicesByEnergyGet](docs/devicesbyenergy/README.md#devicesbyenergyget) - Gets all Devices for an Energy Type

### [devicesBySubType](docs/devicesbysubtype/README.md)

* [devicesBySubTypeGet](docs/devicesbysubtype/README.md#devicesbysubtypeget) - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### [fastSendDeviceValues](docs/fastsenddevicevalues/README.md)

* [fastSendDeviceValuesGet](docs/fastsenddevicevalues/README.md#fastsenddevicevaluesget) - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### [folder](docs/folder/README.md)

* [folderGet](docs/folder/README.md#folderget) - Gets the Values for a folder or a meter

### [folderAssign](docs/folderassign/README.md)

* [folderAssignPost](docs/folderassign/README.md#folderassignpost) - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### [folderMenu](docs/foldermenu/README.md)

* [folderMenuGet](docs/foldermenu/README.md#foldermenuget) - Gets the folder menu items (each item might contain child items)
* [folderMenuPostForm](docs/foldermenu/README.md#foldermenupostform) - Creates and updates the folder menu items
* [folderMenuPostJson](docs/foldermenu/README.md#foldermenupostjson) - Creates and updates the folder menu items
* [folderMenuPostRaw](docs/foldermenu/README.md#foldermenupostraw) - Creates and updates the folder menu items

### [folderSettings](docs/foldersettings/README.md)

* [folderSettingsDelete](docs/foldersettings/README.md#foldersettingsdelete) - Deletes a folder
* [folderSettingsGet](docs/foldersettings/README.md#foldersettingsget) - Gets the settings of a folder or meter
* [folderSettingsPostForm](docs/foldersettings/README.md#foldersettingspostform) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostJson](docs/foldersettings/README.md#foldersettingspostjson) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostRaw](docs/foldersettings/README.md#foldersettingspostraw) - Add or edit a folder or a meter. To add a new folder use and empty ID

### [health](docs/health/README.md)

* [healthGet](docs/health/README.md#healthget) - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### [mBus](docs/mbus/README.md)

* [mBusPostForm](docs/mbus/README.md#mbuspostform) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostJson](docs/mbus/README.md#mbuspostjson) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostRaw](docs/mbus/README.md#mbuspostraw) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### [meterFolderInformation](docs/meterfolderinformation/README.md)

* [meterFolderInformationGet](docs/meterfolderinformation/README.md#meterfolderinformationget) - Beta: Gets the General Information for a Meter or a Folder
* [meterFolderInformationPostForm](docs/meterfolderinformation/README.md#meterfolderinformationpostform) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostJson](docs/meterfolderinformation/README.md#meterfolderinformationpostjson) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostRaw](docs/meterfolderinformation/README.md#meterfolderinformationpostraw) - Sets the Name of a Meter or a Folder

### [meterValues](docs/metervalues/README.md)

* [meterValuesGet](docs/metervalues/README.md#metervaluesget) - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

### [oAuth](docs/oauth/README.md)

* [oAuthAuthorize](docs/oauth/README.md#oauthauthorize)
* [postApiOauthAuthorize](docs/oauth/README.md#postapioauthauthorize)

### [pico](docs/pico/README.md)

* [picoGet](docs/pico/README.md#picoget) - Gets all pico charging stations for this user

### [picoCharging](docs/picocharging/README.md)

* [picoChargingGet](docs/picocharging/README.md#picochargingget) - Gets the active charging data of a pico station

### [picoChargingHistory](docs/picocharginghistory/README.md)

* [picoChargingHistoryGet](docs/picocharginghistory/README.md#picocharginghistoryget) - Gets the last charging history for a pico station

### [picoEnableFixCableLock](docs/picoenablefixcablelock/README.md)

* [picoEnableFixCableLockPost](docs/picoenablefixcablelock/README.md#picoenablefixcablelockpost) - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### [picoLoadmanagementGroup](docs/picoloadmanagementgroup/README.md)

* [picoLoadmanagementGroupGet](docs/picoloadmanagementgroup/README.md#picoloadmanagementgroupget) - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* [getApiPicoLoadmanagementgroup](docs/picoloadmanagementgroup/README.md#getapipicoloadmanagementgroup) - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### [picoLoadmanagementSetDynamicCurrent](docs/picoloadmanagementsetdynamiccurrent/README.md)

* [picoLoadmanagementSetDynamicCurrentPost](docs/picoloadmanagementsetdynamiccurrent/README.md#picoloadmanagementsetdynamiccurrentpost) - Sets the dynamic current of a load management group or a single station.

### [picoSettings](docs/picosettings/README.md)

* [picoSettingsGet](docs/picosettings/README.md#picosettingsget) - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### [registerForRealtimeApi](docs/registerforrealtimeapi/README.md)

* [registerForRealtimeApiDelete](docs/registerforrealtimeapi/README.md#registerforrealtimeapidelete) - Deletes a realtime API registration.
* [registerForRealtimeApiGet](docs/registerforrealtimeapi/README.md#registerforrealtimeapiget) - Gets all registrations for the Realtime API.
* [registerForRealtimeApiPostForm](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostform) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostJson](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostjson) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostRaw](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostraw) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### [smartMeDeviceConfiguration](docs/smartmedeviceconfiguration/README.md)

* [smartMeDeviceConfigurationGet](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationget) - Gets the configuration of a smart-me device.
* [smartMeDeviceConfigurationPostForm](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostform) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostJson](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostjson) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostRaw](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostraw) - Sets the configuration of a smart-me device. The device needs to be online.

### [subUser](docs/subuser/README.md)

* [subUserDelete](docs/subuser/README.md#subuserdelete) - Delete a subuser
* [subUserGet](docs/subuser/README.md#subuserget) - Get a sub user. The user must be assigend to the user that makes this call.
* [subUserPostForm](docs/subuser/README.md#subuserpostform) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostJson](docs/subuser/README.md#subuserpostjson) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostRaw](docs/subuser/README.md#subuserpostraw) - Creates or updates a subuser.
            To create a new user set no ID (empty)

### [user](docs/user/README.md)

* [userDelete](docs/user/README.md#userdelete) - Triggers user account deletion.
* [userGet](docs/user/README.md#userget) - Gets the informations for the user.

### [userToFolderAssign](docs/usertofolderassign/README.md)

* [userToFolderAssignDelete](docs/usertofolderassign/README.md#usertofolderassigndelete) - Deletes a user to folder assignement
* [userToFolderAssignPost](docs/usertofolderassign/README.md#usertofolderassignpost) - Assign a user to a folder

### [values](docs/values/README.md)

* [valuesGet](docs/values/README.md#valuesget) - Gets all (last) values of a device

### [valuesInPast](docs/valuesinpast/README.md)

* [valuesInPastGet](docs/valuesinpast/README.md#valuesinpastget) - Gets all (last) values of a device
            The first Value found before the given Date is returned.

### [valuesInPastMultiple](docs/valuesinpastmultiple/README.md)

* [valuesInPastMultipleGet](docs/valuesinpastmultiple/README.md#valuesinpastmultipleget) - Gets multiple values of a device. This call needs a smart-me professional licence.

### [virtualBillingMeterActive](docs/virtualbillingmeteractive/README.md)

* [virtualBillingMeterActiveGet](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractiveget) - Beta: Gets all active virtual meters
* [virtualBillingMeterActivePostForm](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostform) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostJson](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostjson) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostRaw](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostraw) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### [virtualBillingMeterDeactivate](docs/virtualbillingmeterdeactivate/README.md)

* [virtualBillingMeterDeactivatePostForm](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostform) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostJson](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostjson) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostRaw](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostraw) - Beta: Virtual Meter API: Deactivates a Virtual Meter.

### [virtualBillingMeters](docs/virtualbillingmeters/README.md)

* [virtualBillingMetersGet](docs/virtualbillingmeters/README.md#virtualbillingmetersget) - Beta: Gets all Meters available to activate as a Virtual Meter.

### [virtualMeterCalculateFormula](docs/virtualmetercalculateformula/README.md)

* [virtualMeterCalculateFormulaGet](docs/virtualmetercalculateformula/README.md#virtualmetercalculateformulaget) - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

### [virtualTariff](docs/virtualtariff/README.md)

* [virtualTariffGet](docs/virtualtariff/README.md#virtualtariffget) - Gets all Virtual Tariffs of a user
* [getApiVirtualTariffId](docs/virtualtariff/README.md#getapivirtualtariffid) - Gets all virtual tariffs of a folder

### [virtualTariffConsumption](docs/virtualtariffconsumption/README.md)

* [virtualTariffConsumptionGet](docs/virtualtariffconsumption/README.md#virtualtariffconsumptionget) - Gets the consumption of a folder with a virtuall tariffs.

### [virtualTariffsForProperty](docs/virtualtariffsforproperty/README.md)

* [virtualTariffsForPropertyGet](docs/virtualtariffsforproperty/README.md#virtualtariffsforpropertyget) - Gets all Virtual Tariffs for a property (folder)

### [virtualTariffsStatusForProperty](docs/virtualtariffsstatusforproperty/README.md)

* [virtualTariffsStatusForPropertyGet](docs/virtualtariffsstatusforproperty/README.md#virtualtariffsstatusforpropertyget) - Gets the calculation status for a virtual tariff property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
