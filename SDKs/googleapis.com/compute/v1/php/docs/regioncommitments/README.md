# regionCommitments

### Available Operations

* [computeRegionCommitmentsAggregatedList](#computeregioncommitmentsaggregatedlist) - Retrieves an aggregated list of commitments by region.
* [computeRegionCommitmentsGet](#computeregioncommitmentsget) - Returns the specified commitment resource.
* [computeRegionCommitmentsInsert](#computeregioncommitmentsinsert) - Creates a commitment in the specified project using the data included in the request.
* [computeRegionCommitmentsList](#computeregioncommitmentslist) - Retrieves a list of commitments contained within the specified region.
* [computeRegionCommitmentsUpdate](#computeregioncommitmentsupdate) - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.

## computeRegionCommitmentsAggregatedList

Retrieves an aggregated list of commitments by region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'placeat';
    $request->filter = 'dignissimos';
    $request->includeAllScopes = false;
    $request->key = 'quibusdam';
    $request->maxResults = 812753;
    $request->oauthToken = 'natus';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'doloribus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'at';

    $requestSecurity = new ComputeRegionCommitmentsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsAggregatedList($request, $requestSecurity);

    if ($response->commitmentAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionCommitmentsGet

Returns the specified commitment resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->commitment = 'ea';
    $request->fields = 'aspernatur';
    $request->key = 'consequatur';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'et';
    $request->region = 'dolor';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'nesciunt';

    $requestSecurity = new ComputeRegionCommitmentsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsGet($request, $requestSecurity);

    if ($response->commitment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionCommitmentsInsert

Creates a commitment in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Commitment;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseResourceCommitment;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\Reservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCommitment;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCommitmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commitment = new Commitment();
    $request->commitment->autoRenew = false;
    $request->commitment->category = CommitmentCategoryEnum::MACHINE;
    $request->commitment->creationTimestamp = 'tenetur';
    $request->commitment->description = 'sequi';
    $request->commitment->endTimestamp = 'temporibus';
    $request->commitment->id = 'cum';
    $request->commitment->kind = 'sit';
    $request->commitment->licenseResource = new LicenseResourceCommitment();
    $request->commitment->licenseResource->amount = 'magni';
    $request->commitment->licenseResource->coresPerLicense = 'aspernatur';
    $request->commitment->licenseResource->license = 'earum';
    $request->commitment->mergeSourceCommitments = [
        'id',
        'exercitationem',
        'commodi',
    ];
    $request->commitment->name = 'Lucia Predovic';
    $request->commitment->plan = CommitmentPlanEnum::THIRTY_SIX_MONTH;
    $request->commitment->region = 'veniam';
    $request->commitment->reservations = [
        new Reservation(),
    ];
    $request->commitment->resources = [
        new ResourceCommitment(),
        new ResourceCommitment(),
        new ResourceCommitment(),
        new ResourceCommitment(),
    ];
    $request->commitment->selfLink = 'nam';
    $request->commitment->splitSourceCommitment = 'libero';
    $request->commitment->startTimestamp = 'perspiciatis';
    $request->commitment->status = CommitmentStatusEnum::NOT_YET_ACTIVE;
    $request->commitment->statusMessage = 'dolor';
    $request->commitment->type = CommitmentTypeEnum::GENERAL_PURPOSE_N2;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'corrupti';
    $request->key = 'ducimus';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'fugit';
    $request->region = 'labore';
    $request->requestId = 'neque';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'error';

    $requestSecurity = new ComputeRegionCommitmentsInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionCommitmentsList

Retrieves a list of commitments contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'soluta';
    $request->fields = 'neque';
    $request->filter = 'perferendis';
    $request->key = 'vero';
    $request->maxResults = 569569;
    $request->oauthToken = 'dicta';
    $request->orderBy = 'iure';
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'alias';
    $request->region = 'asperiores';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'alias';

    $requestSecurity = new ComputeRegionCommitmentsListSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsList($request, $requestSecurity);

    if ($response->commitmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionCommitmentsUpdate

Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Commitment;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseResourceCommitment;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\Reservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCommitment;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCommitmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commitment1 = new Commitment();
    $request->commitment1->autoRenew = false;
    $request->commitment1->category = CommitmentCategoryEnum::MACHINE;
    $request->commitment1->creationTimestamp = 'voluptatum';
    $request->commitment1->description = 'libero';
    $request->commitment1->endTimestamp = 'quasi';
    $request->commitment1->id = 'quidem';
    $request->commitment1->kind = 'soluta';
    $request->commitment1->licenseResource = new LicenseResourceCommitment();
    $request->commitment1->licenseResource->amount = 'exercitationem';
    $request->commitment1->licenseResource->coresPerLicense = 'exercitationem';
    $request->commitment1->licenseResource->license = 'similique';
    $request->commitment1->mergeSourceCommitments = [
        'unde',
    ];
    $request->commitment1->name = 'Karla Armstrong';
    $request->commitment1->plan = CommitmentPlanEnum::INVALID;
    $request->commitment1->region = 'libero';
    $request->commitment1->reservations = [
        new Reservation(),
        new Reservation(),
        new Reservation(),
    ];
    $request->commitment1->resources = [
        new ResourceCommitment(),
        new ResourceCommitment(),
    ];
    $request->commitment1->selfLink = 'quaerat';
    $request->commitment1->splitSourceCommitment = 'aliquam';
    $request->commitment1->startTimestamp = 'laboriosam';
    $request->commitment1->status = CommitmentStatusEnum::CANCELLED;
    $request->commitment1->statusMessage = 'labore';
    $request->commitment1->type = CommitmentTypeEnum::MEMORY_OPTIMIZED_M3;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->commitmentPathParameter = 'voluptatem';
    $request->fields = 'non';
    $request->key = 'ipsum';
    $request->oauthToken = 'laudantium';
    $request->paths = [
        'facilis',
        'consequatur',
        'assumenda',
    ];
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'libero';
    $request->region = 'rerum';
    $request->requestId = 'architecto';
    $request->updateMask = 'in';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'saepe';

    $requestSecurity = new ComputeRegionCommitmentsUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
