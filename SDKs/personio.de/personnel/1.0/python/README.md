# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/personio.de/personnel/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteCompanyAttendancesIDRequest(
    id=548814,
)
    
res = s.delete_company_attendances_id_(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_company_attendances_id_` - This endpoint is responsible for deleting attendance data for the company employees.
* `delete_company_time_offs_id_` - This endpoint is responsible for deleting absence period data for the company employees.
* `get_company_attendances` - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* `get_company_employees` - List Employees
* `get_company_employees_employee_id_` - Show employee by ID
* `get_company_employees_employee_id_profile_picture_width_` - Show employee profile picture
* `get_company_time_off_types` - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* `get_company_time_offs` - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* `get_company_time_offs_id_` - Absence Period
* `patch_company_attendances_id_` - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* `post_company_attendances` - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* `post_company_employees` - Create an employee
* `post_company_time_offs` - This endpoint is responsible for adding absence data for the company employees.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
