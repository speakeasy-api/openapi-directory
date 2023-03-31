# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/netatmo.net/1.1.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DevicelistRequest(
    app_type="app_station",
    device_id="provident",
    get_favorites=False,
)
    
res = s.deprecated.devicelist(req, operations.DevicelistSecurity(
    code_oauth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.na_device_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### deprecated

* `devicelist` - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.

* `getthermstate` - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.
* `getuser` - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


### healthyhomecoach

* `gethomecoachsdata` - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### partner

* `getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `partnerdevices` - The method partnerdevices returns the list of device_id to which your partner application has access to.

### public

* `getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `getpublicdata` - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### station

* `getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `getstationsdata` - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### thermostat

* `createnewschedule` - The method createnewschedule creates a new schedule stored in the backup list.
* `getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `getthermostatsdata` - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* `setthermpoint` - The method setthermpoint changes the Thermostat manual temperature setpoint.
* `switchschedule` - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* `syncschedule` - The method syncschedule changes the Thermostat weekly schedule.

### welcome

* `addwebhook` - Links a callback url to a user.

* `dropwebhook` - Dissociates a webhook from a user.

* `getcamerapicture` - Returns the snapshot associated to an event.

* `geteventsuntil` - Returns the snapshot associated to an event.

* `gethomedata` - Returns information about users homes and cameras.

* `getlasteventof` - Returns most recent events.

* `getnextevents` - Returns previous events.

* `setpersonsaway` - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* `setpersonshome` - Sets a person as 'At home'.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
