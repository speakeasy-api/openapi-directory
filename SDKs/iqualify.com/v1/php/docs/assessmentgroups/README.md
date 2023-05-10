# assessmentGroups

### Available Operations

* [deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail](#deleteofferingsofferingidgroupsgroupidlearnersuseremail) - Remove a learner from an assessment group
* [getOfferingsOfferingIdGroups](#getofferingsofferingidgroups) - Find assessment groups
* [getOfferingsOfferingIdGroupsGroupIdLearners](#getofferingsofferingidgroupsgroupidlearners) - Find learners in an assessment group
* [postOfferingsOfferingIdGroups](#postofferingsofferingidgroups) - Add an assessment group
* [postOfferingsOfferingIdGroupsGroupIdLearners](#postofferingsofferingidgroupsgroupidlearners) - Add a learner to an assessment group

## deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail

Removes a learner from the specified assessment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest();
    $request->groupId = 'magnam';
    $request->offeringId = 'debitis';
    $request->userEmail = 'Vincenzo.Goldner@gmail.com';

    $response = $sdk->assessmentGroups->deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdGroups

Responds with a list of assessment groups in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdGroupsRequest();
    $request->offeringId = 'minus';

    $response = $sdk->assessmentGroups->getOfferingsOfferingIdGroups($request);

    if ($response->assessmentGroupResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdGroupsGroupIdLearners

Responds with a list of learners in a specified assessment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdGroupsGroupIdLearnersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdGroupsGroupIdLearnersRequest();
    $request->groupId = 'placeat';
    $request->offeringId = 'voluptatum';

    $response = $sdk->assessmentGroups->getOfferingsOfferingIdGroupsGroupIdLearners($request);

    if ($response->userResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdGroups

Creates a new assessment group in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentGroupRequired;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdGroupsRequest();
    $request->assessmentGroupRequired = new AssessmentGroupRequired();
    $request->assessmentGroupRequired->title = 'Ms.';
    $request->offeringId = 'excepturi';

    $response = $sdk->assessmentGroups->postOfferingsOfferingIdGroups($request);

    if ($response->assessmentGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdGroupsGroupIdLearners

Adds a learner into the specified assessment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdGroupsGroupIdLearnersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdGroupsGroupIdLearnersRequest();
    $request->requestBody = new PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody();
    $request->requestBody->email = 'Tianna33@yahoo.com';
    $request->groupId = 'veritatis';
    $request->offeringId = 'deserunt';

    $response = $sdk->assessmentGroups->postOfferingsOfferingIdGroupsGroupIdLearners($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
