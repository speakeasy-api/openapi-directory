# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/statsocial.com/1.0.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetApplicationsStatusRequest{
        Key: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Application.GetApplicationsStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Application

* `GetApplicationsStatus` - Used to understand API usage

### CustomReports

* `GetReportsCustomCreate` - Step 3 of executing custom report
* `GetReportsCustomGenerate` - Step 1 of executing custom report
* `GetReportsCustomInsert` - Step 2 of executing custom report
* `PostReportsCustomCreate` - Step 3 of executing custom report
* `PostReportsCustomGenerate` - Step 1 of executing custom report
* `PostReportsCustomInsert` - Step 2 of executing custom report

### FollowerReports

* `GetReportsTwitterCreate` - Used to create twitter follower report
* `PostReportsTwitterCreate` - Used to create twitter follower report

### Reports

* `GetReports` - Obtain report output
* `GetReportsDates` - Get report dates available for a specific report
* `GetReportsStatus` - Get list of generated reports
* `PostReports` - Obtain report output
* `PostReportsDates` - Get report dates available for a specific report
* `PostReportsStatus` - Get list of generated reports

### TweetReports

* `GetReportsTweetCreate` - Used to create tweet reports
* `PostReportsTweetCreate` - Used to create tweet reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
