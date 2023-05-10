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
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompanyAttendancesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompanyAttendancesIdRequest();
    $request->id = 548814;

    $response = $sdk->deleteCompanyAttendancesId($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteCompanyAttendancesId](docs/sdk/README.md#deletecompanyattendancesid) - This endpoint is responsible for deleting attendance data for the company employees.
* [deleteCompanyTimeOffsId](docs/sdk/README.md#deletecompanytimeoffsid) - This endpoint is responsible for deleting absence period data for the company employees.
* [getCompanyAttendances](docs/sdk/README.md#getcompanyattendances) - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* [getCompanyEmployees](docs/sdk/README.md#getcompanyemployees) - List Employees
* [getCompanyEmployeesEmployeeId](docs/sdk/README.md#getcompanyemployeesemployeeid) - Show employee by ID
* [getCompanyEmployeesEmployeeIdProfilePictureWidth](docs/sdk/README.md#getcompanyemployeesemployeeidprofilepicturewidth) - Show employee profile picture
* [getCompanyTimeOffTypes](docs/sdk/README.md#getcompanytimeofftypes) - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* [getCompanyTimeOffs](docs/sdk/README.md#getcompanytimeoffs) - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* [getCompanyTimeOffsId](docs/sdk/README.md#getcompanytimeoffsid) - Absence Period
* [patchCompanyAttendancesId](docs/sdk/README.md#patchcompanyattendancesid) - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* [postCompanyAttendances](docs/sdk/README.md#postcompanyattendances) - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* [postCompanyEmployees](docs/sdk/README.md#postcompanyemployees) - Create an employee
* [postCompanyTimeOffs](docs/sdk/README.md#postcompanytimeoffs) - This endpoint is responsible for adding absence data for the company employees.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
