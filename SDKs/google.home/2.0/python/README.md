# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/google.home/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        cast_local_authorization_token="YOUR_API_KEY_HERE",
    ),
)


req = shared.AccessibilityRequest(
    endpoint_enabled=False,
    hotword_enabled=False,
)
    
res = s.assistant.accessibility(req)

if res.getcurrentvalues is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### assistant

* `accessibility` - Accessibility
* `alarm_volume` - Alarm Volume
* `delete_alarmsand_timers` - Delete Alarms and Timers
* `do_not_disturb` - Do Not Disturb
* `get_alarmsand_timers` - Get Alarms and Timers
* `set_equalizer_values` - Set Equalizer Values

### bluetooth

* `change_discoverability` - Change Discoverability
* `forgetpaireddevice` - Forget paired device
* `get_paired_devices` - Get Paired Devices
* `get_scan_results` - Get Scan Results
* `pairwith_speaker` - Pair with Speaker
* `scanfordevices` - Scan for devices
* `status` - Status

### device_info

* `app_device_id` - App Device ID
* `check_ready_status` - Check Ready Status
* `eureka_info` - Eureka Info
* `locales` - Locales
* `offer` - Offer
* `test_internet_download_speed` - Test Internet Download Speed
* `timezones` - Timezones

### device_settings

* `night_modesettings` - Night Mode settings
* `rebootand_factory_reset` - Reboot and Factory Reset
* `set_eureka_info` - Set Eureka Info

### static_files

* `chromecast_icon` - Chromecast Icon
* `legal_notice` - Legal Notice

### wifi

* `connectto_wi_fi_network` - Connect to Wi-Fi Network
* `forget_wi_fi_network` - Forget Wi-Fi Network
* `get_saved_networks` - Get Saved Networks
* `get_wi_fi_scan_results` - Get Wi-Fi Scan Results
* `scanfor_networks` - Scan for Networks
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
