<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateActionRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoal;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoalWeeks;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetric;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidations;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidationsMaximum;
use \OpenAPI\OpenAPI\Models\Shared\ActionMetricValidationsMinimum;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceAttributesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionWindow;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationshipsPlan;
use \OpenAPI\OpenAPI\Models\Shared\ActionResourceRelationshipsPlanData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActionRequestInput();
    $request->data = new ActionResourceInput();
    $request->data->attributes = new ActionResourceAttributesInput();
    $request->data->attributes->thread = 'corrupti';
    $request->data->attributes->details = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->data->attributes->effectiveFrom = 'vel';
    $request->data->attributes->effectiveTo = 'error';
    $request->data->attributes->frequencyGoal = new ActionResourceAttributesFrequencyGoal();
    $request->data->attributes->frequencyGoal->weeks = new ActionResourceAttributesFrequencyGoalWeeks();
    $request->data->attributes->frequencyGoal->weeks->days = [
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::TWO,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::THREE,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::TWO,
    ];
    $request->data->attributes->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->data->attributes->intake = [
        'delectus' => 'tempora',
    ];
    $request->data->attributes->metricRequired = false;
    $request->data->attributes->metrics = [
        new ActionMetric(),
        new ActionMetric(),
    ];
    $request->data->attributes->title = 'Ms.';
    $request->data->attributes->tracking = false;
    $request->data->attributes->type = ActionResourceAttributesTypeEnum::OTHER_LIFESTYLE;
    $request->data->attributes->windows = [
        new ActionWindow(),
        new ActionWindow(),
        new ActionWindow(),
        new ActionWindow(),
    ];
    $request->data->id = 'c8796ed1-51a0-45df-82dd-f7cc78ca1ba9';
    $request->data->relationships = new ActionResourceRelationships();
    $request->data->relationships->plan = new ActionResourceRelationshipsPlan();
    $request->data->relationships->plan->data = new ActionResourceRelationshipsPlanData();
    $request->data->relationships->plan->data->id = '28fc8167-42cb-4739-a059-29396fea7596';
    $request->data->relationships->plan->data->type = 'saepe';
    $request->data->relationships->plan->links = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->data->type = 'dolores';

    $response = $sdk->action->createAction($request);

    if ($response->createActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->