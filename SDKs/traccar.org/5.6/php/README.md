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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttributesComputedIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttributesComputedIdRequest();
    $request->id = 548814;

    $response = $sdk->attributes->deleteAttributesComputedId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attributes](docs/attributes/README.md)

* [deleteAttributesComputedId](docs/attributes/README.md#deleteattributescomputedid) - Delete an Attribute
* [getAttributesComputed](docs/attributes/README.md#getattributescomputed) - Fetch a list of Attributes
* [postAttributesComputed](docs/attributes/README.md#postattributescomputed) - Create an Attribute
* [putAttributesComputedId](docs/attributes/README.md#putattributescomputedid) - Update an Attribute

### [calendars](docs/calendars/README.md)

* [deleteCalendarsId](docs/calendars/README.md#deletecalendarsid) - Delete a Calendar
* [getCalendars](docs/calendars/README.md#getcalendars) - Fetch a list of Calendars
* [postCalendars](docs/calendars/README.md#postcalendars) - Create a Calendar
* [putCalendarsId](docs/calendars/README.md#putcalendarsid) - Update a Calendar

### [commands](docs/commands/README.md)

* [deleteCommandsId](docs/commands/README.md#deletecommandsid) - Delete a Saved Command
* [getCommands](docs/commands/README.md#getcommands) - Fetch a list of Saved Commands
* [getCommandsSend](docs/commands/README.md#getcommandssend) - Fetch a list of Saved Commands supported by Device at the moment
* [getCommandsTypes](docs/commands/README.md#getcommandstypes) - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* [postCommands](docs/commands/README.md#postcommands) - Create a Saved Command
* [postCommandsSend](docs/commands/README.md#postcommandssend) - Dispatch commands to device
* [putCommandsId](docs/commands/README.md#putcommandsid) - Update a Saved Command

### [devices](docs/devices/README.md)

* [deleteDevicesId](docs/devices/README.md#deletedevicesid) - Delete a Device
* [getDevices](docs/devices/README.md#getdevices) - Fetch a list of Devices
* [postDevices](docs/devices/README.md#postdevices) - Create a Device
* [putDevicesId](docs/devices/README.md#putdevicesid) - Update a Device
* [putDevicesIdAccumulators](docs/devices/README.md#putdevicesidaccumulators) - Update total distance and hours of the Device

### [drivers](docs/drivers/README.md)

* [deleteDriversId](docs/drivers/README.md#deletedriversid) - Delete a Driver
* [getDrivers](docs/drivers/README.md#getdrivers) - Fetch a list of Drivers
* [postDrivers](docs/drivers/README.md#postdrivers) - Create a Driver
* [putDriversId](docs/drivers/README.md#putdriversid) - Update a Driver

### [events](docs/events/README.md)

* [getEventsId](docs/events/README.md#geteventsid)

### [geofences](docs/geofences/README.md)

* [deleteGeofencesId](docs/geofences/README.md#deletegeofencesid) - Delete a Geofence
* [getGeofences](docs/geofences/README.md#getgeofences) - Fetch a list of Geofences
* [postGeofences](docs/geofences/README.md#postgeofences) - Create a Geofence
* [putGeofencesId](docs/geofences/README.md#putgeofencesid) - Update a Geofence

### [groups](docs/groups/README.md)

* [deleteGroupsId](docs/groups/README.md#deletegroupsid) - Delete a Group
* [getGroups](docs/groups/README.md#getgroups) - Fetch a list of Groups
* [postGroups](docs/groups/README.md#postgroups) - Create a Group
* [putGroupsId](docs/groups/README.md#putgroupsid) - Update a Group

### [maintenance](docs/maintenance/README.md)

* [deleteMaintenanceId](docs/maintenance/README.md#deletemaintenanceid) - Delete a Maintenance
* [getMaintenance](docs/maintenance/README.md#getmaintenance) - Fetch a list of Maintenance
* [postMaintenance](docs/maintenance/README.md#postmaintenance) - Create a Maintenance
* [putMaintenanceId](docs/maintenance/README.md#putmaintenanceid) - Update a Maintenance

### [notifications](docs/notifications/README.md)

* [deleteNotificationsId](docs/notifications/README.md#deletenotificationsid) - Delete a Notification
* [getNotifications](docs/notifications/README.md#getnotifications) - Fetch a list of Notifications
* [getNotificationsTypes](docs/notifications/README.md#getnotificationstypes) - Fetch a list of available Notification types
* [postNotifications](docs/notifications/README.md#postnotifications) - Create a Notification
* [postNotificationsTest](docs/notifications/README.md#postnotificationstest) - Send test notification to current user via Email and SMS
* [putNotificationsId](docs/notifications/README.md#putnotificationsid) - Update a Notification

### [permissions](docs/permissions/README.md)

* [deletePermissions](docs/permissions/README.md#deletepermissions) - Unlink an Object from another Object
* [postPermissions](docs/permissions/README.md#postpermissions) - Link an Object to another Object

### [positions](docs/positions/README.md)

* [getPositions](docs/positions/README.md#getpositions) - Fetches a list of Positions

### [reports](docs/reports/README.md)

* [getReportsEvents](docs/reports/README.md#getreportsevents) - Fetch a list of Events within the time period for the Devices or Groups
* [getReportsRoute](docs/reports/README.md#getreportsroute) - Fetch a list of Positions within the time period for the Devices or Groups
* [getReportsStops](docs/reports/README.md#getreportsstops) - Fetch a list of ReportStops within the time period for the Devices or Groups
* [getReportsSummary](docs/reports/README.md#getreportssummary) - Fetch a list of ReportSummary within the time period for the Devices or Groups
* [getReportsTrips](docs/reports/README.md#getreportstrips) - Fetch a list of ReportTrips within the time period for the Devices or Groups

### [server](docs/server/README.md)

* [getServer](docs/server/README.md#getserver) - Fetch Server information
* [putServer](docs/server/README.md#putserver) - Update Server information

### [session](docs/session/README.md)

* [deleteSession](docs/session/README.md#deletesession) - Close the Session
* [getSession](docs/session/README.md#getsession) - Fetch Session information
* [postSession](docs/session/README.md#postsession) - Create a new Session

### [statistics](docs/statistics/README.md)

* [getStatistics](docs/statistics/README.md#getstatistics) - Fetch server Statistics

### [users](docs/users/README.md)

* [deleteUsersId](docs/users/README.md#deleteusersid) - Delete a User
* [getUsers](docs/users/README.md#getusers) - Fetch a list of Users
* [postUsers](docs/users/README.md#postusers) - Create a User
* [putUsersId](docs/users/README.md#putusersid) - Update a User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
