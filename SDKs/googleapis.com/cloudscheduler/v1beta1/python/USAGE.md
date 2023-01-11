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
        parent="perspiciatis",
    ),
    query_params=operations.CloudschedulerProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        alt="proto",
        callback="autem",
        fields="id",
        key="praesentium",
        oauth_token="voluptate",
        pretty_print=False,
        quota_user="iure",
        upload_type="quasi",
        upload_protocol="ut",
    ),
    request=shared.Job(
        app_engine_http_target=shared.AppEngineHTTPTarget(
            app_engine_routing=shared.AppEngineRouting(
                host="culpa",
                instance="et",
                service="laudantium",
                version="optio",
            ),
            body="eos",
            headers={
                "vitae": "debitis",
            },
            http_method="PATCH",
            relative_uri="dicta",
        ),
        attempt_deadline="esse",
        description="saepe",
        http_target=shared.HTTPTarget(
            body="deserunt",
            headers={
                "nulla": "iure",
                "perferendis": "quaerat",
                "quos": "atque",
            },
            http_method="HEAD",
            oauth_token=shared.OAuthToken(
                scope="id",
                service_account_email="quia",
            ),
            oidc_token=shared.OidcToken(
                audience="molestiae",
                service_account_email="et",
            ),
            uri="ab",
        ),
        last_attempt_time="enim",
        legacy_app_engine_cron=False,
        name="et",
        pubsub_target=shared.PubsubTarget(
            attributes={
                "dolore": "voluptates",
                "ea": "vel",
            },
            data="rerum",
            topic_name="consequatur",
        ),
        retry_config=shared.RetryConfig(
            max_backoff_duration="dolores",
            max_doublings=5722449237938539973,
            max_retry_duration="possimus",
            min_backoff_duration="placeat",
            retry_count=8677531646393043170,
        ),
        schedule="non",
        schedule_time="et",
        state="STATE_UNSPECIFIED",
        status=shared.Status(
            code=1253198214448589061,
            details=[
                {
                    "in": "sint",
                },
            ],
            message="in",
        ),
        time_zone="soluta",
        user_update_time="ab",
    ),
)
    
res = s.projects.cloudscheduler_projects_locations_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->