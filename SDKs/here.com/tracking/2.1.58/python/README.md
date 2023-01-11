# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAliasesV2TrackingIDRequest(
    security=operations.DeleteAliasesV2TrackingIDSecurity(
        auth_bearer=shared.SchemeAuthBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteAliasesV2TrackingIDPathParams(
        tracking_id="velit",
    ),
    query_params=operations.DeleteAliasesV2TrackingIDQueryParams(
        app_id="nulla",
    ),
    headers=operations.DeleteAliasesV2TrackingIDHeaders(
        x_request_id="rerum",
        x_confirm="true",
    ),
)
    
res = s.aliases.delete_aliases_v2_tracking_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Aliases

* `delete_aliases_v2_tracking_id_` - Deletes all aliases
* `delete_aliases_v2_tracking_id_type_` - Deletes all aliases of a type
* `delete_aliases_v2_tracking_id_type_external_id_` - Deletes an alias
* `get_aliases_v2` - Provides all aliases in a paginated JSON object.
* `get_aliases_v2_health` - Gets service health
* `get_aliases_v2_tracking_id` - Gets the trackingId associated with an alias
* `get_aliases_v2_version` - Gets service version
* `get_aliases_v2_tracking_id_` - Gets all aliases of this device
* `get_aliases_v2_tracking_id_type_` - Gets all aliases of a type of this device
* `put_aliases_v2_tracking_id_type_external_id_` - Adds an alias for the trackingId

### Associations

* `delete_associations_v3_tracking_id_geofences_geofence_id_` - Disassociates a device and a geofence
* `delete_associations_v3_tracking_id_rules_rule_id_` - Disassociates a device and a rule
* `delete_associations_v3_tracking_id_sensors_sensor_rule_id_` - Disassociates a device and a sensor rule
* `get_associations_v3_geofences_geofence_id_` - Gets all devices associated with a geofence
* `get_associations_v3_health` - Gets service health
* `get_associations_v3_rules_rule_id_` - Gets all devices associated with a rule
* `get_associations_v3_sensors_sensor_rule_id_` - Gets all devices associated with a sensor rule
* `get_associations_v3_version` - Gets service version
* `get_associations_v3_tracking_id_geofences` - Gets geofences associated with the device
* `get_associations_v3_tracking_id_rules` - Gets all rules associated with the device
* `get_associations_v3_tracking_id_sensors` - Gets sensor rules associated with the device
* `put_associations_v3_tracking_id_geofences_geofence_id_` - Associates a device to a geofence
* `put_associations_v3_tracking_id_rules_rule_id_` - Associates a device to a rule
* `put_associations_v3_tracking_id_sensors_sensor_rule_id_` - Associates a device with a sensor rule

### C2C

* `delete_c2c_v4_connectors_connector_id_` - Deletes connector object
* `delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_` - Removes an external device from the connector
* `get_c2c_v4_connectors` - Gets list of connectors
* `get_c2c_v4_connectors_ext_devices_external_device_id_` - Gets connector identifiers for an external device
* `get_c2c_v4_connectors_connector_id_` - Gets connector info
* `get_c2c_v4_connectors_connector_id_ext_devices` - Gets all external devices under the connector
* `get_c2c_v4_drivers` - Lists cloud drivers
* `get_c2c_v4_health` - Gets service health
* `get_c2c_v4_version` - Gets service version
* `post_c2c_v4_callback` - Receives external device update reports
* `post_c2c_v4_connectors` - Registers a connector object
* `post_c2c_v4_connectors_connector_id_ext_devices` - Adds external devices to the connector
* `put_c2c_v4_connectors_connector_id_` - Updates connector info

### Device Associations

* `get_device_associations_v2_health` - Gets service health
* `get_device_associations_v2_version` - Gets service version
* `get_device_associations_v2_tracking_id_geofences` - Retrieves geofences associated with the device

### Events

* `get_events_v3` - Gets event history
* `get_events_v3_health` - Gets service health
* `get_events_v3_version` - Gets service version
* `get_events_v3_tracking_id_` - Gets event history for a device or a shipment

### Geofence

* `delete_geofences_v2` - Deletes all geofences
* `delete_geofences_v2_geofence_id_` - Deletes a geofence
* `get_geofences_v2_health` - Gets service health
* `get_geofences_v2_version` - Gets service version
* `get_geofences_v2_geofence_id_` - Gets a single geofence
* `post_geofences_v2` - Creates a geofence
* `post_geofences_v2_training_test` - Checks if the POI geofence training is possible with the given parameters
* `post_geofences_v2_geofence_id_poi_training` - Trains a POI geofence
* `put_geofences_v2_geofence_id_` - Updates a single geofence

### Geofence Associations

* `delete_geofence_associations_v2_geofence_id_tracking_id_` - Disassociates a device and a geofence
* `get_geofence_associations_v2_health` - Gets service health
* `get_geofence_associations_v2_version` - Gets service version
* `get_geofence_associations_v2_geofence_id_devices` - Gets devices associated with this geofence
* `put_geofence_associations_v2_geofence_id_tracking_id_` - Associates a device with a geofence

### Ingestion

* `get_v2_health` - Gets service health
* `get_v2_timestamp` - Gets the current timestamp
* `get_v2_version` - Gets service version
* `get_v3_health` - Gets service health
* `get_v3_version` - Gets service version
* `post_v2_` - Sends data and receives shadow
* `post_v2_token` - Requests a token for a registered device
* `post_v3_` - Sends data for a device and receives shadow
* `post_v3_batch` - Sends data for multiple devices

### Locations

* `delete_locations_v4` - Deletes all locations
* `delete_locations_v4_location_id_` - Deletes a location
* `get_locations_v4` - Lists all locations
* `get_locations_v4_health` - Gets service health
* `get_locations_v4_version` - Gets service version
* `get_locations_v4_location_id_` - Gets location details
* `post_locations_v4` - Creates a location
* `put_locations_v4_location_id_` - Updates location details

### Metadata

* `delete_metadata_v2_devices_tracking_id_` - Deletes all metadata associated with a tracker
* `delete_metadata_v2_geofences_geofence_id_` - Deletes all metadata associated with a geofence
* `delete_metadata_v2_sensor_rules_sensor_rule_id_` - Deletes all metadata associated with a sensor rule
* `get_metadata_v2_devices_tracking_id_` - Gets metadata associated with the trackingId
* `get_metadata_v2_geofences_geofence_id_` - Gets metadata associated with the geofence
* `get_metadata_v2_health` - Gets service health
* `get_metadata_v2_sensor_rules_sensor_rule_id_` - Gets metadata associated with the sensor rule
* `get_metadata_v2_version` - Gets service version
* `post_metadata_v2_devices_batch` - Gets a batch of metadata associated with the devices
* `post_metadata_v2_geofences_batch` - Gets a batch of metadata associated with the geofence
* `post_metadata_v2_sensor_rules_batch` - Gets a batch of metadata associated with the sensor rules
* `put_metadata_v2_devices_tracking_id_` - Updates metadata object associated with a tracker
* `put_metadata_v2_geofences_geofence_id_` - Updates metadata object associated with a geofence
* `put_metadata_v2_sensor_rules_sensor_rule_id_` - Updates metadata object associated with a sensor rule

### Notifications

* `delete_notifications_v2_registration_channel_name_` - Unregisters from notifications
* `delete_notifications_v3_registration_channel_id_` - Unregisters from notifications
* `delete_notifications_v3_registrations` - Unregisters all notifications
* `get_notifications_v2_health` - Gets service health
* `get_notifications_v2_registrations` - Gets all registered notification channels
* `get_notifications_v2_version` - Gets service version
* `get_notifications_v3_health` - Gets service health
* `get_notifications_v3_registration_channel_id_` - Gets a single notification channel information
* `get_notifications_v3_registrations` - Gets all registered notification channels
* `get_notifications_v3_version` - Gets service version
* `post_notifications_v2_register` - Registers for notifications
* `post_notifications_v3_registrations` - Registers for notifications
* `put_notifications_v3_registration_channel_id_` - Updates a notification channel registration

### Registry

* `delete_registry_v2_devices_device_or_external_id_` - Deactivates a device.
* `delete_registry_v2_tracking_id_` - Unclaims a device
* `get_registry_v2_devices_device_or_external_id_` - Gets the trackingId for a device
* `get_registry_v2_health` - Gets service health
* `get_registry_v2_licenses` - Gets tracking cloud license information
* `get_registry_v2_version` - Gets service version
* `get_registry_v2_app_id_devices` - Gets all devices provisioned by the vendor for the given appId
* `get_registry_v2_app_id_license_count` - Gets count of created licenses for a given vendor's app id
* `get_registry_v2_job_id_results` - Gets the job results
* `get_registry_v2_job_id_status` - Gets the job status
* `get_registry_v2_tracking_id_` - Gets the deviceId
* `post_registry_v2_app_id_devices` - Creates credentials for multiple devices
* `post_registry_v2_app_id_one_device` - Creates credentials for a single device
* `put_registry_v2_devices_device_or_external_id_` - Claims a device

### Reports

* `get_reports_v4_health` - Gets service health
* `get_reports_v4_version` - Gets service version
* `get_reports_v4_report_id_` - Gets reports
* `post_reports_v4` - Starts report creation

### Rules

* `delete_rules_v4` - Deletes all rules
* `delete_rules_v4_rule_id_` - Deletes a rule
* `get_rules_v4` - Gets all rules
* `get_rules_v4_health` - Gets service health
* `get_rules_v4_version` - Gets service version
* `get_rules_v4_rule_id_` - Gets a single rule
* `post_rules_v4` - Creates a rule
* `put_rules_v4_rule_id_` - Updates a single rule

### Sensors

* `delete_sensors_v3` - Deletes all sensor rules
* `delete_sensors_v3_sensor_rule_id_` - Deletes a sensor rule
* `get_sensors_v3` - Gets all sensor rules
* `get_sensors_v3_health` - Gets service health
* `get_sensors_v3_version` - Gets service version
* `get_sensors_v3_sensor_rule_id_` - Gets a single sensor rule
* `post_sensors_v3` - Creates a sensor rule
* `put_sensors_v3_sensor_rule_id_` - Updates a single sensor rule

### Shadows

* `delete_shadows_v2_tracking_id_` - Clears the device shadow
* `get_shadows_v2_health` - Gets service health
* `get_shadows_v2_version` - Gets service version
* `get_shadows_v2_tracking_id_` - Gets the device shadow
* `get_shadows_v2_tracking_id_state_` - Gets the value for a property
* `get_shadows_v2_tracking_id_state_selector_` - Gets the value for a property
* `get_shadows_v4` - Get all shadows
* `post_shadows_v2_batch` - Gets a batch of device shadows
* `put_shadows_v2_tracking_id_` - Updates the device shadow

### Shipments

* `delete_shipments_v4` - Deletes all shipments
* `delete_shipments_v4_plans` - Deletes all shipment plans
* `delete_shipments_v4_plans_shipment_plan_id_` - Deletes a shipment plan
* `delete_shipments_v4_shipment_id_` - Deletes a shipment
* `get_shipments_v4` - Lists all shipments
* `get_shipments_v4_health` - Gets service health
* `get_shipments_v4_plans` - Lists all shipment plans
* `get_shipments_v4_plans_shipment_plan_id_` - Gets shipment plan details
* `get_shipments_v4_plans_shipment_plan_id_segment_plan_id_` - Gets segment plan details
* `get_shipments_v4_version` - Gets service version
* `get_shipments_v4_shipment_id_` - Gets shipment details
* `get_shipments_v4_shipment_id_segment_id_` - Gets segment details
* `get_shipments_v4_tracking_id_segments` - Gets device's assigned segments
* `patch_shipments_v4_plans_shipment_plan_id_` - Updates shipment plan details
* `patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_` - Updates segment plan details
* `patch_shipments_v4_shipment_id_` - Updates shipment details
* `patch_shipments_v4_shipment_id_segment_id_` - Updates segment details
* `post_shipments_v4` - Creates a shipment
* `post_shipments_v4_plans` - Creates a shipment plan

### Traces

* `delete_traces_v2_tracking_id_` - Deletes the entire history of the device. This will also trigger deletion of the entire event history of the device.
* `get_traces_v2_health` - Gets service health
* `get_traces_v2_version` - Gets service version
* `get_traces_v2_tracking_id_` - Gets the trace within a specified time range

### Transitions

* `get_transitions_v2_devices_tracking_id_` - Gets transitions for a device
* `get_transitions_v2_health` - Gets service health
* `get_transitions_v2_version` - Gets service version

### Users

* `get_users_v2_devices` - Gets all devices owned by a given user or project
* `get_users_v2_health` - Gets service health
* `get_users_v2_version` - Gets service version
* `post_users_v2_login` - Gets a valid access token
* `post_users_v2_refresh` - Gets a valid access token given a refreshToken

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
