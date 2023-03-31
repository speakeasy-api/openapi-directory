# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/letmc.com/diary/v3-diary/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompanyControllerGetBranchesRequest(
    count=548814,
    offset=592845,
    short_name="distinctio",
)
    
res = s.company_controller.company_controller_get_branches(req)

if res.advertising_branch_model_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### company_controller

* `company_controller_get_branches` - All branches defined for a company
* `get_v3_diary_short_name_company_branches_branch_id_` - Get a specific branch given its unique Object ID (OID)

### diary_controller

* `diary_controller_add_feedback_form` - Submit appointment feedback
* `diary_controller_add_feedback_json` - Submit appointment feedback
* `diary_controller_add_feedback_raw` - Submit appointment feedback
* `diary_controller_cancel_appointment` - Cancel an existing appointment using its unique identifier
* `diary_controller_delete_appointment` - Delete an existing appointment using its unique identifier
* `diary_controller_get_allocations` - Get a list of all available allocations for a date + 7 days for a specified appointment type
* `diary_controller_get_appointment` - Get an appointment by ID
* `diary_controller_get_appointment_types` - A collection of all diary appointment types
* `diary_controller_get_appointments_between_dates` - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* `diary_controller_get_recurring_appointments` - Retrieves all recurring appointments:-
* `diary_controller_post_appointment_form` - Post an appointment into a valid diary allocation
* `diary_controller_post_appointment_json` - Post an appointment into a valid diary allocation
* `diary_controller_post_appointment_raw` - Post an appointment into a valid diary allocation
* `diary_controller_put_appointment_form` - Update an existing appointment using its unique identifier
* `diary_controller_put_appointment_json` - Update an existing appointment using its unique identifier
* `diary_controller_put_appointment_raw` - Update an existing appointment using its unique identifier
* `diary_controller_search_guest` - Match Guest Parameters with existing applicants
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
