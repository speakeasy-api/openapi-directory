# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest() {{
                pathParams = new DeleteConsumerV1AppointmentsIdPathParams() {{
                    id = "sit";
                }};
            }};

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
## SDK Available Operations

### Appointments

* `deleteConsumerV1AppointmentsId` - Returns an appointment object
* `getConsumerV1Appointments` - Returns a list of appointments.
* `getConsumerV1AppointmentsBookingfields` - Returns a list of appointment booking fields
* `getConsumerV1AppointmentsCustomfields` - Returns a list of appointment custom field definitions
* `getConsumerV1AppointmentsId` - Returns an appointment object.
* `postConsumerV1Appointments` - Returns an appointment object
* `putConsumerV1AppointmentsIdBook` - Returns an appointment object
* `putConsumerV1AppointmentsIdCancel` - Returns an appointment object
* `putConsumerV1AppointmentsIdConfirm` - Set the Appointment Confirm property to true or false
* `putConsumerV1AppointmentsIdNoshow` - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
* `putConsumerV1AppointmentsIdReschedule` - Returns an appointment object
* `putConsumerV1AppointmentsIdReserve` - Returns an appointment object

### Availability

* `getConsumerV1AvailabilityServiceIdStartDateEndDate` - Returns a list of available times.
* `getConsumerV1AvailabilityServiceIdStartDateEndDateDays` - Returns a list of available days.
* `getConsumerV1AvailabilityServiceIdStartDateEndDateTimes` - Returns a list of available times.
* `getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable` - Returns a list of unavailable times.
* `getConsumerV1AvailabilityServiceIdStartDateEndDateWindows` - Returns a list of available booking window times.

### Customers

* `deleteConsumerV1CustomersSubscriptionsId`
* `deleteConsumerV1CustomersId`
* `getConsumerV1Customers` - Returns a list of customers.
* `getConsumerV1CustomersBookingfields` - Returns a list of customer booking fields
* `getConsumerV1CustomersCountries` - Returns a list of country objects
* `getConsumerV1CustomersCustomfields` - Returns a list of customField objects
* `getConsumerV1CustomersPlans` - Returns a list of customers.
* `getConsumerV1CustomersPlansId` - Returns a customer object.
* `getConsumerV1CustomersStates` - Returns a list of state objects
* `getConsumerV1CustomersSubscriptions` - Returns a list of customer subscriptions.
* `getConsumerV1CustomersSubscriptionsId` - Returns a customer subscription object.
* `getConsumerV1CustomersId` - Returns a customer object.
* `getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz` - Returns a list of customer booking limits.
* `getConsumerV1CustomersIdSubscriptions` - Returns a customer subscription object.
* `postConsumerV1Customers` - Creates a new customer object.
* `postConsumerV1CustomersIdSubscriptions` - Creates a new customer subscription object.
* `putConsumerV1CustomersSubscriptionsId` - Updates a customer subscription object.
* `putConsumerV1CustomersId` - Updates a customer object.

### Locations

* `getConsumerV1Locations` - Returns a list of business locations.
* `getConsumerV1LocationsId` - Returns a business location object.

### Resources

* `getConsumerV1Resources` - Returns a list of resources.
* `getConsumerV1ResourcesId` - Returns a resource object.
* `getConsumerV1ResourcesIdServices` - Returns a list of resource services.

### ServiceGroups

* `getConsumerV1Servicegroups` - Returns a list of service groups.
* `getConsumerV1ServicegroupsId` - Returns a serviceGroup object.

### Services

* `getConsumerV1Services` - Returns a list of services.
* `getConsumerV1ServicesAllocationsId` - Get a service allocation
* `getConsumerV1ServicesId` - Returns a service object.
* `getConsumerV1ServicesIdAllocations` - Returns a list of service allocations.
* `getConsumerV1ServicesIdResources` - Returns a list of resources.

### Settings

* `getConsumerV1Settings` - Returns a list of customers.

### StripePlans

* `getPlanId`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
