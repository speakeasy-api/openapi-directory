# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/truesight.local/11.1.00/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CollectNowRequest(
    device_id=548814,
    monitor_class="provident",
)
    
res = s.actions.collect_now(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### actions

* `collect_now` - Triggers a new collect on a specific device.
* `rediscover` - Triggers a new discovery on a specific device.
* `reinitialize` - Sends a 'Reinitialize KM' command.
* `remove` - Removes a specific instance from the monitoring environment.
* `reset` - Resets the Error Count parameter.

### applications

* `get_applications` - Gets summarized information about all monitored applications.
* `get_one_application` - Gets detailed information for a specific application.

### devices

* `get_agent_devices` - Gets a list of all the devices monitored by an Agent.
* `get_device` - Gets detailed information about a specific device.
* `get_device_agent` - Gets detailed information about an Agent.
* `get_device_energy_usage` - Gets the energy usage for a specific device and a given period.
* `get_device_monitors` - Gets the Monitors for a specific device.
* `get_device_parameter_history` - Gets data history for a parameter of a specific device over a given period.
* `get_devices` - Gets summarized information about all monitored devices.
* `get_devices_summary` - Gets overall information for all devices.
* `get_heating_margin_coverage` - Gets the heating margin values for each monitored device, when available.
* `search_devices` - Searches devices by name, model, manufacturer or serial number.

### groups

* `get_groups` - Gets all group summaries.
* `get_one_group` - Gets detailed information about a specific group.
* `update_energy_cost` - Updates the values of the energy footprint parameter for a specific group.

### historical_data

* `get_history` - Gets historical data for a specific group, application or service.

### services

* `get_one_service` - Gets detailed information about a specific service.
* `get_services` - Gets summarized information about all monitored services.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
