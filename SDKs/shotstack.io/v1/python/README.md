# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/shotstack.io/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRenderRequest(
    id="corrupti",
)
    
res = s.edit.get_render(req, operations.GetRenderSecurity(
    developer_key="YOUR_API_KEY_HERE",
))

if res.render_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### edit

* `get_render` - Get Render Status
* `post_render` - Render Asset

### serve

* `delete_asset` - Delete Asset
* `get_asset` - Get Asset
* `get_asset_by_render_id` - Get Asset by Render ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
