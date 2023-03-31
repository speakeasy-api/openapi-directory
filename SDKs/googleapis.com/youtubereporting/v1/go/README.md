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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.YoutubereportingJobsCreateRequest{
        DollarXgafv: "2",
        Job: &shared.Job{
            CreateTime: "provident",
            ExpireTime: "distinctio",
            ID: "quibusdam",
            Name: "unde",
            ReportTypeID: "nulla",
            SystemManaged: false,
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        OnBehalfOfContentOwner: "iure",
        PrettyPrint: false,
        QuotaUser: "magnam",
        UploadType: "debitis",
        UploadProtocol: "ipsa",
    }

    ctx := context.Background()
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, req, operations.YoutubereportingJobsCreateSecurity{
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


### Jobs

* `YoutubereportingJobsCreate` - Creates a job and returns it.
* `YoutubereportingJobsDelete` - Deletes a job.
* `YoutubereportingJobsGet` - Gets a job.
* `YoutubereportingJobsList` - Lists jobs.
* `YoutubereportingJobsReportsGet` - Gets the metadata of a specific report.
* `YoutubereportingJobsReportsList` - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### Media

* `YoutubereportingMediaDownload` - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### ReportTypes

* `YoutubereportingReportTypesList` - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
