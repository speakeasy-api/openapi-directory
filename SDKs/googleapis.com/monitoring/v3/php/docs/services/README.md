# services

### Available Operations

* [monitoringServicesCreate](#monitoringservicescreate) - Create a Service.
* [monitoringServicesList](#monitoringserviceslist) - List Services for this Metrics Scope.
* [monitoringServicesServiceLevelObjectivesCreate](#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [monitoringServicesServiceLevelObjectivesDelete](#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [monitoringServicesServiceLevelObjectivesGet](#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [monitoringServicesServiceLevelObjectivesList](#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [monitoringServicesServiceLevelObjectivesPatch](#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

## monitoringServicesCreate

Create a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\AppEngine;
use \OpenAPI\OpenAPI\Models\Shared\BasicService;
use \OpenAPI\OpenAPI\Models\Shared\CloudEndpoints;
use \OpenAPI\OpenAPI\Models\Shared\CloudRun;
use \OpenAPI\OpenAPI\Models\Shared\ClusterIstio;
use \OpenAPI\OpenAPI\Models\Shared\GkeNamespaceInput;
use \OpenAPI\OpenAPI\Models\Shared\GkeServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\GkeWorkloadInput;
use \OpenAPI\OpenAPI\Models\Shared\IstioCanonicalService;
use \OpenAPI\OpenAPI\Models\Shared\MeshIstio;
use \OpenAPI\OpenAPI\Models\Shared\Telemetry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->appEngine = new AppEngine();
    $request->serviceInput->appEngine->moduleId = 'veritatis';
    $request->serviceInput->basicService = new BasicService();
    $request->serviceInput->basicService->serviceLabels = [
        'id' => 'quidem',
    ];
    $request->serviceInput->basicService->serviceType = 'neque';
    $request->serviceInput->cloudEndpoints = new CloudEndpoints();
    $request->serviceInput->cloudEndpoints->service = 'quo';
    $request->serviceInput->cloudRun = new CloudRun();
    $request->serviceInput->cloudRun->location = 'illum';
    $request->serviceInput->cloudRun->serviceName = 'quo';
    $request->serviceInput->clusterIstio = new ClusterIstio();
    $request->serviceInput->clusterIstio->clusterName = 'fuga';
    $request->serviceInput->clusterIstio->location = 'eius';
    $request->serviceInput->clusterIstio->serviceName = 'eos';
    $request->serviceInput->clusterIstio->serviceNamespace = 'voluptas';
    $request->serviceInput->custom = [
        'cupiditate' => 'consequatur',
    ];
    $request->serviceInput->displayName = 'tempora';
    $request->serviceInput->gkeNamespace = new GkeNamespaceInput();
    $request->serviceInput->gkeNamespace->clusterName = 'debitis';
    $request->serviceInput->gkeNamespace->location = 'ipsam';
    $request->serviceInput->gkeNamespace->namespaceName = 'aspernatur';
    $request->serviceInput->gkeService = new GkeServiceInput();
    $request->serviceInput->gkeService->clusterName = 'sequi';
    $request->serviceInput->gkeService->location = 'quo';
    $request->serviceInput->gkeService->namespaceName = 'esse';
    $request->serviceInput->gkeService->serviceName = 'recusandae';
    $request->serviceInput->gkeWorkload = new GkeWorkloadInput();
    $request->serviceInput->gkeWorkload->clusterName = 'aperiam';
    $request->serviceInput->gkeWorkload->location = 'distinctio';
    $request->serviceInput->gkeWorkload->namespaceName = 'quod';
    $request->serviceInput->gkeWorkload->topLevelControllerName = 'dignissimos';
    $request->serviceInput->gkeWorkload->topLevelControllerType = 'inventore';
    $request->serviceInput->istioCanonicalService = new IstioCanonicalService();
    $request->serviceInput->istioCanonicalService->canonicalService = 'nihil';
    $request->serviceInput->istioCanonicalService->canonicalServiceNamespace = 'totam';
    $request->serviceInput->istioCanonicalService->meshUid = 'accusamus';
    $request->serviceInput->meshIstio = new MeshIstio();
    $request->serviceInput->meshIstio->meshUid = 'aliquam';
    $request->serviceInput->meshIstio->serviceName = 'odio';
    $request->serviceInput->meshIstio->serviceNamespace = 'occaecati';
    $request->serviceInput->name = 'Miranda Daniel';
    $request->serviceInput->telemetry = new Telemetry();
    $request->serviceInput->telemetry->resourceName = 'accusantium';
    $request->serviceInput->userLabels = [
        'eum' => 'quas',
        'praesentium' => 'consequuntur',
        'deleniti' => 'fugit',
        'fuga' => 'mollitia',
    ];
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'minima';
    $request->key = 'nisi';
    $request->oauthToken = 'fugit';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->serviceId = 'ratione';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new MonitoringServicesCreateSecurity();
    $requestSecurity->option1 = new MonitoringServicesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesCreate($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesList

List Services for this Metrics Scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'eveniet';
    $request->filter = 'accusamus';
    $request->key = 'veritatis';
    $request->oauthToken = 'esse';
    $request->pageSize = 800379;
    $request->pageToken = 'nam';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new MonitoringServicesListSecurity();
    $requestSecurity->option1 = new MonitoringServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesServiceLevelObjectivesCreate

Create a ServiceLevelObjective for the given Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelObjective;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelObjectiveCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelIndicator;
use \OpenAPI\OpenAPI\Models\Shared\BasicSli;
use \OpenAPI\OpenAPI\Models\Shared\LatencyCriteria;
use \OpenAPI\OpenAPI\Models\Shared\RequestBasedSli;
use \OpenAPI\OpenAPI\Models\Shared\DistributionCut;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMonitoringV3Range;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesRatio;
use \OpenAPI\OpenAPI\Models\Shared\WindowsBasedSli;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesServiceLevelObjectivesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceLevelObjective = new ServiceLevelObjective();
    $request->serviceLevelObjective->calendarPeriod = ServiceLevelObjectiveCalendarPeriodEnum::QUARTER;
    $request->serviceLevelObjective->displayName = 'molestiae';
    $request->serviceLevelObjective->goal = 6996.22;
    $request->serviceLevelObjective->name = 'Warren Rau V';
    $request->serviceLevelObjective->rollingPeriod = 'tempore';
    $request->serviceLevelObjective->serviceLevelIndicator = new ServiceLevelIndicator();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli = new BasicSli();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->availability = [
        'cumque' => 'consequuntur',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->latency = new LatencyCriteria();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->latency->threshold = 'consequatur';
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->location = [
        'quaerat',
        'sapiente',
        'consectetur',
        'esse',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->method = [
        'provident',
        'a',
        'nulla',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->version = [
        'esse',
        'quasi',
        'a',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased = new RequestBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut = new DistributionCut();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->distributionFilter = 'error';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range->max = 5757.51;
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range->min = 8630.23;
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio = new TimeSeriesRatio();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->badServiceFilter = 'possimus';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->goodServiceFilter = 'quia';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->totalServiceFilter = 'eveniet';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased = new WindowsBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodBadMetricFilter = 'asperiores';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold = new PerformanceThreshold();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance = new BasicSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->availability = [
        'veritatis' => 'consequuntur',
        'quasi' => 'similique',
        'culpa' => 'aliquid',
        'tenetur' => 'quae',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->latency = new LatencyCriteria();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->latency->threshold = 'earum';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->location = [
        'in',
        'eius',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->method = [
        'illum',
        'soluta',
        'accusantium',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->version = [
        'sapiente',
        'dicta',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance = new RequestBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut = new DistributionCut();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->distributionFilter = 'ullam';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range->max = 4438.79;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range->min = 3567.07;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio = new TimeSeriesRatio();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->badServiceFilter = 'nisi';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->goodServiceFilter = 'aut';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->totalServiceFilter = 'voluptatum';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->threshold = 1852.32;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange = new MetricRange();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range->max = 8453.58;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range->min = 4012.59;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->timeSeries = 'deleniti';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange = new MetricRange();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range->max = 9292.92;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range->min = 6802.7;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->timeSeries = 'architecto';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->windowPeriod = 'omnis';
    $request->serviceLevelObjective->userLabels = [
        'quasi' => 'at',
        'et' => 'voluptate',
        'ipsa' => 'minima',
        'veritatis' => 'consectetur',
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'accusantium';
    $request->key = 'rem';
    $request->oauthToken = 'aut';
    $request->parent = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->serviceLevelObjectiveId = 'mollitia';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new MonitoringServicesServiceLevelObjectivesCreateSecurity();
    $requestSecurity->option1 = new MonitoringServicesServiceLevelObjectivesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesServiceLevelObjectivesCreate($request, $requestSecurity);

    if ($response->serviceLevelObjective !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesServiceLevelObjectivesDelete

Delete the given ServiceLevelObjective.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesServiceLevelObjectivesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'numquam';
    $request->force = false;
    $request->key = 'impedit';
    $request->name = 'Loretta Anderson DVM';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new MonitoringServicesServiceLevelObjectivesDeleteSecurity();
    $requestSecurity->option1 = new MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesServiceLevelObjectivesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesServiceLevelObjectivesGet

Get a ServiceLevelObjective by name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesServiceLevelObjectivesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'consequuntur';
    $request->key = 'repellendus';
    $request->name = 'Simon Kuhn';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';
    $request->view = MonitoringServicesServiceLevelObjectivesGetViewEnum::EXPLICIT;

    $requestSecurity = new MonitoringServicesServiceLevelObjectivesGetSecurity();
    $requestSecurity->option1 = new MonitoringServicesServiceLevelObjectivesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesServiceLevelObjectivesGet($request, $requestSecurity);

    if ($response->serviceLevelObjective !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesServiceLevelObjectivesList

List the ServiceLevelObjectives for the given Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesServiceLevelObjectivesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'id';
    $request->filter = 'suscipit';
    $request->key = 'velit';
    $request->oauthToken = 'culpa';
    $request->pageSize = 665859;
    $request->pageToken = 'recusandae';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'ducimus';
    $request->view = MonitoringServicesServiceLevelObjectivesListViewEnum::FULL;

    $requestSecurity = new MonitoringServicesServiceLevelObjectivesListSecurity();
    $requestSecurity->option1 = new MonitoringServicesServiceLevelObjectivesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesServiceLevelObjectivesList($request, $requestSecurity);

    if ($response->listServiceLevelObjectivesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringServicesServiceLevelObjectivesPatch

Update the given ServiceLevelObjective.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelObjective;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelObjectiveCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLevelIndicator;
use \OpenAPI\OpenAPI\Models\Shared\BasicSli;
use \OpenAPI\OpenAPI\Models\Shared\LatencyCriteria;
use \OpenAPI\OpenAPI\Models\Shared\RequestBasedSli;
use \OpenAPI\OpenAPI\Models\Shared\DistributionCut;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMonitoringV3Range;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesRatio;
use \OpenAPI\OpenAPI\Models\Shared\WindowsBasedSli;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringServicesServiceLevelObjectivesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringServicesServiceLevelObjectivesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceLevelObjective = new ServiceLevelObjective();
    $request->serviceLevelObjective->calendarPeriod = ServiceLevelObjectiveCalendarPeriodEnum::WEEK;
    $request->serviceLevelObjective->displayName = 'possimus';
    $request->serviceLevelObjective->goal = 7065.75;
    $request->serviceLevelObjective->name = 'Leslie King';
    $request->serviceLevelObjective->rollingPeriod = 'assumenda';
    $request->serviceLevelObjective->serviceLevelIndicator = new ServiceLevelIndicator();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli = new BasicSli();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->availability = [
        'recusandae' => 'aliquid',
        'aperiam' => 'cum',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->latency = new LatencyCriteria();
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->latency->threshold = 'consectetur';
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->location = [
        'exercitationem',
        'earum',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->method = [
        'numquam',
        'doloribus',
        'suscipit',
        'reiciendis',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->basicSli->version = [
        'saepe',
        'necessitatibus',
        'dolore',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased = new RequestBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut = new DistributionCut();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->distributionFilter = 'sunt';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range->max = 9920.12;
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->distributionCut->range->min = 2415.45;
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio = new TimeSeriesRatio();
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->badServiceFilter = 'non';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->goodServiceFilter = 'amet';
    $request->serviceLevelObjective->serviceLevelIndicator->requestBased->goodTotalRatio->totalServiceFilter = 'beatae';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased = new WindowsBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodBadMetricFilter = 'dignissimos';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold = new PerformanceThreshold();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance = new BasicSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->availability = [
        'debitis' => 'consectetur',
        'corporis' => 'harum',
        'laboriosam' => 'ipsa',
        'voluptates' => 'libero',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->latency = new LatencyCriteria();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->latency->threshold = 'vitae';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->location = [
        'similique',
        'tempora',
        'aspernatur',
        'voluptas',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->method = [
        'voluptas',
        'minima',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->basicSliPerformance->version = [
        'dolorum',
        'adipisci',
        'minus',
    ];
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance = new RequestBasedSli();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut = new DistributionCut();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->distributionFilter = 'dolores';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range->max = 5039.34;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->distributionCut->range->min = 4492.92;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio = new TimeSeriesRatio();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->badServiceFilter = 'dolore';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->goodServiceFilter = 'aliquam';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->performance->goodTotalRatio->totalServiceFilter = 'officiis';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->goodTotalRatioThreshold->threshold = 8391.89;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange = new MetricRange();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range->max = 3518.7;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->range->min = 2377.42;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricMeanInRange->timeSeries = 'cum';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange = new MetricRange();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range = new GoogleMonitoringV3Range();
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range->max = 5023.89;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->range->min = 5553.61;
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->metricSumInRange->timeSeries = 'hic';
    $request->serviceLevelObjective->serviceLevelIndicator->windowsBased->windowPeriod = 'nesciunt';
    $request->serviceLevelObjective->userLabels = [
        'corrupti' => 'pariatur',
        'totam' => 'hic',
        'exercitationem' => 'nobis',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'reiciendis';
    $request->key = 'explicabo';
    $request->name = 'Johnathan Klein V';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->updateMask = 'sed';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new MonitoringServicesServiceLevelObjectivesPatchSecurity();
    $requestSecurity->option1 = new MonitoringServicesServiceLevelObjectivesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->monitoringServicesServiceLevelObjectivesPatch($request, $requestSecurity);

    if ($response->serviceLevelObjective !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
