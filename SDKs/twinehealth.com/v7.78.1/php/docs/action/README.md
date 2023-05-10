# action

## Overview

An action is an actionable item in a patient's plan.

### Available Operations

* [createAction](#createaction) - Create action
* [fetchAction](#fetchaction) - Get an action
* [updateAction](#updateaction) - Update an action

## createAction

Create a plan action

### Example Usage

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
    $request->data->attributes->thread = 'dolorem';
    $request->data->attributes->details = [
        'explicabo' => 'nobis',
        'enim' => 'omnis',
    ];
    $request->data->attributes->effectiveFrom = 'nemo';
    $request->data->attributes->effectiveTo = 'minima';
    $request->data->attributes->frequencyGoal = new ActionResourceAttributesFrequencyGoal();
    $request->data->attributes->frequencyGoal->weeks = new ActionResourceAttributesFrequencyGoalWeeks();
    $request->data->attributes->frequencyGoal->weeks->days = [
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::ZERO,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::THREE,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::FOUR,
    ];
    $request->data->attributes->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->data->attributes->intake = [
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
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
    ];
    $request->data->id = '739251aa-52c3-4f5a-9019-da1ffe78f097';
    $request->data->relationships = new ActionResourceRelationships();
    $request->data->relationships->plan = new ActionResourceRelationshipsPlan();
    $request->data->relationships->plan->data = new ActionResourceRelationshipsPlanData();
    $request->data->relationships->plan->data->id = 'b0074f15-471b-45e6-a13b-99d488e1e91e';
    $request->data->relationships->plan->data->type = 'incidunt';
    $request->data->relationships->plan->links = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->data->type = 'deserunt';

    $response = $sdk->action->createAction($request);

    if ($response->createActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAction

Get a health action from a patient's plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchActionRequest();
    $request->id = 'bd442698-02d5-402a-94bb-4f63c969e9a3';

    $response = $sdk->action->fetchAction($request);

    if ($response->fetchActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAction

Update a health action from a patient's plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionRequestInput;
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
    $request = new UpdateActionRequest();
    $request->updateActionRequestInput = new UpdateActionRequestInput();
    $request->updateActionRequestInput->data = new ActionResourceInput();
    $request->updateActionRequestInput->data->attributes = new ActionResourceAttributesInput();
    $request->updateActionRequestInput->data->attributes->thread = 'debitis';
    $request->updateActionRequestInput->data->attributes->details = [
        'dolorum' => 'in',
        'in' => 'illum',
        'maiores' => 'rerum',
        'dicta' => 'magnam',
    ];
    $request->updateActionRequestInput->data->attributes->effectiveFrom = 'cumque';
    $request->updateActionRequestInput->data->attributes->effectiveTo = 'facere';
    $request->updateActionRequestInput->data->attributes->frequencyGoal = new ActionResourceAttributesFrequencyGoal();
    $request->updateActionRequestInput->data->attributes->frequencyGoal->weeks = new ActionResourceAttributesFrequencyGoalWeeks();
    $request->updateActionRequestInput->data->attributes->frequencyGoal->weeks->days = [
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::TWO,
        ActionResourceAttributesFrequencyGoalWeeksDaysEnum::FOUR,
    ];
    $request->updateActionRequestInput->data->attributes->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->updateActionRequestInput->data->attributes->intake = [
        'occaecati' => 'enim',
    ];
    $request->updateActionRequestInput->data->attributes->metricRequired = false;
    $request->updateActionRequestInput->data->attributes->metrics = [
        new ActionMetric(),
        new ActionMetric(),
        new ActionMetric(),
        new ActionMetric(),
    ];
    $request->updateActionRequestInput->data->attributes->title = 'Dr.';
    $request->updateActionRequestInput->data->attributes->tracking = false;
    $request->updateActionRequestInput->data->attributes->type = ActionResourceAttributesTypeEnum::OTHER_LIFESTYLE;
    $request->updateActionRequestInput->data->attributes->windows = [
        new ActionWindow(),
        new ActionWindow(),
        new ActionWindow(),
    ];
    $request->updateActionRequestInput->data->id = '9ba88f3a-6699-4707-8ba4-469b6e214195';
    $request->updateActionRequestInput->data->relationships = new ActionResourceRelationships();
    $request->updateActionRequestInput->data->relationships->plan = new ActionResourceRelationshipsPlan();
    $request->updateActionRequestInput->data->relationships->plan->data = new ActionResourceRelationshipsPlanData();
    $request->updateActionRequestInput->data->relationships->plan->data->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';
    $request->updateActionRequestInput->data->relationships->plan->data->type = 'saepe';
    $request->updateActionRequestInput->data->relationships->plan->links = [
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
        'magni' => 'sunt',
        'quo' => 'illum',
    ];
    $request->updateActionRequestInput->data->type = 'pariatur';
    $request->id = 'c692601f-b576-4b0d-9f0d-30c5fbb25870';

    $response = $sdk->action->updateAction($request);

    if ($response->updateActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
