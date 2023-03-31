# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudscheduler/v1/go
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
        DollarXgafv: "2",
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "provident",
                    Instance: "distinctio",
                    Service: "quibusdam",
                    Version: "unde",
                },
                Body: "nulla",
                Headers: map[string]string{
                    "illum": "vel",
                    "error": "deserunt",
                    "suscipit": "iure",
                },
                HTTPMethod: "GET",
                RelativeURI: "debitis",
            },
            AttemptDeadline: "ipsa",
            Description: "delectus",
            HTTPTarget: &shared.HTTPTarget{
                Body: "tempora",
                Headers: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                HTTPMethod: "HEAD",
                OauthToken: &shared.OAuthToken{
                    Scope: "excepturi",
                    ServiceAccountEmail: "nisi",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "recusandae",
                    ServiceAccountEmail: "temporibus",
                },
                URI: "http://gloomy-blanket.name",
            },
            LastAttemptTime: "perferendis",
            Name: "ipsam",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "sapiente": "quo",
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                },
                Data: "quod",
                TopicName: "esse",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "totam",
                MaxDoublings: 780529,
                MaxRetryDuration: "dolorum",
                MinBackoffDuration: "dicta",
                RetryCount: 720633,
            },
            Schedule: "officia",
            ScheduleTime: "occaecati",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 537373,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    map[string]interface{}{
                        "natus": "sed",
                        "iste": "dolor",
                    },
                    map[string]interface{}{
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                    },
                },
                Message: "iste",
            },
            TimeZone: "iure",
            UserUpdateTime: "saepe",
        },
        AccessToken: "quidem",
        Alt: "json",
        Callback: "ipsa",
        Fields: "reiciendis",
        Key: "est",
        OauthToken: "mollitia",
        Parent: "laborum",
        PrettyPrint: false,
        QuotaUser: "dolores",
        UploadType: "dolorem",
        UploadProtocol: "corporis",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req, operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
