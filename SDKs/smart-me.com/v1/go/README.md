# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/smart-me.com/v1/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutForm(ctx, shared.AccessTokenToPut{
        CardID: sdk.Int64(548814),
        UserID: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutForm200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccessToken](docs/accesstoken/README.md)

* [AccessTokenPutForm](docs/accesstoken/README.md#accesstokenputform) - Creates a Access Token to write on a Card (e.g. NFC)
* [AccessTokenPutJSON](docs/accesstoken/README.md#accesstokenputjson) - Creates a Access Token to write on a Card (e.g. NFC)
* [AccessTokenPutRaw](docs/accesstoken/README.md#accesstokenputraw) - Creates a Access Token to write on a Card (e.g. NFC)

### [Account](docs/account/README.md)

* [AccountLogin](docs/account/README.md#accountlogin)
* [PostAPIAccountLogin](docs/account/README.md#postapiaccountlogin)

### [Actions](docs/actions/README.md)

* [ActionsGet](docs/actions/README.md#actionsget) - Gets all available Actions of a Device
* [ActionsPostForm](docs/actions/README.md#actionspostform) - Set an action for the specified device.
* [ActionsPostJSON](docs/actions/README.md#actionspostjson) - Set an action for the specified device.
* [ActionsPostRaw](docs/actions/README.md#actionspostraw) - Set an action for the specified device.

### [AdditionalDeviceInformation](docs/additionaldeviceinformation/README.md)

* [AdditionalDeviceInformationGet](docs/additionaldeviceinformation/README.md#additionaldeviceinformationget) - Gets the additional information (e.g. Firmware Version) about a device.

### [CustomDevice](docs/customdevice/README.md)

* [CustomDeviceGet](docs/customdevice/README.md#customdeviceget) - Gets all Custom Devices
* [CustomDevicePostForm](docs/customdevice/README.md#customdevicepostform) - Creates or updates a Custom Device or updates it's values.
* [CustomDevicePostJSON](docs/customdevice/README.md#customdevicepostjson) - Creates or updates a Custom Device or updates it's values.
* [CustomDevicePostRaw](docs/customdevice/README.md#customdevicepostraw) - Creates or updates a Custom Device or updates it's values.
* [GetAPICustomDeviceID](docs/customdevice/README.md#getapicustomdeviceid) - Gets a Custom Device by it's ID

### [DeviceBySerial](docs/devicebyserial/README.md)

* [DeviceBySerialGet](docs/devicebyserial/README.md#devicebyserialget) - Gets a Device by it's Serial Number. The Serial is the part before the "-".

### [Devices](docs/devices/README.md)

* [DevicesGet](docs/devices/README.md#devicesget) - Gets all Devices
* [DevicesPostForm](docs/devices/README.md#devicespostform) - Creates or updates a Device or updates it's values.
* [DevicesPostJSON](docs/devices/README.md#devicespostjson) - Creates or updates a Device or updates it's values.
* [DevicesPostRaw](docs/devices/README.md#devicespostraw) - Creates or updates a Device or updates it's values.
* [DevicesPut](docs/devices/README.md#devicesput) - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* [GetAPIDevicesID](docs/devices/README.md#getapidevicesid) - Gets a Device by it's ID

### [DevicesByEnergy](docs/devicesbyenergy/README.md)

* [DevicesByEnergyGet](docs/devicesbyenergy/README.md#devicesbyenergyget) - Gets all Devices for an Energy Type

### [DevicesBySubType](docs/devicesbysubtype/README.md)

* [DevicesBySubTypeGet](docs/devicesbysubtype/README.md#devicesbysubtypeget) - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### [FastSendDeviceValues](docs/fastsenddevicevalues/README.md)

* [FastSendDeviceValuesGet](docs/fastsenddevicevalues/README.md#fastsenddevicevaluesget) - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### [Folder](docs/folder/README.md)

* [FolderGet](docs/folder/README.md#folderget) - Gets the Values for a folder or a meter

### [FolderAssign](docs/folderassign/README.md)

* [FolderAssignPost](docs/folderassign/README.md#folderassignpost) - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### [FolderMenu](docs/foldermenu/README.md)

* [FolderMenuGet](docs/foldermenu/README.md#foldermenuget) - Gets the folder menu items (each item might contain child items)
* [FolderMenuPostForm](docs/foldermenu/README.md#foldermenupostform) - Creates and updates the folder menu items
* [FolderMenuPostJSON](docs/foldermenu/README.md#foldermenupostjson) - Creates and updates the folder menu items
* [FolderMenuPostRaw](docs/foldermenu/README.md#foldermenupostraw) - Creates and updates the folder menu items

### [FolderSettings](docs/foldersettings/README.md)

* [FolderSettingsDelete](docs/foldersettings/README.md#foldersettingsdelete) - Deletes a folder
* [FolderSettingsGet](docs/foldersettings/README.md#foldersettingsget) - Gets the settings of a folder or meter
* [FolderSettingsPostForm](docs/foldersettings/README.md#foldersettingspostform) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [FolderSettingsPostJSON](docs/foldersettings/README.md#foldersettingspostjson) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [FolderSettingsPostRaw](docs/foldersettings/README.md#foldersettingspostraw) - Add or edit a folder or a meter. To add a new folder use and empty ID

### [Health](docs/health/README.md)

* [HealthGet](docs/health/README.md#healthget) - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### [MBus](docs/mbus/README.md)

* [MBusPostForm](docs/mbus/README.md#mbuspostform) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [MBusPostJSON](docs/mbus/README.md#mbuspostjson) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [MBusPostRaw](docs/mbus/README.md#mbuspostraw) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### [MeterFolderInformation](docs/meterfolderinformation/README.md)

* [MeterFolderInformationGet](docs/meterfolderinformation/README.md#meterfolderinformationget) - Beta: Gets the General Information for a Meter or a Folder
* [MeterFolderInformationPostForm](docs/meterfolderinformation/README.md#meterfolderinformationpostform) - Sets the Name of a Meter or a Folder
* [MeterFolderInformationPostJSON](docs/meterfolderinformation/README.md#meterfolderinformationpostjson) - Sets the Name of a Meter or a Folder
* [MeterFolderInformationPostRaw](docs/meterfolderinformation/README.md#meterfolderinformationpostraw) - Sets the Name of a Meter or a Folder

### [MeterValues](docs/metervalues/README.md)

* [MeterValuesGet](docs/metervalues/README.md#metervaluesget) - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

### [OAuth](docs/oauth/README.md)

* [OAuthAuthorize](docs/oauth/README.md#oauthauthorize)
* [PostAPIOauthAuthorize](docs/oauth/README.md#postapioauthauthorize)

### [Pico](docs/pico/README.md)

* [PicoGet](docs/pico/README.md#picoget) - Gets all pico charging stations for this user

### [PicoCharging](docs/picocharging/README.md)

* [PicoChargingGet](docs/picocharging/README.md#picochargingget) - Gets the active charging data of a pico station

### [PicoChargingHistory](docs/picocharginghistory/README.md)

* [PicoChargingHistoryGet](docs/picocharginghistory/README.md#picocharginghistoryget) - Gets the last charging history for a pico station

### [PicoEnableFixCableLock](docs/picoenablefixcablelock/README.md)

* [PicoEnableFixCableLockPost](docs/picoenablefixcablelock/README.md#picoenablefixcablelockpost) - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### [PicoLoadmanagementGroup](docs/picoloadmanagementgroup/README.md)

* [PicoLoadmanagementGroupGet](docs/picoloadmanagementgroup/README.md#picoloadmanagementgroupget) - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* [GetAPIPicoLoadmanagementgroup](docs/picoloadmanagementgroup/README.md#getapipicoloadmanagementgroup) - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### [PicoLoadmanagementSetDynamicCurrent](docs/picoloadmanagementsetdynamiccurrent/README.md)

* [PicoLoadmanagementSetDynamicCurrentPost](docs/picoloadmanagementsetdynamiccurrent/README.md#picoloadmanagementsetdynamiccurrentpost) - Sets the dynamic current of a load management group or a single station.

### [PicoSettings](docs/picosettings/README.md)

* [PicoSettingsGet](docs/picosettings/README.md#picosettingsget) - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### [RegisterForRealtimeAPI](docs/registerforrealtimeapi/README.md)

* [RegisterForRealtimeAPIDelete](docs/registerforrealtimeapi/README.md#registerforrealtimeapidelete) - Deletes a realtime API registration.
* [RegisterForRealtimeAPIGet](docs/registerforrealtimeapi/README.md#registerforrealtimeapiget) - Gets all registrations for the Realtime API.
* [RegisterForRealtimeAPIPostForm](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostform) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [RegisterForRealtimeAPIPostJSON](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostjson) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [RegisterForRealtimeAPIPostRaw](docs/registerforrealtimeapi/README.md#registerforrealtimeapipostraw) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### [SmartMeDeviceConfiguration](docs/smartmedeviceconfiguration/README.md)

* [SmartMeDeviceConfigurationGet](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationget) - Gets the configuration of a smart-me device.
* [SmartMeDeviceConfigurationPostForm](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostform) - Sets the configuration of a smart-me device. The device needs to be online.
* [SmartMeDeviceConfigurationPostJSON](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostjson) - Sets the configuration of a smart-me device. The device needs to be online.
* [SmartMeDeviceConfigurationPostRaw](docs/smartmedeviceconfiguration/README.md#smartmedeviceconfigurationpostraw) - Sets the configuration of a smart-me device. The device needs to be online.

### [SubUser](docs/subuser/README.md)

* [SubUserDelete](docs/subuser/README.md#subuserdelete) - Delete a subuser
* [SubUserGet](docs/subuser/README.md#subuserget) - Get a sub user. The user must be assigend to the user that makes this call.
* [SubUserPostForm](docs/subuser/README.md#subuserpostform) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [SubUserPostJSON](docs/subuser/README.md#subuserpostjson) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [SubUserPostRaw](docs/subuser/README.md#subuserpostraw) - Creates or updates a subuser.
            To create a new user set no ID (empty)

### [User](docs/user/README.md)

* [UserDelete](docs/user/README.md#userdelete) - Triggers user account deletion.
* [UserGet](docs/user/README.md#userget) - Gets the informations for the user.

### [UserToFolderAssign](docs/usertofolderassign/README.md)

* [UserToFolderAssignDelete](docs/usertofolderassign/README.md#usertofolderassigndelete) - Deletes a user to folder assignement
* [UserToFolderAssignPost](docs/usertofolderassign/README.md#usertofolderassignpost) - Assign a user to a folder

### [Values](docs/values/README.md)

* [ValuesGet](docs/values/README.md#valuesget) - Gets all (last) values of a device

### [ValuesInPast](docs/valuesinpast/README.md)

* [ValuesInPastGet](docs/valuesinpast/README.md#valuesinpastget) - Gets all (last) values of a device
            The first Value found before the given Date is returned.

### [ValuesInPastMultiple](docs/valuesinpastmultiple/README.md)

* [ValuesInPastMultipleGet](docs/valuesinpastmultiple/README.md#valuesinpastmultipleget) - Gets multiple values of a device. This call needs a smart-me professional licence.

### [VirtualBillingMeterActive](docs/virtualbillingmeteractive/README.md)

* [VirtualBillingMeterActiveGet](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractiveget) - Beta: Gets all active virtual meters
* [VirtualBillingMeterActivePostForm](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostform) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [VirtualBillingMeterActivePostJSON](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostjson) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [VirtualBillingMeterActivePostRaw](docs/virtualbillingmeteractive/README.md#virtualbillingmeteractivepostraw) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### [VirtualBillingMeterDeactivate](docs/virtualbillingmeterdeactivate/README.md)

* [VirtualBillingMeterDeactivatePostForm](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostform) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [VirtualBillingMeterDeactivatePostJSON](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostjson) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [VirtualBillingMeterDeactivatePostRaw](docs/virtualbillingmeterdeactivate/README.md#virtualbillingmeterdeactivatepostraw) - Beta: Virtual Meter API: Deactivates a Virtual Meter.

### [VirtualBillingMeters](docs/virtualbillingmeters/README.md)

* [VirtualBillingMetersGet](docs/virtualbillingmeters/README.md#virtualbillingmetersget) - Beta: Gets all Meters available to activate as a Virtual Meter.

### [VirtualMeterCalculateFormula](docs/virtualmetercalculateformula/README.md)

* [VirtualMeterCalculateFormulaGet](docs/virtualmetercalculateformula/README.md#virtualmetercalculateformulaget) - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

### [VirtualTariff](docs/virtualtariff/README.md)

* [VirtualTariffGet](docs/virtualtariff/README.md#virtualtariffget) - Gets all Virtual Tariffs of a user
* [GetAPIVirtualTariffID](docs/virtualtariff/README.md#getapivirtualtariffid) - Gets all virtual tariffs of a folder

### [VirtualTariffConsumption](docs/virtualtariffconsumption/README.md)

* [VirtualTariffConsumptionGet](docs/virtualtariffconsumption/README.md#virtualtariffconsumptionget) - Gets the consumption of a folder with a virtuall tariffs.

### [VirtualTariffsForProperty](docs/virtualtariffsforproperty/README.md)

* [VirtualTariffsForPropertyGet](docs/virtualtariffsforproperty/README.md#virtualtariffsforpropertyget) - Gets all Virtual Tariffs for a property (folder)

### [VirtualTariffsStatusForProperty](docs/virtualtariffsstatusforproperty/README.md)

* [VirtualTariffsStatusForPropertyGet](docs/virtualtariffsstatusforproperty/README.md#virtualtariffsstatusforpropertyget) - Gets the calculation status for a virtual tariff property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
