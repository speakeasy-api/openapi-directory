# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudiot/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest(
    dollar_xgafv="2",
    bind_device_to_gateway_request=shared.BindDeviceToGatewayRequest(
        device_id="provident",
        gateway_id="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.cloudiot_projects_locations_registries_bind_device_to_gateway(req, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity(
    option1=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.bind_device_to_gateway_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudiot_projects_locations_registries_bind_device_to_gateway` - Associates the device with the gateway.
* `cloudiot_projects_locations_registries_create` - Creates a device registry that contains devices.
* `cloudiot_projects_locations_registries_devices_config_versions_list` - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* `cloudiot_projects_locations_registries_devices_create` - Creates a device in a device registry.
* `cloudiot_projects_locations_registries_devices_delete` - Deletes a device.
* `cloudiot_projects_locations_registries_devices_get` - Gets details about a device.
* `cloudiot_projects_locations_registries_devices_modify_cloud_to_device_config` - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* `cloudiot_projects_locations_registries_devices_patch` - Updates a device.
* `cloudiot_projects_locations_registries_devices_send_command_to_device` - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* `cloudiot_projects_locations_registries_devices_states_list` - Lists the last few versions of the device state in descending order (i.e.: newest first).
* `cloudiot_projects_locations_registries_groups_devices_list` - List devices in a device registry.
* `cloudiot_projects_locations_registries_groups_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudiot_projects_locations_registries_groups_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `cloudiot_projects_locations_registries_groups_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* `cloudiot_projects_locations_registries_list` - Lists device registries.
* `cloudiot_projects_locations_registries_unbind_device_from_gateway` - Deletes the association between the device and the gateway.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
