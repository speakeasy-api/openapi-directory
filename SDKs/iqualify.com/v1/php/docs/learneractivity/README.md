# learnerActivity

### Available Operations

* [getOfferingsOfferingIdAnalyticsLearnersProgress](#getofferingsofferingidanalyticslearnersprogress) - Find learner progress in a specified offering
* [getOfferingsOfferingIdAnalyticsSocialNotes](#getofferingsofferingidanalyticssocialnotes) - Find shared social notes in an offering
* [getOfferingsOfferingIdAnalyticsUnitReactions](#getofferingsofferingidanalyticsunitreactions) - Find unit reactions
* [getUsersUserEmailOfferingsOfferingIdProgress](#getusersuseremailofferingsofferingidprogress) - Find learner's progress in a specified offering
* [getUsersUserEmailProgress](#getusersuseremailprogress) - Find learner's progress in offerings

## getOfferingsOfferingIdAnalyticsLearnersProgress

Responds with all learner progress in the offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsLearnersProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsLearnersProgressRequest();
    $request->offeringId = 'possimus';

    $response = $sdk->learnerActivity->getOfferingsOfferingIdAnalyticsLearnersProgress($request);

    if ($response->learnerProgressResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsSocialNotes

Responds with all shared social notes in a specified offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsSocialNotesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsSocialNotesRequest();
    $request->offeringId = 'aut';

    $response = $sdk->learnerActivity->getOfferingsOfferingIdAnalyticsSocialNotes($request);

    if ($response->socialNotesResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsUnitReactions

Responds with user reactions to units in a specified offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsUnitReactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsUnitReactionsRequest();
    $request->offeringId = 'quasi';

    $response = $sdk->learnerActivity->getOfferingsOfferingIdAnalyticsUnitReactions($request);

    if ($response->unitReactionsAnalyticsResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserEmailOfferingsOfferingIdProgress

Responds with the learner's progress in a specified offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserEmailOfferingsOfferingIdProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserEmailOfferingsOfferingIdProgressRequest();
    $request->offeringId = 'error';
    $request->userEmail = 'Margie_Boyer87@hotmail.com';

    $response = $sdk->learnerActivity->getUsersUserEmailOfferingsOfferingIdProgress($request);

    if ($response->getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserEmailProgress

Responds with the specified learner's progress in all offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserEmailProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserEmailProgressRequest();
    $request->userEmail = 'John60@yahoo.com';

    $response = $sdk->learnerActivity->getUsersUserEmailProgress($request);

    if ($response->learnerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
