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
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1AppointmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1AppointmentsRequest();
    $request->bookedBy = 'corrupti';
    $request->calendarId = 'provident';
    $request->customerId = 'distinctio';
    $request->email = 'Leda_Stiedemann@hotmail.com';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->lastname = 'Oberbrunner';
    $request->limit = 384382;
    $request->locationId = 'iure';
    $request->offset = 297534;
    $request->resourceId = 'debitis';
    $request->serviceAllocationId = 'ipsa';
    $request->serviceId = 'delectus';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->status = 'molestiae';

    $response = $sdk->appointments->getSetupV1Appointments($request);

    if ($response->appointmentListViewModel !== null) {
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

* [getSetupV1Appointments](docs/appointments/README.md#getsetupv1appointments) - List Appointments
* [getSetupV1AppointmentsId](docs/appointments/README.md#getsetupv1appointmentsid) - Get Appointment
* [putSetupV1AppointmentsIdReassignResourceResourceId](docs/appointments/README.md#putsetupv1appointmentsidreassignresourceresourceid) - Reassign Appointment

### [businessUsers](docs/businessusers/README.md)

* [deleteSetupV1BusinessusersId](docs/businessusers/README.md#deletesetupv1businessusersid) - Delete User
* [getSetupV1Businessusers](docs/businessusers/README.md#getsetupv1businessusers) - List Users
* [getSetupV1BusinessusersPermissions](docs/businessusers/README.md#getsetupv1businessuserspermissions) - List User Permissions
* [getSetupV1BusinessusersEmailCompanies](docs/businessusers/README.md#getsetupv1businessusersemailcompanies) - List User Companies
* [getSetupV1BusinessusersId](docs/businessusers/README.md#getsetupv1businessusersid) - Get User
* [postSetupV1Businessusers](docs/businessusers/README.md#postsetupv1businessusers) - Create User
* [putSetupV1BusinessusersId](docs/businessusers/README.md#putsetupv1businessusersid) - Update User

### [calendars](docs/calendars/README.md)

* [deleteSetupV1CalendarsBlockId](docs/calendars/README.md#deletesetupv1calendarsblockid) - Delete Calendar Block
* [deleteSetupV1CalendarsId](docs/calendars/README.md#deletesetupv1calendarsid) - Delete Calendar
* [getSetupV1Calendars](docs/calendars/README.md#getsetupv1calendars) - List Calendars
* [getSetupV1CalendarsBlocksId](docs/calendars/README.md#getsetupv1calendarsblocksid) - Get Calendar Block
* [getSetupV1CalendarsId](docs/calendars/README.md#getsetupv1calendarsid) - Get Calendar
* [getSetupV1CalendarsIdBlocks](docs/calendars/README.md#getsetupv1calendarsidblocks) - List Calendar Blocks
* [getSetupV1CalendarsIdServices](docs/calendars/README.md#getsetupv1calendarsidservices) - List Calendar Services
* [postSetupV1Calendars](docs/calendars/README.md#postsetupv1calendars) - DEPRECATING: Create
* [postSetupV1CalendarsIdBlock](docs/calendars/README.md#postsetupv1calendarsidblock) - Create Calendar Block
* [putSetupV1CalendarsBlockId](docs/calendars/README.md#putsetupv1calendarsblockid) - Update Calendar Block
* [putSetupV1CalendarsId](docs/calendars/README.md#putsetupv1calendarsid) - Update Calendar
* [putSetupV1CalendarsIdRecover](docs/calendars/README.md#putsetupv1calendarsidrecover) - Recover Calendar

### [companies](docs/companies/README.md)

* [deleteSetupV1CompaniesDomainsId](docs/companies/README.md#deletesetupv1companiesdomainsid) - Delete Company Domain
* [deleteSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#deletesetupv1companiesemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1CompaniesRegionsId](docs/companies/README.md#deletesetupv1companiesregionsid) - Delete Region
* [getSetupV1Companies](docs/companies/README.md#getsetupv1companies) - Get Company
* [getSetupV1CompaniesDomains](docs/companies/README.md#getsetupv1companiesdomains) - List Company Domains
* [getSetupV1CompaniesDomainsId](docs/companies/README.md#getsetupv1companiesdomainsid) - Get Company Domain
* [getSetupV1CompaniesEmailTemplates](docs/companies/README.md#getsetupv1companiesemailtemplates) - List Email Templates
* [getSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#getsetupv1companiesemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1CompaniesEmailTemplatesTemplateName](docs/companies/README.md#getsetupv1companiesemailtemplatestemplatename) - Get Email Template
* [getSetupV1CompaniesRegions](docs/companies/README.md#getsetupv1companiesregions) - List Regions
* [getSetupV1CompaniesRegionsId](docs/companies/README.md#getsetupv1companiesregionsid) - Get Region
* [getSetupV1CompaniesTimezonesDate](docs/companies/README.md#getsetupv1companiestimezonesdate) - List Time Zones
* [postSetupV1Companies](docs/companies/README.md#postsetupv1companies) - Create Company
* [postSetupV1CompaniesDomains](docs/companies/README.md#postsetupv1companiesdomains) - Create Company Domain
* [postSetupV1CompaniesEmailTemplatesMaster](docs/companies/README.md#postsetupv1companiesemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1CompaniesRegions](docs/companies/README.md#postsetupv1companiesregions) - Create Region
* [putSetupV1Companies](docs/companies/README.md#putsetupv1companies) - Update Company
* [putSetupV1CompaniesDomainsId](docs/companies/README.md#putsetupv1companiesdomainsid) - Update Company Domain
* [putSetupV1CompaniesRegionsId](docs/companies/README.md#putsetupv1companiesregionsid) - Update Region

### [customers](docs/customers/README.md)

* [getSetupV1Customers](docs/customers/README.md#getsetupv1customers) - List Customers
* [getSetupV1CustomersId](docs/customers/README.md#getsetupv1customersid) - Get Customer
* [getSetupV1CustomersIdPrivacy](docs/customers/README.md#getsetupv1customersidprivacy) - Get Customer Data

### [locations](docs/locations/README.md)

* [deleteSetupV1LocationsServicesId](docs/locations/README.md#deletesetupv1locationsservicesid) - Unlink Service
* [deleteSetupV1LocationsId](docs/locations/README.md#deletesetupv1locationsid) - Delete Location
* [deleteSetupV1LocationsIdDeleteallimages](docs/locations/README.md#deletesetupv1locationsiddeleteallimages) - Delete All Location Images
* [deleteSetupV1LocationsIdDeleteimage](docs/locations/README.md#deletesetupv1locationsiddeleteimage) - Delete Location Image
* [deleteSetupV1LocationsIdEmailTemplatesMaster](docs/locations/README.md#deletesetupv1locationsidemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1LocationsIdEmailTemplatesTemplateName](docs/locations/README.md#deletesetupv1locationsidemailtemplatestemplatename) - Delete Custom Template
* [deleteSetupV1LocationsIdGoogleServiceAccount](docs/locations/README.md#deletesetupv1locationsidgoogleserviceaccount) - Delete Google Cal Access
* [deleteSetupV1LocationsIdServices](docs/locations/README.md#deletesetupv1locationsidservices) - Delete Linked Services
* [getSetupV1Locations](docs/locations/README.md#getsetupv1locations) - List Locations
* [getSetupV1LocationsServicesId](docs/locations/README.md#getsetupv1locationsservicesid) - Get Linked Service
* [getSetupV1LocationsId](docs/locations/README.md#getsetupv1locationsid) - Get Location
* [getSetupV1LocationsIdAppointmentreminders](docs/locations/README.md#getsetupv1locationsidappointmentreminders) - Get Reminders
* [getSetupV1LocationsIdEmailTemplates](docs/locations/README.md#getsetupv1locationsidemailtemplates) - List Email Templates
* [getSetupV1LocationsIdEmailTemplatesMaster](docs/locations/README.md#getsetupv1locationsidemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1LocationsIdEmailTemplatesTemplateName](docs/locations/README.md#getsetupv1locationsidemailtemplatestemplatename) - Get Email Template
* [getSetupV1LocationsIdServices](docs/locations/README.md#getsetupv1locationsidservices) - List Location Linked Services
* [postSetupV1Locations](docs/locations/README.md#postsetupv1locations) - Create Location
* [postSetupV1LocationsBulk](docs/locations/README.md#postsetupv1locationsbulk) - Create Locations Bulk
* [postSetupV1LocationsIdEmailTemplates](docs/locations/README.md#postsetupv1locationsidemailtemplates) - Create Custom Template
* [postSetupV1LocationsIdEmailTemplatesMaster](docs/locations/README.md#postsetupv1locationsidemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1LocationsIdGoogleServiceAccount](docs/locations/README.md#postsetupv1locationsidgoogleserviceaccount) - Create Google Cal Access
* [postSetupV1LocationsIdServices](docs/locations/README.md#postsetupv1locationsidservices) - Create Linked Service
* [postSetupV1LocationsIdUploadimage](docs/locations/README.md#postsetupv1locationsiduploadimage) - Upload Location Image
* [putSetupV1LocationsId](docs/locations/README.md#putsetupv1locationsid) - Update Location
* [putSetupV1LocationsIdAppointmentreminders](docs/locations/README.md#putsetupv1locationsidappointmentreminders) - Update Reminders
* [putSetupV1LocationsIdHolidaysHolidayIdClosed](docs/locations/README.md#putsetupv1locationsidholidaysholidayidclosed) - Update Location Holidays
* [putSetupV1LocationsIdRecover](docs/locations/README.md#putsetupv1locationsidrecover) - Recover Location
* [putSetupV1LocationsIdSettingsScopeSettingsScope](docs/locations/README.md#putsetupv1locationsidsettingsscopesettingsscope) - Update Location Scope

### [resourceGroups](docs/resourcegroups/README.md)

* [deleteSetupV1ResourcegroupsId](docs/resourcegroups/README.md#deletesetupv1resourcegroupsid) - Delete Resource Group
* [getSetupV1Resourcegroups](docs/resourcegroups/README.md#getsetupv1resourcegroups) - List Resource Groups
* [getSetupV1ResourcegroupsId](docs/resourcegroups/README.md#getsetupv1resourcegroupsid) - Get Resource Group
* [postSetupV1Resourcegroups](docs/resourcegroups/README.md#postsetupv1resourcegroups) - Create Resource Group
* [putSetupV1ResourcegroupsId](docs/resourcegroups/README.md#putsetupv1resourcegroupsid) - Update Resource Group
* [putSetupV1ResourcegroupsIdRecover](docs/resourcegroups/README.md#putsetupv1resourcegroupsidrecover) - Recover Resource Group

### [resources](docs/resources/README.md)

* [deleteSetupV1ResourcesAllocationsId](docs/resources/README.md#deletesetupv1resourcesallocationsid) - Delete Allocation
* [deleteSetupV1ResourcesBlockId](docs/resources/README.md#deletesetupv1resourcesblockid) - Delete Block
* [deleteSetupV1ResourcesId](docs/resources/README.md#deletesetupv1resourcesid) - Delete Resource
* [deleteSetupV1ResourcesIdDeleteimage](docs/resources/README.md#deletesetupv1resourcesiddeleteimage) - Delete Resource Image
* [deleteSetupV1ResourcesIdServices](docs/resources/README.md#deletesetupv1resourcesidservices) - Delete Linked Services
* [getSetupV1Resources](docs/resources/README.md#getsetupv1resources) - List Resources
* [getSetupV1ResourcesAllocationsId](docs/resources/README.md#getsetupv1resourcesallocationsid) - Get Allocation
* [getSetupV1ResourcesBlocksId](docs/resources/README.md#getsetupv1resourcesblocksid) - Get Block
* [getSetupV1ResourcesTimezones](docs/resources/README.md#getsetupv1resourcestimezones) - Get Time Zones
* [getSetupV1ResourcesId](docs/resources/README.md#getsetupv1resourcesid) - Get Resource
* [getSetupV1ResourcesIdAllocations](docs/resources/README.md#getsetupv1resourcesidallocations) - List Resource Allocations
* [getSetupV1ResourcesIdAvailability](docs/resources/README.md#getsetupv1resourcesidavailability) - List Weekly Availability
* [getSetupV1ResourcesIdBlocks](docs/resources/README.md#getsetupv1resourcesidblocks) - List Resource Blocks
* [getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress](docs/resources/README.md#getsetupv1resourcesidcalendarauthgooglegoogleemailaddress) - Get Resource Google URL
* [getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress](docs/resources/README.md#getsetupv1resourcesidcalendarauthoutlookoutlookemailaddress) - Get Resource Outlook URL
* [postSetupV1Resources](docs/resources/README.md#postsetupv1resources) - Create Resource
* [postSetupV1ResourcesBulk](docs/resources/README.md#postsetupv1resourcesbulk) - Create Resources Bulk
* [postSetupV1ResourcesIdAllocations](docs/resources/README.md#postsetupv1resourcesidallocations) - Create Allocation
* [postSetupV1ResourcesIdBlock](docs/resources/README.md#postsetupv1resourcesidblock) - Create Block
* [postSetupV1ResourcesIdServices](docs/resources/README.md#postsetupv1resourcesidservices) - Create Linked Services
* [postSetupV1ResourcesIdUploadimage](docs/resources/README.md#postsetupv1resourcesiduploadimage) - Upload Resource Image
* [putSetupV1ResourcesAllocationsId](docs/resources/README.md#putsetupv1resourcesallocationsid) - Update Allocation
* [putSetupV1ResourcesBlockId](docs/resources/README.md#putsetupv1resourcesblockid) - Update Block
* [putSetupV1ResourcesBulk](docs/resources/README.md#putsetupv1resourcesbulk) - Update Resources Bulk
* [putSetupV1ResourcesId](docs/resources/README.md#putsetupv1resourcesid) - Update Resource
* [putSetupV1ResourcesIdAvailability](docs/resources/README.md#putsetupv1resourcesidavailability) - Update Weekly Availability
* [putSetupV1ResourcesIdReassignAppointmentsResourceId](docs/resources/README.md#putsetupv1resourcesidreassignappointmentsresourceid) - Reassign Resource
* [putSetupV1ResourcesIdRecover](docs/resources/README.md#putsetupv1resourcesidrecover) - Recover Resource
* [putSetupV1ResourcesIdServices](docs/resources/README.md#putsetupv1resourcesidservices) - Update Linked Services

### [serviceGroups](docs/servicegroups/README.md)

* [deleteSetupV1ServicegroupsId](docs/servicegroups/README.md#deletesetupv1servicegroupsid) - Delete Service Group
* [getSetupV1Servicegroups](docs/servicegroups/README.md#getsetupv1servicegroups) - List Service Groups
* [getSetupV1ServicegroupsId](docs/servicegroups/README.md#getsetupv1servicegroupsid) - Get Service Group
* [postSetupV1Servicegroups](docs/servicegroups/README.md#postsetupv1servicegroups) - Create Service Group
* [putSetupV1ServicegroupsId](docs/servicegroups/README.md#putsetupv1servicegroupsid) - Update Service Group
* [putSetupV1ServicegroupsIdRecover](docs/servicegroups/README.md#putsetupv1servicegroupsidrecover) - Recover Service Group

### [services](docs/services/README.md)

* [deleteSetupV1ServicesAllocationsId](docs/services/README.md#deletesetupv1servicesallocationsid) - Delete Allocation
* [deleteSetupV1ServicesBlockId](docs/services/README.md#deletesetupv1servicesblockid) - Delete Block
* [deleteSetupV1ServicesCalendarId](docs/services/README.md#deletesetupv1servicescalendarid) - Delete Service Links
* [deleteSetupV1ServicesId](docs/services/README.md#deletesetupv1servicesid) - Delete Service
* [deleteSetupV1ServicesIdDeleteimage](docs/services/README.md#deletesetupv1servicesiddeleteimage) - Delete Service Image
* [getSetupV1Services](docs/services/README.md#getsetupv1services) - List Services
* [getSetupV1ServicesAllocationsId](docs/services/README.md#getsetupv1servicesallocationsid) - Get Allocation
* [getSetupV1ServicesBlocksId](docs/services/README.md#getsetupv1servicesblocksid) - Get Block
* [getSetupV1ServicesId](docs/services/README.md#getsetupv1servicesid) - Get Service
* [getSetupV1ServicesIdAllocations](docs/services/README.md#getsetupv1servicesidallocations) - List Service Allocations
* [getSetupV1ServicesIdAvailability](docs/services/README.md#getsetupv1servicesidavailability) - Get Weekly Availability
* [getSetupV1ServicesIdBlocks](docs/services/README.md#getsetupv1servicesidblocks) - List Service Blocks
* [getSetupV1ServicesIdCalendar](docs/services/README.md#getsetupv1servicesidcalendar) - Get Linked Calendar
* [getSetupV1ServicesIdResources](docs/services/README.md#getsetupv1servicesidresources) - List Resources for Service
* [postSetupV1Services](docs/services/README.md#postsetupv1services) - Create Service
* [postSetupV1ServicesCalendar](docs/services/README.md#postsetupv1servicescalendar) - Link Service to Calendar
* [postSetupV1ServicesIdAllocations](docs/services/README.md#postsetupv1servicesidallocations) - Create Allocation
* [postSetupV1ServicesIdAllocationsBulk](docs/services/README.md#postsetupv1servicesidallocationsbulk) - Create Allocations Bulk
* [postSetupV1ServicesIdBlock](docs/services/README.md#postsetupv1servicesidblock) - Create Block
* [postSetupV1ServicesIdUploadimage](docs/services/README.md#postsetupv1servicesiduploadimage) - Upload Service Image
* [putSetupV1ServicesAllocationsId](docs/services/README.md#putsetupv1servicesallocationsid) - Update Allocation
* [putSetupV1ServicesBlockId](docs/services/README.md#putsetupv1servicesblockid) - Update Block
* [putSetupV1ServicesId](docs/services/README.md#putsetupv1servicesid) - Update Service
* [putSetupV1ServicesIdAvailability](docs/services/README.md#putsetupv1servicesidavailability) - Update Weekly Availability
* [putSetupV1ServicesIdRecover](docs/services/README.md#putsetupv1servicesidrecover) - Recover Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
