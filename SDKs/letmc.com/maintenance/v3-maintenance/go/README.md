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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MaintenanceControllerCreateMaintenanceJobFormRequest{
        MaintenanceIssueModel: shared.MaintenanceIssueModel{
            Documents: []shared.MaintenanceDocumentModel{
                shared.MaintenanceDocumentModel{
                    MimeType: "provident",
                    URL: "distinctio",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "quibusdam",
                    URL: "unde",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "nulla",
                    URL: "corrupti",
                },
            },
            ExternalID: "illum",
            IssueFault: "vel",
            IssueNotes: "error",
            IssuePriority: "Medium",
            IssueTitle: "suscipit",
            PropertyAddress1: "iure",
            PropertyAddress2: "magnam",
            PropertyAddress3: "debitis",
            PropertyAddress4: "ipsa",
            PropertyCountry: "delectus",
            PropertyPostcode: "tempora",
            ReportedAt: "2022-07-10T15:39:12.517Z",
            TenantEMailAddress: "minus",
            TenantForename: "placeat",
            TenantPhonePrimary: "voluptatum",
            TenantPhoneSecondary: "iusto",
            TenantPresenceRequested: false,
            TenantSurname: "excepturi",
            TenantTitle: "nisi",
        },
        BranchID: "recusandae",
        ShortName: "temporibus",
    }

    ctx := context.Background()
    res, err := s.MaintenanceController.MaintenanceControllerCreateMaintenanceJobForm(ctx, req)
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


### MaintenanceController

* `MaintenanceControllerCreateMaintenanceJobForm` - Create a maintenance job for a specific branch
* `MaintenanceControllerCreateMaintenanceJobJSON` - Create a maintenance job for a specific branch
* `MaintenanceControllerCreateMaintenanceJobRaw` - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
