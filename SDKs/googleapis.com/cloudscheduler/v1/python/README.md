# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudscheduler_projects_locations_jobs_create` - Creates a job.
* `cloudscheduler_projects_locations_jobs_delete` - Deletes a job.
* `cloudscheduler_projects_locations_jobs_get` - Gets a job.
* `cloudscheduler_projects_locations_jobs_list` - Lists jobs.
* `cloudscheduler_projects_locations_jobs_patch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `cloudscheduler_projects_locations_jobs_pause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `cloudscheduler_projects_locations_jobs_resume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `cloudscheduler_projects_locations_jobs_run` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `cloudscheduler_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
