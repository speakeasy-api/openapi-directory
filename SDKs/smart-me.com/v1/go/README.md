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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.AccessTokenToPut{
        CardID: 548814,
        UserID: 592845,
    }

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutForm(ctx, req)
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


### AccessToken

* `AccessTokenPutForm` - Creates a Access Token to write on a Card (e.g. NFC)
* `AccessTokenPutJSON` - Creates a Access Token to write on a Card (e.g. NFC)
* `AccessTokenPutRaw` - Creates a Access Token to write on a Card (e.g. NFC)

### Account

* `AccountLogin`
* `PostAPIAccountLogin`

### Actions

* `ActionsGet` - Gets all available Actions of a Device
* `ActionsPostForm` - Set an action for the specified device.
* `ActionsPostJSON` - Set an action for the specified device.
* `ActionsPostRaw` - Set an action for the specified device.

### AdditionalDeviceInformation

* `AdditionalDeviceInformationGet` - Gets the additional information (e.g. Firmware Version) about a device.

### CustomDevice

* `CustomDeviceGet` - Gets all Custom Devices
* `CustomDevicePostForm` - Creates or updates a Custom Device or updates it's values.
* `CustomDevicePostJSON` - Creates or updates a Custom Device or updates it's values.
* `CustomDevicePostRaw` - Creates or updates a Custom Device or updates it's values.
* `GetAPICustomDeviceID` - Gets a Custom Device by it's ID

### DeviceBySerial

* `DeviceBySerialGet` - Gets a Device by it's Serial Number. The Serial is the part before the "-".

### Devices

* `DevicesGet` - Gets all Devices
* `DevicesPostForm` - Creates or updates a Device or updates it's values.
* `DevicesPostJSON` - Creates or updates a Device or updates it's values.
* `DevicesPostRaw` - Creates or updates a Device or updates it's values.
* `DevicesPut` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `GetAPIDevicesID` - Gets a Device by it's ID

### DevicesByEnergy

* `DevicesByEnergyGet` - Gets all Devices for an Energy Type

### DevicesBySubType

* `DevicesBySubTypeGet` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### FastSendDeviceValues

* `FastSendDeviceValuesGet` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### Folder

* `FolderGet` - Gets the Values for a folder or a meter

### FolderAssign

* `FolderAssignPost` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### FolderMenu

* `FolderMenuGet` - Gets the folder menu items (each item might contain child items)
* `FolderMenuPostForm` - Creates and updates the folder menu items
* `FolderMenuPostJSON` - Creates and updates the folder menu items
* `FolderMenuPostRaw` - Creates and updates the folder menu items

### FolderSettings

* `FolderSettingsDelete` - Deletes a folder
* `FolderSettingsGet` - Gets the settings of a folder or meter
* `FolderSettingsPostForm` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `FolderSettingsPostJSON` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `FolderSettingsPostRaw` - Add or edit a folder or a meter. To add a new folder use and empty ID

### Health

* `HealthGet` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### MBus

* `MBusPostForm` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `MBusPostJSON` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `MBusPostRaw` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### MeterFolderInformation

* `MeterFolderInformationGet` - Beta: Gets the General Information for a Meter or a Folder
* `MeterFolderInformationPostForm` - Sets the Name of a Meter or a Folder
* `MeterFolderInformationPostJSON` - Sets the Name of a Meter or a Folder
* `MeterFolderInformationPostRaw` - Sets the Name of a Meter or a Folder

### MeterValues

* `MeterValuesGet` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

### OAuth

* `OAuthAuthorize`
* `PostAPIOauthAuthorize`

### Pico

* `PicoGet` - Gets all pico charging stations for this user

### PicoCharging

* `PicoChargingGet` - Gets the active charging data of a pico station

### PicoChargingHistory

* `PicoChargingHistoryGet` - Gets the last charging history for a pico station

### PicoEnableFixCableLock

* `PicoEnableFixCableLockPost` - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### PicoLoadmanagementGroup

* `PicoLoadmanagementGroupGet` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `GetAPIPicoLoadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### PicoLoadmanagementSetDynamicCurrent

* `PicoLoadmanagementSetDynamicCurrentPost` - Sets the dynamic current of a load management group or a single station.

### PicoSettings

* `PicoSettingsGet` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### RegisterForRealtimeAPI

* `RegisterForRealtimeAPIDelete` - Deletes a realtime API registration.
* `RegisterForRealtimeAPIGet` - Gets all registrations for the Realtime API.
* `RegisterForRealtimeAPIPostForm` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `RegisterForRealtimeAPIPostJSON` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `RegisterForRealtimeAPIPostRaw` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### SmartMeDeviceConfiguration

* `SmartMeDeviceConfigurationGet` - Gets the configuration of a smart-me device.
* `SmartMeDeviceConfigurationPostForm` - Sets the configuration of a smart-me device. The device needs to be online.
* `SmartMeDeviceConfigurationPostJSON` - Sets the configuration of a smart-me device. The device needs to be online.
* `SmartMeDeviceConfigurationPostRaw` - Sets the configuration of a smart-me device. The device needs to be online.

### SubUser

* `SubUserDelete` - Delete a subuser
* `SubUserGet` - Get a sub user. The user must be assigend to the user that makes this call.
* `SubUserPostForm` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `SubUserPostJSON` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `SubUserPostRaw` - Creates or updates a subuser.
            To create a new user set no ID (empty)

### User

* `UserDelete` - Triggers user account deletion.
* `UserGet` - Gets the informations for the user.

### UserToFolderAssign

* `UserToFolderAssignDelete` - Deletes a user to folder assignement
* `UserToFolderAssignPost` - Assign a user to a folder

### Values

* `ValuesGet` - Gets all (last) values of a device

### ValuesInPast

* `ValuesInPastGet` - Gets all (last) values of a device
            The first Value found before the given Date is returned.

### ValuesInPastMultiple

* `ValuesInPastMultipleGet` - Gets multiple values of a device. This call needs a smart-me professional licence.

### VirtualBillingMeterActive

* `VirtualBillingMeterActiveGet` - Beta: Gets all active virtual meters
* `VirtualBillingMeterActivePostForm` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `VirtualBillingMeterActivePostJSON` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `VirtualBillingMeterActivePostRaw` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### VirtualBillingMeterDeactivate

* `VirtualBillingMeterDeactivatePostForm` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `VirtualBillingMeterDeactivatePostJSON` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `VirtualBillingMeterDeactivatePostRaw` - Beta: Virtual Meter API: Deactivates a Virtual Meter.

### VirtualBillingMeters

* `VirtualBillingMetersGet` - Beta: Gets all Meters available to activate as a Virtual Meter.

### VirtualMeterCalculateFormula

* `VirtualMeterCalculateFormulaGet` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

### VirtualTariff

* `VirtualTariffGet` - Gets all Virtual Tariffs of a user
* `GetAPIVirtualTariffID` - Gets all virtual tariffs of a folder

### VirtualTariffConsumption

* `VirtualTariffConsumptionGet` - Gets the consumption of a folder with a virtuall tariffs.

### VirtualTariffsForProperty

* `VirtualTariffsForPropertyGet` - Gets all Virtual Tariffs for a property (folder)

### VirtualTariffsStatusForProperty

* `VirtualTariffsStatusForPropertyGet` - Gets the calculation status for a virtual tariff property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
