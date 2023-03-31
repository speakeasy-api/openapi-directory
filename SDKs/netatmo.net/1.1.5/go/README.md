# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/netatmo.net/1.1.5/go
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

    req := operations.DevicelistRequest{
        AppType: "app_station",
        DeviceID: "provident",
        GetFavorites: false,
    }

    ctx := context.Background()
    res, err := s.Deprecated.Devicelist(ctx, req, operations.DevicelistSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NADeviceListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Deprecated

* `Devicelist` - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.

* `Getthermstate` - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.
* `Getuser` - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


### Healthyhomecoach

* `Gethomecoachsdata` - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### Partner

* `Getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `Partnerdevices` - The method partnerdevices returns the list of device_id to which your partner application has access to.

### Public

* `Getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `Getpublicdata` - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### Station

* `Getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `Getstationsdata` - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### Thermostat

* `Createnewschedule` - The method createnewschedule creates a new schedule stored in the backup list.
* `Getmeasure` - The method getmeasure returns the measurements of a device or a module.

* `Getthermostatsdata` - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* `Setthermpoint` - The method setthermpoint changes the Thermostat manual temperature setpoint.
* `Switchschedule` - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* `Syncschedule` - The method syncschedule changes the Thermostat weekly schedule.

### Welcome

* `Addwebhook` - Links a callback url to a user.

* `Dropwebhook` - Dissociates a webhook from a user.

* `Getcamerapicture` - Returns the snapshot associated to an event.

* `Geteventsuntil` - Returns the snapshot associated to an event.

* `Gethomedata` - Returns information about users homes and cameras.

* `Getlasteventof` - Returns most recent events.

* `Getnextevents` - Returns previous events.

* `Setpersonsaway` - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* `Setpersonshome` - Sets a person as 'At home'.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
