# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConsumerV1AppointmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConsumerV1AppointmentsIdRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->appointments->deleteConsumerV1AppointmentsId($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [appointments](docs/appointments/README.md)

* [deleteConsumerV1AppointmentsId](docs/appointments/README.md#deleteconsumerv1appointmentsid) - Delete Appointment
* [getConsumerV1Appointments](docs/appointments/README.md#getconsumerv1appointments) - Get Appointments
* [getConsumerV1AppointmentsBookingfields](docs/appointments/README.md#getconsumerv1appointmentsbookingfields) - Get Custom Fields Labels
* [getConsumerV1AppointmentsCustomfields](docs/appointments/README.md#getconsumerv1appointmentscustomfields) - Get Custom Fields List
* [getConsumerV1AppointmentsId](docs/appointments/README.md#getconsumerv1appointmentsid) - Get Appointment
* [postConsumerV1Appointments](docs/appointments/README.md#postconsumerv1appointments) - Create Appointment
* [putConsumerV1AppointmentsIdBook](docs/appointments/README.md#putconsumerv1appointmentsidbook) - Book Appointment
* [putConsumerV1AppointmentsIdCancel](docs/appointments/README.md#putconsumerv1appointmentsidcancel) - Cancel Appointment
* [putConsumerV1AppointmentsIdConfirm](docs/appointments/README.md#putconsumerv1appointmentsidconfirm) - Confirm Appointment
* [putConsumerV1AppointmentsIdNoshow](docs/appointments/README.md#putconsumerv1appointmentsidnoshow) - Set NoShow Status
* [putConsumerV1AppointmentsIdReschedule](docs/appointments/README.md#putconsumerv1appointmentsidreschedule) - Reschedule Appointment
* [putConsumerV1AppointmentsIdReserve](docs/appointments/README.md#putconsumerv1appointmentsidreserve) - Reserve Appointment

### [availability](docs/availability/README.md)

* [getConsumerV1AvailabilityServiceIdStartDateEndDate](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddate) - Get Available Times
* [getConsumerV1AvailabilityServiceIdStartDateEndDateDays](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddatedays) - Get Available Days
* [getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable](docs/availability/README.md#getconsumerv1availabilityserviceidstartdateenddateunavailable) - Get Unavailable Times

### [customers](docs/customers/README.md)

* [deleteConsumerV1CustomersId](docs/customers/README.md#deleteconsumerv1customersid) - Delete Customer
* [getConsumerV1Customers](docs/customers/README.md#getconsumerv1customers) - List Customers
* [getConsumerV1CustomersBookingfields](docs/customers/README.md#getconsumerv1customersbookingfields) - Get Customer Booking Fields
* [getConsumerV1CustomersCountries](docs/customers/README.md#getconsumerv1customerscountries) - List Country Codes
* [getConsumerV1CustomersCustomfields](docs/customers/README.md#getconsumerv1customerscustomfields) - Get Customer Custom Fields
* [getConsumerV1CustomersStates](docs/customers/README.md#getconsumerv1customersstates) - List Country States
* [getConsumerV1CustomersId](docs/customers/README.md#getconsumerv1customersid) - Get Customer
* [postConsumerV1Customers](docs/customers/README.md#postconsumerv1customers) - Create Customer
* [putConsumerV1CustomersId](docs/customers/README.md#putconsumerv1customersid) - Update Customer

### [locations](docs/locations/README.md)

* [getConsumerV1Locations](docs/locations/README.md#getconsumerv1locations) - List Locations
* [getConsumerV1LocationsId](docs/locations/README.md#getconsumerv1locationsid) - Get Location

### [resourceGroups](docs/resourcegroups/README.md)

* [getConsumerV1Resourcegroups](docs/resourcegroups/README.md#getconsumerv1resourcegroups) - List Resource Groups
* [getConsumerV1ResourcegroupsId](docs/resourcegroups/README.md#getconsumerv1resourcegroupsid) - Get Resource Group

### [resources](docs/resources/README.md)

* [getConsumerV1Resources](docs/resources/README.md#getconsumerv1resources) - List Resources
* [getConsumerV1ResourcesId](docs/resources/README.md#getconsumerv1resourcesid) - Get Resource
* [getConsumerV1ResourcesIdServices](docs/resources/README.md#getconsumerv1resourcesidservices) - Get Resource Linked Services

### [serviceGroups](docs/servicegroups/README.md)

* [getConsumerV1Servicegroups](docs/servicegroups/README.md#getconsumerv1servicegroups) - List Service Groups
* [getConsumerV1ServicegroupsId](docs/servicegroups/README.md#getconsumerv1servicegroupsid) - Get Service Group

### [services](docs/services/README.md)

* [getConsumerV1Services](docs/services/README.md#getconsumerv1services) - List Services
* [getConsumerV1ServicesAllocationsId](docs/services/README.md#getconsumerv1servicesallocationsid) - Get Service Allocation
* [getConsumerV1ServicesId](docs/services/README.md#getconsumerv1servicesid) - Get Service
* [getConsumerV1ServicesIdAllocations](docs/services/README.md#getconsumerv1servicesidallocations) - List Service Allocations
* [getConsumerV1ServicesIdResources](docs/services/README.md#getconsumerv1servicesidresources) - List Resources for Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
