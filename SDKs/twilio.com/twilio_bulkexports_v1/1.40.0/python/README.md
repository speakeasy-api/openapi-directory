# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_bulkexports_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateExportCustomJobRequest(
    request_body=operations.CreateExportCustomJobCreateExportCustomJobRequest(
        email="Larue_Rau85@yahoo.com",
        end_day="corrupti",
        friendly_name="illum",
        start_day="vel",
        webhook_method="error",
        webhook_url="deserunt",
    ),
    resource_type="suscipit",
)
    
res = s.create_export_custom_job(req, operations.CreateExportCustomJobSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.bulkexports_v1_export_export_custom_job is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_export_custom_job`
* `delete_job`
* `fetch_day` - Fetch a specific Day.
* `fetch_export` - Fetch a specific Export.
* `fetch_export_configuration` - Fetch a specific Export Configuration.
* `fetch_job`
* `list_day` - Retrieve a list of all Days for a resource.
* `list_export_custom_job`
* `update_export_configuration` - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
