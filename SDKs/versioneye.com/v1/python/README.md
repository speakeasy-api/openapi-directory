# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/versioneye.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIV1ScansRequest(
    name="corrupti",
    per_page="provident",
)
    
res = s.scans.get_api_v1_scans(req, operations.GetAPIV1ScansSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### scans

* `get_api_v1_scans` - Retrieves all scans
* `get_api_v1_scans_id_` - Retrieves a project scan result
* `get_api_v1_scans_id_files_file_id_` - Retrieves a file object, containing information about dependencies in the file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
