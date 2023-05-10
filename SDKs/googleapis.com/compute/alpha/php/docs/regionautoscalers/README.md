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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->autoscaler = 'voluptatem';
    $request->callback = 'quidem';
    $request->fields = 'molestiae';
    $request->key = 'odio';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'mollitia';
    $request->region = 'voluptas';
    $request->requestId = 'dolorem';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'fuga';

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
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->autoscaler = 'ab';
    $request->callback = 'ipsam';
    $request->fields = 'quia';
    $request->key = 'voluptate';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'accusantium';
    $request->region = 'et';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'illum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscaler = new Autoscaler();
    $request->autoscaler->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 416178;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 9688.41;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 8635.98;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 500181;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 860385;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 367184;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 916043;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 954348;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->timeWindowSec = 955112;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 748930;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 312368;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 353692;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 245640;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'perspiciatis' => new AutoscalingPolicyScalingSchedule(),
        'alias' => new AutoscalingPolicyScalingSchedule(),
        'quas' => new AutoscalingPolicyScalingSchedule(),
        'sint' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler->creationTimestamp = 'necessitatibus';
    $request->autoscaler->description = 'totam';
    $request->autoscaler->id = 'reprehenderit';
    $request->autoscaler->kind = 'inventore';
    $request->autoscaler->name = 'Jody Rogahn';
    $request->autoscaler->recommendedSize = 376350;
    $request->autoscaler->region = 'perspiciatis';
    $request->autoscaler->scalingScheduleStatus = [
        'tempore' => new ScalingScheduleStatus(),
        'facere' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler->selfLink = 'at';
    $request->autoscaler->selfLinkWithId = 'perspiciatis';
    $request->autoscaler->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'corrupti';
    $request->autoscaler->zone = 'corporis';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'iusto';
    $request->key = 'adipisci';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'quis';
    $request->region = 'pariatur';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'cupiditate';

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
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'rem';
    $request->filter = 'nostrum';
    $request->key = 'expedita';
    $request->maxResults = 879079;
    $request->oauthToken = 'quis';
    $request->orderBy = 'earum';
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'hic';
    $request->region = 'accusamus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'dolores';

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
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 472094;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::PREDICTIVE_METHOD_UNSPECIFIED;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 6525.92;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 1265.14;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 511098;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 122101;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 303695;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 267094;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 907650;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 210926;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 674604;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 180326;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 221934;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 234935;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'eius' => new AutoscalingPolicyScalingSchedule(),
        'id' => new AutoscalingPolicyScalingSchedule(),
        'eum' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'rem';
    $request->autoscaler1->description = 'eligendi';
    $request->autoscaler1->id = 'optio';
    $request->autoscaler1->kind = 'deleniti';
    $request->autoscaler1->name = 'Dr. Antonia Dicki';
    $request->autoscaler1->recommendedSize = 497740;
    $request->autoscaler1->region = 'dolores';
    $request->autoscaler1->scalingScheduleStatus = [
        'aliquid' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'quaerat';
    $request->autoscaler1->selfLinkWithId = 'temporibus';
    $request->autoscaler1->status = AutoscalerStatusEnum::ACTIVE;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'occaecati';
    $request->autoscaler1->zone = 'dicta';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->autoscalerQueryParameter = 'provident';
    $request->callback = 'illum';
    $request->fields = 'iste';
    $request->key = 'autem';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'adipisci';
    $request->region = 'tempore';
    $request->requestId = 'praesentium';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'perferendis';

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
        'excepturi',
    ];
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'error';
    $request->key = 'explicabo';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'in';
    $request->region = 'nam';
    $request->resource = 'ipsum';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 50259;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 6403.64;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 6258.27;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 625699;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 741747;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ON;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 647788;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 915685;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 449545;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 688951;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 115229;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 686314;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 371171;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 691711;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'alias' => new AutoscalingPolicyScalingSchedule(),
        'rem' => new AutoscalingPolicyScalingSchedule(),
        'placeat' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'dolore';
    $request->autoscaler1->description = 'repudiandae';
    $request->autoscaler1->id = 'consectetur';
    $request->autoscaler1->kind = 'perferendis';
    $request->autoscaler1->name = 'Claire Bergstrom';
    $request->autoscaler1->recommendedSize = 196242;
    $request->autoscaler1->region = 'ullam';
    $request->autoscaler1->scalingScheduleStatus = [
        'aliquam' => new ScalingScheduleStatus(),
        'error' => new ScalingScheduleStatus(),
        'deleniti' => new ScalingScheduleStatus(),
        'dolor' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'natus';
    $request->autoscaler1->selfLinkWithId = 'reiciendis';
    $request->autoscaler1->status = AutoscalerStatusEnum::ACTIVE;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'quidem';
    $request->autoscaler1->zone = 'dolorum';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->autoscalerQueryParameter = 'reprehenderit';
    $request->callback = 'nam';
    $request->fields = 'occaecati';
    $request->key = 'quasi';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'aut';
    $request->region = 'neque';
    $request->requestId = 'dicta';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'quos';

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
