# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_bulkexports_v1/1.43.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateExportCustomJob(ctx, operations.CreateExportCustomJobRequest{
        RequestBody: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: sdk.String("Larue_Rau85@yahoo.com"),
            EndDay: "corrupti",
            FriendlyName: "illum",
            StartDay: "vel",
            WebhookMethod: sdk.String("error"),
            WebhookURL: sdk.String("deserunt"),
        },
        ResourceType: "suscipit",
    }, operations.CreateExportCustomJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateExportCustomJob](docs/sdk/README.md#createexportcustomjob)
* [DeleteJob](docs/sdk/README.md#deletejob)
* [FetchDay](docs/sdk/README.md#fetchday) - Fetch a specific Day.
* [FetchExport](docs/sdk/README.md#fetchexport) - Fetch a specific Export.
* [FetchExportConfiguration](docs/sdk/README.md#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [FetchJob](docs/sdk/README.md#fetchjob)
* [ListDay](docs/sdk/README.md#listday) - Retrieve a list of all Days for a resource.
* [ListExportCustomJob](docs/sdk/README.md#listexportcustomjob)
* [UpdateExportConfiguration](docs/sdk/README.md#updateexportconfiguration) - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
