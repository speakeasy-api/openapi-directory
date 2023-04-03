# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### attributes

* `deleteAttributesComputedId` - Delete an Attribute
* `getAttributesComputed` - Fetch a list of Attributes
* `postAttributesComputed` - Create an Attribute
* `putAttributesComputedId` - Update an Attribute

### calendars

* `deleteCalendarsId` - Delete a Calendar
* `getCalendars` - Fetch a list of Calendars
* `postCalendars` - Create a Calendar
* `putCalendarsId` - Update a Calendar

### commands

* `deleteCommandsId` - Delete a Saved Command
* `getCommands` - Fetch a list of Saved Commands
* `getCommandsSend` - Fetch a list of Saved Commands supported by Device at the moment
* `getCommandsTypes` - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* `postCommands` - Create a Saved Command
* `postCommandsSend` - Dispatch commands to device
* `putCommandsId` - Update a Saved Command

### devices

* `deleteDevicesId` - Delete a Device
* `getDevices` - Fetch a list of Devices
* `postDevices` - Create a Device
* `putDevicesId` - Update a Device
* `putDevicesIdAccumulators` - Update total distance and hours of the Device

### drivers

* `deleteDriversId` - Delete a Driver
* `getDrivers` - Fetch a list of Drivers
* `postDrivers` - Create a Driver
* `putDriversId` - Update a Driver

### events

* `getEventsId`

### geofences

* `deleteGeofencesId` - Delete a Geofence
* `getGeofences` - Fetch a list of Geofences
* `postGeofences` - Create a Geofence
* `putGeofencesId` - Update a Geofence

### groups

* `deleteGroupsId` - Delete a Group
* `getGroups` - Fetch a list of Groups
* `postGroups` - Create a Group
* `putGroupsId` - Update a Group

### maintenance

* `deleteMaintenanceId` - Delete a Maintenance
* `getMaintenance` - Fetch a list of Maintenance
* `postMaintenance` - Create a Maintenance
* `putMaintenanceId` - Update a Maintenance

### notifications

* `deleteNotificationsId` - Delete a Notification
* `getNotifications` - Fetch a list of Notifications
* `getNotificationsTypes` - Fetch a list of available Notification types
* `postNotifications` - Create a Notification
* `postNotificationsTest` - Send test notification to current user via Email and SMS
* `putNotificationsId` - Update a Notification

### permissions

* `deletePermissions` - Unlink an Object from another Object
* `postPermissions` - Link an Object to another Object

### positions

* `getPositions` - Fetches a list of Positions

### reports

* `getReportsEvents` - Fetch a list of Events within the time period for the Devices or Groups
* `getReportsRoute` - Fetch a list of Positions within the time period for the Devices or Groups
* `getReportsStops` - Fetch a list of ReportStops within the time period for the Devices or Groups
* `getReportsSummary` - Fetch a list of ReportSummary within the time period for the Devices or Groups
* `getReportsTrips` - Fetch a list of ReportTrips within the time period for the Devices or Groups

### server

* `getServer` - Fetch Server information
* `putServer` - Update Server information

### session

* `deleteSession` - Close the Session
* `getSession` - Fetch Session information
* `postSession` - Create a new Session

### statistics

* `getStatistics` - Fetch server Statistics

### users

* `deleteUsersId` - Delete a User
* `getUsers` - Fetch a list of Users
* `postUsers` - Create a User
* `putUsersId` - Update a User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
