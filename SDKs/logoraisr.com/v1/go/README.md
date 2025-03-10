# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/logoraisr.com/v1/go
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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Previews.PreviewsRead(ctx, operations.PreviewsReadRequest{
        FileID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Previews](docs/previews/README.md)

* [PreviewsRead](docs/previews/README.md#previewsread) - Get preview image of uploaded file

### [Processes](docs/processes/README.md)

* [ProcessesList](docs/processes/README.md#processeslist) - Get process list.

### [Projects](docs/projects/README.md)

* [ProjectsCreate](docs/projects/README.md#projectscreate) - Create a new project.
* [ProjectsList](docs/projects/README.md#projectslist) - Get user project list.
* [ProjectsRead](docs/projects/README.md#projectsread) - Get project details.

### [Reports](docs/reports/README.md)

* [ReportsCreate](docs/reports/README.md#reportscreate) - Create a new report.
* [ReportsList](docs/reports/README.md#reportslist) - Get user report list.
* [ReportsRead](docs/reports/README.md#reportsread) - Get report details.

### [Results](docs/results/README.md)

* [ResultsRead](docs/results/README.md#resultsread) - Get the result from image processing

### [Uploads](docs/uploads/README.md)

* [UploadsCreate](docs/uploads/README.md#uploadscreate) - Upload a new image
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
