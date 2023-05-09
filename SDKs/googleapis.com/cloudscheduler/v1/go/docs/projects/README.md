# Projects

### Available Operations

* [CloudschedulerProjectsLocationsJobsCreate](#cloudschedulerprojectslocationsjobscreate) - Creates a job.
* [CloudschedulerProjectsLocationsJobsDelete](#cloudschedulerprojectslocationsjobsdelete) - Deletes a job.
* [CloudschedulerProjectsLocationsJobsGet](#cloudschedulerprojectslocationsjobsget) - Gets a job.
* [CloudschedulerProjectsLocationsJobsList](#cloudschedulerprojectslocationsjobslist) - Lists jobs.
* [CloudschedulerProjectsLocationsJobsPatch](#cloudschedulerprojectslocationsjobspatch) - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* [CloudschedulerProjectsLocationsJobsPause](#cloudschedulerprojectslocationsjobspause) - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* [CloudschedulerProjectsLocationsJobsResume](#cloudschedulerprojectslocationsjobsresume) - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* [CloudschedulerProjectsLocationsJobsRun](#cloudschedulerprojectslocationsjobsrun) - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* [CloudschedulerProjectsLocationsList](#cloudschedulerprojectslocationslist) - Lists information about the supported locations for this service.

## CloudschedulerProjectsLocationsJobsCreate

Creates a job.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: sdk.String("saepe"),
                    Instance: sdk.String("quidem"),
                    Service: sdk.String("architecto"),
                    Version: sdk.String("ipsa"),
                },
                Body: sdk.String("reiciendis"),
                Headers: map[string]string{
                    "mollitia": "laborum",
                    "dolores": "dolorem",
                    "corporis": "explicabo",
                },
                HTTPMethod: shared.AppEngineHTTPTargetHTTPMethodEnumPatch.ToPointer(),
                RelativeURI: sdk.String("enim"),
            },
            AttemptDeadline: sdk.String("omnis"),
            Description: sdk.String("nemo"),
            HTTPTarget: &shared.HTTPTarget{
                Body: sdk.String("minima"),
                Headers: map[string]string{
                    "accusantium": "iure",
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumDelete.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("dolorem"),
                    ServiceAccountEmail: sdk.String("culpa"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("consequuntur"),
                    ServiceAccountEmail: sdk.String("repellat"),
                },
                URI: sdk.String("https://oily-desk.info"),
            },
            LastAttemptTime: sdk.String("quam"),
            Name: sdk.String("Shannon Mueller"),
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "laborum": "animi",
                },
                Data: sdk.String("enim"),
                TopicName: sdk.String("odit"),
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: sdk.String("quo"),
                MaxDoublings: sdk.Int(196582),
                MaxRetryDuration: sdk.String("tenetur"),
                MinBackoffDuration: sdk.String("ipsam"),
                RetryCount: sdk.Int(662527),
            },
            Schedule: sdk.String("possimus"),
            ScheduleTime: sdk.String("aut"),
            State: shared.JobStateEnumStateUnspecified.ToPointer(),
            Status: &shared.Status{
                Code: sdk.Int(622846),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quasi": "reiciendis",
                        "voluptatibus": "vero",
                        "nihil": "praesentium",
                    },
                    map[string]interface{}{
                        "ipsa": "omnis",
                        "voluptate": "cum",
                        "perferendis": "doloremque",
                        "reprehenderit": "ut",
                    },
                    map[string]interface{}{
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    map[string]interface{}{
                        "repudiandae": "quae",
                        "ipsum": "quidem",
                    },
                },
                Message: sdk.String("molestias"),
            },
            TimeZone: sdk.String("excepturi"),
            UserUpdateTime: sdk.String("pariatur"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("repudiandae"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("incidunt"),
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

## CloudschedulerProjectsLocationsJobsDelete

Deletes a job.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsDelete(ctx, operations.CloudschedulerProjectsLocationsJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        Name: "Marty Green",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.CloudschedulerProjectsLocationsJobsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudschedulerProjectsLocationsJobsGet

Gets a job.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsGet(ctx, operations.CloudschedulerProjectsLocationsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        Name: "Eddie Prosacco",
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.CloudschedulerProjectsLocationsJobsGetSecurity{
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

## CloudschedulerProjectsLocationsJobsList

Lists jobs.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsList(ctx, operations.CloudschedulerProjectsLocationsJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(891555),
        PageToken: sdk.String("a"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("illum"),
    }, operations.CloudschedulerProjectsLocationsJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## CloudschedulerProjectsLocationsJobsPatch

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsPatch(ctx, operations.CloudschedulerProjectsLocationsJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: sdk.String("rerum"),
                    Instance: sdk.String("dicta"),
                    Service: sdk.String("magnam"),
                    Version: sdk.String("cumque"),
                },
                Body: sdk.String("facere"),
                Headers: map[string]string{
                    "aliquid": "laborum",
                    "accusamus": "non",
                },
                HTTPMethod: shared.AppEngineHTTPTargetHTTPMethodEnumPut.ToPointer(),
                RelativeURI: sdk.String("enim"),
            },
            AttemptDeadline: sdk.String("accusamus"),
            Description: sdk.String("delectus"),
            HTTPTarget: &shared.HTTPTarget{
                Body: sdk.String("quidem"),
                Headers: map[string]string{
                    "nam": "id",
                    "blanditiis": "deleniti",
                    "sapiente": "amet",
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumDelete.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("nisi"),
                    ServiceAccountEmail: sdk.String("vel"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("natus"),
                    ServiceAccountEmail: sdk.String("omnis"),
                },
                URI: sdk.String("http://aggressive-interject.biz"),
            },
            LastAttemptTime: sdk.String("distinctio"),
            Name: sdk.String("Leroy Greenfelder"),
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "eum": "vero",
                    "aspernatur": "architecto",
                    "magnam": "et",
                },
                Data: sdk.String("excepturi"),
                TopicName: sdk.String("ullam"),
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: sdk.String("provident"),
                MaxDoublings: sdk.Int(551816),
                MaxRetryDuration: sdk.String("sint"),
                MinBackoffDuration: sdk.String("accusantium"),
                RetryCount: sdk.Int(653201),
            },
            Schedule: sdk.String("reiciendis"),
            ScheduleTime: sdk.String("mollitia"),
            State: shared.JobStateEnumEnabled.ToPointer(),
            Status: &shared.Status{
                Code: sdk.Int(431418),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "odit": "nemo",
                        "quasi": "iure",
                        "doloribus": "debitis",
                        "eius": "maxime",
                    },
                },
                Message: sdk.String("deleniti"),
            },
            TimeZone: sdk.String("facilis"),
            UserUpdateTime: sdk.String("in"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("expedita"),
        Name: "Kristie Spencer",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UpdateMask: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
    }, operations.CloudschedulerProjectsLocationsJobsPatchSecurity{
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

## CloudschedulerProjectsLocationsJobsPause

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsPause(ctx, operations.CloudschedulerProjectsLocationsJobsPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quo": "illum",
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("odit"),
        Name: "Donna Bernhard",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nam"),
    }, operations.CloudschedulerProjectsLocationsJobsPauseSecurity{
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

## CloudschedulerProjectsLocationsJobsResume

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsResume(ctx, operations.CloudschedulerProjectsLocationsJobsResumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "nemo": "voluptatibus",
            "perferendis": "fugiat",
            "amet": "aut",
            "cumque": "corporis",
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("quis"),
        Name: "Lance Becker",
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("minus"),
    }, operations.CloudschedulerProjectsLocationsJobsResumeSecurity{
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

## CloudschedulerProjectsLocationsJobsRun

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsRun(ctx, operations.CloudschedulerProjectsLocationsJobsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "vero": "nostrum",
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        Name: "Robyn Cruickshank",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.CloudschedulerProjectsLocationsJobsRunSecurity{
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

## CloudschedulerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.CloudschedulerProjectsLocationsList(ctx, operations.CloudschedulerProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        Name: "Loren Renner",
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(398221),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("qui"),
    }, operations.CloudschedulerProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
