# plan

## Overview

A plan is the set of actions and associated goals for a patient.

### Available Operations

* [fetchPatientPlanSummaries](#fetchpatientplansummaries) - List patient plan summaries
* [fetchPatientPlanSummary](#fetchpatientplansummary) - Get the plan summary for a patient
* [updatePatientPlanSummary](#updatepatientplansummary) - Update a plan summary

## fetchPatientPlanSummaries

Get a list of patient plan summaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientPlanSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientPlanSummariesIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientPlanSummariesRequest();
    $request->filterGroups = 'reprehenderit';
    $request->filterOrganization = 'est';
    $request->filterPatient = 'quis';
    $request->include = FetchPatientPlanSummariesIncludeEnum::PATIENT;

    $response = $sdk->plan->fetchPatientPlanSummaries($request);

    if ($response->fetchPatientPlanSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientPlanSummary

Get the plan summary for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientPlanSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientPlanSummaryIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientPlanSummaryRequest();
    $request->id = 'ecfef66e-f1ca-4a33-83c2-beb477373c8d';
    $request->include = FetchPatientPlanSummaryIncludeEnum::BUNDLES;

    $response = $sdk->plan->fetchPatientPlanSummary($request);

    if ($response->fetchPatientPlanSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePatientPlanSummary

Update a plan summary record for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePatientPlanSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePatientPlanSummaryRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceAttributesWindowOrder;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsActions;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsActionsData;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsActionsLinks;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundles;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundlesData;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundlesLinks;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsCurrentResults;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsCurrentResultsData;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsCurrentResultsLinks;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsPatient;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsPatientData;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsPatientLinks;
use \OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePatientPlanSummaryRequest();
    $request->updatePatientPlanSummaryRequestInput = new UpdatePatientPlanSummaryRequestInput();
    $request->updatePatientPlanSummaryRequestInput->data = new PatientPlanSummaryResourceInput();
    $request->updatePatientPlanSummaryRequestInput->data->attributes = new PatientPlanSummaryResourceAttributesInput();
    $request->updatePatientPlanSummaryRequestInput->data->attributes->critical = [
        'voluptatibus' => 'vel',
    ];
    $request->updatePatientPlanSummaryRequestInput->data->attributes->timeZone = 'magnam';
    $request->updatePatientPlanSummaryRequestInput->data->attributes->windowOrder = [
        new PatientPlanSummaryResourceAttributesWindowOrder(),
        new PatientPlanSummaryResourceAttributesWindowOrder(),
        new PatientPlanSummaryResourceAttributesWindowOrder(),
        new PatientPlanSummaryResourceAttributesWindowOrder(),
    ];
    $request->updatePatientPlanSummaryRequestInput->data->id = '57b36e3c04ad8c2224f2af38';
    $request->updatePatientPlanSummaryRequestInput->data->relationships = new PatientPlanSummaryResourceRelationships();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->actions = new PatientPlanSummaryResourceRelationshipsActions();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->actions->data = [
        new PatientPlanSummaryResourceRelationshipsActionsData(),
    ];
    $request->updatePatientPlanSummaryRequestInput->data->relationships->actions->links = new PatientPlanSummaryResourceRelationshipsActionsLinks();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->actions->links->related = 'facere';
    $request->updatePatientPlanSummaryRequestInput->data->relationships->bundles = new PatientPlanSummaryResourceRelationshipsBundles();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->bundles->data = [
        new PatientPlanSummaryResourceRelationshipsBundlesData(),
        new PatientPlanSummaryResourceRelationshipsBundlesData(),
        new PatientPlanSummaryResourceRelationshipsBundlesData(),
    ];
    $request->updatePatientPlanSummaryRequestInput->data->relationships->bundles->links = new PatientPlanSummaryResourceRelationshipsBundlesLinks();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->bundles->links->related = 'architecto';
    $request->updatePatientPlanSummaryRequestInput->data->relationships->currentResults = new PatientPlanSummaryResourceRelationshipsCurrentResults();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->currentResults->data = [
        new PatientPlanSummaryResourceRelationshipsCurrentResultsData(),
        new PatientPlanSummaryResourceRelationshipsCurrentResultsData(),
        new PatientPlanSummaryResourceRelationshipsCurrentResultsData(),
        new PatientPlanSummaryResourceRelationshipsCurrentResultsData(),
    ];
    $request->updatePatientPlanSummaryRequestInput->data->relationships->currentResults->links = new PatientPlanSummaryResourceRelationshipsCurrentResultsLinks();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->currentResults->links->related = 'quia';
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient = new PatientPlanSummaryResourceRelationshipsPatient();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient->data = new PatientPlanSummaryResourceRelationshipsPatientData();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient->data->id = 'c4310661-e963-449e-9cf9-e06e3a437000';
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient->data->type = 'officia';
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient->links = new PatientPlanSummaryResourceRelationshipsPatientLinks();
    $request->updatePatientPlanSummaryRequestInput->data->relationships->patient->links->related = 'recusandae';
    $request->updatePatientPlanSummaryRequestInput->data->type = PatientPlanSummaryResourceTypeEnum::PATIENT_PLAN_SUMMARY;
    $request->id = '6b6bc9b8-f759-4eac-95a9-741d31135296';

    $response = $sdk->plan->updatePatientPlanSummary($request);

    if ($response->updatePatientPlanSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
