# MaintenanceController

### Available Operations

* [MaintenanceControllerCreateMaintenanceJobForm](#maintenancecontrollercreatemaintenancejobform) - Create a maintenance job for a specific branch
* [MaintenanceControllerCreateMaintenanceJobJSON](#maintenancecontrollercreatemaintenancejobjson) - Create a maintenance job for a specific branch
* [MaintenanceControllerCreateMaintenanceJobRaw](#maintenancecontrollercreatemaintenancejobraw) - Create a maintenance job for a specific branch

## MaintenanceControllerCreateMaintenanceJobForm

Create a maintenance job for a specific branch

### Example Usage

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
                    MimeType: sdk.String("quis"),
                    URL: sdk.String("veritatis"),
                },
            },
            ExternalID: sdk.String("deserunt"),
            IssueFault: sdk.String("perferendis"),
            IssueNotes: sdk.String("ipsam"),
            IssuePriority: shared.MaintenanceIssueModelIssuePriorityEnumHigh.ToPointer(),
            IssueTitle: sdk.String("sapiente"),
            PropertyAddress1: sdk.String("quo"),
            PropertyAddress2: sdk.String("odit"),
            PropertyAddress3: sdk.String("at"),
            PropertyAddress4: sdk.String("at"),
            PropertyCountry: sdk.String("maiores"),
            PropertyPostcode: sdk.String("molestiae"),
            ReportedAt: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
            TenantEMailAddress: sdk.String("esse"),
            TenantForename: sdk.String("totam"),
            TenantPhonePrimary: sdk.String("porro"),
            TenantPhoneSecondary: sdk.String("dolorum"),
            TenantPresenceRequested: sdk.Bool(false),
            TenantSurname: sdk.String("dicta"),
            TenantTitle: sdk.String("nam"),
        },
        BranchID: "officia",
        ShortName: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## MaintenanceControllerCreateMaintenanceJobJSON

Create a maintenance job for a specific branch

### Example Usage

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
    res, err := s.MaintenanceController.MaintenanceControllerCreateMaintenanceJobJSON(ctx, operations.MaintenanceControllerCreateMaintenanceJobJSONRequest{
        MaintenanceIssueModel: shared.MaintenanceIssueModel{
            Documents: []shared.MaintenanceDocumentModel{
                shared.MaintenanceDocumentModel{
                    MimeType: sdk.String("deleniti"),
                    URL: sdk.String("hic"),
                },
            },
            ExternalID: sdk.String("optio"),
            IssueFault: sdk.String("totam"),
            IssueNotes: sdk.String("beatae"),
            IssuePriority: shared.MaintenanceIssueModelIssuePriorityEnumMedium.ToPointer(),
            IssueTitle: sdk.String("molestiae"),
            PropertyAddress1: sdk.String("modi"),
            PropertyAddress2: sdk.String("qui"),
            PropertyAddress3: sdk.String("impedit"),
            PropertyAddress4: sdk.String("cum"),
            PropertyCountry: sdk.String("esse"),
            PropertyPostcode: sdk.String("ipsum"),
            ReportedAt: types.MustTimeFromString("2022-09-24T06:58:38.511Z"),
            TenantEMailAddress: sdk.String("perferendis"),
            TenantForename: sdk.String("ad"),
            TenantPhonePrimary: sdk.String("natus"),
            TenantPhoneSecondary: sdk.String("sed"),
            TenantPresenceRequested: sdk.Bool(false),
            TenantSurname: sdk.String("iste"),
            TenantTitle: sdk.String("dolor"),
        },
        BranchID: "natus",
        ShortName: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## MaintenanceControllerCreateMaintenanceJobRaw

Create a maintenance job for a specific branch

### Example Usage

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
    res, err := s.MaintenanceController.MaintenanceControllerCreateMaintenanceJobRaw(ctx, operations.MaintenanceControllerCreateMaintenanceJobRawRequest{
        RequestBody: []byte("hic"),
        BranchID: "saepe",
        ShortName: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
