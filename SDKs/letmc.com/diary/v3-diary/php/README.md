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
use \OpenAPI\OpenAPI\Models\Operations\CompanyControllerGetBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyControllerGetBranchesRequest();
    $request->count = 548814;
    $request->offset = 592845;
    $request->shortName = 'distinctio';

    $response = $sdk->companyController->companyControllerGetBranches($request);

    if ($response->advertisingBranchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companyController](docs/companycontroller/README.md)

* [companyControllerGetBranches](docs/companycontroller/README.md#companycontrollergetbranches) - All branches defined for a company
* [getV3DiaryShortNameCompanyBranchesBranchID](docs/companycontroller/README.md#getv3diaryshortnamecompanybranchesbranchid) - Get a specific branch given its unique Object ID (OID)

### [diaryController](docs/diarycontroller/README.md)

* [diaryControllerAddFeedbackForm](docs/diarycontroller/README.md#diarycontrolleraddfeedbackform) - Submit appointment feedback
* [diaryControllerAddFeedbackJson](docs/diarycontroller/README.md#diarycontrolleraddfeedbackjson) - Submit appointment feedback
* [diaryControllerAddFeedbackRaw](docs/diarycontroller/README.md#diarycontrolleraddfeedbackraw) - Submit appointment feedback
* [diaryControllerCancelAppointment](docs/diarycontroller/README.md#diarycontrollercancelappointment) - Cancel an existing appointment using its unique identifier
* [diaryControllerDeleteAppointment](docs/diarycontroller/README.md#diarycontrollerdeleteappointment) - Delete an existing appointment using its unique identifier
* [diaryControllerGetAllocations](docs/diarycontroller/README.md#diarycontrollergetallocations) - Get a list of all available allocations for a date + 7 days for a specified appointment type
* [diaryControllerGetAppointment](docs/diarycontroller/README.md#diarycontrollergetappointment) - Get an appointment by ID
* [diaryControllerGetAppointmentTypes](docs/diarycontroller/README.md#diarycontrollergetappointmenttypes) - A collection of all diary appointment types
* [diaryControllerGetAppointmentsBetweenDates](docs/diarycontroller/README.md#diarycontrollergetappointmentsbetweendates) - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* [diaryControllerGetRecurringAppointments](docs/diarycontroller/README.md#diarycontrollergetrecurringappointments) - Retrieves all recurring appointments:-
* [diaryControllerPostAppointmentForm](docs/diarycontroller/README.md#diarycontrollerpostappointmentform) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentJson](docs/diarycontroller/README.md#diarycontrollerpostappointmentjson) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentRaw](docs/diarycontroller/README.md#diarycontrollerpostappointmentraw) - Post an appointment into a valid diary allocation
* [diaryControllerPutAppointmentForm](docs/diarycontroller/README.md#diarycontrollerputappointmentform) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentJson](docs/diarycontroller/README.md#diarycontrollerputappointmentjson) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentRaw](docs/diarycontroller/README.md#diarycontrollerputappointmentraw) - Update an existing appointment using its unique identifier
* [diaryControllerSearchGuest](docs/diarycontroller/README.md#diarycontrollersearchguest) - Match Guest Parameters with existing applicants
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
