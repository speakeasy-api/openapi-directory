<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.JobsProjectsClientEventsCreateRequest(
    dollar_xgafv="2",
    create_client_event_request=shared.CreateClientEventRequest(
        client_event=shared.ClientEvent(
            create_time="provident",
            event_id="distinctio",
            extra_info={
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            job_event=shared.JobEvent(
                jobs=[
                    "magnam",
                    "debitis",
                ],
                type="JOB_EVENT_TYPE_UNSPECIFIED",
            ),
            parent_event_id="delectus",
            request_id="tempora",
        ),
    ),
    access_token="suscipit",
    alt="media",
    callback="minus",
    fields_="placeat",
    key="voluptatum",
    oauth_token="iusto",
    parent="excepturi",
    pretty_print=False,
    quota_user="nisi",
    upload_type="recusandae",
    upload_protocol="temporibus",
)
    
res = s.projects.jobs_projects_client_events_create(req, operations.JobsProjectsClientEventsCreateSecurity(
    option1=operations.JobsProjectsClientEventsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.client_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->