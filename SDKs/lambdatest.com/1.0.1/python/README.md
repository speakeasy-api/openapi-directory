# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/lambdatest.com/1.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DevicesRequest(
    os="corrupti",
)
    
res = s.get_devices.devices(req, operations.DevicesSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.os_devices is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### get_devices

* `devices` - Fetch all available device combinations.

### get_locations

* `locations` - Fetch Locations

### get_os_browsers

* `os_browsers` - Fetch all available os-browser combinations.

### get_profiles

* `profiles` - Fetch login profiles

### get_resolutions

* `resolutions` - Fetch all available resolution on different OS

### get_screenshots

* `screenshots` - Fetch specified screenshot details

### get_zipped_screenshots

* `zipped_screenshots` - Fetch Zipped Screenshots

### start_screenshot_test

* `start_screenshot_test` - Start Screenshot Test

### stop_screenshot_test

* `stop_screenshots_test` - Stop specified screenshot test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
