<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudschedulerProjectsLocationsJobsCreateRequest(
    security=operations.CloudschedulerProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudschedulerProjectsLocationsJobsCreatePathParams(
        parent="fuga",
    ),
    query_params=operations.CloudschedulerProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="1",
        access_token="minima",
        alt="media",
        callback="omnis",
        fields="et",
        key="tempora",
        oauth_token="aliquam",
        pretty_print=True,
        quota_user="odio",
        upload_type="minima",
        upload_protocol="maxime",
    ),
    request=shared.Job(
        app_engine_http_target=shared.AppEngineHTTPTarget(
            app_engine_routing=shared.AppEngineRouting(
                host="eum",
                instance="et",
                service="provident",
                version="totam",
            ),
            body="dolorum",
            headers={
                "voluptatem": "velit",
            },
            http_method="OPTIONS",
            relative_uri="repudiandae",
        ),
        attempt_deadline="tenetur",
        description="itaque",
        http_target=shared.HTTPTarget(
            body="nam",
            headers={
                "illum": "est",
                "officia": "est",
            },
            http_method="HEAD",
            oauth_token=shared.OAuthToken(
                scope="cumque",
                service_account_email="et",
            ),
            oidc_token=shared.OidcToken(
                audience="ut",
                service_account_email="ut",
            ),
            uri="laboriosam",
        ),
        last_attempt_time="cumque",
        name="quo",
        pubsub_target=shared.PubsubTarget(
            attributes={
                "animi": "repellendus",
            },
            data="quos",
            topic_name="animi",
        ),
        retry_config=shared.RetryConfig(
            max_backoff_duration="autem",
            max_doublings=7633145660682776125,
            max_retry_duration="laboriosam",
            min_backoff_duration="omnis",
            retry_count=8843799916100303719,
        ),
        schedule="error",
        schedule_time="minus",
        state="UPDATE_FAILED",
        status=shared.Status(
            code=5976770832042142405,
            details=[
                {
                    "aut": "officiis",
                    "perspiciatis": "omnis",
                },
                {
                    "soluta": "et",
                    "amet": "rerum",
                },
                {
                    "repellendus": "saepe",
                    "omnis": "qui",
                    "eaque": "recusandae",
                },
            ],
            message="optio",
        ),
        time_zone="dolores",
        user_update_time="sunt",
    ),
)
    
res = s.projects.cloudscheduler_projects_locations_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->