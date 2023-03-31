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