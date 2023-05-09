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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanyController.CompanyControllerGetBranches(ctx, operations.CompanyControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    })
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


### [CompanyController](docs/companycontroller/README.md)

* [CompanyControllerGetBranches](docs/companycontroller/README.md#companycontrollergetbranches) - All branches defined for a company
* [GetV3DiaryShortNameCompanyBranchesBranchID](docs/companycontroller/README.md#getv3diaryshortnamecompanybranchesbranchid) - Get a specific branch given its unique Object ID (OID)

### [DiaryController](docs/diarycontroller/README.md)

* [DiaryControllerAddFeedbackForm](docs/diarycontroller/README.md#diarycontrolleraddfeedbackform) - Submit appointment feedback
* [DiaryControllerAddFeedbackJSON](docs/diarycontroller/README.md#diarycontrolleraddfeedbackjson) - Submit appointment feedback
* [DiaryControllerAddFeedbackRaw](docs/diarycontroller/README.md#diarycontrolleraddfeedbackraw) - Submit appointment feedback
* [DiaryControllerCancelAppointment](docs/diarycontroller/README.md#diarycontrollercancelappointment) - Cancel an existing appointment using its unique identifier
* [DiaryControllerDeleteAppointment](docs/diarycontroller/README.md#diarycontrollerdeleteappointment) - Delete an existing appointment using its unique identifier
* [DiaryControllerGetAllocations](docs/diarycontroller/README.md#diarycontrollergetallocations) - Get a list of all available allocations for a date + 7 days for a specified appointment type
* [DiaryControllerGetAppointment](docs/diarycontroller/README.md#diarycontrollergetappointment) - Get an appointment by ID
* [DiaryControllerGetAppointmentTypes](docs/diarycontroller/README.md#diarycontrollergetappointmenttypes) - A collection of all diary appointment types
* [DiaryControllerGetAppointmentsBetweenDates](docs/diarycontroller/README.md#diarycontrollergetappointmentsbetweendates) - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* [DiaryControllerGetRecurringAppointments](docs/diarycontroller/README.md#diarycontrollergetrecurringappointments) - Retrieves all recurring appointments:-
* [DiaryControllerPostAppointmentForm](docs/diarycontroller/README.md#diarycontrollerpostappointmentform) - Post an appointment into a valid diary allocation
* [DiaryControllerPostAppointmentJSON](docs/diarycontroller/README.md#diarycontrollerpostappointmentjson) - Post an appointment into a valid diary allocation
* [DiaryControllerPostAppointmentRaw](docs/diarycontroller/README.md#diarycontrollerpostappointmentraw) - Post an appointment into a valid diary allocation
* [DiaryControllerPutAppointmentForm](docs/diarycontroller/README.md#diarycontrollerputappointmentform) - Update an existing appointment using its unique identifier
* [DiaryControllerPutAppointmentJSON](docs/diarycontroller/README.md#diarycontrollerputappointmentjson) - Update an existing appointment using its unique identifier
* [DiaryControllerPutAppointmentRaw](docs/diarycontroller/README.md#diarycontrollerputappointmentraw) - Update an existing appointment using its unique identifier
* [DiaryControllerSearchGuest](docs/diarycontroller/README.md#diarycontrollersearchguest) - Match Guest Parameters with existing applicants
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
