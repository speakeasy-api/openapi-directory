# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/onsched.com/setup/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.GetSetupV1AppointmentsRequest(
    booked_by="corrupti",
    calendar_id="provident",
    customer_id="distinctio",
    email="Leda_Stiedemann@hotmail.com",
    end_date="2022-05-18T09:34:54.894Z",
    lastname="Oberbrunner",
    limit=384382,
    location_id="iure",
    offset=297534,
    resource_id="debitis",
    service_allocation_id="ipsa",
    service_id="delectus",
    start_date="2022-08-14T01:03:07.567Z",
    status="molestiae",
)
    
res = s.appointments.get_setup_v1_appointments(req)

if res.appointment_list_view_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### appointments

* `get_setup_v1_appointments` - List Appointments
* `get_setup_v1_appointments_id_` - Get Appointment
* `put_setup_v1_appointments_id_reassign_resource_resource_id_` - Reassign Appointment

### business_users

* `delete_setup_v1_businessusers_id_` - Delete User
* `get_setup_v1_businessusers` - List Users
* `get_setup_v1_businessusers_permissions` - List User Permissions
* `get_setup_v1_businessusers_email_companies` - List User Companies
* `get_setup_v1_businessusers_id_` - Get User
* `post_setup_v1_businessusers` - Create User
* `put_setup_v1_businessusers_id_` - Update User

### calendars

* `delete_setup_v1_calendars_block_id_` - Delete Calendar Block
* `delete_setup_v1_calendars_id_` - Delete Calendar
* `get_setup_v1_calendars` - List Calendars
* `get_setup_v1_calendars_blocks_id_` - Get Calendar Block
* `get_setup_v1_calendars_id_` - Get Calendar
* `get_setup_v1_calendars_id_blocks` - List Calendar Blocks
* `get_setup_v1_calendars_id_services` - List Calendar Services
* `post_setup_v1_calendars` - DEPRECATING: Create
* `post_setup_v1_calendars_id_block` - Create Calendar Block
* `put_setup_v1_calendars_block_id_` - Update Calendar Block
* `put_setup_v1_calendars_id_` - Update Calendar
* `put_setup_v1_calendars_id_recover` - Recover Calendar

### companies

* `delete_setup_v1_companies_domains_id_` - Delete Company Domain
* `delete_setup_v1_companies_email_templates_master` - Delete Master Template Settings
* `delete_setup_v1_companies_regions_id_` - Delete Region
* `get_setup_v1_companies` - Get Company
* `get_setup_v1_companies_domains` - List Company Domains
* `get_setup_v1_companies_domains_id_` - Get Company Domain
* `get_setup_v1_companies_email_templates` - List Email Templates
* `get_setup_v1_companies_email_templates_master` - Get Master Template Settings
* `get_setup_v1_companies_email_templates_template_name_` - Get Email Template
* `get_setup_v1_companies_regions` - List Regions
* `get_setup_v1_companies_regions_id_` - Get Region
* `get_setup_v1_companies_timezones_date_` - List Time Zones
* `post_setup_v1_companies` - Create Company
* `post_setup_v1_companies_domains` - Create Company Domain
* `post_setup_v1_companies_email_templates_master` - Create Master Template Settings
* `post_setup_v1_companies_regions` - Create Region
* `put_setup_v1_companies` - Update Company
* `put_setup_v1_companies_domains_id_` - Update Company Domain
* `put_setup_v1_companies_regions_id_` - Update Region

### customers

* `get_setup_v1_customers` - List Customers
* `get_setup_v1_customers_id_` - Get Customer
* `get_setup_v1_customers_id_privacy` - Get Customer Data

### locations

* `delete_setup_v1_locations_services_id_` - Unlink Service
* `delete_setup_v1_locations_id_` - Delete Location
* `delete_setup_v1_locations_id_deleteallimages` - Delete All Location Images
* `delete_setup_v1_locations_id_deleteimage` - Delete Location Image
* `delete_setup_v1_locations_id_email_templates_master` - Delete Master Template Settings
* `delete_setup_v1_locations_id_email_templates_template_name_` - Delete Custom Template
* `delete_setup_v1_locations_id_google_service_account` - Delete Google Cal Access
* `delete_setup_v1_locations_id_services` - Delete Linked Services
* `get_setup_v1_locations` - List Locations
* `get_setup_v1_locations_services_id_` - Get Linked Service
* `get_setup_v1_locations_id_` - Get Location
* `get_setup_v1_locations_id_appointmentreminders` - Get Reminders
* `get_setup_v1_locations_id_email_templates` - List Email Templates
* `get_setup_v1_locations_id_email_templates_master` - Get Master Template Settings
* `get_setup_v1_locations_id_email_templates_template_name_` - Get Email Template
* `get_setup_v1_locations_id_services` - List Location Linked Services
* `post_setup_v1_locations` - Create Location
* `post_setup_v1_locations_bulk` - Create Locations Bulk
* `post_setup_v1_locations_id_email_templates` - Create Custom Template
* `post_setup_v1_locations_id_email_templates_master` - Create Master Template Settings
* `post_setup_v1_locations_id_google_service_account` - Create Google Cal Access
* `post_setup_v1_locations_id_services` - Create Linked Service
* `post_setup_v1_locations_id_uploadimage` - Upload Location Image
* `put_setup_v1_locations_id_` - Update Location
* `put_setup_v1_locations_id_appointmentreminders` - Update Reminders
* `put_setup_v1_locations_id_holidays_holiday_id_closed_` - Update Location Holidays
* `put_setup_v1_locations_id_recover` - Recover Location
* `put_setup_v1_locations_id_settings_scope_settings_scope_` - Update Location Scope

### resource_groups

* `delete_setup_v1_resourcegroups_id_` - Delete Resource Group
* `get_setup_v1_resourcegroups` - List Resource Groups
* `get_setup_v1_resourcegroups_id_` - Get Resource Group
* `post_setup_v1_resourcegroups` - Create Resource Group
* `put_setup_v1_resourcegroups_id_` - Update Resource Group
* `put_setup_v1_resourcegroups_id_recover` - Recover Resource Group

### resources

* `delete_setup_v1_resources_allocations_id_` - Delete Allocation
* `delete_setup_v1_resources_block_id_` - Delete Block
* `delete_setup_v1_resources_id_` - Delete Resource
* `delete_setup_v1_resources_id_deleteimage` - Delete Resource Image
* `delete_setup_v1_resources_id_services` - Delete Linked Services
* `get_setup_v1_resources` - List Resources
* `get_setup_v1_resources_allocations_id_` - Get Allocation
* `get_setup_v1_resources_blocks_id_` - Get Block
* `get_setup_v1_resources_timezones` - Get Time Zones
* `get_setup_v1_resources_id_` - Get Resource
* `get_setup_v1_resources_id_allocations` - List Resource Allocations
* `get_setup_v1_resources_id_availability` - List Weekly Availability
* `get_setup_v1_resources_id_blocks` - List Resource Blocks
* `get_setup_v1_resources_id_calendar_auth_google_google_email_address_` - Get Resource Google URL
* `get_setup_v1_resources_id_calendar_auth_outlook_outlook_email_address_` - Get Resource Outlook URL
* `post_setup_v1_resources` - Create Resource
* `post_setup_v1_resources_bulk` - Create Resources Bulk
* `post_setup_v1_resources_id_allocations` - Create Allocation
* `post_setup_v1_resources_id_block` - Create Block
* `post_setup_v1_resources_id_services` - Create Linked Services
* `post_setup_v1_resources_id_uploadimage` - Upload Resource Image
* `put_setup_v1_resources_allocations_id_` - Update Allocation
* `put_setup_v1_resources_block_id_` - Update Block
* `put_setup_v1_resources_bulk` - Update Resources Bulk
* `put_setup_v1_resources_id_` - Update Resource
* `put_setup_v1_resources_id_availability` - Update Weekly Availability
* `put_setup_v1_resources_id_reassign_appointments_resource_id_` - Reassign Resource
* `put_setup_v1_resources_id_recover` - Recover Resource
* `put_setup_v1_resources_id_services` - Update Linked Services

### service_groups

* `delete_setup_v1_servicegroups_id_` - Delete Service Group
* `get_setup_v1_servicegroups` - List Service Groups
* `get_setup_v1_servicegroups_id_` - Get Service Group
* `post_setup_v1_servicegroups` - Create Service Group
* `put_setup_v1_servicegroups_id_` - Update Service Group
* `put_setup_v1_servicegroups_id_recover` - Recover Service Group

### services

* `delete_setup_v1_services_allocations_id_` - Delete Allocation
* `delete_setup_v1_services_block_id_` - Delete Block
* `delete_setup_v1_services_calendar_id_` - Delete Service Links
* `delete_setup_v1_services_id_` - Delete Service
* `delete_setup_v1_services_id_deleteimage` - Delete Service Image
* `get_setup_v1_services` - List Services
* `get_setup_v1_services_allocations_id_` - Get Allocation
* `get_setup_v1_services_blocks_id_` - Get Block
* `get_setup_v1_services_id_` - Get Service
* `get_setup_v1_services_id_allocations` - List Service Allocations
* `get_setup_v1_services_id_availability` - Get Weekly Availability
* `get_setup_v1_services_id_blocks` - List Service Blocks
* `get_setup_v1_services_id_calendar` - Get Linked Calendar
* `get_setup_v1_services_id_resources` - List Resources for Service
* `post_setup_v1_services` - Create Service
* `post_setup_v1_services_calendar` - Link Service to Calendar
* `post_setup_v1_services_id_allocations` - Create Allocation
* `post_setup_v1_services_id_allocations_bulk` - Create Allocations Bulk
* `post_setup_v1_services_id_block` - Create Block
* `post_setup_v1_services_id_uploadimage` - Upload Service Image
* `put_setup_v1_services_allocations_id_` - Update Allocation
* `put_setup_v1_services_block_id_` - Update Block
* `put_setup_v1_services_id_` - Update Service
* `put_setup_v1_services_id_availability` - Update Weekly Availability
* `put_setup_v1_services_id_recover` - Recover Service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
