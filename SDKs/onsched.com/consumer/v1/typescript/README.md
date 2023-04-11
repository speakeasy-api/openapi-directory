# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/onsched.com/consumer/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/onsched.com/consumer/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteConsumerV1AppointmentsIdRequest,
  DeleteConsumerV1AppointmentsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteConsumerV1AppointmentsIdRequest = {
  id: "corrupti",
};

sdk.appointments.deleteConsumerV1AppointmentsId(req).then((res: DeleteConsumerV1AppointmentsIdResponse | AxiosError) => {
   // handle response
});
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

