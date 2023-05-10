# maintenanceController

### Available Operations

* [maintenanceControllerCreateMaintenanceJobForm](#maintenancecontrollercreatemaintenancejobform) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobJson](#maintenancecontrollercreatemaintenancejobjson) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobRaw](#maintenancecontrollercreatemaintenancejobraw) - Create a maintenance job for a specific branch

## maintenanceControllerCreateMaintenanceJobForm

Create a maintenance job for a specific branch

### Example Usage

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
    $request->maintenanceIssueModel->externalID = 'iusto';
    $request->maintenanceIssueModel->issueFault = 'excepturi';
    $request->maintenanceIssueModel->issueNotes = 'nisi';
    $request->maintenanceIssueModel->issuePriority = MaintenanceIssueModelIssuePriorityEnum::HIGH;
    $request->maintenanceIssueModel->issueTitle = 'temporibus';
    $request->maintenanceIssueModel->propertyAddress1 = 'ab';
    $request->maintenanceIssueModel->propertyAddress2 = 'quis';
    $request->maintenanceIssueModel->propertyAddress3 = 'veritatis';
    $request->maintenanceIssueModel->propertyAddress4 = 'deserunt';
    $request->maintenanceIssueModel->propertyCountry = 'perferendis';
    $request->maintenanceIssueModel->propertyPostcode = 'ipsam';
    $request->maintenanceIssueModel->reportedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-17T21:57:45.117Z');
    $request->maintenanceIssueModel->tenantEMailAddress = 'quo';
    $request->maintenanceIssueModel->tenantForename = 'odit';
    $request->maintenanceIssueModel->tenantPhonePrimary = 'at';
    $request->maintenanceIssueModel->tenantPhoneSecondary = 'at';
    $request->maintenanceIssueModel->tenantPresenceRequested = false;
    $request->maintenanceIssueModel->tenantSurname = 'maiores';
    $request->maintenanceIssueModel->tenantTitle = 'molestiae';
    $request->branchID = 'quod';
    $request->shortName = 'quod';

    $response = $sdk->maintenanceController->maintenanceControllerCreateMaintenanceJobForm($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## maintenanceControllerCreateMaintenanceJobJson

Create a maintenance job for a specific branch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MaintenanceControllerCreateMaintenanceJobJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceIssueModel;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceDocumentModel;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceIssueModelIssuePriorityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MaintenanceControllerCreateMaintenanceJobJsonRequest();
    $request->maintenanceIssueModel = new MaintenanceIssueModel();
    $request->maintenanceIssueModel->documents = [
        new MaintenanceDocumentModel(),
        new MaintenanceDocumentModel(),
    ];
    $request->maintenanceIssueModel->externalID = 'totam';
    $request->maintenanceIssueModel->issueFault = 'porro';
    $request->maintenanceIssueModel->issueNotes = 'dolorum';
    $request->maintenanceIssueModel->issuePriority = MaintenanceIssueModelIssuePriorityEnum::LOW;
    $request->maintenanceIssueModel->issueTitle = 'nam';
    $request->maintenanceIssueModel->propertyAddress1 = 'officia';
    $request->maintenanceIssueModel->propertyAddress2 = 'occaecati';
    $request->maintenanceIssueModel->propertyAddress3 = 'fugit';
    $request->maintenanceIssueModel->propertyAddress4 = 'deleniti';
    $request->maintenanceIssueModel->propertyCountry = 'hic';
    $request->maintenanceIssueModel->propertyPostcode = 'optio';
    $request->maintenanceIssueModel->reportedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');
    $request->maintenanceIssueModel->tenantEMailAddress = 'commodi';
    $request->maintenanceIssueModel->tenantForename = 'molestiae';
    $request->maintenanceIssueModel->tenantPhonePrimary = 'modi';
    $request->maintenanceIssueModel->tenantPhoneSecondary = 'qui';
    $request->maintenanceIssueModel->tenantPresenceRequested = false;
    $request->maintenanceIssueModel->tenantSurname = 'impedit';
    $request->maintenanceIssueModel->tenantTitle = 'cum';
    $request->branchID = 'esse';
    $request->shortName = 'ipsum';

    $response = $sdk->maintenanceController->maintenanceControllerCreateMaintenanceJobJson($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## maintenanceControllerCreateMaintenanceJobRaw

Create a maintenance job for a specific branch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MaintenanceControllerCreateMaintenanceJobRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MaintenanceControllerCreateMaintenanceJobRawRequest();
    $request->requestBody = 'excepturi';
    $request->branchID = 'aspernatur';
    $request->shortName = 'perferendis';

    $response = $sdk->maintenanceController->maintenanceControllerCreateMaintenanceJobRaw($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
