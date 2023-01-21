# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetSetupV1AppointmentsRequest{
        QueryParams: operations.GetSetupV1AppointmentsQueryParams{
            BookedBy: "sit",
            CalendarID: "voluptas",
            CustomerID: "culpa",
            Email: "expedita",
            EndDate: "1997-12-26T13:41:25Z",
            Lastname: "dolor",
            Limit: 1774932891286980153,
            LocationID: "voluptas",
            Offset: 8274930044578894929,
            ResourceID: "et",
            ServiceAllocationID: "nihil",
            ServiceID: "rerum",
            StartDate: "2004-06-02T10:14:12Z",
            Status: "voluptatum",
        },
    }
    
    res, err := s.Appointments.GetSetupV1Appointments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Appointments

* `GetSetupV1Appointments` - Returns a list of appointments.
* `GetSetupV1AppointmentsID` - Returns an appointment object.
* `PutSetupV1AppointmentsIDReassignResourceResourceID` - Reassigns the appointment to the supplied resourceId

### BusinessUsers

* `DeleteSetupV1BusinessusersID` - Permanently deletes businessUser object.
* `GetSetupV1Businessusers` - Returns a list of business users.
* `GetSetupV1BusinessusersPermissions` - Returns a list of system roles and permission.
* `GetSetupV1BusinessusersEmailCompanies` - Returns a list of companies for the business user.
* `GetSetupV1BusinessusersID` - Returns a businessUser object.
* `PostSetupV1Businessusers` - Creates a new businessUser object.
* `PutSetupV1BusinessusersID` - Updates a businessUser object.

### Calendars

* `DeleteSetupV1CalendarsBlockID` - Delete a calendar block object
* `DeleteSetupV1CalendarsID` - Deletes a calendar object.
* `GetSetupV1Calendars` - Returns a list of calendars.
* `GetSetupV1CalendarsBlocksID` - Update a calendar block
* `GetSetupV1CalendarsID` - Returns a calendar object.
* `GetSetupV1CalendarsIDBlocks` - Returns a list of calendar blocks.
* `GetSetupV1CalendarsIDServices` - Returns a list of services linked to a calendar.
* `PostSetupV1Calendars` - Creates a new calendar object.
* `PostSetupV1CalendarsIDBlock` - Create a new calendar block
* `PutSetupV1CalendarsBlockID` - Update a calendar block
* `PutSetupV1CalendarsID` - Updates a calendar object.
* `PutSetupV1CalendarsIDRecover` - Recovers a calendar object.

### Companies

* `DeleteSetupV1CompaniesDomainsID` - Deletes a whitelisted domain for the authorized company
Returns view of domain deleted
* `DeleteSetupV1CompaniesEmailTemplatesMaster` - Deletes custom master email template settings reverting to the default
* `DeleteSetupV1CompaniesRegionsID` - Delete a region
* `GetSetupV1Companies` - Returns a company profile information of the authorized company
* `GetSetupV1CompaniesDomains` - Returns a list of whitelisted domains for the authorized company
* `GetSetupV1CompaniesDomainsID` - Returns a whitelisted domain for the authorized company
* `GetSetupV1CompaniesEmailTemplates` - Returns email template list from the authorized company
* `GetSetupV1CompaniesEmailTemplatesMaster` - Returns master email template settings
* `GetSetupV1CompaniesEmailTemplatesTemplateName` - Returns default or custom email template from the authorized company
* `GetSetupV1CompaniesRegions` - Returns a list of regions.
* `GetSetupV1CompaniesRegionsID` - Get a Region
* `GetSetupV1CompaniesTimezonesDate` - Returns timezone information for all supported Timezone's
* `PostSetupV1Companies` - Creates a company profile.
* `PostSetupV1CompaniesDomains` - Creates a whitelisted domain for the authorized company
Returns view of domain created
* `PostSetupV1CompaniesEmailTemplatesMaster` - Updates / creates custom master email template settings
* `PostSetupV1CompaniesRegions` - Create a new region
* `PutSetupV1Companies` - Updates a company object.
* `PutSetupV1CompaniesDomainsID` - Updates a whitelisted domain for the authorized company
Returns view of domain updated
* `PutSetupV1CompaniesRegionsID` - Update a region

### Customers

* `GetSetupV1Customers` - Returns a list of customers.
* `GetSetupV1CustomersID` - Returns a customer object.
* `GetSetupV1CustomersIDPrivacy` - Returns a customer privacy report data.

### Locations

* `DeleteSetupV1LocationsServicesID` - Deletes a location service from the specified location
* `DeleteSetupV1LocationsID` - Deletes a location object.
* `DeleteSetupV1LocationsIDDeleteallimages` - Deletes all images from location blob storage container
* `DeleteSetupV1LocationsIDDeleteimage` - Removes a location image
* `DeleteSetupV1LocationsIDEmailTemplatesMaster` - Deletes custom master email template settings reverting to the default
* `DeleteSetupV1LocationsIDEmailTemplatesTemplateName` - Deletes a custom email template
* `DeleteSetupV1LocationsIDGoogleServiceAccount` - Remove authorized access to all google calendar users in an organization
* `DeleteSetupV1LocationsIDServices` - Deletes all location services from the specified location
* `GetSetupV1Locations` - Returns a list of business locations.
* `GetSetupV1LocationsServicesID` - Returns a single location services.
* `GetSetupV1LocationsID` - Returns a business location object.
* `GetSetupV1LocationsIDEmailTemplates` - Returns email template list from the authorized company
* `GetSetupV1LocationsIDEmailTemplatesMaster` - Returns master email template settings
* `GetSetupV1LocationsIDEmailTemplatesTemplateName` - Returns company default or custom email template from the specified location
* `GetSetupV1LocationsIDGoogleServiceAccount` - Returns google service account info
* `GetSetupV1LocationsIDServices` - Returns a list of location services.
* `PostSetupV1Locations` - Creates a new location object.
* `PostSetupV1LocationsBulk` - Creates new location objects.
* `PostSetupV1LocationsIDEmailTemplates` - Uploads a custom email template
* `PostSetupV1LocationsIDEmailTemplatesMaster` - Saves settings for the master email template
* `PostSetupV1LocationsIDGoogleServiceAccount` - Authorize access to all google calendar users in an organization
* `PostSetupV1LocationsIDServices` - Adds location services to the specified location
* `PostSetupV1LocationsIDUploadimage` - Uploads a location image
* `PutSetupV1LocationsID` - Use this endpoint to change the scope of online booking settings
* `PutSetupV1LocationsIDHolidaysHolidayIDClosed` - Sets a business holiday to open or closed.
* `PutSetupV1LocationsIDRecover` - Recovers a location object.
* `PutSetupV1LocationsIDSettingsScopeSettingsScope` - Changes the scope of OnlineBooking Settings.

### ResourceGroups

* `DeleteSetupV1ResourcegroupsID` - Deletes a resource group object.
* `GetSetupV1Resourcegroups` - Returns a list of resourcegroups.
* `GetSetupV1ResourcegroupsID` - Returns a resourceGroup object.
* `PostSetupV1Resourcegroups` - Creates a new resource group object.
* `PutSetupV1ResourcegroupsID` - Updates a resource group object.
* `PutSetupV1ResourcegroupsIDRecover` - Recovers a resource group object.

### Resources

* `DeleteSetupV1ResourcesAllocationsID` - Delete a resource allocation object
* `DeleteSetupV1ResourcesBlockID` - Delete a resource block object
* `DeleteSetupV1ResourcesID` - Deletes a resource object.
* `DeleteSetupV1ResourcesIDDeleteimage` - Removes a resource image
* `DeleteSetupV1ResourcesIDServices` - Deletes resource services from the specified resource
* `GetSetupV1Resources` - Returns a list of resources.
* `GetSetupV1ResourcesAllocationsID` - Update a resource allocation
* `GetSetupV1ResourcesBlocksID` - Update a resource block
* `GetSetupV1ResourcesTimezones`
* `GetSetupV1ResourcesID` - Returns a resource object.
* `GetSetupV1ResourcesIDAllocations` - Returns a list of resource allocations.
* `GetSetupV1ResourcesIDAvailability` - Returns a list of weekly availability
* `GetSetupV1ResourcesIDBlocks` - Returns a list of resource blocks.
* `GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress` - Returns a resource object.
* `GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress` - Returns a resource object.
* `PostSetupV1Resources` - Creates a new resource object.
* `PostSetupV1ResourcesBulk` - Creates new resource objects.
* `PostSetupV1ResourcesIDAllocations` - Create a new resource allocation
* `PostSetupV1ResourcesIDBlock` - Create a new resource block
* `PostSetupV1ResourcesIDServices` - Adds resource services to the specified resource
* `PostSetupV1ResourcesIDUploadimage` - Uploads a resource image
* `PutSetupV1ResourcesAllocationsID` - Update a resource allocation
* `PutSetupV1ResourcesBlockID` - Update a resource block
* `PutSetupV1ResourcesBulk` - Updates resource objects.
* `PutSetupV1ResourcesID` - Updates a resource object.
* `PutSetupV1ResourcesIDAvailability` - Updates Weekly Availability
* `PutSetupV1ResourcesIDReassignAppointmentsResourceID` - Reassigns appointments to another resource
* `PutSetupV1ResourcesIDRecover` - Recovers a resource object.

### Services

* `DeleteSetupV1ServicesAllocationsID` - Delete a service allocation object
* `DeleteSetupV1ServicesBlockID` - Delete a service block object
* `DeleteSetupV1ServicesBookingwindowsID` - Permanently deletes bookingWindow object.
* `DeleteSetupV1ServicesCalendarID`
* `DeleteSetupV1ServicesID` - Deletes a service object.
* `DeleteSetupV1ServicesIDDeleteimage` - Removes a service image
* `GetSetupV1Services` - Returns a list of services.
* `GetSetupV1ServicesAllocationsID` - Get a service allocation
* `GetSetupV1ServicesBlocksID` - Get a service block
* `GetSetupV1ServicesBookingwindowsID` - Get a booking window
* `GetSetupV1ServicesID` - Returns a service object.
* `GetSetupV1ServicesIDAllocations` - Returns a list of service allocations.
* `GetSetupV1ServicesIDAvailability` - Returns a list of weekly availability
* `GetSetupV1ServicesIDBlocks` - Returns a list of service blocks.
* `GetSetupV1ServicesIDBookingwindows` - Returns a list of service booking windows.
* `GetSetupV1ServicesIDCalendar` - Returns the linked calendar for the service
* `GetSetupV1ServicesIDResources` - Returns a list of resources for the specified service.
* `PostSetupV1Services` - Creates a new service object.
* `PostSetupV1ServicesBookingwindows` - Creates a new bookingWindow object.
* `PostSetupV1ServicesCalendar` - Links the service to a calendar
* `PostSetupV1ServicesIDAllocations` - Create a new service allocation
* `PostSetupV1ServicesIDAllocationsBulk` - Create new service allocations in bulk
* `PostSetupV1ServicesIDBlock` - Create a new service block
* `PostSetupV1ServicesIDUploadimage` - Uploads a service image
* `PutSetupV1ServicesAllocationsID` - Update a service allocation
* `PutSetupV1ServicesBlockID` - Update a service block
* `PutSetupV1ServicesBookingwindowsID` - Updates a bookingWindow object.
* `PutSetupV1ServicesID` - Updates a service object.
* `PutSetupV1ServicesIDAvailability` - Updates Weekly Availability
* `PutSetupV1ServicesIDRecover` - Recovers a service object.

### StripePlans

* `GetPlanID`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
