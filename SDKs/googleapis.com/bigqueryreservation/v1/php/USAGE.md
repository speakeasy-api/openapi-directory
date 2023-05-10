<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentInput;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentEditionEnum;
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
    $request->capacityCommitmentInput->edition = CapacityCommitmentEditionEnum::ENTERPRISE;
    $request->capacityCommitmentInput->failureStatus = new Status();
    $request->capacityCommitmentInput->failureStatus->code = 715190;
    $request->capacityCommitmentInput->failureStatus->details = [
        [
            'nulla' => 'corrupti',
            'illum' => 'vel',
            'error' => 'deserunt',
        ],
        [
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->capacityCommitmentInput->failureStatus->message = 'veritatis';
    $request->capacityCommitmentInput->multiRegionAuxiliary = false;
    $request->capacityCommitmentInput->plan = CapacityCommitmentPlanEnum::ANNUAL;
    $request->capacityCommitmentInput->renewalPlan = CapacityCommitmentRenewalPlanEnum::COMMITMENT_PLAN_UNSPECIFIED;
    $request->capacityCommitmentInput->slotCount = 'ipsam';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->capacityCommitmentId = 'odit';
    $request->enforceSingleAdminProjectPerOrg = false;
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

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