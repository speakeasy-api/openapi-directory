# regionAutoscalers

### Available Operations

* [computeRegionAutoscalersDelete](#computeregionautoscalersdelete) - Deletes the specified autoscaler.
* [computeRegionAutoscalersGet](#computeregionautoscalersget) - Returns the specified autoscaler.
* [computeRegionAutoscalersInsert](#computeregionautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeRegionAutoscalersList](#computeregionautoscalerslist) - Retrieves a list of autoscalers contained within the specified region.
* [computeRegionAutoscalersPatch](#computeregionautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionAutoscalersTestIamPermissions](#computeregionautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionAutoscalersUpdate](#computeregionautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

## computeRegionAutoscalersDelete

Deletes the specified autoscaler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->autoscaler = 'ullam';
    $request->callback = 'dolor';
    $request->fields = 'maxime';
    $request->key = 'amet';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'ullam';
    $request->region = 'molestiae';
    $request->requestId = 'architecto';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeRegionAutoscalersDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersGet

Returns the specified autoscaler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->autoscaler = 'recusandae';
    $request->callback = 'iusto';
    $request->fields = 'pariatur';
    $request->key = 'porro';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'voluptatum';
    $request->region = 'cum';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'excepturi';

    $requestSecurity = new ComputeRegionAutoscalersGetSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersGet($request, $requestSecurity);

    if ($response->autoscaler !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersInsert

Creates an autoscaler in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler = new Autoscaler();
    $request->autoscaler->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 255229;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 6845.98;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 6330.56;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 173429;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 81673;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ON;
    $request->autoscaler->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 770165;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 642021;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 90186;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->timeWindowSec = 142472;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 628558;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 289108;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 690507;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 679183;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'quibusdam' => new AutoscalingPolicyScalingSchedule(),
        'ipsam' => new AutoscalingPolicyScalingSchedule(),
        'provident' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler->creationTimestamp = 'omnis';
    $request->autoscaler->description = 'rem';
    $request->autoscaler->id = 'quos';
    $request->autoscaler->kind = 'beatae';
    $request->autoscaler->name = 'Steve Schroeder';
    $request->autoscaler->recommendedSize = 2624;
    $request->autoscaler->region = 'eligendi';
    $request->autoscaler->scalingScheduleStatus = [
        'iusto' => new ScalingScheduleStatus(),
        'eligendi' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler->selfLink = 'ullam';
    $request->autoscaler->status = AutoscalerStatusEnum::ACTIVE;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'esse';
    $request->autoscaler->zone = 'vero';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'accusamus';
    $request->key = 'vero';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'deleniti';
    $request->region = 'nobis';
    $request->requestId = 'excepturi';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'similique';

    $requestSecurity = new ComputeRegionAutoscalersInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersList

Retrieves a list of autoscalers contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'saepe';
    $request->filter = 'qui';
    $request->key = 'dolor';
    $request->maxResults = 572412;
    $request->oauthToken = 'ea';
    $request->orderBy = 'in';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'maiores';
    $request->region = 'itaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeRegionAutoscalersListSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersList($request, $requestSecurity);

    if ($response->regionAutoscalerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersPatch

Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 333937;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 5343.17;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 2965.94;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 818866;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 117902;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_SCALE_OUT;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 598720;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 646108;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 223636;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 428898;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 632913;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 435632;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 690865;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 125404;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'dolores' => new AutoscalingPolicyScalingSchedule(),
        'in' => new AutoscalingPolicyScalingSchedule(),
        'repudiandae' => new AutoscalingPolicyScalingSchedule(),
        'rerum' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'esse';
    $request->autoscaler1->description = 'accusantium';
    $request->autoscaler1->id = 'nihil';
    $request->autoscaler1->kind = 'similique';
    $request->autoscaler1->name = 'Elmer Ankunding';
    $request->autoscaler1->recommendedSize = 987890;
    $request->autoscaler1->region = 'officiis';
    $request->autoscaler1->scalingScheduleStatus = [
        'commodi' => new ScalingScheduleStatus(),
        'debitis' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'commodi';
    $request->autoscaler1->status = AutoscalerStatusEnum::ACTIVE;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'voluptate';
    $request->autoscaler1->zone = 'fugiat';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->autoscalerQueryParameter = 'pariatur';
    $request->callback = 'nobis';
    $request->fields = 'dolor';
    $request->key = 'distinctio';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'voluptatibus';
    $request->requestId = 'cum';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'occaecati';

    $requestSecurity = new ComputeRegionAutoscalersPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'repudiandae',
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'ipsa';
    $request->key = 'eveniet';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'alias';
    $request->region = 'occaecati';
    $request->resource = 'iusto';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeRegionAutoscalersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionAutoscalersUpdate

Updates an autoscaler in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersUpdateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionAutoscalersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionAutoscalersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 179531;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 4250.65;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 3816.27;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 111316;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 730863;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::OFF;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 840734;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 211596;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 11332;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 500161;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 494815;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 77760;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 267267;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 781356;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'perferendis' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'est';
    $request->autoscaler1->description = 'ipsum';
    $request->autoscaler1->id = 'temporibus';
    $request->autoscaler1->kind = 'perspiciatis';
    $request->autoscaler1->name = 'Nathaniel Dickinson';
    $request->autoscaler1->recommendedSize = 669987;
    $request->autoscaler1->region = 'totam';
    $request->autoscaler1->scalingScheduleStatus = [
        'maxime' => new ScalingScheduleStatus(),
        'adipisci' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'delectus';
    $request->autoscaler1->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'nostrum';
    $request->autoscaler1->zone = 'ad';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->autoscalerQueryParameter = 'possimus';
    $request->callback = 'harum';
    $request->fields = 'culpa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'officia';
    $request->region = 'quam';
    $request->requestId = 'placeat';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'a';

    $requestSecurity = new ComputeRegionAutoscalersUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionAutoscalersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionAutoscalers->computeRegionAutoscalersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
