# LandlordController

### Available Operations

* [LandlordControllerCreateMaintenancePreference](#landlordcontrollercreatemaintenancepreference) - Post tenancy maintenance preferences:-
* [LandlordControllerGetAccounts](#landlordcontrollergetaccounts) - Get the accounting details for the landlord.
* [LandlordControllerGetDocument](#landlordcontrollergetdocument) - Download a Document
* [LandlordControllerGetInvetoryReport](#landlordcontrollergetinvetoryreport) - Generate a Inventory PDF for a tenancy
* [LandlordControllerGetInvoice](#landlordcontrollergetinvoice) - Get an invoice pdf belonging to the landlord.
* [LandlordControllerGetLandlordCrmEntries](#landlordcontrollergetlandlordcrmentries) - Retrieve landlord's CRM ID
* [LandlordControllerGetMaintenanceJobs](#landlordcontrollergetmaintenancejobs) - Get Active maintenance jobs.
* [LandlordControllerGetProfitLossReport](#landlordcontrollergetprofitlossreport) - Generate a Profit and Loss Report
* [LandlordControllerGetRentArrears](#landlordcontrollergetrentarrears) - Rent Arrears
* [LandlordControllerGetSASReport](#landlordcontrollergetsasreport) - Generate a Self Assessment Tax Report
* [LandlordControllerGetSettings](#landlordcontrollergetsettings) - Get contact details of all linked landlords.
* [LandlordControllerGetSummaryDetails](#landlordcontrollergetsummarydetails) - Get the summary details for the landlord.
* [LandlordControllerGetTenancy](#landlordcontrollergettenancy) - Get tenancy details.
* [LandlordControllerGetTenancyAgreementReport](#landlordcontrollergettenancyagreementreport) - Generate a Tenancy Agreement Copy (PDF)

## LandlordControllerCreateMaintenancePreference

Post tenancy maintenance preferences:-

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerCreateMaintenancePreference(ctx, operations.LandlordControllerCreateMaintenancePreferenceRequest{
        Name: "Sabrina Oberbrunner",
        Notes: "magnam",
        ShortName: "debitis",
        TenancyID: "ipsa",
        Token: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordControllerCreateMaintenancePreference200ApplicationJSONString != nil {
        // handle response
    }
}
```

## LandlordControllerGetAccounts

Get the accounting details for the landlord.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetAccounts(ctx, operations.LandlordControllerGetAccountsRequest{
        ShortName: "tempora",
        Token: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordAccountingModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetDocument

Download a Document

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetDocument(ctx, operations.LandlordControllerGetDocumentRequest{
        ID: "7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b",
        ShortName: "officia",
        Token: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## LandlordControllerGetInvetoryReport

Generate a Inventory PDF for a tenancy

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetInvetoryReport(ctx, operations.LandlordControllerGetInvetoryReportRequest{
        ShortName: "fugit",
        TenancyID: "deleniti",
        Token: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## LandlordControllerGetInvoice

Get an invoice pdf belonging to the landlord.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetInvoice(ctx, operations.LandlordControllerGetInvoiceRequest{
        InvoiceID: "optio",
        ShortName: "totam",
        Token: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## LandlordControllerGetLandlordCrmEntries

Retrieve landlord's CRM ID

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetLandlordCrmEntries(ctx, operations.LandlordControllerGetLandlordCrmEntriesRequest{
        ShortName: "commodi",
        Token: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordCrmEntries != nil {
        // handle response
    }
}
```

## LandlordControllerGetMaintenanceJobs

Get Active maintenance jobs.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetMaintenanceJobs(ctx, operations.LandlordControllerGetMaintenanceJobsRequest{
        ShortName: "modi",
        Token: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordMaintenanceModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetProfitLossReport

Generate a Profit and Loss Report

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetProfitLossReport(ctx, operations.LandlordControllerGetProfitLossReportRequest{
        ShortName: "impedit",
        Token: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordProfitLossModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetRentArrears

Rent Arrears

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetRentArrears(ctx, operations.LandlordControllerGetRentArrearsRequest{
        ShortName: "esse",
        Token: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordRentArrearsModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetSASReport

Generate a Self Assessment Tax Report

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetSASReport(ctx, operations.LandlordControllerGetSASReportRequest{
        ShortName: "excepturi",
        Token: "aspernatur",
        YearEnd: 18789,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## LandlordControllerGetSettings

Get contact details of all linked landlords.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetSettings(ctx, operations.LandlordControllerGetSettingsRequest{
        ShortName: "ad",
        Token: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordSettingsModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetSummaryDetails

Get the summary details for the landlord.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetSummaryDetails(ctx, operations.LandlordControllerGetSummaryDetailsRequest{
        ShortName: "sed",
        Token: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordSummaryModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetTenancy

Get tenancy details.

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetTenancy(ctx, operations.LandlordControllerGetTenancyRequest{
        ShortName: "dolor",
        TenancyID: "natus",
        Token: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordTenancyModel != nil {
        // handle response
    }
}
```

## LandlordControllerGetTenancyAgreementReport

Generate a Tenancy Agreement Copy (PDF)

### Example Usage

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
    res, err := s.LandlordController.LandlordControllerGetTenancyAgreementReport(ctx, operations.LandlordControllerGetTenancyAgreementReportRequest{
        ShortName: "hic",
        TenancyID: "saepe",
        Token: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
