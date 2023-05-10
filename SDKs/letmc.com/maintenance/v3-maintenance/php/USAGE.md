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