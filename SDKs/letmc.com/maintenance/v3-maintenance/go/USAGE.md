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
        PathParams: operations.MaintenanceControllerCreateMaintenanceJobFormPathParams{
            BranchID: "corrupti",
            ShortName: "provident",
        },
        Request: shared.MaintenanceIssueModel{
            Documents: []shared.MaintenanceDocumentModel{
                shared.MaintenanceDocumentModel{
                    MimeType: "quibusdam",
                    URL: "unde",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "nulla",
                    URL: "corrupti",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "illum",
                    URL: "vel",
                },
            },
            ExternalID: "error",
            IssueFault: "deserunt",
            IssueNotes: "suscipit",
            IssuePriority: "Medium",
            IssueTitle: "magnam",
            PropertyAddress1: "debitis",
            PropertyAddress2: "ipsa",
            PropertyAddress3: "delectus",
            PropertyAddress4: "tempora",
            PropertyCountry: "suscipit",
            PropertyPostcode: "molestiae",
            ReportedAt: "2022-06-14T03:35:55.580Z",
            TenantEMailAddress: "placeat",
            TenantForename: "voluptatum",
            TenantPhonePrimary: "iusto",
            TenantPhoneSecondary: "excepturi",
            TenantPresenceRequested: false,
            TenantSurname: "nisi",
            TenantTitle: "recusandae",
        },
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