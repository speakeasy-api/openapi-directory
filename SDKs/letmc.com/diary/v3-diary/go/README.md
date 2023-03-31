# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/letmc.com/diary/v3-diary/go
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

    req := operations.CompanyControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.CompanyController.CompanyControllerGetBranches(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisingBranchModelResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CompanyController

* `CompanyControllerGetBranches` - All branches defined for a company
* `GetV3DiaryShortNameCompanyBranchesBranchID` - Get a specific branch given its unique Object ID (OID)

### DiaryController

* `DiaryControllerAddFeedbackForm` - Submit appointment feedback
* `DiaryControllerAddFeedbackJSON` - Submit appointment feedback
* `DiaryControllerAddFeedbackRaw` - Submit appointment feedback
* `DiaryControllerCancelAppointment` - Cancel an existing appointment using its unique identifier
* `DiaryControllerDeleteAppointment` - Delete an existing appointment using its unique identifier
* `DiaryControllerGetAllocations` - Get a list of all available allocations for a date + 7 days for a specified appointment type
* `DiaryControllerGetAppointment` - Get an appointment by ID
* `DiaryControllerGetAppointmentTypes` - A collection of all diary appointment types
* `DiaryControllerGetAppointmentsBetweenDates` - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* `DiaryControllerGetRecurringAppointments` - Retrieves all recurring appointments:-
* `DiaryControllerPostAppointmentForm` - Post an appointment into a valid diary allocation
* `DiaryControllerPostAppointmentJSON` - Post an appointment into a valid diary allocation
* `DiaryControllerPostAppointmentRaw` - Post an appointment into a valid diary allocation
* `DiaryControllerPutAppointmentForm` - Update an existing appointment using its unique identifier
* `DiaryControllerPutAppointmentJSON` - Update an existing appointment using its unique identifier
* `DiaryControllerPutAppointmentRaw` - Update an existing appointment using its unique identifier
* `DiaryControllerSearchGuest` - Match Guest Parameters with existing applicants
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
