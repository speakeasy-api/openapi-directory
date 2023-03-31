# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/letmc.com/customer/v2-customer/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BranchControllerGetBranchesRequest(
    count=548814,
    offset=592845,
    short_name="distinctio",
)
    
res = s.branch_controller.branch_controller_get_branches(req)

if res.branch_model_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### branch_controller

* `branch_controller_get_branches` - All branches defined for a company
* `get_v2_customer_short_name_branch_branches_branch_id_` - Get a specific branch given its unique Object ID (OID)

### landlord_controller

* `landlord_controller_create_maintenance_preference` - Post tenancy maintenance preferences:-
* `landlord_controller_get_accounts` - Get the accounting details for the landlord.
* `landlord_controller_get_document` - Download a Document
* `landlord_controller_get_invetory_report` - Generate a Inventory PDF for a tenancy
* `landlord_controller_get_invoice` - Get an invoice pdf belonging to the landlord.
* `landlord_controller_get_landlord_crm_entries` - Retrieve landlord's CRM ID
* `landlord_controller_get_maintenance_jobs` - Get Active maintenance jobs.
* `landlord_controller_get_profit_loss_report` - Generate a Profit and Loss Report
* `landlord_controller_get_rent_arrears` - Rent Arrears
* `landlord_controller_get_sas_report` - Generate a Self Assessment Tax Report
* `landlord_controller_get_settings` - Get contact details of all linked landlords.
* `landlord_controller_get_summary_details` - Get the summary details for the landlord.
* `landlord_controller_get_tenancy` - Get tenancy details.
* `landlord_controller_get_tenancy_agreement_report` - Generate a Tenancy Agreement Copy (PDF)

### photo_controller

* `photo_controller_get_photo_download` - Downloads the photo of a property given the photo ID.

### property_controller

* `property_controller_get_properties_photos` - A collection showing all the photos linked to a specific block, property or room

### session_controller

* `session_controller_change_password` - Change the password of a customer given their existing and new password.
* `session_controller_create_landlord_login` - Send a request to the in-tray to create a landlord login.
* `session_controller_get_session_info` - Gets information about the currently logged on customer.
* `session_controller_login` - Login as a customer given their username and password.
* `session_controller_logout` - Logout a customer previously logged in via the Login endpoint.
* `session_controller_reset_password` - Reset the customer's password. An email will be sent out to reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
