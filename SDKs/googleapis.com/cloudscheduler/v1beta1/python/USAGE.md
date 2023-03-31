<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudschedulerProjectsLocationsJobsCreateRequest(
    dollar_xgafv="2",
    job=shared.Job(
        app_engine_http_target=shared.AppEngineHTTPTarget(
            app_engine_routing=shared.AppEngineRouting(
                host="provident",
                instance="distinctio",
                service="quibusdam",
                version="unde",
            ),
            body="nulla",
            headers={
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            http_method="GET",
            relative_uri="debitis",
        ),
        attempt_deadline="ipsa",
        description="delectus",
        http_target=shared.HTTPTarget(
            body="tempora",
            headers={
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            http_method="HEAD",
            oauth_token=shared.OAuthToken(
                scope="excepturi",
                service_account_email="nisi",
            ),
            oidc_token=shared.OidcToken(
                audience="recusandae",
                service_account_email="temporibus",
            ),
            uri="http://gloomy-blanket.name",
        ),
        last_attempt_time="perferendis",
        legacy_app_engine_cron=False,
        name="ipsam",
        pubsub_target=shared.PubsubTarget(
            attributes={
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            data="quod",
            topic_name="esse",
        ),
        retry_config=shared.RetryConfig(
            max_backoff_duration="totam",
            max_doublings=780529,
            max_retry_duration="dolorum",
            min_backoff_duration="dicta",
            retry_count=720633,
        ),
        schedule="officia",
        schedule_time="occaecati",
        state="STATE_UNSPECIFIED",
        status=shared.Status(
            code=537373,
            details=[
                {
                    "totam": "beatae",
                    "commodi": "molestiae",
                    "modi": "qui",
                    "impedit": "cum",
                },
                {
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
                {
                    "natus": "sed",
                    "iste": "dolor",
                },
                {
                    "laboriosam": "hic",
                    "saepe": "fuga",
                    "in": "corporis",
                },
            ],
            message="iste",
        ),
        time_zone="iure",
        user_update_time="saepe",
    ),
    access_token="quidem",
    alt="json",
    callback="ipsa",
    fields_="reiciendis",
    key="est",
    oauth_token="mollitia",
    parent="laborum",
    pretty_print=False,
    quota_user="dolores",
    upload_type="dolorem",
    upload_protocol="corporis",
)
    
res = s.projects.cloudscheduler_projects_locations_jobs_create(req, operations.CloudschedulerProjectsLocationsJobsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->