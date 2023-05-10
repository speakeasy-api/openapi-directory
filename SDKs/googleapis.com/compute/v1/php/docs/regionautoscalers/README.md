# regionAutoscalers

### Available Operations

* [computeRegionAutoscalersDelete](#computeregionautoscalersdelete) - Deletes the specified autoscaler.
* [computeRegionAutoscalersGet](#computeregionautoscalersget) - Returns the specified autoscaler.
* [computeRegionAutoscalersInsert](#computeregionautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeRegionAutoscalersList](#computeregionautoscalerslist) - Retrieves a list of autoscalers contained within the specified region.
* [computeRegionAutoscalersPatch](#computeregionautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->autoscaler = 'incidunt';
    $request->callback = 'eligendi';
    $request->fields = 'amet';
    $request->key = 'ipsum';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'occaecati';
    $request->region = 'iure';
    $request->requestId = 'libero';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'porro';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->autoscaler = 'adipisci';
    $request->callback = 'quam';
    $request->fields = 'fugit';
    $request->key = 'facere';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'non';
    $request->region = 'labore';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'deserunt';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 985654;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 5256.79;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 3405.4;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 770969;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 34342;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 816272;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 440355;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 675227;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 642610;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'suscipit' => new AutoscalingPolicyScalingSchedule(),
        'explicabo' => new AutoscalingPolicyScalingSchedule(),
        'recusandae' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler->creationTimestamp = 'unde';
    $request->autoscaler->description = 'iusto';
    $request->autoscaler->id = 'aspernatur';
    $request->autoscaler->kind = 'ea';
    $request->autoscaler->name = 'Dr. Lana Ritchie';
    $request->autoscaler->recommendedSize = 547694;
    $request->autoscaler->region = 'temporibus';
    $request->autoscaler->scalingScheduleStatus = [
        'voluptate' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler->selfLink = 'nobis';
    $request->autoscaler->status = AutoscalerStatusEnum::DELETING;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'cupiditate';
    $request->autoscaler->zone = 'cupiditate';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'expedita';
    $request->key = 'modi';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'accusantium';
    $request->region = 'recusandae';
    $request->requestId = 'saepe';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'quasi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'ducimus';
    $request->filter = 'similique';
    $request->key = 'expedita';
    $request->maxResults = 32843;
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'tempora';
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'inventore';
    $request->region = 'ducimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'autem';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 537518;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::OPTIMIZE_AVAILABILITY;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 8997.86;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 7050.59;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 898626;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 990912;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_SCALE_OUT;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 593578;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 466968;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 938917;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 244344;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'pariatur' => new AutoscalingPolicyScalingSchedule(),
        'voluptatem' => new AutoscalingPolicyScalingSchedule(),
        'quod' => new AutoscalingPolicyScalingSchedule(),
        'minus' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'pariatur';
    $request->autoscaler1->description = 'dolor';
    $request->autoscaler1->id = 'amet';
    $request->autoscaler1->kind = 'tenetur';
    $request->autoscaler1->name = 'Mildred Price';
    $request->autoscaler1->recommendedSize = 303365;
    $request->autoscaler1->region = 'voluptates';
    $request->autoscaler1->scalingScheduleStatus = [
        'voluptatum' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'aut';
    $request->autoscaler1->status = AutoscalerStatusEnum::ERROR;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'vitae';
    $request->autoscaler1->zone = 'ipsa';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->autoscalerQueryParameter = 'deleniti';
    $request->callback = 'eum';
    $request->fields = 'accusamus';
    $request->key = 'optio';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'provident';
    $request->region = 'officiis';
    $request->requestId = 'ipsa';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'dolor';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 43838;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 8062.61;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 7673.17;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 513307;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 927894;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::OFF;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 857075;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 196647;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 6100;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 915897;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'at' => new AutoscalingPolicyScalingSchedule(),
        'dolorem' => new AutoscalingPolicyScalingSchedule(),
        'sunt' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'ipsa';
    $request->autoscaler1->description = 'incidunt';
    $request->autoscaler1->id = 'maiores';
    $request->autoscaler1->kind = 'culpa';
    $request->autoscaler1->name = 'Ms. Charlotte Kessler';
    $request->autoscaler1->recommendedSize = 972620;
    $request->autoscaler1->region = 'sequi';
    $request->autoscaler1->scalingScheduleStatus = [
        'minima' => new ScalingScheduleStatus(),
        'libero' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'ut';
    $request->autoscaler1->status = AutoscalerStatusEnum::DELETING;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'quas';
    $request->autoscaler1->zone = 'aspernatur';
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->autoscalerQueryParameter = 'et';
    $request->callback = 'reiciendis';
    $request->fields = 'nulla';
    $request->key = 'libero';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'eum';
    $request->region = 'sint';
    $request->requestId = 'eveniet';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'consequuntur';

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
