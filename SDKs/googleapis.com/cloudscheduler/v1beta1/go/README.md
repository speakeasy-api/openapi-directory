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
            Parent: "perspiciatis",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "autem",
            Fields: "id",
            Key: "praesentium",
            OauthToken: "voluptate",
            PrettyPrint: false,
            QuotaUser: "iure",
            UploadType: "quasi",
            UploadProtocol: "ut",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "culpa",
                    Instance: "et",
                    Service: "laudantium",
                    Version: "optio",
                },
                Body: "eos",
                Headers: map[string]string{
                    "vitae": "debitis",
                },
                HTTPMethod: "PATCH",
                RelativeURI: "dicta",
            },
            AttemptDeadline: "esse",
            Description: "saepe",
            HTTPTarget: &shared.HTTPTarget{
                Body: "deserunt",
                Headers: map[string]string{
                    "nulla": "iure",
                    "perferendis": "quaerat",
                    "quos": "atque",
                },
                HTTPMethod: "HEAD",
                OauthToken: &shared.OAuthToken{
                    Scope: "id",
                    ServiceAccountEmail: "quia",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "molestiae",
                    ServiceAccountEmail: "et",
                },
                URI: "ab",
            },
            LastAttemptTime: "enim",
            LegacyAppEngineCron: false,
            Name: "et",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "dolore": "voluptates",
                    "ea": "vel",
                },
                Data: "rerum",
                TopicName: "consequatur",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "dolores",
                MaxDoublings: 5722449237938539973,
                MaxRetryDuration: "possimus",
                MinBackoffDuration: "placeat",
                RetryCount: 8677531646393043170,
            },
            Schedule: "non",
            ScheduleTime: "et",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 1253198214448589061,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "in": "sint",
                    },
                },
                Message: "in",
            },
            TimeZone: "soluta",
            UserUpdateTime: "ab",
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
