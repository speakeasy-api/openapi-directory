# futureReservations

### Available Operations

* [computeFutureReservationsAggregatedList](#computefuturereservationsaggregatedlist) - Retrieves an aggregated list of future reservations.
* [computeFutureReservationsCancel](#computefuturereservationscancel) - Cancel the specified future reservation.
* [computeFutureReservationsDelete](#computefuturereservationsdelete) - Deletes the specified future reservation.
* [computeFutureReservationsGet](#computefuturereservationsget) - Retrieves information about the specified future reservation.
* [computeFutureReservationsInsert](#computefuturereservationsinsert) - Creates a new Future Reservation.
* [computeFutureReservationsList](#computefuturereservationslist) - A list of all the future reservations that have been configured for the specified project in specified zone.
* [computeFutureReservationsUpdate](#computefuturereservationsupdate) - Updates the specified future reservation.

## computeFutureReservationsAggregatedList

Retrieves an aggregated list of future reservations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'accusamus';
    $request->filter = 'ab';
    $request->includeAllScopes = false;
    $request->key = 'itaque';
    $request->maxResults = 790305;
    $request->oauthToken = 'eaque';
    $request->orderBy = 'alias';
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'vitae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeFutureReservationsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsAggregatedList($request, $requestSecurity);

    if ($response->futureReservationsAggregatedListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsCancel

Cancel the specified future reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'similique';
    $request->futureReservation = 'eligendi';
    $request->key = 'tempore';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'nobis';
    $request->requestId = 'asperiores';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'id';
    $request->userIp = 'atque';
    $request->zone = 'quibusdam';

    $requestSecurity = new ComputeFutureReservationsCancelSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsCancel($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsDelete

Deletes the specified future reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'provident';
    $request->futureReservation = 'vero';
    $request->key = 'earum';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'alias';
    $request->requestId = 'doloremque';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'quam';
    $request->zone = 'atque';

    $requestSecurity = new ComputeFutureReservationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsGet

Retrieves information about the specified future reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'laborum';
    $request->futureReservation = 'veritatis';
    $request->key = 'quod';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'totam';
    $request->zone = 'tenetur';

    $requestSecurity = new ComputeFutureReservationsGetSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsGet($request, $requestSecurity);

    if ($response->futureReservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsInsert

Creates a new Future Reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservation;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationPlanningStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationSpecificSKUProperties;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatus;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatusProcurementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatusSpecificSKUProperties;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->futureReservation = new FutureReservation();
    $request->futureReservation->creationTimestamp = 'quam';
    $request->futureReservation->description = 'quod';
    $request->futureReservation->id = 'vitae';
    $request->futureReservation->kind = 'sapiente';
    $request->futureReservation->name = 'Dr. Jermaine Klein';
    $request->futureReservation->namePrefix = 'fuga';
    $request->futureReservation->planningStatus = FutureReservationPlanningStatusEnum::DRAFT;
    $request->futureReservation->selfLink = 'ex';
    $request->futureReservation->selfLinkWithId = 'consectetur';
    $request->futureReservation->shareSettings = new ShareSettings();
    $request->futureReservation->shareSettings->folderMap = [
        'sed' => new ShareSettingsFolderConfig(),
        'animi' => new ShareSettingsFolderConfig(),
        'sequi' => new ShareSettingsFolderConfig(),
        'eligendi' => new ShareSettingsFolderConfig(),
    ];
    $request->futureReservation->shareSettings->projectMap = [
        'perferendis' => new ShareSettingsProjectConfig(),
        'laborum' => new ShareSettingsProjectConfig(),
        'omnis' => new ShareSettingsProjectConfig(),
    ];
    $request->futureReservation->shareSettings->projects = [
        'tenetur',
        'sapiente',
    ];
    $request->futureReservation->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->futureReservation->specificSkuProperties = new FutureReservationSpecificSKUProperties();
    $request->futureReservation->specificSkuProperties->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->futureReservation->specificSkuProperties->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->futureReservation->specificSkuProperties->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->futureReservation->specificSkuProperties->instanceProperties->locationHint = 'optio';
    $request->futureReservation->specificSkuProperties->instanceProperties->machineType = 'illum';
    $request->futureReservation->specificSkuProperties->instanceProperties->maintenanceFreezeDurationHours = 870183;
    $request->futureReservation->specificSkuProperties->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::RECURRENT;
    $request->futureReservation->specificSkuProperties->instanceProperties->minCpuPlatform = 'molestias';
    $request->futureReservation->specificSkuProperties->sourceInstanceTemplate = 'ipsam';
    $request->futureReservation->specificSkuProperties->totalCount = 'esse';
    $request->futureReservation->status = new FutureReservationStatus();
    $request->futureReservation->status->autoCreatedReservations = [
        'perspiciatis',
        'voluptates',
        'eum',
    ];
    $request->futureReservation->status->fulfilledCount = 'quasi';
    $request->futureReservation->status->lockTime = 'quas';
    $request->futureReservation->status->procurementStatus = FutureReservationStatusProcurementStatusEnum::FAILED;
    $request->futureReservation->status->specificSkuProperties = new FutureReservationStatusSpecificSKUProperties();
    $request->futureReservation->status->specificSkuProperties->sourceInstanceTemplateId = 'commodi';
    $request->futureReservation->timeWindow = new FutureReservationTimeWindow();
    $request->futureReservation->timeWindow->duration = new Duration();
    $request->futureReservation->timeWindow->duration->nanos = 780789;
    $request->futureReservation->timeWindow->duration->seconds = 'aliquid';
    $request->futureReservation->timeWindow->endTime = 'mollitia';
    $request->futureReservation->timeWindow->startTime = 'quidem';
    $request->futureReservation->zone = 'explicabo';
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'natus';
    $request->key = 'illum';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'unde';
    $request->requestId = 'ut';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'doloribus';
    $request->zone = 'recusandae';

    $requestSecurity = new ComputeFutureReservationsInsertSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsList

A list of all the future reservations that have been configured for the specified project in specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'provident';
    $request->filter = 'dolor';
    $request->key = 'sint';
    $request->maxResults = 44252;
    $request->oauthToken = 'eaque';
    $request->orderBy = 'eum';
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'autem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'fugiat';
    $request->zone = 'doloremque';

    $requestSecurity = new ComputeFutureReservationsListSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsList($request, $requestSecurity);

    if ($response->futureReservationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFutureReservationsUpdate

Updates the specified future reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservation;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationPlanningStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationSpecificSKUProperties;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatus;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatusProcurementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationStatusSpecificSKUProperties;
use \OpenAPI\OpenAPI\Models\Shared\FutureReservationTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFutureReservationsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFutureReservationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->futureReservation1 = new FutureReservation();
    $request->futureReservation1->creationTimestamp = 'alias';
    $request->futureReservation1->description = 'velit';
    $request->futureReservation1->id = 'ullam';
    $request->futureReservation1->kind = 'quis';
    $request->futureReservation1->name = 'Paula Luettgen';
    $request->futureReservation1->namePrefix = 'cumque';
    $request->futureReservation1->planningStatus = FutureReservationPlanningStatusEnum::DRAFT;
    $request->futureReservation1->selfLink = 'totam';
    $request->futureReservation1->selfLinkWithId = 'iure';
    $request->futureReservation1->shareSettings = new ShareSettings();
    $request->futureReservation1->shareSettings->folderMap = [
        'est' => new ShareSettingsFolderConfig(),
        'fugit' => new ShareSettingsFolderConfig(),
        'veritatis' => new ShareSettingsFolderConfig(),
        'necessitatibus' => new ShareSettingsFolderConfig(),
    ];
    $request->futureReservation1->shareSettings->projectMap = [
        'dicta' => new ShareSettingsProjectConfig(),
        'ipsam' => new ShareSettingsProjectConfig(),
        'consequuntur' => new ShareSettingsProjectConfig(),
    ];
    $request->futureReservation1->shareSettings->projects = [
        'quidem',
        'non',
        'beatae',
        'sunt',
    ];
    $request->futureReservation1->shareSettings->shareType = ShareSettingsShareTypeEnum::ORGANIZATION;
    $request->futureReservation1->specificSkuProperties = new FutureReservationSpecificSKUProperties();
    $request->futureReservation1->specificSkuProperties->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->futureReservation1->specificSkuProperties->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->futureReservation1->specificSkuProperties->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->futureReservation1->specificSkuProperties->instanceProperties->locationHint = 'ducimus';
    $request->futureReservation1->specificSkuProperties->instanceProperties->machineType = 'libero';
    $request->futureReservation1->specificSkuProperties->instanceProperties->maintenanceFreezeDurationHours = 562065;
    $request->futureReservation1->specificSkuProperties->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::RECURRENT;
    $request->futureReservation1->specificSkuProperties->instanceProperties->minCpuPlatform = 'ipsum';
    $request->futureReservation1->specificSkuProperties->sourceInstanceTemplate = 'impedit';
    $request->futureReservation1->specificSkuProperties->totalCount = 'quos';
    $request->futureReservation1->status = new FutureReservationStatus();
    $request->futureReservation1->status->autoCreatedReservations = [
        'distinctio',
        'voluptatem',
        'non',
        'quaerat',
    ];
    $request->futureReservation1->status->fulfilledCount = 'consequatur';
    $request->futureReservation1->status->lockTime = 'laudantium';
    $request->futureReservation1->status->procurementStatus = FutureReservationStatusProcurementStatusEnum::PROCUREMENT_STATUS_UNSPECIFIED;
    $request->futureReservation1->status->specificSkuProperties = new FutureReservationStatusSpecificSKUProperties();
    $request->futureReservation1->status->specificSkuProperties->sourceInstanceTemplateId = 'commodi';
    $request->futureReservation1->timeWindow = new FutureReservationTimeWindow();
    $request->futureReservation1->timeWindow->duration = new Duration();
    $request->futureReservation1->timeWindow->duration->nanos = 843679;
    $request->futureReservation1->timeWindow->duration->seconds = 'consectetur';
    $request->futureReservation1->timeWindow->endTime = 'voluptas';
    $request->futureReservation1->timeWindow->startTime = 'quaerat';
    $request->futureReservation1->zone = 'earum';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'enim';
    $request->futureReservationPathParameter = 'ullam';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'alias';
    $request->paths = [
        'quibusdam',
        'dicta',
    ];
    $request->prettyPrint = false;
    $request->project = 'quia';
    $request->quotaUser = 'commodi';
    $request->requestId = 'neque';
    $request->updateMask = 'quibusdam';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'officiis';
    $request->zone = 'omnis';

    $requestSecurity = new ComputeFutureReservationsUpdateSecurity();
    $requestSecurity->option1 = new ComputeFutureReservationsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->futureReservations->computeFutureReservationsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
