# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/youtubereporting/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.YoutubereportingJobsCreateRequest(
    dollar_xgafv="2",
    job=shared.Job(
        create_time="provident",
        expire_time="distinctio",
        id="quibusdam",
        name="unde",
        report_type_id="nulla",
        system_managed=False,
    ),
    access_token="corrupti",
    alt="proto",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    on_behalf_of_content_owner="iure",
    pretty_print=False,
    quota_user="magnam",
    upload_type="debitis",
    upload_protocol="ipsa",
)
    
res = s.jobs.youtubereporting_jobs_create(req, operations.YoutubereportingJobsCreateSecurity(
    option1=operations.YoutubereportingJobsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### jobs

* `youtubereporting_jobs_create` - Creates a job and returns it.
* `youtubereporting_jobs_delete` - Deletes a job.
* `youtubereporting_jobs_get` - Gets a job.
* `youtubereporting_jobs_list` - Lists jobs.
* `youtubereporting_jobs_reports_get` - Gets the metadata of a specific report.
* `youtubereporting_jobs_reports_list` - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### media

* `youtubereporting_media_download` - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### report_types

* `youtubereporting_report_types_list` - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
