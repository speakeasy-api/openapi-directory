# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/onsched.com/setup/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/onsched.com/setup/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetSetupV1AppointmentsRequest,
  GetSetupV1AppointmentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetSetupV1AppointmentsRequest = {
  bookedBy: "corrupti",
  calendarId: "provident",
  customerId: "distinctio",
  email: "Leda_Stiedemann@hotmail.com",
  endDate: "2022-05-18T09:34:54.894Z",
  lastname: "Oberbrunner",
  limit: 384382,
  locationId: "iure",
  offset: 297534,
  resourceId: "debitis",
  serviceAllocationId: "ipsa",
  serviceId: "delectus",
  startDate: "2022-08-14T01:03:07.567Z",
  status: "molestiae",
};

sdk.appointments.getSetupV1Appointments(req).then((res: GetSetupV1AppointmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### appointments

* `getSetupV1Appointments` - List Appointments
* `getSetupV1AppointmentsId` - Get Appointment
* `putSetupV1AppointmentsIdReassignResourceResourceId` - Reassign Appointment

### businessUsers

* `deleteSetupV1BusinessusersId` - Delete User
* `getSetupV1Businessusers` - List Users
* `getSetupV1BusinessusersPermissions` - List User Permissions
* `getSetupV1BusinessusersEmailCompanies` - List User Companies
* `getSetupV1BusinessusersId` - Get User
* `postSetupV1Businessusers` - Create User
* `putSetupV1BusinessusersId` - Update User

### calendars

* `deleteSetupV1CalendarsBlockId` - Delete Calendar Block
* `deleteSetupV1CalendarsId` - Delete Calendar
* `getSetupV1Calendars` - List Calendars
* `getSetupV1CalendarsBlocksId` - Get Calendar Block
* `getSetupV1CalendarsId` - Get Calendar
* `getSetupV1CalendarsIdBlocks` - List Calendar Blocks
* `getSetupV1CalendarsIdServices` - List Calendar Services
* `postSetupV1Calendars` - DEPRECATING: Create
* `postSetupV1CalendarsIdBlock` - Create Calendar Block
* `putSetupV1CalendarsBlockId` - Update Calendar Block
* `putSetupV1CalendarsId` - Update Calendar
* `putSetupV1CalendarsIdRecover` - Recover Calendar

### companies

* `deleteSetupV1CompaniesDomainsId` - Delete Company Domain
* `deleteSetupV1CompaniesEmailTemplatesMaster` - Delete Master Template Settings
* `deleteSetupV1CompaniesRegionsId` - Delete Region
* `getSetupV1Companies` - Get Company
* `getSetupV1CompaniesDomains` - List Company Domains
* `getSetupV1CompaniesDomainsId` - Get Company Domain
* `getSetupV1CompaniesEmailTemplates` - List Email Templates
* `getSetupV1CompaniesEmailTemplatesMaster` - Get Master Template Settings
* `getSetupV1CompaniesEmailTemplatesTemplateName` - Get Email Template
* `getSetupV1CompaniesRegions` - List Regions
* `getSetupV1CompaniesRegionsId` - Get Region
* `getSetupV1CompaniesTimezonesDate` - List Time Zones
* `postSetupV1Companies` - Create Company
* `postSetupV1CompaniesDomains` - Create Company Domain
* `postSetupV1CompaniesEmailTemplatesMaster` - Create Master Template Settings
* `postSetupV1CompaniesRegions` - Create Region
* `putSetupV1Companies` - Update Company
* `putSetupV1CompaniesDomainsId` - Update Company Domain
* `putSetupV1CompaniesRegionsId` - Update Region

### customers

* `getSetupV1Customers` - List Customers
* `getSetupV1CustomersId` - Get Customer
* `getSetupV1CustomersIdPrivacy` - Get Customer Data

### locations

* `deleteSetupV1LocationsServicesId` - Unlink Service
* `deleteSetupV1LocationsId` - Delete Location
* `deleteSetupV1LocationsIdDeleteallimages` - Delete All Location Images
* `deleteSetupV1LocationsIdDeleteimage` - Delete Location Image
* `deleteSetupV1LocationsIdEmailTemplatesMaster` - Delete Master Template Settings
* `deleteSetupV1LocationsIdEmailTemplatesTemplateName` - Delete Custom Template
* `deleteSetupV1LocationsIdGoogleServiceAccount` - Delete Google Cal Access
* `deleteSetupV1LocationsIdServices` - Delete Linked Services
* `getSetupV1Locations` - List Locations
* `getSetupV1LocationsServicesId` - Get Linked Service
* `getSetupV1LocationsId` - Get Location
* `getSetupV1LocationsIdAppointmentreminders` - Get Reminders
* `getSetupV1LocationsIdEmailTemplates` - List Email Templates
* `getSetupV1LocationsIdEmailTemplatesMaster` - Get Master Template Settings
* `getSetupV1LocationsIdEmailTemplatesTemplateName` - Get Email Template
* `getSetupV1LocationsIdServices` - List Location Linked Services
* `postSetupV1Locations` - Create Location
* `postSetupV1LocationsBulk` - Create Locations Bulk
* `postSetupV1LocationsIdEmailTemplates` - Create Custom Template
* `postSetupV1LocationsIdEmailTemplatesMaster` - Create Master Template Settings
* `postSetupV1LocationsIdGoogleServiceAccount` - Create Google Cal Access
* `postSetupV1LocationsIdServices` - Create Linked Service
* `postSetupV1LocationsIdUploadimage` - Upload Location Image
* `putSetupV1LocationsId` - Update Location
* `putSetupV1LocationsIdAppointmentreminders` - Update Reminders
* `putSetupV1LocationsIdHolidaysHolidayIdClosed` - Update Location Holidays
* `putSetupV1LocationsIdRecover` - Recover Location
* `putSetupV1LocationsIdSettingsScopeSettingsScope` - Update Location Scope

### resourceGroups

* `deleteSetupV1ResourcegroupsId` - Delete Resource Group
* `getSetupV1Resourcegroups` - List Resource Groups
* `getSetupV1ResourcegroupsId` - Get Resource Group
* `postSetupV1Resourcegroups` - Create Resource Group
* `putSetupV1ResourcegroupsId` - Update Resource Group
* `putSetupV1ResourcegroupsIdRecover` - Recover Resource Group

### resources

* `deleteSetupV1ResourcesAllocationsId` - Delete Allocation
* `deleteSetupV1ResourcesBlockId` - Delete Block
* `deleteSetupV1ResourcesId` - Delete Resource
* `deleteSetupV1ResourcesIdDeleteimage` - Delete Resource Image
* `deleteSetupV1ResourcesIdServices` - Delete Linked Services
* `getSetupV1Resources` - List Resources
* `getSetupV1ResourcesAllocationsId` - Get Allocation
* `getSetupV1ResourcesBlocksId` - Get Block
* `getSetupV1ResourcesTimezones` - Get Time Zones
* `getSetupV1ResourcesId` - Get Resource
* `getSetupV1ResourcesIdAllocations` - List Resource Allocations
* `getSetupV1ResourcesIdAvailability` - List Weekly Availability
* `getSetupV1ResourcesIdBlocks` - List Resource Blocks
* `getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress` - Get Resource Google URL
* `getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress` - Get Resource Outlook URL
* `postSetupV1Resources` - Create Resource
* `postSetupV1ResourcesBulk` - Create Resources Bulk
* `postSetupV1ResourcesIdAllocations` - Create Allocation
* `postSetupV1ResourcesIdBlock` - Create Block
* `postSetupV1ResourcesIdServices` - Create Linked Services
* `postSetupV1ResourcesIdUploadimage` - Upload Resource Image
* `putSetupV1ResourcesAllocationsId` - Update Allocation
* `putSetupV1ResourcesBlockId` - Update Block
* `putSetupV1ResourcesBulk` - Update Resources Bulk
* `putSetupV1ResourcesId` - Update Resource
* `putSetupV1ResourcesIdAvailability` - Update Weekly Availability
* `putSetupV1ResourcesIdReassignAppointmentsResourceId` - Reassign Resource
* `putSetupV1ResourcesIdRecover` - Recover Resource
* `putSetupV1ResourcesIdServices` - Update Linked Services

### serviceGroups

* `deleteSetupV1ServicegroupsId` - Delete Service Group
* `getSetupV1Servicegroups` - List Service Groups
* `getSetupV1ServicegroupsId` - Get Service Group
* `postSetupV1Servicegroups` - Create Service Group
* `putSetupV1ServicegroupsId` - Update Service Group
* `putSetupV1ServicegroupsIdRecover` - Recover Service Group

### services

* `deleteSetupV1ServicesAllocationsId` - Delete Allocation
* `deleteSetupV1ServicesBlockId` - Delete Block
* `deleteSetupV1ServicesCalendarId` - Delete Service Links
* `deleteSetupV1ServicesId` - Delete Service
* `deleteSetupV1ServicesIdDeleteimage` - Delete Service Image
* `getSetupV1Services` - List Services
* `getSetupV1ServicesAllocationsId` - Get Allocation
* `getSetupV1ServicesBlocksId` - Get Block
* `getSetupV1ServicesId` - Get Service
* `getSetupV1ServicesIdAllocations` - List Service Allocations
* `getSetupV1ServicesIdAvailability` - Get Weekly Availability
* `getSetupV1ServicesIdBlocks` - List Service Blocks
* `getSetupV1ServicesIdCalendar` - Get Linked Calendar
* `getSetupV1ServicesIdResources` - List Resources for Service
* `postSetupV1Services` - Create Service
* `postSetupV1ServicesCalendar` - Link Service to Calendar
* `postSetupV1ServicesIdAllocations` - Create Allocation
* `postSetupV1ServicesIdAllocationsBulk` - Create Allocations Bulk
* `postSetupV1ServicesIdBlock` - Create Block
* `postSetupV1ServicesIdUploadimage` - Upload Service Image
* `putSetupV1ServicesAllocationsId` - Update Allocation
* `putSetupV1ServicesBlockId` - Update Block
* `putSetupV1ServicesId` - Update Service
* `putSetupV1ServicesIdAvailability` - Update Weekly Availability
* `putSetupV1ServicesIdRecover` - Recover Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

