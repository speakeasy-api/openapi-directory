# regionCommitments

### Available Operations

* [computeRegionCommitmentsAggregatedList](#computeregioncommitmentsaggregatedlist) - Retrieves an aggregated list of commitments by region.
* [computeRegionCommitmentsGet](#computeregioncommitmentsget) - Returns the specified commitment resource.
* [computeRegionCommitmentsInsert](#computeregioncommitmentsinsert) - Creates a commitment in the specified project using the data included in the request.
* [computeRegionCommitmentsList](#computeregioncommitmentslist) - Retrieves a list of commitments contained within the specified region.
* [computeRegionCommitmentsTestIamPermissions](#computeregioncommitmentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionCommitmentsUpdate](#computeregioncommitmentsupdate) - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.
* [computeRegionCommitmentsUpdateReservations](#computeregioncommitmentsupdatereservations) - Transfers GPUs or local SSDs between reservations within commitments.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'inventore';
    $request->filter = 'cupiditate';
    $request->includeAllScopes = false;
    $request->key = 'blanditiis';
    $request->maxResults = 917168;
    $request->oauthToken = 'saepe';
    $request->orderBy = 'animi';
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'unde';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->commitment = 'non';
    $request->fields = 'ut';
    $request->key = 'ipsa';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'occaecati';
    $request->region = 'corrupti';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'placeat';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commitment = new Commitment();
    $request->commitment->autoRenew = false;
    $request->commitment->category = CommitmentCategoryEnum::MACHINE;
    $request->commitment->creationTimestamp = 'accusantium';
    $request->commitment->description = 'labore';
    $request->commitment->endTimestamp = 'voluptatum';
    $request->commitment->id = 'nisi';
    $request->commitment->kind = 'pariatur';
    $request->commitment->licenseResource = new LicenseResourceCommitment();
    $request->commitment->licenseResource->amount = 'necessitatibus';
    $request->commitment->licenseResource->coresPerLicense = 'perferendis';
    $request->commitment->licenseResource->license = 'repellendus';
    $request->commitment->mergeSourceCommitments = [
        'aliquid',
        'repellendus',
    ];
    $request->commitment->name = 'Mr. Ethel Raynor';
    $request->commitment->plan = CommitmentPlanEnum::THIRTY_SIX_MONTH;
    $request->commitment->region = 'accusantium';
    $request->commitment->reservations = [
        new Reservation(),
    ];
    $request->commitment->resources = [
        new ResourceCommitment(),
        new ResourceCommitment(),
        new ResourceCommitment(),
        new ResourceCommitment(),
    ];
    $request->commitment->selfLink = 'totam';
    $request->commitment->splitSourceCommitment = 'fugiat';
    $request->commitment->startTimestamp = 'impedit';
    $request->commitment->status = CommitmentStatusEnum::CREATING;
    $request->commitment->statusMessage = 'explicabo';
    $request->commitment->type = CommitmentTypeEnum::GENERAL_PURPOSE_E2;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'dignissimos';
    $request->key = 'impedit';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'aliquid';
    $request->region = 'odio';
    $request->requestId = 'enim';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'harum';

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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'vero';
    $request->filter = 'eius';
    $request->key = 'optio';
    $request->maxResults = 958907;
    $request->oauthToken = 'porro';
    $request->orderBy = 'impedit';
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'cupiditate';
    $request->region = 'ab';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'veniam';

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

## computeRegionCommitmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sed',
        'modi',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'aut';
    $request->key = 'quae';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'hic';
    $request->region = 'non';
    $request->resource = 'minima';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'animi';

    $requestSecurity = new ComputeRegionCommitmentsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
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
    $request->commitment1->category = CommitmentCategoryEnum::CATEGORY_UNSPECIFIED;
    $request->commitment1->creationTimestamp = 'laborum';
    $request->commitment1->description = 'minus';
    $request->commitment1->endTimestamp = 'minima';
    $request->commitment1->id = 'neque';
    $request->commitment1->kind = 'debitis';
    $request->commitment1->licenseResource = new LicenseResourceCommitment();
    $request->commitment1->licenseResource->amount = 'quidem';
    $request->commitment1->licenseResource->coresPerLicense = 'quidem';
    $request->commitment1->licenseResource->license = 'suscipit';
    $request->commitment1->mergeSourceCommitments = [
        'corrupti',
        'odio',
    ];
    $request->commitment1->name = 'Mrs. Jeffery Gerlach II';
    $request->commitment1->plan = CommitmentPlanEnum::TWELVE_MONTH;
    $request->commitment1->region = 'ipsam';
    $request->commitment1->reservations = [
        new Reservation(),
        new Reservation(),
        new Reservation(),
    ];
    $request->commitment1->resources = [
        new ResourceCommitment(),
        new ResourceCommitment(),
        new ResourceCommitment(),
    ];
    $request->commitment1->selfLink = 'est';
    $request->commitment1->splitSourceCommitment = 'quod';
    $request->commitment1->startTimestamp = 'voluptates';
    $request->commitment1->status = CommitmentStatusEnum::NOT_YET_ACTIVE;
    $request->commitment1->statusMessage = 'non';
    $request->commitment1->type = CommitmentTypeEnum::ACCELERATOR_OPTIMIZED;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->commitmentPathParameter = 'provident';
    $request->fields = 'doloribus';
    $request->key = 'unde';
    $request->oauthToken = 'magni';
    $request->paths = [
        'id',
        'earum',
        'architecto',
        'nobis',
    ];
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'dolores';
    $request->region = 'nemo';
    $request->requestId = 'a';
    $request->updateMask = 'architecto';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'magnam';

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

## computeRegionCommitmentsUpdateReservations

Transfers GPUs or local SSDs between reservations within commitments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateReservationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionCommitmentsUpdateReservationsRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateReservationsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateReservationsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionCommitmentsUpdateReservationsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionCommitmentsUpdateReservationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionCommitmentsUpdateReservationsRequest = new RegionCommitmentsUpdateReservationsRequest();
    $request->regionCommitmentsUpdateReservationsRequest->reservations = [
        new Reservation(),
    ];
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nisi';
    $request->commitment = 'voluptatibus';
    $request->fields = 'est';
    $request->key = 'explicabo';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'quibusdam';
    $request->region = 'consequatur';
    $request->requestId = 'cumque';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeRegionCommitmentsUpdateReservationsSecurity();
    $requestSecurity->option1 = new ComputeRegionCommitmentsUpdateReservationsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionCommitments->computeRegionCommitmentsUpdateReservations($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
