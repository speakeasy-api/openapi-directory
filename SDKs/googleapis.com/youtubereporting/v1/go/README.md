# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/youtubereporting/v1/go
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
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, operations.YoutubereportingJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            CreateTime: sdk.String("provident"),
            ExpireTime: sdk.String("distinctio"),
            ID: sdk.String("d9d8d69a-674e-40f4-a7cc-8796ed151a05"),
            Name: sdk.String("Timmy Satterfield"),
            ReportTypeID: sdk.String("at"),
            SystemManaged: sdk.Bool(false),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        OnBehalfOfContentOwner: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Jobs](docs/jobs/README.md)

* [YoutubereportingJobsCreate](docs/jobs/README.md#youtubereportingjobscreate) - Creates a job and returns it.
* [YoutubereportingJobsDelete](docs/jobs/README.md#youtubereportingjobsdelete) - Deletes a job.
* [YoutubereportingJobsGet](docs/jobs/README.md#youtubereportingjobsget) - Gets a job.
* [YoutubereportingJobsList](docs/jobs/README.md#youtubereportingjobslist) - Lists jobs.
* [YoutubereportingJobsReportsGet](docs/jobs/README.md#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [YoutubereportingJobsReportsList](docs/jobs/README.md#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### [Media](docs/media/README.md)

* [YoutubereportingMediaDownload](docs/media/README.md#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### [ReportTypes](docs/reporttypes/README.md)

* [YoutubereportingReportTypesList](docs/reporttypes/README.md#youtubereportingreporttypeslist) - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
