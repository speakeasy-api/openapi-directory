# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/onsched.com/consumer/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.DeleteConsumerV1AppointmentsID(ctx, operations.DeleteConsumerV1AppointmentsIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Appointments](docs/appointments/README.md)

* [DeleteConsumerV1AppointmentsID](docs/appointments/README.md#deleteconsumerv1appointmentsid) - Delete Appointment
* [GetConsumerV1Appointments](docs/appointments/README.md#getconsumerv1appointments) - Get Appointments
* [GetConsumerV1AppointmentsBookingfields](docs/appointments/README.md#getconsumerv1appointmentsbookingfields) - Get Custom Fields Labels
* [GetConsumerV1AppointmentsCustomfields](docs/appointments/README.md#getconsumerv1appointmentscustomfields) - Get Custom Fields List
* [GetConsumerV1AppointmentsID](docs/appointments/README.md#getconsumerv1appointmentsid) - Get Appointment
* [PostConsumerV1Appointments](docs/appointments/README.md#postconsumerv1appointments) - Create Appointment
* [PutConsumerV1AppointmentsIDBook](docs/appointments/README.md#putconsumerv1appointmentsidbook) - Book Appointment
* [PutConsumerV1AppointmentsIDCancel](docs/appointments/README.md#putconsumerv1appointmentsidcancel) - Cancel Appointment
* [PutConsumerV1AppointmentsIDConfirm](docs/appointments/README.md#putconsumerv1appointmentsidconfirm) - Confirm Appointment
* [PutConsumerV1AppointmentsIDNoshow](docs/appointments/README.md#putconsumerv1appointmentsidnoshow) - Set NoShow Status
* [PutConsumerV1AppointmentsIDReschedule](docs/appointments/README.md#putconsumerv1appointmentsidreschedule) - Reschedule Appointment
* [PutConsumerV1AppointmentsIDReserve](docs/appointments/README.md#putconsumerv1appointmentsidreserve) - Reserve Appointment

### [Availability](docs/availability/README.md)

* [GetConsumerV1AvailabilityServiceIDStartDateEndDate](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddate) - Get Available Times
* [GetConsumerV1AvailabilityServiceIDStartDateEndDateDays](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddatedays) - Get Available Days
* [GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddateunavailable) - Get Unavailable Times

### [Customers](docs/customers/README.md)

* [DeleteConsumerV1CustomersID](docs/customers/README.md#deleteconsumerv1customersid) - Delete Customer
* [GetConsumerV1Customers](docs/customers/README.md#getconsumerv1customers) - List Customers
* [GetConsumerV1CustomersBookingfields](docs/customers/README.md#getconsumerv1customersbookingfields) - Get Customer Booking Fields
* [GetConsumerV1CustomersCountries](docs/customers/README.md#getconsumerv1customerscountries) - List Country Codes
* [GetConsumerV1CustomersCustomfields](docs/customers/README.md#getconsumerv1customerscustomfields) - Get Customer Custom Fields
* [GetConsumerV1CustomersStates](docs/customers/README.md#getconsumerv1customersstates) - List Country States
* [GetConsumerV1CustomersID](docs/customers/README.md#getconsumerv1customersid) - Get Customer
* [PostConsumerV1Customers](docs/customers/README.md#postconsumerv1customers) - Create Customer
* [PutConsumerV1CustomersID](docs/customers/README.md#putconsumerv1customersid) - Update Customer

### [Locations](docs/locations/README.md)

* [GetConsumerV1Locations](docs/locations/README.md#getconsumerv1locations) - List Locations
* [GetConsumerV1LocationsID](docs/locations/README.md#getconsumerv1locationsid) - Get Location

### [ResourceGroups](docs/resourcegroups/README.md)

* [GetConsumerV1Resourcegroups](docs/resourcegroups/README.md#getconsumerv1resourcegroups) - List Resource Groups
* [GetConsumerV1ResourcegroupsID](docs/resourcegroups/README.md#getconsumerv1resourcegroupsid) - Get Resource Group

### [Resources](docs/resources/README.md)

* [GetConsumerV1Resources](docs/resources/README.md#getconsumerv1resources) - List Resources
* [GetConsumerV1ResourcesID](docs/resources/README.md#getconsumerv1resourcesid) - Get Resource
* [GetConsumerV1ResourcesIDServices](docs/resources/README.md#getconsumerv1resourcesidservices) - Get Resource Linked Services

### [ServiceGroups](docs/servicegroups/README.md)

* [GetConsumerV1Servicegroups](docs/servicegroups/README.md#getconsumerv1servicegroups) - List Service Groups
* [GetConsumerV1ServicegroupsID](docs/servicegroups/README.md#getconsumerv1servicegroupsid) - Get Service Group

### [Services](docs/services/README.md)

* [GetConsumerV1Services](docs/services/README.md#getconsumerv1services) - List Services
* [GetConsumerV1ServicesAllocationsID](docs/services/README.md#getconsumerv1servicesallocationsid) - Get Service Allocation
* [GetConsumerV1ServicesID](docs/services/README.md#getconsumerv1servicesid) - Get Service
* [GetConsumerV1ServicesIDAllocations](docs/services/README.md#getconsumerv1servicesidallocations) - List Service Allocations
* [GetConsumerV1ServicesIDResources](docs/services/README.md#getconsumerv1servicesidresources) - List Resources for Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
