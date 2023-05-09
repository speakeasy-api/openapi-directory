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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deprecated.Devicelist(ctx, operations.DevicelistRequest{
        AppType: operations.DevicelistAppTypeEnumAppStation.ToPointer(),
        DeviceID: sdk.String("provident"),
        GetFavorites: sdk.Bool(false),
    }, operations.DevicelistSecurity{
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


### [Deprecated](docs/deprecated/README.md)

* [~~Devicelist~~](docs/deprecated/README.md#devicelist) - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
 :warning: **Deprecated**
* [~~Getthermstate~~](docs/deprecated/README.md#getthermstate) - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint. :warning: **Deprecated**
* [~~Getuser~~](docs/deprecated/README.md#getuser) - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
 :warning: **Deprecated**

### [Healthyhomecoach](docs/healthyhomecoach/README.md)

* [Gethomecoachsdata](docs/healthyhomecoach/README.md#gethomecoachsdata) - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### [Partner](docs/partner/README.md)

* [Getmeasure](docs/partner/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Partnerdevices](docs/partner/README.md#partnerdevices) - The method partnerdevices returns the list of device_id to which your partner application has access to.

### [Public](docs/public/README.md)

* [Getmeasure](docs/public/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getpublicdata](docs/public/README.md#getpublicdata) - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### [Station](docs/station/README.md)

* [Getmeasure](docs/station/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getstationsdata](docs/station/README.md#getstationsdata) - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### [Thermostat](docs/thermostat/README.md)

* [Createnewschedule](docs/thermostat/README.md#createnewschedule) - The method createnewschedule creates a new schedule stored in the backup list.
* [Getmeasure](docs/thermostat/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getthermostatsdata](docs/thermostat/README.md#getthermostatsdata) - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* [Setthermpoint](docs/thermostat/README.md#setthermpoint) - The method setthermpoint changes the Thermostat manual temperature setpoint.
* [Switchschedule](docs/thermostat/README.md#switchschedule) - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* [Syncschedule](docs/thermostat/README.md#syncschedule) - The method syncschedule changes the Thermostat weekly schedule.

### [Welcome](docs/welcome/README.md)

* [Addwebhook](docs/welcome/README.md#addwebhook) - Links a callback url to a user.

* [Dropwebhook](docs/welcome/README.md#dropwebhook) - Dissociates a webhook from a user.

* [Getcamerapicture](docs/welcome/README.md#getcamerapicture) - Returns the snapshot associated to an event.

* [Geteventsuntil](docs/welcome/README.md#geteventsuntil) - Returns the snapshot associated to an event.

* [Gethomedata](docs/welcome/README.md#gethomedata) - Returns information about users homes and cameras.

* [Getlasteventof](docs/welcome/README.md#getlasteventof) - Returns most recent events.

* [Getnextevents](docs/welcome/README.md#getnextevents) - Returns previous events.

* [Setpersonsaway](docs/welcome/README.md#setpersonsaway) - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* [Setpersonshome](docs/welcome/README.md#setpersonshome) - Sets a person as 'At home'.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
