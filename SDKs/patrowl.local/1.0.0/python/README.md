# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/patrowl.local/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CleanScanPageRequest(
    scan_id=548814,
)
    
res = s.patrowl_engine.clean_scan_page(req)

if res.api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### patrowl_engine

* `clean_scan_page` - Clean scan
* `clean_scans_page` - Clean all scans
* `get_finding_page` - Get findings on finished scans
* `start_scan_page` - Start a new scan
* `status_scan_page` - Status of a scan
* `status_scans_page` - Status on all scans
* `stop_scan_page` - Stop a scan
* `stop_scans_page` - Stop all scans
* `get_default_page` - Index page
* `get_info_page` - Engine info page
* `get_liveness_page` - Liveness page
* `get_readiness_page` - Readiness page
* `get_test_page` - Test page
* `reload_configuration_page` - Configuration reloading page
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
