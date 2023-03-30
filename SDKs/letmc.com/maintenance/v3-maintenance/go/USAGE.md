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
            BranchID: "unde",
            ShortName: "deserunt",
        },
        Request: shared.MaintenanceIssueModel{
            Documents: []shared.MaintenanceDocumentModel{
                shared.MaintenanceDocumentModel{
                    MimeType: "nulla",
                    URL: "id",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "vero",
                    URL: "perspiciatis",
                },
                shared.MaintenanceDocumentModel{
                    MimeType: "nulla",
                    URL: "nihil",
                },
            },
            ExternalID: "fuga",
            IssueFault: "facilis",
            IssueNotes: "eum",
            IssuePriority: "Medium",
            IssueTitle: "ullam",
            PropertyAddress1: "saepe",
            PropertyAddress2: "inventore",
            PropertyAddress3: "sapiente",
            PropertyAddress4: "enim",
            PropertyCountry: "eum",
            PropertyPostcode: "voluptatum",
            ReportedAt: "2022-06-14T01:14:21.073Z",
            TenantEMailAddress: "vel",
            TenantForename: "non",
            TenantPhonePrimary: "deleniti",
            TenantPhoneSecondary: "similique",
            TenantPresenceRequested: false,
            TenantSurname: "reprehenderit",
            TenantTitle: "molestiae",
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