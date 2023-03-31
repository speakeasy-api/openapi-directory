# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/paylocity.com/2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddOrUpdateAdditionalRatesRequest(
    additional_rate=shared.AdditionalRate(
        change_reason="corrupti",
        cost_center1="provident",
        cost_center2="distinctio",
        cost_center3="quibusdam",
        effective_date="unde",
        end_check_date="nulla",
        job="corrupti",
        rate=8472.52,
        rate_code="vel",
        rate_notes="error",
        rate_per="deserunt",
        shift="suscipit",
    ),
    company_id="iure",
    employee_id="magnam",
)
    
res = s.additional_rates.add_or_update_additional_rates(req, operations.AddOrUpdateAdditionalRatesSecurity(
    paylocity_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### additional_rates

* `add_or_update_additional_rates` - Add/update additional rates

### client_credentials

* `add_client_secret` - Obtain new client secret.

### company_codes

* `get_all_company_codes_and_descriptions_by_resource` - Get All Company Codes

### company_specific_schema

* `get_company_specific_open_api_documentation` - Get Company-Specific Open API Documentation

### custom_fields

* `get_all_custom_fields_by_category` - Get All Custom Fields

### direct_deposit

* `get_all_direct_deposit` - Get All Direct Deposit

### earnings

* `add_or_update_an_employee_earning` - Add/Update Earning
* `delete_earning_by_earning_code_and_start_date` - Delete Earning by Earning Code and Start Date
* `get_all_earnings` - Get All Earnings
* `get_earning_by_earning_code_and_start_date` - Get Earning by Earning Code and Start Date
* `get_earnings_by_earning_code` - Get Earnings by Earning Code

### emergency_contacts

* `add_or_update_emergency_contacts` - Add/update emergency contacts

### employee

* `add_employee` - Add new employee
* `get_all_employees` - Get all employees
* `get_employee` - Get employee
* `update_employee` - Update employee

### employee_benefit_setup

* `update_or_add_employee_benefit_setup` - Add/update employee's benefit setup

### employee_staging

* `add_new_employee_to_web_link` - Add new employee to Web Link

### local_taxes

* `add_local_tax` - Add new local tax
* `delete_local_tax_by_tax_code` - Delete local tax by tax code
* `get_all_local_taxes` - Get all local taxes
* `get_local_tax_by_tax_code` - Get local taxes by tax code

### non_primary_state_tax

* `add_or_update_non_primary_state_tax` - Add/update non-primary state tax

### pay_statements

* `gets_employee_pay_statement_detail_data_based_on_the_specified_year` - Get employee pay statement details data for the specified year.
* `gets_employee_pay_statement_detail_data_based_on_the_specified_year_and_check_date` - Get employee pay statement details data for the specified year and check date.
* `gets_employee_pay_statement_summary_data_based_on_the_specified_year` - Get employee pay statement summary data for the specified year.
* `gets_employee_pay_statement_summary_data_based_on_the_specified_year_and_check_date` - Get employee pay statement summary data for the specified year and check date.

### primary_state_tax

* `add_or_update_primary_state_tax` - Add/update primary state tax

### sensitive_data

* `add_or_update_sensitive_data` - Add/update sensitive data
* `get_sensitive_data` - Get sensitive data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
