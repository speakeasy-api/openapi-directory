# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/traccar.org/5.6/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attributes.DeleteAttributesComputedID(ctx, operations.DeleteAttributesComputedIDRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Attributes](docs/attributes/README.md)

* [DeleteAttributesComputedID](docs/attributes/README.md#deleteattributescomputedid) - Delete an Attribute
* [GetAttributesComputed](docs/attributes/README.md#getattributescomputed) - Fetch a list of Attributes
* [PostAttributesComputed](docs/attributes/README.md#postattributescomputed) - Create an Attribute
* [PutAttributesComputedID](docs/attributes/README.md#putattributescomputedid) - Update an Attribute

### [Calendars](docs/calendars/README.md)

* [DeleteCalendarsID](docs/calendars/README.md#deletecalendarsid) - Delete a Calendar
* [GetCalendars](docs/calendars/README.md#getcalendars) - Fetch a list of Calendars
* [PostCalendars](docs/calendars/README.md#postcalendars) - Create a Calendar
* [PutCalendarsID](docs/calendars/README.md#putcalendarsid) - Update a Calendar

### [Commands](docs/commands/README.md)

* [DeleteCommandsID](docs/commands/README.md#deletecommandsid) - Delete a Saved Command
* [GetCommands](docs/commands/README.md#getcommands) - Fetch a list of Saved Commands
* [GetCommandsSend](docs/commands/README.md#getcommandssend) - Fetch a list of Saved Commands supported by Device at the moment
* [GetCommandsTypes](docs/commands/README.md#getcommandstypes) - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* [PostCommands](docs/commands/README.md#postcommands) - Create a Saved Command
* [PostCommandsSend](docs/commands/README.md#postcommandssend) - Dispatch commands to device
* [PutCommandsID](docs/commands/README.md#putcommandsid) - Update a Saved Command

### [Devices](docs/devices/README.md)

* [DeleteDevicesID](docs/devices/README.md#deletedevicesid) - Delete a Device
* [GetDevices](docs/devices/README.md#getdevices) - Fetch a list of Devices
* [PostDevices](docs/devices/README.md#postdevices) - Create a Device
* [PutDevicesID](docs/devices/README.md#putdevicesid) - Update a Device
* [PutDevicesIDAccumulators](docs/devices/README.md#putdevicesidaccumulators) - Update total distance and hours of the Device

### [Drivers](docs/drivers/README.md)

* [DeleteDriversID](docs/drivers/README.md#deletedriversid) - Delete a Driver
* [GetDrivers](docs/drivers/README.md#getdrivers) - Fetch a list of Drivers
* [PostDrivers](docs/drivers/README.md#postdrivers) - Create a Driver
* [PutDriversID](docs/drivers/README.md#putdriversid) - Update a Driver

### [Events](docs/events/README.md)

* [GetEventsID](docs/events/README.md#geteventsid)

### [Geofences](docs/geofences/README.md)

* [DeleteGeofencesID](docs/geofences/README.md#deletegeofencesid) - Delete a Geofence
* [GetGeofences](docs/geofences/README.md#getgeofences) - Fetch a list of Geofences
* [PostGeofences](docs/geofences/README.md#postgeofences) - Create a Geofence
* [PutGeofencesID](docs/geofences/README.md#putgeofencesid) - Update a Geofence

### [Groups](docs/groups/README.md)

* [DeleteGroupsID](docs/groups/README.md#deletegroupsid) - Delete a Group
* [GetGroups](docs/groups/README.md#getgroups) - Fetch a list of Groups
* [PostGroups](docs/groups/README.md#postgroups) - Create a Group
* [PutGroupsID](docs/groups/README.md#putgroupsid) - Update a Group

### [Maintenance](docs/maintenance/README.md)

* [DeleteMaintenanceID](docs/maintenance/README.md#deletemaintenanceid) - Delete a Maintenance
* [GetMaintenance](docs/maintenance/README.md#getmaintenance) - Fetch a list of Maintenance
* [PostMaintenance](docs/maintenance/README.md#postmaintenance) - Create a Maintenance
* [PutMaintenanceID](docs/maintenance/README.md#putmaintenanceid) - Update a Maintenance

### [Notifications](docs/notifications/README.md)

* [DeleteNotificationsID](docs/notifications/README.md#deletenotificationsid) - Delete a Notification
* [GetNotifications](docs/notifications/README.md#getnotifications) - Fetch a list of Notifications
* [GetNotificationsTypes](docs/notifications/README.md#getnotificationstypes) - Fetch a list of available Notification types
* [PostNotifications](docs/notifications/README.md#postnotifications) - Create a Notification
* [PostNotificationsTest](docs/notifications/README.md#postnotificationstest) - Send test notification to current user via Email and SMS
* [PutNotificationsID](docs/notifications/README.md#putnotificationsid) - Update a Notification

### [Permissions](docs/permissions/README.md)

* [DeletePermissions](docs/permissions/README.md#deletepermissions) - Unlink an Object from another Object
* [PostPermissions](docs/permissions/README.md#postpermissions) - Link an Object to another Object

### [Positions](docs/positions/README.md)

* [GetPositions](docs/positions/README.md#getpositions) - Fetches a list of Positions

### [Reports](docs/reports/README.md)

* [GetReportsEvents](docs/reports/README.md#getreportsevents) - Fetch a list of Events within the time period for the Devices or Groups
* [GetReportsRoute](docs/reports/README.md#getreportsroute) - Fetch a list of Positions within the time period for the Devices or Groups
* [GetReportsStops](docs/reports/README.md#getreportsstops) - Fetch a list of ReportStops within the time period for the Devices or Groups
* [GetReportsSummary](docs/reports/README.md#getreportssummary) - Fetch a list of ReportSummary within the time period for the Devices or Groups
* [GetReportsTrips](docs/reports/README.md#getreportstrips) - Fetch a list of ReportTrips within the time period for the Devices or Groups

### [Server](docs/server/README.md)

* [GetServer](docs/server/README.md#getserver) - Fetch Server information
* [PutServer](docs/server/README.md#putserver) - Update Server information

### [Session](docs/session/README.md)

* [DeleteSession](docs/session/README.md#deletesession) - Close the Session
* [GetSession](docs/session/README.md#getsession) - Fetch Session information
* [PostSession](docs/session/README.md#postsession) - Create a new Session

### [Statistics](docs/statistics/README.md)

* [GetStatistics](docs/statistics/README.md#getstatistics) - Fetch server Statistics

### [Users](docs/users/README.md)

* [DeleteUsersID](docs/users/README.md#deleteusersid) - Delete a User
* [GetUsers](docs/users/README.md#getusers) - Fetch a list of Users
* [PostUsers](docs/users/README.md#postusers) - Create a User
* [PutUsersID](docs/users/README.md#putusersid) - Update a User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
