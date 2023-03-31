# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/onsched.com/setup/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.GetSetupV1AppointmentsRequest{
        BookedBy: "corrupti",
        CalendarID: "provident",
        CustomerID: "distinctio",
        Email: "Leda_Stiedemann@hotmail.com",
        EndDate: "2022-05-18T09:34:54.894Z",
        Lastname: "Oberbrunner",
        Limit: 384382,
        LocationID: "iure",
        Offset: 297534,
        ResourceID: "debitis",
        ServiceAllocationID: "ipsa",
        ServiceID: "delectus",
        StartDate: "2022-08-14T01:03:07.567Z",
        Status: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Appointments.GetSetupV1Appointments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Appointments

* `GetSetupV1Appointments` - List Appointments
* `GetSetupV1AppointmentsID` - Get Appointment
* `PutSetupV1AppointmentsIDReassignResourceResourceID` - Reassign Appointment

### BusinessUsers

* `DeleteSetupV1BusinessusersID` - Delete User
* `GetSetupV1Businessusers` - List Users
* `GetSetupV1BusinessusersPermissions` - List User Permissions
* `GetSetupV1BusinessusersEmailCompanies` - List User Companies
* `GetSetupV1BusinessusersID` - Get User
* `PostSetupV1Businessusers` - Create User
* `PutSetupV1BusinessusersID` - Update User

### Calendars

* `DeleteSetupV1CalendarsBlockID` - Delete Calendar Block
* `DeleteSetupV1CalendarsID` - Delete Calendar
* `GetSetupV1Calendars` - List Calendars
* `GetSetupV1CalendarsBlocksID` - Get Calendar Block
* `GetSetupV1CalendarsID` - Get Calendar
* `GetSetupV1CalendarsIDBlocks` - List Calendar Blocks
* `GetSetupV1CalendarsIDServices` - List Calendar Services
* `PostSetupV1Calendars` - DEPRECATING: Create
* `PostSetupV1CalendarsIDBlock` - Create Calendar Block
* `PutSetupV1CalendarsBlockID` - Update Calendar Block
* `PutSetupV1CalendarsID` - Update Calendar
* `PutSetupV1CalendarsIDRecover` - Recover Calendar

### Companies

* `DeleteSetupV1CompaniesDomainsID` - Delete Company Domain
* `DeleteSetupV1CompaniesEmailTemplatesMaster` - Delete Master Template Settings
* `DeleteSetupV1CompaniesRegionsID` - Delete Region
* `GetSetupV1Companies` - Get Company
* `GetSetupV1CompaniesDomains` - List Company Domains
* `GetSetupV1CompaniesDomainsID` - Get Company Domain
* `GetSetupV1CompaniesEmailTemplates` - List Email Templates
* `GetSetupV1CompaniesEmailTemplatesMaster` - Get Master Template Settings
* `GetSetupV1CompaniesEmailTemplatesTemplateName` - Get Email Template
* `GetSetupV1CompaniesRegions` - List Regions
* `GetSetupV1CompaniesRegionsID` - Get Region
* `GetSetupV1CompaniesTimezonesDate` - List Time Zones
* `PostSetupV1Companies` - Create Company
* `PostSetupV1CompaniesDomains` - Create Company Domain
* `PostSetupV1CompaniesEmailTemplatesMaster` - Create Master Template Settings
* `PostSetupV1CompaniesRegions` - Create Region
* `PutSetupV1Companies` - Update Company
* `PutSetupV1CompaniesDomainsID` - Update Company Domain
* `PutSetupV1CompaniesRegionsID` - Update Region

### Customers

* `GetSetupV1Customers` - List Customers
* `GetSetupV1CustomersID` - Get Customer
* `GetSetupV1CustomersIDPrivacy` - Get Customer Data

### Locations

* `DeleteSetupV1LocationsServicesID` - Unlink Service
* `DeleteSetupV1LocationsID` - Delete Location
* `DeleteSetupV1LocationsIDDeleteallimages` - Delete All Location Images
* `DeleteSetupV1LocationsIDDeleteimage` - Delete Location Image
* `DeleteSetupV1LocationsIDEmailTemplatesMaster` - Delete Master Template Settings
* `DeleteSetupV1LocationsIDEmailTemplatesTemplateName` - Delete Custom Template
* `DeleteSetupV1LocationsIDGoogleServiceAccount` - Delete Google Cal Access
* `DeleteSetupV1LocationsIDServices` - Delete Linked Services
* `GetSetupV1Locations` - List Locations
* `GetSetupV1LocationsServicesID` - Get Linked Service
* `GetSetupV1LocationsID` - Get Location
* `GetSetupV1LocationsIDAppointmentreminders` - Get Reminders
* `GetSetupV1LocationsIDEmailTemplates` - List Email Templates
* `GetSetupV1LocationsIDEmailTemplatesMaster` - Get Master Template Settings
* `GetSetupV1LocationsIDEmailTemplatesTemplateName` - Get Email Template
* `GetSetupV1LocationsIDServices` - List Location Linked Services
* `PostSetupV1Locations` - Create Location
* `PostSetupV1LocationsBulk` - Create Locations Bulk
* `PostSetupV1LocationsIDEmailTemplates` - Create Custom Template
* `PostSetupV1LocationsIDEmailTemplatesMaster` - Create Master Template Settings
* `PostSetupV1LocationsIDGoogleServiceAccount` - Create Google Cal Access
* `PostSetupV1LocationsIDServices` - Create Linked Service
* `PostSetupV1LocationsIDUploadimage` - Upload Location Image
* `PutSetupV1LocationsID` - Update Location
* `PutSetupV1LocationsIDAppointmentreminders` - Update Reminders
* `PutSetupV1LocationsIDHolidaysHolidayIDClosed` - Update Location Holidays
* `PutSetupV1LocationsIDRecover` - Recover Location
* `PutSetupV1LocationsIDSettingsScopeSettingsScope` - Update Location Scope

### ResourceGroups

* `DeleteSetupV1ResourcegroupsID` - Delete Resource Group
* `GetSetupV1Resourcegroups` - List Resource Groups
* `GetSetupV1ResourcegroupsID` - Get Resource Group
* `PostSetupV1Resourcegroups` - Create Resource Group
* `PutSetupV1ResourcegroupsID` - Update Resource Group
* `PutSetupV1ResourcegroupsIDRecover` - Recover Resource Group

### Resources

* `DeleteSetupV1ResourcesAllocationsID` - Delete Allocation
* `DeleteSetupV1ResourcesBlockID` - Delete Block
* `DeleteSetupV1ResourcesID` - Delete Resource
* `DeleteSetupV1ResourcesIDDeleteimage` - Delete Resource Image
* `DeleteSetupV1ResourcesIDServices` - Delete Linked Services
* `GetSetupV1Resources` - List Resources
* `GetSetupV1ResourcesAllocationsID` - Get Allocation
* `GetSetupV1ResourcesBlocksID` - Get Block
* `GetSetupV1ResourcesTimezones` - Get Time Zones
* `GetSetupV1ResourcesID` - Get Resource
* `GetSetupV1ResourcesIDAllocations` - List Resource Allocations
* `GetSetupV1ResourcesIDAvailability` - List Weekly Availability
* `GetSetupV1ResourcesIDBlocks` - List Resource Blocks
* `GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress` - Get Resource Google URL
* `GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress` - Get Resource Outlook URL
* `PostSetupV1Resources` - Create Resource
* `PostSetupV1ResourcesBulk` - Create Resources Bulk
* `PostSetupV1ResourcesIDAllocations` - Create Allocation
* `PostSetupV1ResourcesIDBlock` - Create Block
* `PostSetupV1ResourcesIDServices` - Create Linked Services
* `PostSetupV1ResourcesIDUploadimage` - Upload Resource Image
* `PutSetupV1ResourcesAllocationsID` - Update Allocation
* `PutSetupV1ResourcesBlockID` - Update Block
* `PutSetupV1ResourcesBulk` - Update Resources Bulk
* `PutSetupV1ResourcesID` - Update Resource
* `PutSetupV1ResourcesIDAvailability` - Update Weekly Availability
* `PutSetupV1ResourcesIDReassignAppointmentsResourceID` - Reassign Resource
* `PutSetupV1ResourcesIDRecover` - Recover Resource
* `PutSetupV1ResourcesIDServices` - Update Linked Services

### ServiceGroups

* `DeleteSetupV1ServicegroupsID` - Delete Service Group
* `GetSetupV1Servicegroups` - List Service Groups
* `GetSetupV1ServicegroupsID` - Get Service Group
* `PostSetupV1Servicegroups` - Create Service Group
* `PutSetupV1ServicegroupsID` - Update Service Group
* `PutSetupV1ServicegroupsIDRecover` - Recover Service Group

### Services

* `DeleteSetupV1ServicesAllocationsID` - Delete Allocation
* `DeleteSetupV1ServicesBlockID` - Delete Block
* `DeleteSetupV1ServicesCalendarID` - Delete Service Links
* `DeleteSetupV1ServicesID` - Delete Service
* `DeleteSetupV1ServicesIDDeleteimage` - Delete Service Image
* `GetSetupV1Services` - List Services
* `GetSetupV1ServicesAllocationsID` - Get Allocation
* `GetSetupV1ServicesBlocksID` - Get Block
* `GetSetupV1ServicesID` - Get Service
* `GetSetupV1ServicesIDAllocations` - List Service Allocations
* `GetSetupV1ServicesIDAvailability` - Get Weekly Availability
* `GetSetupV1ServicesIDBlocks` - List Service Blocks
* `GetSetupV1ServicesIDCalendar` - Get Linked Calendar
* `GetSetupV1ServicesIDResources` - List Resources for Service
* `PostSetupV1Services` - Create Service
* `PostSetupV1ServicesCalendar` - Link Service to Calendar
* `PostSetupV1ServicesIDAllocations` - Create Allocation
* `PostSetupV1ServicesIDAllocationsBulk` - Create Allocations Bulk
* `PostSetupV1ServicesIDBlock` - Create Block
* `PostSetupV1ServicesIDUploadimage` - Upload Service Image
* `PutSetupV1ServicesAllocationsID` - Update Allocation
* `PutSetupV1ServicesBlockID` - Update Block
* `PutSetupV1ServicesID` - Update Service
* `PutSetupV1ServicesIDAvailability` - Update Weekly Availability
* `PutSetupV1ServicesIDRecover` - Recover Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
