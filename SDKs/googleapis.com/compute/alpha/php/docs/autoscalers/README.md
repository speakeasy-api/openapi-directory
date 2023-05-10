# autoscalers

### Available Operations

* [computeAutoscalersAggregatedList](#computeautoscalersaggregatedlist) - Retrieves an aggregated list of autoscalers.
* [computeAutoscalersDelete](#computeautoscalersdelete) - Deletes the specified autoscaler.
* [computeAutoscalersGet](#computeautoscalersget) - Returns the specified autoscaler resource.
* [computeAutoscalersInsert](#computeautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeAutoscalersList](#computeautoscalerslist) - Retrieves a list of autoscalers contained within the specified zone.
* [computeAutoscalersPatch](#computeautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeAutoscalersTestIamPermissions](#computeautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeAutoscalersUpdate](#computeautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

## computeAutoscalersAggregatedList

Retrieves an aggregated list of autoscalers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->filter = 'natus';
    $request->includeAllScopes = false;
    $request->key = 'nobis';
    $request->maxResults = 428769;
    $request->oauthToken = 'vero';
    $request->orderBy = 'aspernatur';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'provident';

    $requestSecurity = new ComputeAutoscalersAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersAggregatedList($request, $requestSecurity);

    if ($response->autoscalerAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersDelete

Deletes the specified autoscaler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->autoscaler = 'mollitia';
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'necessitatibus';
    $request->requestId = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'iure';
    $request->zone = 'doloribus';

    $requestSecurity = new ComputeAutoscalersDeleteSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersGet

Returns the specified autoscaler resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->autoscaler = 'deleniti';
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'repellat';
    $request->zone = 'quibusdam';

    $requestSecurity = new ComputeAutoscalersGetSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersGet($request, $requestSecurity);

    if ($response->autoscaler !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersInsert

Creates an autoscaler in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Autoscaler;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyLoadBalancingUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleDownControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScalingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatus;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetails;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetailsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscaler = new Autoscaler();
    $request->autoscaler->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 904648;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::STANDARD;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 375.59;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 5083.15;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 615560;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 166847;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::OFF;
    $request->autoscaler->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 779051;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 848009;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 864934;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->timeWindowSec = 807319;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 411397;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 569101;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 139972;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 407183;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'ab' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler->creationTimestamp = 'maiores';
    $request->autoscaler->description = 'quidem';
    $request->autoscaler->id = 'ipsam';
    $request->autoscaler->kind = 'voluptate';
    $request->autoscaler->name = 'Candice Beatty';
    $request->autoscaler->recommendedSize = 975522;
    $request->autoscaler->region = 'perferendis';
    $request->autoscaler->scalingScheduleStatus = [
        'amet' => new ScalingScheduleStatus(),
        'aut' => new ScalingScheduleStatus(),
        'cumque' => new ScalingScheduleStatus(),
        'corporis' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler->selfLink = 'hic';
    $request->autoscaler->selfLinkWithId = 'libero';
    $request->autoscaler->status = AutoscalerStatusEnum::ERROR;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'quis';
    $request->autoscaler->zone = 'totam';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'minus';
    $request->requestId = 'quam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'nostrum';
    $request->zone = 'hic';

    $requestSecurity = new ComputeAutoscalersInsertSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersList

Retrieves a list of autoscalers contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'voluptatem';
    $request->filter = 'porro';
    $request->key = 'consequuntur';
    $request->maxResults = 500026;
    $request->oauthToken = 'error';
    $request->orderBy = 'eaque';
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'adipisci';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'modi';
    $request->zone = 'iste';

    $requestSecurity = new ComputeAutoscalersListSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersList($request, $requestSecurity);

    if ($response->autoscalerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersPatch

Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Autoscaler;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyLoadBalancingUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleDownControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScalingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatus;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetails;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetailsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 535633;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::STANDARD;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 5899.1;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 7301.22;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 964490;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 311945;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_SCALE_OUT;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 398221;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 212390;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 209843;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 222443;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 186193;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 218749;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 944373;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 569574;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'voluptate' => new AutoscalingPolicyScalingSchedule(),
        'dignissimos' => new AutoscalingPolicyScalingSchedule(),
        'reiciendis' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'amet';
    $request->autoscaler1->description = 'dolorum';
    $request->autoscaler1->id = 'numquam';
    $request->autoscaler1->kind = 'veritatis';
    $request->autoscaler1->name = 'Angela Kerluke';
    $request->autoscaler1->recommendedSize = 881005;
    $request->autoscaler1->region = 'quidem';
    $request->autoscaler1->scalingScheduleStatus = [
        'voluptas' => new ScalingScheduleStatus(),
        'natus' => new ScalingScheduleStatus(),
        'eos' => new ScalingScheduleStatus(),
        'atque' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'sit';
    $request->autoscaler1->selfLinkWithId = 'fugiat';
    $request->autoscaler1->status = AutoscalerStatusEnum::ACTIVE;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'dolorum';
    $request->autoscaler1->zone = 'iusto';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->autoscalerQueryParameter = 'deleniti';
    $request->callback = 'omnis';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'ipsum';
    $request->requestId = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'eius';
    $request->zone = 'aspernatur';

    $requestSecurity = new ComputeAutoscalersPatchSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'optio',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'repellendus';
    $request->resource = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'at';
    $request->zone = 'quaerat';

    $requestSecurity = new ComputeAutoscalersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAutoscalersUpdate

Updates an autoscaler in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Autoscaler;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyLoadBalancingUtilization;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleDownControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScalingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatus;
use \OpenAPI\OpenAPI\Models\Shared\ScalingScheduleStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetails;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalerStatusDetailsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAutoscalersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAutoscalersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 425451;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::STANDARD;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 8853.38;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 6798.8;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 952792;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 456130;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_SCALE_OUT;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 483409;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 215507;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 788740;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 947371;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 229442;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 730856;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 880298;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 253941;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'dolorem' => new AutoscalingPolicyScalingSchedule(),
        'sapiente' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'totam';
    $request->autoscaler1->description = 'nihil';
    $request->autoscaler1->id = 'sit';
    $request->autoscaler1->kind = 'expedita';
    $request->autoscaler1->name = 'Jane Kassulke';
    $request->autoscaler1->recommendedSize = 646265;
    $request->autoscaler1->region = 'quam';
    $request->autoscaler1->scalingScheduleStatus = [
        'incidunt' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'qui';
    $request->autoscaler1->selfLinkWithId = 'cupiditate';
    $request->autoscaler1->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'soluta';
    $request->autoscaler1->zone = 'dicta';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->autoscalerQueryParameter = 'incidunt';
    $request->callback = 'aspernatur';
    $request->fields = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'quam';
    $request->requestId = 'molestias';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'neque';
    $request->zone = 'fugit';

    $requestSecurity = new ComputeAutoscalersUpdateSecurity();
    $requestSecurity->option1 = new ComputeAutoscalersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->autoscalers->computeAutoscalersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
