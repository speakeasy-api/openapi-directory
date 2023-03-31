# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/logoraisr.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token="YOUR_API_KEY_HERE",
    ),
)


req = operations.PreviewsReadRequest(
    file_id="corrupti",
)
    
res = s.previews.previews_read(req)

if res.preview_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### previews

* `previews_read` - Get preview image of uploaded file

### processes

* `processes_list` - Get process list.

### projects

* `projects_create` - Create a new project.
* `projects_list` - Get user project list.
* `projects_read` - Get project details.

### reports

* `reports_create` - Create a new report.
* `reports_list` - Get user report list.
* `reports_read` - Get report details.

### results

* `results_read` - Get the result from image processing

### uploads

* `uploads_create` - Upload a new image
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
