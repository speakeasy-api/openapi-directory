<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\GceInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->evaluationInput = new EvaluationInput();
    $request->evaluationInput->description = 'provident';
    $request->evaluationInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->evaluationInput->name = 'Doug Hoppe';
    $request->evaluationInput->resourceFilter = new ResourceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter = new GceInstanceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter->serviceAccounts = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->evaluationInput->resourceFilter->inclusionLabels = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->evaluationInput->resourceFilter->resourceIdPatterns = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->evaluationInput->resourceFilter->scopes = [
        'quis',
    ];
    $request->evaluationInput->resourceStatus = new ResourceStatus();
    $request->evaluationInput->resourceStatus->rulesNewerVersions = [
        'deserunt',
    ];
    $request->evaluationInput->resourceStatus->state = ResourceStatusStateEnum::STATE_UNSPECIFIED;
    $request->evaluationInput->ruleNames = [
        'repellendus',
        'sapiente',
    ];
    $request->evaluationInput->schedule = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->evaluationId = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->requestId = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->