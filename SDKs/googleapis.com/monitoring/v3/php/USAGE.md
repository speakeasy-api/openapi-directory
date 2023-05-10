<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlertPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AlertStrategy;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannelStrategy;
use \OpenAPI\OpenAPI\Models\Shared\NotificationRateLimit;
use \OpenAPI\OpenAPI\Models\Shared\AlertPolicyCombinerEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\MetricAbsence;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\LogMatch;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringQueryLanguageCondition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricThresholdComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricThresholdEvaluationMissingDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForecastOptions;
use \OpenAPI\OpenAPI\Models\Shared\MutationRecord;
use \OpenAPI\OpenAPI\Models\Shared\Documentation;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsAlertPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->alertPolicy = new AlertPolicy();
    $request->alertPolicy->alertStrategy = new AlertStrategy();
    $request->alertPolicy->alertStrategy->autoClose = 'provident';
    $request->alertPolicy->alertStrategy->notificationChannelStrategy = [
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
    ];
    $request->alertPolicy->alertStrategy->notificationRateLimit = new NotificationRateLimit();
    $request->alertPolicy->alertStrategy->notificationRateLimit->period = 'quibusdam';
    $request->alertPolicy->combiner = AlertPolicyCombinerEnum::OR;
    $request->alertPolicy->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->alertPolicy->creationRecord = new MutationRecord();
    $request->alertPolicy->creationRecord->mutateTime = 'corrupti';
    $request->alertPolicy->creationRecord->mutatedBy = 'illum';
    $request->alertPolicy->displayName = 'vel';
    $request->alertPolicy->documentation = new Documentation();
    $request->alertPolicy->documentation->content = 'error';
    $request->alertPolicy->documentation->mimeType = 'deserunt';
    $request->alertPolicy->enabled = false;
    $request->alertPolicy->mutationRecord = new MutationRecord();
    $request->alertPolicy->mutationRecord->mutateTime = 'suscipit';
    $request->alertPolicy->mutationRecord->mutatedBy = 'iure';
    $request->alertPolicy->name = 'Raquel Bednar';
    $request->alertPolicy->notificationChannels = [
        'molestiae',
        'minus',
    ];
    $request->alertPolicy->userLabels = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->alertPolicy->validity = new Status();
    $request->alertPolicy->validity->code = 87129;
    $request->alertPolicy->validity->details = [
        [
            'ipsam' => 'repellendus',
        ],
        [
            'quo' => 'odit',
            'at' => 'at',
            'maiores' => 'molestiae',
            'quod' => 'quod',
        ],
        [
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
    ];
    $request->alertPolicy->validity->message = 'nam';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new MonitoringProjectsAlertPoliciesCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsAlertPoliciesCreate($request, $requestSecurity);

    if ($response->alertPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->