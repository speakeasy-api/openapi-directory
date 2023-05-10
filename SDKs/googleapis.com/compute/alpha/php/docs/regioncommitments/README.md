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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'eum';
    $request->filter = 'vitae';
    $request->includeAllScopes = false;
    $request->key = 'numquam';
    $request->maxResults = 645859;
    $request->oauthToken = 'tempora';
    $request->orderBy = 'velit';
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'laboriosam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'repudiandae';

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
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->commitment = 'esse';
    $request->fields = 'nesciunt';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'sunt';
    $request->region = 'rerum';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'quas';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfoAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationVmFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
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
    $request->commitment->category = CommitmentCategoryEnum::LICENSE;
    $request->commitment->creationTimestamp = 'doloremque';
    $request->commitment->description = 'amet';
    $request->commitment->endTimestamp = 'accusantium';
    $request->commitment->id = 'eum';
    $request->commitment->kind = 'commodi';
    $request->commitment->licenseResource = new LicenseResourceCommitment();
    $request->commitment->licenseResource->amount = 'doloremque';
    $request->commitment->licenseResource->coresPerLicense = 'asperiores';
    $request->commitment->licenseResource->license = 'doloremque';
    $request->commitment->mergeSourceCommitments = [
        'quaerat',
    ];
    $request->commitment->name = 'Lance Marvin';
    $request->commitment->plan = CommitmentPlanEnum::TWELVE_MONTH;
    $request->commitment->region = 'cumque';
    $request->commitment->reservations = [
        new Reservation(),
        new Reservation(),
    ];
    $request->commitment->resources = [
        new ResourceCommitment(),
        new ResourceCommitment(),
    ];
    $request->commitment->selfLink = 'eligendi';
    $request->commitment->selfLinkWithId = 'magni';
    $request->commitment->splitSourceCommitment = 'libero';
    $request->commitment->startTimestamp = 'sequi';
    $request->commitment->status = CommitmentStatusEnum::EXPIRED;
    $request->commitment->statusMessage = 'ratione';
    $request->commitment->type = CommitmentTypeEnum::COMPUTE_OPTIMIZED;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->fields = 'deleniti';
    $request->key = 'mollitia';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'ex';
    $request->region = 'magni';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'est';
    $request->userIp = 'dolorum';

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
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'voluptas';
    $request->filter = 'corporis';
    $request->key = 'eveniet';
    $request->maxResults = 178712;
    $request->oauthToken = 'aperiam';
    $request->orderBy = 'deleniti';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'quasi';
    $request->region = 'laboriosam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'ratione';

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
        'libero',
        'molestias',
        'dignissimos',
    ];
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'eum';
    $request->key = 'quia';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'iusto';
    $request->region = 'culpa';
    $request->resource = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'facere';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfoAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationVmFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
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
    $request->commitment1->category = CommitmentCategoryEnum::LICENSE;
    $request->commitment1->creationTimestamp = 'voluptatem';
    $request->commitment1->description = 'aliquid';
    $request->commitment1->endTimestamp = 'explicabo';
    $request->commitment1->id = 'sint';
    $request->commitment1->kind = 'quaerat';
    $request->commitment1->licenseResource = new LicenseResourceCommitment();
    $request->commitment1->licenseResource->amount = 'nostrum';
    $request->commitment1->licenseResource->coresPerLicense = 'beatae';
    $request->commitment1->licenseResource->license = 'magnam';
    $request->commitment1->mergeSourceCommitments = [
        'neque',
        'pariatur',
        'distinctio',
        'cupiditate',
    ];
    $request->commitment1->name = 'Dana Mohr';
    $request->commitment1->plan = CommitmentPlanEnum::THIRTY_SIX_MONTH;
    $request->commitment1->region = 'quidem';
    $request->commitment1->reservations = [
        new Reservation(),
        new Reservation(),
        new Reservation(),
        new Reservation(),
    ];
    $request->commitment1->resources = [
        new ResourceCommitment(),
    ];
    $request->commitment1->selfLink = 'libero';
    $request->commitment1->selfLinkWithId = 'vero';
    $request->commitment1->splitSourceCommitment = 'quos';
    $request->commitment1->startTimestamp = 'in';
    $request->commitment1->status = CommitmentStatusEnum::CREATING;
    $request->commitment1->statusMessage = 'molestiae';
    $request->commitment1->type = CommitmentTypeEnum::ACCELERATOR_OPTIMIZED;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->commitmentPathParameter = 'adipisci';
    $request->fields = 'doloribus';
    $request->key = 'dolore';
    $request->oauthToken = 'provident';
    $request->paths = [
        'mollitia',
        'laudantium',
        'labore',
    ];
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'minima';
    $request->region = 'mollitia';
    $request->requestId = 'sequi';
    $request->updateMask = 'eos';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'fugit';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfoAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationVmFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
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
        new Reservation(),
        new Reservation(),
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->commitment = 'error';
    $request->fields = 'quibusdam';
    $request->key = 'ab';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'officia';
    $request->region = 'voluptas';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'blanditiis';

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
