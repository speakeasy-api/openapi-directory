# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/noosh.com/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBillingRecipientsRequest(
    workgroup_id="corrupti",
)
    
res = s.contact.get_billing_recipients(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### contact

* `get_billing_recipients` - List Billing Recipients
* `get_contact_list` - List the contacts
* `get_contact_user_info` - Contact Info

### country

* `get_country_list` - List all countries

### deactivation_reason

* `get_deactivation_reason_list` - List all deactivation reasons

### estimate

* `get_estimate` - Get a specific estimate of project
* `get_estimate_list` - List the Estimates
* `post_estimate_json` - Create a Estimate
* `post_estimate_raw` - Create a Estimate

### exchange_rate

* `get_exchange_rate_list` - Get Exchange Rate List
* `post_exchange_rate_json` - Create Exchange Rates
* `post_exchange_rate_raw` - Create Exchange Rates

### file

* `get_file` - Get File from Project.  Works for Regular and Remote Files
* `get_file_tags` - List Tags from Workgroup and Project.
* `get_files` - List Files from Project.  Works for Regular and Remote Files
* `upload_file` - Upload File to Project.  A multipart/form-data request with a name "file"

### invoice

* `get_invoice` - List a specific invoice of project Level
* `get_invoice_files` - List files of invoice Level
* `get_invoices` - List invoices by a specific order

### my_info

* `get_automatic_invitation_list` - List current user's automatic invitations info 
* `get_team_template_detail` - Get current user's team template detal info 
* `get_team_template_list` - List current user's team templates info 
* `upload_profile_image` - Upload Profile Image.  A multipart/form-data request with a name "file"

### order

* `get_buy_order` - Get a specific buy order
* `get_buy_order_list` - List the buy orders
* `get_buy_order_list_of_workgroup` - List the buy orders of workgroup
* `get_buy_order_of_workgroup` - Get a specific buy order of workgroup
* `get_order` - Get a specific buy/sell order
* `get_sell_order` - Get a specific sell order
* `get_sell_order_list` - List the sell orders
* `get_sell_order_list_of_workgroup` - List the sell orders of workgrop
* `get_sell_order_of_workgroup` - Get a specific sell order
* `post_buy_order_json` - Create a quick buy order
* `post_buy_order_raw` - Create a quick buy order
* `put_buy_order_json` - Update a specific buy order
* `put_buy_order_raw` - Update a specific buy order
* `put_sell_order_json` - Update / Accept or Reject a specific sell order
* `put_sell_order_raw` - Update / Accept or Reject a specific sell order

### project

* `attach_project_json` - Attach children projects to specific Project
* `attach_project_raw` - Attach children projects to specific Project
* `delete_project` - Archieve a specific Project
* `get_project` - Get a specific Project
* `get_project_list` - List the projects
* `patch_project_json` - Patch a specific Project
* `patch_project_raw` - Patch a specific Project
* `post_project_json` - Create a Project
* `post_project_raw` - Create a Project
* `put_project_json` - Update a specific Project
* `put_project_raw` - Update a specific Project

### project_category

* `get_project_category_list` - List the project categories
* `get_project_category_list_of_client` - List the project categories of client side

### project_status

* `get_project_status` - List the project status
* `get_project_status_of_client` - List the project status of client

### quote

* `get_quote` - Get a specific quote of project
* `get_quote_list` - List the quotes
* `get_quote_state_list` - List the quote states
* `get_v1_workgroups_workgroup_id_quotes` - List the quotes of workgroup level
* `put_quote_json` - Accept / Reject a Quote
* `put_quote_raw` - Accept / Reject a Quote

### rfe

* `get_rfe` - Get a specific Rfe
* `get_rfe_list` - List the RFES
* `post_rfe_json` - Create a RFE
* `post_rfe_raw` - Create a RFE

### rfq

* `get_rfq` - Get a specific Rfq
* `get_rfq_list` - List the rfqs

### shipment

* `get_shipment` - Get a specific shipment.
* `get_shipment_list` - List shipments of project
* `post_shipment_json` - Create a shipment
* `post_shipment_raw` - Create a shipment
* `put_shipment_location_json` - Update a specific shipment location
* `put_shipment_location_raw` - Update a specific shipment location

### spec

* `get_product_type_list_of_workgroup` - Get product type of workgroup level
* `get_spec` - List a specific spec of project Level
* `get_spec_list` - List specs of project Level
* `get_spec_product_type_list_of_workgroup` - Get product type of spec level by workgroupId
* `get_spec_type_fields` - Get Spec Type Fields
* `get_v1_workgroups_workgroup_id_projects_project_id_specs_spec_id_` - List a specific spec of project Level
* `get_v1_workgroups_workgroup_id_spec_types_spec_type_id_spec_type_fields` - Get Spec Type Fields
* `post_spec_product_type_list_of_workgroup_json` - Register product types for spec types
* `post_spec_product_type_list_of_workgroup_raw` - Register product types for spec types
* `post_spec_json` - Create a Spec
* `post_spec_raw` - Create a Spec
* `put_spec_json` - Update a specific Spec
* `put_spec_raw` - Update a specific Spec
* `put_v1_workgroups_workgroup_id_projects_project_id_specs_spec_id_json` - Update a specific Spec
* `put_v1_workgroups_workgroup_id_projects_project_id_specs_spec_id_raw` - Update a specific Spec

### spec_template

* `get_spec_template` - Get a specific Spec Template
* `get_spec_template_list` - List Spec Templates of Workgroup Level 

### task

* `task_priority_list` - Get default task priority list
* `get_custom_task_types_of_wg` - Get custom task types of workgroup level
* `get_default_task_status_list` - Get default task status list
* `get_task_list_of_project` - Get task list of project level
* `get_task_list_of_workgroup` - Get task list of workgroup level
* `get_task_of_project` - Get a sepcific task of project level
* `get_task_of_workgroup` - Get a sepcific task of workgroup level
* `get_task_types_of_workgroup` - Get task types of workgroup level
* `get_wg_task_status_list_of_workgroup` - Get custom task status of workgroup level
* `post_task_for_project_json` - Create a new task
* `post_task_for_project_raw` - Create a new task

### team_member

* `delete_team_member_of_project` - Delete a team member for the specific project.
* `get_team_member_list_of_client_project` - List team member of client project side.
* `get_team_member_list_of_project` - List team member of project.
* `post_team_member_of_project_json` - Invite a team member or all the members of team template for the specific project.
* `post_team_member_of_project_raw` - Invite a team member or all the members of team template for the specific project.
* `post_v1_workgroups_workgroup_id_projects_project_id_teammembers_json` - Deprecated, please use 1.1 Version
* `post_v1_workgroups_workgroup_id_projects_project_id_teammembers_raw` - Deprecated, please use 1.1 Version

### team_member_role

* `get_member_roles` - List all the role options for the user

### time_card

* `get_my_time_card` - Get a specific my time cards
* `get_my_time_card_list` - List my time cards
* `get_received_time_card` - List a specific received time cards
* `get_received_time_card_list` - List received time cards

### user_fields

* `get_project_home_user_field_list_of_client` - List projec home user fields of client workgroup
* `get_project_home_user_fields_list` - List projec home user fields

### workgroup

* `get_client_workgroup_list` - List client workgroups
* `get_specific_client_workgroup` - Get a specific client workgroups
* `get_supplier_workgroup_detail` - Get the specific supplier of My Group
* `get_supplier_workgroup_list` - List supplier workgroups
* `get_workgroup_detail` - Detail workgroup info
* `get_workgroup_list` - List the workgroups
* `put_workgroup_json` - Update a specific Workgroup
* `put_workgroup_raw` - Update a specific Workgroup

### workgroup_members

* `get_workgroup_member_info` - Workgroup Member Info
* `get_workgroup_member_list` - List the workgroup members
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
