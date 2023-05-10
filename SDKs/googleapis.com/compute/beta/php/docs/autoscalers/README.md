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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->filter = 'suscipit';
    $request->includeAllScopes = false;
    $request->key = 'natus';
    $request->maxResults = 749170;
    $request->oauthToken = 'eum';
    $request->orderBy = 'vero';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'magnam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'ullam';

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
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->autoscaler = 'accusantium';
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'dolor';
    $request->requestId = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'quasi';
    $request->zone = 'iure';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->autoscaler = 'maxime';
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'nihil';
    $request->zone = 'repellat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler = new Autoscaler();
    $request->autoscaler->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler->autoscalingPolicy->coolDownPeriodSec = 149448;
    $request->autoscaler->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::PREDICTIVE_METHOD_UNSPECIFIED;
    $request->autoscaler->autoscalingPolicy->cpuUtilization->utilizationTarget = 8681.26;
    $request->autoscaler->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 1624.93;
    $request->autoscaler->autoscalingPolicy->maxNumReplicas = 508315;
    $request->autoscaler->autoscalingPolicy->minNumReplicas = 615560;
    $request->autoscaler->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::OFF;
    $request->autoscaler->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 123820;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 779051;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 848009;
    $request->autoscaler->autoscalingPolicy->scaleDownControl->timeWindowSec = 864934;
    $request->autoscaler->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 807319;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 411397;
    $request->autoscaler->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 569101;
    $request->autoscaler->autoscalingPolicy->scaleInControl->timeWindowSec = 139972;
    $request->autoscaler->autoscalingPolicy->scalingSchedules = [
        'accusantium' => new AutoscalingPolicyScalingSchedule(),
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
    $request->autoscaler->status = AutoscalerStatusEnum::ERROR;
    $request->autoscaler->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler->target = 'dolores';
    $request->autoscaler->zone = 'quis';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'quis';
    $request->key = 'nesciunt';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'dolores';
    $request->requestId = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'vero';
    $request->zone = 'nostrum';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'perspiciatis';
    $request->filter = 'voluptatem';
    $request->key = 'porro';
    $request->maxResults = 164694;
    $request->oauthToken = 'blanditiis';
    $request->orderBy = 'error';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'rerum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'earum';
    $request->zone = 'modi';

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
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 679091;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::OPTIMIZE_AVAILABILITY;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 8642.82;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 7508.44;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 730122;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 964490;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ON;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 554242;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 398221;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 212390;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 209843;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 222443;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 186193;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 218749;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 944373;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'cum' => new AutoscalingPolicyScalingSchedule(),
        'voluptate' => new AutoscalingPolicyScalingSchedule(),
        'dignissimos' => new AutoscalingPolicyScalingSchedule(),
    ];
    $request->autoscaler1->creationTimestamp = 'reiciendis';
    $request->autoscaler1->description = 'amet';
    $request->autoscaler1->id = 'dolorum';
    $request->autoscaler1->kind = 'numquam';
    $request->autoscaler1->name = 'Melissa Bednar';
    $request->autoscaler1->recommendedSize = 311796;
    $request->autoscaler1->region = 'accusamus';
    $request->autoscaler1->scalingScheduleStatus = [
        'voluptatibus' => new ScalingScheduleStatus(),
        'voluptas' => new ScalingScheduleStatus(),
        'natus' => new ScalingScheduleStatus(),
    ];
    $request->autoscaler1->selfLink = 'eos';
    $request->autoscaler1->status = AutoscalerStatusEnum::ERROR;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'fugiat';
    $request->autoscaler1->zone = 'ab';
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->autoscalerQueryParameter = 'iusto';
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'asperiores';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'voluptate';
    $request->zone = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aspernatur',
        'perferendis',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'provident';
    $request->resource = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'similique';
    $request->zone = 'alias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->autoscaler1 = new Autoscaler();
    $request->autoscaler1->autoscalingPolicy = new AutoscalingPolicy();
    $request->autoscaler1->autoscalingPolicy->coolDownPeriodSec = 311860;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization = new AutoscalingPolicyCpuUtilization();
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum::NONE;
    $request->autoscaler1->autoscalingPolicy->cpuUtilization->utilizationTarget = 4254.51;
    $request->autoscaler1->autoscalingPolicy->customMetricUtilizations = [
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
        new AutoscalingPolicyCustomMetricUtilization(),
    ];
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization();
    $request->autoscaler1->autoscalingPolicy->loadBalancingUtilization->utilizationTarget = 8853.38;
    $request->autoscaler1->autoscalingPolicy->maxNumReplicas = 185636;
    $request->autoscaler1->autoscalingPolicy->minNumReplicas = 679880;
    $request->autoscaler1->autoscalingPolicy->mode = AutoscalingPolicyModeEnum::ONLY_UP;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl = new AutoscalingPolicyScaleDownControl();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->calculated = 456130;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->fixed = 687488;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->maxScaledDownReplicas->percent = 483409;
    $request->autoscaler1->autoscalingPolicy->scaleDownControl->timeWindowSec = 215507;
    $request->autoscaler1->autoscalingPolicy->scaleInControl = new AutoscalingPolicyScaleInControl();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas = new FixedOrPercent();
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->calculated = 788740;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->fixed = 947371;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->maxScaledInReplicas->percent = 229442;
    $request->autoscaler1->autoscalingPolicy->scaleInControl->timeWindowSec = 730856;
    $request->autoscaler1->autoscalingPolicy->scalingSchedules = [
        'numquam' => new AutoscalingPolicyScalingSchedule(),
        'enim' => new AutoscalingPolicyScalingSchedule(),
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
    $request->autoscaler1->status = AutoscalerStatusEnum::ERROR;
    $request->autoscaler1->statusDetails = [
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
        new AutoscalerStatusDetails(),
    ];
    $request->autoscaler1->target = 'pariatur';
    $request->autoscaler1->zone = 'soluta';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->autoscalerQueryParameter = 'totam';
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->key = 'dolores';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'qui';
    $request->zone = 'neque';

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
