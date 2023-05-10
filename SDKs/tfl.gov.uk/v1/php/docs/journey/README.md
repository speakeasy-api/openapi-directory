# journey

### Available Operations

* [journeyJourneyResults](#journeyjourneyresults) - Perform a Journey Planner search from the parameters specified in simple types
* [journeyMeta](#journeymeta) - Gets a list of all of the available journey planner modes

## journeyJourneyResults

Perform a Journey Planner search from the parameters specified in simple types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsAccessibilityPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsBikeProficiencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsCyclePreferenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsJourneyPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsTimeIsEnum;
use \OpenAPI\OpenAPI\Models\Operations\JourneyJourneyResultsWalkingSpeedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JourneyJourneyResultsRequest();
    $request->accessibilityPreference = [
        JourneyJourneyResultsAccessibilityPreferenceEnum::STEP_FREE_TO_VEHICLE,
        JourneyJourneyResultsAccessibilityPreferenceEnum::STEP_FREE_TO_VEHICLE,
        JourneyJourneyResultsAccessibilityPreferenceEnum::NO_REQUIREMENTS,
    ];
    $request->adjustment = 'nam';
    $request->alternativeCycle = false;
    $request->alternativeWalking = false;
    $request->applyHtmlMarkup = false;
    $request->bikeProficiency = [
        JourneyJourneyResultsBikeProficiencyEnum::MODERATE,
        JourneyJourneyResultsBikeProficiencyEnum::EASY,
        JourneyJourneyResultsBikeProficiencyEnum::MODERATE,
    ];
    $request->calcOneDirection = false;
    $request->cyclePreference = JourneyJourneyResultsCyclePreferenceEnum::CYCLE_HIRE;
    $request->date = 'optio';
    $request->from = 'totam';
    $request->fromName = 'beatae';
    $request->journeyPreference = JourneyJourneyResultsJourneyPreferenceEnum::LEAST_TIME;
    $request->maxTransferMinutes = 'molestiae';
    $request->maxWalkingMinutes = 'modi';
    $request->mode = [
        'impedit',
    ];
    $request->nationalSearch = false;
    $request->routeBetweenEntrances = false;
    $request->taxiOnlyTrip = false;
    $request->time = 'cum';
    $request->timeIs = JourneyJourneyResultsTimeIsEnum::ARRIVING;
    $request->to = 'ipsum';
    $request->toName = 'excepturi';
    $request->useMultiModalCall = false;
    $request->useRealTimeLiveArrivals = false;
    $request->via = 'aspernatur';
    $request->viaName = 'perferendis';
    $request->walkingOptimization = false;
    $request->walkingSpeed = JourneyJourneyResultsWalkingSpeedEnum::SLOW;

    $response = $sdk->journey->journeyJourneyResults($request);

    if ($response->tflApiPresentationEntitiesJourneyPlannerItineraryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## journeyMeta

Gets a list of all of the available journey planner modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->journey->journeyMeta();

    if ($response->tflApiPresentationEntitiesModes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
