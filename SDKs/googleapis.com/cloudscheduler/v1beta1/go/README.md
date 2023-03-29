# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudscheduler/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "unde",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "eum",
                    Instance: "iusto",
                    Service: "ullam",
                    Version: "saepe",
                },
                Body: "inventore",
                Headers: map[string]string{
                    "enim": "eum",
                    "voluptatum": "autem",
                    "vel": "non",
                    "deleniti": "similique",
                },
                HTTPMethod: "HEAD",
                RelativeURI: "molestiae",
            },
            AttemptDeadline: "quo",
            Description: "quasi",
            HTTPTarget: &shared.HTTPTarget{
                Body: "laboriosam",
                Headers: map[string]string{
                    "est": "voluptatem",
                },
                HTTPMethod: "GET",
                OauthToken: &shared.OAuthToken{
                    Scope: "fugiat",
                    ServiceAccountEmail: "a",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "omnis",
                    ServiceAccountEmail: "eos",
                },
                URI: "https://sarah.org",
            },
            LastAttemptTime: "rem",
            LegacyAppEngineCron: false,
            Name: "quibusdam",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "praesentium": "occaecati",
                    "dolor": "soluta",
                    "sed": "quisquam",
                    "rerum": "culpa",
                },
                Data: "qui",
                TopicName: "sed",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "rerum",
                MaxDoublings: 758616,
                MaxRetryDuration: "occaecati",
                MinBackoffDuration: "odit",
                RetryCount: 414662,
            },
            Schedule: "rem",
            ScheduleTime: "voluptatem",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 774234,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "numquam": "similique",
                        "dolores": "sit",
                    },
                    map[string]interface{}{
                        "et": "voluptatem",
                        "laborum": "modi",
                    },
                    map[string]interface{}{
                        "iure": "earum",
                        "ut": "soluta",
                        "qui": "ea",
                    },
                },
                Message: "laborum",
            },
            TimeZone: "iusto",
            UserUpdateTime: "ut",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

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
