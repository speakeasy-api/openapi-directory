# autoscalers

### Available Operations

* [computeAutoscalersAggregatedList](#computeautoscalersaggregatedlist) - Retrieves an aggregated list of autoscalers.
* [computeAutoscalersDelete](#computeautoscalersdelete) - Deletes the specified autoscaler.
* [computeAutoscalersGet](#computeautoscalersget) - Returns the specified autoscaler resource.
* [computeAutoscalersInsert](#computeautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeAutoscalersList](#computeautoscalerslist) - Retrieves a list of autoscalers contained within the specified zone.
* [computeAutoscalersPatch](#computeautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'provident';
    $request->filter = 'nam';
    $request->includeAllScopes = false;
    $request->key = 'id';
    $request->maxResults = 501324;
    $request->oauthToken = 'deleniti';
    $request->orderBy = 'sapiente';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'nisi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'omnis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->autoscaler = 'magnam';
    $request->callback = 'distinctio';
    $request->fields = 'id';
    $request->key = 'labore';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'natus';
    $request->requestId = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'aspernatur';
    $request->zone = 'architecto';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->autoscaler = 'ullam';
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'eum';
    $request->zone = 'dolor';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler = new Autoscaler();
    $request->autoscaler->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 141264;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 972.6;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 9840.43;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 891924;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 260341;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 537023;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 703889;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 447926;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 100226;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'repudiandae' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler->creationTimestamp = 'ullam';
    $request->autoscaler->description = 'expedita';
    $request->autoscaler->id = 'nihil';
    $request->autoscaler->kind = 'repellat';
    $request->autoscaler->name = 'Louis Turner Sr.';
    $request->autoscaler->recommendedSize = 508315;
    $request->autoscaler->region = 'natus';
    $request->autoscaler->scalingScheduleStatus = [
        'sunt' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler->selfLink = 'quo';
    $request->autoscaler->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'maxime';
    $request->autoscaler->zone = 'ea';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'ipsam';
    $request->requestId = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'eaque';
    $request->zone = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->filter = 'aut';
    $request->key = 'cumque';
    $request->maxResults = 359978;
    $request->oauthToken = 'hic';
    $request->orderBy = 'libero';
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'eaque';
    $request->zone = 'quis';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 179490;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 1709.86;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 4634.51;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 223924;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 874573;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ON;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 944120;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 928082;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 608253;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 704415;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'voluptatem' => new AutoscalingPolicyScalingSchedule(),
        'porro' => new AutoscalingPolicyScalingSchedule(),
        'consequuntur' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'blanditiis';
    $request->autoscaler1->description = 'error';
    $request->autoscaler1->id = 'eaque';
    $request->autoscaler1->kind = 'occaecati';
    $request->autoscaler1->name = 'Travis Zemlak';
    $request->autoscaler1->recommendedSize = 613966;
    $request->autoscaler1->region = 'dolorum';
    $request->autoscaler1->scalingScheduleStatus = [
        'pariatur' => new ScalingScheduleStatus(),
        'provident' => new ScalingScheduleStatus(),
        'nobis' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'libero';
    $request->autoscaler1->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'quos';
    $request->autoscaler1->zone = 'aliquid';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->autoscalerQueryParameter = 'dolor';
    $request->callback = 'qui';
    $request->fields = 'ipsum';
    $request->key = 'hic';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'dolorum';
    $request->zone = 'numquam';

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
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyScaleInControl;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 58029;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 4344.17;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 3117.96;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 881005;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 696344;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 377752;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 617658;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 179603;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 542499;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'fugiat' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'ab';
    $request->autoscaler1->description = 'soluta';
    $request->autoscaler1->id = 'dolorum';
    $request->autoscaler1->kind = 'iusto';
    $request->autoscaler1->name = 'Sonya Leuschke';
    $request->autoscaler1->recommendedSize = 714697;
    $request->autoscaler1->region = 'asperiores';
    $request->autoscaler1->scalingScheduleStatus = [
        'ipsum' => new ScalingScheduleStatus(),
        'voluptate' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'id';
    $request->autoscaler1->status = AutoscalerStatusEnum::PENDING;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'aspernatur';
    $request->autoscaler1->zone = 'perferendis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->autoscalerQueryParameter = 'accusamus';
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'minima';
    $request->requestId = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'alias';
    $request->zone = 'at';

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
