<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.JobsProjectsTenantsClientEventsCreateRequest(
    security=operations.JobsProjectsTenantsClientEventsCreateSecurity(
        option1=operations.JobsProjectsTenantsClientEventsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.JobsProjectsTenantsClientEventsCreatePathParams(
        parent="amet",
    ),
    query_params=operations.JobsProjectsTenantsClientEventsCreateQueryParams(
        dollar_xgafv="2",
        access_token="adipisci",
        alt="media",
        callback="sit",
        fields="suscipit",
        key="aliquam",
        oauth_token="nobis",
        pretty_print=True,
        quota_user="eum",
        upload_type="consequatur",
        upload_protocol="perspiciatis",
    ),
    request=shared.ClientEvent(
        create_time="hic",
        event_id="facilis",
        event_notes="molestiae",
        job_event=shared.JobEvent(
            jobs=[
                "molestiae",
            ],
            type="SENT_CV",
        ),
        request_id="error",
    ),
)
    
res = s.projects.jobs_projects_tenants_client_events_create(req)

if res.client_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->