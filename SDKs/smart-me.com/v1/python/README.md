# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/smart-me.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AccessTokenToPut(
    card_id=548814,
    user_id=592845,
)
    
res = s.access_token.access_token_put_form(req)

if res.access_token_put_form_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### access_token

* `access_token_put_form` - Creates a Access Token to write on a Card (e.g. NFC)
* `access_token_put_json` - Creates a Access Token to write on a Card (e.g. NFC)
* `access_token_put_raw` - Creates a Access Token to write on a Card (e.g. NFC)

### account

* `account_login`
* `post_api_account_login`

### actions

* `actions_get` - Gets all available Actions of a Device
* `actions_post_form` - Set an action for the specified device.
* `actions_post_json` - Set an action for the specified device.
* `actions_post_raw` - Set an action for the specified device.

### additional_device_information

* `additional_device_information_get` - Gets the additional information (e.g. Firmware Version) about a device.

### custom_device

* `custom_device_get` - Gets all Custom Devices
* `custom_device_post_form` - Creates or updates a Custom Device or updates it's values.
* `custom_device_post_json` - Creates or updates a Custom Device or updates it's values.
* `custom_device_post_raw` - Creates or updates a Custom Device or updates it's values.
* `get_api_custom_device_id_` - Gets a Custom Device by it's ID

### device_by_serial

* `device_by_serial_get` - Gets a Device by it's Serial Number. The Serial is the part before the "-".

### devices

* `devices_get` - Gets all Devices
* `devices_post_form` - Creates or updates a Device or updates it's values.
* `devices_post_json` - Creates or updates a Device or updates it's values.
* `devices_post_raw` - Creates or updates a Device or updates it's values.
* `devices_put` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `get_api_devices_id_` - Gets a Device by it's ID

### devices_by_energy

* `devices_by_energy_get` - Gets all Devices for an Energy Type

### devices_by_sub_type

* `devices_by_sub_type_get` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### fast_send_device_values

* `fast_send_device_values_get` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### folder

* `folder_get` - Gets the Values for a folder or a meter

### folder_assign

* `folder_assign_post` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### folder_menu

* `folder_menu_get` - Gets the folder menu items (each item might contain child items)
* `folder_menu_post_form` - Creates and updates the folder menu items
* `folder_menu_post_json` - Creates and updates the folder menu items
* `folder_menu_post_raw` - Creates and updates the folder menu items

### folder_settings

* `folder_settings_delete` - Deletes a folder
* `folder_settings_get` - Gets the settings of a folder or meter
* `folder_settings_post_form` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folder_settings_post_json` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folder_settings_post_raw` - Add or edit a folder or a meter. To add a new folder use and empty ID

### health

* `health_get` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### m_bus

* `m_bus_post_form` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `m_bus_post_json` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `m_bus_post_raw` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### meter_folder_information

* `meter_folder_information_get` - Beta: Gets the General Information for a Meter or a Folder
* `meter_folder_information_post_form` - Sets the Name of a Meter or a Folder
* `meter_folder_information_post_json` - Sets the Name of a Meter or a Folder
* `meter_folder_information_post_raw` - Sets the Name of a Meter or a Folder

### meter_values

* `meter_values_get` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

### o_auth

* `o_auth_authorize`
* `post_api_oauth_authorize`

### pico

* `pico_get` - Gets all pico charging stations for this user

### pico_charging

* `pico_charging_get` - Gets the active charging data of a pico station

### pico_charging_history

* `pico_charging_history_get` - Gets the last charging history for a pico station

### pico_enable_fix_cable_lock

* `pico_enable_fix_cable_lock_post` - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### pico_loadmanagement_group

* `pico_loadmanagement_group_get` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `get_api_pico_loadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### pico_loadmanagement_set_dynamic_current

* `pico_loadmanagement_set_dynamic_current_post` - Sets the dynamic current of a load management group or a single station.

### pico_settings

* `pico_settings_get` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### register_for_realtime_api

* `register_for_realtime_api_delete` - Deletes a realtime API registration.
* `register_for_realtime_api_get` - Gets all registrations for the Realtime API.
* `register_for_realtime_api_post_form` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `register_for_realtime_api_post_json` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `register_for_realtime_api_post_raw` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### smart_me_device_configuration

* `smart_me_device_configuration_get` - Gets the configuration of a smart-me device.
* `smart_me_device_configuration_post_form` - Sets the configuration of a smart-me device. The device needs to be online.
* `smart_me_device_configuration_post_json` - Sets the configuration of a smart-me device. The device needs to be online.
* `smart_me_device_configuration_post_raw` - Sets the configuration of a smart-me device. The device needs to be online.

### sub_user

* `sub_user_delete` - Delete a subuser
* `sub_user_get` - Get a sub user. The user must be assigend to the user that makes this call.
* `sub_user_post_form` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `sub_user_post_json` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `sub_user_post_raw` - Creates or updates a subuser.
            To create a new user set no ID (empty)

### user

* `user_delete` - Triggers user account deletion.
* `user_get` - Gets the informations for the user.

### user_to_folder_assign

* `user_to_folder_assign_delete` - Deletes a user to folder assignement
* `user_to_folder_assign_post` - Assign a user to a folder

### values

* `values_get` - Gets all (last) values of a device

### values_in_past

* `values_in_past_get` - Gets all (last) values of a device
            The first Value found before the given Date is returned.

### values_in_past_multiple

* `values_in_past_multiple_get` - Gets multiple values of a device. This call needs a smart-me professional licence.

### virtual_billing_meter_active

* `virtual_billing_meter_active_get` - Beta: Gets all active virtual meters
* `virtual_billing_meter_active_post_form` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtual_billing_meter_active_post_json` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtual_billing_meter_active_post_raw` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### virtual_billing_meter_deactivate

* `virtual_billing_meter_deactivate_post_form` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtual_billing_meter_deactivate_post_json` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtual_billing_meter_deactivate_post_raw` - Beta: Virtual Meter API: Deactivates a Virtual Meter.

### virtual_billing_meters

* `virtual_billing_meters_get` - Beta: Gets all Meters available to activate as a Virtual Meter.

### virtual_meter_calculate_formula

* `virtual_meter_calculate_formula_get` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

### virtual_tariff

* `virtual_tariff_get` - Gets all Virtual Tariffs of a user
* `get_api_virtual_tariff_id_` - Gets all virtual tariffs of a folder

### virtual_tariff_consumption

* `virtual_tariff_consumption_get` - Gets the consumption of a folder with a virtuall tariffs.

### virtual_tariffs_for_property

* `virtual_tariffs_for_property_get` - Gets all Virtual Tariffs for a property (folder)

### virtual_tariffs_status_for_property

* `virtual_tariffs_status_for_property_get` - Gets the calculation status for a virtual tariff property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
