# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/traccar.org/5.6/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.DeleteAttributesComputedIDRequest(
    id=548814,
)
    
res = s.attributes.delete_attributes_computed_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attributes

* `delete_attributes_computed_id_` - Delete an Attribute
* `get_attributes_computed` - Fetch a list of Attributes
* `post_attributes_computed` - Create an Attribute
* `put_attributes_computed_id_` - Update an Attribute

### calendars

* `delete_calendars_id_` - Delete a Calendar
* `get_calendars` - Fetch a list of Calendars
* `post_calendars` - Create a Calendar
* `put_calendars_id_` - Update a Calendar

### commands

* `delete_commands_id_` - Delete a Saved Command
* `get_commands` - Fetch a list of Saved Commands
* `get_commands_send` - Fetch a list of Saved Commands supported by Device at the moment
* `get_commands_types` - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* `post_commands` - Create a Saved Command
* `post_commands_send` - Dispatch commands to device
* `put_commands_id_` - Update a Saved Command

### devices

* `delete_devices_id_` - Delete a Device
* `get_devices` - Fetch a list of Devices
* `post_devices` - Create a Device
* `put_devices_id_` - Update a Device
* `put_devices_id_accumulators` - Update total distance and hours of the Device

### drivers

* `delete_drivers_id_` - Delete a Driver
* `get_drivers` - Fetch a list of Drivers
* `post_drivers` - Create a Driver
* `put_drivers_id_` - Update a Driver

### events

* `get_events_id_`

### geofences

* `delete_geofences_id_` - Delete a Geofence
* `get_geofences` - Fetch a list of Geofences
* `post_geofences` - Create a Geofence
* `put_geofences_id_` - Update a Geofence

### groups

* `delete_groups_id_` - Delete a Group
* `get_groups` - Fetch a list of Groups
* `post_groups` - Create a Group
* `put_groups_id_` - Update a Group

### maintenance

* `delete_maintenance_id_` - Delete a Maintenance
* `get_maintenance` - Fetch a list of Maintenance
* `post_maintenance` - Create a Maintenance
* `put_maintenance_id_` - Update a Maintenance

### notifications

* `delete_notifications_id_` - Delete a Notification
* `get_notifications` - Fetch a list of Notifications
* `get_notifications_types` - Fetch a list of available Notification types
* `post_notifications` - Create a Notification
* `post_notifications_test` - Send test notification to current user via Email and SMS
* `put_notifications_id_` - Update a Notification

### permissions

* `delete_permissions` - Unlink an Object from another Object
* `post_permissions` - Link an Object to another Object

### positions

* `get_positions` - Fetches a list of Positions

### reports

* `get_reports_events` - Fetch a list of Events within the time period for the Devices or Groups
* `get_reports_route` - Fetch a list of Positions within the time period for the Devices or Groups
* `get_reports_stops` - Fetch a list of ReportStops within the time period for the Devices or Groups
* `get_reports_summary` - Fetch a list of ReportSummary within the time period for the Devices or Groups
* `get_reports_trips` - Fetch a list of ReportTrips within the time period for the Devices or Groups

### server

* `get_server` - Fetch Server information
* `put_server` - Update Server information

### session

* `delete_session` - Close the Session
* `get_session` - Fetch Session information
* `post_session` - Create a new Session

### statistics

* `get_statistics` - Fetch server Statistics

### users

* `delete_users_id_` - Delete a User
* `get_users` - Fetch a list of Users
* `post_users` - Create a User
* `put_users_id_` - Update a User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
