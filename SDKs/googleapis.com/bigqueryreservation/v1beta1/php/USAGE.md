<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentRenewalPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->capacityCommitmentInput = new CapacityCommitmentInput();
    $request->capacityCommitmentInput->failureStatus = new Status();
    $request->capacityCommitmentInput->failureStatus->code = 592845;
    $request->capacityCommitmentInput->failureStatus->details = [
        [
            'unde' => 'nulla',
            'corrupti' => 'illum',
            'vel' => 'error',
            'deserunt' => 'suscipit',
        ],
        [
            'magnam' => 'debitis',
            'ipsa' => 'delectus',
        ],
        [
            'suscipit' => 'molestiae',
            'minus' => 'placeat',
        ],
    ];
    $request->capacityCommitmentInput->failureStatus->message = 'voluptatum';
    $request->capacityCommitmentInput->multiRegionAuxiliary = false;
    $request->capacityCommitmentInput->plan = CapacityCommitmentPlanEnum::TRIAL;
    $request->capacityCommitmentInput->renewalPlan = CapacityCommitmentRenewalPlanEnum::TRIAL;
    $request->capacityCommitmentInput->slotCount = 'nisi';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->capacityCommitmentId = 'quis';
    $request->enforceSingleAdminProjectPerOrg = false;
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsCapacityCommitmentsCreate($request, $requestSecurity);

    if ($response->capacityCommitment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->