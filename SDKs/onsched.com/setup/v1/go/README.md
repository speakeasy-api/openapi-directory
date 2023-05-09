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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.GetSetupV1Appointments(ctx, operations.GetSetupV1AppointmentsRequest{
        BookedBy: sdk.String("corrupti"),
        CalendarID: sdk.String("provident"),
        CustomerID: sdk.String("distinctio"),
        Email: sdk.String("Leda_Stiedemann@hotmail.com"),
        EndDate: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        Lastname: sdk.String("Oberbrunner"),
        Limit: sdk.Int(384382),
        LocationID: sdk.String("iure"),
        Offset: sdk.Int(297534),
        ResourceID: sdk.String("debitis"),
        ServiceAllocationID: sdk.String("ipsa"),
        ServiceID: sdk.String("delectus"),
        StartDate: types.MustTimeFromString("2022-08-14T01:03:07.567Z"),
        Status: sdk.String("molestiae"),
    })
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


### [Appointments](docs/appointments/README.md)

* [GetSetupV1Appointments](docs/appointments/README.md#getsetupv1appointments) - List Appointments
* [GetSetupV1AppointmentsID](docs/appointments/README.md#getsetupv1appointmentsid) - Get Appointment
* [PutSetupV1AppointmentsIDReassignResourceResourceID](docs/appointments/README.md#putsetupv1appointmentsidreassignresourceresourceid) - Reassign Appointment

### [BusinessUsers](docs/businessusers/README.md)

* [DeleteSetupV1BusinessusersID](docs/businessusers/README.md#deletesetupv1businessusersid) - Delete User
* [GetSetupV1Businessusers](docs/businessusers/README.md#getsetupv1businessusers) - List Users
* [GetSetupV1BusinessusersPermissions](docs/businessusers/README.md#getsetupv1businessuserspermissions) - List User Permissions
* [GetSetupV1BusinessusersEmailCompanies](docs/businessusers/README.md#getsetupv1businessusersemailcompanies) - List User Companies
* [GetSetupV1BusinessusersID](docs/businessusers/README.md#getsetupv1businessusersid) - Get User
* [PostSetupV1Businessusers](docs/businessusers/README.md#postsetupv1businessusers) - Create User
* [PutSetupV1BusinessusersID](docs/businessusers/README.md#putsetupv1businessusersid) - Update User

### [Calendars](docs/calendars/README.md)

* [DeleteSetupV1CalendarsBlockID](docs/calendars/README.md#deletesetupv1calendarsblockid) - Delete Calendar Block
* [DeleteSetupV1CalendarsID](docs/calendars/README.md#deletesetupv1calendarsid) - Delete Calendar
* [GetSetupV1Calendars](docs/calendars/README.md#getsetupv1calendars) - List Calendars
* [GetSetupV1CalendarsBlocksID](docs/calendars/README.md#getsetupv1calendarsblocksid) - Get Calendar Block
* [GetSetupV1CalendarsID](docs/calendars/README.md#getsetupv1calendarsid) - Get Calendar
* [GetSetupV1CalendarsIDBlocks](docs/calendars/README.md#getsetupv1calendarsidblocks) - List Calendar Blocks
* [GetSetupV1CalendarsIDServices](docs/calendars/README.md#getsetupv1calendarsidservices) - List Calendar Services
* [PostSetupV1Calendars](docs/calendars/README.md#postsetupv1calendars) - DEPRECATING: Create
* [PostSetupV1CalendarsIDBlock](docs/calendars/README.md#postsetupv1calendarsidblock) - Create Calendar Block
* [PutSetupV1CalendarsBlockID](docs/calendars/README.md#putsetupv1calendarsblockid) - Update Calendar Block
* [PutSetupV1CalendarsID](docs/calendars/README.md#putsetupv1calendarsid) - Update Calendar
* [PutSetupV1CalendarsIDRecover](docs/calendars/README.md#putsetupv1calendarsidrecover) - Recover Calendar

### [Companies](docs/companies/README.md)

* [DeleteSetupV1CompaniesDomainsID](docs/companies/README.md#deletesetupv1companiesdomainsid) - Delete Company Domain
* [DeleteSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#deletesetupv1companiesemailtemplatesmaster) - Delete Master Template Settings
* [DeleteSetupV1CompaniesRegionsID](docs/companies/README.md#deletesetupv1companiesregionsid) - Delete Region
* [GetSetupV1Companies](docs/companies/README.md#getsetupv1companies) - Get Company
* [GetSetupV1CompaniesDomains](docs/companies/README.md#getsetupv1companiesdomains) - List Company Domains
* [GetSetupV1CompaniesDomainsID](docs/companies/README.md#getsetupv1companiesdomainsid) - Get Company Domain
* [GetSetupV1CompaniesEmailTemplates](docs/companies/README.md#getsetupv1companiesemailtemplates) - List Email Templates
* [GetSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#getsetupv1companiesemailtemplatesmaster) - Get Master Template Settings
* [GetSetupV1CompaniesEmailTemplatesTemplateName](docs/companies/README.md#getsetupv1companiesemailtemplatestemplatename) - Get Email Template
* [GetSetupV1CompaniesRegions](docs/companies/README.md#getsetupv1companiesregions) - List Regions
* [GetSetupV1CompaniesRegionsID](docs/companies/README.md#getsetupv1companiesregionsid) - Get Region
* [GetSetupV1CompaniesTimezonesDate](docs/companies/README.md#getsetupv1companiestimezonesdate) - List Time Zones
* [PostSetupV1Companies](docs/companies/README.md#postsetupv1companies) - Create Company
* [PostSetupV1CompaniesDomains](docs/companies/README.md#postsetupv1companiesdomains) - Create Company Domain
* [PostSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#postsetupv1companiesemailtemplatesmaster) - Create Master Template Settings
* [PostSetupV1CompaniesRegions](docs/companies/README.md#postsetupv1companiesregions) - Create Region
* [PutSetupV1Companies](docs/companies/README.md#putsetupv1companies) - Update Company
* [PutSetupV1CompaniesDomainsID](docs/companies/README.md#putsetupv1companiesdomainsid) - Update Company Domain
* [PutSetupV1CompaniesRegionsID](docs/companies/README.md#putsetupv1companiesregionsid) - Update Region

### [Customers](docs/customers/README.md)

* [GetSetupV1Customers](docs/customers/README.md#getsetupv1customers) - List Customers
* [GetSetupV1CustomersID](docs/customers/README.md#getsetupv1customersid) - Get Customer
* [GetSetupV1CustomersIDPrivacy](docs/customers/README.md#getsetupv1customersidprivacy) - Get Customer Data

### [Locations](docs/locations/README.md)

* [DeleteSetupV1LocationsServicesID](docs/locations/README.md#deletesetupv1locationsservicesid) - Unlink Service
* [DeleteSetupV1LocationsID](docs/locations/README.md#deletesetupv1locationsid) - Delete Location
* [DeleteSetupV1LocationsIDDeleteallimages](docs/locations/README.md#deletesetupv1locationsiddeleteallimages) - Delete All Location Images
* [DeleteSetupV1LocationsIDDeleteimage](docs/locations/README.md#deletesetupv1locationsiddeleteimage) - Delete Location Image
* [DeleteSetupV1LocationsIDEmailTemplatesMaster](docs/locations/README.md#deletesetupv1locationsidemailtemplatesmaster) - Delete Master Template Settings
* [DeleteSetupV1LocationsIDEmailTemplatesTemplateName](docs/locations/README.md#deletesetupv1locationsidemailtemplatestemplatename) - Delete Custom Template
* [DeleteSetupV1LocationsIDGoogleServiceAccount](docs/locations/README.md#deletesetupv1locationsidgoogleserviceaccount) - Delete Google Cal Access
* [DeleteSetupV1LocationsIDServices](docs/locations/README.md#deletesetupv1locationsidservices) - Delete Linked Services
* [GetSetupV1Locations](docs/locations/README.md#getsetupv1locations) - List Locations
* [GetSetupV1LocationsServicesID](docs/locations/README.md#getsetupv1locationsservicesid) - Get Linked Service
* [GetSetupV1LocationsID](docs/locations/README.md#getsetupv1locationsid) - Get Location
* [GetSetupV1LocationsIDAppointmentreminders](docs/locations/README.md#getsetupv1locationsidappointmentreminders) - Get Reminders
* [GetSetupV1LocationsIDEmailTemplates](docs/locations/README.md#getsetupv1locationsidemailtemplates) - List Email Templates
* [GetSetupV1LocationsIDEmailTemplatesMaster](docs/locations/README.md#getsetupv1locationsidemailtemplatesmaster) - Get Master Template Settings
* [GetSetupV1LocationsIDEmailTemplatesTemplateName](docs/locations/README.md#getsetupv1locationsidemailtemplatestemplatename) - Get Email Template
* [GetSetupV1LocationsIDServices](docs/locations/README.md#getsetupv1locationsidservices) - List Location Linked Services
* [PostSetupV1Locations](docs/locations/README.md#postsetupv1locations) - Create Location
* [PostSetupV1LocationsBulk](docs/locations/README.md#postsetupv1locationsbulk) - Create Locations Bulk
* [PostSetupV1LocationsIDEmailTemplates](docs/locations/README.md#postsetupv1locationsidemailtemplates) - Create Custom Template
* [PostSetupV1LocationsIDEmailTemplatesMaster](docs/locations/README.md#postsetupv1locationsidemailtemplatesmaster) - Create Master Template Settings
* [PostSetupV1LocationsIDGoogleServiceAccount](docs/locations/README.md#postsetupv1locationsidgoogleserviceaccount) - Create Google Cal Access
* [PostSetupV1LocationsIDServices](docs/locations/README.md#postsetupv1locationsidservices) - Create Linked Service
* [PostSetupV1LocationsIDUploadimage](docs/locations/README.md#postsetupv1locationsiduploadimage) - Upload Location Image
* [PutSetupV1LocationsID](docs/locations/README.md#putsetupv1locationsid) - Update Location
* [PutSetupV1LocationsIDAppointmentreminders](docs/locations/README.md#putsetupv1locationsidappointmentreminders) - Update Reminders
* [PutSetupV1LocationsIDHolidaysHolidayIDClosed](docs/locations/README.md#putsetupv1locationsidholidaysholidayidclosed) - Update Location Holidays
* [PutSetupV1LocationsIDRecover](docs/locations/README.md#putsetupv1locationsidrecover) - Recover Location
* [PutSetupV1LocationsIDSettingsScopeSettingsScope](docs/locations/README.md#putsetupv1locationsidsettingsscopesettingsscope) - Update Location Scope

### [ResourceGroups](docs/resourcegroups/README.md)

* [DeleteSetupV1ResourcegroupsID](docs/resourcegroups/README.md#deletesetupv1resourcegroupsid) - Delete Resource Group
* [GetSetupV1Resourcegroups](docs/resourcegroups/README.md#getsetupv1resourcegroups) - List Resource Groups
* [GetSetupV1ResourcegroupsID](docs/resourcegroups/README.md#getsetupv1resourcegroupsid) - Get Resource Group
* [PostSetupV1Resourcegroups](docs/resourcegroups/README.md#postsetupv1resourcegroups) - Create Resource Group
* [PutSetupV1ResourcegroupsID](docs/resourcegroups/README.md#putsetupv1resourcegroupsid) - Update Resource Group
* [PutSetupV1ResourcegroupsIDRecover](docs/resourcegroups/README.md#putsetupv1resourcegroupsidrecover) - Recover Resource Group

### [Resources](docs/resources/README.md)

* [DeleteSetupV1ResourcesAllocationsID](docs/resources/README.md#deletesetupv1resourcesallocationsid) - Delete Allocation
* [DeleteSetupV1ResourcesBlockID](docs/resources/README.md#deletesetupv1resourcesblockid) - Delete Block
* [DeleteSetupV1ResourcesID](docs/resources/README.md#deletesetupv1resourcesid) - Delete Resource
* [DeleteSetupV1ResourcesIDDeleteimage](docs/resources/README.md#deletesetupv1resourcesiddeleteimage) - Delete Resource Image
* [DeleteSetupV1ResourcesIDServices](docs/resources/README.md#deletesetupv1resourcesidservices) - Delete Linked Services
* [GetSetupV1Resources](docs/resources/README.md#getsetupv1resources) - List Resources
* [GetSetupV1ResourcesAllocationsID](docs/resources/README.md#getsetupv1resourcesallocationsid) - Get Allocation
* [GetSetupV1ResourcesBlocksID](docs/resources/README.md#getsetupv1resourcesblocksid) - Get Block
* [GetSetupV1ResourcesTimezones](docs/resources/README.md#getsetupv1resourcestimezones) - Get Time Zones
* [GetSetupV1ResourcesID](docs/resources/README.md#getsetupv1resourcesid) - Get Resource
* [GetSetupV1ResourcesIDAllocations](docs/resources/README.md#getsetupv1resourcesidallocations) - List Resource Allocations
* [GetSetupV1ResourcesIDAvailability](docs/resources/README.md#getsetupv1resourcesidavailability) - List Weekly Availability
* [GetSetupV1ResourcesIDBlocks](docs/resources/README.md#getsetupv1resourcesidblocks) - List Resource Blocks
* [GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress](docs/resources/README.md#getsetupv1resourcesidcalendarauthgooglegoogleemailaddress) - Get Resource Google URL
* [GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress](docs/resources/README.md#getsetupv1resourcesidcalendarauthoutlookoutlookemailaddress) - Get Resource Outlook URL
* [PostSetupV1Resources](docs/resources/README.md#postsetupv1resources) - Create Resource
* [PostSetupV1ResourcesBulk](docs/resources/README.md#postsetupv1resourcesbulk) - Create Resources Bulk
* [PostSetupV1ResourcesIDAllocations](docs/resources/README.md#postsetupv1resourcesidallocations) - Create Allocation
* [PostSetupV1ResourcesIDBlock](docs/resources/README.md#postsetupv1resourcesidblock) - Create Block
* [PostSetupV1ResourcesIDServices](docs/resources/README.md#postsetupv1resourcesidservices) - Create Linked Services
* [PostSetupV1ResourcesIDUploadimage](docs/resources/README.md#postsetupv1resourcesiduploadimage) - Upload Resource Image
* [PutSetupV1ResourcesAllocationsID](docs/resources/README.md#putsetupv1resourcesallocationsid) - Update Allocation
* [PutSetupV1ResourcesBlockID](docs/resources/README.md#putsetupv1resourcesblockid) - Update Block
* [PutSetupV1ResourcesBulk](docs/resources/README.md#putsetupv1resourcesbulk) - Update Resources Bulk
* [PutSetupV1ResourcesID](docs/resources/README.md#putsetupv1resourcesid) - Update Resource
* [PutSetupV1ResourcesIDAvailability](docs/resources/README.md#putsetupv1resourcesidavailability) - Update Weekly Availability
* [PutSetupV1ResourcesIDReassignAppointmentsResourceID](docs/resources/README.md#putsetupv1resourcesidreassignappointmentsresourceid) - Reassign Resource
* [PutSetupV1ResourcesIDRecover](docs/resources/README.md#putsetupv1resourcesidrecover) - Recover Resource
* [PutSetupV1ResourcesIDServices](docs/resources/README.md#putsetupv1resourcesidservices) - Update Linked Services

### [ServiceGroups](docs/servicegroups/README.md)

* [DeleteSetupV1ServicegroupsID](docs/servicegroups/README.md#deletesetupv1servicegroupsid) - Delete Service Group
* [GetSetupV1Servicegroups](docs/servicegroups/README.md#getsetupv1servicegroups) - List Service Groups
* [GetSetupV1ServicegroupsID](docs/servicegroups/README.md#getsetupv1servicegroupsid) - Get Service Group
* [PostSetupV1Servicegroups](docs/servicegroups/README.md#postsetupv1servicegroups) - Create Service Group
* [PutSetupV1ServicegroupsID](docs/servicegroups/README.md#putsetupv1servicegroupsid) - Update Service Group
* [PutSetupV1ServicegroupsIDRecover](docs/servicegroups/README.md#putsetupv1servicegroupsidrecover) - Recover Service Group

### [Services](docs/services/README.md)

* [DeleteSetupV1ServicesAllocationsID](docs/services/README.md#deletesetupv1servicesallocationsid) - Delete Allocation
* [DeleteSetupV1ServicesBlockID](docs/services/README.md#deletesetupv1servicesblockid) - Delete Block
* [DeleteSetupV1ServicesCalendarID](docs/services/README.md#deletesetupv1servicescalendarid) - Delete Service Links
* [DeleteSetupV1ServicesID](docs/services/README.md#deletesetupv1servicesid) - Delete Service
* [DeleteSetupV1ServicesIDDeleteimage](docs/services/README.md#deletesetupv1servicesiddeleteimage) - Delete Service Image
* [GetSetupV1Services](docs/services/README.md#getsetupv1services) - List Services
* [GetSetupV1ServicesAllocationsID](docs/services/README.md#getsetupv1servicesallocationsid) - Get Allocation
* [GetSetupV1ServicesBlocksID](docs/services/README.md#getsetupv1servicesblocksid) - Get Block
* [GetSetupV1ServicesID](docs/services/README.md#getsetupv1servicesid) - Get Service
* [GetSetupV1ServicesIDAllocations](docs/services/README.md#getsetupv1servicesidallocations) - List Service Allocations
* [GetSetupV1ServicesIDAvailability](docs/services/README.md#getsetupv1servicesidavailability) - Get Weekly Availability
* [GetSetupV1ServicesIDBlocks](docs/services/README.md#getsetupv1servicesidblocks) - List Service Blocks
* [GetSetupV1ServicesIDCalendar](docs/services/README.md#getsetupv1servicesidcalendar) - Get Linked Calendar
* [GetSetupV1ServicesIDResources](docs/services/README.md#getsetupv1servicesidresources) - List Resources for Service
* [PostSetupV1Services](docs/services/README.md#postsetupv1services) - Create Service
* [PostSetupV1ServicesCalendar](docs/services/README.md#postsetupv1servicescalendar) - Link Service to Calendar
* [PostSetupV1ServicesIDAllocations](docs/services/README.md#postsetupv1servicesidallocations) - Create Allocation
* [PostSetupV1ServicesIDAllocationsBulk](docs/services/README.md#postsetupv1servicesidallocationsbulk) - Create Allocations Bulk
* [PostSetupV1ServicesIDBlock](docs/services/README.md#postsetupv1servicesidblock) - Create Block
* [PostSetupV1ServicesIDUploadimage](docs/services/README.md#postsetupv1servicesiduploadimage) - Upload Service Image
* [PutSetupV1ServicesAllocationsID](docs/services/README.md#putsetupv1servicesallocationsid) - Update Allocation
* [PutSetupV1ServicesBlockID](docs/services/README.md#putsetupv1servicesblockid) - Update Block
* [PutSetupV1ServicesID](docs/services/README.md#putsetupv1servicesid) - Update Service
* [PutSetupV1ServicesIDAvailability](docs/services/README.md#putsetupv1servicesidavailability) - Update Weekly Availability
* [PutSetupV1ServicesIDRecover](docs/services/README.md#putsetupv1servicesidrecover) - Recover Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
