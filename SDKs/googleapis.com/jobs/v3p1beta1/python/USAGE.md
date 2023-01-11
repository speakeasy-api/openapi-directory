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
        parent="eveniet",
    ),
    query_params=operations.JobsProjectsClientEventsCreateQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="json",
        callback="deserunt",
        fields="ut",
        key="provident",
        oauth_token="alias",
        pretty_print=True,
        quota_user="atque",
        upload_type="dolore",
        upload_protocol="voluptatem",
    ),
    request=shared.CreateClientEventRequest(
        client_event=shared.ClientEvent(
            create_time="est",
            event_id="quo",
            extra_info={
                "accusantium": "tempora",
                "voluptatibus": "corporis",
                "ex": "voluptatem",
            },
            job_event=shared.JobEvent(
                jobs=[
                    "dolorem",
                    "qui",
                ],
                type="APPLICATION_COMPANY_SUBMIT",
            ),
            parent_event_id="consequatur",
            request_id="quaerat",
        ),
    ),
)
    
res = s.projects.jobs_projects_client_events_create(req)

if res.client_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->