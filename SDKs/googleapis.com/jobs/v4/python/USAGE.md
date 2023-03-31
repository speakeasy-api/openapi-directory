<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.JobsProjectsTenantsClientEventsCreateRequest(
    dollar_xgafv="2",
    client_event=shared.ClientEvent(
        create_time="provident",
        event_id="distinctio",
        event_notes="quibusdam",
        job_event=shared.JobEvent(
            jobs=[
                "nulla",
                "corrupti",
                "illum",
            ],
            type="APPLICATION_QUICK_SUBMISSION",
        ),
        request_id="error",
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    parent="delectus",
    pretty_print=False,
    quota_user="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.projects.jobs_projects_tenants_client_events_create(req, operations.JobsProjectsTenantsClientEventsCreateSecurity(
    option1=operations.JobsProjectsTenantsClientEventsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.client_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->