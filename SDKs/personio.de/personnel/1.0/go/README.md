# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/personio.de/personnel/1.0/go
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
    res, err := s.DeleteCompanyAttendancesID(ctx, operations.DeleteCompanyAttendancesIDRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteCompanyAttendancesID](docs/sdk/README.md#deletecompanyattendancesid) - This endpoint is responsible for deleting attendance data for the company employees.
* [DeleteCompanyTimeOffsID](docs/sdk/README.md#deletecompanytimeoffsid) - This endpoint is responsible for deleting absence period data for the company employees.
* [GetCompanyAttendances](docs/sdk/README.md#getcompanyattendances) - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* [GetCompanyEmployees](docs/sdk/README.md#getcompanyemployees) - List Employees
* [GetCompanyEmployeesEmployeeID](docs/sdk/README.md#getcompanyemployeesemployeeid) - Show employee by ID
* [GetCompanyEmployeesEmployeeIDProfilePictureWidth](docs/sdk/README.md#getcompanyemployeesemployeeidprofilepicturewidth) - Show employee profile picture
* [GetCompanyTimeOffTypes](docs/sdk/README.md#getcompanytimeofftypes) - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* [GetCompanyTimeOffs](docs/sdk/README.md#getcompanytimeoffs) - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* [GetCompanyTimeOffsID](docs/sdk/README.md#getcompanytimeoffsid) - Absence Period
* [PatchCompanyAttendancesID](docs/sdk/README.md#patchcompanyattendancesid) - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* [PostCompanyAttendances](docs/sdk/README.md#postcompanyattendances) - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* [PostCompanyEmployees](docs/sdk/README.md#postcompanyemployees) - Create an employee
* [PostCompanyTimeOffs](docs/sdk/README.md#postcompanytimeoffs) - This endpoint is responsible for adding absence data for the company employees.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
