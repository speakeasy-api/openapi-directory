# Jobs

### Available Operations

* [YoutubereportingJobsCreate](#youtubereportingjobscreate) - Creates a job and returns it.
* [YoutubereportingJobsDelete](#youtubereportingjobsdelete) - Deletes a job.
* [YoutubereportingJobsGet](#youtubereportingjobsget) - Gets a job.
* [YoutubereportingJobsList](#youtubereportingjobslist) - Lists jobs.
* [YoutubereportingJobsReportsGet](#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [YoutubereportingJobsReportsList](#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

## YoutubereportingJobsCreate

Creates a job and returns it.

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
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, operations.YoutubereportingJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            CreateTime: sdk.String("occaecati"),
            ExpireTime: sdk.String("fugit"),
            ID: sdk.String("8fc81674-2cb7-4392-8592-9396fea7596e"),
            Name: sdk.String("Roger Beier"),
            ReportTypeID: sdk.String("mollitia"),
            SystemManaged: sdk.Bool(false),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        OnBehalfOfContentOwner: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.YoutubereportingJobsCreateSecurity{
        Option1: &operations.YoutubereportingJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## YoutubereportingJobsDelete

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
    res, err := s.Jobs.YoutubereportingJobsDelete(ctx, operations.YoutubereportingJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        JobID: "sapiente",
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        OnBehalfOfContentOwner: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.YoutubereportingJobsDeleteSecurity{
        Option1: &operations.YoutubereportingJobsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## YoutubereportingJobsGet

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
    res, err := s.Jobs.YoutubereportingJobsGet(ctx, operations.YoutubereportingJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        JobID: "molestiae",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("error"),
        OnBehalfOfContentOwner: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.YoutubereportingJobsGetSecurity{
        Option1: &operations.YoutubereportingJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## YoutubereportingJobsList

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
    res, err := s.Jobs.YoutubereportingJobsList(ctx, operations.YoutubereportingJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("sequi"),
        IncludeSystemManaged: sdk.Bool(false),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("ipsam"),
        OnBehalfOfContentOwner: sdk.String("id"),
        PageSize: sdk.Int64(820994),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.YoutubereportingJobsListSecurity{
        Option1: &operations.YoutubereportingJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## YoutubereportingJobsReportsGet

Gets the metadata of a specific report.

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
    res, err := s.Jobs.YoutubereportingJobsReportsGet(ctx, operations.YoutubereportingJobsReportsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        JobID: "nihil",
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        OnBehalfOfContentOwner: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        ReportID: "voluptate",
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.YoutubereportingJobsReportsGetSecurity{
        Option1: &operations.YoutubereportingJobsReportsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## YoutubereportingJobsReportsList

Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

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
    res, err := s.Jobs.YoutubereportingJobsReportsList(ctx, operations.YoutubereportingJobsReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        CreatedAfter: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        JobID: "dolore",
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        OnBehalfOfContentOwner: sdk.String("harum"),
        PageSize: sdk.Int64(317983),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        StartTimeAtOrAfter: sdk.String("repudiandae"),
        StartTimeBefore: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.YoutubereportingJobsReportsListSecurity{
        Option1: &operations.YoutubereportingJobsReportsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsResponse != nil {
        // handle response
    }
}
```
