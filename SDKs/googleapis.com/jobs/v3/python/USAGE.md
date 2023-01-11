<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.JobsProjectsClientEventsCreateRequest(
    security=operations.JobsProjectsClientEventsCreateSecurity(
        option1=operations.JobsProjectsClientEventsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.JobsProjectsClientEventsCreatePathParams(
        parent="aut",
    ),
    query_params=operations.JobsProjectsClientEventsCreateQueryParams(
        dollar_xgafv="1",
        access_token="ipsam",
        alt="media",
        callback="similique",
        fields="est",
        key="optio",
        oauth_token="dolor",
        pretty_print=True,
        quota_user="dolore",
        upload_type="itaque",
        upload_protocol="hic",
    ),
    request=shared.CreateClientEventRequest(
        client_event=shared.ClientEvent(
            create_time="velit",
            event_id="ad",
            extra_info={
                "sit": "similique",
                "reprehenderit": "vero",
            },
            job_event=shared.JobEvent(
                jobs=[
                    "tempora",
                    "harum",
                    "aut",
                ],
                type="APPLICATION_START_FROM_SEARCH",
            ),
            parent_event_id="mollitia",
            request_id="et",
        ),
    ),
)
    
res = s.projects.jobs_projects_client_events_create(req)

if res.client_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->