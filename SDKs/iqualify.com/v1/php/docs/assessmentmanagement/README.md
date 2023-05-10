# assessmentManagement

### Available Operations

* [deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId](#deleteofferingsofferingidassessmentsassessmentiddocumentsdocumentid) - Remove assessment document
* [deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId](#deleteofferingsofferingidusersuseremailassessmentsassessmentid) - Reset user's assessment to draft state
* [getOfferingsOfferingIdActivitiesOpenresponse](#getofferingsofferingidactivitiesopenresponse) - Find offering's activities
* [getOfferingsOfferingIdAssessments](#getofferingsofferingidassessments) - Find offering's assessments
* [getOfferingsOfferingIdLearnersPendingSubmission](#getofferingsofferingidlearnerspendingsubmission) - Find learners with assessments pending x days before due date within the specified offeringId
* [getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse](#getofferingsofferingidusersuseremailsubmissionsopenresponse) - Find learner's open response assessment submissions
* [patchOfferingsOfferingIdAssessmentsAssessmentId](#patchofferingsofferingidassessmentsassessmentid) - Update assessment details
* [patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail](#patchofferingsofferingidassessmentsassessmentiduseremail) - Update the due dates for a learner's quiz attempt

## deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId

Removes the assessment document file for a specified assessment in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest();
    $request->assessmentId = 'perferendis';
    $request->documentId = 'ipsam';
    $request->offeringId = 'repellendus';

    $response = $sdk->assessmentManagement->deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId

Resets the user's submitted assessment to a draft state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest();
    $request->assessmentId = 'sapiente';
    $request->offeringId = 'quo';
    $request->userEmail = 'Sarah.Strosin79@gmail.com';

    $response = $sdk->assessmentManagement->deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdActivitiesOpenresponse

Responds with the activities in a specific offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdActivitiesOpenresponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdActivitiesOpenresponseRequest();
    $request->offeringId = 'quod';

    $response = $sdk->assessmentManagement->getOfferingsOfferingIdActivitiesOpenresponse($request);

    if ($response->offeringActivitiesResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAssessments

Responds with all assessments in an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAssessmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAssessmentsRequest();
    $request->offeringId = 'esse';

    $response = $sdk->assessmentManagement->getOfferingsOfferingIdAssessments($request);

    if ($response->assessmentResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdLearnersPendingSubmission

Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdLearnersPendingSubmissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdLearnersPendingSubmissionRequest();
    $request->days = 'totam';
    $request->offeringId = 'porro';

    $response = $sdk->assessmentManagement->getOfferingsOfferingIdLearnersPendingSubmission($request);

    if ($response->assessmentPendingSubmissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse

Responds with open response assessment submissions by a learner in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest();
    $request->offeringId = 'dolorum';
    $request->userEmail = 'Minerva.Nikolaus@gmail.com';

    $response = $sdk->assessmentManagement->getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse($request);

    if ($response->assignments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOfferingsOfferingIdAssessmentsAssessmentId

Updates the assessment details for a specified assessment in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Assessment;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest();
    $request->assessment = new Assessment();
    $request->assessment->content = 'deleniti';
    $request->assessment->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-22T07:34:53.140Z');
    $request->assessment->markNumber = 'totam';
    $request->assessment->markType = 'beatae';
    $request->assessment->openDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T03:15:36.542Z');
    $request->assessmentId = 'modi';
    $request->offeringId = 'qui';

    $response = $sdk->assessmentManagement->patchOfferingsOfferingIdAssessmentsAssessmentId($request);

    if ($response->assessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail

Updates the due dates for a learner's quiz attempt specified by the assessmentId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest();
    $request->requestBody = new PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody();
    $request->requestBody->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-16T01:47:24.760Z');
    $request->assessmentId = 'esse';
    $request->offeringId = 'ipsum';
    $request->userEmail = 'Brianne61@yahoo.com';

    $response = $sdk->assessmentManagement->patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
