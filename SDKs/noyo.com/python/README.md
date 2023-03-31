# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/noyo.com/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.ping()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `ping` - Ping Endpoint

### agents

* `create_agent_contact` - Create new Agent Contact
* `create_agent_location` - Create new Agent Location
* `create_application_agent` - Create new Agent
* `edit_agent` - Edit an Agent
* `edit_agent_contact` - Edit an Agent Contact
* `edit_agent_location` - Edit an Agent Location
* `get_agent` - Get Agent
* `get_agent_contact` - Get Agent
* `get_agent_contacts` - Get Agent Contacts
* `get_agent_location` - Get Agent
* `get_agent_locations` - Get Agent Locations
* `get_application_agents` - Get Application Agents

### application_documents

* `create_application_document` - Create new Application Document
* `edit_application_document` - Edit an Application Document
* `get_application_document` - Get Application Document
* `get_application_documents` - Get all Application Documents
* `submit_application_document` - Submit new Application Document

### applications

* `cancel_group_application` - Cancel a Group Application
* `create_group_application` - Create new Group Application
* `edit_group_application` - Edit a Group Application
* `get_all_applications` - Get All Applications
* `get_group_application` - Get Group Application
* `get_group_applications` - Get Group Applications
* `submit_group_application` - Submit a Group Application
* `validate_group_application` - Validate Group Application

### bank_accounts

* `create_bank_account` - Create Bank Account
* `delete_bank_account` - Delete a Bank Account
* `get_all_bank_accounts` - Get All Bank Account
* `get_bank_account` - Get Bank Account

### coverage_plans

* `create_coverage_plan` - Create Coverage Plan
* `edit_coverage_plan` - Edit a Coverage Plan
* `get_coverage_plan` - Get Coverage Plan
* `get_group_coverage_plans` - Get all Group Coverage Plans

### dependents

* `create_dependent` - Create Dependent
* `edit_dependent` - Edit a Dependent
* `get_dependent` - Get Dependent
* `get_employee_dependents_list` - Get all Employee Dependents

### employees

* `create_employee` - Create Employee
* `edit_employee` - Edit an Employee
* `get_employee` - Get Employee
* `get_group_employees_list` - Get all Group Employees

### group_configuration_contacts

* `create_contact` - Create new Contact
* `edit_contact` - Edit a Contact
* `get_contact` - Get Contact
* `get_contact_list` - Get all Group Contacts

### group_configuration_locations

* `create_location` - Create new Location
* `edit_location` - Edit a Location
* `get_location` - Get Location
* `get_location_list` - Get all Group Locations

### group_coverages

* `create_group_coverage` - Create new Group Coverage
* `edit_group_coverage` - Edit a Group Coverage
* `get_application_group_coverages` - Get all Application Group Coverages
* `get_group_coverage` - Get Group Coverage

### groups

* `create_group` - Create new Group
* `edit_group` - Edit a Group
* `get_group` - Get Group
* `get_groups` - Get Groups

### member_elections

* `create_member_election` - Create new Member Election
* `edit_member_election` - Edit a Member Election
* `get_application_member_elections` - Get all Application Member Elections
* `get_coverage_plan_member_elections` - Get all Coverage Plan Member Elections
* `get_member_election` - Get a Member Election
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
