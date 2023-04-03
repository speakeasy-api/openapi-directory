# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest() {{
                id = "corrupti";
            }}            

            DeleteConsumerV1AppointmentsIdResponse res = sdk.appointments.deleteConsumerV1AppointmentsId(req);

            if (res.appointmentViewModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### appointments

* `deleteConsumerV1AppointmentsId` - Delete Appointment
* `getConsumerV1Appointments` - Get Appointments
* `getConsumerV1AppointmentsBookingfields` - Get Custom Fields Labels
* `getConsumerV1AppointmentsCustomfields` - Get Custom Fields List
* `getConsumerV1AppointmentsId` - Get Appointment
* `postConsumerV1Appointments` - Create Appointment
* `putConsumerV1AppointmentsIdBook` - Book Appointment
* `putConsumerV1AppointmentsIdCancel` - Cancel Appointment
* `putConsumerV1AppointmentsIdConfirm` - Confirm Appointment
* `putConsumerV1AppointmentsIdNoshow` - Set NoShow Status
* `putConsumerV1AppointmentsIdReschedule` - Reschedule Appointment
* `putConsumerV1AppointmentsIdReserve` - Reserve Appointment

### availability

* `getConsumerV1AvailabilityServiceIdStartDateEndDate` - Get Available Times
* `getConsumerV1AvailabilityServiceIdStartDateEndDateDays` - Get Available Days
* `getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable` - Get Unavailable Times

### customers

* `deleteConsumerV1CustomersId` - Delete Customer
* `getConsumerV1Customers` - List Customers
* `getConsumerV1CustomersBookingfields` - Get Customer Booking Fields
* `getConsumerV1CustomersCountries` - List Country Codes
* `getConsumerV1CustomersCustomfields` - Get Customer Custom Fields
* `getConsumerV1CustomersStates` - List Country States
* `getConsumerV1CustomersId` - Get Customer
* `postConsumerV1Customers` - Create Customer
* `putConsumerV1CustomersId` - Update Customer

### locations

* `getConsumerV1Locations` - List Locations
* `getConsumerV1LocationsId` - Get Location

### resourceGroups

* `getConsumerV1Resourcegroups` - List Resource Groups
* `getConsumerV1ResourcegroupsId` - Get Resource Group

### resources

* `getConsumerV1Resources` - List Resources
* `getConsumerV1ResourcesId` - Get Resource
* `getConsumerV1ResourcesIdServices` - Get Resource Linked Services

### serviceGroups

* `getConsumerV1Servicegroups` - List Service Groups
* `getConsumerV1ServicegroupsId` - Get Service Group

### services

* `getConsumerV1Services` - List Services
* `getConsumerV1ServicesAllocationsId` - Get Service Allocation
* `getConsumerV1ServicesId` - Get Service
* `getConsumerV1ServicesIdAllocations` - List Service Allocations
* `getConsumerV1ServicesIdResources` - List Resources for Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
