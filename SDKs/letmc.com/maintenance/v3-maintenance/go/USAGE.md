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