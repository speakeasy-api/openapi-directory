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
            Parent: "est",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "repellat",
            Alt: "json",
            Callback: "in",
            Fields: "ut",
            Key: "hic",
            OauthToken: "laboriosam",
            PrettyPrint: false,
            QuotaUser: "aperiam",
            UploadType: "veniam",
            UploadProtocol: "in",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "voluptatem",
                    Instance: "ut",
                    Service: "debitis",
                    Version: "id",
                },
                Body: "vel",
                Headers: map[string]string{
                    "fuga": "velit",
                    "ullam": "iusto",
                    "suscipit": "molestiae",
                },
                HTTPMethod: "HEAD",
                RelativeURI: "ut",
            },
            AttemptDeadline: "id",
            Description: "repellendus",
            HTTPTarget: &shared.HTTPTarget{
                Body: "a",
                Headers: map[string]string{
                    "nesciunt": "similique",
                    "perspiciatis": "nihil",
                    "enim": "quis",
                },
                HTTPMethod: "PUT",
                OauthToken: &shared.OAuthToken{
                    Scope: "voluptates",
                    ServiceAccountEmail: "quia",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "tenetur",
                    ServiceAccountEmail: "minus",
                },
                URI: "et",
            },
            LastAttemptTime: "sequi",
            Name: "ut",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "ea": "adipisci",
                },
                Data: "sit",
                TopicName: "sunt",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "numquam",
                MaxDoublings: 2083709215893123628,
                MaxRetryDuration: "et",
                MinBackoffDuration: "consequatur",
                RetryCount: 8141291568195754812,
            },
            Schedule: "delectus",
            ScheduleTime: "vel",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 2325660539912004481,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quis": "dolores",
                    },
                    map[string]interface{}{
                        "quos": "quidem",
                        "reiciendis": "velit",
                        "ut": "cumque",
                    },
                },
                Message: "dolor",
            },
            TimeZone: "magni",
            UserUpdateTime: "dolor",
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
