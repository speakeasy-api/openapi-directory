<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.YoutubereportingJobsCreateRequest(
    security=operations.YoutubereportingJobsCreateSecurity(
        option1=operations.YoutubereportingJobsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.YoutubereportingJobsCreateQueryParams(
        dollar_xgafv="2",
        access_token="ea",
        alt="json",
        callback="voluptatem",
        fields="sed",
        key="sint",
        oauth_token="nulla",
        on_behalf_of_content_owner="facilis",
        pretty_print=True,
        quota_user="impedit",
        upload_type="doloremque",
        upload_protocol="sint",
    ),
    request=shared.Job(
        create_time="similique",
        expire_time="saepe",
        id="vel",
        name="excepturi",
        report_type_id="molestias",
        system_managed=True,
    ),
)
    
res = s.jobs.youtubereporting_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->