# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/letmc.com/maintenance/v3-maintenance/go
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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MaintenanceController.MaintenanceControllerCreateMaintenanceJobForm(ctx, operations.MaintenanceControllerCreateMaintenanceJobFormRequest{
        MaintenanceIssueModel: shared.MaintenanceIssueModel{
            Documents: []shared.MaintenanceDocumentModel{
                shared.MaintenanceDocumentModel{
                    MimeType: sdk.String("provident"),
                    URL: sdk.String("distinctio"),
                },
                shared.MaintenanceDocumentModel{
                    MimeType: sdk.String("quibusdam"),
                    URL: sdk.String("unde"),
                },
                shared.MaintenanceDocumentModel{
                    MimeType: sdk.String("nulla"),
                    URL: sdk.String("corrupti"),
                },
            },
            ExternalID: sdk.String("illum"),
            IssueFault: sdk.String("vel"),
            IssueNotes: sdk.String("error"),
            IssuePriority: shared.MaintenanceIssueModelIssuePriorityEnumMedium.ToPointer(),
            IssueTitle: sdk.String("suscipit"),
            PropertyAddress1: sdk.String("iure"),
            PropertyAddress2: sdk.String("magnam"),
            PropertyAddress3: sdk.String("debitis"),
            PropertyAddress4: sdk.String("ipsa"),
            PropertyCountry: sdk.String("delectus"),
            PropertyPostcode: sdk.String("tempora"),
            ReportedAt: types.MustTimeFromString("2022-07-10T15:39:12.517Z"),
            TenantEMailAddress: sdk.String("minus"),
            TenantForename: sdk.String("placeat"),
            TenantPhonePrimary: sdk.String("voluptatum"),
            TenantPhoneSecondary: sdk.String("iusto"),
            TenantPresenceRequested: sdk.Bool(false),
            TenantSurname: sdk.String("excepturi"),
            TenantTitle: sdk.String("nisi"),
        },
        BranchID: "recusandae",
        ShortName: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [MaintenanceController](docs/maintenancecontroller/README.md)

* [MaintenanceControllerCreateMaintenanceJobForm](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobform) - Create a maintenance job for a specific branch
* [MaintenanceControllerCreateMaintenanceJobJSON](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobjson) - Create a maintenance job for a specific branch
* [MaintenanceControllerCreateMaintenanceJobRaw](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobraw) - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
