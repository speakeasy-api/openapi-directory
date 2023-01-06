# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudschedulerProjectsLocationsJobsCreateRequest{
        Security: operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudschedulerProjectsLocationsJobsCreatePathParams{
            Parent: "et",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quo",
            Alt: "json",
            Callback: "et",
            Fields: "dolorem",
            Key: "aut",
            OauthToken: "natus",
            PrettyPrint: true,
            QuotaUser: "autem",
            UploadType: "odio",
            UploadProtocol: "soluta",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "porro",
                    Instance: "omnis",
                    Service: "et",
                    Version: "et",
                },
                Body: "sit",
                Headers: map[string]string{
                    "et": "magnam",
                    "aspernatur": "sit",
                    "assumenda": "minus",
                },
                HTTPMethod: "OPTIONS",
                RelativeURI: "aut",
            },
            AttemptDeadline: "qui",
            Description: "doloribus",
            HTTPTarget: &shared.HTTPTarget{
                Body: "est",
                Headers: map[string]string{
                    "distinctio": "vel",
                },
                HTTPMethod: "DELETE",
                OauthToken: &shared.OAuthToken{
                    Scope: "iure",
                    ServiceAccountEmail: "nulla",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "officiis",
                    ServiceAccountEmail: "quas",
                },
                URI: "culpa",
            },
            LastAttemptTime: "maiores",
            LegacyAppEngineCron: true,
            Name: "reiciendis",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "tempore": "nesciunt",
                    "aliquam": "et",
                },
                Data: "culpa",
                TopicName: "est",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "et",
                MaxDoublings: 4686911943399463022,
                MaxRetryDuration: "vero",
                MinBackoffDuration: "fuga",
                RetryCount: 6213377876447675930,
            },
            Schedule: "doloremque",
            ScheduleTime: "odio",
            State: "ENABLED",
            Status: &shared.Status{
                Code: 7736192968301380757,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "et": "natus",
                        "sunt": "ut",
                        "officia": "iure",
                    },
                    map[string]interface{}{
                        "quia": "alias",
                    },
                    map[string]interface{}{
                        "suscipit": "minus",
                        "aut": "qui",
                    },
                },
                Message: "nostrum",
            },
            TimeZone: "laudantium",
            UserUpdateTime: "dolorem",
        },
    }
    
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `CloudschedulerProjectsLocationsJobsCreate` - Creates a job.
* `CloudschedulerProjectsLocationsJobsDelete` - Deletes a job.
* `CloudschedulerProjectsLocationsJobsGet` - Gets a job.
* `CloudschedulerProjectsLocationsJobsList` - Lists jobs.
* `CloudschedulerProjectsLocationsJobsPatch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `CloudschedulerProjectsLocationsJobsPause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `CloudschedulerProjectsLocationsJobsResume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `CloudschedulerProjectsLocationsJobsRun` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `CloudschedulerProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
