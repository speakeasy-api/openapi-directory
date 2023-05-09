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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Application.GetApplicationsStatus(ctx, operations.GetApplicationsStatusRequest{
        Key: "corrupti",
    })
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


### [Application](docs/application/README.md)

* [GetApplicationsStatus](docs/application/README.md#getapplicationsstatus) - Used to understand API usage

### [CustomReports](docs/customreports/README.md)

* [GetReportsCustomCreate](docs/customreports/README.md#getreportscustomcreate) - Step 3 of executing custom report
* [GetReportsCustomGenerate](docs/customreports/README.md#getreportscustomgenerate) - Step 1 of executing custom report
* [GetReportsCustomInsert](docs/customreports/README.md#getreportscustominsert) - Step 2 of executing custom report
* [PostReportsCustomCreate](docs/customreports/README.md#postreportscustomcreate) - Step 3 of executing custom report
* [PostReportsCustomGenerate](docs/customreports/README.md#postreportscustomgenerate) - Step 1 of executing custom report
* [PostReportsCustomInsert](docs/customreports/README.md#postreportscustominsert) - Step 2 of executing custom report

### [FollowerReports](docs/followerreports/README.md)

* [GetReportsTwitterCreate](docs/followerreports/README.md#getreportstwittercreate) - Used to create twitter follower report
* [PostReportsTwitterCreate](docs/followerreports/README.md#postreportstwittercreate) - Used to create twitter follower report

### [Reports](docs/reports/README.md)

* [GetReports](docs/reports/README.md#getreports) - Obtain report output
* [GetReportsDates](docs/reports/README.md#getreportsdates) - Get report dates available for a specific report
* [GetReportsStatus](docs/reports/README.md#getreportsstatus) - Get list of generated reports
* [PostReports](docs/reports/README.md#postreports) - Obtain report output
* [PostReportsDates](docs/reports/README.md#postreportsdates) - Get report dates available for a specific report
* [PostReportsStatus](docs/reports/README.md#postreportsstatus) - Get list of generated reports

### [TweetReports](docs/tweetreports/README.md)

* [GetReportsTweetCreate](docs/tweetreports/README.md#getreportstweetcreate) - Used to create tweet reports
* [PostReportsTweetCreate](docs/tweetreports/README.md#postreportstweetcreate) - Used to create tweet reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
