# assessmentData

### Available Operations

* [getOfferingsOfferingIdAnalyticsActivitiesResponses](#getofferingsofferingidanalyticsactivitiesresponses) - Find open response activity attempts
* [getOfferingsOfferingIdAnalyticsMarksAssignments](#getofferingsofferingidanalyticsmarksassignments) - Find assessment marks
* [getOfferingsOfferingIdAnalyticsMarksQuizzes](#getofferingsofferingidanalyticsmarksquizzes) - Find quiz marks
* [getOfferingsOfferingIdAnalyticsSubmissionsAssignments](#getofferingsofferingidanalyticssubmissionsassignments) - Find submissions to assessments, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId](#getofferingsofferingidanalyticssubmissionsopenresponseassessmentid) - Find submissions to a specified open response assessment, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId](#getofferingsofferingidanalyticssubmissionsuseremailassignmentsassessmentid) - Find a learner's submission to a specified assessment, including marks if any

## getOfferingsOfferingIdAnalyticsActivitiesResponses

Responds with all learner activity attempts for open response activities in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest();
    $request->offeringId = 'corrupti';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsActivitiesResponses($request);

    if ($response->activityAttemptOpenResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsMarksAssignments

Responds with all learner assessment marks in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest();
    $request->offeringId = 'provident';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsMarksAssignments($request);

    if ($response->assignmentMarkResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsMarksQuizzes

Responds with all learner quiz marks in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest();
    $request->offeringId = 'distinctio';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsMarksQuizzes($request);

    if ($response->quizMarkResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsAssignments

Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest();
    $request->offeringId = 'quibusdam';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsSubmissionsAssignments($request);

    if ($response->assignmentMarkResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId

Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest();
    $request->assessmentId = 'unde';
    $request->offeringId = 'nulla';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId($request);

    if ($response->submissionMarkResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId

Responds with the learner's assessment submission and any marks for the submission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest();
    $request->assessmentId = 'corrupti';
    $request->offeringId = 'illum';
    $request->userEmail = 'Linda.Oberbrunner@yahoo.com';

    $response = $sdk->assessmentData->getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId($request);

    if ($response->submissionMarkResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
