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
use \OpenAPI\OpenAPI\Models\Operations\MaintenanceControllerCreateMaintenanceJobFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceIssueModel;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceDocumentModel;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceIssueModelIssuePriorityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MaintenanceControllerCreateMaintenanceJobFormRequest();
    $request->maintenanceIssueModel = new MaintenanceIssueModel();
    $request->maintenanceIssueModel->documents = [
        new MaintenanceDocumentModel(),
        new MaintenanceDocumentModel(),
        new MaintenanceDocumentModel(),
    ];
    $request->maintenanceIssueModel->externalID = 'provident';
    $request->maintenanceIssueModel->issueFault = 'distinctio';
    $request->maintenanceIssueModel->issueNotes = 'quibusdam';
    $request->maintenanceIssueModel->issuePriority = MaintenanceIssueModelIssuePriorityEnum::MEDIUM;
    $request->maintenanceIssueModel->issueTitle = 'nulla';
    $request->maintenanceIssueModel->propertyAddress1 = 'corrupti';
    $request->maintenanceIssueModel->propertyAddress2 = 'illum';
    $request->maintenanceIssueModel->propertyAddress3 = 'vel';
    $request->maintenanceIssueModel->propertyAddress4 = 'error';
    $request->maintenanceIssueModel->propertyCountry = 'deserunt';
    $request->maintenanceIssueModel->propertyPostcode = 'suscipit';
    $request->maintenanceIssueModel->reportedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');
    $request->maintenanceIssueModel->tenantEMailAddress = 'debitis';
    $request->maintenanceIssueModel->tenantForename = 'ipsa';
    $request->maintenanceIssueModel->tenantPhonePrimary = 'delectus';
    $request->maintenanceIssueModel->tenantPhoneSecondary = 'tempora';
    $request->maintenanceIssueModel->tenantPresenceRequested = false;
    $request->maintenanceIssueModel->tenantSurname = 'suscipit';
    $request->maintenanceIssueModel->tenantTitle = 'molestiae';
    $request->branchID = 'minus';
    $request->shortName = 'placeat';

    $response = $sdk->maintenanceController->maintenanceControllerCreateMaintenanceJobForm($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [maintenanceController](docs/maintenancecontroller/README.md)

* [maintenanceControllerCreateMaintenanceJobForm](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobform) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobJson](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobjson) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobRaw](docs/maintenancecontroller/README.md#maintenancecontrollercreatemaintenancejobraw) - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
