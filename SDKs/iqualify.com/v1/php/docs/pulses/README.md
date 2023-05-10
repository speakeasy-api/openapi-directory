# pulses

### Available Operations

* [getOfferingsOfferingIdAnalyticsPulses](#getofferingsofferingidanalyticspulses) - Find all pulse IDs in the specified offering
* [getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses](#getofferingsofferingidanalyticspulsespulseidresponses) - Find pulses by offeringId and pulseId

## getOfferingsOfferingIdAnalyticsPulses

Responds with the IDs of all pulses that learners have responded to in a specified offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsPulsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsPulsesRequest();
    $request->offeringId = 'perferendis';

    $response = $sdk->pulses->getOfferingsOfferingIdAnalyticsPulses($request);

    if ($response->getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses

Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest();
    $request->offeringId = 'nihil';
    $request->pulseId = 'magnam';

    $response = $sdk->pulses->getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses($request);

    if ($response->pulseResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
