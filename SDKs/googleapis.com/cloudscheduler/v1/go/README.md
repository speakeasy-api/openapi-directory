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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, operations.CloudschedulerProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: sdk.String("provident"),
                    Instance: sdk.String("distinctio"),
                    Service: sdk.String("quibusdam"),
                    Version: sdk.String("unde"),
                },
                Body: sdk.String("nulla"),
                Headers: map[string]string{
                    "illum": "vel",
                    "error": "deserunt",
                    "suscipit": "iure",
                },
                HTTPMethod: shared.AppEngineHTTPTargetHTTPMethodEnumGet.ToPointer(),
                RelativeURI: sdk.String("debitis"),
            },
            AttemptDeadline: sdk.String("ipsa"),
            Description: sdk.String("delectus"),
            HTTPTarget: &shared.HTTPTarget{
                Body: sdk.String("tempora"),
                Headers: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumHead.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("excepturi"),
                    ServiceAccountEmail: sdk.String("nisi"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("recusandae"),
                    ServiceAccountEmail: sdk.String("temporibus"),
                },
                URI: sdk.String("http://gloomy-blanket.name"),
            },
            LastAttemptTime: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                },
                Data: sdk.String("dolorum"),
                TopicName: sdk.String("dicta"),
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: sdk.String("nam"),
                MaxDoublings: sdk.Int(639921),
                MaxRetryDuration: sdk.String("occaecati"),
                MinBackoffDuration: sdk.String("fugit"),
                RetryCount: sdk.Int(537373),
            },
            Schedule: sdk.String("hic"),
            ScheduleTime: sdk.String("optio"),
            State: shared.JobStateEnumPaused.ToPointer(),
            Status: &shared.Status{
                Code: sdk.Int(105907),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                Message: sdk.String("ad"),
            },
            TimeZone: sdk.String("natus"),
            UserUpdateTime: sdk.String("sed"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [CloudschedulerProjectsLocationsJobsCreate](docs/projects/README.md#cloudschedulerprojectslocationsjobscreate) - Creates a job.
* [CloudschedulerProjectsLocationsJobsDelete](docs/projects/README.md#cloudschedulerprojectslocationsjobsdelete) - Deletes a job.
* [CloudschedulerProjectsLocationsJobsGet](docs/projects/README.md#cloudschedulerprojectslocationsjobsget) - Gets a job.
* [CloudschedulerProjectsLocationsJobsList](docs/projects/README.md#cloudschedulerprojectslocationsjobslist) - Lists jobs.
* [CloudschedulerProjectsLocationsJobsPatch](docs/projects/README.md#cloudschedulerprojectslocationsjobspatch) - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* [CloudschedulerProjectsLocationsJobsPause](docs/projects/README.md#cloudschedulerprojectslocationsjobspause) - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* [CloudschedulerProjectsLocationsJobsResume](docs/projects/README.md#cloudschedulerprojectslocationsjobsresume) - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* [CloudschedulerProjectsLocationsJobsRun](docs/projects/README.md#cloudschedulerprojectslocationsjobsrun) - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* [CloudschedulerProjectsLocationsList](docs/projects/README.md#cloudschedulerprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
